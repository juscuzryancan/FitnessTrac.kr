import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = (props) => {
    const { token, setToken } = props

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <nav>
            <div className='header__title'>
                FitnessTrac.kr
            </div>
            <div className='links'> 
                <Link className='header__link' to="/">Fitness Trackr</Link>
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
