import { useMutation, useQueryClient } from "react-query";
import { createActivity } from "../api";
import { useUser } from "../contexts/useUser";
import { ActivityModal, ActivityForm } from "./";

const AddActivity = ({
  showModal,
  closeModal
}) => {
  const { token } = useUser();

  const queryClient = useQueryClient();

  const { mutate, error } = useMutation({
    mutationFn:  (data) => createActivity(token, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["activities"]);
      closeModal();
    },
  });

  return (
    <ActivityModal closeModal={closeModal} showModal={showModal}>
      <div className="text-2xl p-4">New Activity</div>
      <ActivityForm 
        onSubmit={mutate} 
        mutationError={error}
      />
    </ActivityModal>
  );
}

export default AddActivity;
