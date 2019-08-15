'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _common = require('./common');

var _reactTransitionGroup = require('react-transition-group');

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
	placement: _propTypes2["default"].oneOf(['left', 'right', 'top', 'bottom']),
	hasHeader: _propTypes2["default"].bool,
	show: _propTypes2["default"].bool,
	title: _propTypes2["default"].string,
	className: _propTypes2["default"].string,
	showMask: _propTypes2["default"].bool,
	maskClosable: _propTypes2["default"].bool,
	zIndex: _propTypes2["default"].number,
	showClose: _propTypes2["default"].bool,
	width: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	height: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	destroyOnClose: _propTypes2["default"].bool,
	container: _propTypes2["default"].string,
	closeIcon: _propTypes2["default"].node
};

var defaultProps = {
	placement: 'left',
	hasHeader: true,
	show: false,
	showMask: true,
	maskClosable: true,
	zIndex: 100000,
	showClose: false,
	width: 'auto',
	height: 'auto',
	destroyOnClose: false,
	container: 'body',
	closeIcon: null
};

var DrawerContext = _react2["default"].createContext && _react2["default"].createContext(null);

var Drawer = function (_Component) {
	_inherits(Drawer, _Component);

	function Drawer(props) {
		_classCallCheck(this, Drawer);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {
			showDrawer: true,
			width: '0',
			push: false
		};
		_this.drawer = null;
		_this.parentDrawer = null;
		(0, _common.bindAll)(_this, ['fMaskClick', 'fDrawerTransitionEnd', 'renderMask', 'renderClose', 'fCloseClick', 'renderBody', 'renderAll']);
		return _this;
	}

	Drawer.prototype.componentDidUpdate = function componentDidUpdate(preProps) {
		//在有父级抽屉时候，子级触发父级向外移动一段距离
		if (preProps.show != this.props.show && this.parentDrawer) {
			if (this.props.show) {
				this.parentDrawer.push();
			} else {
				this.parentDrawer.pull();
			}
		}
	};

	Drawer.prototype.push = function push() {
		this.setState({
			push: true
		});
	};

	Drawer.prototype.pull = function pull() {
		this.setState({
			push: false
		});
	};

	Drawer.prototype.fMaskClick = function fMaskClick() {
		var maskClosable = this.props.maskClosable;

		if (maskClosable) {
			var onClose = this.props.onClose;

			onClose && onClose();
		}
	};

	Drawer.prototype.fCloseClick = function fCloseClick() {
		var onClose = this.props.onClose;

		onClose && onClose();
	};

	Drawer.prototype.fDrawerTransitionEnd = function fDrawerTransitionEnd(e) {};

	Drawer.prototype.renderMask = function renderMask() {
		var _props = this.props,
		    show = _props.show,
		    showMask = _props.showMask,
		    fMaskClick = _props.fMaskClick;
		//mask样式

		var maskStyle = void 0;
		if (show) {
			maskStyle = {
				opacity: 1,
				width: '100%'
			};
		} else {
			maskStyle = {
				opacity: 0,
				width: 0
			};
		}
		return showMask ? _react2["default"].createElement('div', { className: 'drawer-mask', style: maskStyle, onClick: this.fMaskClick }) : null;
	};

	Drawer.prototype.renderClose = function renderClose() {
		var _props2 = this.props,
		    showClose = _props2.showClose,
		    closeIcon = _props2.closeIcon;

		var closeDom = closeIcon || _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close' });
		return showClose ? _react2["default"].createElement(
			'span',
			{ className: 'drawer-close', onClick: this.fCloseClick },
			closeDom
		) : null;
	};

	Drawer.prototype.renderBody = function renderBody() {
		var _this2 = this;

		var _props3 = this.props,
		    destroyOnClose = _props3.destroyOnClose,
		    show = _props3.show;

		if (destroyOnClose && !show) {
			return null;
		}
		var _props4 = this.props,
		    hasHeader = _props4.hasHeader,
		    title = _props4.title,
		    children = _props4.children,
		    width = _props4.width,
		    height = _props4.height,
		    placement = _props4.placement;
		var push = this.state.push;
		//抽屉类

		var drawerClass = (0, _classnames2["default"])('drawer', 'drawer-' + placement);
		//根据位置获取抽屉样式
		var translateHideMap = {
			left: 'translateX(-100%)',
			right: 'translateX(100%)',
			top: 'translateY(-100%)',
			bottom: 'translateY(100%)'
		};
		var translateShow = 'translate(0,0)';
		if (push) {
			var pushNum = 50;
			var translateShowMap = {
				left: 'translate(' + pushNum + 'px,0)',
				right: 'translate(-' + pushNum + 'px,0)',
				top: 'translate(0,' + pushNum + 'px)',
				bottom: 'translate(0,-' + pushNum + 'px)'
			};
			translateShow = translateShowMap[placement];
		}
		var translate = show ? translateShow : translateHideMap[placement];
		//抽屉面板样式
		if ((0, _common.isNumber)(width)) {
			width = width + 'px';
		}
		if ((0, _common.isNumber)(height)) {
			height = height + 'px';
		}
		if (placement == 'top' || placement == 'bottom') {
			if (width == 'auto') {
				width = '100%';
			}
		}
		if (placement == 'left' || placement == 'right') {
			if (height == 'auto') {
				height = '100%';
			}
		}
		var drawerStyle = {
			transform: translate,
			WebkitTransform: translate,
			width: width,
			height: height
		};
		var closer = this.renderClose();
		var header = hasHeader ? _react2["default"].createElement(
			'div',
			{ className: 'drawer-header' },
			_react2["default"].createElement(
				'div',
				{ className: 'drawer-header-title' },
				title
			)
		) : '';
		return _react2["default"].createElement(
			DrawerContext.Provider,
			{ value: this },
			_react2["default"].createElement(
				'div',
				{ ref: function ref(drawer) {
						_this2.drawer = drawer;
					}, onTransitionEnd: this.fDrawerTransitionEnd, className: drawerClass, style: drawerStyle },
				closer,
				header,
				_react2["default"].createElement(
					'div',
					{ className: 'drawer-body' },
					children
				)
			)
		);
	};

	Drawer.prototype.renderAll = function renderAll(value) {
		var _props5 = this.props,
		    show = _props5.show,
		    className = _props5.className,
		    zIndex = _props5.zIndex;
		//容器类

		var drawercClass = (0, _classnames2["default"])('drawerc', className);
		//容器样式
		var drawercStyle = { zIndex: zIndex };
		if (show) {
			drawercStyle.width = '100%';
		} else {
			drawercStyle.width = 0;
		}
		//获取父级抽屉
		this.parentDrawer = value;

		return _react2["default"].createElement(
			'div',
			{ className: drawercClass, style: drawercStyle },
			this.renderMask(),
			this.renderBody()
		);
	};

	Drawer.prototype.render = function render() {
		var container = this.props.container;

		var conDom = document.querySelector(container);

		return _reactDom2["default"].createPortal(_react2["default"].createElement(
			DrawerContext.Consumer,
			null,
			this.renderAll
		), conDom);
	};

	return Drawer;
}(_react.Component);

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

exports["default"] = Drawer;
module.exports = exports['default'];