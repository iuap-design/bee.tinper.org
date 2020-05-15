'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabBarRootNode = require('./TabBarRootNode');

var _TabBarRootNode2 = _interopRequireDefault(_TabBarRootNode);

var _TabBarTabsNode = require('./TabBarTabsNode');

var _TabBarTabsNode2 = _interopRequireDefault(_TabBarTabsNode);

var _SaveRef = require('./SaveRef');

var _SaveRef2 = _interopRequireDefault(_SaveRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
/* eslint-disable react/prefer-stateless-function */


var TabBar = function (_React$Component) {
  _inherits(TabBar, _React$Component);

  function TabBar() {
    _classCallCheck(this, TabBar);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TabBar.prototype.render = function render() {
    var _this2 = this;

    return _react2["default"].createElement(
      _SaveRef2["default"],
      null,
      function (saveRef) {
        return _react2["default"].createElement(
          _TabBarRootNode2["default"],
          _extends({ saveRef: saveRef }, _this2.props),
          _react2["default"].createElement(_TabBarTabsNode2["default"], _extends({ saveRef: saveRef }, _this2.props))
        );
      }
    );
  };

  return TabBar;
}(_react2["default"].Component);

exports["default"] = TabBar;
module.exports = exports['default'];