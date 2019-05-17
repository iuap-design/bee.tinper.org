'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    /**
     * @title 尺寸
     */
    size: _propTypes2["default"].oneOf(['sm', 'md', 'xg', 'lg']),
    /**
     * @title 样式
     */
    style: _propTypes2["default"].object,
    /**
     * @title 形状
     */
    shape: _propTypes2["default"].oneOf(['block', 'round', 'border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),

    bordered: _propTypes2["default"].bool,
    /**
    * @title 类型
    */
    colors: _propTypes2["default"].oneOf(['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'danger', 'dark', 'light', 'default']),
    /**
     * @title 是否禁用
     * @veIgnore
     */
    disabled: _propTypes2["default"].bool,
    /**
     * @title 类名
     * @veIgnore
     */
    className: _propTypes2["default"].string,

    /**
     * @title <button> 的 type
     * @veIgnore
     */
    htmlType: _propTypes2["default"].oneOf(['submit', 'button', 'reset']),
    isSubmit: _propTypes2["default"].bool //是否作为form的提交按钮
};

var defaultProps = {
    disabled: false,
    htmlType: 'button',
    clsPrefix: 'u-button',
    bordered: false,
    isSubmit: false
};

var sizeMap = {
    sm: 'sm',
    md: 'md',
    xg: 'xg',
    lg: 'lg'
},
    colorsMap = {
    primary: 'primary',
    secondary: 'secondary',
    accent: 'accent',
    success: 'success',
    info: 'info',
    warning: 'warning',
    danger: 'danger',
    dark: 'dark',
    light: 'light'
},
    shapeMap = {
    block: 'block',
    round: 'round',
    border: 'border',
    squared: 'squared',
    floating: 'floating',
    pillRight: 'pill-right',
    pillLeft: 'pill-left',
    icon: 'icon'
};

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(props) {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    Button.prototype.render = function render() {
        var _props = this.props,
            colors = _props.colors,
            shape = _props.shape,
            disabled = _props.disabled,
            className = _props.className,
            size = _props.size,
            bordered = _props.bordered,
            children = _props.children,
            htmlType = _props.htmlType,
            clsPrefix = _props.clsPrefix,
            isSubmit = _props.isSubmit,
            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'bordered', 'children', 'htmlType', 'clsPrefix', 'isSubmit']);

        var clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (sizeMap[size]) {
            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
        }

        if (shapeMap[shape]) {
            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
        }
        if (colorsMap[colors]) {
            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
        }
        if (bordered) {
            clsObj[clsPrefix + '-border'] = bordered;
        }
        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
        return _react2["default"].createElement(
            'button',
            _extends({
                type: htmlType,
                className: classes,
                disabled: disabled
            }, others),
            this.props.children
        );
    };

    return Button;
}(_react.Component);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports["default"] = Button;
module.exports = exports['default'];