/**
* The source code is quoted from antd.
* homepage: https://github.com/ant-design/ant-design/tree/master/components/carousel
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from './utils';
const SlickCarousel = require('react-slick').default;

const propTypes = {
  autoplay: PropTypes.bool,
  prefixCls: PropTypes.string,
  dotPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  dots: PropTypes.bool,
  easing: PropTypes.string,
  effect: PropTypes.oneOf(['scrollx', 'fade'])
};
const defaultProps = {
  autoplay: false,
  prefixCls: 'u-carousel-figure',
  dotPosition: 'bottom',
  dots: true,
  easing: '	linear',
  effect: 'scrollx'
};

class CarouselFigure extends Component {
    static defaultProps = {
      dots: true,
      arrows: false,
      draggable: false,
    };

    constructor(props) {
      super(props);
      this.onWindowResized = debounce(this.onWindowResized, 500, {
        leading: false,
      });
  
      if ('vertical' in this.props) {
        warning(
          !this.props.vertical,
          'Carousel',
          '`vertical` is deprecated, please use `dotPosition` instead.',
        );
      }
    }
  
    componentDidMount() {
      const { autoplay } = this.props;
      if (autoplay) {
        window.addEventListener('resize', this.onWindowResized);
      }
      // https://github.com/ant-design/ant-design/issues/7191
      this.innerSlider = this.slick && this.slick.innerSlider;
    }
  
    componentDidUpdate(prevProps) {
      if (React.Children.count(this.props.children) !== React.Children.count(prevProps.children)) {
        this.goTo(this.props.initialSlide || 0, false);
      }
    }
  
    componentWillUnmount() {
      const { autoplay } = this.props;
      if (autoplay) {
        window.removeEventListener('resize', this.onWindowResized);
        (this.onWindowResized).cancel();
      }
    }
  
    getDotPosition() {
      if (this.props.dotPosition) {
        return this.props.dotPosition;
      }
      if ('vertical' in this.props) {
        return this.props.vertical ? 'right' : 'bottom';
      }
      return 'bottom';
    }
  
    saveSlick = (node) => {
      this.slick = node;
    };
  
    onWindowResized = () => {
      // Fix https://github.com/ant-design/ant-design/issues/2550
      const { autoplay } = this.props;
      if (autoplay && this.slick && this.slick.innerSlider && this.slick.innerSlider.autoPlay) {
        this.slick.innerSlider.autoPlay();
      }
    };
  
    next() {
      this.slick.slickNext();
    }
  
    prev() {
      this.slick.slickPrev();
    }
  
    goTo(slide, dontAnimate = false) {
      this.slick.slickGoTo(slide, dontAnimate);
    }
  
    renderCarousel = () => {
      const props = {
        ...this.props,
      };
  
      if (props.effect === 'fade') {
        props.fade = true;
      }
  
      let className = props.prefixCls;
      const dotsClass = 'slick-dots';
      const dotPosition = this.getDotPosition();
      props.vertical = dotPosition === 'left' || dotPosition === 'right';
      props.dotsClass = `${dotsClass} ${dotsClass}-${dotPosition || 'bottom'}`;
      if (props.vertical) {
        className = `${className} ${className}-vertical`;
      }
  
      return (
        <div className={className}>
          <SlickCarousel ref={this.saveSlick} {...props} />
        </div>
      );
    };
  
    render() {
      return this.renderCarousel();
    }
}

CarouselFigure.propTypes = propTypes;
CarouselFigure.defaultProps = defaultProps;
export default CarouselFigure;