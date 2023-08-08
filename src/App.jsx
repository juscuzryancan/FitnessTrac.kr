import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { RoutineForm, Register, Login, Home, Navbar, Activities, Routines, Profile } from './'

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/routines' element={<Routines/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/routineform' element={<RoutineForm/>} />
      </Routes>
    </div>
  );
}

export default App;
