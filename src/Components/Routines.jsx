import { useState } from 'react';
import { Routine, Loader, RoutineModal } from './';
import { useQuery } from "react-query";
import { getRoutines } from "../api";

const Routines = ({
  token, 
}) => {
  const [showModal, setShowModal] = useState(false);
  const { data: routines, isLoading } = useQuery("routines", getRoutines);

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <RoutineModal closeModal={closeModal} showModal={showModal}/>
      <div 
        className="flex justify-center
        text-2xl p-4"
      >Routines</div>
      {token && 
        <div className="flex justify-center ">
          <button 
            className="border border-black rounded-full p-4"
            onClick={() => setShowModal(!showModal)}
          >
            Create a Routine
          </button>
        </div>}
      <div className="flex flex-col gap-4
        p-4"
      >
        {
          isLoading 
            ? <div className="flex justify-center"> 
              <Loader/> 
            </div>
            : routines.map((routine) => {
              return (
                <Routine key={routine.id} routine={routine} />
              );
            })}
      </div>
    </>
  );
}

export default Routines;
