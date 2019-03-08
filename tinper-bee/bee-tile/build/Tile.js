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
	border: _propTypes2["default"].bool,
	hoverColors: _propTypes2["default"].oneOf(['primary', 'success', 'info', 'warning', 'danger']),
	className: _propTypes2["default"].string,
	children: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].object, _propTypes2["default"].node])
};
var defaultProps = {
	clsPrefix: 'u-tile',
	border: true,
	Component: 'div'
};

var Tile = function (_Component) {
	_inherits(Tile, _Component);

	function Tile(props) {
		_classCallCheck(this, Tile);

		return _possibleConstructorReturn(this, _Component.call(this, props));
	}

	Tile.prototype.render = function render() {
		var _props = this.props,
		    Component = _props.Component,
		    border = _props.border,
		    className = _props.className,
		    clsPrefix = _props.clsPrefix,
		    children = _props.children,
		    hoverColors = _props.hoverColors,
		    others = _objectWithoutProperties(_props, ['Component', 'border', 'className', 'clsPrefix', 'children', 'hoverColors']);

		var classes = {};
		if (border) {
			classes[clsPrefix + '-bordered'] = true;
		}
		if (hoverColors) {
			classes[clsPrefix + '-hover-' + hoverColors] = true;
		}
		var classNames = (0, _classnames2["default"])(clsPrefix, classes);
		return _react2["default"].createElement(
			Component,
			_extends({}, others, { className: (0, _classnames2["default"])(className, classNames) }),
			children
		);
	};

	return Tile;
}(_react.Component);

;
Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;
exports["default"] = Tile;
module.exports = exports['default'];