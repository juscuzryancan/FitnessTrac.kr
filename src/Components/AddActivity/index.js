import axios from 'axios';
import {useState} from 'react';
import { ActivityForm } from '../';

const AddActivity = ({token, activities, setActivities}) => {
	const blankActivity = {
		name: "",
		description: ""
	}
	const [activity, setActivity] = useState(blankActivity);

	const handleAdd = async (e) => {
		e.preventDefault();
		try {
			const {data: newActivity} = await axios.post('/api/activities', activity, {headers: {Authorization: `Bearer ${token}`}})
			setActivities([...activities, newActivity]);
			setActivity(blankActivity);
		} catch (e) {
			console.error(e);
		}
	}

	return (
		<>
			<h2>Add Activity</h2>
			<ActivityForm activity={activity} setActivity={setActivity} handleSubmit={handleAdd} />
		</>
	)
}

export default AddActivity;