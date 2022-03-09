import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routine, AddRoutine } from '../';
import './styles.css';

const Profile = ({user, token, setRoutines}) => {
	const [userRoutines, setUserRoutines] = useState([]);

	const handleUserRoutines = async () => {
		try {
			const { data } = await axios.get(`/api/users/${user.username}/routines`);
			if(data.success === false) {
				return;
			}
			setUserRoutines(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		handleUserRoutines();
	}, [user]);

	if(userRoutines.length === 0) {
		return (
			<div>
				...Loading
			</div>
		)
	}

	return (
		<div className='profile'>
			<div>
				{token && <AddRoutine setRoutines={setRoutines} routines={routines} activities={activities} token={token} />}
				<h2>My Routines</h2>
				{userRoutines.map((routine) => <Routine key={routine.id} routine={routine}/>)}
			</div>
		</div>
	)
}

export default Profile;