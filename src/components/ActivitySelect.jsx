import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import { useToken } from "../contexts/useToken";
import { getActivities, addActivityToRoutine } from "../api";

/** 
 * todo: rename to edit the name to addactivitytoroutine ActivitySelect
 * */
const ActivitySelect = ({ routine }) => {

  const queryClient = useQueryClient();

  const [activity, setActivity] = useState();
  const [count, setCount] = useState();
  const [duration, setDuration] = useState();
  const { token } = useToken();

  const { mutate, error } = useMutation({
    mutationFn: () => addActivityToRoutine(token, routine?.id, activity),
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"], { exact: true});
    },
  });

  const { data: activities, isLoading } = useQuery("activities", getActivities);

  return (
    <div className="flex flex-col gap-2 p-4">
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value={""}>No Activity Selected</option>
        {activities?.map((activity) => <option key={activity.id} value={JSON.stringify(activity)}>{activity.name}</option>)}
      </select>
      <div className="flex flex-col gap-1">
        <label>Count</label>
        <input value={count} onChange={(e)=> setCount(e.target.value)} type="number"/>
      </div>
      <div className="flex flex-col gap-1">
        <label>Duration</label>
        <input value={duration} onChange={(e)=> setDuration(e.target.value)} type="number"/>
      </div>
      <button disabled={!activity} className="border rounded border-black py-2 px-4 bg-blue-200" onClick={mutate}>Add Activity</button>
      {<div className="self-center text-red-500">{error?.response.data.message}</div>}
    </div>
  )
}

export default ActivitySelect;
