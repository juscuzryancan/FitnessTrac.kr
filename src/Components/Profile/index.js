import { useState, useEffect } from 'react';
import { Routine } from '../';
import './styles.css';

const Profile = ({user, token}) => {
	const [userRoutines, setUserRoutines] = useState([]);

	const fetchUserRoutines = async () => {
		
	}

	useEffect(() => {
		fetchUserRoutines();
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
				{userRoutines.map((routine) => <Routine key={routine.id} routine={routine}/>)}
			</div>
		</div>
	)
}

export default Profile;