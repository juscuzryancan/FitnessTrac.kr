import {useState, useEffect} from 'react';
import './styles.css';
import { Activity, AddActivity } from '../';
import axios from 'axios';

import {
    getActivities,
    createActivity
} from '../../api'

const Activities = ({token}) => {
    const [activities, setActivities] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        handleActivities();
    }, [])

    const handleActivities = async () => {
        try {
            const { data } = await axios.get('/api/activities')
            setActivities(data)
        } catch (error) {
            console.error(error);
        }
    }

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
            {token && <AddActivity token={token}/>}
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