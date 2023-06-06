const RoutineForm = ({routine, setRoutine, handleSubmit, activities}) => {

  return (
    <form className="routine-form" onSubmit={handleSubmit}>
      <input required value={routine.name} placeholder="Routine Name" onChange={(e) => {setRoutine({...routine, name: e.target.value})}}/>
      <input required value={routine.goal} placeholder="Routine Goal" onChange={(e) => {setRoutine({...routine, goal: e.target.value})}}/>
      <label>Public:</label>
      <input value={routine.isPublic} type="checkbox" onChange={(e) => {setRoutine({...routine, isPublic: e.target.checked})}}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default RoutineForm;
