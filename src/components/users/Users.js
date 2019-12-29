import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
	state = {
		users: [
			{
				id: '1',
				login: 'mojombo',
				avatar_url: 'http://localhost/fireChat/public/img/profile.svg',
				html_url: 'https://google.com',
			},
			{
				id: '2',
				login: 'mojombo',
				avatar_url: 'http://localhost/fireChat/public/img/profile.svg',
				html_url: 'https://google.com',
			},
			{
				id: '3',
				login: 'mojombo',
				avatar_url: 'http://localhost/fireChat/public/img/profile.svg',
				html_url: 'https://google.com',
			},
			{
				id: '4',
				login: 'mojombo',
				avatar_url: 'http://localhost/fireChat/public/img/profile.svg',
				html_url: 'https://google.com',
			},
			{
				id: '5',
				login: 'mojombo',
				avatar_url: 'http://localhost/fireChat/public/img/profile.svg',
				html_url: 'https://google.com',
			},
			{
				id: '6',
				login: 'mojombo',
				avatar_url: 'http://localhost/fireChat/public/img/profile.svg',
				html_url: 'https://google.com',
			},
		],
	};

	render() {
		return (
			<div className='d-flex flex-wrap justify-content-around'>
				{this.state.users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
}

export default Users;
