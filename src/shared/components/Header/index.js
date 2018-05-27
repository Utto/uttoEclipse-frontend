import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Logo } from 'components/Logo';
import Menu from 'components/Menu';

export default class Header extends Component {
	static propTypes = {
		currentPath: PropTypes.string,
		logout: PropTypes.func,
	}

	render() {
		const styles = require('./styles.scss');
		const { currentPath, logout } = this.props;
		return (
			<div className={styles.header}>
				<div className={styles.container}>
					<Logo />
					<Menu currentPath={currentPath} logout={logout} />
				</div>
			</div>
		);
	}
}
