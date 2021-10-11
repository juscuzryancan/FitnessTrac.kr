import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    register,
    login
} from '../api';

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
        (!token)
        ?    <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Username" 
                    value={username}
                    onChange={handleUsername}
                /> 
                <input 
                    placeholder="Password" 
                    value={password}
                    onChange={handlePassword}
                />
                <button type='submit'>Login</button>
            </form>
            : <Redirect to='/' />
    );
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
        (!token)
        ?    <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Username" 
                    value={username}
                    onChange={handleUsername}
                /> 
                <input 
                    placeholder="Password" 
                    value={password}
                    onChange={handlePassword}
                />
                <button type='submit'>Register</button>
            </form>
            : <Redirect to='/' />
    );
}

const Registration = (props) => {
    const { token, setToken } = props;
    const [error, setError] = useState('');

    return (
        <div className='registration'>
            {error && 
                <div className='error'>
                    {error}
                </div>
            }
            <Login
                setError={setError}
                token={token}
                setToken={setToken}/>
            <Register 
                setError={setError}
                token={token}
                setToken={setToken}/>
        </div>
    );
}

export default Registration;
