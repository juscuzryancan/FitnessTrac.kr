import './Header.css';
import { useNavigate } from 'react-router';
import { NavMenu } from '../'
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
            {token && <div> Account: {user?.username}</div>}
            <button className='header-button' onClick={() => { navigate('/routines') }}>Routines</button>
            {token && <button className='header-button' onClick={() => { navigate('/myaccount') }} >My Account</button>}
            <button className='header-button' onClick={() => { navigate('/activities') }} >Activities</button>
            {(!token) ?
                <button className='header-button' onClick={() => { navigate('/authentication') }} >Login/Register</button>
                : <button onClick={handleLogout} >Logout</button>}
            <div 
            className='hamburger-icon'
            onClick={() => {
                setNavMenuOpen(!navMenuOpen);
            }}>
                <HamburgerIcon  />
            </div>
            {navMenuOpen && <NavMenu setNavMenuOpen={setNavMenuOpen} />}
        </nav>
    );
}

export default Header;
