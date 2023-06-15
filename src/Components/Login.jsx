import { AuthenticationForm } from ".";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async () => {
  }

  return (
    <div className="flex flex-col items-center border border-red-500">
      <div className="text-3xl my-4">Login</div>
      <AuthenticationForm 
        type="login" 
        onSubmit={onSubmit}
      />
      <button onClick={() => navigate('/login')}>Already a user? Log In here</button>
    </div>
  );
}

export default Login;
