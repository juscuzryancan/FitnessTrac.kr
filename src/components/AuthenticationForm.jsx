import { useForm } from 'react-hook-form';

const AuthenticationForm = ({
  type,
  onSubmit,
  isLoading,
  authError
}) => {
  const {handleSubmit, register, formState: { errors }} = useForm();

  return (
    <form 
      className="flex flex-col"
      onSubmit={handleSubmit(onSubmit)} 
    >
      <div className="px-8">
        <label 
          className="self-start text-xl" 
          htmlFor="" 
        >Username</label>
        <input 
          {...register("username", {
            name: "username",
            required: "Username is required"
          })}
          className="w-full"
        />
        {errors.username && <div className="text-red-500">{errors.username.message}</div>}
      </div>

      <div className="px-8">
        <label 
          className="self-start text-xl" 
          htmlFor="" 
        >Password</label>
        <input 
          type="password"
          {...register("password", {
            name: "password",
            required: "Password is required"
          })}
          className="w-full"
        />
        {errors.password && <div className="text-red-500">{errors.password.message}</div>}
      </div>


      {type === "register" && 
        <div className="px-8">
          <label 
            className="self-start text-xl" 
            htmlFor="" 
          >Confirm Your Password</label>
          <input 
            type="password"
            {...register("confirmPassword", {
              name: "password",
              required: "Please reenter your password"
            })}
            className="w-full"
          />
          {errors.password && <div className="text-red-500">{errors.password.message}</div>}
        </div>
      }

      <button disabled={isLoading}>Submit</button>
      {authError && <div className="self-center text-red-500">{authError?.response.data.message}</div>}
    </form>
  )
}

export default AuthenticationForm;
