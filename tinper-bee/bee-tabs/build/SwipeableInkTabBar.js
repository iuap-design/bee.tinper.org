'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SwipeableTabBarNode = require('./SwipeableTabBarNode');

var _SwipeableTabBarNode2 = _interopRequireDefault(_SwipeableTabBarNode);

var _TabBarSwipeableTabs = require('./TabBarSwipeableTabs');

var _TabBarSwipeableTabs2 = _interopRequireDefault(_TabBarSwipeableTabs);

var _TabBarRootNode = require('./TabBarRootNode');

var _TabBarRootNode2 = _interopRequireDefault(_TabBarRootNode);

var _InkTabBarNode = require('./InkTabBarNode');

var _InkTabBarNode2 = _interopRequireDefault(_InkTabBarNode);

var _SaveRef = require('./SaveRef');

var _SaveRef2 = _interopRequireDefault(_SaveRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint-disable react/prefer-stateless-function */


var SwipeableInkTabBar = function (_React$Component) {
  _inherits(SwipeableInkTabBar, _React$Component);

  function SwipeableInkTabBar() {
    _classCallCheck(this, SwipeableInkTabBar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  SwipeableInkTabBar.prototype.render = function render() {
    var _this2 = this;

    return _react2["default"].createElement(
      _SaveRef2["default"],
      null,
      function (saveRef, getRef) {
        return _react2["default"].createElement(
          _TabBarRootNode2["default"],
          _extends({ saveRef: saveRef }, _this2.props),
          _react2["default"].createElement(
            _SwipeableTabBarNode2["default"],
            _extends({ saveRef: saveRef, getRef: getRef }, _this2.props),
            _react2["default"].createElement(_TabBarSwipeableTabs2["default"], _extends({ saveRef: saveRef }, _this2.props)),
            _react2["default"].createElement(_InkTabBarNode2["default"], _extends({ saveRef: saveRef, getRef: getRef }, _this2.props))
          )
        );
      }
    );
  };

  return SwipeableInkTabBar;
}(_react2["default"].Component);

exports["default"] = SwipeableInkTabBar;
module.exports = exports['default'];