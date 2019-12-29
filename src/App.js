import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.scss';

class App extends Component {
	render() {
		// prettier-ignore
		return (
			<div className='App'>
				<Navbar />
				<Users />
			</div>
		);
	}
}

export default App;
