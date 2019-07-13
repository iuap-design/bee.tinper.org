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

var _tinperBeeCore = require('tinper-bee-core');

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var cachedSelectionStart = void 0;
var cachedSelectionEnd = void 0;
var dateInputInstance = void 0;

var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var selectedValue = props.selectedValue;

    _this.state = {
      str: (0, _util.formatDate)(selectedValue, _this.props.format),
      invalid: false,
      hasFocus: false
    };
    return _this;
  }

  DateInput.prototype.componentDidUpdate = function componentDidUpdate() {
    if (dateInputInstance && this.state.hasFocus && !this.state.invalid && !(cachedSelectionStart === 0 && cachedSelectionEnd === 0)) {
      dateInputInstance.setSelectionRange(cachedSelectionStart, cachedSelectionEnd);
    }
  };

  DateInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var newState = {};

    if (dateInputInstance) {
      cachedSelectionStart = dateInputInstance.selectionStart;
      cachedSelectionEnd = dateInputInstance.selectionEnd;
    }
    // when popup show, click body will call this, bug!
    var selectedValue = nextProps.selectedValue;
    if (!state.hasFocus) {
      newState = {
        str: (0, _util.formatDate)(selectedValue, nextProps.format),
        invalid: false
      };
    }

    return newState;
  };

  DateInput.getInstance = function getInstance() {
    return dateInputInstance;
  };

  DateInput.prototype.render = function render() {
    var props = this.props;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        placeholder = props.placeholder,
        clearIcon = props.clearIcon,
        renderError = props.renderError,
        inputTabIndex = props.inputTabIndex;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-date-input-wrap' },
        _react2["default"].createElement('input', {
          ref: this.saveDateInput,
          className: prefixCls + '-input ' + invalidClass,
          value: str,
          disabled: props.disabled,
          placeholder: placeholder,
          onChange: this.onInputChange,
          onKeyDown: this.onKeyDown,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          tabIndex: inputTabIndex
        }),
        invalid && renderError ? renderError() : ''
      ),
      props.showClear ? _react2["default"].createElement(
        'a',
        {
          role: 'button',
          title: locale.clear,
          onClick: this.onClear
        },
        clearIcon || _react2["default"].createElement('span', { className: prefixCls + '-clear-btn uf uf-close-c' })
      ) : null
    );
  };

  return DateInput;
}(_react2["default"].Component);

DateInput.propTypes = {
  prefixCls: _propTypes2["default"].string,
  timePicker: _propTypes2["default"].object,
  value: _propTypes2["default"].object,
  disabledTime: _propTypes2["default"].any,
  format: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].arrayOf(_propTypes2["default"].string)]),
  locale: _propTypes2["default"].object,
  disabledDate: _propTypes2["default"].func,
  onChange: _propTypes2["default"].func,
  onClear: _propTypes2["default"].func,
  placeholder: _propTypes2["default"].string,
  onSelect: _propTypes2["default"].func,
  selectedValue: _propTypes2["default"].object,
  clearIcon: _propTypes2["default"].node
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onClear = function () {
    _this2.setState({
      str: ''
    });
    _this2.props.onClear(null);
  };

  this.onInputChange = function (event) {
    var str = event.target.value;
    var _props = _this2.props,
        disabledDate = _props.disabledDate,
        format = _props.format,
        onChange = _props.onChange,
        selectedValue = _props.selectedValue;

    // 没有内容，合法并直接退出

    if (!str) {
      onChange(null);
      _this2.setState({
        // invalid: false,
        str: str
      });
      return;
    }

    // 不合法直接退出
    var parsed = (0, _moment2["default"])(str, format, true);
    if (!parsed.isValid()) {
      _this2.setState({
        // invalid: true,
        str: str
      });
      return;
    }

    var value = _this2.props.value.clone();
    value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

    if (!value || disabledDate && disabledDate(value)) {
      _this2.setState({
        // invalid: true,
        str: str
      });
      return;
    }

    if (selectedValue !== value || selectedValue && value && !selectedValue.isSame(value)) {
      _this2.setState({
        // invalid: false,
        str: str
      });
      onChange(value);
    }
  };

  this.onFocus = function () {
    _this2.setState({ hasFocus: true });
  };

  this.onBlur = function (e) {
    var str = e.target.value;
    var _props2 = _this2.props,
        disabledDate = _props2.disabledDate,
        format = _props2.format,
        onChange = _props2.onChange,
        selectedValue = _props2.selectedValue;

    // 没有内容，合法并直接退出

    if (!str) {
      _this2.setState({
        invalid: false
      });
      return;
    }

    // 不合法直接退出
    var parsed = (0, _moment2["default"])(str, format, true);
    if (!parsed.isValid()) {
      _this2.setState({
        invalid: true
      });
      return;
    }

    var value = _this2.props.value.clone();
    value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

    if (!value || disabledDate && disabledDate(value)) {
      _this2.setState({
        invalid: true
      });
      return;
    }

    if (selectedValue !== value || selectedValue && value && !selectedValue.isSame(value)) {
      _this2.setState({
        invalid: false
      });
    }

    _this2.setState(function (prevState, prevProps) {
      return {
        hasFocus: false,
        str: (0, _util.formatDate)(prevProps.value, prevProps.format)
      };
    });
    _this2.props.onBlur && _this2.props.onBlur(e);
  };

  this.onKeyDown = function (e) {
    var _props3 = _this2.props,
        onSelect = _props3.onSelect,
        value = _props3.value,
        onKeyDown = _props3.onKeyDown,
        format = _props3.format,
        isRange = _props3.isRange;

    var str = e.target.value;
    var parsed = (0, _moment2["default"])(str, format, true);
    if (e.keyCode === _tinperBeeCore.KeyCode.ENTER) {
      if (parsed.isValid() && onSelect) {
        isRange ? onSelect(parsed.clone()) : onSelect(value.clone()); //FIX https://github.com/iuap-design/tinper-bee/issues/183
      }
      // 没有内容，回填默认值，并关闭面板
      if (!str) {
        _this2.setState({
          invalid: false
        });
        onSelect && onSelect((0, _moment2["default"])());
        return;
      }
      // 有内容，判断是否合法
      if (!parsed.isValid()) {
        _this2.setState({
          invalid: true
        });
      }
    }
    // if (e.keyCode === KeyCode.ENTER && onSelect) {
    //   onSelect(value.clone());
    // }
    onKeyDown && onKeyDown(e);
  };

  this.getRootDOMNode = function () {
    return _reactDom2["default"].findDOMNode(_this2);
  };

  this.focus = function () {
    if (dateInputInstance) {
      dateInputInstance.focus();
    }
  };

  this.saveDateInput = function (dateInput) {
    dateInputInstance = dateInput;
  };
};

(0, _reactLifecyclesCompat.polyfill)(DateInput);

exports["default"] = DateInput;
module.exports = exports['default'];