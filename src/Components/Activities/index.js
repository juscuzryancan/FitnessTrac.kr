import {useState, useEffect} from 'react';
import './Activities.css';

import {
    getActivities,
    createActivity
} from '../../api'

const Activities = (props) => {
    const { token, activities, setActivities } = props;
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [error, setError] = useState('');

    const handleName = (e) => {
        setNewName(e.target.value);
    }

    const handleDescription = (e) => {
        setNewDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const activity = await createActivity(token, newName, newDescription);
        if (activity.error) {
            setError(activity.error);
            return;
        }
        setNewName('');
        setNewDescription('');
        const newActivities = [...activities, activity];
        setActivities(newActivities);
    }

return (
        <>
        {(error) && <div>{error}</div>}
        {token && 
            <form
                onSubmit={handleSubmit}>
                <input 
                    onChange={handleName}
                    value={newName} 
                    placeholder='Activity Name'/> 
                <input 
                    onChange={handleDescription}
                    value={newDescription} 
                    placeholder='Activity Description'/> 
                <button type='submit'>Submit</button>
            </form>}
        {
            activities.map(({id, name, description, duration, count}) => {
                return (
                    <div key={id}>
                        <h3>Activity: {name}</h3>
                        <div>Description: {description}</div>
                        <div>Duration: {duration}</div>
                        <div>Count: {count}</div>
                    </div>
                );
            })}
        </>
    );}

export default Activities;