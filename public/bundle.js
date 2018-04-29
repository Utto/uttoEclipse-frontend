webpackJsonp([0],{

/***/ 1189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"item":"_3DADg","title":"_3CeqQ","message":"_1wdx4"};

/***/ }),

/***/ 1191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"list":"_1VE64"};

/***/ }),

/***/ 1192:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"page":"p9CmK"};

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(545);
module.exports = __webpack_require__(747);


/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(219);

var _reactRouterDom = __webpack_require__(757);

var _reactApollo = __webpack_require__(351);

var _client = __webpack_require__(788);

var _client2 = _interopRequireDefault(_client);

var _Page = __webpack_require__(836);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_jsx(_reactApollo.ApolloProvider, {
	client: _client2.default
}, void 0, _jsx(_reactRouterDom.MemoryRouter, {}, void 0, _jsx(_reactRouterDom.Route, {
	exact: true,
	path: '/',
	component: _Page2.default
}))), document.getElementById('app'));

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _apolloClient = __webpack_require__(789);

var _apolloCacheInmemory = __webpack_require__(813);

var _apolloLink = __webpack_require__(86);

var _apolloLinkHttp = __webpack_require__(822);

var _apolloLinkWs = __webpack_require__(825);

var _apolloUtilities = __webpack_require__(37);

var httpLink = new _apolloLinkHttp.HttpLink({
	uri: 'http://localhost:4000/graphql'
});

var wsLink = new _apolloLinkWs.WebSocketLink({
	uri: 'ws://localhost:4000/graphql',
	options: {
		reconnect: true
	}
});

var link = (0, _apolloLink.split)(function (_ref) {
	var query = _ref.query;

	var _getMainDefinition = (0, _apolloUtilities.getMainDefinition)(query),
	    kind = _getMainDefinition.kind,
	    operation = _getMainDefinition.operation;

	return kind === 'OperationDefinition' && operation === 'subscription';
}, wsLink, httpLink);

var client = new _apolloClient.ApolloClient({
	cache: new _apolloCacheInmemory.InMemoryCache(),
	link: link
});

exports.default = client;

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tquery Posts {\n\t\tposts: getPosts(checked: false), {\n\t\t\tuser,\n\t\t\tmessage,\n\t\t\tid,\n\t\t}\n\t}\n'], ['\n\tquery Posts {\n\t\tposts: getPosts(checked: false), {\n\t\t\tuser,\n\t\t\tmessage,\n\t\t\tid,\n\t\t}\n\t}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tmutation ($id: ID!, $action: String!, $time: Int) {\n\t\tcheckPost(id: $id, action: $action, time: $time), {\n\t\t\tid,\n\t\t}\n\t},\n'], ['\n\tmutation ($id: ID!, $action: String!, $time: Int) {\n\t\tcheckPost(id: $id, action: $action, time: $time), {\n\t\t\tid,\n\t\t}\n\t},\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  subscription postCreated($checked: Boolean) {\n    postCreated(checked: $checked) {\n      id,\n\t\t\tuser,\n\t\t\tmessage,\n    }\n  }\n'], ['\n  subscription postCreated($checked: Boolean) {\n    postCreated(checked: $checked) {\n      id,\n\t\t\tuser,\n\t\t\tmessage,\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(351);

var _graphqlTag = __webpack_require__(837);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _List = __webpack_require__(846);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref3 = _jsx('div', {}, void 0, 'loading');

var PageContainer = function (_Component) {
	_inherits(PageContainer, _Component);

	function PageContainer() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, PageContainer);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageContainer.__proto__ || Object.getPrototypeOf(PageContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (data) {
			var checkPost = _this.props.checkPost;

			checkPost({ variables: data }).catch(function () {
				return console.log('error');
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(PageContainer, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.data.subscribeToMore({
				document: postSubscription, // eslint-disable-line no-use-before-define
				variables: {
					checked: false
				},
				updateQuery: function updateQuery(prev, _ref2) {
					var subscriptionData = _ref2.subscriptionData;
					// eslint-disable-line consistent-return
					if (!subscriptionData.data) return prev;
					var newPost = subscriptionData.data.postCreated;
					if (!prev.posts.find(function (x) {
						return x.id === newPost.id;
					})) {
						return _extends({}, prev, {
							posts: [].concat(_toConsumableArray(prev.posts), [newPost])
						});
					}
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var styles = __webpack_require__(1192);

			var data = this.props.data;
			var posts = data.posts;

			return _jsx('div', {
				className: styles.page
			}, void 0, posts ? _jsx(_List2.default, {
				data: posts,
				check: this.handleClick
			}) : _ref3);
		}
	}]);

	return PageContainer;
}(_react.Component);

var handleGetPosts = (0, _graphqlTag2.default)(_templateObject);

var handleCheckPosts = (0, _graphqlTag2.default)(_templateObject2);

var postSubscription = (0, _graphqlTag2.default)(_templateObject3);

var Page = (0, _reactApollo.compose)((0, _reactApollo.graphql)(handleGetPosts, { name: 'data' }), (0, _reactApollo.graphql)(handleCheckPosts, {
	name: 'checkPost',
	options: {
		update: function update(store, _ref4) {
			var checkPost = _ref4.data.checkPost;

			var data = store.readQuery({ query: handleGetPosts });
			var arr = data.posts.filter(function (x) {
				return x.id !== checkPost.id;
			});
			store.writeQuery({ query: handleGetPosts, data: _extends({}, data, { posts: arr }) });
		}
	}
}), (0, _reactApollo.graphql)(postSubscription, { name: 'postSubscription' }))(PageContainer);

exports.default = Page;

/***/ }),

/***/ 846:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Item = __webpack_require__(847);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
	_inherits(List, _Component);

	function List() {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
	}

	_createClass(List, [{
		key: 'render',
		value: function render() {
			var styles = __webpack_require__(1191);
			var _props = this.props,
			    data = _props.data,
			    check = _props.check;

			var toRender = data.map(function (item) {
				return _jsx(_Item2.default, {
					item: item,
					check: check
				}, item.id);
			});
			return _jsx('div', {
				className: styles.list
			}, void 0, toRender);
		}
	}]);

	return List;
}(_react.Component);

exports.default = List;

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(848);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx(_semanticUiReact.Button.Or, {});

var _ref3 = _jsx(_semanticUiReact.Button.Or, {});

var _ref4 = _jsx(_semanticUiReact.Button.Or, {});

var Item = function (_Component) {
	_inherits(Item, _Component);

	function Item() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Item);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (id, action, time) {
			return function () {
				var check = _this.props.check;

				var data = { id: id, action: action, time: time };
				check(data);
			};
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Item, [{
		key: 'render',
		value: function render() {
			var styles = __webpack_require__(1189);
			var item = this.props.item;

			return _jsx('div', {
				className: styles.item
			}, void 0, _jsx('div', {
				className: styles.title
			}, void 0, item.user), _jsx('div', {
				className: styles.message
			}, void 0, item.message), _jsx(_semanticUiReact.Button.Group, {}, void 0, _jsx(_semanticUiReact.Button, {
				color: 'blue',
				onClick: this.handleClick(item.id, 'timeout', 1)
			}, void 0, 'Purge'), _ref2, _jsx(_semanticUiReact.Button, {
				color: 'orange',
				onClick: this.handleClick(item.id, 'timeout', 600)
			}, void 0, 'Timeout 10'), _ref3, _jsx(_semanticUiReact.Button, {
				color: 'red',
				onClick: this.handleClick(item.id, 'ban')
			}, void 0, 'Ban'), _ref4, _jsx(_semanticUiReact.Button, {
				color: 'green',
				onClick: this.handleClick(item.id, 'allow')
			}, void 0, 'Allow')));
		}
	}]);

	return Item;
}(_react.Component);

exports.default = Item;

/***/ })

},[544]);