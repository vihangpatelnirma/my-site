webpackJsonp([5],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
	return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.default = configureStore;

var _redux = __webpack_require__(24);

var _rootReducer = __webpack_require__(117);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function configureStore() {
	var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var reduxRouter = arguments[1];

	/**
  * Apply middleware from routes
  */
	var middlewares = (0, _redux.applyMiddleware)(reduxRouter.middleware);

	/**
  * Configure store using above middlewares
  */
	var composeFunc = void 0;
	if (true) {
		composeFunc = (0, _redux.compose)(reduxRouter.enhancer, middlewares, (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : function (f) {
			return f;
		});
	} else {
		composeFunc = (0, _redux.compose)(reduxRouter.enhancer, middlewares);
	}

	var store = (0, _redux.createStore)((0, _rootReducer2.default)({
		location: reduxRouter.reducer
	}), initialState, composeFunc);

	return store;
}

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _initialReducer;

var _redux = __webpack_require__(24);

var _reducer = __webpack_require__(118);

var _reducer2 = __webpack_require__(119);

var _navigator = __webpack_require__(27);

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	} else {
		obj[key] = value;
	}return obj;
}

var initialReducer = (_initialReducer = {}, _defineProperty(_initialReducer, _reducer.reducerHome.storeName, _reducer.reducerHome.reducer), _defineProperty(_initialReducer, _navigator.reducerNavigator.storeName, _navigator.reducerNavigator.reducer), _defineProperty(_initialReducer, _reducer2.reducerEnroll.storeName, _reducer2.reducerEnroll.reducer), _initialReducer);

var createReducer = function createReducer(defaultReducers) {
	return (0, _redux.combineReducers)(_extends({}, defaultReducers, initialReducer));
};

exports.default = createReducer;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reducerHome = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _ReducerManager = __webpack_require__(26);

var _ReducerManager2 = _interopRequireDefault(_ReducerManager);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var initApp = function initApp(state, payload) {
	return _extends({}, state, {
		name: payload.name
	});
};

var reducerHome = exports.reducerHome = new _ReducerManager2.default({
	namespace: "home",
	store: "home",
	initialState:  true ? window.__INITIAL_STATE__.home : {},
	actions: {
		INIT_APP: initApp
	}
});

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reducerEnroll = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _ReducerManager = __webpack_require__(26);

var _ReducerManager2 = _interopRequireDefault(_ReducerManager);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var initApp = function initApp(state, payload) {
	return _extends({}, state, {
		name: payload.name
	});
};

var reducerEnroll = exports.reducerEnroll = new _ReducerManager2.default({
	namespace: "home",
	store: "home",
	initialState:  true ? window.__INITIAL_STATE__.home : {},
	actions: {
		INIT_APP: initApp
	}
});

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Converts a string to titlecase. Words without separation needs to have _ with them
 * item => Item
 * item_details => Item Details
 * ITEM DETAILS => Item Details
 *
 * @param {string} [value='']
 */
var convertToTitleCase = exports.convertToTitleCase = function convertToTitleCase() {
	var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	return (value || "").replace(/\w\S*/g, function (txt) {
		var Pieces = txt.indexOf("_") > -1 && txt.split("_").map(function (piece) {
			return convertToTitleCase(piece);
		}) || [];

		return Pieces.length > 0 ? Pieces.join("") : txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _dec, _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _header = __webpack_require__(143);

var _header2 = _interopRequireDefault(_header);

var _footer = __webpack_require__(150);

var _footer2 = _interopRequireDefault(_footer);

var _home = __webpack_require__(151);

var _home2 = _interopRequireDefault(_home);

var _enroll = __webpack_require__(154);

var _enroll2 = _interopRequireDefault(_enroll);

var _courses = __webpack_require__(155);

var _courses2 = _interopRequireDefault(_courses);

var _blog = __webpack_require__(156);

var _blog2 = _interopRequireDefault(_blog);

var _team = __webpack_require__(157);

var _team2 = _interopRequireDefault(_team);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var indexMapFiles = {
	Home: _home2.default,
	Enroll: _enroll2.default,
	Courses: _courses2.default,
	Blog: _blog2.default,
	Team: _team2.default
};

var App = (_dec = (0, _reactRedux.connect)(function (state) {
	return {
		page: state.page
	};
}), _dec(_class = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			var ComponentToLoad = indexMapFiles[this.props.page] || _home2.default;

			return _react2.default.createElement("div", null, _react2.default.createElement(_header2.default, null), _react2.default.createElement(ComponentToLoad, null), _react2.default.createElement(_footer2.default, null));
		}
	}]);

	return App;
}(_react.Component)) || _class);
exports.default = App;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _dec, _class;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(21);

var _navigator = __webpack_require__(27);

var _styled = __webpack_require__(144);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Header = (_dec = (0, _reactRedux.connect)(), _dec(_class = function (_Component) {
	_inherits(Header, _Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.navigateHome = _this.navigate.bind(_this, "HOME");
		_this.navigateEnroll = _this.navigate.bind(_this, "ENROLL");
		_this.navigateCourses = _this.navigate.bind(_this, "COURSES");
		_this.navigateBlog = _this.navigate.bind(_this, "BLOG");
		_this.navigateTeam = _this.navigate.bind(_this, "TEAM");
		return _this;
	}

	_createClass(Header, [{
		key: "navigate",
		value: function navigate(page) {
			this.props.dispatch(_navigator.reducerNavigator.actions[page]());
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(_styled.HorizWrapper, null, _react2.default.createElement(_styled.HeaderLink, { onClick: this.navigateHome }, "HOME"), _react2.default.createElement(_styled.HeaderLink, { onClick: this.navigateEnroll }, "ENROLL"), _react2.default.createElement(_styled.HeaderLink, { onClick: this.navigateCourses }, "COURSES"), _react2.default.createElement(_styled.HeaderLink, { onClick: this.navigateBlog }, "BLOG"), _react2.default.createElement(_styled.HeaderLink, { onClick: this.navigateTeam }, "TEAM"));
		}
	}]);

	return Header;
}(_react.Component)) || _class);
exports.default = Header;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeaderLink = exports.HorizWrapper = exports.Wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(["\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n"], ["\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tposition: absolutel;\n"], ["\n\twidth: 100%;\n\tposition: absolutel;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n\tpadding: 10px;\n"], ["\n\tpadding: 10px;\n"]);

var _styledComponents = __webpack_require__(61);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject);

var HorizWrapper = exports.HorizWrapper = _styledComponents2.default.div(_templateObject2);

var HeaderLink = exports.HeaderLink = _styledComponents2.default.span(_templateObject3);

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Footer = function (_Component) {
	_inherits(Footer, _Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
	}

	_createClass(Footer, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, " Footer "));
		}
	}]);

	return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = _interopRequireDefault2(__webpack_require__(3)).default;

var _importCss = _interopRequireDefault2(__webpack_require__(4)).default;

var _universalImport = _interopRequireDefault2(__webpack_require__(5)).default;

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(3);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(4);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(5);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactUniversalComponent = __webpack_require__(8);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Home = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: "./home",
  file: "/Users/vihangpatel/projects/my-site/client/src/modules/home/index.js",
  load: function load() {
    return Promise.all([_universalImport({
      id: "./home",
      file: "/Users/vihangpatel/projects/my-site/client/src/modules/home/index.js",
      load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 29)), _importCss("home", {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path.join(__dirname, "./home");
      },
      resolve: function resolve() {
        return /*require.resolve*/(29);
      },
      chunkName: function chunkName() {
        return "home";
      }
    }), (0, _importCss3.default)("home", {})]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, "./home");
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "home";
  }
})); // eslint-disable-line no-unused-vars
exports.default = Home;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = _interopRequireDefault2(__webpack_require__(3)).default;

var _importCss = _interopRequireDefault2(__webpack_require__(4)).default;

var _universalImport = _interopRequireDefault2(__webpack_require__(5)).default;

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(3);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(4);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(5);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactUniversalComponent = __webpack_require__(8);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Enroll = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: "./enroll",
  file: "/Users/vihangpatel/projects/my-site/client/src/modules/enroll/index.js",
  load: function load() {
    return Promise.all([_universalImport({
      id: "./enroll",
      file: "/Users/vihangpatel/projects/my-site/client/src/modules/enroll/index.js",
      load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 30)), _importCss("enroll", {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path.join(__dirname, "./enroll");
      },
      resolve: function resolve() {
        return /*require.resolve*/(30);
      },
      chunkName: function chunkName() {
        return "enroll";
      }
    }), (0, _importCss3.default)("enroll", {})]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, "./enroll");
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "enroll";
  }
})); // eslint-disable-line no-unused-vars
exports.default = Enroll;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = _interopRequireDefault2(__webpack_require__(3)).default;

var _importCss = _interopRequireDefault2(__webpack_require__(4)).default;

var _universalImport = _interopRequireDefault2(__webpack_require__(5)).default;

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(3);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(4);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(5);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactUniversalComponent = __webpack_require__(8);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Courses = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: "./courses",
  file: "/Users/vihangpatel/projects/my-site/client/src/modules/courses/index.js",
  load: function load() {
    return Promise.all([_universalImport({
      id: "./courses",
      file: "/Users/vihangpatel/projects/my-site/client/src/modules/courses/index.js",
      load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 31)), _importCss("courses", {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path.join(__dirname, "./courses");
      },
      resolve: function resolve() {
        return /*require.resolve*/(31);
      },
      chunkName: function chunkName() {
        return "courses";
      }
    }), (0, _importCss3.default)("courses", {})]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, "./courses");
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "courses";
  }
})); // eslint-disable-line no-unused-vars
exports.default = Courses;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = _interopRequireDefault2(__webpack_require__(3)).default;

var _importCss = _interopRequireDefault2(__webpack_require__(4)).default;

var _universalImport = _interopRequireDefault2(__webpack_require__(5)).default;

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(3);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(4);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(5);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactUniversalComponent = __webpack_require__(8);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Blog = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: "./blog",
  file: "/Users/vihangpatel/projects/my-site/client/src/modules/blog/index.js",
  load: function load() {
    return Promise.all([_universalImport({
      id: "./blog",
      file: "/Users/vihangpatel/projects/my-site/client/src/modules/blog/index.js",
      load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 32)), _importCss("blog", {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path.join(__dirname, "./blog");
      },
      resolve: function resolve() {
        return /*require.resolve*/(32);
      },
      chunkName: function chunkName() {
        return "blog";
      }
    }), (0, _importCss3.default)("blog", {})]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, "./blog");
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "blog";
  }
})); // eslint-disable-line no-unused-vars
exports.default = Blog;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _path = _interopRequireDefault2(__webpack_require__(3)).default;

var _importCss = _interopRequireDefault2(__webpack_require__(4)).default;

var _universalImport = _interopRequireDefault2(__webpack_require__(5)).default;

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(3);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(4);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(5);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactUniversalComponent = __webpack_require__(8);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Team = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: "./team",
  file: "/Users/vihangpatel/projects/my-site/client/src/modules/team/index.js",
  load: function load() {
    return Promise.all([_universalImport({
      id: "./team",
      file: "/Users/vihangpatel/projects/my-site/client/src/modules/team/index.js",
      load: function load() {
        return Promise.all([__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 33)), _importCss("team", {})]).then(function (proms) {
          return proms[0];
        });
      },
      path: function path() {
        return _path.join(__dirname, "./team");
      },
      resolve: function resolve() {
        return /*require.resolve*/(33);
      },
      chunkName: function chunkName() {
        return "team";
      }
    }), (0, _importCss3.default)("team", {})]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, "./team");
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return "team";
  }
})); // eslint-disable-line no-unused-vars
exports.default = Team;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _actions = __webpack_require__(159);

var _actions2 = _interopRequireDefault(_actions);

var _reduxFirstRouter = __webpack_require__(7);

var _names = __webpack_require__(59);

var _names2 = _interopRequireDefault(_names);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Connect routes using simuilated history and routesMap
 */
var initRoutes = function initRoutes() {
	var pathArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return (0, _reduxFirstRouter.connectRoutes)(_actions2.default, _extends({}, _names2.default, {
		initialEntries: pathArray.initialEntries
	}));
};

exports.default = initRoutes;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _routes;

var _navigator = __webpack_require__(27);

function _defineProperty(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	} else {
		obj[key] = value;
	}return obj;
}

var routes = (_routes = {}, _defineProperty(_routes, _navigator.reducerNavigator.actionNames.HOME, "/"), _defineProperty(_routes, _navigator.reducerNavigator.actionNames.ENROLL, "/enroll"), _defineProperty(_routes, _navigator.reducerNavigator.actionNames.COURSES, "/courses"), _defineProperty(_routes, _navigator.reducerNavigator.actionNames.BLOG, "/blog"), _defineProperty(_routes, _navigator.reducerNavigator.actionNames.TEAM, "/team"), _routes);

exports.default = routes;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var ReducerPackager = function () {
	function ReducerPackager() {
		var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, ReducerPackager);

		this.props = props;

		/**
   * Store name to use in combined reducer
   */
		this.storeName = props.store;

		this.prefixNamespace();
		this.getReducer();
	}

	_createClass(ReducerPackager, [{
		key: "prefixNamespace",
		value: function prefixNamespace() {
			var props = this.props;

			var newActions = {};
			var newActionNames = {};
			var actions = {};
			var actionTypes = [];

			for (var action in props.actions) {
				if (action) {
					(function () {
						var keyName = "";
						keyName = (props.namespace || "") + "/" + (props.store || "") + "/" + action;

						newActions[keyName] = props.actions[action];
						newActionNames[action] = keyName;

						/**
       * Make list of actions available in current class
       * This is to avoid iterating over switch case available
       */
						actionTypes.push(keyName);

						/* eslint-disable no-loop-func */
						actions[action] = function (payload) {
							return _extends({
								type: keyName
							}, payload);
						};
						/* eslint-enable no-loop-func */
					})();
				}
			}

			this.props.actions = newActions;
			this.actions = actions;
			this._actionTypes = actionTypes;
			this.actionNames = newActionNames;
		}
	}, {
		key: "getReducer",
		value: function getReducer() {
			var _this = this;

			var props = this.props,
			    _actionTypes = this._actionTypes;
			var initialState = props.initialState;

			this.reducer = function () {
				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
				var action = arguments[1];

				// if action not found, return existing state,
				// If action exists, check whether its in list of current reducers action
				if (!action || _actionTypes.indexOf(action.type) === -1) {
					return state;
				}

				/**
     * If reducer is already supplied in constructor, return provided reducer
     */
				if (_this.props.reducer) {
					return _this.props.reducer(state, action);
				}

				return props.actions[action.type](state, action);
			};
		}
	}]);

	return ReducerPackager;
}();

exports.default = ReducerPackager;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reducerNavigator = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _reduxFirstRouter = __webpack_require__(7);

var _ReducerManager = __webpack_require__(26);

var _ReducerManager2 = _interopRequireDefault(_ReducerManager);

var _string = __webpack_require__(141);

var _names = __webpack_require__(59);

var _names2 = _interopRequireDefault(_names);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var routeKeys = Object.keys(_names2.default);

var routePageInterceptor = function routePageInterceptor(action) {
	// intercept and derive the names of the route you want to inject.
	switch (action.type) {
		case _reduxFirstRouter.NOT_FOUND:
			return "Error";
		default:
			return false;
	}
};

var switchPage = function switchPage(state, page) {
	return {
		page: page
	};
};

var reducerNavigator = exports.reducerNavigator = new _ReducerManager2.default({
	namespace: "@route",
	store: "page",
	actions: _extends({}, _names2.default, {
		SWITCH_PAGE: switchPage
	}),
	initialState:  true ? window.__INITIAL_STATE__.location.type : "@route/page/Home",
	reducer: function reducer(state, action) {
		/**
   * While store creation ctx.path is supplied on server,
   * if the route does not match,
   * connectRoutes yield routeReducer with 'NOT_FOUND' action type
   */
		var interceptedRouteState = routePageInterceptor(action);

		/**
   * If route is not found, return the Error string
   */
		if (interceptedRouteState) return interceptedRouteState;

		/**
   * If action does not belong to current reducer,
   * return
   */
		if (action.type.indexOf("@route") === -1) {
			return state;
		}

		var actionName = action.type.split("/")[2];

		/**
   * If action is not among the keys of route,
   * return the existing route
   *
   */
		return routeKeys.indexOf(actionName) > -1 ? (0, _string.convertToTitleCase)(actionName) : state;
	}
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var routeNames = {
	HOME: "HOME",
	ENROLL: "ENROLL",
	BLOG: "BLOG",
	TEAM: "TEAM",
	COURSES: "COURSES"
};

exports.default = routeNames;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
module.exports = __webpack_require__(79);


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(82);

var _reactRedux = __webpack_require__(21);

var _store = __webpack_require__(116);

var _store2 = _interopRequireDefault(_store);

var _app = __webpack_require__(142);

var _app2 = _interopRequireDefault(_app);

var _routes = __webpack_require__(158);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Configure routes before hand the store is created.
 * Useful to determine which page's prefetcher should be called
 */
/** Libs imports */
var reduxRouter = (0, _routes2.default)();

/** File imports */

var store = (0, _store2.default)(window.__INITIAL_STATE__ || {}, reduxRouter);

var AppComponent = _react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_app2.default, null));

(0, _reactDom.hydrate)(AppComponent, document.getElementById("app"));

/***/ })

},[62]);