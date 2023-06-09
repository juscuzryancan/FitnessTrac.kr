import { AddActivity, Activity } from './';

const Activities = ({token, activities, setActivities}) => {

  return (
    <div className="p-4">
      {token && <AddActivity activities={activities} setActivities={setActivities} token={token}/>}
      <div className="text-2xl flex justify-center">Activities</div>
      {
        activities.length > 0 && activities.map((activity) => {
          return (
            <Activity key={activity.id} token={token} activity={activity} />
          );
        })
      }
    </div>
  );
}

export default Activities;
