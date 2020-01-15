import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import './App.scss';

const App = () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	useEffect(() => {
		(async function() {
			setLoading(true);

			try {
				await fetch('https://api.github.com/users')
					.then(res => res.json())
					.then(data => {
						setUsers(data);
					});
			} catch (err) {
				console.log(err);
			}

			setLoading(false);
		})();
	}, []);

	const searchUsers = async text => {
		setLoading(true);

		try {
			await fetch(`https://api.github.com/search/users?q=${text}`)
				.then(res => res.json())
				.then(data => {
					setUsers(data.items);
				});
		} catch (err) {
			console.log(err);
		}

		setLoading(false);
	};

	const getUser = async username => {
		setLoading(true);

		try {
			await fetch(`https://api.github.com/users/${username}`)
				.then(res => res.json())
				.then(data => {
					setUser(data);
				});
		} catch (err) {
			console.log(err);
		}

		setLoading(false);
	};

	const getUserRepos = async username => {
		setLoading(true);
		try {
			await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
				.then(res => res.json())
				.then(data => {
					setRepos(data);
				});
		} catch (err) {
			console.log(err);
		}

		setLoading(false);
	};

	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 3000);
	};

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Alert alert={alert} />
				<Switch>
					<Route
						exact
						path='/'
						render={() => (
							<Fragment>
								<Search searchUsers={searchUsers} clearUsers={clearUsers} setAlert={showAlert} />
								<Users loading={loading} users={users} />
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
								getUser={getUser}
								getUserRepos={getUserRepos}
								user={user}
								repos={repos}
								loading={loading}
							/>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
