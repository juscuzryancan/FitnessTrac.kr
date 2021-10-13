import { 
	Link as RouterLink, 
	MemoryRouter as Router 
} from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Children } from 'react';

const LinkRouter = () => {
	return (
		<Box sx={{ typography: 'body1'}}>
			<Router>
				<Link component={RouterLink} to='/gannbuuu'>
					{Children}
				</Link>
			</Router>
		</Box>
	);
}