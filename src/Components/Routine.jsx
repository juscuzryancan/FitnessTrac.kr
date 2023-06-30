import { Fragment } from "react";
import { Activity } from "./";
import { useToken } from "../contexts/useToken";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteRoutine, getUserData } from "../api";

const Routine = ({
  routine: {
    activities,
    creatorName,
    goal,
    name,
    id
  }, 
  children
}) => {

  const queryClient = useQueryClient();
  const { token } = useToken();
  const { data: user } = useQuery({
    queryKey: "user",
    queryFn: () => getUserData(token)
  });

  const { mutate: handleClick } = useMutation({
    mutationFn: () => deleteRoutine(token, id),
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"], { exact: true});
    }
  });

  return (
    <div className="border rounded border-black
      p-4"
    >
      <div className="flex flex-col items-center border rounded p-2 shadow">
        <div className="flex gap-4 flex-grow items-end">
          <div className="text-xl">{name} - {creatorName}</div>
        </div>
        <div className="p-2">
          <h4>{goal}</h4>
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg my-2">Exercises</div>
        <div className="flex flex-col gap-2">
          {activities?.map((activity, i) => {
            return (
              <Fragment key={i}>
                <Activity activity={activity} />
              </Fragment>
            );
          })}
          {children}
        </div>
      </div>
      {
        creatorName === user?.username 
          && <div
            className="flex justify-end gap-4 mx-2"
          >
            <button className="border rounded border-black py-2 px-4 bg-blue-200">Edit</button>
            <button onClick={handleClick} className="border rounded border-black py-2 px-4 bg-red-400">Delete</button>
          </div>
      }
    </div>
  )
}

export default Routine;
