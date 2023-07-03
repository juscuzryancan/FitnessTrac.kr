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
      <select onChange={(e) => setActivity(e.target.value)}>
        <option value={null}>No Activity Selected</option>
        {activities?.map((activity) => <option key={activity.id} value={JSON.stringify(activity)}>{activity.name}</option>)}
      </select>
      <button className="px-4 py-2 border rounded border-black" onClick={mutate}>Add Activity</button>
      {<div className="self-center text-red-500">{error?.response.data.message}</div>}
    </div>
  )
}

export default ActivitySelect;
