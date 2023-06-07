import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, EditRoutine, EditActivity, Navbar, SingleRoutine, Activities, Routines, AuthenticationForm, Profile } from './'
import { getRoutines } from "../api";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || "";
  });
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
	const [userRoutines, setUserRoutines] = useState([]);

	const handleUserRoutines = async () => {
		try {
			const { data } = await axios.get(`/api/users/${user.username}/routines`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});
			if(data.success === false) {
				return;
			}
			setUserRoutines(data);
		} catch (error) {
			console.error(error);
		}
	}

  const handleUser = async () => {
    try {
      const { data: userObject } = await axios.get('/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUser(userObject);
    } catch (e) {
      console.error(e)
    }
  }

  const handleRoutines = async () => {
    try {
      setRoutines(await getRoutines());
    } catch (error) {
      console.error("error", error)
    }
  }

  const handleActivities = async () => {
    try {
      const { data } = await axios.get('/api/activities')
      setActivities(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (token) {
      handleUser();
    }

    handleRoutines();
    handleActivities();
  }, [])

  useEffect(() => {
    if (!token) {
      setUser({});
      return;
    }

    handleUser();
  }, [token])

	useEffect(() => {
		handleUserRoutines();
	}, [user, routines]);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar token={token} user={user} setToken={setToken} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/authentication/:method' element={<AuthenticationForm setToken={setToken} setUser={setUser} handleUser={handleUser} />} />
        <Route path='/activities' element={<Activities activities={activities} setActivities={setActivities} token={token} />} />
        <Route path='/activity/:activityId' element={<EditActivity token={token} handleActivities={handleActivities} activities={activities} setActivities={setActivities}/>} />
        <Route path='/routines' element={<Routines token={token} activities={activities} routines={routines} />} />
        <Route path='/routines/:routineId' element={<SingleRoutine handleRoutines={handleRoutines} token={token} activities={activities} routines={routines} setRoutines={setRoutines} userRoutines={userRoutines} />} > 
          <Route path='edit' element={<EditRoutine token={token} handleRoutines={handleRoutines} activities={activities}/>}/>
        </Route>
        <Route path='/profile' element={<Profile userRoutines={userRoutines} setUserRoutines={setUserRoutines} routines={routines} user={user} token={token} setRoutines={setRoutines} handleRoutines={handleRoutines}/>} />
      </Routes>
    </div>
  );
}

export default App;
