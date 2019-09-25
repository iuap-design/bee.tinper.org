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

var _gumshoejs = require('gumshoejs');

var _gumshoejs2 = _interopRequireDefault(_gumshoejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    selector: _propTypes2["default"].string.isRequired, //选择器
    offset: _propTypes2["default"].any, //偏移量
    navClass: _propTypes2["default"].string, //当前被激活锚点新增的类名
    contentClass: _propTypes2["default"].string, //当前被激活的区域
    nested: _propTypes2["default"].bool,
    nestedClass: _propTypes2["default"].string,
    reflow: _propTypes2["default"].bool,
    event: _propTypes2["default"].bool, //是否添加监听事件
    activeHandle: _propTypes2["default"].func, //被激活的回调
    deactiveHandle: _propTypes2["default"].func //激活后的回调
};
var defaultProps = {
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content

    // Nested navigation
    nested: false, // if true, add classes to parents of active link
    nestedClass: 'active', // applied to the parent items

    // Offset & reflow
    offset: 0, // how far from the top of the page to activate a content area
    reflow: false, // if true, listen for reflows

    // Event support
    events: true, // if true, emit custom events
    activeHandle: function activeHandle() {},
    deactiveHandle: function deactiveHandle() {}
};

var Anchor = function (_Component) {
    _inherits(Anchor, _Component);

    function Anchor() {
        _classCallCheck(this, Anchor);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Anchor.prototype.componentDidMount = function componentDidMount() {
        var props = this.props;
        this.anchor = new _gumshoejs2["default"](props.selector, _extends({}, props));
        this.anchorDOM.addEventListener('gumshoeActivate', function (event) {
            // The list item
            var li = event.target; //列表

            // The link
            var link = event.detail.link; //a标签

            // The content
            var content = event.detail.content; //内容区域

            props.activeHandle(li, link, content);
        });
        this.anchorDOM.addEventListener('gumshoeDeactivate', function (event) {
            var li = event.target; //列表

            // The link
            var link = event.detail.link; //a标签

            // The content
            var content = event.detail.content; //内容区域

            props.deactiveHandle(li, link, content);
        });
    };

    Anchor.prototype.componentDidUpdate = function componentDidUpdate() {
        this.anchor.setup();
        this.anchor.detect();
    };

    Anchor.prototype.componentWillUnmount = function componentWillUnmount() {
        this.anchor.destroy();
    };

    Anchor.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            navClass = _props.navClass,
            contentClass = _props.contentClass,
            nested = _props.nested,
            nestedClass = _props.nestedClass,
            offset = _props.offset,
            reflow = _props.reflow,
            events = _props.events,
            activeHandle = _props.activeHandle,
            deactiveHandle = _props.deactiveHandle,
            others = _objectWithoutProperties(_props, ['navClass', 'contentClass', 'nested', 'nestedClass', 'offset', 'reflow', 'events', 'activeHandle', 'deactiveHandle']);

        return _react2["default"].createElement(
            'div',
            _extends({ className: 'u-anchor', ref: function ref(_ref) {
                    _this2.anchorDOM = _ref;
                } }, others),
            this.props.children
        );
    };

    return Anchor;
}(_react.Component);

;

Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;
exports["default"] = Anchor;
module.exports = exports['default'];