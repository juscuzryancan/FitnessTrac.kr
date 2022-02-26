import { useNavigate } from 'react-router-dom';
import {Activity} from '../';
const Routine = ({routine}) => {
	const navigate = useNavigate();

	const {
		activities,
		creatorId,
		creatorName,
		goal,
		isPublic,
		name,
		id
	} = routine;

	return (
		<div className="routine">
			<div className='routine-header' onClick={() => {
				navigate(`/routines/${id}`)
			}}>
				<h3>Routine Name: {name}</h3>
				<h4>Creator: {creatorName}</h4>
				<h4>Goal: {goal}</h4>
			</div>
			<div className='routine-activities'>
				{activities.map((activity, i) => {
					return (
						<Activity key={i} activity={activity} />
					);
				})}
			</div>
		</div>
	)
}

export default Routine;