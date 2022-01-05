import './NavMenu.css';
import { HamburgerIcon } from '../';
import { useRef, useEffect } from 'react';
import { useClickOutside } from '../../Hooks';

const NavMenu = ({
	setNavMenuOpen
}) => {


	const ref = useRef(null);
	const handleClick = () => {
		setNavMenuOpen(false);
	}
	useClickOutside(ref, handleClick);

	useEffect(() => {
		window.addEventListener("click", handleClick);

		return window.removeEventListener("click", handleClick);
	}, [])


	return (
		<ul ref={ref} className='nav-menu'>
			<li>Routines</li>
			<li>Activities</li>
			<li>Login/Register</li>
		</ul>
	)
}


export default NavMenu;