import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
	return (
		<li className='list-group-item'>
			<a className='text-dark' href={repo.html_url}>
				<h4>{repo.name}</h4>
			</a>
		</li>
	);
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
