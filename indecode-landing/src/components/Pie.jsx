import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';

export default class Pie extends React.Component {
	render() {
		const x = 128;
		const y = 500;
		return (
			<PieMenu radius='125px' centerRadius='30px' centerX={x} centerY={y}>
				{/* Contents */}
				<Slice>
				</Slice>
				<Slice
					onSelect={() => window.open('https://www.facebook.com', '_blank')}
				>
				</Slice>
				<Slice
					onSelect={() => window.open('https://www.twitter.com', '_blank')}
				>
				</Slice>
				<Slice
					onSelect={() => window.open('https://www.linkedin.com', '_blank')}
				>
				</Slice>
				<Slice
					onSelect={() =>
						window.open(
							'https://github.com/psychobolt/react-pie-menu',
							'_blank',
						)
					}
				>
				</Slice>
				<Slice
					onSelect={() =>
						window.open('https://en.wikipedia.org/wiki/RSS', '_blank')
					}
				>
				</Slice>
				<Slice
					onSelect={() => window.open('https://www.pinterest.com/', '_blank')}
				>
				</Slice>
				<Slice>
				</Slice>
			</PieMenu>
		);
	}
}
