import {useState, useContext} from 'react'
import { Menu, MenuItem } from "@mui/material";
import Button from '@mui/material/Button'
import { useHistory } from 'react-router';
import UserContext from '../Contexts/UserContext';


const BasicMenu = (
) => {
	const history = useHistory();
	const {token} = useContext(UserContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem 
					onClick={() => {
						setAnchorEl(null)
						history.push('/routines')
					}}
				>Routines</MenuItem>
        <MenuItem 
					onClick={() => {
						setAnchorEl(null);
						history.push('/activities')
					}}
				>My account</MenuItem>
				{(!token) ?
        <MenuItem 
					onClick={() => {
						setAnchorEl(null);
						history.push('/authentication')
					}}
				>Login/Register</MenuItem> :
				<MenuItem
          onClick={() => {
						setToken('');
						localStorage.removeItem('token');
					}}
				>Logout</MenuItem>}
      </Menu>
    </div>
  );
}

export default BasicMenu;