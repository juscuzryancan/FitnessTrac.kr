import {useContext} from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import {default as Menu} from './Menu'
import { useHistory } from 'react-router';
import UserContext from '../Contexts/UserContext';

const Header = () => {
    const history = useHistory();
    const {token, setToken} = useContext(UserContext)

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <Box sx={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'space-between'
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
            <Box 
                sx={{
                    display: ['none', 'inline'],
                }}>
                <Button 
                    className='header__link' 
                    to="/routines"
                    onClick={() => {
                        history.push('/routines')
                    }}
                >Routines</Button>
                {token && 
                <Button 
                    className='header__link' 
                    to="/myroutines"
                    onClick={() => {
                        history.push('/myroutines')
                    }}
                >My Routines</Button>}
                <Button 
                    className='header__link' 
                    to="/activities"
                    onClick={() => {
                        history.push('/activities')
                    }}
                >Activities</Button>
                {(!token) ? 
                <Button 
                    className='header__link' 
                    to="/registration"
                    onClick={() => {
                        history.push('/authentication')
                    }}
                >Login/Register</Button> : 
                <Button 
                    onClick={handleLogout}
                >Logout</Button>}
            </Box>
            {/*replace with icon maybe to avoid using a box */}
            <Box sx={{
                display: ['inline', 'none']
            }}>
                <Menu token={token} />
            </Box>
        </Box>
    );
}

export default Header;
