'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
    * radio 颜色 样式
    */
  colors: _propTypes2["default"].oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),
  /**
    * radio 大小
    */
  size: _propTypes2["default"].oneOf(['lg', 'sm']),
  /**
    * radio 是否可用
    */
  disabled: _propTypes2["default"].bool,
  /**
    * radio 样式 是否使用红色填充
    */
  inverse: _propTypes2["default"].bool,
  checked: _propTypes2["default"].bool,
  onChange: _propTypes2["default"].func
};

var defaultProps = {
  inverse: false,
  disabled: false,
  clsPrefix: 'u-radio'
};

/**
 * 建立与RadioGroup通信
 */
var contextTypes = {
  radioGroup: _propTypes2["default"].object
};

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio(props, context) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleClick = function (event) {
      if (_this.props.disabled) {
        return;
      }
      if (_this.context.radioGroup && _this.context.radioGroup.onChange) {
        _this.context.radioGroup.onChange(_this.props.value);
      } else {
        if (!('checked' in _this.props)) {
          _this.setState({
            checked: !_this.state.checked
          });
        }
        event.target.checked = !_this.state.checked;
        _this.props.onChange && _this.props.onChange(event, !_this.state.checked);
      }
    };

    _this.handleFocus = function (e) {
      if (e.target && e.target.type == 'radio') {
        _this.setState({
          focused: true
        });
      }
    };

    _this.handleBlur = function (e) {
      if (e.target && e.target.type == 'radio') {
        _this.setState({
          focused: false
        });
      }
    };

    var initChecked = typeof props.checked !== 'undefined' ? props.checked : props.defaultChecked;
    _this.state = {
      checked: initChecked,
      focused: false
    };
    return _this;
  }

  Radio.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: nextProps.checked
      });
    }
  };

  Radio.prototype.render = function render() {
    var _classes;

    var state = this.state,
        props = this.props,
        context = this.context;
    var checked = state.checked;
    /**
     * 自身的属性
     */

    var inverse = props.inverse,
        disabled = props.disabled,
        colors = props.colors,
        className = props.className,
        children = props.children,
        clsPrefix = props.clsPrefix,
        style = props.style,
        onChange = props.onChange,
        others = _objectWithoutProperties(props, ['inverse', 'disabled', 'colors', 'className', 'children', 'clsPrefix', 'style', 'onChange']);

    var radioGroup = context.radioGroup;

    var radioProps = _extends({}, others);
    // 包裹 radioGroup
    if (radioGroup) {
      radioProps.name = radioGroup.name;
      radioProps.selectedvalue = radioGroup.selectedValue;
      radioProps.size = radioGroup.size;
      radioProps.focusvalue = radioGroup.focusvalue;
    }
    var name = radioProps.name,
        selectedvalue = radioProps.selectedvalue,
        size = radioProps.size,
        focusvalue = radioProps.focusvalue;


    var optional = {};
    /**
     * 若父级selectedValue与本身的value值相同，则改radio被选中
     */
    if (selectedvalue !== undefined) {
      optional.checked = this.props.value === selectedvalue;
    }

    var classes = (_classes = {}, _defineProperty(_classes, clsPrefix + '-focused', this.state.focused), _defineProperty(_classes, 'is-checked', typeof optional.checked !== 'undefined' ? optional.checked : checked), _defineProperty(_classes, 'disabled', disabled), _classes);

    if (colors) {
      classes[clsPrefix + '-' + colors] = true;
    }
    if (size) {
      classes[clsPrefix + '-' + size] = true;
    }
    if (inverse) {
      classes[clsPrefix + '-inverse'] = true;
    }
    if (children == null) {
      classes[clsPrefix + '-noContent'] = true;
    }
    var classNames = (0, _classnames2["default"])(clsPrefix, classes);
    var tabIndex = optional.checked ? 0 : -1;
    if (focusvalue && focusvalue == this.props.value) {
      tabIndex = 0;
    }
    var input = _react2["default"].createElement('input', _extends({}, radioProps, {
      type: 'radio',
      name: name,
      disabled: this.props.disabled,
      tabIndex: tabIndex,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    }));
    return _react2["default"].createElement(
      'label',
      { style: style, onClick: this.handleClick, className: (0, _classnames2["default"])(className, classNames) },
      input,
      _react2["default"].createElement(
        'label',
        { className: clsPrefix + '-label' },
        children
      )
    );
  };

  return Radio;
}(_react2["default"].Component);

Radio.contextTypes = contextTypes;
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

exports["default"] = Radio;
module.exports = exports['default'];