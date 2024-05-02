import { useState } from "react";
import { Loader } from "../../components";
// import { useUser } from "../contexts/useUser";
// import { useMutation, useQueryClient } from "react-query";
const deleteActivity = () => { }
const editCountOrDuration = () => { }


const Activity = ({
  activity,
  isProfile
}) => {
  const [count, setCount] = useState(activity.count || 0);
  const [duration, setDuration] = useState(activity.duration || 0);
  // const { token } = useUser();
  // const queryClient = useQueryClient();

  const {
    name,
    description,
    routineActivityId
  } = activity;

  // const { mutate: handleEdit } = useMutation({
  //   mutationFn: () => editCountOrDuration(token, {
  //     routineActivityId,
  //     count: count || null,
  //     duration: duration || null
  //   }),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["routines"]);
  //     closeModal();
  //   }
  // });
  //
  // const { mutate: handleDelete, isLoading } = useMutation({
  //   mutationFn: () => deleteActivity(token, routineActivityId),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["routines"]);
  //   },
  // });
  //
  const handleEdit = () => { };
  return (
    <div className="border border-black rounded p-2">
      <div className="text-xl">{name}</div>
      <div>{description}</div>
      {(!isProfile && activity.duration) && <div>Duration: {activity.duration}</div>}
      {(!isProfile && activity.count) && <div>Count: {activity.count}</div>}
      {isProfile && <>
        <div className="flex gap-1">
          <label>Count</label>
          <input
            className="border rounded border-black"
            min="0"
            value={count}
            onChange={(e) => {
              if (e.target.value < 0) {
                setCount(Math.abs(e.target.value));
              } else {
                setCount(e.target.value)
              }
            }}
            type="number"
          />
        </div>
        <div className="flex gap-1">
          <label>Duration</label>
          <input className="border rounded border-black" min="0" value={duration}
            onChange={(e) => {
              if (e.target.value < 0) {
                setDuration(Math.abs(e.target.value));
              } else {
                setDuration(e.target.value)
              }
            }}
            type="number" />
        </div>
        <div className="flex justify-end gap-4 mx-2">
          <button className="border rounded border-black py-2 px-4 bg-blue-200" onClick={handleEdit}>Save Activity</button>
          <button className="border rounded border-black py-2 px-4 bg-red-400" onClick={handleDelete}>{isLoading ? <Loader /> : "Remove Activity"}</button>
        </div>
      </>}
    </div>
  );
}

export default Activity;
