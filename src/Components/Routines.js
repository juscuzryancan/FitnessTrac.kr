import { useState, useEffect } from 'react'

import {
    getRoutines
} from '../api'

const Routines = () => {
    const [routines, setRoutines] = useState([]);
    
    useEffect(() => {
        (async () => {
            const fetchedRoutines = await getRoutines();
            setRoutines(fetchedRoutines);
        })();
    }, [])
    
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
        }}>
        {routines.map(({ id, name, creatorName, goal, activities }) => {
            return (
                <Card
                variant="outlined"
                key={id}
                className="routine"
                sx={{
                    marginBottom: ['1em'],
                    mx: '.3em'
                }}
                >
                <CardContent>
                <Typography>Routine Name: {name}</Typography>
                <Typography>Routine Goal: {goal}</Typography>
                <Typography>Creator: {creatorName}</Typography>
                <Box>
                {activities.length > 0 && activities.map(({ count, duration, name: actName, description, id }) => {
                    return (
                        <Card className='activity' key={id}>
                        <Typography>Activity Name: {actName}</Typography>
                        <Typography>Activity Description: {description}</Typography>
                        <Typography>Count: {count}</Typography>
                        <Typography>Duration: {duration}</Typography>
                        </Card>
                        );
                    })}
                    </Box>
                    </CardContent>
                    </Card>
                    );
                })}
                </Box>
                );
}
            
export default Routines;
            