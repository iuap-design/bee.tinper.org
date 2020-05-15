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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),

  /**
   * xs显示列数
   */
  xs: _propTypes2["default"].number,
  /**
   * sm显示列数
   */
  sm: _propTypes2["default"].number,
  /**
   * md显示列数
   */
  md: _propTypes2["default"].number,
  /**
   * lg显示列数
   */
  lg: _propTypes2["default"].number,
  /**
   * xs偏移列数
   */
  xsOffset: _propTypes2["default"].number,
  /**
   * sm偏移列数
   */
  smOffset: _propTypes2["default"].number,
  /**
   * md偏移列数
   */
  mdOffset: _propTypes2["default"].number,
  /**
   * lg偏移列数
   */
  lgOffset: _propTypes2["default"].number,
  /**
   * xs右偏移列数
   */
  xsPush: _propTypes2["default"].number,
  /**
   * sm右偏移列数
   */
  smPush: _propTypes2["default"].number,
  /**
   * md右偏移列数
   */
  mdPush: _propTypes2["default"].number,
  /**
   * lg右偏移列数
   */
  lgPush: _propTypes2["default"].number,
  /**
   * xs左偏移列数
   */
  xsPull: _propTypes2["default"].number,
  /**
   * sm左偏移列数
   */
  smPull: _propTypes2["default"].number,
  /**
   * md左偏移列数
   */
  mdPull: _propTypes2["default"].number,
  /**
   * lg左偏移列数
   */
  lgPull: _propTypes2["default"].number
};

var defaultProps = {
  componentClass: 'div',
  clsPrefix: 'u-col'
};

var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Col.prototype.render = function render() {
    var _props = this.props,
        Component = _props.componentClass,
        className = _props.className,
        clsPrefix = _props.clsPrefix,
        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);

    var tbClass = [];
    /**
     * 对传入props做样式转化
     * @type {[type]}
     */
    DEVICE_SIZES.forEach(function (size) {
      function popProp(propSuffix, modifier) {
        var propName = '' + size + propSuffix;
        var propValue = others[propName];

        if (propValue != undefined && propValue != null) {
          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
        }

        delete others[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');
    });

    return _react2["default"].createElement(
      Component,
      _extends({
        className: (0, _classnames2["default"])(tbClass, className)
      }, others),
      this.props.children
    );
  };

  return Col;
}(_react.Component);

Col.defaultProps = defaultProps;
Col.propTypes = propTypes;

exports["default"] = Col;
module.exports = exports['default'];