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
        <nav>
            <div
                onClick={() => {
                    navigate('/')
                }}
            >FitnessTrac.kr</div>
            {token && <div> Account: {user.username}</div>}
            <div
                sx={{
                    display: ['none', 'inline'],
                }}>
                <button
                    className='header__link'
                    onClick={() => {
                        navigate('/routines')
                    }}
                >Routines</button>
                {token &&
                    <button
                        className='header__link'
                        onClick={() => {
                            navigate('/myaccount')
                        }}
                    >My Account</button>}
                <button
                    className='header__link'
                    onClick={() => {
                        navigate('/activities')
                    }}
                >Activities</button>
                {(!token) ?
                    <button
                        className='header__link'
                        onClick={() => {
                            navigate('/login')
                        }}
                    >Login/Register</button> :
                    <button
                        onClick={handleLogout}
                    >Logout</button>}
            </div>
        </nav>
    );
}

export default Header;
