"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Portal = require("bee-overlay/build/Portal");

var _Portal2 = _interopRequireDefault(_Portal);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
   * @title 默认的公共类׺
   */
  clsPrefix: _propTypes2["default"].string,
  clsLoadBack: _propTypes2["default"].string,
  /**
   * @title 不同loading样式
   */
  loadingType: _propTypes2["default"].oneOf(["rotate", "line"]),

  /**
   * @title 不同尺寸
   */
  size: _propTypes2["default"].oneOf(["sm", "lg"]),
  /**
   * @title 不同颜色
   */
  color: _propTypes2["default"].oneOf(["primary", "success", "warning", ""]),
  /**
   * @title 是否全屏loading
   */
  fullScreen: _propTypes2["default"].bool,
  wrapperClassName: _propTypes2["default"].string
};

var defaultProps = {
  clsPrefix: "u-loading",
  clsLoadBack: "u-loading-back",
  loadingType: "rotate",
  color: "",
  showBackDrop: true,
  fullScreen: false,
  wrapperClassName: ""
};

var sizeMap = {
  sm: "sm",
  lg: "lg"
},
    colorsMap = {
  primary: "primary",
  success: "success",
  warning: "warning"
};

var Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading(props) {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Loading.prototype.render = function render() {
    var _backClassObj;

    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        loadingType = _props.loadingType,
        size = _props.size,
        color = _props.color,
        show = _props.show,
        showBackDrop = _props.showBackDrop,
        container = _props.container,
        children = _props.children,
        fullScreen = _props.fullScreen,
        wrapperClassName = _props.wrapperClassName,
        others = _objectWithoutProperties(_props, ["clsPrefix", "loadingType", "size", "color", "show", "showBackDrop", "container", "children", "fullScreen", "wrapperClassName"]);

    var clsObj = {};

    if (!show) return null;

    clsObj[clsPrefix + "-" + loadingType] = true;

    if (sizeMap[size]) {
      clsObj[clsPrefix + "-" + loadingType + "-" + sizeMap[size]] = true;
    }

    if (colorsMap[color]) {
      clsObj[clsPrefix + "-" + loadingType + "-" + colorsMap[color]] = true;
    }

    var classes = (0, _classnames2["default"])(clsPrefix, clsObj);

    var dom = "";

    if (wrapperClassName) {
      classes += " " + wrapperClassName;
    }

    if (loadingType === "rotate") {
      dom = _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          { className: classes },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement(_beeIcon2["default"], { type: "uf-loadingstate" })
          )
        ),
        children && _react2["default"].createElement(
          "div",
          { className: clsPrefix + "-desc" },
          children
        )
      );
    } else if (loadingType === "line") {
      dom = _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          { className: classes },
          _react2["default"].createElement("div", null),
          _react2["default"].createElement("div", null),
          _react2["default"].createElement("div", null),
          _react2["default"].createElement("div", null),
          _react2["default"].createElement("div", null)
        ),
        children && _react2["default"].createElement(
          "div",
          { className: clsPrefix + "-desc" },
          children
        )
      );
    }

    var backClassObj = (_backClassObj = {}, _defineProperty(_backClassObj, clsPrefix + "-backdrop", true), _defineProperty(_backClassObj, "full-screen", fullScreen), _backClassObj);

    if (showBackDrop) {
      dom = _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])(backClassObj) },
        dom
      );
    }
    //console.log(container);

    return _react2["default"].createElement(
      _Portal2["default"],
      { container: container },
      dom
    );
  };

  return Loading;
}(_react.Component);

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

exports["default"] = Loading;
module.exports = exports["default"];