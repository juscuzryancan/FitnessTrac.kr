import { useState, useEffect } from 'react'
import './Routines.css';

import { Activity, AddRoutine, Routine } from '..';

const Routines = ({token, activities, routines, setRoutines}) => {
    
    return (
        <div className="routines">
            {token && <AddRoutine setRoutines={setRoutines} routines={routines} activities={activities} token={token}/>}
            <h2>Routines</h2>
            {routines?.length > 0 &&
                routines.map((routine) => {
                    return (
                        <Routine key={routine.id} routine={routine} />
                    );
                })}
        </div>
    );
}
            
export default Routines;
            