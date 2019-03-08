'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    /**
     * 是否垂直排列
     */
    vertical: _propTypes2["default"].bool,
    /**
     * 是否对齐
     */
    justified: _propTypes2["default"].bool,

    /**
     * 垂直时是否为块状元素
     */
    block: _propTypes2["default"].bool,
    /**
     * 传入数组替代button
     */
    list: _propTypes2["default"].array
};

var defaultProps = {
    block: false,
    justified: false,
    vertical: false,
    list: []
};

var clsPrefix = "u-button-group";

var ButtonGroup = function (_React$Component) {
    _inherits(ButtonGroup, _React$Component);

    function ButtonGroup(props, context) {
        _classCallCheck(this, ButtonGroup);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.handleItemClick = function (key, onClick) {
            return function (e) {
                _this.setState({
                    activeKey: key
                });
                onClick && onClick(e);
            };
        };

        _this.state = {
            activeKey: ''
        };
        return _this;
    }

    ButtonGroup.prototype.render = function render() {
        var _tbClass,
            _this2 = this;

        var _props = this.props,
            block = _props.block,
            justified = _props.justified,
            vertical = _props.vertical,
            className = _props.className,
            list = _props.list,
            others = _objectWithoutProperties(_props, ['block', 'justified', 'vertical', 'className', 'list']);

        var tbClass = (_tbClass = {}, _defineProperty(_tbClass, '' + clsPrefix, vertical ? false : true), _defineProperty(_tbClass, clsPrefix + '-block', vertical ? block : false), _defineProperty(_tbClass, clsPrefix + '-vertical', vertical), _defineProperty(_tbClass, clsPrefix + '-justified', justified), _tbClass);
        if (list.length === 0) {
            return _react2["default"].createElement(
                'div',
                _extends({}, others, {
                    className: (0, _classnames2["default"])(tbClass, className)
                }),
                this.props.children
            );
        }

        return _react2["default"].createElement(
            'div',
            _extends({}, others, {
                className: (0, _classnames2["default"])(tbClass, className)
            }),
            list.map(function (item) {
                var title = item.title,
                    onClick = item.onClick,
                    className = item.className,
                    otherProps = _objectWithoutProperties(item, ['title', 'onClick', 'className']);

                return _react2["default"].createElement(
                    _beeButton2["default"],
                    _extends({
                        className: (0, _classnames2["default"])(className, { 'active': _this2.state.activeKey === item.key }),
                        onClick: _this2.handleItemClick(item.key, onClick)
                    }, otherProps),
                    title
                );
            })
        );
    };

    return ButtonGroup;
}(_react2["default"].Component);

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

exports["default"] = ButtonGroup;
module.exports = exports['default'];