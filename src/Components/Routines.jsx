import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Activity } from './';

const Routine = ({routine, children}) => {

  const {
    activities,
    creatorId,
    creatorName,
    goal,
    isPublic,
    name,
    id
  } = routine;

  return (
    <div className="border rounded 
      p-4"
    >
      <div className="flex flex-col items-center border rounded p-2 shadow">
        <div className="flex gap-4 flex-grow items-end">
          <div className="text-xl">{name} - {creatorName}</div>
        </div>
        <div className="p-2">
          <h4>{goal}</h4>
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg border-b-2 border-b-black">Exercises</div>
        <div className="flex flex-col gap-2">
          {activities.map((activity, i) => {
            return (
              <Activity key={i} activity={activity} />
            );
          })}
          {children}
        </div>
      </div>
    </div>
  )
}

const Routines = ({
  token, 
  routines, 
}) => {

  console.log("routiens", routines);

  return (
    <>
      <h2 
        className="flex justify-center
        text-xl p-4"
      >Routines</h2>
      {token && <h4>Create/Edit your own routine in <Link to="/profile">My Account</Link></h4>}
      <div className="flex flex-col gap-4
        p-4"
      >
        {routines?.length > 0 && routines.map((routine) => {
          return (
            <Routine key={routine.id} routine={routine} />
          );
        })}
      </div>
    </>
  );
}

export default Routines;
