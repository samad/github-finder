import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const [text, setText] = useState('');

	const onChange = (ev) => setText(ev.target.value);

	const onSubmit = (ev) => {
		ev.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please Enter Something', 'dark');
		} else {
			githubContext.searchUsers(text);
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
				{githubContext.users.length > 0 && (
					<button className='btn btn-info btn-block' onClick={githubContext.clearUsers}>
						Clear
					</button>
				)}
			</form>
		</div>
	);
};

export default Search;
