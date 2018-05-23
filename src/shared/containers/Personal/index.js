import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import { handleGetPosts, switchPage, getData } from 'actions/posts';

import Header from 'components/Header';
import Posts from 'components/Posts';
import { Loading } from 'components/Loading';

class PersonalContainer extends Component {
	static propTypes = {
		history: PropTypes.shape({
			location: PropTypes.shape({
				pathname: PropTypes.string,
			}),
		}),
		data: PropTypes.shape({
			posts: PropTypes.array,
			fetchMore: PropTypes.func,
			loading: PropTypes.bool,
		}),
	}

	loadMore = () => {
		const { fetchMore, posts } = this.props.data;
		fetchMore({
			variables: { id: posts[posts.length - 1].id },
			updateQuery: (state, { fetchMoreResult }) => {
				return {
					...state,
					posts: [...state.posts, ...fetchMoreResult.posts],
				};
			},
		});
		// this.props.switchPage({ variables: { page: 1 } });
	}
	render() {
		const styles = require('./styles.scss');
		const { history, data } = this.props;
		console.log('props', this.props);
		return (
			<div className={styles.content}>
				<Header currentPath={history.location.pathname} />
				{data.loading && !data.posts ?
					<Loading text="Loading data..." />
					:
					<Posts
						data={data.posts}
						loadMore={this.loadMore}
						loading={data.loading}
					/>
				}
			</div>
		);
	}
}

const Personal = compose(
	graphql(handleGetPosts, { name: 'data', options: { notifyOnNetworkStatusChange: true } }),
	graphql(switchPage, { name: 'switchPage' }),
	graphql(getData, { name: 'test' }),
)(PersonalContainer);

export default Personal;
