import './NavMenu.css';
import { HamburgerIcon } from '../';
import { useRef, useEffect } from 'react';

const NavMenu = ({
	setNavMenuOpen
}) => {
	const ref = useRef(null);

	const handleClick = (e) => {
		console.log('yo');
		if (ref.current && !ref.current.contains(e.target))	 {
			setNavMenuOpen(false);
			console.log('hello');
		}
	}
	console.log(ref);

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return document.removeEventListener("click", handleClick);
	}, [])


	return (
		<ul ref={ref} className='nav-menu'>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
		</ul>
	)
}


export default NavMenu;