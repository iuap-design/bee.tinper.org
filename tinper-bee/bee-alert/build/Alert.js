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

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultIcon = _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close-bold' });

var propTypes = {
    onDismiss: _propTypes2["default"].func,
    closeLabel: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
    dark: _propTypes2["default"].bool
};

var defaultProps = {
    clsPrefix: "u-alert",
    closeLabel: defaultIcon,
    dark: false
};

var Alert = function (_React$Component) {
    _inherits(Alert, _React$Component);

    function Alert(props) {
        _classCallCheck(this, Alert);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.renderDismissButton = function (onDismiss) {
            return _react2["default"].createElement(
                'div',
                {
                    className: 'close',
                    onClick: onDismiss
                },
                _this.props.closeLabel
            );
        };

        return _this;
    }

    /**
     * 渲染右上角关闭alert按钮
     */


    Alert.prototype.render = function render() {
        var _props = this.props,
            onDismiss = _props.onDismiss,
            colors = _props.colors,
            className = _props.className,
            closeLabel = _props.closeLabel,
            children = _props.children,
            clsPrefix = _props.clsPrefix,
            dark = _props.dark,
            others = _objectWithoutProperties(_props, ['onDismiss', 'colors', 'className', 'closeLabel', 'children', 'clsPrefix', 'dark']);

        var clsObj = {};

        clsObj['' + clsPrefix] = true;

        if (colors) {
            clsObj[clsPrefix + '-' + colors] = true;
        } else {
            clsObj[clsPrefix + '-warning'] = true;
        }

        if (dark) {
            clsObj['dark'] = true;
        }

        return _react2["default"].createElement(
            'div',
            _extends({}, others, {
                role: 'alert',
                className: (0, _classnames2["default"])(className, clsObj)
            }),
            children,
            this.renderDismissButton(onDismiss)
        );
    };

    return Alert;
}(_react2["default"].Component);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
exports["default"] = Alert;
module.exports = exports['default'];