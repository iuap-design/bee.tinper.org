'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcForm = require('rc-form');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    prefixCls: _propTypes2["default"].string,
    onSubmit: _propTypes2["default"].func
};
var defaultProps = {
    prefixCls: 'u-form',
    onSubmit: function onSubmit() {}
};

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form(props) {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    Form.prototype.render = function render() {
        var _props = this.props,
            prefixCls = _props.prefixCls,
            _props$className = _props.className,
            className = _props$className === undefined ? '' : _props$className,
            children = _props.children,
            style = _props.style,
            onSubmit = _props.onSubmit;

        var formClassName = (0, _classnames2["default"])(prefixCls, className);
        return _react2["default"].createElement(
            'form',
            { className: prefixCls + ' ' + className, style: style, onSubmit: onSubmit },
            children
        );
    };

    return Form;
}(_react.Component);

;
Form.createForm = _rcForm.createForm;
Form.createFormField = _rcForm.createFormField;
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
exports["default"] = Form;
module.exports = exports['default'];