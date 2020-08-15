'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-steps.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/steps
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var propTypes = { prefixCls: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  iconPrefix: _propTypes2["default"].string,
  direction: _propTypes2["default"].string,
  labelPlacement: _propTypes2["default"].string,
  children: _propTypes2["default"].any,
  status: _propTypes2["default"].string,
  size: _propTypes2["default"].string,
  progressDot: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].func]),
  style: _propTypes2["default"].object,
  initial: _propTypes2["default"].number,
  current: _propTypes2["default"].number,
  icons: _propTypes2["default"].shape({
    finish: _propTypes2["default"].node,
    error: _propTypes2["default"].node
  })
};

var defaultProps = {
  prefixCls: 'u-steps',
  iconPrefix: 'u',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: 0,
  initial: 0,
  status: 'process',
  size: 'default',
  progressDot: false
};

var Steps = function (_React$Component) {
  _inherits(Steps, _React$Component);

  function Steps(props) {
    _classCallCheck(this, Steps);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.calcStepOffsetWidth = function () {
      if ((0, _utils.isFlexSupported)()) {
        return;
      }
      // Just for IE9
      var domNode = (0, _reactDom.findDOMNode)(_this);
      if (domNode.children.length > 0) {
        if (_this.calcTimeout) {
          clearTimeout(_this.calcTimeout);
        }
        _this.calcTimeout = setTimeout(function () {
          // +1 for fit edge bug of digit width, like 35.4px
          var lastStepOffsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
          // Reduce shake bug
          if (_this.state.lastStepOffsetWidth === lastStepOffsetWidth || Math.abs(_this.state.lastStepOffsetWidth - lastStepOffsetWidth) <= 3) {
            return;
          }
          _this.setState({ lastStepOffsetWidth: lastStepOffsetWidth });
        });
      }
    };

    _this.state = {
      flexSupported: true,
      lastStepOffsetWidth: 0
    };
    _this.calcStepOffsetWidth = (0, _lodash2["default"])(_this.calcStepOffsetWidth, 150);
    return _this;
  }

  Steps.prototype.componentDidMount = function componentDidMount() {
    this.calcStepOffsetWidth();
    if (!(0, _utils.isFlexSupported)()) {
      this.setState({
        flexSupported: false
      });
    }
  };

  Steps.prototype.componentDidUpdate = function componentDidUpdate() {
    this.calcStepOffsetWidth();
  };

  Steps.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }
    if (this.calcStepOffsetWidth && this.calcStepOffsetWidth.cancel) {
      this.calcStepOffsetWidth.cancel();
    }
  };

  Steps.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        _props$style = _props.style,
        style = _props$style === undefined ? {} : _props$style,
        className = _props.className,
        children = _props.children,
        direction = _props.direction,
        labelPlacement = _props.labelPlacement,
        iconPrefix = _props.iconPrefix,
        status = _props.status,
        size = _props.size,
        current = _props.current,
        progressDot = _props.progressDot,
        initial = _props.initial,
        icons = _props.icons,
        restProps = _objectWithoutProperties(_props, ['prefixCls', 'style', 'className', 'children', 'direction', 'labelPlacement', 'iconPrefix', 'status', 'size', 'current', 'progressDot', 'initial', 'icons']);

    var _state = this.state,
        lastStepOffsetWidth = _state.lastStepOffsetWidth,
        flexSupported = _state.flexSupported;

    var filteredChildren = _react2["default"].Children.toArray(children).filter(function (c) {
      return !!c;
    });
    var lastIndex = filteredChildren.length - 1;
    var adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
    var classString = (0, _classnames2["default"])(prefixCls, prefixCls + '-' + direction, className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-' + size, size), _defineProperty(_classNames, prefixCls + '-label-' + adjustedlabelPlacement, direction === 'horizontal'), _defineProperty(_classNames, prefixCls + '-dot', !!progressDot), _classNames));

    return _react2["default"].createElement(
      'div',
      _extends({ className: classString, style: style }, restProps),
      _react.Children.map(filteredChildren, function (child, index) {
        if (!child) {
          return null;
        }
        var stepNumber = initial + index;
        var childProps = _extends({
          stepNumber: '' + (stepNumber + 1),
          prefixCls: prefixCls,
          iconPrefix: iconPrefix,
          wrapperStyle: style,
          progressDot: progressDot,
          icons: icons
        }, child.props);
        if (!flexSupported && direction !== 'vertical' && index !== lastIndex) {
          childProps.itemWidth = 100 / lastIndex + '%';
          childProps.adjustMarginRight = -Math.round(lastStepOffsetWidth / lastIndex + 1);
        }
        // fix tail color
        if (status === 'error' && index === current - 1) {
          childProps.className = prefixCls + '-next-error';
        }
        if (!child.props.status) {
          if (stepNumber === current) {
            childProps.status = status;
          } else if (stepNumber < current) {
            childProps.status = 'finish';
          } else {
            childProps.status = 'wait';
          }
        }
        return (0, _react.cloneElement)(child, childProps);
      })
    );
  };

  return Steps;
}(_react2["default"].Component);

Steps.defaultProps = defaultProps;
Steps.propTypes = propTypes;

exports["default"] = Steps;
module.exports = exports['default'];