import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Routines.css';

import { Activity, AddRoutine, Routine } from '..';

const Routines = ({token, activities, routines, setRoutines}) => {
    const navigate = useNavigate();
    
    return (
        <div className="routines">
            <h2>Routines</h2>
            {token && <h4>Create/Edit your own routine in <Link className="routines-link" to="/profile">My Account</Link></h4>}
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