import { useState } from "react";
import { useQuery } from 'react-query';
import { useUser } from '../contexts/useUser';
import { Loader, Routine, AddRoutine } from '.';
import { getUserData, getRoutinesByUsername } from '../api';

const Profile = () => {

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  }

  const { token } = useUser();

  const { data, isError: userError, isLoading: userLoading } = useQuery({
    queryKey: "user",
    queryFn: () => getUserData(token)
  });

  const { data: routines, isLoading, isError: routineError } = useQuery({
    queryKey: ["routines", data?.username], 
    queryFn: () => getRoutinesByUsername(token, data?.username)
  });

  if (userLoading || !token) {
    return (
      <div>hello user is loading</div>
    )
  }

  if (userError || routineError) {
    return <div
      className="flex justify-center
      text-2xl p-4"
    >Please Login To Access your Account</div>
  }

  return (
    <>
      <AddRoutine closeModal={closeModal} showModal={showModal} />
      <div className="flex justify-center">
        <button
          className="flex bg-blue-200 justify-center border border-black rounded-full p-4"
          onClick={() => setShowModal(!showModal)}
        >
          Create a Routine
        </button>
      </div>
      <div
        className="flex justify-center
        text-2xl p-4"
      >My Routines</div>
      <div>
      <div className="flex flex-col gap-4
        p-4"
      >
        {
          isLoading
            ? <div className="flex justify-center"><Loader /></div>
            : routines.length === 0 
              ? <div className="text-center my-2 text-2xl ">Your Account has no routines</div>
              : routines?.map((routine) => <Routine key={routine.id} isProfile routine={routine} />)
        }
      </div>
      </div>
    </>
  )
}

export default Profile;
