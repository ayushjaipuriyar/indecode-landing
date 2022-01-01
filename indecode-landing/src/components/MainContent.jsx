import {  Grid } from '@mui/material';
import React from 'react';

function MainContent() {
	return (
		<div>
			<Grid container>
				<Grid
					item
					xs={12}
					style={{
						backgroundColor: '#212121',
						backgroundImage:
							'https://www.legaltechmonitor.com/files/2020/07/iStock-1158735721.jpg',
						height: '70vh',
					}}
				>
					{/* <img
						height='100%'
						width='100%'
						src='https://www.legaltechmonitor.com/files/2020/07/iStock-1158735721.jpg'
					/> */}

				</Grid>
			</Grid>
		</div>
	);
}

export default MainContent;
