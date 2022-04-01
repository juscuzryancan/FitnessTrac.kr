import './SingleRoutine.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import { Routine } from '../';

const SingleRoutine = ({routines, activities, userRoutines, token}) => {
	const [routine, setRoutine] = useState(null);
	const [formData, setFormData] = useState(null);
	console.log(formData);
	const blankFormData = {
		activityId: -1,
		count: 0,
		duration: 0
	}
	const {routineId} = useParams();
	console.log("routines in single routine", routines);
	console.log("single routine",routine);

	useEffect(() => {
		setFormData(blankFormData)
	}, [])

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

	const handleAddActivityToRoutine = async (e) => {
		e.preventDefault();
		console.log("working")
		try {

		} catch (error) {
			console.error(error)
		}
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
				<Outlet />
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
			<form onSubmit={handleAddActivityToRoutine}>
				<h2>Add Activity to this Routine</h2>
				<select value={formData.activityId} onChange={(e) => setFormData({...formData, activityId: e.target.value})}>
					<option value={-1}>Select an Activity</option>
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
				<label>Count: </label>
				<input type="number" value={formData.count} onChange={(e) => setFormData({...formData, count: e.target.value})}/>
				<label>Duration: </label>
				<input type="number" value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})}/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default SingleRoutine;