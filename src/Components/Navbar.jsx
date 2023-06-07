import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({
  token,
  user,
  setToken
}) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  }

  return (
    <nav className="flex justify-between p-4">
      <div className="flex gap-4 items-end">
        <Link className="text-xl" to="/">FitnessTrac.kr</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/activities">Activities</Link>
      </div>
      <div className="flex gap-4 items-end">
        <Link to="/authentication/login">Login</Link>
        <Link to="/authentication/register">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Header;
