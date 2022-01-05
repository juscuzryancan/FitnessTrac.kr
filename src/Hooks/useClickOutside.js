import { useEffect } from 'react';

const useClickOutside = (ref, cb) => {

	const handleClickOutside = (e) => {
		if(!ref.current.contains(e.target)) {
			cb();
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [ref, cb])

}

export default useClickOutside;