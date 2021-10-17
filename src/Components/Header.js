import {useContext} from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import {default as Menu} from './Menu'
import { useHistory } from 'react-router';
import UserContext from '../Contexts/UserContext';

const Header = () => {
    const history = useHistory();
    const {token, setToken, user} = useContext(UserContext)

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <Box sx={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            px: '.7rem',
            py: '.35rem'
            
        }}>
            <Typography 
                sx={{
                    '&:hover' : {
                       cursor: 'pointer'
                    }
                }}
                variant='h4' 
                className='header__link' 
                to="/"
                onClick={() => {
                    history.push('/')
                }}
            >FitnessTrac.kr</Typography>
            {token && <Typography> Account: {user.username}</Typography>}
            <Box 
                sx={{
                    display: ['none', 'inline'],
                }}>
                <Button 
                    className='header__link' 
                    onClick={() => {
                        history.push('/routines')
                    }}
                >Routines</Button>
                {token && 
                <Button 
                    className='header__link' 
                    onClick={() => {
                        history.push('/myaccount')
                    }}
                >My Account</Button>}
                <Button 
                    className='header__link' 
                    onClick={() => {
                        history.push('/activities')
                    }}
                >Activities</Button>
                {(!token) ? 
                <Button 
                    className='header__link' 
                    onClick={() => {
                        history.push('/login')
                    }}
                >Login/Register</Button> : 
                <Button 
                    onClick={handleLogout}
                >Logout</Button>}
            </Box>
            <Box sx={{
                display: ['inline', 'none']
            }}>
                <Menu token={token} />
            </Box>
        </Box>
    );
}

export default Header;
