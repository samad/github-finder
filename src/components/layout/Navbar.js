import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
	return (
		<nav className='navbar navbar-expand navbar-light bg-primary shadow-sm'>
			<div className='container-fluid mx-5'>
				<h1 className='navbar-brand'>{title}</h1>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<Link to='/' className='nav-link'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/about' className='nav-link'>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'GitHub Finder',
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Navbar;
