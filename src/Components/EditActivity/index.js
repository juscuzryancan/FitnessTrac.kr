import { useState, useEffect } from 'react';
import ActivityForm from '../ActivityForm';
import { useParams } from 'react-router-dom';

const EditActivity = ({activities}) => {
	const [activity, setActivity] = useState(null);
	const { activityId } = useParams();

	const handleActivity = () => {
		setActivity(activities.find((elem) => elem.id === activityId));
	}

	const handleSubmit = () => {
		console.log()
	}

	useEffect(() => {
		handleActivity();
	}, [])

	if(activity){
		return (<>hello</>)
	}

	return (
		<ActivityForm activity={activity} setActivity={setActivity} handleSubmit={handleSubmit}/>
	);
}

export default EditActivity;