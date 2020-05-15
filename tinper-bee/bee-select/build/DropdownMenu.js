'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBeeCore = require('tinper-bee-core');

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _domScrollIntoView = require('dom-scroll-into-view');

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-select.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var DropdownMenu = function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.scrollActiveItemToView = function () {
      // scroll into view
      var itemComponent = (0, _reactDom.findDOMNode)(_this.firstActiveItem);
      var _this$props = _this.props,
          value = _this$props.value,
          visible = _this$props.visible,
          firstActiveValue = _this$props.firstActiveValue;


      if (!itemComponent || !visible) {
        return;
      }
      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };
      if ((!value || value.length === 0) && firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      }

      // Delay to scroll since current frame item position is not ready when pre view is by filter
      // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462
      _this.rafInstance = (0, _raf2["default"])(function () {
        (0, _domScrollIntoView2["default"])(itemComponent, (0, _reactDom.findDOMNode)(_this.menuRef), scrollIntoViewOpts);
      });
    };

    _this.lastInputValue = props.inputValue;
    _this.saveMenuRef = (0, _util.saveRef)(_this, 'menuRef');
    return _this;
  }

  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  };

  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return nextProps.visible || nextProps.inputValue !== this.props.inputValue;
  };

  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  };

  DropdownMenu.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.rafInstance && this.rafInstance.cancel) {
      this.rafInstance.cancel();
    }
  };

  DropdownMenu.prototype.renderMenu = function renderMenu() {
    var _this2 = this;

    var props = this.props;
    var menuItems = props.menuItems,
        menuItemSelectedIcon = props.menuItemSelectedIcon,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        onMenuSelect = props.onMenuSelect,
        inputValue = props.inputValue,
        firstActiveValue = props.firstActiveValue,
        backfillValue = props.backfillValue,
        clsPrefix = props.clsPrefix;

    if (menuItems && menuItems.length) {
      var menuProps = {};
      if (multiple) {
        menuProps.onDeselect = props.onMenuDeselect;
        menuProps.onSelect = onMenuSelect;
      } else {
        menuProps.onClick = onMenuSelect;
      }

      var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
      var activeKeyProps = {};

      var clonedMenuItems = menuItems;
      if (selectedKeys.length || firstActiveValue) {
        if (props.visible && !this.lastVisible) {
          activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
        }
        var foundFirst = false;
        // set firstActiveItem via cloning menus
        // for scroll into view
        var clone = function clone(item) {
          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
            foundFirst = true;
            return (0, _react.cloneElement)(item, {
              ref: function ref(_ref) {
                _this2.firstActiveItem = _ref;
              }
            });
          }
          return item;
        };

        clonedMenuItems = menuItems.map(function (item) {
          if (item.type.isMenuItemGroup) {
            var children = (0, _tinperBeeCore.toArray)(item.props.children).map(clone);
            return (0, _react.cloneElement)(item, {}, children);
          }
          return clone(item);
        });
      } else {
        // Clear firstActiveItem when dropdown menu items was empty
        // Avoid `Unable to find node on an unmounted component`
        // https://github.com/ant-design/ant-design/issues/10774
        this.firstActiveItem = null;
      }

      // clear activeKey when inputValue change
      var lastValue = value && value[value.length - 1];
      if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
        activeKeyProps.activeKey = '';
      }
      return _react2["default"].createElement(
        _rcMenu2["default"],
        _extends({
          ref: this.saveMenuRef,
          style: this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirstOption,
          role: 'listbox',
          itemIcon: multiple ? menuItemSelectedIcon : null
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: clsPrefix + '-menu'
        }),
        clonedMenuItems
      );
    }
    return null;
  };

  DropdownMenu.prototype.render = function render() {
    var renderMenu = this.renderMenu();
    return renderMenu ? _react2["default"].createElement(
      'div',
      {
        style: {
          overflow: 'auto',
          transform: 'translateZ(0)'
        },
        onFocus: this.props.onPopupFocus,
        onMouseDown: _util.preventDefaultEvent,
        onScroll: this.props.onPopupScroll
      },
      renderMenu
    ) : null;
  };

  return DropdownMenu;
}(_react2["default"].Component);

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = {
  defaultActiveFirstOption: _propTypes2["default"].bool,
  value: _propTypes2["default"].any,
  dropdownMenuStyle: _propTypes2["default"].object,
  multiple: _propTypes2["default"].bool,
  onPopupFocus: _propTypes2["default"].func,
  onPopupScroll: _propTypes2["default"].func,
  onMenuDeSelect: _propTypes2["default"].func,
  onMenuSelect: _propTypes2["default"].func,
  prefixCls: _propTypes2["default"].string,
  menuItems: _propTypes2["default"].any,
  inputValue: _propTypes2["default"].string,
  visible: _propTypes2["default"].bool,
  firstActiveValue: _propTypes2["default"].string,
  menuItemSelectedIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node])
};
exports["default"] = DropdownMenu;
module.exports = exports['default'];