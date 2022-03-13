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


	const {name, creatorName, goal, activities} = routine;
	return (
		<div className='single-routine'>
			<div className='routine-header'>
				<div>
					<h3>Routine Name: {name}</h3>
					<h4>Creator: {creatorName}</h4>
					<h4>Goal: {goal}</h4>
				</div>
				<div>
					<button>Edit Routine Name/Goal</button>
				</div>
			</div>
			<div className='routine-activities'>
				{activities.map(({name}) => {
					return (
						<div>
							<div>{name}</div>
						</div>
					);
				})}
			</div>
			<div>
				
			</div>
		</div>
	)
}

export default SingleRoutine;