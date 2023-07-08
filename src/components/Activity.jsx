import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../contexts/useToken";
import { useMutation, useQueries, useQueryClient } from "react-query";
import { deleteActivity, editCountOrDuration } from "../api";

const Activity = ({
  activity, 
  isOwner
}) => {
  const [count, setCount] = useState(activity.count || 0);
  const [duration, setDuration] = useState(activity.duration || 0);
  const navigate = useNavigate();
  const { token } = useToken();
  const queryClient = useQueryClient();

  const {
    id,
    name,
    description,
    routineActivityId
  } = activity;

  const { mutate: handleEdit } = useMutation({
    mutationFn: () => editCountOrDuration(token, {
      routineActivityId, 
      count: count || null, 
      duration: duration || null
    }),
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"]);
      closeModal();
    }
  }); 

  const { mutate: handleDelete } = useMutation({
    mutationFn: () => deleteActivity(token, routineActivityId),
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"]);
      closeModal();
    },
  });

  return (
    <div className="border border-black rounded p-2">
      <div className="text-xl">{name}</div>
      <div>{description}</div>
      {(!isOwner && activity.duration) && <div>Duration: {activity.duration}</div>}
      {(!isOwner && activity.count) && <div>Count: {activity.count}</div>}
      {isOwner && <>
        <div className="flex gap-1">
          <label>Count</label>
          <input className="border rounded border-black" value={count} onChange={(e)=> setCount(e.target.value)} type="number"/>
        </div>
        <div className="flex gap-1">
          <label>Duration</label>
          <input className="border rounded border-black" value={duration} onChange={(e)=> setDuration(e.target.value)} type="number"/>
        </div>
        <div className="flex justify-end gap-4 mx-2">
          <button className="border rounded border-black py-2 px-4 bg-blue-200" onClick={handleEdit}>Save Activity</button>
          <button className="border rounded border-black py-2 px-4 bg-red-400" onClick={handleDelete}>Remove Activity</button>
        </div>
      </>}
    </div>
  );
}

export default Activity;
