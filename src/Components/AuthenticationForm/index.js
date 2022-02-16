import './styles.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AuthenticationForm = ({setToken}) => {

	const navigate = useNavigate();

	const { method } = useParams()
	const authenticationTitle = (method === "login") ? "Log In" : "Register";
	const blankUserFields = {
		username: "",
		password: "",
		confirmPassword: ""
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
			const { data: {token} } = await axios.post('/api/users/login', {
					username,
					password
			});

			setToken(token)
			localStorage.setItem('token', token);
			navigate('/')
	}

	const [userFields, setUserFields] = useState(blankUserFields);

	console.log(userFields);

	return (
		<div className="authentication-container">
			<form onSubmit={handleSubmit} className="authentication-form">
					<h2>{authenticationTitle}</h2>
					<label htmlFor='authentication-username' >Username</label>
					<br/>
					<input id="authentication-username" value={userFields.username} onChange={(e) => setUserFields({...userFields, username: e.target.value})} />
					<br />
					<label htmlFor='authentication-password' >Password</label>
					<br />
					<input type="password" id='authentication-password' value={userFields.password} onChange={(e) => setUserFields({...userFields, password: e.target.value})}/>
					{
						(method === 'register') && 
						<>
							<label htmlFor='authentication-confirmation' >Confirm Your Password</label>
							<br />
							<input type="password" id='authentication-confirmation' value={userFields.confirmPassword} onChange={(e) => setUserFields({...userFields, confirmPassword: e.target.value})}/>
						</>
					}
					<button className="login-button" type="submit">Login</button>
					{ method === 'login' && <button onClick={() => navigate('/authentication/register')}>Not a user? Register here</button>}
					{ method === 'register' && <button onClick={() => navigate('/authentication/login')}>Already a user? Log In here</button>}
			</form>
		</div>
	)

}

export default AuthenticationForm;