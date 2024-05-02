import { useNavigate } from "react-router";
import { ErrorMessage } from "@hookform/error-message";
import { useLoginMutation } from "../auth/authSlice";
import { Button } from "../../components/Button";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscClose } from "react-icons/vsc";

const loginSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required")
});

const Login = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async ({ username, password }) => {
    try {
      await login({ username, password }).unwrap()
      navigate("/");
    } catch (error) {
      const { data: { name, message } } = error;
      setError("root", { type: name, message });
    }
  }

  const handleClose = () => {
    navigate("/");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-4">
          <div className="w-full flex justify-between">
            <h2 className="text-2xl font-bold">Welcome back!</h2>
            <VscClose onClick={handleClose} className="rounded hover:bg-gray-300 hover:cursor-pointer" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">Enter your email and password to sign in.</p>
          <ErrorMessage
            errors={errors}
            name="root"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
          <ErrorMessage
            errors={errors}
            render={({ message }) => <p className="text-red-500">{message}</p>}
            name="username"
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p className="text-red-500">{message}</p>}
          />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input className="mt-1" id="username" placeholder="username" type="text" {...register("username")} />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link className="text-sm underline" to="/">
                  Forgot password?
                </Link>
              </div>
              <Input className="mt-1" id="password" placeholder="••••••••" type="password" {...register("password")} />
            </div>
            <Link className="flex justify-end text-sm underline" to="/register">
              Not registered? Sign Up Here
            </Link>
            <Button className="w-full" type="submit">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;
