import { AddRoutine } from './';

const Profile = ({userRoutines, setUserRoutines, user, token, routines, setRoutines, handleRoutines}) => {

  if(userRoutines.length === 0) {
    return (
      <>
        {token && <AddRoutine handleRoutines={handleRoutines} setRoutines={setRoutines} routines={routines} token={token} />}
        <div>
          No Routines Found
        </div>
      </>
    )
  }

  return (
    <div className='profile'>
    <h1>My account</h1>
      <div>
        <h2>My Routines</h2>
      </div>
    </div>
  )
}

export default Profile;
