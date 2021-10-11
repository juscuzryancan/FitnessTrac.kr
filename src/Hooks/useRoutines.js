import { useQuery } from 'react-query';

const useRoutines = () => {
	const result = useQuery('routines', /*callback for fetch*/);
	
};

export default useRoutines;