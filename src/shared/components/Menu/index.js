import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const styles = require('./styles.scss');

export default class Menu extends Component {
	static propTypes = {
		currentPath: PropTypes.string,
	}
	render() {
		const { currentPath } = this.props;
		const data = [
			{ path: '/personal', icon: 'home' },
			{ path: '/settings', icon: 'setting' },
		];
		const items = data.map((item) => {
			return (
				<MenuItem
					key={item.path}
					path={item.path}
					icon={item.icon}
					currentPath={currentPath}
				/>
			);
		});

		return (
			<ul className={styles.list}>
				{items}
				<li className={styles.item}>
					<div className={styles.link}>
						<Icon name="log out" size="big" />
					</div>
				</li>
			</ul>
		);
	}
}

const MenuItem = ({ path, icon, currentPath }) => {
	return (
		<li className={styles.item + (path === currentPath ? ` ${styles.active}` : '')}>
			<Link to={path} className={styles.link}>
				<Icon name={icon} className={styles.icon} size="big" />
			</Link>
		</li>
	);
};

MenuItem.propTypes = {
	path: PropTypes.string,
	icon: PropTypes.string,
	currentPath: PropTypes.string,
};

