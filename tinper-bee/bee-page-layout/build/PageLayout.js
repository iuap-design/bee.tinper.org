'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _LeftContent = require('./LeftContent');

var _LeftContent2 = _interopRequireDefault(_LeftContent);

var _RightContent = require('./RightContent');

var _RightContent2 = _interopRequireDefault(_RightContent);

var _SearchArea = require('./SearchArea');

var _SearchArea2 = _interopRequireDefault(_SearchArea);

var _TableContent = require('./TableContent');

var _TableContent2 = _interopRequireDefault(_TableContent);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {};
var defaultProps = {};

var PageLayout = function (_Component) {
    _inherits(PageLayout, _Component);

    function PageLayout() {
        _classCallCheck(this, PageLayout);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    PageLayout.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            children = _props.children,
            other = _objectWithoutProperties(_props, ['className', 'children']);

        var classes = 'bee-page-layout';
        if (className) classes += ' ' + className;
        return _react2["default"].createElement(
            'div',
            _extends({ className: classes }, other),
            this.props.children
        );
    };

    return PageLayout;
}(_react.Component);

PageLayout.propTypes = propTypes;
PageLayout.defaultProps = defaultProps;
PageLayout.Header = _Header2["default"];
PageLayout.Content = _Content2["default"];
PageLayout.LeftContent = _LeftContent2["default"];
PageLayout.RightContent = _RightContent2["default"];
PageLayout.SearchArea = _SearchArea2["default"];
PageLayout.TableContent = _TableContent2["default"];

exports["default"] = PageLayout;
module.exports = exports['default'];