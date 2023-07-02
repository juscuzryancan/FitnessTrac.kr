import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useToken } from "../contexts/useToken";
import { getActivities } from "../api";

const ActivityForm = ({ routine }) => {

  const { token } = useToken();

  console.log(token);

  const { data: activities, isLoading } = useQuery("activities", getActivities);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    value: {
      ...routine
    }
  });

  return (
    <>
      {routine?.activities.map((activity) => <div>{activity.name}</div>)}
    {/* <form onSubmit={handleSubmit}> */}
    {/*   <input required value={activity.name} placeholder="Activity Name" onChange={(e) => {setActivity({...activity, name: e.target.value})}}/> */}
    {/*   <input required value={activity.description} placeholder="Activity Description" onChange={(e) => {setActivity({...activity, description: e.target.value})}}/> */}
    {/*   <button type="submit">Submit</button> */}
    {/* </form> */}
      <select>
        {activities?.map((activity) => <option>{activity.name}</option>)}
      </select>
    </>
  )
}

export default ActivityForm;
