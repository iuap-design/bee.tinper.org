'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zh_CN = require('./zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    locale: _propTypes2["default"].object
};
var defaultProps = {
    locale: _zh_CN2["default"]
};

var childContextTypes = {
    beeLocale: _propTypes2["default"].object
};

var Locale = function (_Component) {
    _inherits(Locale, _Component);

    function Locale() {
        _classCallCheck(this, Locale);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Locale.prototype.getChildContext = function getChildContext() {
        return {
            beeLocale: _extends({}, this.props.locale, {
                exist: true
            })
        };
    };

    Locale.prototype.render = function render() {
        return _react2["default"].Children.only(this.props.children);
    };

    return Locale;
}(_react.Component);

;

Locale.propTypes = propTypes;
Locale.defaultProps = defaultProps;
Locale.childContextTypes = childContextTypes;

exports["default"] = Locale;
module.exports = exports['default'];