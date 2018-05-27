import user from 'actions/user';
import posts from 'actions/posts';
import filters from 'actions/filters';

const defaults = {
	user: user.state,
	posts: posts.state,
	filters: filters.state,
};
const resolvers = {
	...user.resolvers,
	...posts.resolvers,
	...filters.resolvers,
};
export {
	defaults,
	resolvers,
};
