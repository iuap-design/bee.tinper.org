/**
* This source code is quoted from rc-slider.
* homepage: https://github.com/react-component/slider
*/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from './common/shallowequal';
import warning from 'warning';
import Track from './common/Track';
import createSlider from './common/createSlider';
import * as utils from './utils';

class Range extends React.Component {
  static displayName = 'Range';
  static propTypes = {
    defaultValue: PropTypes.arrayOf(PropTypes.number),
    value: PropTypes.arrayOf(PropTypes.number),
    disabled: PropTypes.bool,

    count: PropTypes.number,
    pushable: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
    ]),
    allowCross: PropTypes.bool,
  };

  static defaultProps = {
    count: 1,
    allowCross: true,
    pushable: false,
  };

  constructor(props) {
    //1.initialValue:初始化，数组值都是min
    //2.defaultValue，value:接收到的数组，都没有初始化 defaultValue = [0,0] = value ，不然各自等于props中的对应值
    //3.trimAlignValue():ensureValueInRange:确定在范围里；ensureValueNotConflict：能否交叉；ensureValuePrecision：返回的小数点精确度
    //4.bounds:=value
    //5.recent:理解成最近操作过的坐标，默认数组最后一个点,但是handle与recent在onstart后一致
    super(props);

    const { count, min, max } = props;
    const initialValue = Array.apply(null, Array(count + 1))
            .map(() => min);

    const defaultValue = 'defaultValue' in props ?
            props.defaultValue : initialValue;
    const value = props.value !== undefined ?
            props.value : defaultValue;

    const bounds = value.map(v => this.trimAlignValue(v));
    const recent = bounds[0] === max ? 0 : bounds.length - 1;
    this.state = {
      handle: null,
      recent,
      bounds,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;
    if (this.props.min === nextProps.min &&
        this.props.max === nextProps.max &&
        shallowEqual(this.props.value, nextProps.value)) {
      return;
    }
    const { bounds } = this.state;
    const value = nextProps.value || bounds;
    const nextBounds = value.map(v => this.trimAlignValue(v, nextProps));
    if (nextBounds.length === bounds.length && nextBounds.every((v, i) => v === bounds[i])) return;

    this.setState({ bounds: nextBounds });
    if (bounds.some(v => utils.isValueOutOfRange(v, nextProps))) {
      this.props.onChange(nextBounds);
    }
  }

  onChange(state) {
    const props = this.props;
    const isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    } else if (state.handle !== undefined) {
      this.setState({ handle: state.handle });
    }

    const data = { ...this.state, ...state };
    const changedValue = data.bounds;
    props.onChange(changedValue);
  }

  onStart(position) {
    //1.getValue():this.state.bounds
    //2.calcValueByPos():同slider.js
    //3.getClosestBound()：vs utils.jsx中的getClosestPoints()，返回closestBound为数组坐标
    //4.getBoundNeedMoving()：一般返回closestBound;特殊情况就是closeBound=0的情况1确实是0，2.两点重合来判断点落在左侧还是右侧
    const props = this.props;
    const state = this.state;
    const bounds = this.getValue();
    props.onBeforeChange(bounds);

    const value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    const closestBound = this.getClosestBound(value);
    const boundNeedMoving = this.getBoundNeedMoving(value, closestBound);

    this.setState({
      handle: boundNeedMoving,
      recent: boundNeedMoving,
    });

    console.log('handle是：'+boundNeedMoving+"recent是："+boundNeedMoving)
    const prevValue = bounds[boundNeedMoving];
    if (value === prevValue) return;

    const nextBounds = [...state.bounds];
    nextBounds[boundNeedMoving] = value;
    this.onChange({ bounds: nextBounds });
  }

  onEnd = () => {
    this.setState({ handle: null });
    this.removeDocumentEvents();
    this.props.onAfterChange(this.getValue());
  }

  onMove(e, position) {
    utils.pauseEvent(e);
    const props = this.props;
    const state = this.state;

    const value = this.calcValueByPos(position);
    const oldValue = state.bounds[state.handle];
    if (value === oldValue) return;

    const nextBounds = [...state.bounds];
    nextBounds[state.handle] = value;
    let nextHandle = state.handle;
    if (props.pushable !== false) {
      const originalValue = state.bounds[nextHandle];
      this.pushSurroundingHandles(nextBounds, nextHandle, originalValue);
    } else if (props.allowCross) {
      nextBounds.sort((a, b) => a - b);
      nextHandle = nextBounds.indexOf(value);
    }
    this.onChange({
      handle: nextHandle,
      bounds: nextBounds,
    });
  }

  onKeyboard() {
    warning(true, 'Keyboard support is not yet supported for ranges.');
  }

  getValue() {
    return this.state.bounds;
  }

  getClosestBound(value) {
    //注意都是从0开始算，因此handle会重新计算，哪怕当初操作1，再次操作可能会变成0
    const { bounds } = this.state;
    let closestBound = 0;
    for (let i = 1; i < bounds.length - 1; ++i) {
      if (value > bounds[i]) { closestBound = i; }
    }
    if (Math.abs(bounds[closestBound + 1] - value) < Math.abs(bounds[closestBound] - value)) {
      closestBound = closestBound + 1;
    }
    return closestBound;
  }

  getBoundNeedMoving(value, closestBound) {
    const { bounds, recent } = this.state;
    let boundNeedMoving = closestBound;
    const isAtTheSamePoint = (bounds[closestBound + 1] === bounds[closestBound]);
    if (isAtTheSamePoint) {
      boundNeedMoving = recent;
    }

    if (isAtTheSamePoint && (value !== bounds[closestBound + 1])) {
      boundNeedMoving = value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
    }
    return boundNeedMoving;
  }

  getLowerBound() {
    return this.state.bounds[0];
  }

  getUpperBound() {
    const { bounds } = this.state;
    return bounds[bounds.length - 1];
  }

  /**
   * Returns an array of possible slider points, taking into account both
   * `marks` and `step`. The result is cached.
   */
  getPoints() {
    const { marks, step, min, max } = this.props;
    const cache = this._getPointsCache;
    if (!cache || cache.marks !== marks || cache.step !== step) {
      const pointsObject = { ...marks };
      if (step !== null) {
        for (let point = min; point <= max; point += step) {
          pointsObject[point] = point;
        }
      }
      const points = Object.keys(pointsObject).map(parseFloat);
      points.sort((a, b) => a - b);
      this._getPointsCache = { marks, step, points };
    }
    return this._getPointsCache.points;
  }

  pushSurroundingHandles(bounds, handle, originalValue) {
    const { pushable: threshold } = this.props;
    const value = bounds[handle];

    let direction = 0;
    if (bounds[handle + 1] - value < threshold) {
      direction = +1; // push to right
    }
    if (value - bounds[handle - 1] < threshold) {
      direction = -1; // push to left
    }

    if (direction === 0) { return; }

    const nextHandle = handle + direction;
    const diffToNext = direction * (bounds[nextHandle] - value);
    if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
      // revert to original value if pushing is impossible
      bounds[handle] = originalValue;
    }
  }

  pushHandle(bounds, handle, direction, amount) {
    const originalValue = bounds[handle];
    let currentValue = bounds[handle];
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
  }

  pushHandleOnePoint(bounds, handle, direction) {
    const points = this.getPoints();
    const pointIndex = points.indexOf(bounds[handle]);
    const nextPointIndex = pointIndex + direction;
    if (nextPointIndex >= points.length || nextPointIndex < 0) {
      // reached the minimum or maximum available point, can't push anymore
      return false;
    }
    const nextHandle = handle + direction;
    const nextValue = points[nextPointIndex];
    const { pushable: threshold } = this.props;
    const diffToNext = direction * (bounds[nextHandle] - nextValue);
    if (!this.pushHandle(bounds, nextHandle, direction, threshold - diffToNext)) {
      // couldn't push next handle, so we won't push this one either
      return false;
    }
    // push the handle
    bounds[handle] = nextValue;
    return true;
  }

  trimAlignValue(v, nextProps = {}) {
    const mergedProps = { ...this.props, ...nextProps };
    const valInRange = utils.ensureValueInRange(v, mergedProps);
    const valNotConflict = this.ensureValueNotConflict(valInRange, mergedProps);
    return utils.ensureValuePrecision(valNotConflict, mergedProps);
  }

  ensureValueNotConflict(val, { allowCross }) {
    const state = this.state || {};
    const { handle, bounds } = state;
    /* eslint-disable eqeqeq */
    if (!allowCross && handle != null) {
      //最右边的点只能执行这个，因为handle=bounds.length-1；中间点也走这个判断
      if (handle > 0 && val <= bounds[handle - 1]) {
        console.log("ensureValueNotConflict的handle"+handle+"ensureValueNotConflict的返回数据"+bounds[handle - 1])
        return bounds[handle - 1];
      }
      //最左边的点只能执行这个，因为handle=0；中间点也走这个判断
      if (handle < bounds.length - 1 && val >= bounds[handle + 1]) {
        console.log("ensureValueNotConflict的handle"+handle+"ensureValueNotConflict的返回数据"+bounds[handle + 1])
        return bounds[handle + 1];
      }
    }
    /* eslint-enable eqeqeq */
    return val;
  }

  render() {
    const {
      handle,
      bounds,
    } = this.state;
    const {
      prefixCls,
      vertical,
      included,
      disabled,
      min,
      max,
      handle: handleGenerator,
      trackStyle,
      handleStyle,
    } = this.props;

    const offsets = bounds.map(v => this.calcOffset(v));

    const handleClassName = `${prefixCls}-handle`;
    const handles = bounds.map((v, i) => handleGenerator({
      className: classNames({
        [handleClassName]: true,
        [`${handleClassName}-${i + 1}`]: true,
      }),
      vertical,
      offset: offsets[i],
      value: v,
      dragging: handle === i,
      index: i,
      min,
      max,
      disabled,
      style: handleStyle[i],
      ref: h => this.saveHandle(i, h),
    }));

    const tracks = bounds.slice(0, -1).map((_, index) => {
      const i = index + 1;
      const trackClassName = classNames({
        [`${prefixCls}-track`]: true,
        [`${prefixCls}-track-${i}`]: true,
      });
      return (
        <Track
          className={trackClassName}
          vertical={vertical}
          included={included}
          offset={offsets[i - 1]}
          length={offsets[i] - offsets[i - 1]}
          style={trackStyle[index]}
          key={i}
        />
      );
    });

    return { tracks, handles };
  }
}

export default createSlider(Range);
