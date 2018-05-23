import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

export const Loading = ({ text }) => {
	const styles = require('./styles.scss');
	return (
		<div className={styles['loading-container']}>
			<div className={styles.text}>{text}</div>
			<div className={styles.loading}>
				<Loader active>Loading</Loader>
			</div>
		</div>
	);
};

Loading.propTypes = {
	text: PropTypes.string,
};
