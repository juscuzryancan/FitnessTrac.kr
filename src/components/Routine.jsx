import { useState, Fragment } from "react";
import { Activity, EditRoutine } from "./";
import { useToken } from "../contexts/useToken";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteRoutine, getUserData } from "../api";

const Routine = ({
  routine,
  children
}) => {

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const { activities, creatorName, goal, name, id } = routine;
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
    <>
      <EditRoutine routine={routine} closeModal={closeModal} showModal={showModal}/>
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
          {activities?.length === 0 
            ? <div className="text-lg my-2">This Routine currently has no Exercises</div>
            : <div className="text-lg my-2">Exercises</div>}
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
              <button onClick={openModal}className="border rounded border-black py-2 px-4 bg-blue-200">Edit</button>
              <button onClick={handleClick} className="border rounded border-black py-2 px-4 bg-red-400">Delete</button>
            </div>
        }
      </div>
    </>
  )
}

export default Routine;