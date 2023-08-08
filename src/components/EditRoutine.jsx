import { useMutation, useQueryClient } from "react-query";
import { ActivitySelect, RoutineForm, RoutineModal } from ".";
import { useUser } from "../contexts/useUser";
import { editRoutine } from "../api";

const EditRoutine = ({
  showModal,
  closeModal,
  routine
}) => {
  const { token } = useUser();
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation({
    mutationFn:  (data) => { 
      editRoutine(token, {...data, id: routine.id}) 
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"]);
      closeModal();
    },
  });

  return (
    <RoutineModal closeModal={closeModal} showModal={showModal}>
      <div className="text-2xl">Edit Your Routine</div>
      <RoutineForm 
        routine={routine}
        onSubmit={mutate} 
        mutationError={error}
      />
      <ActivitySelect routine={routine}/>
      <div className="text-center mb-2">You can add more Activities on the Activities Page*</div>
      <div className="text-center">Changing your Routine from Public to Private will remove it from the Routines Page*</div>
    </RoutineModal>
  );
}

export default EditRoutine;
