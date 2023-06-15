import { Link } from 'react-router-dom';

const Navbar = ({
  token,
  setToken
}) => {

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  }

  return (
    <nav className="flex justify-between p-4 m-4 ">
      <div className="flex gap-4 relative items-end">
        <Link className="text-2xl"
          to="/"
        >FitnessTrac.kr</Link>
        <Link 
          to="/routines"
          className="border-transparent border-b-2
          hover:border-black"
        >Routines</Link>
        <Link 
          className="border-transparent border-b-2
          hover:border-black"
          to="/activities"
        >Activities</Link>
      </div>
      {
        token 
          ? <button onClick={handleLogout}>Sign Out</button>
          : <div className="flex gap-4 items-end">
            <Link 
              className="border-transparent border-b-2
              hover:border-black"
              to="/login"
            >Login</Link>
            <Link 
              className="border-transparent border-b-2
              hover:border-black"
              to="/register"
            >Sign Up</Link>
          </div>
      }
    </nav>
  );
}

export default Navbar;
