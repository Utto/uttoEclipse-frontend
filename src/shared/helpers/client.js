import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, defaults } from 'actions';

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	clientState: {
		defaults,
		resolvers,
		typeDefs: [],
	},
	cache,
	request: async (operation) => {
		operation.setContext({
			fetchOptions: {
				credentials: 'include',
			},
		});
	},
});

export default client;
