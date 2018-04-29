import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	}

	render() {
		const styles = require('./styles.scss');

		return (
			<div className={styles.app}>
				<div className={styles.container}>
					<MuiThemeProvider>
						{this.props.children}
					</MuiThemeProvider>
				</div>
			</div>
		);
	}
}
