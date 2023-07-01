import { useMutation, useQueryClient } from "react-query";
import { RoutineForm } from ".";
import { useToken } from "../contexts/useToken";

const EditRoutine = ({
  closeModal
}) => {
  const { token } = useToken();
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation({
    mutationFn:  (data) => editRoutine(token, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"], { exact: true });
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

export default EditRoutine;
