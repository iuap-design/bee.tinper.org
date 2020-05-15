'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./iconfont.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    className: _propTypes2["default"].string,
    type: _propTypes2["default"].string
};
var defaultProps = {
    viewBox: "0 0 1024 1024",
    clsPrefix: 'u-svgicon'
};

var SvgIcon = function (_Component) {
    _inherits(SvgIcon, _Component);

    function SvgIcon() {
        _classCallCheck(this, SvgIcon);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    SvgIcon.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            className = _props.className,
            type = _props.type,
            Component = _props.component,
            viewBox = _props.viewBox,
            clsPrefix = _props.clsPrefix,
            children = _props.children;


        var classString = (0, _classnames2["default"])(_defineProperty({}, '' + clsPrefix, true));
        var renderInnerNode = function renderInnerNode() {
            // component > type
            if (Component) {
                return _react2["default"].createElement(
                    'i',
                    _this2.props,
                    _react2["default"].createElement(
                        Component,
                        null,
                        children
                    )
                );
            }

            return _react2["default"].createElement(
                'svg',
                { className: (0, _classnames2["default"])(className, classString), 'aria-hidden': 'true', viewBox: viewBox },
                _react2["default"].createElement('use', { xlinkHref: '#uftype-' + type })
            );
        };
        return renderInnerNode();
    };

    return SvgIcon;
}(_react.Component);

;

SvgIcon.propTypes = propTypes;
SvgIcon.defaultProps = defaultProps;
exports["default"] = SvgIcon;
module.exports = exports['default'];