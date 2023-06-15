import { Fragment } from "react";
import { Activity } from "./";

const Routine = ({
  routine: {
    activities,
    creatorName,
    goal,
    name,
  }, 
  children
}) => {

  return (
    <div className="border rounded border-black
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
        <div className="text-lg border-b-2 border-b-black my-2">Exercises</div>
        <div className="flex flex-col gap-2">
          {activities?.map((activity, i) => {
            return (
              <Fragment key={i}>
                <Activity activity={activity} />
              </Fragment>
            );
          })}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Routine;
