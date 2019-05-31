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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var loadImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDJweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNDIgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT53aW5kb3U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjQ5Ljc3NzAwMDElIiB5MT0iOTkuOTg4NjY2NyUiIHgyPSI0OS43NzcwMDAxJSIgeTI9IjIyLjc5MTY5ODQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM4MkQ5MDAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMC4wNzY1JSIgeTE9IjQ5LjgwNDUlIiB4Mj0iODQuMDAyMTY0NCUiIHkyPSI0OS44MDQ1JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZCRTBFIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwLjIyOTUwMDElIiB5MT0iLTAuMDgwOTk5OTQyOSUiIHgyPSI1MC4yMjk1MDAxJSIgeTI9IjgwLjA2MTg4MjglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjQ3NDciIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iOTkuOTI1NjY2NyUiIHkxPSI0OS45MTglIiB4Mj0iMjQuMjY5MjQwMyUiIHkyPSI0OS45MTglIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDhDREMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4blm74vbG9hZGluZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMDAwMDAwLCAtMy4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IndpbmRvdSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5YiG57uELTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBvcGFjaXR5PSIwLjQ5OTM3MjIxIiB4PSIwLjQwOTA5MDkwOSIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwQzg2NCIgY3g9IjYuNDA5MDkwOTEiIGN5PSIzNC4yNjY3MDkxIiByPSI2Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NTE3MjksIDI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIG9wYWNpdHk9IjAuNTA5MDIxNTc3IiB4PSI2LjI2MjM1NTk1IiB5PSIzLjU1MjcxMzY4ZS0xNSIgd2lkdGg9IjM0IiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGQkUwRSIgY3g9IjYuNTAyODE2OSIgY3k9IjYiIHI9IjYiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9IuWIhue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSIgb3BhY2l0eT0iMC41MDEyMzIzMjkiIHg9Ii0yLjY1NTY1MzQ3ZS0xMyIgeT0iNS43ODgyMTI4MSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGNDc0NyIgY3g9IjYiIGN5PSI2IiByPSI2Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC45NTQ1NDUsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC00KSIgb3BhY2l0eT0iMC41MDQxODUyNjgiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIxMS45NDI2NTY5Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwOENEQyIgY3g9IjM1IiBjeT0iNiIgcj0iNiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';

var propTypes = {
  /**
   * @title 默认的公共类׺
   */
  clsPrefix: _propTypes2["default"].string,
  clsLoadBack: _propTypes2["default"].string,
  /**
   * @title 不同loading样式
   */
  loadingType: _propTypes2["default"].oneOf(["rotate", "line", "custom"]),

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
        indicator = _props.indicator,
        others = _objectWithoutProperties(_props, ["clsPrefix", "loadingType", "size", "color", "show", "showBackDrop", "container", "children", "fullScreen", "wrapperClassName", "indicator"]);

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
    if (loadingType === "custom" && !!indicator) {
      dom = _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          { className: classes },
          _react2["default"].createElement(
            "div",
            null,
            indicator
          )
        ),
        children && _react2["default"].createElement(
          "div",
          { className: clsPrefix + "-desc" },
          children
        )
      );
    } else if (loadingType === "rotate") {
      dom = _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          { className: classes },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement("img", { src: loadImg })
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