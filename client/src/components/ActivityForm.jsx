import { useForm } from "react-hook-form";

const ActivityForm = ({
  activity,
  onSubmit,
  mutationError
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    values: {
      ...activity
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
        <label >Description: </label>
        <input 
          {...register("description", {
          required: "Description is Required"
        })} />
      </div>
      {errors.description && <div className="text-red-500">{errors.description.message}</div>}

      <button className="border rounded border-black py-2 px-4 bg-blue-200" type="submit">Save Activity</button>
      {<div className="self-center text-red-500">{mutationError?.response.data.message}</div>}
    </form>
  )
}

export default ActivityForm;
