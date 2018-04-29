import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { resolvers, defaults } from 'actions';

const link = createHttpLink({
	uri: 'http://localhost:3000/graphql',
	credentials: 'include',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	clientState: {
		defaults,
		resolvers,
		typeDefs: [],
	},
	link,
	cache,
});

export default client;
