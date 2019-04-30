'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
	type: _propTypes2["default"].string

};
/**
 *  badge 默认显示内容1
 */
var defaultProps = {
	clsPrefix: 'uf'
};

var Icon = function (_Component) {
	_inherits(Icon, _Component);

	function Icon(props) {
		_classCallCheck(this, Icon);

		return _possibleConstructorReturn(this, _Component.call(this, props));
	}

	Icon.prototype.render = function render() {
		var _props = this.props,
		    type = _props.type,
		    className = _props.className,
		    clsPrefix = _props.clsPrefix,
		    others = _objectWithoutProperties(_props, ['type', 'className', 'clsPrefix']);

		var clsObj = {};

		var classNames = (0, _classnames2["default"])(clsPrefix, type);

		return _react2["default"].createElement('i', _extends({}, others, { className: (0, _classnames2["default"])(classNames, className) }));
	};

	return Icon;
}(_react.Component);

Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;

exports["default"] = Icon;
module.exports = exports['default'];