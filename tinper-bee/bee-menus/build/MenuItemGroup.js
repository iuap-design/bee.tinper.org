'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-menu.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/menu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var MenuItemGroup = function (_React$Component) {
  _inherits(MenuItemGroup, _React$Component);

  function MenuItemGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, MenuItemGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderInnerMenuItem = function (item) {
      var _this$props = _this.props,
          renderMenuItem = _this$props.renderMenuItem,
          index = _this$props.index;

      return renderMenuItem(item, index, _this.props.subMenuKey);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MenuItemGroup.prototype.render = function render() {
    var props = _objectWithoutProperties(this.props, []);

    var _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = props.rootPrefixCls;

    var titleClassName = rootPrefixCls + '-item-group-title';
    var listClassName = rootPrefixCls + '-item-group-list';
    var title = props.title,
        children = props.children;

    _util.menuAllProps.forEach(function (key) {
      return delete props[key];
    });

    // Set onClick to null, to ignore propagated onClick event
    delete props.onClick;

    return _react2["default"].createElement(
      'li',
      _extends({}, props, { className: className + ' ' + rootPrefixCls + '-item-group' }),
      _react2["default"].createElement(
        'div',
        {
          className: titleClassName,
          title: typeof title === 'string' ? title : undefined
        },
        title
      ),
      _react2["default"].createElement(
        'ul',
        { className: listClassName },
        _react2["default"].Children.map(children, this.renderInnerMenuItem)
      )
    );
  };

  return MenuItemGroup;
}(_react2["default"].Component);

MenuItemGroup.propTypes = {
  renderMenuItem: _propTypes2["default"].func,
  index: _propTypes2["default"].number,
  className: _propTypes2["default"].string,
  subMenuKey: _propTypes2["default"].string,
  rootPrefixCls: _propTypes2["default"].string
};
MenuItemGroup.defaultProps = {
  disabled: true
};


MenuItemGroup.isMenuItemGroup = true;

exports["default"] = MenuItemGroup;
module.exports = exports['default'];