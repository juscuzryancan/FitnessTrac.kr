import {useState} from 'react';
import axios from 'axios';
import { RoutineForm } from '../';

const AddRoutine = ({token, routines, setRoutines, activities, handleRoutines}) => {
	const blankRoutine = {
		name: "",
		goal: "",
		isPublic: false
	}
	const [error, setError] = useState("");
	const [routine, setRoutine] = useState(blankRoutine);

	const handleAdd = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/api/routines', routine, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			console.log(response);

			const {data} = response;
			if (data.success === false) {
				setError(data.message);
				return;
			}
			await handleRoutines();
			console.log(routines);
			setRoutine(blankRoutine);
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<>
			<h2>Add Routine</h2>
			{error && <div>{error}</div>}
			<RoutineForm routine={routine} setRoutine={setRoutine} handleSubmit={handleAdd} activities={activities}/>
		</>
	)
}

export default AddRoutine;