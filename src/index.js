import { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getActivities, getUserData } from './api'

import { Login, Header, Activities, Routines, MyRoutines, AuthenticationForm, Profile } from './Components'

const App = () => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token');
  });
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchActivities = await getActivities();
        setActivities(fetchActivities);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [])

  // TODO: 
  // swap each route into a page
  // this way i can just focus on customizing pages and displaying each individual page
  // useQuery will replace all of api index functions
  // as i customize each item i will have to go from inside to outside
  // this way i can specify each individual component first and then i
  // can apply the correct css for each component

  return (
    <Router>
        <Header token={token} user={user} setToken={setToken}/>
        <Routes>
          <Route path='/' element={<div></div>} />
          <Route path='/authentication/:method' element={<AuthenticationForm setToken={setToken} setUser={setUser} />} />
          <Route path='/activities' element={<Activities token={token} activities={activities} setActivities={setActivities} />} />
          <Route path='/routines' element={<Routines token={token} />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
