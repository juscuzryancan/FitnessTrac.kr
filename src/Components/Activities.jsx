import { Activity, AddActivity } from './';

const Activities = ({token, activities, setActivities}) => {

  return (
    <div className='activities'>
      {token && <AddActivity activities={activities} setActivities={setActivities} token={token}/>}
      <h2>Activities</h2>
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
