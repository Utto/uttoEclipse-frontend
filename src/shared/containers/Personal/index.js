import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';

import { handleGetPosts, switchPage, getData } from 'actions/posts';
import { getFiltersData, changeFiltersData } from 'actions/filters';

import Header from 'components/Header';
import Posts from 'components/Posts';
import Filters from 'components/Filters';
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
			refetch: PropTypes.func,
		}),
		filtersData: PropTypes.shape({
			filters: PropTypes.obj,
		}),
		handleChangeFiltersData: PropTypes.func,
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

	render() {
		const styles = require('./styles.scss');
		const {
			history,
			data,
			filtersData,
			handleChangeFiltersData,
		} = this.props;

		console.log('props', this.props);
		return (
			<div className={styles.personal}>
				<Header currentPath={history.location.pathname} />
				{data.loading && !data.posts ?
					<Loading text="Loading data..." />
					:
					<div className={styles.container}>
						<Filters
							data={filtersData.filters}
							change={handleChangeFiltersData}
							applyFilters={this.loadFiltered}
						/>
						<Posts
							data={data.posts}
							loadMore={this.loadMore}
							loading={data.loading}
						/>
					</div>
				}
			</div>
		);
	}
}

const Personal = compose(
	graphql(handleGetPosts, { name: 'data', options: { variables: {}, notifyOnNetworkStatusChange: true } }),
	graphql(switchPage, { name: 'switchPage' }),
	graphql(getData, { name: 'test' }),
	graphql(getFiltersData, { name: 'filtersData' }),
	graphql(changeFiltersData, { name: 'handleChangeFiltersData' }),
)(PersonalContainer);

export default Personal;
