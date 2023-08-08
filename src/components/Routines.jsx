import { Routine, Loader } from './';
import { useQuery } from "react-query";
import { getRoutines } from "../api";

const Routines = ({
}) => {
  const { data: routines, isLoading } = useQuery({
    queryKey: ["routines"],
    queryFn: getRoutines
  });

  return (
    <>
      <div
        className="flex justify-center
        text-2xl p-4"
      >Routines</div>
      <div className="flex flex-col gap-4
        p-4"
      >
        {
          isLoading
            ? <div className="flex justify-center">
              <Loader />
            </div>
            : routines.map((routine) => <Routine key={routine.id} routine={routine} />)
        }
      </div>
    </>
  );
}

export default Routines;
