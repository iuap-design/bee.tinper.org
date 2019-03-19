'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBeeCore = require('tinper-bee-core');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _domScrollIntoView = require('dom-scroll-into-view');

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _miniStore = require('mini-store');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-menu.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/menu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


/* eslint react/no-is-mounted:0 */

var MenuItem = exports.MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onKeyDown = function (e) {
      var keyCode = e.keyCode;
      if (keyCode === _tinperBeeCore.KeyCode.ENTER) {
        _this.onClick(e);
        return true;
      }
    };

    _this.onMouseLeave = function (e) {
      var _this$props = _this.props,
          eventKey = _this$props.eventKey,
          onItemHover = _this$props.onItemHover,
          onMouseLeave = _this$props.onMouseLeave;

      onItemHover({
        key: eventKey,
        hover: false
      });
      onMouseLeave({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onMouseEnter = function (e) {
      var _this$props2 = _this.props,
          eventKey = _this$props2.eventKey,
          onItemHover = _this$props2.onItemHover,
          onMouseEnter = _this$props2.onMouseEnter;

      onItemHover({
        key: eventKey,
        hover: true
      });
      onMouseEnter({
        key: eventKey,
        domEvent: e
      });
    };

    _this.onClick = function (e) {
      var _this$props3 = _this.props,
          eventKey = _this$props3.eventKey,
          multiple = _this$props3.multiple,
          onClick = _this$props3.onClick,
          onSelect = _this$props3.onSelect,
          onDeselect = _this$props3.onDeselect,
          isSelected = _this$props3.isSelected;

      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: _this,
        domEvent: e
      };
      onClick(info);
      if (multiple) {
        if (isSelected) {
          onDeselect(info);
        } else {
          onSelect(info);
        }
      } else if (!isSelected) {
        onSelect(info);
      }
    };

    return _this;
  }

  MenuItem.prototype.componentDidMount = function componentDidMount() {
    // invoke customized ref to expose component to mixin
    this.callRef();
  };

  MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.active) {
      (0, _domScrollIntoView2["default"])(_reactDom2["default"].findDOMNode(this), _reactDom2["default"].findDOMNode(this.props.parentMenu), {
        onlyScrollIfNeeded: true
      });
    }
    this.callRef();
  };

  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
    var props = this.props;
    if (props.onDestroy) {
      props.onDestroy(props.eventKey);
    }
  };

  MenuItem.prototype.getPrefixCls = function getPrefixCls() {
    return this.props.rootPrefixCls + '-item';
  };

  MenuItem.prototype.getActiveClassName = function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  };

  MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
    return this.getPrefixCls() + '-selected';
  };

  MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  };

  MenuItem.prototype.callRef = function callRef() {
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  };

  MenuItem.prototype.render = function render() {
    var _classNames;

    var props = _extends({}, this.props);
    var className = (0, _classnames2["default"])(this.getPrefixCls(), props.className, (_classNames = {}, _defineProperty(_classNames, this.getActiveClassName(), !props.disabled && props.active), _defineProperty(_classNames, this.getSelectedClassName(), props.isSelected), _defineProperty(_classNames, this.getDisabledClassName(), props.disabled), _classNames));
    var attrs = _extends({}, props.attribute, {
      title: props.title,
      className: className,
      // set to menuitem by default
      role: props.role || 'menuitem',
      'aria-disabled': props.disabled
    });

    if (props.role === 'option') {
      // overwrite to option
      attrs = _extends({}, attrs, {
        role: 'option',
        'aria-selected': props.isSelected
      });
    } else if (props.role === null || props.role === 'none') {
      // sometimes we want to specify role inside <li/> element
      // <li><a role='menuitem'>Link</a></li> would be a good example
      // in this case the role on <li/> should be "none" to
      // remove the implied listitem role.
      // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
      attrs.role = 'none';
    }
    // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
    var mouseEvent = {
      onClick: props.disabled ? null : this.onClick,
      onMouseLeave: props.disabled ? null : this.onMouseLeave,
      onMouseEnter: props.disabled ? null : this.onMouseEnter
    };
    var style = _extends({}, props.style);
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    _util.menuAllProps.forEach(function (key) {
      return delete props[key];
    });
    var icon = this.props.itemIcon;
    if (typeof this.props.itemIcon === 'function') {
      icon = _react2["default"].createElement(this.props.itemIcon, this.props);
    }
    return _react2["default"].createElement(
      'li',
      _extends({}, props, attrs, mouseEvent, {
        style: style
      }),
      props.children,
      icon
    );
  };

  return MenuItem;
}(_react2["default"].Component);

MenuItem.propTypes = {
  attribute: _propTypes2["default"].object,
  rootPrefixCls: _propTypes2["default"].string,
  eventKey: _propTypes2["default"].string,
  active: _propTypes2["default"].bool,
  children: _propTypes2["default"].any,
  selectedKeys: _propTypes2["default"].array,
  disabled: _propTypes2["default"].bool,
  title: _propTypes2["default"].string,
  onItemHover: _propTypes2["default"].func,
  onSelect: _propTypes2["default"].func,
  onClick: _propTypes2["default"].func,
  onDeselect: _propTypes2["default"].func,
  parentMenu: _propTypes2["default"].object,
  onDestroy: _propTypes2["default"].func,
  onMouseEnter: _propTypes2["default"].func,
  onMouseLeave: _propTypes2["default"].func,
  multiple: _propTypes2["default"].bool,
  isSelected: _propTypes2["default"].bool,
  manualRef: _propTypes2["default"].func,
  itemIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node])
};
MenuItem.defaultProps = {
  onSelect: _util.noop,
  onMouseEnter: _util.noop,
  onMouseLeave: _util.noop,
  manualRef: _util.noop
};


MenuItem.isMenuItem = true;

var connected = (0, _miniStore.connect)(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem);

exports["default"] = connected;