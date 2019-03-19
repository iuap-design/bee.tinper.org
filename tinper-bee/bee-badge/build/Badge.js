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

/**
 *  badge 默认显示内容1
 */

var propTypes = {
	/**
  * @title 颜色
  */
	colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	/**
  * @title 边角显示内容
  */
	dataBadge: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].string, _propTypes2["default"].object]),
	dataBadgePlacement: _propTypes2["default"].oneOf(['topbottom'])
};

var defaultProps = {
	clsPrefix: 'u-badge'
};

var Badge = function (_React$Component) {
	_inherits(Badge, _React$Component);

	function Badge(props) {
		_classCallCheck(this, Badge);

		return _possibleConstructorReturn(this, _React$Component.call(this, props));
	}

	Badge.prototype.render = function render() {
		var _props = this.props,
		    colors = _props.colors,
		    className = _props.className,
		    children = _props.children,
		    clsPrefix = _props.clsPrefix,
		    dataBadge = _props.dataBadge,
		    dataBadgePlacement = _props.dataBadgePlacement,
		    others = _objectWithoutProperties(_props, ['colors', 'className', 'children', 'clsPrefix', 'dataBadge', 'dataBadgePlacement']);

		var clsObj = {};
		if (className) {
			clsObj[className] = true;
		}
		/**
   *  以u-badge起头的颜色类判断
   */
		if (colors) {
			clsObj[clsPrefix + '-' + colors] = true;
		}
		if (dataBadge) {
			clsObj['data-badge'] = true;
		}
		if (dataBadgePlacement) {
			clsObj['data-badge-' + dataBadgePlacement] = true;
		}
		var classNames = (0, _classnames2["default"])(clsPrefix, clsObj);

		return _react2["default"].createElement(
			'span',
			_extends({ className: classNames }, others),
			dataBadge && _react2["default"].createElement(
				'span',
				null,
				children,
				_react2["default"].createElement(
					'span',
					{ className: 'data-icon' },
					dataBadge
				)
			),
			!dataBadge && _react2["default"].createElement(
				'span',
				{ className: 'badge-single' },
				children
			)
		);
	};

	return Badge;
}(_react2["default"].Component);

Badge.defaultProps = defaultProps;

exports["default"] = Badge;
module.exports = exports['default'];