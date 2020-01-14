import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		text: '',
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		setAlert: PropTypes.func.isRequired,
	};

	onChange = ev => this.setState({ [ev.target.name]: ev.target.value });

	onSubmit = ev => {
		ev.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert('Please Enter Something', 'dark');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	render() {
		return (
			<div className='px-2 py-3'>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						className='form-control'
						type='text'
						name='text'
						id=''
						value={this.state.text}
						onChange={this.onChange}
						placeholder='Search Users...'
					/>
					<input type='submit' value='Search' className='btn btn-dark btn-block mt-3' />
					<button className='btn btn-info btn-block' onClick={this.props.clearUsers}>
						Clear
					</button>
				</form>
			</div>
		);
	}
}

export default Search;
