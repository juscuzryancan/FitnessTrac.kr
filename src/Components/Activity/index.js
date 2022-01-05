import './Activity.css';
const Activity = ({activity}) => {
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
		</div>
	);
}

export default Activity;