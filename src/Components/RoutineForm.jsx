import { useForm } from "react-hook-form"

const RoutineForm = ({routine, setRoutine, onSubmit, activities}) => {
  const { register, handleSubmit, watch, formState } = useForm();

  return (
    <form 
      className="flex flex-grow flex-col justify-center items-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >

      <div>
        <label >Name: </label>
        <input 
          {...register("name", {
          required: "Name is Required"
        })} />
      </div>

      <div>
        <label >Goal: </label>
        <input 
          {...register("name", {
          required: "Name is Required"
        })} />
      </div>

      <div>
        <label >Public: </label>
        <input 
          type="checkbox"
          {...register("name", {
          required: "Name is Required"
        })} />
      </div>

      <button className="px-4 py-2 border rounded border-black" type="submit">Submit</button>
    </form>
  )
}

// creatorId 1
// goal"To beef up the Chest and Triceps!"
// isPublictrue
// name"Chest Day"

export default RoutineForm;
