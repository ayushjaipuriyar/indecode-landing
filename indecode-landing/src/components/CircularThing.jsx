import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';
import { Grid } from '@mui/material';

function CircularThing() {
	return (
		<Grid continer>
			<Grid item ms={8}></Grid>
			<Grid item md={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
				<PieMenu
					radius='200px'
					centerRadius='100px'
					centerX='900px'
					centerY='400px'
				>
					{/* Contents */}
					<Slice>
						<img
							src='https://1000logos.net/wp-content/uploads/2020/08/Python-Emblem.jpg'
							height='40px'
							width='40px'
						/>
					</Slice>
					<Slice>
						<img src='' />
						C++
					</Slice>
					<Slice>
						<img src='' />
						Html
					</Slice>
					<Slice>
						<img src='' />
						CSS
					</Slice>
					<Slice>
						<img src='' />
						C#
					</Slice>
				</PieMenu>
			</Grid>
		</Grid>
	);
}

export default CircularThing;
