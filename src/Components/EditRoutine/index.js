import {useState} from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { RoutineForm } from '../'
import axios from 'axios';

const EditRoutine = ({activities, token, handleRoutines}) => {
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const {routine, setRoutine} = useOutletContext();

	const handleEdit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.patch(`/api/routines/${routine.id}`, routine, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})

			const {data} = response;
			if (data.success === false) {
				setError(data.message);
				return;
			}
			await handleRoutines();
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<>
			<h2>Edit Routine</h2>
			{error && <div>{error}</div>}
			<RoutineForm routine={routine} setRoutine={setRoutine} handleSubmit={handleEdit} activities={activities}/>
			<button onClick={() => navigate(-1)}>Close Edit Routine Form</button>
		</>
	)
}

export default EditRoutine;