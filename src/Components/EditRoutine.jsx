import { useMutation, useQueryClient } from "react-query";
import { RoutineForm, RoutineModal } from ".";
import { useToken } from "../contexts/useToken";
import { editRoutine } from "../api";

const EditRoutine = ({
  showModal,
  closeModal,
  routine
}) => {
  console.log(routine)
  const { token } = useToken();
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation({
    mutationFn:  (data) => { 
      editRoutine(token, {...data, id: routine.id}) 
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"], { exact: true });
      closeModal();
    },
  });

  return (
    <RoutineModal closeModal={closeModal} showModal={showModal}>
      <div className="text-2xl p-4">Edit Your Routine</div>
      <RoutineForm 
        routine={routine}
        onSubmit={mutate} 
        mutationError={error}
      />
    </RoutineModal>
  );
}

export default EditRoutine;
