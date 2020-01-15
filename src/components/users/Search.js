import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, setAlert }) => {
	const [text, setText] = useState('');

	const onChange = ev => setText(ev.target.value);

	const onSubmit = ev => {
		ev.preventDefault();
		if (text === '') {
			setAlert('Please Enter Something', 'dark');
		} else {
			searchUsers(text);
		}
	};

	return (
		<div className='px-2 py-3'>
			<form onSubmit={onSubmit} className='form'>
				<input
					className='form-control'
					type='text'
					name='text'
					id=''
					value={text}
					onChange={onChange}
					placeholder='Search Users...'
				/>
				<input type='submit' value='Search' className='btn btn-dark btn-block mt-3' />
				<button className='btn btn-info btn-block' onClick={clearUsers}>
					Clear
				</button>
			</form>
		</div>
	);
};

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
