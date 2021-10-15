import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    register,
    login
} from '../api';
import UserContext from '../Contexts/UserContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography  from '@mui/material/Typography';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const {token, setToken} = useContext(UserContext);
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleLogin = async () => {
        const { data: {token} } = await axios.post('/api/users/login', {
            username,
            password
        });
        setToken(token)
        history.push('/')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexGrow: 1,
                justifyContent: 'center'
            }}
        >
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '80%',
                    marginTop: '3rem',
                    height: '75vh'
                }}>
                <Typography variant='h4' sx={{margin: '1em'}}>Login Page</Typography>
                <TextField 
                    value={username} 
                    sx={{marginBottom: '1em'}} 
                    label="Username" 
                    variant="outlined"
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <TextField 
                    value={password} 
                    sx={{marginBottom: '1em'}} 
                    label="Password" 
                    type='password'
                    variant="outlined"
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <Button 
                    variant='outlined'
                    onClick={handleLogin}  
                >Login</Button>
                <Typography sx={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    marginTop: '1rem'
                }} onClick={() => { history.push('/register')}}>Not Registered? Sign Up Here</Typography>
            </Card>
        </Box>
    );
}

export default Login;
