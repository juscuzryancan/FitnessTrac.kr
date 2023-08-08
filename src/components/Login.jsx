import { AuthenticationForm } from ".";
import { useNavigate } from "react-router";
import { login } from "../api";
import { useMutation } from "react-query";
import { useUser } from "../contexts/useUser";

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useUser()

  const { isLoading, mutate, error: loginError } = useMutation({
    mutationKey: ["login"],
    mutationFn: async ({username, password}) => {
      return await login(username, password);
     },
    onSuccess: (data, variables, context) => {
      localStorage.setItem("token", data);
      setToken(data);
      navigate("/");
    }
  });

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col items-center  
        rounded-xl
        bg-gray-500 -50 w-[400px] h-[400px]"
      >
        <div className="text-3xl my-4">Login</div>
        <AuthenticationForm 
          type="login" 
          onSubmit={mutate}
          isLoading={isLoading}
          authError={loginError}
        />
        <button className="hover:border-b-2 border-black" onClick={() => navigate('/login')}>Not yet a user? Register Here</button>
      </div>
    </div>
  );

}

export default Login;
