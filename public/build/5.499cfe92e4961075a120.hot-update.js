webpackHotUpdate(5,{

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

var _navigator = __webpack_require__(50);

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

/***/ })

})