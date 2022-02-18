import './styles.css'
import { useNavigate } from 'react-router';
import HamburgerIcon from '../HamburgerIcon';
import { useState } from 'react';

const Header = ({
    token,
    user,
    setToken
}) => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <nav className='nav-bar'>
            <div className='nav-title' onClick={() => { navigate('/') }}>FitnessTrac.kr</div>
            {token && <h3> Welcome, {user?.username}</h3>}
            <button className='header-button' onClick={() => { navigate('/routines') }}>Routines</button>
            <button className='header-button' onClick={() => { navigate('/activities') }} >Activities</button>
            {token && <button className='header-button' onClick={() => { navigate('/profile') }} >My Account</button>}
            {(!token) ?
                <button className='header-button' onClick={() => { navigate('/authentication/login') }} >Login/Register</button>
                : <button onClick={handleLogout} >Logout</button>}
            <div 
            className='hamburger-icon'
            onClick={() => {
                setNavMenuOpen(!navMenuOpen);
            }}>
                <HamburgerIcon  />
            </div>
        </nav>
    );
}

export default Header;
