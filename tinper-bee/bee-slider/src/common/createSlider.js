/**
* This source code is quoted from rc-slider.
* homepage: https://github.com/react-component/slider
*/
import React from 'react';
import PropTypes from 'prop-types';
import addEventListener from './addEventListener';
import classNames from 'classnames';
import warning from 'warning';

import Steps from './Steps';
import Marks from './Marks';
import Handle from '../Handle';
import * as utils from '../utils';

function noop() {}

export default function createSlider(Component) {
  return class ComponentEnhancer extends Component {
    //这里是超级关键的：采用高阶组件的写法
    static displayName = `ComponentEnhancer(${Component.displayName})`;
    
    static propTypes = {
      ...Component.propTypes,
      min: PropTypes.number,
      max: PropTypes.number,
      step: PropTypes.number,
      marks: PropTypes.object,
      included: PropTypes.bool,
      className: PropTypes.string,
      prefixCls: PropTypes.string,
      disabled: PropTypes.bool,
      children: PropTypes.any,
      onBeforeChange: PropTypes.func,
      onChange: PropTypes.func,
      onAfterChange: PropTypes.func,
      handle: PropTypes.func,
      dots: PropTypes.bool,
      vertical: PropTypes.bool,
      style: PropTypes.object,
      //minimumTrackStyle: PropTypes.object, // just for compatibility, will be deperecate
      //maximumTrackStyle: PropTypes.object, // just for compatibility, will be deperecate
      handleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
      trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
      railStyle: PropTypes.object,
      dotStyle: PropTypes.object,
      activeDotStyle: PropTypes.object,
    };
    static defaultProps = {
      ...Component.defaultProps,
      prefixCls: 'u-slider',
      className: '',
      min: 0,
      max: 100,
      step: 1,
      marks: {},
      handle({ index, ...restProps }) {
        delete restProps.dragging;
        return <Handle {...restProps} key={index} />;
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
      activeDotStyle: {},
    };

    constructor(props) {
      super(props);

      if (process.env.NODE_ENV !== 'production') {
        const { step, max, min } = props;
        warning(
          step && Math.floor(step) === step ? (max - min) % step === 0 : true,
          'Slider[max] - Slider[min] (%s) should be a multiple of Slider[step] (%s)',
          max - min,
          step
        );
      }
      this.handlesRefs = {};
    }

    componentWillUnmount() {
      if (super.componentWillUnmount) super.componentWillUnmount();
      this.removeDocumentEvents();
    }

    onMouseDown = (e) => {
      //鼠标落下的操作
      //指示当事件被触发时哪个鼠标按键被点击 
      //参数  描述
      //0     规定鼠标左键。
      //1     规定鼠标中键。
      //2     规定鼠标右键。
      if (e.button !== 0) { return; }
      //1.getMousePosition：获得鼠标的位置 clientY或者pageX
      //2.isEventFromHandle：是直接落下还是拖动handle
      //3.getHandleCenterPosition:获得handle的中点位置
      //4.onStart：在slider.jsx中
      const isVertical = this.props.vertical;
      let position = utils.getMousePosition(isVertical, e);
      if (!utils.isEventFromHandle(e, this.handlesRefs)) {
        this.dragOffset = 0;
      } else {
        const handlePosition = utils.getHandleCenterPosition(isVertical, e.target);//handle的位置
        this.dragOffset = position - handlePosition;//鼠标落下的位置-handle的中间位置，这是偏差
        position = handlePosition;//position是
      }
      this.onStart(position);
      this.addDocumentMouseEvents();
      utils.pauseEvent(e);
    }

    onTouchStart = (e) => {
      //touch事件
      //event.touches，多点触碰时的位置数组，比如缩放手势必须要用两指的触摸点，就是一个数组
      //多点触碰不算
      if (utils.isNotTouchEvent(e)) return;
      //1.getMousePosition：获得鼠标的位置 clientY或者pageX
      //2.isEventFromHandle：是直接落下还是拖动handle
      //3.getHandleCenterPosition:获得handle的中点位置
      //4.onStart：在slider.jsx中
      const isVertical = this.props.vertical;
      let position = utils.getTouchPosition(isVertical, e);
      if (!utils.isEventFromHandle(e, this.handlesRefs)) {
        this.dragOffset = 0;
      } else {
        const handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
        this.dragOffset = position - handlePosition;
        position = handlePosition;
      }
      this.onStart(position);
      this.addDocumentTouchEvents();
      utils.pauseEvent(e);
    }

    onMouseMove = (e) => {
      if (!this.sliderRef) {
        this.onEnd();
        return;
      }
      const position = utils.getMousePosition(this.props.vertical, e);
      this.onMove(e, position - this.dragOffset);
    }

    onTouchMove = (e) => {
      //1.isNotTouchEvent：是不是touch事件
      //2.getTouchPosition：return vertical ? e.touches[0].clientY : e.touches[0].pageX;
      if (utils.isNotTouchEvent(e) || !this.sliderRef) {
        this.onEnd();
        return;
      }
      const position = utils.getTouchPosition(this.props.vertical, e);
      this.onMove(e, position - this.dragOffset);
    }

    onKeyDown = (e) => {
      //对应不同的keycode
      if (this.sliderRef && utils.isEventFromHandle(e, this.handlesRefs)) {
        this.onKeyboard(e);
      }
    }
    
    onFocus = (e) => {
      //Focus事件
      //1.isEventFromHandle：是直接落下还是拖动handle
      //2.getHandleCenterPosition:获得handle的中点位置
      //3.onStart：在slider.jsx中
      const isVertical = this.props.vertical;

      if (utils.isEventFromHandle(e, this.handlesRefs)) {
        const handlePosition = utils.getHandleCenterPosition(isVertical, e.target);

        this.dragOffset = 0;
        this.onStart(handlePosition);
        utils.pauseEvent(e);
      }
    }

    onBlur = (e) => {
      this.onEnd(e);
    };

    addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = addEventListener(document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = addEventListener(document, 'touchend', this.onEnd);
    }

    addDocumentMouseEvents() {
      this.onMouseMoveListener = addEventListener(document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = addEventListener(document, 'mouseup', this.onEnd);
    }

    removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    }

    
    //slider的开始位置
    getSliderStart() {
      const slider = this.sliderRef;
      const rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    }

    //slider的高度
    getSliderLength() {
      const slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      const coords = slider.getBoundingClientRect();
      return this.props.vertical ? coords.height : coords.width;
    }

    //计算实际的value值
    calcValue(offset) {
      const { vertical, min, max } = this.props;
      const ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      const value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    }
    //这里才是最终的value
    calcValueByPos(position) {
      //mouseposition 或者 handlePosition - slider的top（或者left）；
      const pixelOffset = position - this.getSliderStart(); 
      //calValue()：radio来算出真正的value
      //trimAlignValue()：在slider.jsx中1.ensureValueInRange 先算出是否可取 v 或者 min 或者 max 2.ensureValuePrecision：来获取真的前进数值closest数值
      const nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    }

    calcOffset(value) {
      const { min, max } = this.props;
      const ratio = (value - min) / (max - min);
      return ratio * 100;
    }

    saveSlider = (slider) => {
      this.sliderRef = slider;
    }

    saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    }

    render() {
      const {
        prefixCls,
        className,
        marks,
        dots,
        step,
        included,
        disabled,
        vertical,
        min,
        max,
        children,
        //maximumTrackStyle,
        style,
        railStyle,
        dotStyle,
        activeDotStyle,
      } = this.props;

      const { tracks, handles } = super.render();

      const sliderClassName = classNames(prefixCls, {
        [`${prefixCls}-with-marks`]: Object.keys(marks).length,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-vertical`]: vertical,
        [className]: className,
      });
      return (
        <div
          ref={this.saveSlider}
          className={sliderClassName}
          onTouchStart={disabled ? noop : this.onTouchStart}
          onMouseDown={disabled ? noop : this.onMouseDown}
          onKeyDown={disabled ? noop : this.onKeyDown}
          onFocus={disabled ? noop : this.onFocus}
          onBlur={disabled ? noop : this.onBlur}
          style={style}
        >
          <div
            className={`${prefixCls}-rail`}
            style={{
              //...maximumTrackStyle,
              ...railStyle,
            }}
          />
          {tracks}
          <Steps
            prefixCls={prefixCls}
            vertical={vertical}
            marks={marks}
            dots={dots}
            step={step}
            included={included}
            lowerBound={this.getLowerBound()}
            upperBound={this.getUpperBound()}
            max={max}
            min={min}
            dotStyle={dotStyle}
            activeDotStyle={activeDotStyle}
          />
          {handles}
          <Marks
            className={`${prefixCls}-mark`}
            vertical={vertical}
            marks={marks}
            included={included}
            lowerBound={this.getLowerBound()}
            upperBound={this.getUpperBound()}
            max={max}
            min={min}
          />
          {children}
        </div>
      );
    }
  };
}
