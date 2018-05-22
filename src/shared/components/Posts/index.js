import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Next from 'material-ui/svg-icons/navigation/arrow-downward';

const styles = require('./styles.scss');

export default class Posts extends Component {
	static propTypes = {
		data: PropTypes.arrayOf(PropTypes.shape({
			user: PropTypes.string,
			message: PropTypes.string,
			date: PropTypes.string,
		})),
		loadMore: PropTypes.func,
	}

	getPosts = () => {
		const { data } = this.props;
		return data.map((item) => {
			return (
				<PostItem
					key={item.id}
					user={item.user}
					message={item.message}
					date={item.date}
				/>
			);
		});
	}

	render() {
		const { loadMore } = this.props;
		return (
			<div className={styles.container}>
				<Paper
					zDepth={3}
				>
					<ul className={styles.list}>
						{this.getPosts()}
					</ul>
					<IconButton onClick={loadMore}>
						<Next />
					</IconButton>
				</Paper>
			</div>
		);
	}
}

const PostItem = ({ user, message, date }) => {
	const converted = new Date(Number(date));
	const formattedDate = converted.toLocaleString();

	return (
		<li className={styles.item}>
			<div className={styles.info}>
				<span className={styles.name}>{user}</span>
				<span className={styles.text}>at:</span>
				<span className={styles.text}>
					{formattedDate}
				</span>
			</div>
			<div className={styles.message}>{message}</div>
		</li>
	);
};

PostItem.propTypes = {
	user: PropTypes.string,
	message: PropTypes.string,
	date: PropTypes.string,
};
