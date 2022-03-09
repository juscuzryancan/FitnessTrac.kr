import { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { getActivities, getUserData } from './api'
import { Login, Header, SingleRoutine, Activities, Routines, MyRoutines, AuthenticationForm, Profile } from './Components'

const App = () => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || "";
  });
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);

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
      const { data: fetchedRoutines } = await axios.get('/api/routines');
      setRoutines(fetchedRoutines);
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

  return (
    <Router>
      <Header token={token} user={user} setToken={setToken} />
      <Routes>
        <Route path='/' element={<div>
          <h2>Welcome to Fitness Trac.kr</h2>
          <p>Keep track of your exercise routines, and share it with others</p>
        </div>} />
        <Route path='/authentication/:method' element={<AuthenticationForm setToken={setToken} setUser={setUser} handleUser={handleUser} />} />
        <Route path='/activities' element={<Activities activities={activities} setActivities={setActivities} token={token} />} />
        <Route path='/routines' element={<Routines token={token} activities={activities} routines={routines} />} />
        <Route path='/routines/:routineId' element={<SingleRoutine token={token} activities={activities} routines={routines} setRoutines={setRoutines} />} routines={routines} />
        <Route path='/profile' element={<Profile routines={routines} user={user} token={token} />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));