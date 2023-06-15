import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Register, Login, Home, EditRoutine, EditActivity, Navbar, SingleRoutine, Activities, Routines, AuthenticationForm, Profile } from './'
import { useQuery } from "react-query";

const App = () => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || "";
  });

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar token={token} user={user} setToken={setToken} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register setToken={setToken} />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/activities' element={<Activities token={token} />} />
        <Route path='/activity/:activityId' element={<EditActivity token={token} />} />
        <Route path='/routines' element={<Routines token={token} />} />
        <Route path='/routines/:routineId' element={<SingleRoutine token={token} />} > 
          <Route path='edit' element={<EditRoutine token={token} />}/>
        </Route>
        <Route path='/profile' element={<Profile user={user} token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
