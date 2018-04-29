import user from 'actions/user';
import posts from 'actions/posts';

const defaults = {
	user: user.state,
	posts: posts.state,
};
const resolvers = {
	...user.resolvers,
	...posts.resolvers,
};
export {
	defaults,
	resolvers,
};
