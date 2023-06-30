import { useMutation, useQueryClient } from "react-query";
import { RoutineForm } from ".";
import { createRoutine } from "../api";
import { useToken } from "../contexts/useToken";

const EditRoutine = ({
  closeModal
}) => {
  const { token } = useToken();
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation({
    mutationFn:  (data) => editRoutine(token, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["routines"], { exact: true});
      closeModal();
    },
  });

  return (
    <RoutineForm 
      onSubmit={mutate} 
      mutationError={error}
    />
  );
}

export default EditRoutine;
