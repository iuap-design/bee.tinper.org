'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _trigger = require('bee-overlay/build/trigger');

var _trigger2 = _interopRequireDefault(_trigger);

var _placement = require('./placement');

var _placement2 = _interopRequireDefault(_placement);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-dropdown.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/dropdown
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var propTypes = {
  minOverlayWidthMatchTrigger: _propTypes2["default"].bool,
  onVisibleChange: _propTypes2["default"].func,
  clsPrefix: _propTypes2["default"].string,
  children: _propTypes2["default"].any,
  transitionName: _propTypes2["default"].string,
  overlayClassName: _propTypes2["default"].string,
  animation: _propTypes2["default"].any,
  align: _propTypes2["default"].object,
  overlayStyle: _propTypes2["default"].object,
  placement: _propTypes2["default"].string,
  trigger: _propTypes2["default"].array,
  showAction: _propTypes2["default"].array,
  hideAction: _propTypes2["default"].array,
  getPopupContainer: _propTypes2["default"].func
};

var defaultProps = {
  minOverlayWidthMatchTrigger: true,
  clsPrefix: 'u-dropdown',
  trigger: ['hover'],
  showAction: [],
  hideAction: [],
  overlayClassName: '',
  overlayStyle: {},
  defaultVisible: false,
  onVisibleChange: function onVisibleChange() {},

  placement: 'bottomLeft'
};

var jadgeState = function jadgeState(props) {
  if ('visible' in props) {
    return props.visible;
  }
  return props.defaultVisible;
};

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      visible: jadgeState(_this.props)
    };
    _this.onClick = _this.onClick.bind(_this);
    _this.onVisibleChange = _this.onVisibleChange.bind(_this);
    _this.getMenuElement = _this.getMenuElement.bind(_this);
    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);
    _this.afterVisibleChange = _this.afterVisibleChange.bind(_this);

    return _this;
  }

  Dropdown.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var visible = _ref.visible;

    if (visible !== undefined) {
      this.setState({
        visible: visible
      });
    }
  };

  Dropdown.prototype.onClick = function onClick(e) {
    var props = this.props;
    var overlayProps = props.overlay.props;
    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
    if (!('visible' in props)) {
      this.setState({
        visible: false
      });
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  Dropdown.prototype.onVisibleChange = function onVisibleChange(visible) {
    var props = this.props;
    if (!('visible' in props)) {
      this.setState({
        visible: visible
      });
    }
    props.onVisibleChange(visible);
  };

  Dropdown.prototype.getMenuElement = function getMenuElement() {
    var _props = this.props,
        overlay = _props.overlay,
        clsPrefix = _props.clsPrefix;


    return _react2["default"].cloneElement(overlay, {
      prefixCls: clsPrefix + '-menu',
      onClick: this.onClick
    });
  };

  Dropdown.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.refs.trigger.getPopupDomNode();
  };

  Dropdown.prototype.afterVisibleChange = function afterVisibleChange(visible) {
    if (visible && this.props.minOverlayWidthMatchTrigger) {
      var overlayNode = this.getPopupDomNode();
      var rootNode = _reactDom2["default"].findDOMNode(this);
      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style['min-width'] = rootNode.offsetWidth + 'px';
      }
    }
  };

  Dropdown.prototype.render = function render() {
    var _props2 = this.props,
        clsPrefix = _props2.clsPrefix,
        children = _props2.children,
        transitionName = _props2.transitionName,
        animation = _props2.animation,
        align = _props2.align,
        placement = _props2.placement,
        getPopupContainer = _props2.getPopupContainer,
        showAction = _props2.showAction,
        hideAction = _props2.hideAction,
        overlayClassName = _props2.overlayClassName,
        overlayStyle = _props2.overlayStyle,
        trigger = _props2.trigger,
        getDocument = _props2.getDocument,
        disabled = _props2.disabled,
        delay = _props2.delay,
        delayShow = _props2.delayShow,
        delayHide = _props2.delayHide,
        props = _objectWithoutProperties(_props2, ['clsPrefix', 'children', 'transitionName', 'animation', 'align', 'placement', 'getPopupContainer', 'showAction', 'hideAction', 'overlayClassName', 'overlayStyle', 'trigger', 'getDocument', 'disabled', 'delay', 'delayShow', 'delayHide']);

    return _react2["default"].createElement(
      _trigger2["default"],
      _extends({}, props, {
        clsPrefix: clsPrefix,
        ref: 'trigger',
        popupClassName: overlayClassName,
        popupStyle: overlayStyle,
        builtinPlacements: _placement2["default"],
        action: trigger,
        showAction: showAction,
        hideAction: hideAction,
        popupPlacement: placement,
        popupAlign: align,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupVisible: disabled ? false : this.state.visible,
        afterPopupVisibleChange: this.afterVisibleChange,
        popup: this.getMenuElement(),
        onPopupVisibleChange: this.onVisibleChange,
        getPopupContainer: getPopupContainer,
        getDocument: getDocument,
        mouseEnterDelay: delayShow && delayShow / 1000 || delay && delay / 1000,
        mouseLeaveDelay: delayHide && delayHide / 1000 || delay && delay / 1000
      }),
      children
    );
  };

  return Dropdown;
}(_react2["default"].Component);

;

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

exports["default"] = Dropdown;
module.exports = exports['default'];