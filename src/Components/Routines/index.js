import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Routines.css';

import { Activity, AddRoutine, Routine } from '..';

const Routines = ({token, activities, routines, setRoutines}) => {
    const navigate = useNavigate();
    
    return (
        <div className="routines">
            <h2>Routines</h2>
            {routines?.length > 0 &&
                routines.map((routine) => {
                    return (
                        <Routine key={routine.id} routine={routine} >
                            <button onClick={() => navigate(`/routines/${routine.id}`)}>View Routine</button>
                        </Routine>
                    );
                })}
        </div>
    );
}
            
export default Routines;