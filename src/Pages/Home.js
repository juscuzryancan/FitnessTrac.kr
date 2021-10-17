import Typography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';

const Home = () => {
	return (
		<Box sx={{
			height: '80vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignContent: 'center'
		}}>
			<Box
				sx={{flexGrow: '1'}}>
				<img src="https://t4.ftcdn.net/jpg/01/19/02/41/240_F_119024139_myvWSH6zo9kwTk91Sn674RA7CfkxI3Ru.jpg" />
				<Typography variant="h5" sx={{textAlign: 'center'}}>Welcome to FitnessTrac.kr</Typography>
				<Box>
					<Typography>The Best Routines. For Your Best Results.</Typography>
				</Box>
				<img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
				<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<Typography variant="h5">Join us for free</Typography><Button>Sign Up</Button>
				</Box>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<h5>Contact Me</h5>
				<Box>
					<Link target="_blank" href='https://www.linkedin.com/in/ryanrileypuzon/'><LinkedInIcon /></Link>
					<Link target="_blank" href='https://github.com/rpuzon01'><GitHubIcon /></Link>
				</Box>
			</Box>		
		</Box>
	);
}

export default Home;