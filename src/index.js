import {useEffect, useState, useContext} from 'react';
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

import UserContext from './Contexts/UserContext';

import { ThemeProvider } from '@mui/material/styles';
import {default as theme} from './Theme/theme.js'


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
        <ThemeProvider theme={theme}>
          {/* you might want to change the name user context and just name it context
          because since its a small application you'll be able to just pass everything you need into this one context
          ANNANNNNNNNNNNNNDDDD this will stop rerenders on your entire */}
          <UserContext.Provider value={token, setToken, user, setUser} >
          <Header 
              token={token}
              setToken={setToken}/>
          <Switch>
              <Route exact path='/'>
              </Route>
              <Route exact path='/authentication'>
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
          </UserContext.Provider>
          </ThemeProvider>
      </Router>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
