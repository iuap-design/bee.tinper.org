'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = createSlider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = require('./addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Steps = require('./Steps');

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = require('./Marks');

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = require('../Handle');

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-slider.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/slider
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      _classCallCheck(this, ComponentEnhancer);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _this.onMouseDown = function (e) {
        //鼠标落下的操作
        //指示当事件被触发时哪个鼠标按键被点击 
        //参数  描述
        //0     规定鼠标左键。
        //1     规定鼠标中键。
        //2     规定鼠标右键。
        if (e.button !== 0) {
          return;
        }
        //1.getMousePosition：获得鼠标的位置 clientY或者pageX
        //2.isEventFromHandle：是直接落下还是拖动handle
        //3.getHandleCenterPosition:获得handle的中点位置
        //4.onStart：在slider.jsx中
        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target); //handle的位置
          _this.dragOffset = position - handlePosition; //鼠标落下的位置-handle的中间位置，这是偏差
          position = handlePosition; //position是
        }
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        utils.pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        //touch事件
        //event.touches，多点触碰时的位置数组，比如缩放手势必须要用两指的触摸点，就是一个数组
        //多点触碰不算
        if (utils.isNotTouchEvent(e)) return;
        //1.getMousePosition：获得鼠标的位置 clientY或者pageX
        //2.isEventFromHandle：是直接落下还是拖动handle
        //3.getHandleCenterPosition:获得handle的中点位置
        //4.onStart：在slider.jsx中
        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        //1.isNotTouchEvent：是不是touch事件
        //2.getTouchPosition：return vertical ? e.touches[0].clientY : e.touches[0].pageX;
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        //对应不同的keycode
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.onFocus = function (e) {
        //Focus事件
        //1.isEventFromHandle：是直接落下还是拖动handle
        //2.getHandleCenterPosition:获得handle的中点位置
        //3.onStart：在slider.jsx中
        var isVertical = _this.props.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);

          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          utils.pauseEvent(e);
        }
      };

      _this.onBlur = function (e) {
        _this.onEnd(e);
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (process.env.NODE_ENV !== 'production') {
        var step = props.step,
            max = props.max,
            min = props.min;

        (0, _warning2["default"])(step && Math.floor(step) === step ? (max - min) % step === 0 : true, 'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)', max - min, step);
      }
      _this.handlesRefs = {};
      return _this;
    }
    //这里是超级关键的：采用高阶组件的写法


    ComponentEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_Component.prototype.componentWillUnmount) _Component.prototype.componentWillUnmount.call(this);
      this.removeDocumentEvents();
    };

    ComponentEnhancer.prototype.addDocumentTouchEvents = function addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = (0, _addEventListener2["default"])(document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = (0, _addEventListener2["default"])(document, 'touchend', this.onEnd);
    };

    ComponentEnhancer.prototype.addDocumentMouseEvents = function addDocumentMouseEvents() {
      this.onMouseMoveListener = (0, _addEventListener2["default"])(document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = (0, _addEventListener2["default"])(document, 'mouseup', this.onEnd);
    };

    ComponentEnhancer.prototype.removeDocumentEvents = function removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    };

    //slider的开始位置


    ComponentEnhancer.prototype.getSliderStart = function getSliderStart() {
      var slider = this.sliderRef;
      var rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    };

    //slider的高度


    ComponentEnhancer.prototype.getSliderLength = function getSliderLength() {
      var slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      var coords = slider.getBoundingClientRect();
      return this.props.vertical ? coords.height : coords.width;
    };

    //计算实际的value值


    ComponentEnhancer.prototype.calcValue = function calcValue(offset) {
      var _props = this.props,
          vertical = _props.vertical,
          min = _props.min,
          max = _props.max;

      var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    };
    //这里才是最终的value


    ComponentEnhancer.prototype.calcValueByPos = function calcValueByPos(position) {
      //mouseposition 或者 handlePosition - slider的top（或者left）；
      var pixelOffset = position - this.getSliderStart();
      //calValue()：radio来算出真正的value
      //trimAlignValue()：在slider.jsx中1.ensureValueInRange 先算出是否可取 v 或者 min 或者 max 2.ensureValuePrecision：来获取真的前进数值closest数值
      var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    };

    ComponentEnhancer.prototype.calcOffset = function calcOffset(value) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max;

      var ratio = (value - min) / (max - min);
      return ratio * 100;
    };

    ComponentEnhancer.prototype.saveHandle = function saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    };

    ComponentEnhancer.prototype.render = function render() {
      var _classNames;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          className = _props3.className,
          marks = _props3.marks,
          dots = _props3.dots,
          step = _props3.step,
          included = _props3.included,
          disabled = _props3.disabled,
          vertical = _props3.vertical,
          min = _props3.min,
          max = _props3.max,
          children = _props3.children,
          style = _props3.style,
          railStyle = _props3.railStyle,
          dotStyle = _props3.dotStyle,
          activeDotStyle = _props3.activeDotStyle;

      var _Component$prototype$ = _Component.prototype.render.call(this),
          tracks = _Component$prototype$.tracks,
          handles = _Component$prototype$.handles;

      var sliderClassName = (0, _classnames2["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-with-marks', Object.keys(marks).length), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _defineProperty(_classNames, prefixCls + '-vertical', vertical), _defineProperty(_classNames, className, className), _classNames));
      return _react2["default"].createElement(
        'div',
        {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        },
        _react2["default"].createElement('div', {
          className: prefixCls + '-rail',
          style: _extends({}, railStyle)
        }),
        tracks,
        _react2["default"].createElement(_Steps2["default"], {
          prefixCls: prefixCls,
          vertical: vertical,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }),
        handles,
        _react2["default"].createElement(_Marks2["default"], {
          className: prefixCls + '-mark',
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        children
      );
    };

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = _extends({}, Component.propTypes, {
    min: _propTypes2["default"].number,
    max: _propTypes2["default"].number,
    step: _propTypes2["default"].number,
    marks: _propTypes2["default"].object,
    included: _propTypes2["default"].bool,
    className: _propTypes2["default"].string,
    prefixCls: _propTypes2["default"].string,
    disabled: _propTypes2["default"].bool,
    children: _propTypes2["default"].any,
    onBeforeChange: _propTypes2["default"].func,
    onChange: _propTypes2["default"].func,
    onAfterChange: _propTypes2["default"].func,
    handle: _propTypes2["default"].func,
    dots: _propTypes2["default"].bool,
    vertical: _propTypes2["default"].bool,
    style: _propTypes2["default"].object,
    //minimumTrackStyle: PropTypes.object, // just for compatibility, will be deperecate
    //maximumTrackStyle: PropTypes.object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].arrayOf(_propTypes2["default"].object)]),
    trackStyle: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].arrayOf(_propTypes2["default"].object)]),
    railStyle: _propTypes2["default"].object,
    dotStyle: _propTypes2["default"].object,
    activeDotStyle: _propTypes2["default"].object
  }), _class.defaultProps = _extends({}, Component.defaultProps, {
    prefixCls: 'u-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = _objectWithoutProperties(_ref, ['index']);

      delete restProps.dragging;
      return _react2["default"].createElement(_Handle2["default"], _extends({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];