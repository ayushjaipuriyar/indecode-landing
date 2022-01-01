import React from 'react';
import {
	CardContent,
	Typography,
	CardActions,
	Button,
	Grid,
	Box,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Cardcontent = () => {
	return (
		<React.Fragment>
			<Box>
				<Grid container spacing={3} padding={5}>
					<Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
						<Card>
							<CardActionArea>
								<CardMedia
									component='img'
									height='140'
									image='https://picsum.photos/200/300'
									alt='random'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										Lorem
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse nec aliquam libero. Aliquam ullamcorper nec dui
										id eleifend. Nulla euismod lectus enim, nec pellentesque
										arcu lacinia et. Nunc sed mattis massa. Donec faucibus
										euismod ligula, quis bibendum ligula congue id. Nulla
										mollis, tortor vel volutpat porta, felis tortor venenatis
										tortor, vitae efficitur magna erat id nibh. Mauris elementum
										posuere ex, eu fringilla odio euismod eu. Sed maximus congue
										nulla, ac finibus turpis feugiat rutrum. Mauris a commodo
										nulla. Curabitur sit amet magna leo.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size='small' color='primary'>
									Read More
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} xl={4}>
						<Card>
							<CardActionArea>
								<CardMedia
									component='img'
									height='140'
									image='https://picsum.photos/200/300'
									alt='random'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										Lorem
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse nec aliquam libero. Aliquam ullamcorper nec dui
										id eleifend. Nulla euismod lectus enim, nec pellentesque
										arcu lacinia et. Nunc sed mattis massa. Donec faucibus
										euismod ligula, quis bibendum ligula congue id. Nulla
										mollis, tortor vel volutpat porta, felis tortor venenatis
										tortor, vitae efficitur magna erat id nibh. Mauris elementum
										posuere ex, eu fringilla odio euismod eu. Sed maximus congue
										nulla, ac finibus turpis feugiat rutrum. Mauris a commodo
										nulla. Curabitur sit amet magna leo.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size='small' color='primary'>
									Read More
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} xl={4}>
						<Card>
							<CardActionArea>
								<CardMedia
									component='img'
									height='140'
									image='https://picsum.photos/200/300'
									alt='random'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										Lorem
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse nec aliquam libero. Aliquam ullamcorper nec dui
										id eleifend. Nulla euismod lectus enim, nec pellentesque
										arcu lacinia et. Nunc sed mattis massa. Donec faucibus
										euismod ligula, quis bibendum ligula congue id. Nulla
										mollis, tortor vel volutpat porta, felis tortor venenatis
										tortor, vitae efficitur magna erat id nibh. Mauris elementum
										posuere ex, eu fringilla odio euismod eu. Sed maximus congue
										nulla, ac finibus turpis feugiat rutrum. Mauris a commodo
										nulla. Curabitur sit amet magna leo.
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size='small' color='primary'>
									Read More
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default Cardcontent;
