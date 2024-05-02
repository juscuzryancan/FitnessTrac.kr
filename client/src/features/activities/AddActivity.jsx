import ActivityModal from "./ActivityModal";
import ActivityForm from "./ActivityForm";

const AddActivity = ({
  showModal,
  closeModal
}) => {

  const mutate = () => { };
  const error = {};


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
