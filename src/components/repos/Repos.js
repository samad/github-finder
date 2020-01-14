import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem.js';

const Repos = ({ repos }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title text-center'>Last 5 Repositories</h5>
				<ul className='list-group'>
					{repos.map(repo => (
						<RepoItem repo={repo} key={repo.id} />
					))}
				</ul>
			</div>
		</div>
	);
};

Repos.propTypes = {
	repos: PropTypes.array.isRequired,
};

export default Repos;
