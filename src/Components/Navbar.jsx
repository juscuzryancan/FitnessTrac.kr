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
    <nav className="flex justify-between p-4">
      <div className="flex gap-4 items-end relative">
        <Link className="text-xl
          border-black
          hover:border-b-2" 
          to="/"
        >FitnessTrac.kr</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/activities">Activities</Link>
      </div>
      {
        token 
          ? <button onClick={handleLogout}>Sign Out</button>
          : <div className="flex gap-4 items-end">
            <Link to="/authentication/login">Login</Link>
            <Link to="/authentication/register">Sign Up</Link>
          </div>
      }
    </nav>
  );
}

export default Navbar;
