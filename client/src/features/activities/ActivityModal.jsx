import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import clsx from 'clsx';

const ActivityModal = ({
  showModal,
  closeModal,
  children
}) => {
  const ref = useRef();
  useClickOutside(ref, closeModal);

  return (
    <div
      ref={ref}
      className={clsx(
        "min-h-[400px] min-w-[400px]  p-4 bg-gray-400 rounded shadow",
        "flex flex-col items-center",
        !showModal && "hidden",
        showModal && "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      )}>
      <button onClick={closeModal} className="absolute top-4 left-4 rounded border-black border w-8 h-8 bg-red-400">X</button>
      {children}
    </div>
  );
}

export default ActivityModal;
