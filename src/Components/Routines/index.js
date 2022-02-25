import { useState, useEffect } from 'react'
import './Routines.css';

import { getRoutines } from '../../api'
import { Activity, AddRoutine } from '..';

const Routine = ({routine}) => {
    const {
        activities,
        creatorId,
        creatorName,
        goal,
        isPublic,
        name,
    } = routine;

    return (
        <div className="routine">
            <div className='routine-header'>
                <h3>Routine Name: {name}</h3>
                <h4>Creator: {creatorName}</h4>
                <h4>Goal: {goal}</h4>
            </div>
            <div className='routine-activities'>
                {activities.map((activity, i) => {
                    return (
                        <Activity key={i} activity={activity} />
                    );
                })}
            </div>
        </div>
    )
}

const Routines = ({token, activities}) => {
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
            {token && <AddRoutine activities={activities} token={token}/>}
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
            