"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _Portal = require("bee-overlay/build/Portal");

var _Portal2 = _interopRequireDefault(_Portal);

var _i18n = require("./i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _tool = require("bee-locale/build/tool");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var loadImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDJweCIgaGVpZ2h0PSI0MXB4IiB2aWV3Qm94PSIwIDAgNDIgNDEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT53aW5kb3U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjQ5Ljc3NzAwMDElIiB5MT0iOTkuOTg4NjY2NyUiIHgyPSI0OS43NzcwMDAxJSIgeTI9IjIyLjc5MTY5ODQlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM4MkQ5MDAiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMC4wNzY1JSIgeTE9IjQ5LjgwNDUlIiB4Mj0iODQuMDAyMTY0NCUiIHkyPSI0OS44MDQ1JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZCRTBFIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwLjIyOTUwMDElIiB5MT0iLTAuMDgwOTk5OTQyOSUiIHgyPSI1MC4yMjk1MDAxJSIgeTI9IjgwLjA2MTg4MjglIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjQ3NDciIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iOTkuOTI1NjY2NyUiIHkxPSI0OS45MTglIiB4Mj0iMjQuMjY5MjQwMyUiIHkyPSI0OS45MTglIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMDhDREMiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4blm74vbG9hZGluZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMDAwMDAwLCAtMy4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IndpbmRvdSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5YiG57uELTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBvcGFjaXR5PSIwLjQ5OTM3MjIxIiB4PSIwLjQwOTA5MDkwOSIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwQzg2NCIgY3g9IjYuNDA5MDkwOTEiIGN5PSIzNC4yNjY3MDkxIiByPSI2Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NTE3MjksIDI4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIG9wYWNpdHk9IjAuNTA5MDIxNTc3IiB4PSI2LjI2MjM1NTk1IiB5PSIzLjU1MjcxMzY4ZS0xNSIgd2lkdGg9IjM0IiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGQkUwRSIgY3g9IjYuNTAyODE2OSIgY3k9IjYiIHI9IjYiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9IuWIhue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0zKSIgb3BhY2l0eT0iMC41MDEyMzIzMjkiIHg9Ii0yLjY1NTY1MzQ3ZS0xMyIgeT0iNS43ODgyMTI4MSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjM0Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGNDc0NyIgY3g9IjYiIGN5PSI2IiByPSI2Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC45NTQ1NDUsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC00KSIgb3BhY2l0eT0iMC41MDQxODUyNjgiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNiIgaGVpZ2h0PSIxMS45NDI2NTY5Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iIzAwOENEQyIgY3g9IjM1IiBjeT0iNiIgcj0iNiI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
var loadDefault = 'data:image/png;base64,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';

var propTypes = {
  /**
   * @title 默认的公共类׺
   */
  clsPrefix: _propTypes2["default"].string,
  clsLoadBack: _propTypes2["default"].string,
  /**
   * @title 不同loading样式
   */
  loadingType: _propTypes2["default"].oneOf(["loadDefault", "rotate", "line", "custom"]),

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
  wrapperClassName: _propTypes2["default"].string,
  tip: _propTypes2["default"].string
};

var defaultProps = {
  clsPrefix: "u-loading",
  clsLoadBack: "u-loading-back",
  loadingType: "default",
  color: "",
  showBackDrop: true,
  fullScreen: false,
  wrapperClassName: ""
};

var isReact16 = _reactDom2["default"].createPortal !== undefined;

var Loading = function (_Component) {
  _inherits(Loading, _Component);

  function Loading(props) {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  Loading.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        clsPrefix = _props.clsPrefix,
        container = _props.container;

    if (isReact16 && container) {
      this.portalContainerNode = this.getContainer(this.props.container);
      if (this.portalContainerNode.className && this.portalContainerNode.className.indexOf(clsPrefix + "-container") == -1) {
        this.portalContainerNode.className += " " + clsPrefix + "-container";
      }
    }
  };

  Loading.prototype.getContainer = function getContainer(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return _reactDom2["default"].findDOMNode(container) || defaultContainer;
  };

  Loading.prototype.render = function render() {
    var _classnames, _backClassObj;

    var local = (0, _tool.getComponentLocale)(this.props, this.context, 'Loading', function () {
      return _i18n2["default"];
    });

    var _props2 = this.props,
        clsPrefix = _props2.clsPrefix,
        clsLoadBack = _props2.clsLoadBack,
        loadingType = _props2.loadingType,
        size = _props2.size,
        color = _props2.color,
        show = _props2.show,
        showBackDrop = _props2.showBackDrop,
        container = _props2.container,
        children = _props2.children,
        fullScreen = _props2.fullScreen,
        wrapperClassName = _props2.wrapperClassName,
        indicator = _props2.indicator,
        className = _props2.className,
        tip = _props2.tip,
        others = _objectWithoutProperties(_props2, ["clsPrefix", "clsLoadBack", "loadingType", "size", "color", "show", "showBackDrop", "container", "children", "fullScreen", "wrapperClassName", "indicator", "className", "tip"]);

    if (!show) return null;

    var clsObj = (0, _classnames3["default"])(clsPrefix, (_classnames = {}, _defineProperty(_classnames, clsPrefix + "-" + loadingType, true), _defineProperty(_classnames, clsPrefix + "-" + loadingType + "-sm", size === 'sm'), _defineProperty(_classnames, clsPrefix + "-" + loadingType + "-lg", size === 'lg'), _defineProperty(_classnames, clsPrefix + "-" + loadingType + "-" + color, !!color), _defineProperty(_classnames, clsPrefix + "-show-text", !!tip), _classnames), wrapperClassName);

    var classes = (0, _classnames3["default"])(clsPrefix, clsObj);

    var dom = "";

    if (loadingType === "custom" && !!indicator) {
      dom = _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          _extends({ className: classes }, others),
          _react2["default"].createElement(
            "div",
            { className: clsPrefix + "-spin" },
            indicator
          ),
          tip ? _react2["default"].createElement(
            "div",
            { className: clsPrefix + "-desc" },
            tip
          ) : null
        ),
        !tip && children && _react2["default"].createElement(
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
          _extends({ className: classes }, others),
          _react2["default"].createElement(
            "div",
            { className: clsPrefix + "-spin" },
            _react2["default"].createElement("img", { src: loadImg })
          ),
          tip ? _react2["default"].createElement(
            "p",
            { className: clsPrefix + "-desc" },
            tip
          ) : null
        ),
        !tip && children && _react2["default"].createElement(
          "div",
          { className: clsPrefix + "-desc" },
          children
        )
      );
    } else if (loadingType === "default") {
      var defaultTip = tip ? tip : local.loading;
      dom = _react2["default"].createElement(
        "div",
        { className: clsPrefix + "-default-container" },
        _react2["default"].createElement(
          "div",
          _extends({ className: classes }, others),
          _react2["default"].createElement(
            "div",
            { className: clsPrefix + "-spin" },
            _react2["default"].createElement("img", { src: loadDefault })
          )
        ),
        _react2["default"].createElement(
          "div",
          { className: clsPrefix + "-desc" },
          defaultTip
        )
      );
    } else if (loadingType === "line") {
      dom = _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "div",
          _extends({ className: classes }, others),
          _react2["default"].createElement("div", null),
          _react2["default"].createElement("div", null),
          _react2["default"].createElement("div", null),
          _react2["default"].createElement("div", null),
          _react2["default"].createElement("div", null)
        ),
        tip ? _react2["default"].createElement(
          "p",
          { className: clsPrefix + "-desc" },
          tip
        ) : null,
        !tip && children && _react2["default"].createElement(
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
        { className: (0, _classnames3["default"])(backClassObj) },
        dom
      );
    }

    return typeof window !== 'undefined' ? _react2["default"].createElement(
      _Portal2["default"],
      { container: container },
      dom
    ) : _react2["default"].createElement(
      "div",
      null,
      dom
    );
  };

  return Loading;
}(_react.Component);

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;
Loading.contextTypes = {
  beeLocale: _propTypes2["default"].object
};

exports["default"] = Loading;
module.exports = exports["default"];