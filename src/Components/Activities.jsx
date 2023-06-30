import { AddActivity, Activity, Loader } from './';
import { useQuery } from "react-query";
import { getActivities } from "../api";

const Activities = ({token}) => {
  const { data: activities, isLoading } = useQuery("routines", getActivities);

  return (
    <>
      {token && <button>Create an Activity</button>}
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
