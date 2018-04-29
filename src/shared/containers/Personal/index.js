import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { handleGetPosts } from 'actions/posts';

class PersonalContainer extends Component {

	render() {
		console.log('mounted', this.props);
		return <div>WELCOME</div>;
	}
}

const Personal = compose()(PersonalContainer);

export default Personal;
