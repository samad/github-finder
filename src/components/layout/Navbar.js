import React, { Component } from 'react';
import propTypes from 'prop-types';

class Navbar extends Component {
	static defaultProps = {
		title: 'GitHub Finder',
	};

	static propTypes = {
		title: propTypes.string.isRequired,
	};

	render() {
		return (
			<nav className='navbar navbar-expand navbar-light bg-primary'>
				<div className='container'>
					<h1 className='navbar-brand'>{this.props.title}</h1>
					{/* <div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item active'>
								<a className='nav-link' href='/'>
									Home <span className='sr-only'>(current)</span>
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Services
								</a>
							</li>
						</ul>
					</div> */}
				</div>
			</nav>
		);
	}
}

export default Navbar;
