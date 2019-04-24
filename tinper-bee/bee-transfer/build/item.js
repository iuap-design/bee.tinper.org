'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRenderMixin = require('./PureRenderMixin');

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactLazyLoad = require('react-lazy-load');

var _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);

var _beeCheckbox = require('bee-checkbox');

var _beeCheckbox2 = _interopRequireDefault(_beeCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function isRenderResultPlainObject(result) {
  return result && !_react2["default"].isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Item.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _PureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
  };
  // matchFilter = (text) => {
  //   const { filter, filterOption, item } = this.props;
  //   if (filterOption) {
  //     return filterOption(filter, item);
  //   }
  //   return text.indexOf(filter) >= 0;
  // }


  Item.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        render = _props.render,
        filter = _props.filter,
        item = _props.item,
        lazy = _props.lazy,
        checked = _props.checked,
        prefixCls = _props.prefixCls,
        onClick = _props.onClick,
        renderedText = _props.renderedText,
        renderedEl = _props.renderedEl,
        showCheckbox = _props.showCheckbox;

    var className = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-content-item', true), _defineProperty(_classNames, prefixCls + '-content-item-disabled', item.disabled), _defineProperty(_classNames, prefixCls + '-content-item-selected', checked), _classNames));

    var lazyProps = (0, _objectAssign2["default"])({
      height: 32,
      offset: 500,
      throttle: 0,
      debounce: false
    }, lazy);

    var lazyFlag = true;
    if (lazy && lazy.container == "modal") {
      lazyFlag = false;
    }

    if (!lazyFlag) {
      return _react2["default"].createElement(
        'li',
        {
          className: className,
          title: renderedText,
          onClick: item.disabled ? undefined : function () {
            return onClick(item);
          }
        },
        _react2["default"].createElement(_beeCheckbox2["default"], { checked: checked, disabled: item.disabled, onClick: item.disabled ? undefined : function () {
            return onClick(item);
          } }),
        _react2["default"].createElement(
          'span',
          null,
          renderedEl
        )
      );
    } else {
      return _react2["default"].createElement(
        _reactLazyLoad2["default"],
        lazyProps,
        _react2["default"].createElement(
          'li',
          {
            className: className,
            title: renderedText,
            onClick: item.disabled ? undefined : function () {
              return onClick(item);
            }
          },
          showCheckbox ? _react2["default"].createElement(_beeCheckbox2["default"], { checked: checked, disabled: item.disabled, onClick: item.disabled ? undefined : function () {
              return onClick(item);
            } }) : '',
          _react2["default"].createElement(
            'span',
            null,
            renderedEl
          )
        )
      );
    }
  };

  return Item;
}(_react2["default"].Component);

exports["default"] = Item;
module.exports = exports['default'];