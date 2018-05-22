import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
	const styles = require('./styles.scss');
	return <Link to="/personal" className={styles.logo} />;
};
