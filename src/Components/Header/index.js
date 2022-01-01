import './Header.css';
import { useNavigate } from 'react-router';

const Header = ({
    token,
}) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <nav className='nav-bar'>
            <div className='nav-title' onClick={() => { navigate('/') }}>FitnessTrac.kr</div>
            {token && <div> Account: {user.username}</div>}
            <button className='header-button' onClick={() => { navigate('/routines') }}>Routines</button>
            {token && <button className='header-button' onClick={() => { navigate('/myaccount') }} >My Account</button>}
            <button className='header-button' onClick={() => { navigate('/activities') }} >Activities</button>
            {(!token) ?
                <button className='header-button' onClick={() => { navigate('/login') }} >Login/Register</button>
                : <button onClick={handleLogout} >Logout</button>}
        </nav>
    );
}

export default Header;
