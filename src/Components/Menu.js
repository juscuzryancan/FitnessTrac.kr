import {useState, useContext} from 'react'
import { Menu, MenuItem } from "@mui/material";
import Button from '@mui/material/Button'
import { useHistory } from 'react-router';
import UserContext from '../Contexts/UserContext';
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu';


const BasicMenu = (
) => {
	const history = useHistory();
	const {token, setToken} = useContext(UserContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
				<MenuIcon/>
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
				>Activities</MenuItem>
				{(token) && 
				<MenuItem
					onClick={() => {
						setAnchorEl(null);
						history.push('/myaccount')
					}}
				>My Account</MenuItem>}
				{(!token) ?
        <MenuItem 
					onClick={() => {
						setAnchorEl(null);
						history.push('/login')
					}}
				>Login/Register</MenuItem> :
				<MenuItem
          onClick={() => {
						setToken('');
						localStorage.removeItem('token');
            history.push('/');
					}}
				>Logout</MenuItem>}
      </Menu>
    </Box>
  );
}

export default BasicMenu;