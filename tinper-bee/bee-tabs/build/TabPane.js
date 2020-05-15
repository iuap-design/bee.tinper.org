"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-tabs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/tabs
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var propTypes = {
  className: _propTypes2["default"].string,
  active: _propTypes2["default"].bool,
  style: _propTypes2["default"].any,
  destroyInactiveTabPane: _propTypes2["default"].bool,
  forceRender: _propTypes2["default"].bool,
  placeholder: _propTypes2["default"].node
};
var defaultProps = {
  placeholder: null
};

var TabPane = function (_Component) {
  _inherits(TabPane, _Component);

  function TabPane() {
    _classCallCheck(this, TabPane);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TabPane.prototype.render = function render() {
    var _classnames;

    var props = this.props;
    var className = props.className,
        destroyInactiveTabPane = props.destroyInactiveTabPane,
        active = props.active,
        forceRender = props.forceRender;

    this._isActived = this._isActived || active;
    var clsPrefix = props.rootclsPrefix + "-tabpane";
    var cls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, clsPrefix, 1), _defineProperty(_classnames, clsPrefix + "-inactive", !active), _defineProperty(_classnames, clsPrefix + "-active", active), _defineProperty(_classnames, className, className), _classnames));
    var isRender = destroyInactiveTabPane ? active : this._isActived;
    return _react2["default"].createElement(
      "div",
      {
        style: props.style,
        role: "tabpanel",
        "aria-hidden": props.active ? "false" : "true",
        className: cls
      },
      isRender || forceRender ? props.children : props.placeholder
    );
  };

  return TabPane;
}(_react.Component);

TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

exports["default"] = TabPane;
module.exports = exports["default"];