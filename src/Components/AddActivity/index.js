import axios from 'axios';
import {useState} from 'react';
import { ActivityForm } from '../';
import './styles.css'

const AddActivity = ({token, activities, setActivities}) => {
	const blankActivity = {
		name: "",
		description: ""
	}
	const [error, setError] = useState("");
	const [activity, setActivity] = useState(blankActivity);

	const handleAdd = async (e) => {
		e.preventDefault();
		try {
			const {data} = await axios.post('/api/activities', activity, {headers: {Authorization: `Bearer ${token}`}})
			if (data.success === false) {
				setError(data.message);
				return;
			}
			setActivities([...activities, data]);
			setActivity(blankActivity);
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<>
			<h2 className='add-activity-header'>Add Activity</h2>
			{error && <div>{error}</div>}
			<ActivityForm activity={activity} setActivity={setActivity} handleSubmit={handleAdd} />
		</>
	)
}

export default AddActivity;