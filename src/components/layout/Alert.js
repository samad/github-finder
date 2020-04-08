import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;

	return (
		alert !== null && (
			<div className={`mb-0 mt-3 mx-1 alert alert-${alert.type}`} role='alert'>
				<i className='fa fa-exclamation-circle fa-lg' aria-hidden='true'></i>&nbsp;&nbsp;{alert.msg}
			</div>
		)
	);
};

export default Alert;
