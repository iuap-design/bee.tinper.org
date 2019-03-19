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

    colors: _propTypes2["default"].oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),

    disabled: _propTypes2["default"].bool,

    inverse: _propTypes2["default"].bool

};

var defaultProps = {
    disabled: false,
    inverse: false,
    colors: 'primary',
    clsPrefix: 'u-checkbox',
    defaultChecked: false,
    onClick: function onClick() {}
};
var clsPrefix = 'u-checkbox';

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            checked: 'checked' in props ? props.checked : props.defaultChecked
        };
        _this.doubleClickFlag = null;
        return _this;
    }

    Checkbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            });
        }
    };

    Checkbox.prototype.render = function render() {
        var _props = this.props,
            disabled = _props.disabled,
            inverse = _props.inverse,
            colors = _props.colors,
            size = _props.size,
            className = _props.className,
            indeterminate = _props.indeterminate,
            onClick = _props.onClick,
            children = _props.children,
            checked = _props.checked,
            clsPrefix = _props.clsPrefix,
            onDoubleClick = _props.onDoubleClick,
            onChange = _props.onChange,
            others = _objectWithoutProperties(_props, ['disabled', 'inverse', 'colors', 'size', 'className', 'indeterminate', 'onClick', 'children', 'checked', 'clsPrefix', 'onDoubleClick', 'onChange']);

        var input = _react2["default"].createElement('input', _extends({}, others, {
            type: 'checkbox',
            disabled: this.props.disabled
        }));

        var classes = {
            'is-checked': this.state.checked,
            disabled: disabled
        };

        if (inverse) {
            classes[clsPrefix + '-inverse'] = true;
        }

        if (colors) {
            classes[clsPrefix + '-' + colors] = true;
        }

        if (size) {
            classes[clsPrefix + '-' + size] = true;
        }

        if (!checked && indeterminate) {
            classes[clsPrefix + '-indeterminate'] = true;
        }

        var classNames = (0, _classnames2["default"])(clsPrefix, classes);

        return _react2["default"].createElement(
            'label',
            {
                className: (0, _classnames2["default"])(classNames, className),
                onDoubleClick: this.handledbClick,
                onClick: this.changeState },
            input,
            _react2["default"].createElement(
                'label',
                { className: clsPrefix + '-label' },
                children
            )
        );
    };

    return Checkbox;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.changeState = function (e) {
        var props = _this2.props;
        var checked = _this2.state.checked;

        clearTimeout(_this2.doubleClickFlag);
        if (props.onClick instanceof Function) {
            props.onClick(e);
        }
        if (props.onDoubleClick instanceof Function) {
            _this2.doubleClickFlag = setTimeout(function () {
                //do function在此处写单击事件要执行的代码
                _this2.change(props, checked);
            }, 300);
        } else {
            _this2.change(props, checked);
        }
        e.stopPropagation();
        e.preventDefault();
        //执行延时
    };

    this.change = function (props, checked) {
        if (props.disabled) {
            return;
        }
        if (!('checked' in props)) {
            _this2.setState({
                checked: !checked
            });
        }

        if (props.onChange instanceof Function) {
            props.onChange(!checked);
        }
    };

    this.handledbClick = function (e) {
        var onDoubleClick = _this2.props.onDoubleClick;

        clearTimeout(_this2.doubleClickFlag);
        onDoubleClick && onDoubleClick(_this2.state.checked, e);
    };
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

exports["default"] = Checkbox;
module.exports = exports['default'];