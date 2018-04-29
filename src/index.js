import React from 'react';
import { render } from 'react-dom';
import {
	Router,
	Route,
	Switch,
} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import createHistory from 'history/createBrowserHistory';

import client from 'helpers/client';

import App from 'containers/App';
import Page from 'containers/Page';
import Login from 'containers/Login';
import Personal from 'containers/Personal';

const history = createHistory();

render(
	<ApolloProvider client={client}>
		<Router history={history}>
			<App>
				<Switch>
					<Route exact path="/" component={Page} />
					<Route path="/login" component={Login} />
					<Route path="/personal" component={Personal} />
				</Switch>
			</App>
		</Router>
	</ApolloProvider>,
	document.getElementById('app'),
);
