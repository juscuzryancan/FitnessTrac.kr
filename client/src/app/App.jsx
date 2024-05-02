import { Routes, Route } from 'react-router-dom';
import { RoutineForm, Register, Home, Routines, Profile } from '../components';
import Activities from '../features/activities/Activities';
import Login from '../features/auth/Login';
import AppLayout from '../layouts/AppLayout';

const App = () => {

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/routines' element={<Routines />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/routineform' element={<RoutineForm />} />
        <Route path='*' element={<div>not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
