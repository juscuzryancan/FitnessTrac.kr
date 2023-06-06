import { useState, useEffect } from 'react';
import { ActivityForm } from './';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditActivity = ({activities, handleActivities, token}) => {
  const [activity, setActivity] = useState(null);
  const { activityId } = useParams();
  const navigate = useNavigate();

  const handleActivity = () => {
    let activityToBeSet;
    for(let i = 0; i < activities.length; i++) {
      if(activities[i].id === (activityId * 1)) {
        activityToBeSet = activities[i];
      }
    }
    setActivity(activityToBeSet);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.patch(`/api/activities/${activityId}`, activity, {headers: {Authorization: `Bearer ${token}`}});
      if (data.success === false) {
        //TODO:make error handling
        return;
      }
      await handleActivities();
      navigate("/activities");

    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    handleActivity();
    }, [activities])

  if(!activity){
    return (<>hello</>)
  }

  return (
    <div className='edit-activity-container'>
      <h2 className='edit-activity-header'>Edit Activity</h2>
      <ActivityForm activity={activity} setActivity={setActivity} handleSubmit={handleSubmit}/>
    </div>
    );
}

export default EditActivity;
