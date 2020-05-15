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

var _viewerjs = require('viewerjs');

var _viewerjs2 = _interopRequireDefault(_viewerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    ready: _propTypes2["default"].func,
    show: _propTypes2["default"].func,
    shown: _propTypes2["default"].func,
    hide: _propTypes2["default"].func,
    hidden: _propTypes2["default"].func,
    view: _propTypes2["default"].func,
    viewed: _propTypes2["default"].func,
    zoom: _propTypes2["default"].func,
    zoomed: _propTypes2["default"].func,
    asyncLoad: _propTypes2["default"].bool
};
var defaultProps = {
    ready: function ready() {},
    show: function show() {},
    shown: function shown() {},
    hide: function hide() {},
    hidden: function hidden() {},
    view: function view() {},
    viewed: function viewed() {},
    zoom: function zoom() {},
    zoomed: function zoomed() {},
    asyncLoad: false
};

var Viewer = function (_Component) {
    _inherits(Viewer, _Component);

    function Viewer(props) {
        _classCallCheck(this, Viewer);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    Viewer.prototype.componentDidMount = function componentDidMount() {
        if (!this.props.asyncLoad) {
            this.viewerCase = new _viewerjs2["default"](_reactDom2["default"].findDOMNode(this.refs.views), _extends({
                url: 'data-original'
            }, this.props));
        }
    };

    Viewer.prototype.componentDidUpdate = function componentDidUpdate() {
        if (this.props.asyncLoad) {
            if (this.viewerCase) {
                this.viewerCase.update();
            } else {
                this.viewerCase = new _viewerjs2["default"](_reactDom2["default"].findDOMNode(this.refs.views), _extends({
                    url: 'data-original'
                }, this.props));
            }
        }
    };

    Viewer.prototype.componentWillUnmount = function componentWillUnmount() {
        this.viewerCase.destroy();
    };

    Viewer.prototype.render = function render() {
        return _react2["default"].createElement(
            'div',
            { ref: 'views' },
            this.props.children
        );
    };

    return Viewer;
}(_react.Component);

;

Viewer.propTypes = propTypes;
Viewer.defaultProps = defaultProps;

exports["default"] = Viewer;
module.exports = exports['default'];