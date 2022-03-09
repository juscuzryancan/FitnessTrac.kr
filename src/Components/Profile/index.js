import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routine } from '../';
import './styles.css';

const Profile = ({user, token}) => {
	const [userRoutines, setUserRoutines] = useState([]);

	const handleUserRoutines = async () => {
		try {
			const { data } = await axios.get(`/api/users/${user.username}/routines`);
			setUserRoutines(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		handleUserRoutines();
	}, []);

	if(!token) {
		return (
			<div>
				...Loading
			</div>
		)
	}

	return (
		<div className='profile'>
			<div>
				<h2>My Routines</h2>
				{userRoutines.map((routine) => <Routine key={routine.id} routine={routine}/>)}
			</div>
		</div>
	)
}

export default Profile;