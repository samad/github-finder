import React from 'react';

// Functional Component (No State)
const Header = () => {
	return (
		<nav className='navbar navbar-expand-md navbar-light bg-primary'>
			<h1 className='navbar-brand'>Contact Manager</h1>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item active'>
						<a className='nav-link' href='/'>
							Home <span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className='nav-item active'>
						<a className='nav-link' href='/'>
							About
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link disabled' href='/' tabIndex='-1' aria-disabled='true'>
							Disabled
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
