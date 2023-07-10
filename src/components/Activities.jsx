import { useState } from "react";
import { AddActivity, Activity, Loader } from './';
import { useToken } from '../contexts/useToken';
import { useQuery } from "react-query";
import { getActivities } from "../api";

const Activities = () => {
  const { token } = useToken();
  const { data: activities, isLoading } = useQuery("activities", getActivities);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <AddActivity showModal={showModal} closeModal={closeModal}/>
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
          ? <div> 
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
