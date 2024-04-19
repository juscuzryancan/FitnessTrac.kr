import { useMutation, useQueryClient } from "react-query";
import { createRoutine } from "../api";
import { useUser } from "../contexts/useUser";
import { RoutineForm, RoutineModal } from "./";

const AddRoutine = ({
  showModal,
  closeModal
}) => {
  const { token } = useUser();

  const queryClient = useQueryClient();

  const { mutate, error } = useMutation({
    mutationFn:  (data) => createRoutine(token, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"]);
      closeModal();
    },
  });

  return (
    <RoutineModal closeModal={closeModal} showModal={showModal}>
      <div className="text-2xl p-4">New Routine</div>
      <RoutineForm 
        onSubmit={mutate} 
        mutationError={error}
      />
    </RoutineModal>
  );
}

export default AddRoutine;
