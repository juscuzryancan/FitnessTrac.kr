import { useState, useEffect } from 'react';
import ActivityForm from '../ActivityForm';
import { useParams } from 'react-router-dom';

const EditActivity = () => {
	let activity;
	const { activityId } = useParams();
	console.log(activityId)
	if(!activity){
		return (<>hello</>)
	}

	return (
		<ActivityForm />
	);
}

export default EditActivity;