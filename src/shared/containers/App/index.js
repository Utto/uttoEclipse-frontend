import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class App extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
	}

	render() {
		const styles = require('./styles.scss');

		const theme = getMuiTheme({
			datePicker: {
				selectColor: '#3b4295',
				headerColor: '#3b4295',
				color: '#3b4295',
			},
			timePicker: {
				color: '#3b4295',
				accentColor: '#3b4295',
				headerColor: '#3b4295',
				selectColor: '#3b4295',
			},
			flatButton: {
				buttonFilterColor: '#3b4295',
				textColor: '#3b4295',
				primaryTextColor: '#3b4295',
			},
			textField: {
				focusColor: '#3b4295',
			},
		});

		return (
			<div className={styles.app}>
				<div className={styles.container}>
					<MuiThemeProvider muiTheme={theme}>
						{this.props.children}
					</MuiThemeProvider>
				</div>
			</div>
		);
	}
}
