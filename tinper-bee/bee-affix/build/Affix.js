'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    container: _propTypes2["default"].object,
    offsetTop: _propTypes2["default"].number,
    horizontal: _propTypes2["default"].bool,
    target: _propTypes2["default"].func, //不对外开放，获取滚动scroll以及resize功能
    onChange: _propTypes2["default"].func, //状态fixed或infixed时候调用
    onTargetChange: _propTypes2["default"].func, //功能只有一个，时时刻刻输出state的状态
    zIndex: _propTypes2["default"].number,
    canHidden: _propTypes2["default"].bool,
    childrenRef: _propTypes2["default"].object
};

var defaultProps = {
    offsetTop: 0,
    horizontal: false,
    // container: document.body,
    target: function target() {
        return window;
    },
    onChange: function onChange(affixed) {
        return {};
    },
    onTargetChange: function onTargetChange(state) {
        return {};
    },
    zIndex: 2,
    canHidden: false,
    childrenRef: null
};

var Affix = function (_Component) {
    _inherits(Affix, _Component);

    function Affix(props) {
        _classCallCheck(this, Affix);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.getContainerDOM = function (nextProps) {
            var container = nextProps ? nextProps.container : _this.props.container;
            if (!container) {
                return document.body;
            }
            if (container != document.body) {
                return _reactDom2["default"].findDOMNode(container);
            }
            return container;
        };

        _this.getInitPosition = function (nextProps, flag) {
            var container = _this.getContainerDOM(nextProps);
            // 20180927children是个变化，所以在nextprops要传入childrenRef，否则直接使用后面的语句
            var thisElm = nextProps && nextProps.childrenRef && _reactDom2["default"].findDOMNode(nextProps.childrenRef) || _reactDom2["default"].findDOMNode(_this);
            _this.setState({
                height: thisElm.offsetHeight,
                width: thisElm.offsetWidth,
                containerHeight: container.offsetHeight,
                containerWidth: container.offsetWidth
            });
            var containerRect = container.getBoundingClientRect();
            var thisElemRect = thisElm.getBoundingClientRect();

            var top = thisElemRect.top,
                left = thisElemRect.left;

            var marginTop = top - containerRect.top;
            var marginLeft = left - containerRect.left;
            _this.setState({
                top: top,
                left: left,
                initTop: flag ? top : _this.state.initTop,
                initLeft: flag ? left : _this.state.initLeft,
                marginTop: marginTop,
                marginLeft: marginLeft
            });
        };

        _this.handleTargetChange = function (evt, type) {
            var container = _this.getContainerDOM(); //是body

            var _container$getBoundin = container.getBoundingClientRect(),
                top = _container$getBoundin.top,
                left = _container$getBoundin.left;

            _this.setState({
                top: top + _this.state.marginTop, //=0是临界值，滚动条使得屏幕顶端正好在affix上面，前者一直变化后者为不变
                left: left + _this.state.marginLeft, //原理同上
                containerHeight: container.offsetHeight,
                containerWidth: container.offsetWidth
            });

            if (_this.state.top <= _this.props.offsetTop) {
                if (_this.state.affixed === false) {
                    _this.props.onChange({ affixed: true, event: evt });
                }
                _this.setState({ affixed: true }); //=true,calculate起作用
            }

            if (_this.state.top > _this.props.offsetTop) {
                if (_this.state.affixed === true) {
                    _this.props.onChange({ affixed: false, event: evt });
                    //新增还原样式
                }
                _this.setState({ affixed: false });
            }

            _this.props.onTargetChange(_this.state);
            _this.getInitPosition(undefined, false);
        };

        _this.calculate = function () {
            var fixStyle = {};
            var boxStyle = {};
            //20171102修改，添加(this.state.top - this.state.marginTop == 0)的判断，谨防height+offsetTop >= containerHeight, handleTargetChange中的
            //this.state.top <= this.props.offsetTop 恒成立，一直有position:affixed
            if (!_this.state.affixed || _this.state.top - _this.state.marginTop == 0) return { fixStyle: fixStyle, boxStyle: boxStyle };
            var h = _this.state.top - _this.state.marginTop + _this.state.containerHeight - _this.state.height;
            if (_this.state.top < _this.props.offsetTop) {
                fixStyle = {
                    position: "fixed",
                    //修改20171102 去掉展示Affix全部内容，若是Affix内容高度大于container可展示，那么Affix只可展示部分
                    // top: this.props.canHidden ? ( h < 0 ? h : Math.min(h, this.props.offsetTop)) : ( h < 0 ? 0 : Math.min(h, this.props.offsetTop)),
                    top: _this.props.canHidden ? h < 0 ? h : Math.min(h, _this.props.offsetTop) : _this.props.offsetTop,
                    left: _this.props.horizontal ? _this.state.initLeft : _this.state.left,
                    height: _this.state.height,
                    width: _this.state.width,
                    zIndex: _this.props.zIndex
                };
                boxStyle = { height: _this.state.height };
            }
            return { fixStyle: fixStyle, boxStyle: boxStyle };
        };

        _this.state = {
            affixed: false,
            initTop: 0,
            initLeft: 0,
            top: 0, //affix距离顶部的距离
            left: 0, //affix距离左边的距离
            marginTop: 0, //top - containerTop
            marginLeft: 0, //left - containerLeft
            height: 0, //affix的高度
            width: 0, //affix的宽度
            containerHeight: 0, //container的高度
            containerWidth: 0, //container的宽度
            containerId: "u-affix-container" + Math.random().toString(26).substring(2, 10)
        };
        _this.calculate = _this.calculate.bind(_this);
        _this.getInitPosition = _this.getInitPosition.bind(_this);
        _this.getContainerDOM = _this.getContainerDOM.bind(_this);
        _this.handleTargetChange = _this.handleTargetChange.bind(_this);
        return _this;
    }

    Affix.prototype.componentDidMount = function componentDidMount() {
        this.getInitPosition(undefined, true);
        var listenTarget = this.props.target();
        if (listenTarget) {
            (0, _utils.addEventListener)(listenTarget, 'resize', this.handleTargetChange);
            (0, _utils.addEventListener)(listenTarget, 'scroll', this.handleTargetChange);
            // listenTarget.addEventListener('resize', e=>this.handleTargetChange(e,'resize'))
            // listenTarget.addEventListener('scroll', e=>this.handleTargetChange(e,'scroll'))
        }
    };

    Affix.prototype.componentWillUnmount = function componentWillUnmount() {
        var listenTarget = this.props.target();
        if (listenTarget) {
            (0, _utils.removeEventListener)(listenTarget, 'resize', this.handleTargetChange);
            (0, _utils.removeEventListener)(listenTarget, 'scroll', this.handleTargetChange);
            // listenTarget.addEventListener('resize', e=>this.handleTargetChange(e,'resize'))
            // listenTarget.addEventListener('scroll', e=>this.handleTargetChange(e,'scroll'))
        }
    };

    /**
     * 获取container
     * @return {[type]} [description]
     */


    /**
     * 第一次 和 每次srcoll和resize也会执行该方法
     * initTop,initLeft，marginTop,marginLeft都是不变的
     * @return {[type]} [description]
     */


    /**
     * [description]主要用于处理scroll以及reseize事件重新计算布局
     * @param  {[object]} evt [scroll或者resize事件]
     * 有两个函数：onChange 和 onTargetChange;
     */


    /**
     * 只有上面的方法handleTargetChange使得affixed=ture才会执行
     * @return {[type]} [description]
     */


    Affix.prototype.render = function render() {
        var _calculate = this.calculate(),
            fixStyle = _calculate.fixStyle,
            boxStyle = _calculate.boxStyle;

        var _props = this.props,
            offsetTop = _props.offsetTop,
            horizontal = _props.horizontal,
            container = _props.container,
            target = _props.target,
            onChange = _props.onChange,
            onTargetChange = _props.onTargetChange,
            zIndex = _props.zIndex,
            canHidden = _props.canHidden,
            childrenRef = _props.childrenRef,
            others = _objectWithoutProperties(_props, ['offsetTop', 'horizontal', 'container', 'target', 'onChange', 'onTargetChange', 'zIndex', 'canHidden', 'childrenRef']);

        return _react2["default"].createElement(
            'div',
            _extends({}, others, { className: (0, _classnames2["default"])("u-affix-container", this.props.className), id: this.state.containerId, style: boxStyle }),
            _react2["default"].createElement(
                'div',
                { className: 'u-affix-content', style: fixStyle },
                this.props.children
            )
        );
    };

    return Affix;
}(_react.Component);

Affix.propTypes = propTypes;

Affix.defaultProps = defaultProps;
exports["default"] = Affix;
module.exports = exports['default'];