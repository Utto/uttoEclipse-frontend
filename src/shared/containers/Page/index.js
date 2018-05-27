import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import { Loading } from 'components/Loading';

import { handleAuth, getUserData } from 'actions/user';

class PageContainer extends Component {
	static propTypes = {
		history: PropTypes.shape({
			location: PropTypes.shape({
				search: PropTypes.string,
			}),
		}),
		auth: PropTypes.func,
		data: PropTypes.shape({
			user: PropTypes.shape({
				id: PropTypes.string,
			}),
		}),
	}

	componentDidMount() {
		const { auth, history } = this.props;
		const { search } = history.location;
		const code = search.slice(6, 36);
		auth({ variables: { code } });
	}

	componentWillReceiveProps(nextProps) {
		const { history } = this.props;
		const { data } = nextProps;
		if (data.user.id && document.cookie && document.cookie.includes('token=')) history.push('/personal');
	}

	render() {
		const styles = require('./styles.scss');
		return (
			<div className={styles.page}>
				<Loading text="Getting data, please wait..." />
			</div>
		);
	}
}

const Page = compose(
	graphql(handleAuth, {
		name: 'auth',
		options: {
			update: (cache, { data: { auth } }) => {
				cache.writeQuery({ query: getUserData, data: { user: auth } });
			},
		},
	}),
	graphql(getUserData, { name: 'data' }),
)(PageContainer);

export default Page;
