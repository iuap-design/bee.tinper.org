'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    active: _propTypes2["default"].bool, //是否active
    value: _propTypes2["default"].string //唯一标示
};

var defaultProps = {
    active: false
};

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab() {
        var _temp, _this, _ret;

        _classCallCheck(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.click = function () {
            _this.props.tabClick(_this.props.value);
            _this.props.onClick && _this.props.onClick(_this.props.value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Tab.prototype.render = function render() {
        var _props = this.props,
            clsfix = _props.clsfix,
            children = _props.children,
            active = _props.active,
            value = _props.value;

        var classes = clsfix + '-item';
        if (active) classes += ' active';
        return _react2["default"].createElement(
            'span',
            { className: classes, onClick: this.click, value: value },
            children
        );
    };

    return Tab;
}(_react2["default"].Component);

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

exports["default"] = Tab;
module.exports = exports['default'];