import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';

export class User extends Component {
	static propTypes = {
		getUser: PropTypes.func.isRequired,
		getUserRepos: PropTypes.func.isRequired,
		user: PropTypes.object.isRequired,
		loading: PropTypes.bool.isRequired,
		repos: PropTypes.array.isRequired,
		// ! doubt
		match: PropTypes.object.isRequired,
	};

	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
	}

	render() {
		const { loading, repos } = this.props;
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			company,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
		} = this.props.user;

		if (loading) {
			return <Spinner />;
		} else {
			return (
				<Fragment>
					<div className='jumbotron mx-auto container'>
						<Link to='/' className='btn btn-primary'>
							<i className='fa fa-arrow-left' aria-hidden='true'></i> Back to Search
						</Link>
						<div className='text-center'>
							<p>
								<img src={avatar_url} alt='' className='rounded-circle' />
							</p>
							<h4 className='my-2'>{name}</h4>
							<h4 className='my-2'>
								{location && (
									<Fragment>
										Location: <b className='lead'>{location}</b>
									</Fragment>
								)}
							</h4>
							<h4 className='my-2 mx-5'>
								{bio && (
									<Fragment>
										<h4 className='my-1'>Bio</h4>
										<p className='lead'>{bio}</p>
									</Fragment>
								)}
							</h4>
							<h4 className='my-2'>
								Hireable: &nbsp;
								{hireable ? (
									<i className='fa fa-check text-success'></i>
								) : (
									<i className='fa fa-times-circle text-danger'></i>
								)}
							</h4>
							<a
								href={html_url}
								className='btn btn-dark my-2'
								rel='noopener noreferrer'
								target='_blank'>
								Visit GitHub Profile
							</a>
							<ul className='list-group my-2'>
								<li className='list-group-item'>
									{login && (
										<Fragment>
											<strong>Username:</strong> {login}
										</Fragment>
									)}
								</li>
								<li className='list-group-item'>
									{login && (
										<Fragment>
											<strong>Company:</strong> {company}
										</Fragment>
									)}
								</li>
								<li className='list-group-item'>
									{login && (
										<Fragment>
											<strong>Website: </strong>
											<a
												href={blog}
												className='text-dark'
												rel='noopener noreferrer'
												target='_blank'>
												{blog}
											</a>
										</Fragment>
									)}
								</li>
							</ul>
							<div className='card my-2'>
								<div className='card-body'>
									<button type='button' className='btn btn-success mx-2'>
										Followers &nbsp;
										<span className='badge badge-light'>
											{new Intl.NumberFormat().format(followers)}
										</span>
									</button>
									<button type='button' className='btn btn-info mx-2'>
										Followings &nbsp;
										<span className='badge badge-light'>
											{new Intl.NumberFormat().format(following)}
										</span>
									</button>
									<button type='button' className='btn btn-primary mx-2'>
										Repositories &nbsp;
										<span className='badge badge-light'>
											{new Intl.NumberFormat().format(public_repos)}
										</span>
									</button>
									<button type='button' className='btn btn-dark mx-2'>
										Gists &nbsp;
										<span className='badge badge-light'>
											{new Intl.NumberFormat().format(public_gists)}
										</span>
									</button>
								</div>
							</div>
						</div>
						<Repos repos={repos} />
					</div>
				</Fragment>
			);
		}
	}
}

export default User;
