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
            <div className='links'> 
                <Link className='header__link' to="/">FitnessTrac.kr</Link>
                <Link className='header__link' to="/routines">Routines</Link>
                {token && <Link className='header__link' to="/myroutines">My Routines</Link>}
                <Link className='header__link' to="/activities">Activities</Link>
                {(!token) 
                    ? <Link className='header__link' to="/registration">Login/Register</Link>
                    : <button onClick={handleLogout}>Logout</button>}
            </div>
        </nav>
    );
}

export default Header;
