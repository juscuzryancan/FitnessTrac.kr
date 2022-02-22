import {useState} from 'react';
import axios from 'axios';
import { RoutineForm } from '../';

const AddRoutine = ({token, routines, setRoutines}) => {
	const blankRoutine = {
		name: "",
		goal: ""
	}
	const [error, setError] = useState("");
	const [routine, setRoutine] = useState("");

	const handleAdd = async (e) => {
		e.preventDefault();
		try {
			const {data} = await axios.post('/api/routines', routine, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			if (data.success === false) {
				setError(data.message);
				return;
			}
			setRoutines([...routines, data]);
			setRoutine(blankRoutine);
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<>
			<h2>Add Routine</h2>
			{error && <div>{error}</div>}
			<RoutineForm routine={routine} setRoutine={setRoutine} handleSubmit={handleAdd} />
		</>
	)
}

export default AddRoutine;