import gql from 'graphql-tag';

const state = {
	name: '',
	id: '',
	__typename: 'User',
};

export const handleSaveValues = gql`
mutation saveValues($value: String!, $name: String!) {
	saveValues(value: $value, name: $name) @client {
		name
		id
	}
}
`;

export const getUserData = gql`
	query getData {
		user {
      name
      id
    }
	}
`;

export const handleAuth = gql`
	mutation ($code: String!) {
		auth(code: $code) {
			name
			id
			userId
		}
	},
`;


const resolvers = {
	Mutation: {
	},
};

const user = {
	state,
	resolvers,
};

export default user;

