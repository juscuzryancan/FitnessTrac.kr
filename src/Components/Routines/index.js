import { useState, useEffect } from 'react'
import './Routines.css';

import { getRoutines } from '../../api'

const Routine = ({routine}) => {
    const {
        activities,
        creatorId,
        creatorName,
        goal,
        isPublic,
        name,
    } = routine;
    console.log(activities);

    return (
        <div className="routine">
            <div className='routine-header'>
                <h3>Routine Name: {name}</h3>
                <h4>Creator: {creatorName}</h4>
                <h4>Goal: {goal}</h4>
            </div>
            <ul>
                {activities.map(({ count, description, duration, id, name }) => {
                    return (
                            <li key={id} className='routine-activity'>
                                <h3>Activity: {name}</h3>
                                <div>Description: {description}</div>
                                <div>Duration: {duration}</div>
                                <div>Count: {count}</div>
                            </li>
                    );
                })}
            </ul>
        </div>
    )
}

const Routines = () => {
    const [routines, setRoutines] = useState([]);
    
    const handleRoutines = async () => {
        const fetchedRoutines = await getRoutines();
        setRoutines(fetchedRoutines);
    }

    useEffect(() => {
        handleRoutines();
    }, [])

    
    return (
        <div className="routines">
            <h2>Routines</h2>
            {routines.length > 0 &&
                routines.map((routine) => {
                    return (
                        <Routine key={routine.id} routine={routine} />
                    );
                })}
        </div>
    );
}
            
export default Routines;
            