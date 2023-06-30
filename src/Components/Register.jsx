import { AuthenticationForm } from ".";
import { useNavigate } from "react-router";
import { register } from "../api";
import { useMutation, useQueryClient } from "react-query";

const Register = ({
  setToken
}) => {
  const navigate = useNavigate();

  const { isLoading, mutate, error: registerError } = useMutation({
    mutationKey: ["register"],
    mutationFn: async ({username, password}) => {
      return await register(username, password);
     },
    onSuccess: (data, variables, context) => {
      navigate("/login");
    },
    onError: (error, variables, context) => {
      console.log("errro", error)
    }
  });

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex flex-col items-center  
        rounded-xl
        bg-gray-500 -50 w-[400px] h-[400px]"
      >
        <div className="text-3xl my-4">Sign Up</div>
        <AuthenticationForm 
          type="register" 
          onSubmit={mutate}
          isLoading={isLoading}
          authError={registerError}
        />
        <button className="hover:border-b-2 border-black" onClick={() => navigate('/register')}>Already a user? Log In here</button>
      </div>
    </div>
  );
}

export default Register;
