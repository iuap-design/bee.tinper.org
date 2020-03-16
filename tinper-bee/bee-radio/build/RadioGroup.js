'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  name: _propTypes2["default"].string,
  /**
   * 默认选中的值
   */
  defaultValue: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number, _propTypes2["default"].bool]),
  /**
   * 选中的值
   */
  selectedValue: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number, _propTypes2["default"].bool]),
  /**
   * 选中的值,作用与selectedValue一致，添加value属性是为了配合form表单校验初始化等一起使用
   */
  value: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number, _propTypes2["default"].bool]),
  /**
  * 暴露给用户，且与子Radio通信的方法
  */
  onChange: _propTypes2["default"].func,
  /**
    * radio 大小
    */
  size: _propTypes2["default"].oneOf(['lg', 'sm']),

  children: _propTypes2["default"].node.isRequired,

  Component: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].func, _propTypes2["default"].object]),
  disabled: _propTypes2["default"].bool
};

var defaultProps = {
  Component: 'div',
  clsPrefix: 'u-radio-group',
  defaultValue: ''
};

/**
 * 与子Radio通信
 */
var childContextTypes = {
  radioGroup: _propTypes2["default"].object
};

var RadioGroup = function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup(props, context) {
    _classCallCheck(this, RadioGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.getValues = function () {
      var array = [];
      var children = _this.props.children;
      if (!children) {
        console.error('RadioGroup must have child nodes');
        return array;
      }
      if (children.length > 1) {
        children.map(function (item) {
          array.push(item.props.value);
        });
      } else if (children.length === 1) {
        array.push(children[0].props.value);
      } else {
        array.push(children.props.value);
      }
      return array;
    };

    _this.handleChange = function (value) {
      var onChange = _this.props.onChange;

      if (!('selectedValue' in _this.props)) {
        _this.setState({
          selectedValue: value
        });
      }
      onChange && onChange(value);
    };

    var initValue = 'value' in props ? props.value : 'selectedValue' in props ? props.selectedValue : props.defaultValue;
    _this.state = {
      focusvalue: '',
      selectedValue: initValue
    };
    return _this;
  }

  RadioGroup.prototype.componentDidMount = function componentDidMount() {
    var array = this.getValues();
    if (array.indexOf(this.props.selectedValue) == -1) {
      this.setState({
        focusvalue: array[0]
      });
    }
  };

  RadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var array = this.getValues();
    if (array.indexOf(this.props.selectedValue) == -1 || array.indexOf(this.props.value) == -1) {
      this.setState({
        focusvalue: array[0]
      });
    } else {
      this.setState({
        focusvalue: ''
      });
    }
    if ('selectedValue' in nextProps || 'value' in nextProps) {
      this.setState({
        selectedValue: nextProps.selectedValue !== undefined ? nextProps.selectedValue : nextProps.value
      });
    }
  };

  /**
    * 一旦外层change方法触发本身props发生改变，则调用getChildContext更新与子Radio的通信信息（radioGroup）
    */

  RadioGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        name = _props.name,
        size = _props.size;
    var selectedValue = this.state.selectedValue;

    var onChange = this.handleChange;
    return {
      radioGroup: {
        name: name, selectedValue: selectedValue, onChange: onChange, size: size, focusvalue: this.state.focusvalue
      }
    };
  };

  RadioGroup.prototype.render = function render() {
    var _props2 = this.props,
        Component = _props2.Component,
        name = _props2.name,
        selectedValue = _props2.selectedValue,
        onChange = _props2.onChange,
        children = _props2.children,
        size = _props2.size,
        clsPrefix = _props2.clsPrefix,
        className = _props2.className,
        focusvalue = _props2.focusvalue,
        disabled = _props2.disabled,
        others = _objectWithoutProperties(_props2, ['Component', 'name', 'selectedValue', 'onChange', 'children', 'size', 'clsPrefix', 'className', 'focusvalue', 'disabled']);

    return _react2["default"].createElement(
      Component,
      _extends({ className: (0, _classnames2["default"])(clsPrefix, className) }, others, { focusvalue: this.state.focusvalue }),
      _react2["default"].Children.map(children, function (child) {
        return _react2["default"].cloneElement(child, {
          disabled: child.props.disabled || disabled
        });
      })
    );
  };

  return RadioGroup;
}(_react2["default"].Component);

RadioGroup.childContextTypes = childContextTypes;
RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
exports["default"] = RadioGroup;
module.exports = exports['default'];