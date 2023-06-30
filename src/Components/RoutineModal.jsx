import { useRef } from "react";
import { useClickOutside } from "../hooks";
import { AddRoutine } from "./";
import clsx from 'clsx';

const RoutineModal = ({
  showModal,
  closeModal
}) => {
  const ref = useRef();
  useClickOutside(ref, closeModal);

  return (
    <div 
      ref={ref}
      className={clsx(
      "w-[400px] h-[400px] bg-gray-400 rounded shadow",
      "flex flex-col items-center",
      !showModal && "hidden",
      showModal && "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    )}>
      <button onClick={closeModal} className="absolute top-4 left-4 rounded border-black border w-8 h-8 bg-red-400">X</button>
      <div className="text-2xl p-4">New Routine</div>
      <AddRoutine closeModal={closeModal}/>
    </div>
  );
}

export default RoutineModal;
