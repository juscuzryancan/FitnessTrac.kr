import { Link } from 'react-router-dom';
import { Routine } from './';

const Routines = ({
  token, 
  routines, 
}) => {

  return (
    <div className="routines">
      <h2>Routines</h2>
      {token && <h4>Create/Edit your own routine in <Link className="routines-link" to="/profile">My Account</Link></h4>}
      {routines?.length > 0 &&
        routines.map((routine) => {
          return (
            <Routine key={routine.id} routine={routine} />
          );
        })}
    </div>
  );
}

export default Routines;
