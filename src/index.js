import { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { getActivities, getUserData } from './api'
import { Login, Header, Activities, Routines, MyRoutines, AuthenticationForm, Profile } from './Components'

const App = () => {
  const [activities, setActivities] = useState([]);
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || "";
  });
  const [user, setUser] = useState({});


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

  useEffect(() => {
    const handleActivities = async () => {
      try {
        const { data } = await axios.get('/api/activities')
        setActivities(data)
      } catch (error) {
        console.error(error);
      }
    }

    if (token) {
      handleUser();
    }

    handleActivities();
  }, [])

  useEffect(() => {
    if(!token) {
      setUser({});
      return;
    }

    handleUser();
  }, [token])

  return (
    <Router>
        <Header token={token} user={user} setToken={setToken}/>
        <Routes>
          <Route path='/' element={<div>
            <h2>Welcome to Fitness Trac.kr</h2>
            <p>Keep track of your exercise routines, and share it with others</p>
          </div>} />
          <Route path='/authentication/:method' element={<AuthenticationForm setToken={setToken} setUser={setUser} handleUser={handleUser}/>} />
          <Route path='/activities' element={<Activities activities={activities} setActivities={setActivities} token={token} activities={activities} setActivities={setActivities} />} />
          <Route path='/routines' element={<Routines token={token} />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
