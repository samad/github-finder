import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<div className='container'>
					<Contact />
					<Contact name='James Kirk' email='jamestkirk@gmail.com' phone='222-222-2222' />
					<Contact name='Robert Downey' email='contact@robertdowney.com' phone='011-222-3333' />
				</div>
			</div>
		);
	}
}

export default App;
