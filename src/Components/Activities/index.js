import {useState, useEffect} from 'react';
import './Activities.css';
import { Activity } from '..';

import {
    getActivities,
    createActivity
} from '../../api'

const Activities = (props) => {
    const { token, activities, setActivities } = props;
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [error, setError] = useState('');
    console.log(activities);

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
        <div className='activities'>
            {(error) && <div>{error}</div>}
            {token &&
                <form
                    onSubmit={handleSubmit}>
                    <input
                        onChange={handleName}
                        value={newName}
                        placeholder='Activity Name' />
                    <input
                        onChange={handleDescription}
                        value={newDescription}
                        placeholder='Activity Description' />
                    <button type='submit'>Submit</button>
                </form>}
            <h2>Activities</h2>
            {
                activities.length > 0 && activities.map((activity) => {
                    return (
                        <Activity key={activity.id} activity={activity} />
                    );
                })
            }
        </div>
    );
}

export default Activities;