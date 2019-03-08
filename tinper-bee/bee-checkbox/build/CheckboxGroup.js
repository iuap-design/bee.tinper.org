'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    clsPrefix: _propTypes2["default"].string,
    value: _propTypes2["default"].array,
    onChange: _propTypes2["default"].func
};

var defaultProps = {
    clsPrefix: 'u-checkbox-group',
    value: [],
    onChange: function onChange() {}
};

var CheckboxGroup = function (_React$Component) {
    _inherits(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        _classCallCheck(this, CheckboxGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.changeHandle = function (v) {
            var values = _this.state.values;
            if (values.indexOf(v) != -1) {
                values.splice(values.indexOf(v), 1);
            } else {
                values.push(v);
            }
            _this.setState({
                values: values
            });
            _this.props.onChange(values);
        };

        _this.state = {
            values: props.value
        };
        return _this;
    }

    CheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!(0, _lodash2["default"])(nextProps.value, this.state.values)) {
            this.setState({
                values: nextProps.value
            });
        }
    };

    CheckboxGroup.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            clsPrefix = _props.clsPrefix,
            className = _props.className;

        var classes = clsPrefix;
        if (className) classes += ' ' + className;
        return _react2["default"].createElement(
            'div',
            { className: classes },
            _react2["default"].Children.map(this.props.children, function (child) {
                return _react2["default"].cloneElement(child, {
                    onChange: function onChange() {
                        _this2.changeHandle(child.props.value);
                    },
                    checked: _this2.state.values.indexOf(child.props.value) != -1
                });
            })
        );
    };

    return CheckboxGroup;
}(_react2["default"].Component);

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;

exports["default"] = CheckboxGroup;
module.exports = exports['default'];