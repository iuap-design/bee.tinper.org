'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _swiper = require('swiper/dist/js/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultProps = {
    containerClass: 'swiper-container',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide'
};

var propTypes = {
    // react-id-swiper original parameter
    containerClass: _propTypes2["default"].string,
    wrapperClass: _propTypes2["default"].string,
    children: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].element]),
    rebuildOnUpdate: _propTypes2["default"].bool,
    shouldSwiperUpdate: _propTypes2["default"].bool,
    prevButtonCustomizedClass: _propTypes2["default"].string,
    nextButtonCustomizedClass: _propTypes2["default"].string,
    paginationCustomizedClass: _propTypes2["default"].string,
    scrollbarCustomizedClass: _propTypes2["default"].string,
    activeSlideKey: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
    // parallax
    parallax: _propTypes2["default"].bool,
    parallaxEl: _propTypes2["default"].shape({
        el: _propTypes2["default"].string,
        value: _propTypes2["default"].string
    }),

    // swiper parameter
    init: _propTypes2["default"].bool,
    initialSlide: _propTypes2["default"].number,
    direction: _propTypes2["default"].string,
    rtl: _propTypes2["default"].bool,
    speed: _propTypes2["default"].number,
    setWrapperSize: _propTypes2["default"].bool,
    virtualTranslate: _propTypes2["default"].bool,
    width: _propTypes2["default"].number,
    height: _propTypes2["default"].number,
    autoHeight: _propTypes2["default"].bool,
    roundLengths: _propTypes2["default"].bool,
    nested: _propTypes2["default"].bool,
    uniqueNavElements: _propTypes2["default"].bool,
    effect: _propTypes2["default"].string,
    runCallbacksOnInit: _propTypes2["default"].bool,

    // slides grid
    spaceBetween: _propTypes2["default"].number,
    slidesPerView: _propTypes2["default"].any,
    slidesPerColumn: _propTypes2["default"].number,
    slidesPerColumnFill: _propTypes2["default"].string,
    slidesPerGroup: _propTypes2["default"].number,
    centeredSlides: _propTypes2["default"].bool,
    slidesOffsetBefore: _propTypes2["default"].number,
    slidesOffsetAfter: _propTypes2["default"].number,
    normalizeSlideIndex: _propTypes2["default"].bool,

    // grab cursor
    grabCursor: _propTypes2["default"].bool,

    // touches
    touchEventsTarget: _propTypes2["default"].string,
    touchRatio: _propTypes2["default"].number,
    touchAngle: _propTypes2["default"].number,
    simulateTouch: _propTypes2["default"].bool,
    shortSwipes: _propTypes2["default"].bool,
    longSwipes: _propTypes2["default"].bool,
    longSwipesRatio: _propTypes2["default"].number,
    longSwipesMs: _propTypes2["default"].number,
    followFinger: _propTypes2["default"].bool,
    allowTouchMove: _propTypes2["default"].bool,
    threshold: _propTypes2["default"].number,
    touchMoveStopPropagation: _propTypes2["default"].bool,
    iOSEdgeSwipeDetection: _propTypes2["default"].bool,
    iOSEdgeSwipeThreshold: _propTypes2["default"].number,
    touchReleaseOnEdges: _propTypes2["default"].bool,
    passiveListeners: _propTypes2["default"].bool,

    // touch resistance
    resistance: _propTypes2["default"].bool,
    resistanceRatio: _propTypes2["default"].number,

    // swiping / no swiping
    allowSlidePrev: _propTypes2["default"].bool,
    allowSlideNext: _propTypes2["default"].bool,
    noSwiping: _propTypes2["default"].bool,
    noSwipingClass: _propTypes2["default"].string,
    swipeHandler: _propTypes2["default"].any,

    // clicks
    preventClicks: _propTypes2["default"].bool,
    preventClicksPropagation: _propTypes2["default"].bool,
    slideToClickedSlide: _propTypes2["default"].bool,

    // freemode
    freeMode: _propTypes2["default"].bool,
    freeModeMomentum: _propTypes2["default"].bool,
    freeModeMomentumRatio: _propTypes2["default"].number,
    freeModeMomentumVelocityRatio: _propTypes2["default"].number,
    freeModeMomentumBounce: _propTypes2["default"].bool,
    freeModeMomentumBounceRatio: _propTypes2["default"].number,
    freeModeMinimumVelocity: _propTypes2["default"].number,
    freeModeSticky: _propTypes2["default"].bool,

    // progress
    watchSlidesProgress: _propTypes2["default"].bool,
    watchSlidesVisibility: _propTypes2["default"].bool,

    // images
    preloadImages: _propTypes2["default"].bool,
    updateOnImagesReady: _propTypes2["default"].bool,

    // loop
    loop: _propTypes2["default"].bool,
    loopAdditionalSlides: _propTypes2["default"].number,
    loopedSlides: _propTypes2["default"].number,
    loopFillGroupWithBlank: _propTypes2["default"].bool,

    // breakpoints
    breakpoints: _propTypes2["default"].object,

    // observer
    observer: _propTypes2["default"].bool,
    observeParents: _propTypes2["default"].bool,

    // namespace
    containerModifierClass: _propTypes2["default"].string,
    slideClass: _propTypes2["default"].string,
    slideActiveClass: _propTypes2["default"].string,
    slideDuplicatedActiveClass: _propTypes2["default"].string,
    slideVisibleClass: _propTypes2["default"].string,
    slideDuplicateClass: _propTypes2["default"].string,
    slideNextClass: _propTypes2["default"].string,
    slideDuplicatedNextClass: _propTypes2["default"].string,
    slidePrevClass: _propTypes2["default"].string,
    slideDuplicatedPrevClass: _propTypes2["default"].string,

    // autoplay
    autoplay: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].shape({
        delay: _propTypes2["default"].number,
        stopOnLast: _propTypes2["default"].bool,
        disableOnInteraction: _propTypes2["default"].bool
    })]),

    // pagination
    pagination: _propTypes2["default"].shape({
        el: _propTypes2["default"].string,
        type: _propTypes2["default"].string,
        bulletElement: _propTypes2["default"].string,
        dynamicBullets: _propTypes2["default"].bool,
        hideOnClick: _propTypes2["default"].bool,
        clickable: _propTypes2["default"].bool,
        renderBullet: _propTypes2["default"].func,
        renderFraction: _propTypes2["default"].func,
        renderProgressbar: _propTypes2["default"].func,
        renderCustom: _propTypes2["default"].func,
        bulletClass: _propTypes2["default"].string,
        bulletActiveClass: _propTypes2["default"].string,
        modifierClass: _propTypes2["default"].string,
        currentClass: _propTypes2["default"].string,
        totalClass: _propTypes2["default"].string,
        hiddenClass: _propTypes2["default"].string,
        progressbarFillClass: _propTypes2["default"].string,
        clickableClass: _propTypes2["default"].string
    }),

    // scrollbar
    scrollbar: _propTypes2["default"].shape({
        el: _propTypes2["default"].any,
        hide: _propTypes2["default"].bool,
        draggable: _propTypes2["default"].bool,
        snapOnRelease: _propTypes2["default"].bool,
        dragSize: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number])
    }),

    // navigation
    navigation: _propTypes2["default"].shape({
        nextEl: _propTypes2["default"].string,
        prevEl: _propTypes2["default"].string,
        hideOnClick: _propTypes2["default"].bool,
        disabledClass: _propTypes2["default"].string,
        hiddenClass: _propTypes2["default"].string
    }),

    // a11y
    a11y: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].shape({
        prevSlideMessage: _propTypes2["default"].string,
        nextSlideMessage: _propTypes2["default"].string,
        firstSlideMessage: _propTypes2["default"].string,
        lastSlideMessage: _propTypes2["default"].string,
        paginationBulletMessage: _propTypes2["default"].string,
        notificationClass: _propTypes2["default"].string
    })]),

    // zoom
    zoom: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].shape({
        maxRatio: _propTypes2["default"].number,
        minRatio: _propTypes2["default"].number,
        toggle: _propTypes2["default"].bool,
        containerClass: _propTypes2["default"].string,
        zoomedSlideClass: _propTypes2["default"].string
    })]),

    // keyboard
    keyboard: _propTypes2["default"].bool,

    // mousewheel
    mousewheel: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].shape({
        forceToAxis: _propTypes2["default"].bool,
        releaseOnEdges: _propTypes2["default"].bool,
        invert: _propTypes2["default"].bool,
        sensitivity: _propTypes2["default"].number,
        eventsTarged: _propTypes2["default"].string
    })]),

    // hashNavigation
    hashNavigation: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].shape({
        watchState: _propTypes2["default"].bool,
        replaceState: _propTypes2["default"].bool
    })]),

    // history
    history: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].shape({
        key: _propTypes2["default"].string,
        replaceState: _propTypes2["default"].bool
    })]),

    // lazy
    lazy: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].shape({
        loadPrevNext: _propTypes2["default"].bool,
        loadPrevNextAmount: _propTypes2["default"].number,
        loadOnTransitionStart: _propTypes2["default"].bool,
        elementClass: _propTypes2["default"].string,
        loadingClass: _propTypes2["default"].string,
        loadedClass: _propTypes2["default"].string,
        preloaderClass: _propTypes2["default"].string
    })]),

    // fadeEffect
    fadeEffect: _propTypes2["default"].shape({
        crossFade: _propTypes2["default"].bool
    }),

    // coverflowEffect
    coverflowEffect: _propTypes2["default"].shape({
        slideShadows: _propTypes2["default"].bool,
        rotate: _propTypes2["default"].number,
        stretch: _propTypes2["default"].number,
        depth: _propTypes2["default"].number,
        modifier: _propTypes2["default"].number
    }),

    // flipEffect
    flipEffect: _propTypes2["default"].shape({
        slideShadows: _propTypes2["default"].bool,
        limitRotation: _propTypes2["default"].bool
    }),

    // cubeEffect
    cubeEffect: _propTypes2["default"].shape({
        slideShadows: _propTypes2["default"].bool,
        shadow: _propTypes2["default"].bool,
        shadowOffset: _propTypes2["default"].number,
        shadowScale: _propTypes2["default"].number
    }),

    // controller
    controller: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].shape({
        control: _propTypes2["default"].any,
        inverse: _propTypes2["default"].bool,
        by: _propTypes2["default"].string
    })]),

    // events
    on: _propTypes2["default"].shape({
        init: _propTypes2["default"].func,
        beforeDestroy: _propTypes2["default"].func,
        slideChange: _propTypes2["default"].func,
        slideChangeTransitionStart: _propTypes2["default"].func,
        slideChangeTransitionEnd: _propTypes2["default"].func,
        slideNextTransitionStart: _propTypes2["default"].func,
        slideNextTransitionEnd: _propTypes2["default"].func,
        slidePrevTransitionStart: _propTypes2["default"].func,
        slidePrevTransitionEnd: _propTypes2["default"].func,
        transitionStart: _propTypes2["default"].func,
        onTransitionEnd: _propTypes2["default"].func,
        touchStart: _propTypes2["default"].func,
        touchMove: _propTypes2["default"].func,
        touchMoveOpposite: _propTypes2["default"].func,
        sliderMove: _propTypes2["default"].func,
        touchEnd: _propTypes2["default"].func,
        click: _propTypes2["default"].func,
        tap: _propTypes2["default"].func,
        doubleTap: _propTypes2["default"].func,
        imagesReady: _propTypes2["default"].func,
        progress: _propTypes2["default"].func,
        reachBeginning: _propTypes2["default"].func,
        reachEnd: _propTypes2["default"].func,
        fromEdge: _propTypes2["default"].func,
        setTranslate: _propTypes2["default"].func,
        setTransition: _propTypes2["default"].func,
        resize: _propTypes2["default"].func
    })
};

var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.validateClass = function (className) {
            if (typeof className !== 'string') return '';
            return className.replace(/\.|#/g, ' ').trim();
        };

        _this.renderScrollBar = function () {
            if (!_this.props.scrollbar || !_this.props.scrollbar.el) return false;
            var scrollbarCustomizedClass = _this.validateClass(_this.props.scrollbarCustomizedClass);
            var scrollbarClass = _this.validateClass(_this.props.scrollbar.el);

            return _react2["default"].createElement('div', { className: [scrollbarClass, scrollbarCustomizedClass].join(' ') });
        };

        _this.renderPagination = function () {
            if (!_this.props.pagination || !_this.props.pagination.el) return false;
            var paginationCustomizedClass = _this.validateClass(_this.props.paginationCustomizedClass);
            var paginationClass = _this.validateClass(_this.props.pagination.el);

            return _react2["default"].createElement('div', { className: [paginationClass, paginationCustomizedClass].join(' ') });
        };

        _this.renderNextButton = function () {
            if (!_this.props.navigation || !_this.props.navigation.nextEl) return false;
            var nextButtonCustomizedClass = _this.validateClass(_this.props.nextButtonCustomizedClass);
            var nextButtonClass = _this.validateClass(_this.props.navigation.nextEl);

            return _react2["default"].createElement('div', { className: [nextButtonClass, nextButtonCustomizedClass].join(' ') });
        };

        _this.renderPrevButton = function () {
            if (!_this.props.navigation || !_this.props.navigation.prevEl) return false;
            var prevButtonCustomizedClass = _this.validateClass(_this.props.prevButtonCustomizedClass);
            var prevButtonClass = _this.validateClass(_this.props.navigation.prevEl);

            return _react2["default"].createElement('div', { className: [prevButtonClass, prevButtonCustomizedClass].join(' ') });
        };

        _this.renderParallax = function () {
            if (!_this.props.parallax || !_this.props.parallaxEl) return false;

            var parallaxBgClass = _this.validateClass(_this.props.parallaxEl.el);
            return _react2["default"].createElement('div', { className: parallaxBgClass, 'data-swiper-parallax': _this.props.parallaxEl.value });
        };

        _this.renderContent = function (e) {
            if (!e) return null;

            var _this$props = _this.props,
                slideClass = _this$props.slideClass,
                noSwiping = _this$props.noSwiping;

            var noSwipingClass = noSwiping ? 'swiper-no-swiping' : '';
            var childProps = _extends({}, e.props, {
                className: [slideClass, e.props.className, noSwipingClass].join(' ')
            });

            return _react2["default"].cloneElement(e, _extends({}, childProps));
        };

        return _this;
    }

    Carousel.prototype.componentDidMount = function componentDidMount() {
        this.swiper = new _swiper2["default"](_reactDom2["default"].findDOMNode(this), _extends({}, this.props));
    };

    Carousel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
            this.swiper.destroy(true, true);
            this.swiper = new _swiper2["default"](_reactDom2["default"].findDOMNode(this), _extends({}, nextProps));
        }
    };

    Carousel.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return nextProps.children !== this.props.children;
    };

    Carousel.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this2 = this;

        if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
            this.swiper.destroy(true, true);
            this.swiper = new _swiper2["default"](_reactDom2["default"].findDOMNode(this), _extends({}, this.props));
        } else if (this.props.shouldSwiperUpdate && typeof this.swiper !== 'undefined') {
            this.swiper.update();

            var numSlides = this.swiper.slides.length;
            if (numSlides <= this.swiper.activeIndex) {
                var index = Math.max(numSlides - 1, 0);
                this.swiper.slideTo(index);
            }
        }

        if (this.props.activeSlideKey) {
            var activeSlideId = null;
            var id = 0;
            _react2["default"].Children.forEach(this.props.children, function (child) {
                if (child) {
                    if (child.key === _this2.props.activeSlideKey) {
                        activeSlideId = id;
                    }
                    id++;
                }
            });

            if (activeSlideId !== null) {
                this.swiper.slideTo(activeSlideId);
            }
        }
    };

    Carousel.prototype.componentWillUnmount = function componentWillUnmount() {
        if (typeof this.swiper !== 'undefined') this.swiper.destroy(true, true);
        delete this.swiper;
    };

    Carousel.prototype.render = function render() {
        var _props = this.props,
            containerClass = _props.containerClass,
            wrapperClass = _props.wrapperClass,
            children = _props.children,
            rtl = _props.rtl;

        var rtlProp = rtl ? { dir: 'rtl' } : {};

        return _react2["default"].createElement(
            'div',
            _extends({ className: containerClass }, rtlProp),
            this.renderParallax(),
            _react2["default"].createElement(
                'div',
                { className: wrapperClass },
                _react2["default"].Children.map(children, this.renderContent)
            ),
            this.renderPagination(),
            this.renderScrollBar(),
            this.renderNextButton(),
            this.renderPrevButton()
        );
    };

    return Carousel;
}(_react2["default"].Component);

Carousel.defaultProps = defaultProps;

Carousel.propTypes = propTypes;

exports["default"] = Carousel;
module.exports = exports['default'];