import { useForm } from "react-hook-form"

const RoutineForm = ({
  routine, 
  onSubmit, 
  mutationError
}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    value: {
      ...routine
    }
  });

  return (
    <form 
      className="flex flex-grow flex-col justify-center items-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >

      <div className="flex">
        <label >Name: </label>
        <input 
          {...register("name", {
          required: "Name is Required"
        })} />
      </div>
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}

      <div className="flex">
        <label >Goal: </label>
        <input 
          {...register("goal", {
          required: "Goal is Required"
        })} />
      </div>
      {errors.goal && <div className="text-red-500">{errors.goal.message}</div>}

      <div>
        <label >Public: </label>
        <input 
          type="checkbox"
          {...register("isPublic", {
        })} />
      </div>

      <button className="px-4 py-2 border rounded border-black" type="submit">Submit</button>
      {<div className="self-center text-red-500">{mutationError?.response.data.message}</div>}
    </form>
  )
}

export default RoutineForm;
