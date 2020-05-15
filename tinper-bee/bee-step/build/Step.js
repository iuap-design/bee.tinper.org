'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-steps.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/steps
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


function isString(str) {
  return typeof str === 'string';
}

var Step = function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Step.prototype.renderIconNode = function renderIconNode() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        progressDot = _props.progressDot,
        stepNumber = _props.stepNumber,
        status = _props.status,
        title = _props.title,
        description = _props.description,
        icon = _props.icon,
        iconPrefix = _props.iconPrefix,
        icons = _props.icons;

    var iconNode = void 0;
    var iconClassName = (0, _classnames2["default"])(prefixCls + '-icon', iconPrefix + 'icon', (_classNames = {}, _defineProperty(_classNames, iconPrefix + 'icon-' + icon, icon && isString(icon)), _defineProperty(_classNames, iconPrefix + 'icon-check', !icon && status === 'finish' && icons && !icons.finish), _defineProperty(_classNames, iconPrefix + 'icon-close', !icon && status === 'error' && icons && !icons.error), _classNames));
    var iconDot = _react2["default"].createElement('span', { className: prefixCls + '-icon-dot' });
    // `progressDot` enjoy the highest priority
    if (progressDot) {
      if (typeof progressDot === 'function') {
        iconNode = _react2["default"].createElement(
          'span',
          { className: prefixCls + '-icon' },
          progressDot(iconDot, { index: stepNumber - 1, status: status, title: title, description: description })
        );
      } else {
        iconNode = _react2["default"].createElement(
          'span',
          { className: prefixCls + '-icon' },
          iconDot
        );
      }
    } else if (icon && !isString(icon)) {
      iconNode = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-icon' },
        icon
      );
    } else if (icons && icons.finish && status === 'finish') {
      iconNode = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-icon' },
        icons.finish
      );
    } else if (icons && icons.error && status === 'error') {
      iconNode = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-icon' },
        icons.error
      );
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = _react2["default"].createElement('span', { className: iconClassName });
    } else {
      iconNode = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-icon' },
        stepNumber
      );
    }

    return iconNode;
  };

  Step.prototype.render = function render() {
    var _props2 = this.props,
        className = _props2.className,
        prefixCls = _props2.prefixCls,
        style = _props2.style,
        itemWidth = _props2.itemWidth,
        _props2$status = _props2.status,
        status = _props2$status === undefined ? 'wait' : _props2$status,
        iconPrefix = _props2.iconPrefix,
        icon = _props2.icon,
        wrapperStyle = _props2.wrapperStyle,
        adjustMarginRight = _props2.adjustMarginRight,
        stepNumber = _props2.stepNumber,
        description = _props2.description,
        title = _props2.title,
        progressDot = _props2.progressDot,
        tailContent = _props2.tailContent,
        icons = _props2.icons,
        restProps = _objectWithoutProperties(_props2, ['className', 'prefixCls', 'style', 'itemWidth', 'status', 'iconPrefix', 'icon', 'wrapperStyle', 'adjustMarginRight', 'stepNumber', 'description', 'title', 'progressDot', 'tailContent', 'icons']);

    var classString = (0, _classnames2["default"])(prefixCls + '-item', prefixCls + '-item-' + status, className, _defineProperty({}, prefixCls + '-item-custom', icon));
    var stepItemStyle = _extends({}, style);
    if (itemWidth) {
      stepItemStyle.width = itemWidth;
    }
    if (adjustMarginRight) {
      stepItemStyle.marginRight = adjustMarginRight;
    }
    return _react2["default"].createElement(
      'div',
      _extends({}, restProps, {
        className: classString,
        style: stepItemStyle
      }),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-item-tail' },
        tailContent
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-item-icon' },
        this.renderIconNode()
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-item-content' },
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-item-title' },
          title
        ),
        description && _react2["default"].createElement(
          'div',
          { className: prefixCls + '-item-description' },
          description
        )
      )
    );
  };

  return Step;
}(_react2["default"].Component);

Step.propTypes = {
  className: _propTypes2["default"].string,
  prefixCls: _propTypes2["default"].string,
  style: _propTypes2["default"].object,
  wrapperStyle: _propTypes2["default"].object,
  itemWidth: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  status: _propTypes2["default"].string,
  iconPrefix: _propTypes2["default"].string,
  icon: _propTypes2["default"].node,
  adjustMarginRight: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
  stepNumber: _propTypes2["default"].string,
  description: _propTypes2["default"].any,
  title: _propTypes2["default"].any,
  progressDot: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].func]),
  tailContent: _propTypes2["default"].any,
  icons: _propTypes2["default"].shape({
    finish: _propTypes2["default"].node,
    error: _propTypes2["default"].node
  })
};

exports["default"] = Step;
module.exports = exports['default'];