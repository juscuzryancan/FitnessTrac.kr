import './Activity.css';
import { useNavigate } from 'react-router-dom';

const Activity = ({activity, token}) => {
	const navigate = useNavigate();
	const {
		id,
		name,
		description,
		duration,
		count
	} = activity;

	return (
		<div key={id} className='activity'>
			<h3>Activity: {name}</h3>
			<div>Description: {description}</div>
			{duration && <div>Duration: {duration}</div>}
			{count && <div>Count: {count}</div>}
			{token && <>
				<button onClick={() => navigate(`/activity/${id}`)}>Edit Activity</button>
			</>}
		</div>
	);
}

export default Activity;