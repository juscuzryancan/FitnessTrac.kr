import { useNavigate } from "react-router-dom";

const Activity = ({
  activity, 
  token,
}) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    description,
    duration,
    count
    } = activity;

  return (
    <div className="border border-black rounded p-2">
      <div className="text-xl">{name}</div>
      <div>{description}</div>
      {duration && <div>Duration: {duration}</div>}
      {count && <div>Count: {count}</div>}
      {token && <>
        <button onClick={() => navigate(`/activity/${id}`)}>Edit Activity</button>
      </>}
    </div>
    );
}

export default Activity;
