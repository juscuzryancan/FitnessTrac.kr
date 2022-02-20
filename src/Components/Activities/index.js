import {useState, useEffect} from 'react';
import './styles.css';
import { Activity, AddActivity } from '../';
import axios from 'axios';

const Activities = ({token, activities, setActivities}) => {

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