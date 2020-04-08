import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// Search Users

	const searchUsers = (text) => {
		setLoading();

		try {
			fetch(`https://api.github.com/search/users?q=${text}`)
				.then((res) => res.json())
				.then((data) => {
					dispatch({
						type: SEARCH_USERS,
						payload: data.items,
					});
				});
		} catch (err) {
			console.log(err);
		}
	};

	// Get Users

	const getUser = (username) => {
		setLoading();

		try {
			fetch(`https://api.github.com/users/${username}`)
				.then((res) => res.json())
				.then((data) => {
					dispatch({
						type: GET_USER,
						payload: data,
					});
				});
		} catch (err) {
			console.log(err);
		}
	};

	// Get Repos

	const getUserRepos = (username) => {
		setLoading(true);
		try {
			fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
				.then((res) => res.json())
				.then((data) => {
					dispatch({
						type: GET_REPOS,
						payload: data,
					});
				});
		} catch (err) {
			console.log(err);
		}

		setLoading(false);
	};

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	// Clear Users
	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

GithubState.propTypes = {
	children: PropTypes.object.isRequired,
};

export default GithubState;
