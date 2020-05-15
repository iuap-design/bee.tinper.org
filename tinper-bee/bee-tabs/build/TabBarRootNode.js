'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TabBarRootNode = function (_React$Component) {
  _inherits(TabBarRootNode, _React$Component);

  function TabBarRootNode() {
    var _temp, _this, _ret;

    _classCallCheck(this, TabBarRootNode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getExtraContentStyle = function () {
      var _this$props = _this.props,
          tabBarPosition = _this$props.tabBarPosition,
          direction = _this$props.direction;

      var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
      if (direction === 'rtl') {
        return topOrBottom ? { "float": 'left' } : {};
      }
      return topOrBottom ? { "float": 'right' } : {};
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TabBarRootNode.prototype.render = function render() {
    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        onKeyDown = _props.onKeyDown,
        className = _props.className,
        extraContent = _props.extraContent,
        style = _props.style,
        tabBarPosition = _props.tabBarPosition,
        children = _props.children,
        direction = _props.direction,
        restProps = _objectWithoutProperties(_props, ['clsPrefix', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition', 'children', 'direction']);

    var cls = (0, _classnames2["default"])(clsPrefix + '-bar', {
      // [className]: !!className,
    });
    var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
    var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
    var newChildren = children;
    if (extraContent) {
      newChildren = [(0, _react.cloneElement)(extraContent, {
        key: 'extra',
        style: _extends({}, this.getExtraContentStyle(topOrBottom, direction), extraContentStyle)
      }), (0, _react.cloneElement)(children, { key: 'content' })];
      newChildren = topOrBottom ? newChildren : newChildren.reverse();
    }
    return _react2["default"].createElement(
      'div',
      _extends({
        role: 'tablist',
        className: cls,
        tabIndex: '0',
        ref: this.props.saveRef('root'),
        onKeyDown: onKeyDown
        // style={style}
      }, (0, _utils.getDataAttr)(restProps)),
      newChildren
    );
  };

  return TabBarRootNode;
}(_react2["default"].Component);

exports["default"] = TabBarRootNode;


TabBarRootNode.propTypes = {
  clsPrefix: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  tabBarPosition: _propTypes2["default"].oneOf(['left', 'right', 'top', 'bottom']),
  children: _propTypes2["default"].node,
  extraContent: _propTypes2["default"].node,
  onKeyDown: _propTypes2["default"].func,
  saveRef: _propTypes2["default"].func,
  direction: _propTypes2["default"].oneOf(['ltr', 'rtl'])
};

TabBarRootNode.defaultProps = {
  clsPrefix: '',
  className: '',
  style: {},
  tabBarPosition: 'top',
  extraContent: null,
  children: null,
  onKeyDown: function onKeyDown() {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];