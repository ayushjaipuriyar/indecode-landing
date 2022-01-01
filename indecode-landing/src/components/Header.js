import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';

export default function MainNavigation() {
	const styles = (theme) => ({
		row: {
			flexGrow: 1,
		},
		grow: {
			flexGrow: 1,
		},
		container: {
			width: 1170,
			margin: 'auto',
		},
		buttonFontSize: {
			fontSize: '11px',
			color: '#a1a1a1',
		},

		AppBar: {
			//height:400,
			//background: `url("http://lorempixel.com/1920/1080/nature") no-repeat center center`,
			backgroundColor: '#fff',
			backgroundSize: 'cover',
		},
		mainLogo: {
			color: '#a1a1a1',
			justifyContent: 'left',
			'&:hover': {
				background: 'transparent',
			},
		},

		avatar: {
			height: '100%',
			borderRadius: 0,
		},

		loginButton: {
			background: '#e91e63',
			color: '#fff',
			borderRadius: '25px',
			padding: '0px 25px',

			'&:hover': {
				background: 'blue',
				boxShadow: '0px 2px 10px #888888',
			},
		},
	});

	withStyles(styles);

	const [open, setState] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState(open);
	};

	return (
		<AppBar position='static' style={{ background: '#fff', color: '#000' }}>
			<Container maxWidth='lg' disableGutters='true'>
				<Toolbar style={{ background: '#fff', color: '#000' }}>
					<Button>
						<Avatar src='https://photos.angel.co/startups/i/8573832-bc2fca281e3059c05445e04b427e6db2-medium_jpg.jpg?buster=1635523357' />
					</Button>
					<Typography variant='h6' sx={{ flexGrow: 7, fontWeight: 700 }}>
						Indecode
					</Typography>
					<Box
						component='div'
						sx={{
							display: {
								xs: 'none',
								sm: 'block',
							},
						}}
					>
						<Button color='inherit' sx={{ fontSize: '14px', color: 'a1a1a1' }}>
							Home
						</Button>
						<Button color='inherit' sx={{ fontSize: '14px', color: 'a1a1a1' }}>
							About Us
						</Button>
						<Button color='inherit' sx={{ fontSize: '14px', color: 'a1a1a1' }}>
							Contact us
						</Button>
						{/* <Button
							variant='outlined'
							color='inherit'
							sx={{ fontSize: '14px', color: 'a1a1a1', borderRadius: '100px' }}
						>
							Login
						</Button> */}
					</Box>
					<Box
						component='div'
						sx={{
							display: {
								xs: 'none',
								sm: 'block',
							},
						}}
					></Box>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='open drawer'
						onClick={toggleDrawer(true)}
						sx={{
							mr: 2,
							display: {
								xs: 'block',
								sm: 'none',
							},
						}}
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor='right'
						open={open}
						onClose={toggleDrawer(false)}
						onOpen={toggleDrawer(true)}
					>
						<Box
							sx={{
								p: 2,
								height: 1,
								backgroundColor: '#fff',
							}}
						>
							<IconButton sx={{ mb: 2 }}>
								<CloseIcon onClick={toggleDrawer(false)} />
							</IconButton>

							<Divider sx={{ mb: 2 }} />

							<Box sx={{ mb: 2 }}>
								<ListItemButton>
									<ListItemText primary='Login' />
								</ListItemButton>

								<ListItemButton>
									<ListItemText primary='Profile' />
								</ListItemButton>

								<ListItemButton>
									<ListItemText primary='Other' />
								</ListItemButton>
							</Box>
						</Box>
					</Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
