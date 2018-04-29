import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import config from 'helpers/config';

export default class Login extends Component {
	static propTypes = {
	}

	handleClick = () => {
		const redirectTo = `https://id.twitch.tv/oauth2/authorize
			?response_type=code
			&client_id=${config.client_id}
			&redirect_uri=${config.redirect_uri}
			&scope=${config.scope.join('+')}
		`;
		window.location = redirectTo;
	}

	render() {
		const styles = require('./styles.scss');
		console.log(document.cookie);
		return (
			<div className={styles.login}>
				<div className={styles.container}>
					<Paper
						style={{ height: 400 }}
						zDepth={3}
					>
						<div className={styles.content}>
							<div className={styles.text}>Welcome to Eclipse</div>
							<RaisedButton
								backgroundColor="#4b367c"
								labelColor="#fff"
								label="login with twitch"
								onClick={this.handleClick}
							/>
						</div>
					</Paper>
				</div>
			</div>
		);
	}
}

