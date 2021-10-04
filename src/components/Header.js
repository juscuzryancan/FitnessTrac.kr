import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { token, setToken } = props

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <nav>
            <Link to="/">Fitness Trackr</Link>
            <Link to="/routines">Routines</Link>
            {token && <Link to="/myroutines">My Routines</Link>}
            <Link to="/activities">Activities</Link>
            {(!token) 
                ? <Link to="/registration">Login/Register</Link>
                : <button onClick={handleLogout}>Logout</button>}
        </nav>
    );
}

export default Header;
