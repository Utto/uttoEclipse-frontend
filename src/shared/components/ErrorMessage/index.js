import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

export const ErrorMessage = ({ err }) => {
	const styles = require('./styles.scss');
	return (
		<div className={styles.error}>
			<Message negative compact>
				<Message.Header>We are sorry but looks like something went wrong</Message.Header>
				<p>{err}</p>
			</Message>
		</div>
	);
};

ErrorMessage.propTypes = {
	err: PropTypes.string,
};
