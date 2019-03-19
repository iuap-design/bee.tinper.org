'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabBarMixin = require('./TabBarMixin');

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TabBar = (0, _createReactClass2["default"])({
  mixins: [_TabBarMixin2["default"]],
  render: function render() {
    var tabs = this.getTabs();
    return this.getRootNode(tabs);
  }
}); /**
    * This source code is quoted from rc-tabs.
    * homepage: https://github.com/react-component/tabs
    */
exports["default"] = TabBar;
module.exports = exports['default'];