import { useQuery } from 'react-query';
import { getUserData, getRoutines } from '../api';

const Profile = ({
  token
}) => {

  const { data } = useQuery({
    queryKey: "user",
    queryFn: () => getUserData(token)
  });

  const { data: routines, isLoading } = useQuery({
    queryKey: ["routines"], 
    queryFn: getRoutines
  });

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
