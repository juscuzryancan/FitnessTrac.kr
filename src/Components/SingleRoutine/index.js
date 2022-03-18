import './SingleRoutine.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Routine } from '../';

const SingleRoutine = ({routines, activities}) => {
	const [routine, setRoutine] = useState(null);
	const {routineId} = useParams();
	console.log("routines in single routine", routines);
	console.log("single routine",routine);

	useEffect(() => {
		let routineToFind = routines.find((routine) => {
			return routine.id === routineId * 1;
		});
		if (!routineToFind) {
			routineToFind = userRoutines
		}
		console.log("routine in effect", routineToFind)
		setRoutine(routineToFind);
	}, [routines]);

	if(!routine) {
		return (
			<div>Loading...</div>
		);
	}


	const {name, creatorName, goal, activities: routineActivities} = routine;
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
				{routineActivities.map(({id, name}) => {
					return (
						<div key={id}>
							<div>{name}</div>
						</div>
					);
				})}
			</div>
			<form>
				<h2>Add Activity to this Routine</h2>
				<select>
				 	{activities.map((activity) => {
						 if(routineActivities.find((elem) => activity.id === elem.id)) {
							 return
						 }
						 return (
							<option value={activity.id} key={activity.id}>
								{activity.name}
							</option>
						 )
					 })}
				</select>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default SingleRoutine;