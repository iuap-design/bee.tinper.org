'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _createChainedFunction = require('rc-util/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _placements = require('./picker/placements');

var _placements2 = _interopRequireDefault(_placements);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    _classCallCheck(this, Picker);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var open = void 0;
    if ('open' in props) {
      open = props.open;
    } else {
      open = props.defaultOpen;
    }
    var value = props.value || props.defaultValue;
    _this.saveCalendarRef = refFn.bind(_this, 'calendarInstance');

    _this.state = {
      open: open,
      value: value
    };
    return _this;
  }

  Picker.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    if (!prevState.open && this.state.open) {
      // setTimeout is for making sure saveCalendarRef happen before focusCalendar
      this.focusTimeout = setTimeout(this.focusCalendar, 0, this);
    }
  };

  Picker.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.focusTimeout);
  };

  Picker.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    var newState = {};
    var value = nextProps.value,
        open = nextProps.open;

    if ('value' in nextProps) {
      newState.value = value;
    }
    if (open !== undefined) {
      newState.open = open;
    }
    return newState;
  };

  Picker.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        placement = props.placement,
        style = props.style,
        getCalendarContainer = props.getCalendarContainer,
        align = props.align,
        animation = props.animation,
        disabled = props.disabled,
        dropdownClassName = props.dropdownClassName,
        transitionName = props.transitionName,
        children = props.children;

    var state = this.state;
    return _react2["default"].createElement(
      _rcTrigger2["default"],
      {
        popup: this.getCalendarElement(),
        popupAlign: align,
        builtinPlacements: _placements2["default"],
        popupPlacement: placement,
        action: disabled && !state.open ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getCalendarContainer,
        popupStyle: style,
        popupAnimation: animation,
        popupTransitionName: transitionName,
        popupVisible: state.open,
        onPopupVisibleChange: this.onVisibleChange,
        prefixCls: prefixCls,
        popupClassName: dropdownClassName
      },
      _react2["default"].cloneElement(children(state, props), { onKeyDown: this.onKeyDown })
    );
  };

  return Picker;
}(_react2["default"].Component);

Picker.propTypes = {
  animation: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].string]),
  disabled: _propTypes2["default"].bool,
  transitionName: _propTypes2["default"].string,
  onChange: _propTypes2["default"].func,
  onOpenChange: _propTypes2["default"].func,
  children: _propTypes2["default"].func,
  getCalendarContainer: _propTypes2["default"].func,
  calendar: _propTypes2["default"].element,
  style: _propTypes2["default"].object,
  open: _propTypes2["default"].bool,
  defaultOpen: _propTypes2["default"].bool,
  prefixCls: _propTypes2["default"].string,
  placement: _propTypes2["default"].any,
  value: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].array]),
  defaultValue: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].array]),
  align: _propTypes2["default"].object,
  enterKeyDown: _propTypes2["default"].bool //enter 键是否打开日期面板
};
Picker.defaultProps = {
  prefixCls: 'rc-calendar-picker',
  style: {},
  align: {},
  placement: 'bottomLeft',
  defaultOpen: false,
  onChange: noop,
  onOpenChange: noop,
  enterKeyDown: true
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onCalendarKeyDown = function (event) {
    if (event.keyCode === _KeyCode2["default"].ESC) {
      event.stopPropagation();
      _this2.close(_this2.focus);
    }
    _this2.props.onKeyDown && _this2.props.onKeyDown(event);
  };

  this.onCalendarSelect = function (value) {
    var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var props = _this2.props;
    if (!('value' in props)) {
      _this2.setState({
        value: value
      });
    }
    if (cause.source === 'keyboard' || cause.source === 'dateInputSelect' || !props.calendar.props.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
      _this2.close(_this2.focus);
    }
    props.onChange(value);
  };

  this.onKeyDown = function (event) {
    var enterKeyDown = _this2.props.enterKeyDown;

    if (event.keyCode === _KeyCode2["default"].DOWN || enterKeyDown && event.keyCode === _KeyCode2["default"].ENTER) {
      if (!_this2.state.open) _this2.open();
      event.preventDefault();
    }
    _this2.props.onKeyDown && _this2.props.onKeyDown(event);
  };

  this.onCalendarOk = function () {
    _this2.close(_this2.focus);
  };

  this.onCalendarClear = function () {
    _this2.close(_this2.focus);
  };

  this.onVisibleChange = function (open) {
    _this2.setOpen(open);
  };

  this.getCalendarElement = function () {
    var props = _this2.props;
    var state = _this2.state;
    var calendarProps = props.calendar.props;
    var value = state.value;

    var defaultValue = value;
    var extraProps = {
      ref: _this2.saveCalendarRef,
      defaultValue: defaultValue || calendarProps.defaultValue,
      selectedValue: value,
      onKeyDown: _this2.onCalendarKeyDown,
      onOk: (0, _createChainedFunction2["default"])(calendarProps.onOk, _this2.onCalendarOk),
      onSelect: (0, _createChainedFunction2["default"])(calendarProps.onSelect, _this2.onCalendarSelect),
      onClear: (0, _createChainedFunction2["default"])(calendarProps.onClear, _this2.onCalendarClear)
    };

    return _react2["default"].cloneElement(props.calendar, extraProps);
  };

  this.setOpen = function (open, callback) {
    var onOpenChange = _this2.props.onOpenChange;

    if (_this2.state.open !== open) {
      if (!('open' in _this2.props)) {
        _this2.setState({
          open: open
        }, callback);
      }
      onOpenChange(open);
    }
  };

  this.open = function (callback) {
    _this2.setOpen(true, callback);
  };

  this.close = function (callback) {
    _this2.setOpen(false, callback);
  };

  this.focus = function () {
    if (!_this2.state.open) {
      _reactDom2["default"].findDOMNode(_this2).focus();
    }
  };

  this.focusCalendar = function () {
    if (_this2.state.open && !!_this2.calendarInstance) {
      _this2.calendarInstance.focus();
    }
  };
};

(0, _reactLifecyclesCompat.polyfill)(Picker);

exports["default"] = Picker;
module.exports = exports['default'];