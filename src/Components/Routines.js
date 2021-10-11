import React, { useState, useEffect } from 'react'

import {
    getRoutines
} from '../api'

const Routines = () => {
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        (async () => {
            const fetchedRoutines = await getRoutines();
            console.log(fetchedRoutines);
            setRoutines(fetchedRoutines);
        })();
    }, [])

    return (
        <React.Fragment>
        {routines.map(({id, name, creatorName, goal, activities}) => {
            return (
                <div 
                    key={id}
                    className="routine">
                    <header>
                        <p>Routine Name: {name}</p>
                        <p>Routine Goal: {goal}</p>
                        <p>Creator: {creatorName}</p>
                    </header>
                    <main>
                        {activities.map(({count, duration, name: actName, description, id}) => {
                            return (
                                <div className='activity' key={id}>
                                    <p>Activity Name: {actName}</p>
                                    <p>Activity Description: {description}</p>
                                    <p>Count: {count}</p>
                                    <p>Duration: {duration}</p>
                                </div>
                            );
                        })}
                    </main>
                </div>
            );
        })}
        </ React.Fragment>
    );
}

export default Routines;
