const RoutineForm = ({routine, setRoutine, handleSubmit}) => {

	return (
		<form className="routine-form" onSubmit={handleSubmit}>
			<input required value={activity.name} placeholder="Routine Name" onChange={(e) => {setActivity({...activity, name: e.target.value})}}/>
			<input required value={activity.description} placeholder="Routine Goal" onChange={(e) => {setActivity({...activity, description: e.target.value})}}/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default RoutineForm;