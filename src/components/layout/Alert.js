import React from 'react';

const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<div className={`mb-0 mt-3 mx-1 alert alert-${alert.type}`} role='alert'>
				<i className='fa fa-exclamation-circle fa-lg' aria-hidden='true'></i>&nbsp;&nbsp;{alert.msg}
			</div>
		)
	);
};

export default Alert;
