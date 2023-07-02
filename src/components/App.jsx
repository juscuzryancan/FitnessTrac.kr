import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { RoutineForm, Register, Login, Home, Navbar, Activities, Routines, Profile } from './'

const App = () => {
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token");
  });

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register setToken={setToken}/>} />
        <Route path='/login' element={<Login setToken={setToken}/>} />
        <Route path='/activities' element={<Activities token={token}/>} />
        <Route path='/routines' element={<Routines token={token}/>} />
        <Route path='/profile' element={<Profile token={token} />} />
        <Route path='/routineform' element={<RoutineForm token={token} />} />
      </Routes>
    </div>
  );
}

export default App;
