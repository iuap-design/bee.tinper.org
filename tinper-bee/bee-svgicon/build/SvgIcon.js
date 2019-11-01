'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _svg = require('./svg');

var _svg2 = _interopRequireDefault(_svg);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    className: _propTypes2["default"].string,
    type: _propTypes2["default"].string,
    theme: _propTypes2["default"].oneOf(['pure', 'colour'])
};
var defaultProps = {
    viewBox: "64 64 896 896",
    width: '1em',
    height: '1em',
    clsPrefix: 'uftype',
    theme: 'colour'
};

var SvgIcon = function (_Component) {
    _inherits(SvgIcon, _Component);

    function SvgIcon(props) {
        _classCallCheck(this, SvgIcon);

        var _this = _possibleConstructorReturn(this, _Component.call(this));

        _initialiseProps.call(_this);

        var children = _this.getStartChildren(props);
        _this.state = {
            children: children
        };
        return _this;
    }

    SvgIcon.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            className = _props.className,
            type = _props.type,
            Component = _props.component,
            viewBox = _props.viewBox,
            tabIndex = _props.tabIndex,
            onClick = _props.onClick,
            width = _props.width,
            height = _props.height,
            clsPrefix = _props.clsPrefix,
            theme = _props.theme,
            restProps = _objectWithoutProperties(_props, ['className', 'type', 'component', 'viewBox', 'tabIndex', 'onClick', 'width', 'height', 'clsPrefix', 'theme']);

        var children = this.state.children;

        var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, '' + clsPrefix, true), _defineProperty(_classNames, clsPrefix + '-' + type, theme === 'pure'), _classNames));
        var renderInnerNode = function renderInnerNode() {
            // component > children > type
            if (Component) {
                return _react2["default"].createElement(
                    Component,
                    _this2.props,
                    children
                );
            }

            if (children) {
                return _react2["default"].createElement(
                    'svg',
                    _extends({}, _this2.props, { viewBox: viewBox }),
                    children
                );
            }
        };
        var iconTabIndex = tabIndex;
        if (iconTabIndex === undefined && onClick) {
            iconTabIndex = -1;
        }
        return _react2["default"].createElement(
            'i',
            _extends({}, restProps, {
                tabIndex: iconTabIndex,
                onClick: onClick,
                className: classString
            }),
            theme === 'colour' && renderInnerNode()
        );
    };

    return SvgIcon;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    this.getStartChildren = function (props) {
        var svg = props.children || _svg2["default"][props.type];
        return (0, _utils.toArrayChildren)(svg).map(function (item, i) {
            return _react2["default"].cloneElement(item, { key: item.key || i });
        });
    };
};

;

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = defaultProps;
exports["default"] = SvgIcon;
module.exports = exports['default'];