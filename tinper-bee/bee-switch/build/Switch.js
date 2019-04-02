"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-switch.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/switch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var propTypes = {
  clsPrefix: _propTypes2["default"].string,
  disabled: _propTypes2["default"].bool,
  checkedChildren: _propTypes2["default"].any,
  unCheckedChildren: _propTypes2["default"].any,
  onChangeHandler: _propTypes2["default"].func,
  onChange: _propTypes2["default"].func
};
var defaultProps = {
  clsPrefix: "u-switch",
  checkedChildren: null,
  unCheckedChildren: null,
  defaultChecked: false,
  size: "",
  disabled: false,
  onChangeHandler: function onChangeHandler() {},
  onChange: function onChange() {}
};

var Switch = function (_Component) {
  _inherits(Switch, _Component);

  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else if ('defaultValue' in props) {
      checked = !!props.defaultValue;
    } else {
      checked = !!props.defaultChecked;
    }
    _this.state = { checked: checked };
    return _this;
  }

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextState) {
    if ("checked" in nextProps) {
      this.setState({ checked: !!nextProps.checked });
    }
  };
  //点击switch改变状态

  // Handle auto focus when click switch in Chrome


  Switch.prototype.render = function render() {
    var _props = this.props,
        checkedChildren = _props.checkedChildren,
        unCheckedChildren = _props.unCheckedChildren,
        onChangeHandler = _props.onChangeHandler,
        size = _props.size,
        className = _props.className,
        clsPrefix = _props.clsPrefix,
        disabled = _props.disabled,
        colors = _props.colors,
        others = _objectWithoutProperties(_props, ["checkedChildren", "unCheckedChildren", "onChangeHandler", "size", "className", "clsPrefix", "disabled", "colors"]);
    //获取checked


    var checked = this.state.checked;
    var classes = {
      "is-checked": checked
    };
    if (size) {
      classes[clsPrefix + "-" + size] = true;
    }
    if (colors) {
      classes[clsPrefix + "-" + colors] = true;
    }
    classes[[clsPrefix + "-disabled"]] = disabled;

    var classNames = (0, _classnames2["default"])(clsPrefix, classes);

    return _react2["default"].createElement(
      "span",
      { className: disabled && checked ? clsPrefix + "-backdrop" : '' },
      _react2["default"].createElement(
        "span",
        _extends({}, others, {
          ref: this.saveNode,
          onClick: this.clickHandler,
          onKeyDown: this.handleKeyDown,
          onMouseUp: this.handleMouseUp,
          className: (0, _classnames2["default"])(className, classNames),
          tabIndex: disabled ? -1 : 0
        }),
        _react2["default"].createElement(
          "span",
          { className: clsPrefix + "-inner" },
          checked ? checkedChildren : unCheckedChildren
        )
      )
    );
  };

  return Switch;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.setChecked = function (checked) {
    if (_this2.props.disabled) {
      return;
    }
    if (!('checked' in _this2.props)) {
      _this2.setState({
        checked: checked
      });
    }
    _this2.props.onChangeHandler(checked);
    _this2.props.onChange(checked);
  };

  this.clickHandler = function () {
    var checked = !_this2.state.checked;
    _this2.setChecked(checked);
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === 37) {
      // Left
      _this2.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      _this2.setChecked(true);
    } else if (e.keyCode === 32 || e.keyCode === 13) {
      // Space, Enter
      _this2.clickHandler();
    }
  };

  this.handleMouseUp = function (e) {
    if (_this2.node) {
      _this2.node.blur();
    }
    if (_this2.props.onMouseUp) {
      _this2.props.onMouseUp(e);
    }
  };

  this.saveNode = function (node) {
    _this2.node = node;
  };
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
exports["default"] = Switch;
module.exports = exports["default"];