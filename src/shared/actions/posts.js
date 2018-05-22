import gql from 'graphql-tag';

const state = {
	page: 0,
	__typename: 'PostData',
};

export const handleGetPosts = gql`
	query Posts($checked: Boolean, $id: String) {
		posts: getPosts(checked: $checked, id: $id), {
			user,
			message,
			id,
			date,
			broadcaster,
			mod
		}
	}
`;

export const getData = gql`
  query getData {
    posts @client {
			page
		}
  }
`;

export const switchPage = gql`
	mutation switchPage($page: Int!) {
		switchPage(page: $page) @client {
			page
		}
	}
`;


const resolvers = {
	Mutation: {
		switchPage: (_, variables, { cache }) => {
			cache.writeData({ data: { posts: { page: variables.page, __typename: 'PostData' } } });
			return null;
		},
	},
};

const posts = {
	state,
	resolvers,
};

export default posts;
