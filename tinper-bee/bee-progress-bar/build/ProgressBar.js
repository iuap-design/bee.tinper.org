'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ROUND_PRECISION = 1000;

/**
 * 自定义验证children是<ProgressBar>的实例.
 * @props 实例后的propTypes
 * @propName 本身propTypes的属性名 即 children
 * @componentName 实例后的children名 期望是ProgressBar
 */
function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];
  if (!children) {
    return null;
  }

  var error = null;

  _react2["default"].Children.forEach(children, function (child) {
    if (error) {
      return;
    }

    if (child.type === ProgressBar) {
      // eslint-disable-line no-use-before-define
      return;
    }

    var childIdentifier = _react2["default"].isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error('Children of ' + componentName + ' can contain only ProgressBar ' + ('components. Found ' + childIdentifier + '.'));
  });

  return error;
}

var propTypes = {
  /**
   *  最小数值
   */
  min: _propTypes2["default"].number,
  /**
   *  有效数值
   */
  now: _propTypes2["default"].number,
  /**
   *  最大数值
   */
  max: _propTypes2["default"].number,
  /**
   *  文字描述标签
   */
  label: _propTypes2["default"].node,
  /**
   *  文字描述标签显示
   */
  srOnly: _propTypes2["default"].bool,
  /**
   *  条纹样式
   */
  striped: _propTypes2["default"].bool,
  /**
   *  激活状态
   */
  active: _propTypes2["default"].bool,
  /**
   *  大小
   */
  size: _propTypes2["default"].oneOf(['xs', 'sm']),
  /**
   *  labelPosition
   */
  labelPosition: _propTypes2["default"].oneOf(['right', 'left', 'center']),
  /**
   *  子组件 必须是ProgressBar
   */
  children: onlyProgressBar,
  /**
   *  子组件 必须是ProgressBar
   */
  style: _propTypes2["default"].object,

  /**
   * @private
   */
  isChild: _propTypes2["default"].bool
};

var defaultProps = {
  min: 0,
  max: 100,
  active: false,
  isChild: false,
  srOnly: false,
  striped: false,
  labelPosition: 'center',
  clsPrefix: 'u-progress'
};

/**
 * 计算实际显示比例 
 * @now 显示的总数值
 * @min 最小数值
 * @max 最大数值
 */
function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar(props) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      now: _this.props.now,
      max: _this.props.max,
      min: _this.props.min,
      active: _this.props.active
    };

    return _this;
  }

  ProgressBar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      now: nextProps.now,
      max: nextProps.max,
      min: nextProps.min,
      active: nextProps.active
    });
  };

  ProgressBar.prototype.renderProgressBar = function renderProgressBar(_ref) {
    var min = _ref.min,
        now = _ref.now,
        max = _ref.max,
        label = _ref.label,
        srOnly = _ref.srOnly,
        striped = _ref.striped,
        active = _ref.active,
        colors = _ref.colors,
        labelPosition = _ref.labelPosition,
        className = _ref.className,
        style = _ref.style,
        clsPrefix = _ref.clsPrefix,
        others = _objectWithoutProperties(_ref, ['min', 'now', 'max', 'label', 'srOnly', 'striped', 'active', 'colors', 'labelPosition', 'className', 'style', 'clsPrefix']);

    var childClsPrefix = clsPrefix + '-bar';
    var classes = {
      active: active
    };
    if (active || striped) {
      classes[childClsPrefix + '-striped'] = true;
    }
    if (colors) {
      classes[childClsPrefix + '-' + colors] = true;
    }

    var classNames = (0, _classnames2["default"])(childClsPrefix, classes);

    //返回不敢wrapper的progressbar
    return _react2["default"].createElement(
      'div',
      _extends({}, others, {
        role: 'progressbar',
        className: (0, _classnames2["default"])(className, classNames),
        style: _extends({ width: getPercentage(now, min, max) + '%' }, style)
      }),
      _react2["default"].createElement(
        'span',
        { className: 'u-progress-label' },
        srOnly ? _react2["default"].createElement(
          'span',
          { className: 'sr-only' },
          label
        ) : label
      )
    );
  };

  ProgressBar.prototype.render = function render() {
    //先处理以组ProgressBar形式使用情况
    var _props = this.props,
        isChild = _props.isChild,
        props = _objectWithoutProperties(_props, ['isChild']);

    // 判断isChild是否为true,如果是true,直接渲染成bar


    if (isChild) {
      return this.renderProgressBar(props);
    }

    var label = props.label,
        srOnly = props.srOnly,
        striped = props.striped,
        colors = props.colors,
        className = props.className,
        style = props.style,
        min = props.min,
        max = props.max,
        now = props.now,
        active = props.active,
        size = props.size,
        labelPosition = props.labelPosition,
        children = props.children,
        clsPrefix = props.clsPrefix,
        wrapperProps = _objectWithoutProperties(props, ['label', 'srOnly', 'striped', 'colors', 'className', 'style', 'min', 'max', 'now', 'active', 'size', 'labelPosition', 'children', 'clsPrefix']);

    /**
     * 如果是单独直接用<ProgressBar /> 走children判断为false语句。
     * 如果以组的形式使用<ProgressBar><ProgressBar now={10} /><ProgressBar now={20}/></ProgressBar> 走判断语句为true，
     * 将children分别加上isChild=true的属性
     */


    return _react2["default"].createElement(
      'div',
      _extends({}, wrapperProps, {
        className: (0, _classnames2["default"])(className, clsPrefix, size)
      }),
      children ? _react2["default"].Children.map(children, function (child) {
        return (0, _react.cloneElement)(child, { isChild: true });
      }) : this.renderProgressBar(_extends({
        min: min, now: now, max: max, label: label, srOnly: srOnly, striped: striped, active: active, colors: colors, labelPosition: labelPosition, className: className, style: style, clsPrefix: clsPrefix }, wrapperProps))
    );
  };

  return ProgressBar;
}(_react2["default"].Component);

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
_extends(ProgressBar, _nprogress2["default"]);

exports["default"] = ProgressBar;
module.exports = exports['default'];