import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
	return (
		<div className='card rounded text-center mt-3 shadow-sm user-item'>
			<img
				src={avatar_url}
				alt=''
				className='img-fluid rounded-circle mx-auto mt-3'
				style={{ width: '60px' }}
			/>
			<div className='card-body'>
				<h5 className='card-title'>{login}</h5>
				<Link to={`/user/${login}`} className='btn btn-sm btn-primary'>
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
