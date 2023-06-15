import { useNavigate } from "react-router";
import { AuthenticationForm } from "./";

const Register = () => {

  const navigate = useNavigate();

  return (
    <div>
      <AuthenticationForm 
        type="register"
      />
      <button onClick={() => navigate('/register')}>Not a user? Register here</button>
    </div>
  );
}

export default Register;
