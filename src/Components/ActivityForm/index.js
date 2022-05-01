import './styles.css'

const ActivityForm = ({activity, setActivity, handleSubmit}) => {

	return (
		<form className="activity-form" onSubmit={handleSubmit}>
			<input required value={activity.name} placeholder="Activity Name" onChange={(e) => {setActivity({...activity, name: e.target.value})}}/>
			<input required value={activity.description} placeholder="Activity Description" onChange={(e) => {setActivity({...activity, description: e.target.value})}}/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default ActivityForm;