'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeLoading = require('bee-loading');

var _beeLoading2 = _interopRequireDefault(_beeLoading);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    /**
     * @title loading时的文字
     */
    loadingText: _propTypes2["default"].string,
    /**
     * @title
     */
    children: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].node]),
    show: _propTypes2["default"].bool,
    showBackDrop: _propTypes2["default"].bool

};

var defaultProps = {
    show: false,
    clsPrefix: 'u-loading-state',
    loadingText: '',
    showBackDrop: false
};

var LoadingState = function (_React$Component) {
    _inherits(LoadingState, _React$Component);

    function LoadingState(props) {
        _classCallCheck(this, LoadingState);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {
            clickFlag: false,
            loadingText: _this.props.children
        };
        return _this;
    }

    LoadingState.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            clsPrefix = _props.clsPrefix,
            children = _props.children,
            show = _props.show,
            loadingText = _props.loadingText,
            showBackDrop = _props.showBackDrop,
            others = _objectWithoutProperties(_props, ['className', 'clsPrefix', 'children', 'show', 'loadingText', 'showBackDrop']);

        var labelClass = (0, _classnames3["default"])(_defineProperty({}, clsPrefix + '-label', show));
        var loadingStateClass = (0, _classnames3["default"])(clsPrefix, className);
        var beeIcon = _react2["default"].createElement(
            'div',
            { className: 'rotate-icon-container' },
            _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-loadingstate' })
        );
        return _react2["default"].createElement(
            _beeButton2["default"],
            _extends({
                className: loadingStateClass,
                disabled: show
            }, others),
            _react2["default"].createElement(_beeLoading2["default"], { show: show, container: this, showBackDrop: showBackDrop, loadingType: 'custom', indicator: beeIcon }),
            _react2["default"].createElement(
                'div',
                { className: labelClass },
                show && loadingText ? loadingText : children
            )
        );
    };

    return LoadingState;
}(_react2["default"].Component);

LoadingState.propTypes = propTypes;
LoadingState.defaultProps = defaultProps;

exports["default"] = LoadingState;
module.exports = exports['default'];