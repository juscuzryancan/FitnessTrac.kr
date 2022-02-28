import './SingleRoutine.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Routine } from '../';

const SingleRoutine = ({routines}) => {
	const [routine, setRoutine] = useState(null);
	const {routineId} = useParams();

	useEffect(() => {
		const routineToFind = routines.find((routine) => {
			return routine.id === routineId * 1;
		});
		setRoutine(routineToFind);
	}, [routines]);

	if(!routine) {
		return (
			<div>Loading...</div>
		);
	}

	return (
		<div className='single-routine'>
			<Routine routine={routine} />		
		</div>
	)
}

export default SingleRoutine;