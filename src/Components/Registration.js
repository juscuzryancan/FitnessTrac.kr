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

const Login = (props) => {
    const { token, setToken, setError } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(username, password);
            if (data.error) {
                setError("Login Error: " + data.error);
                return;
            } else if (data.token) {
                setToken(data.token);
                localStorage.setItem('token', data.token);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            hi im a div
        </div>
    )
    // return (
    //     (!token)
    //     ?    <form onSubmit={handleSubmit}>
    //             <input 
    //                 placeholder="Username" 
    //                 value={username}
    //                 onChange={handleUsername}
    //             /> 
    //             <input 
    //                 placeholder="Password" 
    //                 value={password}
    //                 onChange={handlePassword}
    //             />
    //             <button type='submit'>Login</button>
    //         </form>
    //         : <Redirect to='/' />
    // );
}

const Register = (props) => {
    const { token, setToken, setError } = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await register(username, password);
            if (data.error) {
                setError("Register Error: " + data.error);
                return;
            } else if (data.user) {
                const data = await login(username, password);
                setToken(data.token);
                localStorage.setItem('token', data.token);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div>
            im a div
        </div>
    )
    // return (
    //     (!token)
    //     ?    <form onSubmit={handleSubmit}>
    //             <input 
    //                 placeholder="Username" 
    //                 value={username}
    //                 onChange={handleUsername}
    //             /> 
    //             <input 
    //                 placeholder="Password" 
    //                 value={password}
    //                 onChange={handlePassword}
    //             />
    //             <button type='submit'>Register</button>
    //         </form>
    //         : <Redirect to='/' />
    // );
}

const Registration = () => {
    const { token, setToken } = useContext(UserContext);
    const [error, setError] = useState('');

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
                    height: '30em'
                }}>
                <Typography variant='h4' sx={{margin: '1em'}}>Login Page</Typography>
                <TextField sx={{marginBottom: '1em'}} label="Username" variant="outlined"></TextField>
                <TextField sx={{marginBottom: '1em'}} label="Password" variant="outlined"></TextField>
                <Button variant='outlined'>Login</Button>
            </Card>

            {/* <Login
                setError={setError}
                token={token}
                setToken={setToken}/>
            <Register 
                setError={setError}
                token={token}
                setToken={setToken}/> */}

        </Box>
    );
}

export default Registration;
