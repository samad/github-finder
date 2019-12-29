import React, { Component } from 'react';
import propTypes from 'prop-types';

class UserItem extends Component {
	static propTypes = {
		user: propTypes.object.isRequired,
	};

	render() {
		return (
			<div className='card rounded text-center my-2' style={{ width: '32%' }}>
				<img
					src={this.props.user.avatar_url}
					alt=''
					className='img-fluid rounded-circle mx-auto mt-3'
					style={{ width: '60px' }}
				/>
				<div className='card-body'>
					<h5 className='card-title'>{this.props.user.login}</h5>
					<a
						href={this.props.user.html_url}
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn-sm btn-primary'>
						More
					</a>
				</div>
			</div>
		);
	}
}

export default UserItem;
