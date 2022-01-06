import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    register,
    login
} from '../../api';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
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
        <form className="login-form">
            <h2>Login</h2>
            <label htmlFor='login-username' >Username</label>
            <br/>
            <input id="login-username" value={username} />
            <br />
            <label htmlFor='login-password' >Password</label>
            <br />
            <input type="password" id='login-password' value={password}/>
            <button className="login-button" type="submit">Login</button>
        </form>
    );
}

export default Login;
