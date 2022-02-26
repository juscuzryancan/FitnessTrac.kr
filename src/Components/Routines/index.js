import { useState, useEffect } from 'react'
import './Routines.css';

import { getRoutines } from '../../api'
import { Activity, AddRoutine, Routine } from '..';

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
            {token && <AddRoutine routines={routines} activities={activities} token={token}/>}
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
            