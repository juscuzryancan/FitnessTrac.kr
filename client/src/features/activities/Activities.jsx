import { useState } from "react";
import AddActivity from './AddActivity';
import Activity from './Activity';
import Loader from '../../components/Loader';
import { useSelector } from "react-redux";
import { useGetActivitiesQuery } from "./activitySlice";

const Activities = () => {
  const { data: activities, isLoading } = useGetActivitiesQuery();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  }

  console.log(activities);
  const token = "";

  return (
    <>
      {/* <AddActivity showModal={showModal} closeModal={closeModal} /> */}
      {token &&
        <div className="flex justify-center">
          <button
            className="flex bg-blue-200 justify-center border border-black rounded-full p-4"
            onClick={() => {
              setShowModal(!showModal)
            }}
          >Create an Activity</button>
        </div>
      }
      <div
        className="flex justify-center
        text-2xl p-4"
      >Activities</div>
      <div className="flex flex-col gap-4 p-4">
        {
          isLoading
            ? <div className="flex justify-center">
              <Loader />
            </div>
            : activities.map((activity) => {
              return (
                <Activity key={activity.id} token={token} activity={activity} />
              );
            })
        }
      </div>
    </>
  );
}

export default Activities;
