import { Link } from 'react-router-dom';
import { useUser } from '../contexts/useUser';
import { useNavigate } from 'react-router';

const Navbar = () => {

  const { token, clearToken, user } = useUser();
  const navigate = useNavigate();

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
          ? <div 
            className="flex gap-4 items-end"
          >
            <Link 
              className="border-transparent border-b-2
              hover:border-black"
              to="/profile"
            >{user?.username}</Link>
            <button 
              className="border-transparent border-b-2
              hover:border-black"
              onClick={() => {
                clearToken();
                navigate("/");
              }}
            >Sign Out</button>
          </div>
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
