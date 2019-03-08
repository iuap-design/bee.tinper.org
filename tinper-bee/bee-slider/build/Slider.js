'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Track = require('./common/Track');

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = require('./common/createSlider');

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-slider.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/slider
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };

    if (process.env.NODE_ENV !== 'production') {
      (0, _warning2["default"])(!('minimumTrackStyle' in props), 'minimumTrackStyle will be deprecate, please use trackStyle instead.');
      (0, _warning2["default"])(!('maximumTrackStyle' in props), 'maximumTrackStyle will be deprecate, please use railStyle instead.');
    }
    return _this;
  }

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    //只有改变value或者min或者max的时候才会再次渲染
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

    var prevValue = this.state.value;
    var value = nextProps.value !== undefined ? nextProps.value : prevValue;
    var nextValue = this.trimAlignValue(value, nextProps);
    if (nextValue === prevValue) return;

    this.setState({ value: nextValue });
    if (utils.isValueOutOfRange(value, nextProps)) {
      this.props.onChange(nextValue);
    }
  };

  Slider.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    }
    //console.log("改变之后的："+state.value);
    var changedValue = state.value;
    props.onChange(changedValue);
  };

  Slider.prototype.onStart = function onStart(position) {
    //position = getMousePosition 或者 handlePosition
    //1.getValue:return this.state.value
    //2.onBeforeChange:输出开始变化之前的状态
    //3.calcValueByPos：这个是在createSlider.jsx，超级多的方法混合在一起
    //3.1 getSliderStart:slider的top或者left（主持或者水平）， pixelOffset = position - this.getSliderStart()得到mouseposition 或者 handlePosition - slider的top（或者left）
    //3.2 this.calcValue(pixelOffset)：目的得到value，跟ratio有关
    //3.3 this.trimAlignValue(this.calcValue(pixelOffset)):在slider.jsx中1.ensureValueInRange 先算出是否可取 v 或者 min 或者 max 2.ensureValuePrecision：来获取真的前进数值closest数值
    //4.onChange：得到改变之后的值，setState{value}的值并且调用props.onChange
    this.setState({ dragging: true });
    var props = this.props;
    var prevValue = this.getValue();

    props.onBeforeChange(prevValue);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    if (value === prevValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onMove = function onMove(e, position) {
    utils.pauseEvent(e);
    var oldValue = this.state.value;

    var value = this.calcValueByPos(position);
    if (value === oldValue) return;
    this.onChange({ value: value });
  };

  Slider.prototype.onKeyboard = function onKeyboard(e) {
    var valueMutator = utils.getKeyboardValueMutator(e);

    if (valueMutator) {
      utils.pauseEvent(e);
      var state = this.state;
      var oldValue = state.value;
      var mutatedValue = valueMutator(oldValue, this.props);
      var value = this.trimAlignValue(mutatedValue);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  };

  Slider.prototype.getValue = function getValue() {
    return this.state.value;
  };

  Slider.prototype.getLowerBound = function getLowerBound() {
    return this.props.min;
  };

  Slider.prototype.getUpperBound = function getUpperBound() {
    return this.state.value;
  };

  Slider.prototype.trimAlignValue = function trimAlignValue(v) {
    var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedProps = _extends({}, this.props, nextProps);
    var val = utils.ensureValueInRange(v, mergedProps);
    return utils.ensureValuePrecision(val, mergedProps);
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        vertical = _props.vertical,
        included = _props.included,
        disabled = _props.disabled,
        minimumTrackStyle = _props.minimumTrackStyle,
        trackStyle = _props.trackStyle,
        handleStyle = _props.handleStyle,
        min = _props.min,
        max = _props.max,
        handleGenerator = _props.handle;
    var _state = this.state,
        value = _state.value,
        dragging = _state.dragging;

    var offset = this.calcOffset(value); //按照百分制
    //hanleGenerator:进入的是createSlider.jsx的 handle({ index, ...restProps }) 
    //{delete restProps.dragging; return <Handle {...restProps} key={index} />;},
    var handle = handleGenerator({
      className: prefixCls + '-handle',
      vertical: vertical,
      offset: offset,
      value: value,
      dragging: dragging,
      disabled: disabled,
      min: min,
      max: max,
      style: handleStyle[0] || handleStyle,
      ref: function ref(h) {
        return _this2.saveHandle(0, h);
      } //当 WrappedComponent 被渲染后，ref 上的回调函数将会执行
    });

    var _trackStyle = trackStyle[0] || trackStyle;
    var track = _react2["default"].createElement(_Track2["default"], {
      className: prefixCls + '-track',
      vertical: vertical,
      included: included,
      offset: 0,
      length: offset,
      style: _extends({}, minimumTrackStyle, _trackStyle)
    });

    return { tracks: track, handles: handle };
  };

  return Slider;
}(_react2["default"].Component);

Slider.propTypes = {
  defaultValue: _propTypes2["default"].number,
  value: _propTypes2["default"].number,
  disabled: _propTypes2["default"].bool
};
exports["default"] = (0, _createSlider2["default"])(Slider);
module.exports = exports['default'];