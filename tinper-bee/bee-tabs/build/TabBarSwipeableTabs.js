'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var TabBarSwipeableTabs = function (_React$Component) {
  _inherits(TabBarSwipeableTabs, _React$Component);

  function TabBarSwipeableTabs() {
    _classCallCheck(this, TabBarSwipeableTabs);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TabBarSwipeableTabs.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var children = props.panels;
    var activeKey = props.activeKey;
    var rst = [];
    var clsPrefix = props.clsPrefix;

    var _flexWidth = 1 / props.pageSize * 100 + '%';
    var tabStyle = {
      WebkitFlexBasis: _flexWidth,
      flexBasis: _flexWidth
    };

    _react2["default"].Children.forEach(children, function (child) {
      var _classnames;

      if (!child) {
        return;
      }
      var key = child.key;
      var cls = (0, _classnames3["default"])(clsPrefix + '-tab', (_classnames = {}, _defineProperty(_classnames, clsPrefix + '-tab-active', activeKey === key), _defineProperty(_classnames, clsPrefix + '-tab-disabled', child.props.disabled), _classnames));
      var events = {};
      if (!child.props.disabled) {
        events = {
          onClick: _this2.props.onTabClick.bind(_this2, key)
        };
      }
      var refProps = {};
      if (activeKey === key) {
        refProps.ref = _this2.props.saveRef('activeTab');
      }
      rst.push(_react2["default"].createElement(
        'div',
        _extends({
          role: 'tab',
          style: tabStyle,
          'aria-disabled': child.props.disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, events, {
          className: cls,
          key: key
        }, refProps),
        child.props.tab
      ));
    });

    return rst;
  };

  return TabBarSwipeableTabs;
}(_react2["default"].Component);

exports["default"] = TabBarSwipeableTabs;


TabBarSwipeableTabs.propTypes = {
  pageSize: _propTypes2["default"].number,
  onTabClick: _propTypes2["default"].func,
  saveRef: _propTypes2["default"].func,
  destroyInactiveTabPane: _propTypes2["default"].bool,
  clsPrefix: _propTypes2["default"].string,
  activeKey: _propTypes2["default"].string,
  panels: _propTypes2["default"].node
};

TabBarSwipeableTabs.defaultProps = {
  pageSize: 5,
  onTabClick: function onTabClick() {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];