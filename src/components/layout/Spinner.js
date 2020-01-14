import React, { Fragment } from 'react';

const Spinner = () => {
	return (
		<Fragment>
			<div className='text-center py-5'>
				<div className='spinner-border text-primary' role='status'>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		</Fragment>
	);
};

export default Spinner;
