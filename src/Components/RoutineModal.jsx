import clsx from 'clsx';
import { RoutineForm } from './';
import { useClickOutside } from "../Hooks";
import { useRef } from "react";

const RoutineModal = ({
  showModal,
  closeModal
}) => {
  const ref = useRef();
  useClickOutside(ref, closeModal);

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
      <button onClick={closeModal} className="absolute top-4 left-4 rounded border-black border w-8 h-8 bg-red-100">X</button>
      <div className="text-2xl p-4">New Routine</div>
      <RoutineForm onSubmit={onSubmit}/>
    </div>
  );
}

export default RoutineModal;
