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

var _shallowequal = require('./common/shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-slider.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/slider
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Range = function (_React$Component) {
  _inherits(Range, _React$Component);

  function Range(props) {
    _classCallCheck(this, Range);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    //1.initialValue:初始化，数组值都是min
    //2.defaultValue，value:接收到的数组，都没有初始化 defaultValue = [0,0] = value ，不然各自等于props中的对应值
    //3.trimAlignValue():ensureValueInRange:确定在范围里；ensureValueNotConflict：能否交叉；ensureValuePrecision：返回的小数点精确度
    //4.bounds:=value
    //5.recent:理解成最近操作过的坐标，默认数组最后一个点,但是handle与recent在onstart后一致


    _this.onEnd = function () {
      _this.setState({ handle: null });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var count = props.count,
        min = props.min,
        max = props.max;

    var initialValue = Array.apply(null, Array(count + 1)).map(function () {
      return min;
    });

    var defaultValue = 'defaultValue' in props ? props.defaultValue : initialValue;
    var value = props.value !== undefined ? props.value : defaultValue;

    var bounds = value.map(function (v) {
      return _this.trimAlignValue(v);
    });
    var recent = bounds[0] === max ? 0 : bounds.length - 1;
    _this.state = {
      handle: null,
      recent: recent,
      bounds: bounds
    };
    return _this;
  }

  Range.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;
    if (this.props.min === nextProps.min && this.props.max === nextProps.max && (0, _shallowequal2["default"])(this.props.value, nextProps.value)) {
      return;
    }
    var bounds = this.state.bounds;

    var value = nextProps.value || bounds;
    var nextBounds = value.map(function (v) {
      return _this2.trimAlignValue(v, nextProps);
    });
    if (nextBounds.length === bounds.length && nextBounds.every(function (v, i) {
      return v === bounds[i];
    })) return;

    this.setState({ bounds: nextBounds });
    if (bounds.some(function (v) {
      return utils.isValueOutOfRange(v, nextProps);
    })) {
      this.props.onChange(nextBounds);
    }
  };

  Range.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    } else if (state.handle !== undefined) {
      this.setState({ handle: state.handle });
    }

    var data = _extends({}, this.state, state);
    var changedValue = data.bounds;
    props.onChange(changedValue);
  };

  Range.prototype.onStart = function onStart(position) {
    //1.getValue():this.state.bounds
    //2.calcValueByPos():同slider.js
    //3.getClosestBound()：vs utils.jsx中的getClosestPoints()，返回closestBound为数组坐标
    //4.getBoundNeedMoving()：一般返回closestBound;特殊情况就是closeBound=0的情况1确实是0，2.两点重合来判断点落在左侧还是右侧
    var props = this.props;
    var state = this.state;
    var bounds = this.getValue();
    props.onBeforeChange(bounds);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    var closestBound = this.getClosestBound(value);
    var boundNeedMoving = this.getBoundNeedMoving(value, closestBound);

    this.setState({
      handle: boundNeedMoving,
      recent: boundNeedMoving
    });

    console.log('handle是：' + boundNeedMoving + "recent是：" + boundNeedMoving);
    var prevValue = bounds[boundNeedMoving];
    if (value === prevValue) return;

    var nextBounds = [].concat(_toConsumableArray(state.bounds));
    nextBounds[boundNeedMoving] = value;
    this.onChange({ bounds: nextBounds });
  };

  Range.prototype.onMove = function onMove(e, position) {
    utils.pauseEvent(e);
    var props = this.props;
    var state = this.state;

    var value = this.calcValueByPos(position);
    var oldValue = state.bounds[state.handle];
    if (value === oldValue) return;

    var nextBounds = [].concat(_toConsumableArray(state.bounds));
    nextBounds[state.handle] = value;
    var nextHandle = state.handle;
    if (props.pushable !== false) {
      var originalValue = state.bounds[nextHandle];
      this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
    } else if (props.allowCross) {
      nextBounds.sort(function (a, b) {
        return a - b;
      });
      nextHandle = nextBounds.indexOf(value);
    }
    this.onChange({
      handle: nextHandle,
      bounds: nextBounds
    });
  };

  Range.prototype.onKeyboard = function onKeyboard() {
    (0, _warning2["default"])(true, 'Keyboard support is not yet supported for ranges.');
  };

  Range.prototype.getValue = function getValue() {
    return this.state.bounds;
  };

  Range.prototype.getClosestBound = function getClosestBound(value) {
    //注意都是从0开始算，因此handle会重新计算，哪怕当初操作1，再次操作可能会变成0
    var bounds = this.state.bounds;

    var closestBound = 0;
    for (var i = 1; i < bounds.length - 1; ++i) {
      if (value > bounds[i]) {
        closestBound = i;
      }
    }
    if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
      closestBound = closestBound + 1;
    }
    return closestBound;
  };

  Range.prototype.getBoundNeedMoving = function getBoundNeedMoving(value, closestBound) {
    var _state = this.state,
        bounds = _state.bounds,
        recent = _state.recent;

    var boundNeedMoving = closestBound;
    var isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];
    if (isAtTheSamePoint) {
      boundNeedMoving = recent;
    }

    if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
      boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
    }
    return boundNeedMoving;
  };

  Range.prototype.getLowerBound = function getLowerBound() {
    return this.state.bounds[0];
  };

  Range.prototype.getUpperBound = function getUpperBound() {
    var bounds = this.state.bounds;

    return bounds[bounds.length - 1];
  };

  /**
   * Returns an array of possible slider points, taking into account both
   * `marks` and `step`. The result is cached.
   */


  Range.prototype.getPoints = function getPoints() {
    var _props = this.props,
        marks = _props.marks,
        step = _props.step,
        min = _props.min,
        max = _props.max;

    var cache = this._getPointsCache;
    if (!cache || cache.marks !== marks || cache.step !== step) {
      var pointsObject = _extends({}, marks);
      if (step !== null) {
        for (var point = min; point <= max; point += step) {
          pointsObject[point] = point;
        }
      }
      var points = Object.keys(pointsObject).map(parseFloat);
      points.sort(function (a, b) {
        return a - b;
      });
      this._getPointsCache = { marks: marks, step: step, points: points };
    }
    return this._getPointsCache.points;
  };

  Range.prototype.pushSurroundingHandles = function pushSurroundingHandles(bounds, handle, originalValue) {
    var threshold = this.props.pushable;

    var value = bounds[handle];

    var direction = 0;
    if (bounds[handle + 1] - value < threshold) {
      direction = +1; // push to right
    }
    if (value - bounds[handle - 1] < threshold) {
      direction = -1; // push to left
    }

    if (direction === 0) {
      return;
    }

    var nextHandle = handle + direction;
    var diffToNext = direction * (bounds[nextHandle] - value);
    if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
      // revert to original value if pushing is impossible
      bounds[handle] = originalValue;
    }
  };

  Range.prototype.pushHandle = function pushHandle(bounds, handle, direction, amount) {
    var originalValue = bounds[handle];
    var currentValue = bounds[handle];
    while (direction * (currentValue - originalValue) < amount) {
      if (!this.pushHandleOnePoint(bounds, handle, direction)) {
        // can't push handle enough to create the needed `amount` gap, so we
        // revert its position to the original value
        bounds[handle] = originalValue;
        return false;
      }
      currentValue = bounds[handle];
    }
    // the handle was pushed enough to create the needed `amount` gap
    return true;
  };

  Range.prototype.pushHandleOnePoint = function pushHandleOnePoint(bounds, handle, direction) {
    var points = this.getPoints();
    var pointIndex = points.indexOf(bounds[handle]);
    var nextPointIndex = pointIndex + direction;
    if (nextPointIndex >= points.length || nextPointIndex < 0) {
      // reached the minimum or maximum available point, can't push anymore
      return false;
    }
    var nextHandle = handle + direction;
    var nextValue = points[nextPointIndex];
    var threshold = this.props.pushable;

    var diffToNext = direction * (bounds[nextHandle] - nextValue);
    if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
      // couldn't push next handle, so we won't push this one either
      return false;
    }
    // push the handle
    bounds[handle] = nextValue;
    return true;
  };

  Range.prototype.trimAlignValue = function trimAlignValue(v) {
    var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedProps = _extends({}, this.props, nextProps);
    var valInRange = utils.ensureValueInRange(v, mergedProps);
    var valNotConflict = this.ensureValueNotConflict(valInRange, mergedProps);
    return utils.ensureValuePrecision(valNotConflict, mergedProps);
  };

  Range.prototype.ensureValueNotConflict = function ensureValueNotConflict(val, _ref) {
    var allowCross = _ref.allowCross;

    var state = this.state || {};
    var handle = state.handle,
        bounds = state.bounds;
    /* eslint-disable eqeqeq */

    if (!allowCross && handle != null) {
      //最右边的点只能执行这个，因为handle=bounds.length-1；中间点也走这个判断
      if (handle > 0 && val <= bounds[handle - 1]) {
        console.log("ensureValueNotConflict的handle" + handle + "ensureValueNotConflict的返回数据" + bounds[handle - 1]);
        return bounds[handle - 1];
      }
      //最左边的点只能执行这个，因为handle=0；中间点也走这个判断
      if (handle < bounds.length - 1 && val >= bounds[handle + 1]) {
        console.log("ensureValueNotConflict的handle" + handle + "ensureValueNotConflict的返回数据" + bounds[handle + 1]);
        return bounds[handle + 1];
      }
    }
    /* eslint-enable eqeqeq */
    return val;
  };

  Range.prototype.render = function render() {
    var _this3 = this;

    var _state2 = this.state,
        handle = _state2.handle,
        bounds = _state2.bounds;
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        vertical = _props2.vertical,
        included = _props2.included,
        disabled = _props2.disabled,
        min = _props2.min,
        max = _props2.max,
        handleGenerator = _props2.handle,
        trackStyle = _props2.trackStyle,
        handleStyle = _props2.handleStyle;


    var offsets = bounds.map(function (v) {
      return _this3.calcOffset(v);
    });

    var handleClassName = prefixCls + '-handle';
    var handles = bounds.map(function (v, i) {
      var _classNames;

      return handleGenerator({
        className: (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, handleClassName, true), _defineProperty(_classNames, handleClassName + '-' + (i + 1), true), _classNames)),
        vertical: vertical,
        offset: offsets[i],
        value: v,
        dragging: handle === i,
        index: i,
        min: min,
        max: max,
        disabled: disabled,
        style: handleStyle[i],
        ref: function ref(h) {
          return _this3.saveHandle(i, h);
        }
      });
    });

    var tracks = bounds.slice(0, -1).map(function (_, index) {
      var _classNames2;

      var i = index + 1;
      var trackClassName = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-track', true), _defineProperty(_classNames2, prefixCls + '-track-' + i, true), _classNames2));
      return _react2["default"].createElement(_Track2["default"], {
        className: trackClassName,
        vertical: vertical,
        included: included,
        offset: offsets[i - 1],
        length: offsets[i] - offsets[i - 1],
        style: trackStyle[index],
        key: i
      });
    });

    return { tracks: tracks, handles: handles };
  };

  return Range;
}(_react2["default"].Component);

Range.displayName = 'Range';
Range.propTypes = {
  defaultValue: _propTypes2["default"].arrayOf(_propTypes2["default"].number),
  value: _propTypes2["default"].arrayOf(_propTypes2["default"].number),
  disabled: _propTypes2["default"].bool,

  count: _propTypes2["default"].number,
  pushable: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].number]),
  allowCross: _propTypes2["default"].bool
};
Range.defaultProps = {
  count: 1,
  allowCross: true,
  pushable: false
};
exports["default"] = (0, _createSlider2["default"])(Range);
module.exports = exports['default'];