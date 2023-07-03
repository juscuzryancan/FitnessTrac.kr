import { useForm } from "react-hook-form"

const RoutineForm = ({
  routine, 
  onSubmit, 
  mutationError
}) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    values: {
      ...routine
    }
  });

  return (
    <form 
      className="flex flex-col justify-center gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >

      <div className="flex flex-col gap-1">
        <label >Name: </label>
        <input 
          {...register("name", {
          required: "Name is Required"
        })} />
      </div>
      {errors.name && <div className="text-red-500">{errors.name.message}</div>}

      <div className="flex flex-col gap-1">
        <label >Goal: </label>
        <input 
          {...register("goal", {
          required: "Goal is Required"
        })} />
      </div>
      {errors.goal && <div className="text-red-500">{errors.goal.message}</div>}

      <div className="flex gap-1">
        <label >Public: </label>
        <input 
          type="checkbox"
          {...register("isPublic", {
        })} />
      </div>
      <button className="border rounded border-black py-2 px-4 bg-blue-200" type="submit">Save Routine</button>
      {<div className="self-center text-red-500">{mutationError?.response.data.message}</div>}
    </form>
  )
}

export default RoutineForm;
