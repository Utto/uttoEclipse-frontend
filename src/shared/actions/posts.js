import gql from 'graphql-tag';

const state = {
	list: [],
	__typename: 'Posts',
};

export const handleGetPosts = gql`
	query Posts {
		posts: getPosts(checked: true), {
			user,
			message,
			id,
		}
	}
`;


const resolvers = {
	Mutation: {
	},
};

const posts = {
	state,
	resolvers,
};

export default posts;

