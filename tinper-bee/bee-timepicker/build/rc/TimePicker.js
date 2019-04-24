'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint jsx-a11y/no-autofocus: 0 */


function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = function (_Component) {
  _inherits(Picker, _Component);

  function Picker(props) {
    _classCallCheck(this, Picker);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.saveInputRef = refFn.bind(_this, 'picker');
    _this.savePanelRef = refFn.bind(_this, 'panelInstance');
    var defaultOpen = props.defaultOpen,
        defaultValue = props.defaultValue,
        _props$open = props.open,
        open = _props$open === undefined ? defaultOpen : _props$open,
        _props$value = props.value,
        value = _props$value === undefined ? defaultValue : _props$value;

    _this.state = {
      open: open,
      value: value
    };
    return _this;
  }

  Picker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        open = nextProps.open;

    if ('value' in nextProps) {
      this.setState({
        value: value
      });
    }
    if (open !== undefined) {
      this.setState({ open: open });
    }
  };

  Picker.prototype.setValue = function setValue(value) {
    var onChange = this.props.onChange;

    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    onChange(value);
  };

  Picker.prototype.getFormat = function getFormat() {
    var _props = this.props,
        format = _props.format,
        showHour = _props.showHour,
        showMinute = _props.showMinute,
        showSecond = _props.showSecond,
        use12Hours = _props.use12Hours;

    if (format) {
      return format;
    }

    if (use12Hours) {
      var fmtString = [showHour ? 'h' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
        return !!item;
      }).join(':');

      return fmtString.concat(' a');
    }

    return [showHour ? 'HH' : '', showMinute ? 'mm' : '', showSecond ? 'ss' : ''].filter(function (item) {
      return !!item;
    }).join(':');
  };

  Picker.prototype.getPanelElement = function getPanelElement() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        placeholder = _props2.placeholder,
        disabledHours = _props2.disabledHours,
        disabledMinutes = _props2.disabledMinutes,
        disabledSeconds = _props2.disabledSeconds,
        hideDisabledOptions = _props2.hideDisabledOptions,
        inputReadOnly = _props2.inputReadOnly,
        allowEmpty = _props2.allowEmpty,
        showHour = _props2.showHour,
        showMinute = _props2.showMinute,
        showSecond = _props2.showSecond,
        defaultOpenValue = _props2.defaultOpenValue,
        clearText = _props2.clearText,
        addon = _props2.addon,
        use12Hours = _props2.use12Hours,
        focusOnOpen = _props2.focusOnOpen,
        onKeyDown = _props2.onKeyDown,
        hourStep = _props2.hourStep,
        minuteStep = _props2.minuteStep,
        secondStep = _props2.secondStep,
        clearIcon = _props2.clearIcon;
    var value = this.state.value;

    return _react2["default"].createElement(_Panel2["default"], {
      clearText: clearText,
      prefixCls: prefixCls + '-panel',
      ref: this.savePanelRef,
      value: value,
      inputReadOnly: inputReadOnly,
      onChange: this.onPanelChange,
      onAmPmChange: this.onAmPmChange,
      defaultOpenValue: defaultOpenValue,
      showHour: showHour,
      showMinute: showMinute,
      showSecond: showSecond,
      onEsc: this.onEsc,
      allowEmpty: allowEmpty,
      format: this.getFormat(),
      placeholder: placeholder,
      disabledHours: disabledHours,
      disabledMinutes: disabledMinutes,
      disabledSeconds: disabledSeconds,
      hideDisabledOptions: hideDisabledOptions,
      use12Hours: use12Hours,
      hourStep: hourStep,
      minuteStep: minuteStep,
      secondStep: secondStep,
      addon: addon,
      focusOnOpen: focusOnOpen,
      onKeyDown: onKeyDown,
      clearIcon: clearIcon
    });
  };

  Picker.prototype.getPopupClassName = function getPopupClassName() {
    var _props3 = this.props,
        showHour = _props3.showHour,
        showMinute = _props3.showMinute,
        showSecond = _props3.showSecond,
        use12Hours = _props3.use12Hours,
        prefixCls = _props3.prefixCls,
        popupClassName = _props3.popupClassName;

    var className = popupClassName;
    // Keep it for old compatibility
    if ((!showHour || !showMinute || !showSecond) && !use12Hours) {
      className += ' ' + prefixCls + '-panel-narrow';
    }
    var selectColumnCount = 0;
    if (showHour) {
      selectColumnCount += 1;
    }
    if (showMinute) {
      selectColumnCount += 1;
    }
    if (showSecond) {
      selectColumnCount += 1;
    }
    if (use12Hours) {
      selectColumnCount += 1;
    }
    className += ' ' + prefixCls + '-panel-column-' + selectColumnCount;
    return className;
  };

  Picker.prototype.setOpen = function setOpen(open) {
    var _props4 = this.props,
        onOpen = _props4.onOpen,
        onClose = _props4.onClose;
    var currentOpen = this.state.open;

    if (currentOpen !== open) {
      if (!('open' in this.props)) {
        this.setState({ open: open });
      }
      if (open) {
        onOpen({ open: open });
      } else {
        onClose({ open: open });
      }
    }
  };

  Picker.prototype.focus = function focus() {
    this.picker.focus();
  };

  Picker.prototype.blur = function blur() {
    this.picker.blur();
  };

  Picker.prototype.renderClearButton = function renderClearButton() {
    var _this2 = this;

    var value = this.state.value;
    var _props5 = this.props,
        prefixCls = _props5.prefixCls,
        allowEmpty = _props5.allowEmpty,
        clearIcon = _props5.clearIcon,
        clearText = _props5.clearText;

    if (!allowEmpty || !value) {
      return null;
    }

    if (_react2["default"].isValidElement(clearIcon)) {
      var _ref = clearIcon.props || {},
          _onClick = _ref.onClick;

      return _react2["default"].cloneElement(clearIcon, {
        onClick: function onClick() {
          if (_onClick) _onClick.apply(undefined, arguments);
          _this2.onClear.apply(_this2, arguments);
        }
      });
    }

    return _react2["default"].createElement(
      'a',
      {
        role: 'button',
        className: prefixCls + '-clear',
        title: clearText,
        onClick: this.onClear,
        tabIndex: 0
      },
      clearIcon || _react2["default"].createElement('i', { className: prefixCls + '-clear-icon' })
    );
  };

  Picker.prototype.render = function render() {
    var _props6 = this.props,
        prefixCls = _props6.prefixCls,
        placeholder = _props6.placeholder,
        placement = _props6.placement,
        align = _props6.align,
        id = _props6.id,
        disabled = _props6.disabled,
        transitionName = _props6.transitionName,
        style = _props6.style,
        className = _props6.className,
        getPopupContainer = _props6.getPopupContainer,
        name = _props6.name,
        autoComplete = _props6.autoComplete,
        onFocus = _props6.onFocus,
        onBlur = _props6.onBlur,
        autoFocus = _props6.autoFocus,
        inputReadOnly = _props6.inputReadOnly,
        inputIcon = _props6.inputIcon,
        popupStyle = _props6.popupStyle;
    var _state = this.state,
        open = _state.open,
        value = _state.value;

    var popupClassName = this.getPopupClassName();
    return _react2["default"].createElement(
      _rcTrigger2["default"],
      {
        prefixCls: prefixCls + '-panel',
        popupClassName: popupClassName,
        popupStyle: popupStyle,
        popup: this.getPanelElement(),
        popupAlign: align,
        builtinPlacements: _placements2["default"],
        popupPlacement: placement,
        action: disabled ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getPopupContainer,
        popupTransitionName: transitionName,
        popupVisible: open,
        onPopupVisibleChange: this.onVisibleChange
      },
      _react2["default"].createElement(
        'span',
        { className: prefixCls + ' ' + className, style: style },
        _react2["default"].createElement('input', {
          className: prefixCls + '-input',
          ref: this.saveInputRef,
          type: 'text',
          placeholder: placeholder,
          name: name,
          onKeyDown: this.onKeyDown,
          disabled: disabled,
          value: value && value.format(this.getFormat()) || '',
          autoComplete: autoComplete,
          onFocus: onFocus,
          onBlur: onBlur,
          autoFocus: autoFocus,
          onChange: noop,
          readOnly: !!inputReadOnly,
          id: id
        }),
        inputIcon || _react2["default"].createElement('span', { className: prefixCls + '-icon' }),
        this.renderClearButton()
      )
    );
  };

  return Picker;
}(_react.Component);

Picker.propTypes = {
  prefixCls: _propTypes2["default"].string,
  clearText: _propTypes2["default"].string,
  value: _propTypes2["default"].object,
  defaultOpenValue: _propTypes2["default"].object,
  inputReadOnly: _propTypes2["default"].bool,
  disabled: _propTypes2["default"].bool,
  allowEmpty: _propTypes2["default"].bool,
  defaultValue: _propTypes2["default"].object,
  open: _propTypes2["default"].bool,
  defaultOpen: _propTypes2["default"].bool,
  align: _propTypes2["default"].object,
  placement: _propTypes2["default"].any,
  transitionName: _propTypes2["default"].string,
  getPopupContainer: _propTypes2["default"].func,
  placeholder: _propTypes2["default"].string,
  format: _propTypes2["default"].string,
  showHour: _propTypes2["default"].bool,
  showMinute: _propTypes2["default"].bool,
  showSecond: _propTypes2["default"].bool,
  style: _propTypes2["default"].object,
  className: _propTypes2["default"].string,
  popupClassName: _propTypes2["default"].string,
  popupStyle: _propTypes2["default"].object,
  disabledHours: _propTypes2["default"].func,
  disabledMinutes: _propTypes2["default"].func,
  disabledSeconds: _propTypes2["default"].func,
  hideDisabledOptions: _propTypes2["default"].bool,
  onChange: _propTypes2["default"].func,
  onAmPmChange: _propTypes2["default"].func,
  onOpen: _propTypes2["default"].func,
  onClose: _propTypes2["default"].func,
  onFocus: _propTypes2["default"].func,
  onBlur: _propTypes2["default"].func,
  addon: _propTypes2["default"].func,
  name: _propTypes2["default"].string,
  autoComplete: _propTypes2["default"].string,
  use12Hours: _propTypes2["default"].bool,
  hourStep: _propTypes2["default"].number,
  minuteStep: _propTypes2["default"].number,
  secondStep: _propTypes2["default"].number,
  focusOnOpen: _propTypes2["default"].bool,
  onKeyDown: _propTypes2["default"].func,
  autoFocus: _propTypes2["default"].bool,
  id: _propTypes2["default"].string,
  inputIcon: _propTypes2["default"].node,
  clearIcon: _propTypes2["default"].node
};
Picker.defaultProps = {
  clearText: 'clear',
  prefixCls: 'rc-time-picker',
  defaultOpen: false,
  inputReadOnly: false,
  style: {},
  className: '',
  popupClassName: '',
  popupStyle: {},
  id: '',
  align: {},
  defaultOpenValue: (0, _moment2["default"])(),
  allowEmpty: true,
  showHour: true,
  showMinute: true,
  showSecond: true,
  disabledHours: noop,
  disabledMinutes: noop,
  disabledSeconds: noop,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  onChange: noop,
  onAmPmChange: noop,
  onOpen: noop,
  onClose: noop,
  onFocus: noop,
  onBlur: noop,
  addon: noop,
  use12Hours: false,
  focusOnOpen: false,
  onKeyDown: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onPanelChange = function (value) {
    _this3.setValue(value);
  };

  this.onAmPmChange = function (ampm) {
    var onAmPmChange = _this3.props.onAmPmChange;

    onAmPmChange(ampm);
  };

  this.onClear = function (event) {
    event.stopPropagation();
    _this3.setValue(null);
    _this3.setOpen(false);
  };

  this.onVisibleChange = function (open) {
    _this3.setOpen(open);
  };

  this.onEsc = function () {
    _this3.setOpen(false);
    _this3.focus();
  };

  this.onKeyDown = function (e) {
    if (e.keyCode === 40) {
      _this3.setOpen(true);
    }
    _this3.props.onKeyDown && _this3.props.onKeyDown(e);
  };
};

exports["default"] = Picker;
module.exports = exports['default'];