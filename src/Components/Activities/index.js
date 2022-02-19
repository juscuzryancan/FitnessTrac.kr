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

    return (
        <div className='activities'>
            {token && <AddActivity activities={activities} setActivities={setActivities} token={token}/>}
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