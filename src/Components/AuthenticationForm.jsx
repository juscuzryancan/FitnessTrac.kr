import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AuthenticationForm = ({setToken, handleUser}) => {
  const navigate = useNavigate();
  const { method } = useParams()
  const authenticationTitle = (method === "login") ? "Log In" : "Register";
  const blankUserFields = {
    username: "",
    password: "",
    confirmPassword: ""
  }
  const [userFields, setUserFields] = useState(blankUserFields);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(method === "register" && userFields.password !== userFields.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {

      const {data} = await axios.post(`/api/users/${method}`, userFields);

      if (data.success === false) {
        throw data;
      }

      setUserFields(blankUserFields);
      setError("");

      if (method === "login") {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        navigate('/')
      } else {
        setError("Successful login, Please login")
        navigate('/authentication/login')
      }

    } catch ({name, message}) {
      console.error(`Name: ${name} Message: ${message}`)
      setError(message)
    }
  }

  return (
    <div className="authentication-container">
      <form onSubmit={handleSubmit} className="authentication-form">
        <h2>{authenticationTitle}</h2>
        {error && <h3>{error}</h3>}
        <label htmlFor='authentication-username' >Username</label>
        <br/>
        <input required id="authentication-username" value={userFields.username} onChange={(e) => setUserFields({...userFields, username: e.target.value})} />
      <br />
        <label htmlFor='authentication-password' >Password</label>
      <br />
        <input required type="password" id='authentication-password' value={userFields.password} onChange={(e) => setUserFields({...userFields, password: e.target.value})}/>
        {
          (method === 'register') && 
            <>
              <label htmlFor='authentication-confirmation' >Confirm Your Password</label>
              <br />
              <input required type="password" id='authentication-confirmation' value={userFields.confirmPassword} onChange={(e) => setUserFields({...userFields, confirmPassword: e.target.value})}/>
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
