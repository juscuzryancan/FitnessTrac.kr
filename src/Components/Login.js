import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    register,
    login
} from '../api';
import UserContext from '../Contexts/UserContext';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const {token, setToken} = useContext(UserContext);
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        const { data: {token} } = await axios.post('/api/users/login', {
            username,
            password
        });
        setToken(token)
        localStorage.setItem('token', token);
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
                }} onClick={() => { navigate('/register')}}>Not Registered? Sign Up Here</Typography>
            </Card>
        </Box>
    );
}

export default Login;
