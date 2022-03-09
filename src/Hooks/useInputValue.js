import { useState, useEffect } from 'react';

//reference => input bar
const useInputValue = (x, inputElem) => {

	const [state, setState] = useState(x);
	const handleClickOutside = (e) => {
		if(!ref.current.contains(e.target)) {
			cb();
		}
	}

	const handleChange = (e) => {
		//update the state
		console.log(e);
		setState(e.target.value)
	}
	//callback will determine the setting steps seeing if the state is a string or object (primitive vs nonprim)

	useEffect(() => {
		inputElem.addEventListener("change", handleChange)	
		// document.addEventListener("mousedown", handleClickOutside);

		return () => {
			inputElem.removeEventListener("change", handleChange);
		}
	}, [])

	return [state, setState];
}

export default useInputValue;