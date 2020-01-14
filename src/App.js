import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import './App.scss';

class App extends Component {
	state = {
		alert: null,
		user: {},
		users: [],
		repos: [],
		loading: false,
	};

	async componentDidMount() {
		this.setState({ loading: true });

		try {
			await fetch('https://api.github.com/users')
				.then(res => res.json())
				.then(data => {
					this.setState({ users: data });
				});
		} catch (err) {
			console.log(err);
		}

		this.setState({ loading: false });
	}

	searchUsers = async text => {
		this.setState({ loading: true });

		try {
			await fetch(`https://api.github.com/search/users?q=${text}`)
				.then(res => res.json())
				.then(data => {
					this.setState({ users: data.items, loading: false });
				});
		} catch (err) {
			console.log(err);
		}

		this.setState({ loading: false });
	};

	getUser = async username => {
		this.setState({ loading: true });

		try {
			await fetch(`https://api.github.com/users/${username}`)
				.then(res => res.json())
				.then(data => {
					this.setState({ user: data, loading: false });
				});
		} catch (err) {
			console.log(err);
		}

		this.setState({ loading: false });
	};

	getUserRepos = async username => {
		this.setState({ loading: true });

		try {
			await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
				.then(res => res.json())
				.then(data => {
					this.setState({ repos: data, loading: false });
				});
		} catch (err) {
			console.log(err);
		}

		this.setState({ loading: false });
	};

	clearUsers = () => this.setState({ alert: null, users: [], loading: false });

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 3000);
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<Navbar />
					<Alert alert={this.state.alert} />
					<Switch>
						<Route
							exact
							path='/'
							render={() => (
								<Fragment>
									<Search
										searchUsers={this.searchUsers}
										clearUsers={this.clearUsers}
										setAlert={this.setAlert}
									/>
									<Users loading={this.state.loading} users={this.state.users} />
								</Fragment>
							)}
						/>
						<Route exact path='/about' component={About} />
						<Route
							exact
							path='/user/:login'
							render={props => (
								<User
									{...props}
									getUser={this.getUser}
									getUserRepos={this.getUserRepos}
									user={this.state.user}
									repos={this.state.repos}
									loading={this.state.loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
