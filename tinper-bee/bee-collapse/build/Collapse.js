'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeTransition = require('bee-transition');

var _capitalize = require('./util/capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _tinperBeeCore = require('tinper-bee-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var MARGINS = {
	height: ['marginTop', 'marginBottom'],
	width: ['marginLeft', 'marginRight']
};

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
	node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
	var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	var margins = MARGINS[dimension];

	return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
}

var propTypes = {
	/**
  * 是否显示折叠内容
  */
	"in": _propTypes2["default"].bool,

	/**
  * 当折叠时，是否从DOM元素删除该组件
  */
	unmountOnExit: _propTypes2["default"].bool,

	/**
  * 当折叠内容初始化显示时，是否添加动态效果，默认不添加
  */
	transitionAppear: _propTypes2["default"].bool,

	/**
  * 设置超时时间，防止出现问题，可设置为>=动画时间
  */
	timeout: _propTypes2["default"].number,

	/**
  * 组件内容扩展之前调用的函数
  */
	onEnter: _propTypes2["default"].func,
	/**
  * 组件内容扩展时调用的函数
  */
	onEntering: _propTypes2["default"].func,
	/**
  * 组件内容扩展完成时调用的函数
  */
	onEntered: _propTypes2["default"].func,
	/**
  * 组件内容隐藏前调用的函数
  * Callback fired before the component collapses
  */
	onExit: _propTypes2["default"].func,
	/**
  * 组件内容隐藏时调用的函数
  */
	onExiting: _propTypes2["default"].func,
	/**
  *组件内容隐藏后调用的函数
  */
	onExited: _propTypes2["default"].func,

	/**
  * 折叠区展开效果是纵向的还是横向的（ height或者width改变）
  */
	dimension: _propTypes2["default"].oneOfType([_propTypes2["default"].oneOf(['height', 'width']), _propTypes2["default"].func]),

	/**
  * 返回当前组件元素动态显示的高度或者宽度，用户也可以自定义显示的区域大小
  */
	getDimensionValue: _propTypes2["default"].func,

	/**
  * ARIA role of collapsible element
  */
	role: _propTypes2["default"].string
};

var defaultProps = { "in": false,
	timeout: 300,
	unmountOnExit: false,
	transitionAppear: false,

	dimension: 'height',
	getDimensionValue: getDimensionValue
};

var Collapse = function (_React$Component) {
	_inherits(Collapse, _React$Component);

	function Collapse(props, context) {
		_classCallCheck(this, Collapse);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

		_this.handleEnter = _this.handleEnter.bind(_this);
		_this.handleEntering = _this.handleEntering.bind(_this);
		_this.handleEntered = _this.handleEntered.bind(_this);
		_this.handleExit = _this.handleExit.bind(_this);
		_this.handleExiting = _this.handleExiting.bind(_this);
		return _this;
	}

	/* -- Expanding -- */


	Collapse.prototype.handleEnter = function handleEnter(elem) {
		var dimension = this._dimension();
		elem.style[dimension] = '0';
	};

	Collapse.prototype.handleEntering = function handleEntering(elem) {
		var dimension = this._dimension();
		elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	};

	Collapse.prototype.handleEntered = function handleEntered(elem) {
		var dimension = this._dimension();
		elem.style[dimension] = null;
	};

	/* -- Collapsing -- */


	Collapse.prototype.handleExit = function handleExit(elem) {
		var dimension = this._dimension();
		elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
		triggerBrowserReflow(elem);
	};

	Collapse.prototype.handleExiting = function handleExiting(elem) {
		var dimension = this._dimension();
		elem.style[dimension] = '0';
	};

	Collapse.prototype._dimension = function _dimension() {
		return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	};

	// for testing


	Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
		return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	};

	Collapse.prototype.render = function render() {
		var _props = this.props,
		    onEnter = _props.onEnter,
		    onEntering = _props.onEntering,
		    onEntered = _props.onEntered,
		    onExit = _props.onExit,
		    onExiting = _props.onExiting,
		    className = _props.className,
		    props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);

		delete props.dimension;
		delete props.getDimensionValue;

		var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
		var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
		var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
		var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
		var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);

		var classes = {
			width: this._dimension() === 'width'
		};

		return _react2["default"].createElement(_beeTransition.Transition, _extends({}, props, {
			'aria-expanded': props.role ? props["in"] : null,
			className: (0, _classnames2["default"])(className, classes),
			exitedClassName: 'collapse',
			exitingClassName: 'collapsing',
			enteredClassName: 'collapse in',
			enteringClassName: 'collapsing',
			onEnter: handleEnter,
			onEntering: handleEntering,
			onEntered: handleEntered,
			onExit: handleExit,
			onExiting: handleExiting
		}));
	};

	return Collapse;
}(_react2["default"].Component);

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

exports["default"] = Collapse;
module.exports = exports['default'];