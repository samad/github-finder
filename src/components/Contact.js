import React, { Component } from 'react';
import propTypes from 'prop-types';

// Class based Component
class Contact extends Component {
	constructor() {
		super();
		this.state = {
			buttonClicked: false,
		};
	}

	change = () => {
		this.setState({
			buttonClicked: true,
		});
	};

	render() {
		return (
			<div className='card my-2'>
				<div className='card-body'>
					<h6>{this.props.name}</h6>
					<ul className='list-group'>
						<li className='list-group-item'>
							<i>Email:</i> <strong>{this.props.email}</strong>
						</li>
						<li className='list-group-item'>
							<i>Phone:</i> <strong>{this.props.phone}</strong>
						</li>
						<li className='list-group-item text-center'>
							<button className='btn btn-sm btn-primary rounded' onClick={this.change}>
								Click Here
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

Contact.defaultProps = {
	name: 'John Doe',
	email: 'jdoe@gmail.com',
	phone: '555-555-5555',
};

Contact.propTypes = {
	name: propTypes.string,
	email: propTypes.string,
	phone: propTypes.string,
};

export default Contact;
