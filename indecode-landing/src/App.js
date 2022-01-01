import React from 'react';
import Card from './components/CardContent';
import CircularThing from './components/CircularThing';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<Card />
			<CircularThing />
			<Footer />
		</div>
	);
}

export default App;
