webpackJsonp([2],{

/***/ 29:
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

var _templateObject = _taggedTemplateLiteral(["\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tcolor: palevioletred;\n"], ["\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tcolor: palevioletred;\n"]);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(61);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

function _taggedTemplateLiteral(strings, raw) {
	return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
var Title = _styledComponents2.default.h1(_templateObject);

var Enroll = function (_Component) {
	_inherits(Enroll, _Component);

	function Enroll(props) {
		_classCallCheck(this, Enroll);

		return _possibleConstructorReturn(this, (Enroll.__proto__ || Object.getPrototypeOf(Enroll)).call(this, props));
	}

	_createClass(Enroll, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", null, _react2.default.createElement(Title, null, "Enroll Part Test"));
		}
	}]);

	return Enroll;
}(_react.Component);

exports.default = Enroll;

/***/ })

});