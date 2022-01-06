import './HamburgerIcon.css';
const HamburgerIcon = () => {
	return (
		<svg className="hamburger-icon" viewBox="0 0 100 80" width="40" height="40">
			<rect className="rect" width="100" height="20"></rect>
			<rect className="rect" y="30" width="100" height="20"></rect>
			<rect className="rect" y="60" width="100" height="20"></rect>
		</svg>
	)
}

export default HamburgerIcon;