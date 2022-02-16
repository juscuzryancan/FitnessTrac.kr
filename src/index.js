import { useEffect, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getActivities, getUserData } from './api'

import { Login, Header, Activities, Routines, MyRoutines, AuthenticationForm } from './Components'

const App = () => {
  const [token, setToken] = useState(() => {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return '';
    }
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

  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const user = await getUserData(token);
          setUser(user);
        } catch (error) {
          console.error(error);
        }
      })();
    } else {
      setUser({});
    }
  }, [token]);

  // TODO: 
  // swap each route into a page
  // this way i can just focus on customizing pages and displaying each individual page
  // useQuery will replace all of api index functions
  // as i customize each item i will have to go from inside to outside
  // this way i can specify each individual component first and then i
  // can apply the correct css for each component

  return (
    <Router>
        <Header token={token} setToken={setToken}/>
        <Routes>
          <Route path='/' element={<div></div>} />
          <Route path='/authentication/:method' element={<AuthenticationForm setToken={setToken} setUser={setUser} />} />
          <Route path='/activities' element={<Activities activities={activities} setActivities={setActivities} />} />
          <Route path='/routines' element={<Routines />} />
          <Route path='/myroutines' element={<MyRoutines activities={activities} />} />
        </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
