import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AuthenticationForm = ({
  type,
  onSubmit
}) => {
  const {handleSubmit, register, formState: { errors }} = useForm();

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col items-center  
      rounded-xl
      bg-slate-500 -50 w-[400px] h-[400px]"
    >
      <div className="px-8">
        <label 
          {...register("username", {
            name: "username",
            required: "Username is required"
          })}
          className="self-start text-xl" 
          htmlFor="" 
        >Username</label>
        <input className="w-full" />
         {errors.username && <div className="text-red-500">{errors.username.message}</div>}
      </div>
      <button>Submit</button>
    </form>
  )
}

export default AuthenticationForm;
