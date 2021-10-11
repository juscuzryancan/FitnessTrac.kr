import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import {
  getActivities,
  getUserData
} from './api'

import { 
  Registration,
  Header,
  Activities,
  Routines,
  MyRoutines
} from './Components'


const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setToken(localStorage.getItem('token'));
    }
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
          <Header 
              token={token}
              setToken={setToken}/>
          <Switch>
              <Route exact path='/'>
              </Route>
              <Route exact path='/registration'>
                  <Registration 
                      token={token} 
                      setToken={setToken}/>
              </Route>
              <Route exact path='/activities'>
                  <Activities 
                      token={token}
                      activities={activities}
                      setActivities={setActivities}/>
              </Route>
              <Route exact path='/routines'>
                  <Routines />
              </Route>
              <Route exact path='/myroutines'>
                  <MyRoutines 
                      user={user}
                      token={token}
                      activities={activities}/>
              </Route>
          </Switch>
      </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
