// import {
// 	Container,
// 	Grid,
// 	Link,
// } from '@mui/material';
// import React from 'react';
// import { Box } from '@mui/system';
// const Footer = () => {
// 	return (
// 		// 		<div>
// 		// 	<Typography variant='h5'>Ready to get started ?</Typography>

// 		// 	<Typography variant='h5' color='text.secondary'>
// 		// 		Create your account now?
// 		// 	</Typography>
// 		// </div>

// 		// <AppBar postition='static' color='primary' sx={{ top: 'auto', bottom: 0 }}>
// 		// 	<Grid container spacing={5} padding={5}>
// 		// 		<Box>
// 		// 			<Grid item md={3} xs={12}>
// 		// 				<CodeOffIcon />
// 		// 			</Grid>
// 		// 		</Box>
// 		// 		<Grid item md={3} xs={12}>
// 		// 			<Grid container>
// 		// 				<div style={{ align: 'center', alignContent: 'center' }}>
// 		// 					<Grid item xs={12}>
// 		// 						<Typography variant='h6' color='initial'>
// 		// 							ABOUT INDECODE
// 		// 						</Typography>
// 		// 					</Grid>
// 		// 					<Grid item xs={12}>
// 		// 						<Button variant='text' className={classes.button}>
// 		// 							Home
// 		// 						</Button>
// 		// 						<Button variant='text'>Get in touch</Button>
// 		// 						<Button variant='text'>FAQs</Button>
// 		// 					</Grid>
// 		// 				</div>
// 		// 			</Grid>
// 		// 		</Grid>
// 		// 		<Grid item md={3} xs={12}>
// 		// 			<div style={{ align: 'center', alignContent: 'center' }}>
// 		// 				<Typography variant='h6' color='initial'>
// 		// 					ABOUT INDECODE
// 		// 				</Typography>
// 		// 				<Button variant='text'>Home</Button>
// 		// 				<Button variant='text'>Get in touch</Button>
// 		// 				<Button variant='text'>FAQs</Button>
// 		// 			</div>
// 		// 		</Grid>
// 		// 		<Grid item md={3} xs={12}>
// 		// 			<div style={{ align: 'center', alignContent: 'center' }}>
// 		// 				<Typography variant='h6' color='initial'>
// 		// 					ABOUT INDECODE
// 		// 				</Typography>
// 		// 				<Button variant='text'>Home</Button>
// 		// 				<Button variant='text'>Get in touch</Button>
// 		// 				<Button variant='text'>FAQs</Button>
// 		// 			</div>
// 		// 		</Grid>
// 		// 	</Grid>
// 		// </AppBar>\\\

// 		<Box
// 			px={{ xs: 3, sm: 10 }}
// 			py={{ xs: 5, sm: 10 }}
// 			bgcolor='grey'
// 			color='white'
// 		>
// 			<Container maxWidth='1g'>
// 				<Grid container spacing={5}>
// 					<Grid item xs={12} sm={4}>
// 						<Box borderBottom={1}>Help</Box>
// 						<Box>
// 							<Link href='/' color='inherit'>
// 								Contact
// 							</Link>
// 						</Box>
// 						<Box>
// 							<Link href='/' color='inherit'>
// 								Privacy
// 							</Link>
// 						</Box>
// 						<Box>
// 							<Link href='/' color='inherit'>
// 								Support
// 							</Link>
// 						</Box>
// 					</Grid>
// 					<Grid item xs={12} sm={4}>
// 						<Box borderBottom={1}>Account</Box>
// 						<Box>
// 							<Link href='/' color='inherit'>
// 								Login
// 							</Link>
// 						</Box>
// 						<Box>
// 							<Link href='/' color='inherit'>
// 								Register
// 							</Link>
// 						</Box>
// 					</Grid>
// 					<Grid item xs={12} sm={4}>
// 						<Box borderBottom={1}>Messages</Box>
// 						<Box>
// 							<Link href='/' color='inherit'>
// 								Rankings
// 							</Link>
// 						</Box>
// 						<Box>
// 							<Link href='/' color='inherit'>
// 								History
// 							</Link>
// 						</Box>
// 						<Box>
// 							<Link href='/' color='inherit'>
// 								Extra
// 							</Link>
// 						</Box>
// 					</Grid>
// 				</Grid>
// 				<Box textAlign='center' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
// 					Indecode &reg; {new Date().getFullYear()}
// 				</Box>
// 			</Container>
// 		</Box>
// 	);
// };

// export default Footer;

import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Grid,
	IconButton,
	TextField,
	Button,
} from '@mui/material';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
const Footer = () => (
	<>
		<Grid
			container
			justify='center'
			style={{ minHeight: '212px', background: '#EEEDEC', marginTop: '20px' }}
			spacing={5}
			padding={5}
		>
			<Grid item xs={12} justifyContent='center'>
				<Typography variant='h5'>Indecode</Typography>
			</Grid>
			<Grid item xs={12} sm={4} justifyContent='center'>
				<Typography>Connect with us on social media</Typography>

				<IconButton aria-label='instagram'>
					<Instagram />
				</IconButton>
				<IconButton aria-label='instagram'>
					<Twitter color='blue' />
				</IconButton>
			</Grid>
			<Grid item xs={12} sm={4} justifyContent='center'>
				<Typography>Connect with us on social media</Typography>

				<IconButton aria-label='instagram'>
					<Instagram />
				</IconButton>
			</Grid>
			<Grid item xs={12} sm={4} justifyContent='center'>
				<Typography>Newsletter</Typography>
				<br></br>
				<Typography>Sign up and recieve the latest tips via email</Typography>
				<Typography sx={{ fontWeight: '700', margin: '5px 0px' }}>
					Write your email
				</Typography>
				<TextField id='outlined-email' label='Email' type='email' />
				<Button variant='outlined' sx={{ marginTop: '5px' }}>
					Subscribe
				</Button>
			</Grid>
		</Grid>
		<AppBar position='static' elevation={0} component='footer' color='default'>
			<Toolbar style={{ justifyContent: 'center', background: '#DFDFDF' }}>
				<Typography variant='caption'>©2020</Typography>
			</Toolbar>
		</AppBar>
	</>
);

export default Footer;
