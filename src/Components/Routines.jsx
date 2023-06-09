import { useState, useRef, Fragment } from 'react';
import { Activity } from './';
import clsx from 'clsx';
import RoutineForm from './RoutineForm';
import { useClickOutside } from "../Hooks";

const RoutineModal = ({
  showModal,
  handleClickOutside
}) => {
  const ref = useRef();
  useClickOutside(ref, handleClickOutside);

  const onSubmit = () => {
    console.log("hello")
  }
   
  return (
    <div 
      ref={ref}
      className={clsx(
      "w-[400px] h-[400px] bg-sky-200 rounded shadow",
      "flex flex-col items-center",
      !showModal && "hidden",
      showModal && "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    )}>
      <button className="absolute top-4 left-4 rounded border-black border w-8 h-8 bg-red-100">X</button>
      <div className="text-2xl p-4">New Routine</div>
      <RoutineForm onSubmit={onSubmit}/>
    </div>
  );
}

const Routine = ({routine, children}) => {

  const {
    activities,
    creatorName,
    goal,
    name,
  } = routine;

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
        <div className="text-lg border-b-2 border-b-black">Exercises</div>
        <div className="flex flex-col gap-2">
          {activities.map((activity, i) => {
            return (
              <Fragment key={i}>
                <Activity activity={activity} />
              </Fragment>
            );
          })}
          {children}
        </div>
      </div>
    </div>
  )
}

const Routines = ({
  token, 
  routines, 
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClickOutside = () => {
    setShowModal(false);
  }

  return (
    <>
      <RoutineModal handleClickOutside={handleClickOutside} showModal={showModal}/>
      <h2 
        className="flex justify-center
        text-2xl p-4"
      >Routines</h2>
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
        {routines?.length > 0 && routines.map((routine) => {
          return (
            <Routine key={routine.id} routine={routine} />
          );
        })}
      </div>
    </>
  );
}

export default Routines;
