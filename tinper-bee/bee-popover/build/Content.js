'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isRequiredForA11y = require('tinper-bee-core/lib/isRequiredForA11y');

var _isRequiredForA11y2 = _interopRequireDefault(_isRequiredForA11y);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
     * An html id attribute, necessary for accessibility
     * @type {string}
     * @required
     */
    id: (0, _isRequiredForA11y2["default"])(_propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number])),

    /**
     * Sets the direction the Popover is positioned towards.
     */
    placement: _propTypes2["default"].oneOf(["top", "right", "bottom", "left", "topLeft", "rightTop", "bottomLeft", "leftTop", "topRight", "rightBottom", "bottomRight", "leftBottom"]),

    /**
     * The "top" position value for the Popover.
     */
    positionTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    /**
     * The "left" position value for the Popover.
     */
    positionLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),

    /**
     * The "top" position value for the Popover arrow.
     */
    arrowOffsetTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    /**
     * The "left" position value for the Popover arrow.
     */
    arrowOffsetLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])
};

var defaultProps = {
    placement: 'right',
    clsPrefix: 'u-popover'
};

var PLACECLASS = {
    right: 'right',
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    rightTop: 'right-top',
    rightBottom: 'right-bottom',
    leftTop: 'left-top',
    leftBottom: 'left-bottom',
    topRight: 'top-right',
    topLeft: 'top-left',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right'
};

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Content.prototype.getInversePlacement = function getInversePlacement(className, placement) {
        if (placement && className && className.includes('inverse-arrow')) {
            var inversePlacement = null;
            if (placement.startsWith('left')) {
                placement = placement.replace('left', 'right');
            } else if (placement.startsWith('right')) {
                placement = placement.replace('right', 'left');
            } else if (placement.startsWith('top')) {
                placement = placement.replace('top', 'bottom');
            } else if (placement.startsWith('bottom')) {
                placement = placement.replace('bottom', 'top');
            }
            return inversePlacement ? inversePlacement : placement;
        } else {
            return placement;
        }
    };

    Content.prototype.render = function render() {
        var _classes;

        var _props = this.props,
            title = _props.title,
            placement = _props.placement,
            positionTop = _props.positionTop,
            positionLeft = _props.positionLeft,
            arrowOffsetTop = _props.arrowOffsetTop,
            arrowOffsetLeft = _props.arrowOffsetLeft,
            clsPrefix = _props.clsPrefix,
            className = _props.className,
            style = _props.style,
            id = _props.id,
            children = _props.children,
            trigger = _props.trigger,
            others = _objectWithoutProperties(_props, ['title', 'placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'clsPrefix', 'className', 'style', 'id', 'children', 'trigger']);

        var resPlacement = this.getInversePlacement(className, placement);
        var classes = (_classes = {}, _defineProperty(_classes, '' + clsPrefix, true), _defineProperty(_classes, PLACECLASS[resPlacement], true), _classes);

        var outerStyle = _extends({
            display: 'block',
            top: positionTop,
            left: positionLeft
        }, style);

        // const arrowStyle = {
        //     top: arrowOffsetTop,
        //     left: arrowOffsetLeft,
        // }; 
        return _react2["default"].createElement(
            'div',
            null,
            title && _react2["default"].createElement(
                'div',
                { className: (0, _classnames2["default"])(clsPrefix + '-title') },
                title
            ),
            _react2["default"].createElement(
                'div',
                { className: (0, _classnames2["default"])(clsPrefix + '-content') },
                children
            )
        );
    };

    return Content;
}(_react2["default"].Component);

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

exports["default"] = Content;
module.exports = exports['default'];