import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import { handleGetPosts, switchPage } from 'actions/posts';
import { getFiltersData, changeFiltersData } from 'actions/filters';

import Header from 'components/Header';
import Posts from 'components/Posts';
import Filters from 'components/Filters';
import { Loading } from 'components/Loading';
import { ErrorMessage } from 'components/ErrorMessage';

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
			refetch: PropTypes.func,
		}),
		filtersData: PropTypes.shape({
			filters: PropTypes.obj,
		}),
		handleChangeFiltersData: PropTypes.func,
	}

	componentWillReceiveProps() {
		const { history } = this.props;
		if (!document.cookie || !document.cookie.includes('token=')) {
			history.push('/login');
		}
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
	}

	loadFiltered = () => {
		const { filters } = this.props.filtersData;
		const { refetch } = this.props.data;
		refetch({
			id: null,
			filters: {
				user: filters.name,
				message: filters.message,
				startDate: filters.start,
				endDate: filters.end,
			},
		});
	}

	logout = () => {
		const { history } = this.props;
		document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		history.push('/login');
	}

	render() {
		const styles = require('./styles.scss');
		const {
			history,
			data,
			filtersData,
			handleChangeFiltersData,
		} = this.props;

		const {
			posts,
			error,
			loading,
		} = data;


		if (error) return <ErrorMessage err={error.graphQLErrors[0].message} />;
		return (
			<div className={styles.personal}>
				<Header currentPath={history.location.pathname} logout={this.logout} />
				{loading && !posts ?
					<Loading text="Loading data..." />
					:
					<div className={styles.container}>
						<Filters
							data={filtersData.filters}
							change={handleChangeFiltersData}
							applyFilters={this.loadFiltered}
						/>
						{posts && <Posts
							data={posts}
							loadMore={this.loadMore}
							loading={loading}
						/>}
					</div>
				}
			</div>
		);
	}
}

const Personal = compose(
	graphql(handleGetPosts, { name: 'data', options: { variables: { filters: {} }, notifyOnNetworkStatusChange: true } }),
	graphql(switchPage, { name: 'switchPage' }),
	graphql(getFiltersData, { name: 'filtersData' }),
	graphql(changeFiltersData, { name: 'handleChangeFiltersData' }),
)(PersonalContainer);

export default Personal;
