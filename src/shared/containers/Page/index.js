import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { Loader } from 'semantic-ui-react';

import { handleAuth, getUserData } from 'actions/user';

class PageContainer extends Component {
	static propTypes = {
		location: PropTypes.shape({
			search: PropTypes.string,
		}),
		auth: PropTypes.func,
	}

	componentDidMount() {
		const { auth, location } = this.props;
		const { search } = location;
		const code = search.slice(6, 36);
		auth({ variables: { code } });
	}

	componentWillReceiveProps(nextProps) {
		const { history } = this.props;
		if (nextProps.data.user.id) history.push('/personal');
	}

	render() {
		const styles = require('./styles.scss');
		return (
			<div className={styles.page}>
				<div className={styles.text}>Getting data, please wait...</div>
				<div className={styles.loading}>
					<Loader active>Loading</Loader>
				</div>
			</div>
		);
	}
}

const Page = compose(
	graphql(handleAuth, {
		name: 'auth',
		options: {
			update: (store, { data: { auth } }) => {
				store.writeQuery({ query: getUserData, data: { user: auth } });
			},
		},
	}),
	graphql(getUserData, { name: 'data' }),
)(PageContainer);

export default Page;
