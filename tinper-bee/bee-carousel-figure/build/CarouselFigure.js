'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * The source code is quoted from antd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/ant-design/ant-design/tree/master/components/carousel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var SlickCarousel = require('react-slick')["default"];

var propTypes = {
  autoplay: _propTypes2["default"].bool,
  prefixCls: _propTypes2["default"].string,
  dotPosition: _propTypes2["default"].oneOf(['top', 'bottom', 'left', 'right']),
  dots: _propTypes2["default"].bool,
  easing: _propTypes2["default"].string,
  effect: _propTypes2["default"].oneOf(['scrollx', 'fade'])
};
var defaultProps = {
  autoplay: false,
  prefixCls: 'u-carousel-figure',
  dotPosition: 'bottom',
  dots: true,
  easing: '	linear',
  effect: 'scrollx'
};

var CarouselFigure = function (_Component) {
  _inherits(CarouselFigure, _Component);

  function CarouselFigure(props) {
    _classCallCheck(this, CarouselFigure);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.onWindowResized = (0, _utils2["default"])(_this.onWindowResized, 500, {
      leading: false
    });

    if ('vertical' in _this.props) {
      warning(!_this.props.vertical, 'Carousel', '`vertical` is deprecated, please use `dotPosition` instead.');
    }
    return _this;
  }

  CarouselFigure.prototype.componentDidMount = function componentDidMount() {
    var autoplay = this.props.autoplay;

    if (autoplay) {
      window.addEventListener('resize', this.onWindowResized);
    }
    // https://github.com/ant-design/ant-design/issues/7191
    this.innerSlider = this.slick && this.slick.innerSlider;
  };

  CarouselFigure.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (_react2["default"].Children.count(this.props.children) !== _react2["default"].Children.count(prevProps.children)) {
      this.goTo(this.props.initialSlide || 0, false);
    }
  };

  CarouselFigure.prototype.componentWillUnmount = function componentWillUnmount() {
    var autoplay = this.props.autoplay;

    if (autoplay) {
      window.removeEventListener('resize', this.onWindowResized);
      this.onWindowResized.cancel();
    }
  };

  CarouselFigure.prototype.getDotPosition = function getDotPosition() {
    if (this.props.dotPosition) {
      return this.props.dotPosition;
    }
    if ('vertical' in this.props) {
      return this.props.vertical ? 'right' : 'bottom';
    }
    return 'bottom';
  };

  CarouselFigure.prototype.next = function next() {
    this.slick.slickNext();
  };

  CarouselFigure.prototype.prev = function prev() {
    this.slick.slickPrev();
  };

  CarouselFigure.prototype.goTo = function goTo(slide) {
    var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    this.slick.slickGoTo(slide, dontAnimate);
  };

  CarouselFigure.prototype.render = function render() {
    return this.renderCarousel();
  };

  return CarouselFigure;
}(_react.Component);

CarouselFigure.defaultProps = {
  dots: true,
  arrows: false,
  draggable: false
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.saveSlick = function (node) {
    _this2.slick = node;
  };

  this.onWindowResized = function () {
    // Fix https://github.com/ant-design/ant-design/issues/2550
    var autoplay = _this2.props.autoplay;

    if (autoplay && _this2.slick && _this2.slick.innerSlider && _this2.slick.innerSlider.autoPlay) {
      _this2.slick.innerSlider.autoPlay();
    }
  };

  this.renderCarousel = function () {
    var props = _extends({}, _this2.props);

    if (props.effect === 'fade') {
      props.fade = true;
    }

    var className = props.prefixCls;
    var dotsClass = 'slick-dots';
    var dotPosition = _this2.getDotPosition();
    props.vertical = dotPosition === 'left' || dotPosition === 'right';
    props.dotsClass = dotsClass + ' ' + dotsClass + '-' + (dotPosition || 'bottom');
    if (props.vertical) {
      className = className + ' ' + className + '-vertical';
    }

    return _react2["default"].createElement(
      'div',
      { className: className },
      _react2["default"].createElement(SlickCarousel, _extends({ ref: _this2.saveSlick }, props))
    );
  };
};

CarouselFigure.propTypes = propTypes;
CarouselFigure.defaultProps = defaultProps;
exports["default"] = CarouselFigure;
module.exports = exports['default'];