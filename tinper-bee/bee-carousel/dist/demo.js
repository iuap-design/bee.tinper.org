/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeLayout = __webpack_require__(3);
	
	var _beePanel = __webpack_require__(9);
	
	var _beeDrawer = __webpack_require__(77);
	
	var _beeDrawer2 = _interopRequireDefault(_beeDrawer);
	
	var _beeClipboard = __webpack_require__(91);
	
	var _beeClipboard2 = _interopRequireDefault(_beeClipboard);
	
	var _src = __webpack_require__(155);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Demo1 = __webpack_require__(158);var Demo2 = __webpack_require__(159);var Demo3 = __webpack_require__(160);var Demo4 = __webpack_require__(161);var Demo5 = __webpack_require__(162);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 基础轮播", "code": "/**\n *\n * @title 基础轮播\n * @description 可定制页码\n */\nimport React from 'react';\nimport Carousel from \"tinper-bee/lib/Carousel\";\n\nclass Demo1 extends React.Component {\n  render() {\n    const params = {\n      pagination: {   //配置页码参数 其中 renderBullet 是自定义页码\n        el: '.swiper-pagination',\n        clickable: true,  //可点击页码切换swiper\n         renderBullet: function (index, className) {\n\t        return '<span class=\"' + className + '\">' + (index + 1) + '</span>';\n\t      },\n        \n      },\n      navigation: {   //配置上一页下一页按钮\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      spaceBetween: 20  //配置两页之前切换距离\n    }\n\n    return(\n    \t<div id=\"customized-pagination\">\n    \t\t<Carousel {...params}>\n\t        <div className=\"carousel-demo-1\"></div>\n\t        <div className=\"carousel-demo-2\"></div>\n\t        <div className=\"carousel-demo-3\"></div>\n\t        <div className=\"carousel-demo-4\"></div>\n\t        <div className=\"carousel-demo-5\"></div>\n      \t</Carousel>\n    \t</div>\n      \n    )\n  }\n}\n\n", "desc": " 可定制页码" }, { "example": _react2['default'].createElement(Demo2, null), "title": " 旋转轮播", "code": "/**\n *\n * @title 旋转轮播\n * @description 切换动画是3d翻转形式\n *\n */\nimport React from 'react';\nimport Carousel from \"tinper-bee/lib/Carousel\";\n\nclass Demo2 extends React.Component {\n  render() {\n    const params = {\n      pagination: {\n        el: '.swiper-pagination',\n        type: 'bullets',\n        clickable: true\n      },\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      },\n      spaceBetween: 30,\n      effect: 'flip' //设置3d翻转\n    }\n\n    return(\n        <div className=\"carousel-demo-two\">\n            <Carousel {...params}>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n            </Carousel>\n        </div>\n    )\n  }\n}\n\n", "desc": " 切换动画是3d翻转形式" }, { "example": _react2['default'].createElement(Demo3, null), "title": " 进度条轮播", "code": "\n/**\n *\n * @title 进度条轮播\n * @description 切换进度可在上边1️以进度条的形式展现\n *\n */\nimport React from 'react';\nimport Carousel from \"tinper-bee/lib/Carousel\";\n\nclass Demo3 extends React.Component {\n  render() {\n    const params = {\n      pagination: {\n        el: '.swiper-pagination',\n        type: 'progressbar',  //将页码改成进度条形式\n      },\n      navigation: {\n        nextEl: '.swiper-button-next',\n        prevEl: '.swiper-button-prev'\n      }\n    }\n\n    return(\n        <div className=\"carousel-demo-three\">\n            <Carousel {...params}>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n            </Carousel>\n        </div>\n    )\n  }\n}\n\n", "desc": " 切换进度可在上边1️以进度条的形式展现" }, { "example": _react2['default'].createElement(Demo4, null), "title": " 触摸轮播", "code": "\n/**\n *\n * @title 触摸轮播\n * @description 触发方式多用于手机端 最简单的触摸模式\n *\n */\nimport React from 'react';\nimport Carousel from \"tinper-bee/lib/Carousel\";\n\nclass Demo4 extends React.Component {\n  render() {\n    const params = {\n      pagination: {\n        el: '.swiper-pagination',\n      },\n      spaceBetween: 30\n    }\n\n    return(\n        <div className=\"carousel-demo-four\">\n            <Carousel {...params}>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n            </Carousel>\n        </div>\n\n    )\n  }\n}\n\n", "desc": " 触发方式多用于手机端 最简单的触摸模式" }, { "example": _react2['default'].createElement(Demo5, null), "title": " 响应式轮播", "code": "\n/**\n *\n * @title 响应式轮播\n * @description 根据滑动的力度，定位轮播当前active的进度\n */\nimport React from 'react';\nimport Carousel from \"tinper-bee/lib/Carousel\";\n\nclass Demo5 extends React.Component {\n  render() {\n    const params = {\n      pagination: {\n        el: '.swiper-pagination',\n        clickable: true,\n      },\n      slidesPerView: 5,  //单屏显示几个slider\n      spaceBetween: 50,\n      breakpoints: {  //设置不同尺寸下 单屏显示几个slider \n        1024: {\n          slidesPerView: 4,\n          spaceBetween: 40\n        },\n        768: {\n          slidesPerView: 3,\n          spaceBetween: 30\n        },\n        640: {\n          slidesPerView: 2,\n          spaceBetween: 20\n        },\n        320: {\n          slidesPerView: 1,\n          spaceBetween: 10\n        }\n      }\n    }\n\n    return(\n        <div className=\"carousel-demo-five\">\n            <Carousel {...params}>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n                <div className=\"carousel-demo-1\"></div>\n                <div className=\"carousel-demo-2\"></div>\n                <div className=\"carousel-demo-3\"></div>\n                <div className=\"carousel-demo-4\"></div>\n                <div className=\"carousel-demo-5\"></div>\n            </Carousel>\n        </div>\n    )\n  }\n}\n\n", "desc": " 根据滑动的力度，定位轮播当前active的进度" }];
	
	var Demo = function (_Component) {
	    _inherits(Demo, _Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.handleClick = function () {
	            _this.setState({ open: !_this.state.open });
	        };
	
	        _this.fCloseDrawer = function () {
	            _this.setState({
	                open: false
	            });
	        };
	
	        _this.state = {
	            open: false
	        };
	        return _this;
	    }
	
	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc,
	            scss_code = _props.scss_code;
	
	
	        var header = _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'p',
	                { className: 'component-title' },
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                'span',
	                { className: 'component-code', onClick: this.handleClick },
	                ' \u67E5\u770B\u6E90\u7801 ',
	                _react2['default'].createElement('i', { className: 'uf uf-arrow-right' }),
	                ' '
	            )
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12, id: title.trim(), className: 'component-demo' },
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { header: header },
	                example
	            ),
	            _react2['default'].createElement(
	                _beeDrawer2['default'],
	                { className: 'component-drawerc', title: title, show: this.state.open, placement: 'right', onClose: this.fCloseDrawer },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'component-code-copy' },
	                    ' JS\u4EE3\u7801',
	                    _react2['default'].createElement(_beeClipboard2['default'], { action: 'copy', text: code })
	                ),
	                _react2['default'].createElement(
	                    'pre',
	                    { className: 'pre-js' },
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                ),
	                !!scss_code ? _react2['default'].createElement(
	                    'div',
	                    { className: 'component-code-copy copy-css' },
	                    ' SCSS\u4EE3\u7801',
	                    _react2['default'].createElement(_beeClipboard2['default'], { action: 'copy', text: scss_code })
	                ) : null,
	                !!scss_code ? _react2['default'].createElement(
	                    'pre',
	                    { className: 'pre-css' },
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs css' },
	                        scss_code
	                    )
	                ) : null
	            )
	        );
	    };
	
	    return Demo;
	}(_react.Component);
	
	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);
	
	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);
	
	        return _possibleConstructorReturn(this, _Component2.call(this, props));
	    }
	
	    DemoGroup.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            DemoArray.map(function (child, index) {
	
	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, scss_code: child.scss_code, desc: child.desc, key: index });
	            })
	        );
	    };
	
	    return DemoGroup;
	}(_react.Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;
	
	var _Col2 = __webpack_require__(4);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	var _Row2 = __webpack_require__(7);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	var _Layout = __webpack_require__(8);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
	
	  /**
	   * xs显示列数
	   */
	  xs: _propTypes2["default"].number,
	  /**
	   * sm显示列数
	   */
	  sm: _propTypes2["default"].number,
	  /**
	   * md显示列数
	   */
	  md: _propTypes2["default"].number,
	  /**
	   * lg显示列数
	   */
	  lg: _propTypes2["default"].number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _propTypes2["default"].number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _propTypes2["default"].number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _propTypes2["default"].number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _propTypes2["default"].number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _propTypes2["default"].number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _propTypes2["default"].number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _propTypes2["default"].number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _propTypes2["default"].number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _propTypes2["default"].number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _propTypes2["default"].number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _propTypes2["default"].number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _propTypes2["default"].number
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-col'
	};
	
	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
	
	var Col = function (_Component) {
	  _inherits(Col, _Component);
	
	  function Col() {
	    _classCallCheck(this, Col);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);
	
	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];
	
	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }
	
	        delete others[propName];
	      }
	
	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, className)
	      }, others),
	      this.props.children
	    );
	  };
	
	  return Col;
	}(_react.Component);
	
	Col.defaultProps = defaultProps;
	Col.propTypes = propTypes;
	
	exports["default"] = Col;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = PropTypes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-row'
	};
	
	var Row = function (_Component) {
	  _inherits(Row, _Component);
	
	  function Row() {
	    _classCallCheck(this, Row);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);
	
	    var bsclass = '' + clsPrefix;
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Row;
	}(_react.Component);
	
	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;
	
	exports["default"] = Row;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _propTypes2["default"].bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  fluid: false,
	  clsPrefix: 'u-container'
	};
	
	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);
	
	  function Con() {
	    _classCallCheck(this, Con);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Con.prototype.render = function render() {
	    var _tbclass;
	
	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);
	
	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);
	
	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
	      }),
	      this.props.children
	    );
	  };
	
	  return Con;
	}(_react2["default"].Component);
	
	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;
	
	exports["default"] = Con;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;
	
	var _Panel2 = __webpack_require__(10);
	
	var _Panel3 = _interopRequireDefault(_Panel2);
	
	var _PanelGroup2 = __webpack_require__(76);
	
	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeTransition = __webpack_require__(11);
	
	var _beeMessage = __webpack_require__(64);
	
	var _beeMessage2 = _interopRequireDefault(_beeMessage);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _copyToClipboard = __webpack_require__(74);
	
	var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否添加折叠
	  collapsible: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  //头部组件
	  header: _propTypes2["default"].node,
	  headerStyle: _propTypes2["default"].object,
	  id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	  headerContent: _propTypes2["default"].bool,
	  //footer组件
	  footer: _propTypes2["default"].node,
	  footerStyle: _propTypes2["default"].object,
	  //默认是否打开
	  defaultExpanded: _propTypes2["default"].bool,
	  //是否打开
	  expanded: _propTypes2["default"].bool,
	  //每个panel的标记
	  eventKey: _propTypes2["default"].any,
	  headerRole: _propTypes2["default"].string,
	  panelRole: _propTypes2["default"].string,
	  //颜色
	  colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),
	
	  // From Collapse.的扩展动画
	  onEnter: _propTypes2["default"].func,
	  onEntering: _propTypes2["default"].func,
	  onEntered: _propTypes2["default"].func,
	  onExit: _propTypes2["default"].func,
	  onExiting: _propTypes2["default"].func,
	  onExited: _propTypes2["default"].func,
	  //是否可复制内容
	  copyable: _propTypes2["default"].bool
	};
	
	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};
	
	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);
	
	  function Panel(props, context) {
	    _classCallCheck(this, Panel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);
	
	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }
	
	  //头部点击事件
	
	
	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };
	
	  //渲染panelheader
	
	
	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';
	
	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }
	
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };
	
	  //如果使用链接，渲染为a标签
	
	
	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };
	
	  //复制代码，弹出提示信息
	
	
	  Panel.prototype.copyDemo = function copyDemo(e) {
	    var panelTarget = e.target.parentNode;
	    var clipBoardContent = panelTarget.firstChild.innerText;
	    (0, _copyToClipboard2["default"])(clipBoardContent);
	    _beeMessage2["default"].create({ content: '复制成功！', color: 'success', duration: 2 });
	  };
	
	  //如果有折叠动画，渲染折叠动画
	
	
	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, copyable, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix, copyable)
	      )
	    );
	  };
	
	  //渲染panelbody
	
	
	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix, copyable) {
	    var self = this;
	    var children = [];
	    var bodyChildren = [];
	
	    var bodyClassName = clsPrefix + '-body';
	    //添加到body的children中
	    function maybeAddBody(self) {
	      if (!bodyChildren.length) {
	        return;
	      }
	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren,
	        copyable && _react2["default"].createElement('i', { className: 'uf uf-files-o', onClick: self.copyDemo })
	      ));
	      bodyChildren = [];
	    }
	
	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody(self);
	
	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));
	
	        return;
	      }
	      bodyChildren.push(child);
	    });
	
	    maybeAddBody(self);
	
	    return children;
	  };
	
	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        headerContent = _props.headerContent,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        copyable = _props.copyable,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect', 'copyable']);
	
	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;
	
	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);
	
	    copyable === false ? false : true;
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, copyable, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix, copyable),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };
	
	  return Panel;
	}(_react2["default"].Component);
	
	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;
	
	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;
	
	var _Transition2 = __webpack_require__(12);
	
	var _Transition3 = _interopRequireDefault(_Transition2);
	
	var _Collapse2 = __webpack_require__(16);
	
	var _Collapse3 = _interopRequireDefault(_Collapse2);
	
	var _Fade2 = __webpack_require__(63);
	
	var _Fade3 = _interopRequireDefault(_Fade2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _properties = __webpack_require__(13);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _on = __webpack_require__(15);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionEndEvent = _properties2["default"].end;
	
	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;
	
	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _propTypes2["default"].string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _propTypes2["default"].string,
	
	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
	};
	
	function noop() {}
	
	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	/**
	 * 动画组件
	 */
	
	var Transition = function (_Component) {
	  _inherits(Transition, _Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };
	
	    _this.nextCallback = null;
	    return _this;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;
	
	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	
	      return;
	    }
	
	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;
	
	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    // 这里接收新props
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);
	
	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      if (transitionEndEvent == undefined) {
	        this.nextCallback();
	      } else {
	        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      }
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	}(_react.Component);
	
	Transition.propTypes = propTypes;
	
	Transition.defaultProps = defaultProps;
	
	exports["default"] = Transition;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;
	
	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	
	
	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';
	
	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}
	
	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	
	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };
	
	  var vendors = Object.keys(vendorMap);
	
	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	
	  style = null;
	
	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var on = function on() {};
	if (_inDOM2.default) {
	  on = function () {
	
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}
	
	exports.default = on;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(17);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(12);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _capitalize = __webpack_require__(25);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	
	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}
	
	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];
	
	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}
	
	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _propTypes2["default"].func,
	
	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _propTypes2["default"].oneOfType([_propTypes2["default"].oneOf(['height', 'width']), _propTypes2["default"].func]),
	
	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _propTypes2["default"].func,
	
	  /**
	   * ARIA role of collapsible element
	   */
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};
	
	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);
	
	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }
	
	  /* -- Expanding -- */
	
	
	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };
	
	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };
	
	  /* -- Collapsing -- */
	
	
	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };
	
	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };
	
	  // for testing
	
	
	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };
	
	  Collapse.prototype.render = function render() {
	    var _props = this.props,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);
	
	    delete props.dimension;
	    delete props.getDimensionValue;
	
	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);
	
	    var classes = {
	      width: this._dimension() === 'width'
	    };
	
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };
	
	  return Collapse;
	}(_react2["default"].Component);
	
	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;
	
	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;
	
	var _camelizeStyle = __webpack_require__(18);
	
	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);
	
	var _hyphenateStyle = __webpack_require__(20);
	
	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);
	
	var _getComputedStyle2 = __webpack_require__(22);
	
	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);
	
	var _removeStyle = __webpack_require__(23);
	
	var _removeStyle2 = _interopRequireDefault(_removeStyle);
	
	var _properties = __webpack_require__(13);
	
	var _isTransform = __webpack_require__(24);
	
	var _isTransform2 = _interopRequireDefault(_isTransform);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;
	
	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }
	
	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
	    } else if ((0, _isTransform2.default)(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
	    }
	  });
	
	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }
	
	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;
	
	var _camelize = __webpack_require__(19);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var rHyphen = /-(.)/g;
	
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;
	
	var _hyphenate = __webpack_require__(21);
	
	var _hyphenate2 = _interopRequireDefault(_hyphenate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */
	
	function hyphenateStyleName(string) {
	  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenate;
	
	var rUpper = /([A-Z])/g;
	
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;
	
	var _camelizeStyle = __webpack_require__(18);
	
	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	
	      prop = (0, _camelizeStyle2.default)(prop);
	
	      if (prop == 'float') prop = 'styleFloat';
	
	      var current = node.currentStyle[prop] || null;
	
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;
	
	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';
	
	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	
	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;
	
	var _all2 = __webpack_require__(27);
	
	var _all3 = _interopRequireDefault(_all2);
	
	var _componentOrElement2 = __webpack_require__(29);
	
	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);
	
	var _deprecated2 = __webpack_require__(30);
	
	var _deprecated3 = _interopRequireDefault(_deprecated2);
	
	var _elementType2 = __webpack_require__(33);
	
	var _elementType3 = _interopRequireDefault(_elementType2);
	
	var _isRequiredForA11y2 = __webpack_require__(34);
	
	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);
	
	var _splitComponent2 = __webpack_require__(35);
	
	var _splitComponent3 = _interopRequireDefault(_splitComponent2);
	
	var _createChainedFunction2 = __webpack_require__(36);
	
	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);
	
	var _keyCode = __webpack_require__(37);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _contains2 = __webpack_require__(38);
	
	var _contains3 = _interopRequireDefault(_contains2);
	
	var _addEventListener2 = __webpack_require__(39);
	
	var _addEventListener3 = _interopRequireDefault(_addEventListener2);
	
	var _cssAnimation2 = __webpack_require__(44);
	
	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);
	
	var _toArray2 = __webpack_require__(48);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _Align2 = __webpack_require__(49);
	
	var _Align3 = _interopRequireDefault(_Align2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';
	
	exports.Align = _Align3.default;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = all;
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }
	
	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var error = null;
	
	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }
	
	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });
	
	    return error;
	  }
	
	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	// Mostly taken from ReactPropTypes.
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }
	
	      return null;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }
	
	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }
	
	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = deprecated;
	
	var _warning = __webpack_require__(31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {};
	
	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;
	
	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
	
	      warned[messageKey] = true;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}
	
	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}
	
	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(28);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = splitComponentProps;
	function _objectEntries(obj) {
	  var entries = [];
	  var keys = Object.keys(obj);
	
	  for (var k = 0; k < keys.length; ++k) {
	    entries.push([keys[k], obj[keys[k]]]);
	  }return entries;
	}
	
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;
	
	  var parentProps = {};
	  var childProps = {};
	
	  _objectEntries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];
	
	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });
	
	  return [parentProps, childProps];
	}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(40);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addEventListener;
	
	var _EventObject = __webpack_require__(41);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2["default"](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _EventBaseObject = __webpack_require__(42);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(43);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = void 0;
	    var deltaY = void 0;
	    var delta = void 0;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = void 0;
	    var doc = void 0;
	    var body = void 0;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2["default"].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = void 0;
	  var l = void 0;
	  var prop = void 0;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2["default"].prototype;
	
	(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports["default"] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Event = __webpack_require__(45);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(46);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports.default = cssAnimation;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports.default = TransitionEvents;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(47);
	} catch (err) {
	  var index = __webpack_require__(47);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = toArray;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(50);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _addEventListener = __webpack_require__(39);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import isWindow from './isWindow';
	
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	
	function buffer(fn, ms) {
	  var timer = void 0;
	
	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }
	
	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }
	
	  bufferFn.clear = clear;
	
	  return bufferFn;
	}
	
	var propTypes = {
	  childrenProps: _propTypes2.default.object,
	  align: _propTypes2.default.object.isRequired,
	  target: _propTypes2.default.func,
	  onAlign: _propTypes2.default.func,
	  monitorBufferTime: _propTypes2.default.number,
	  monitorWindowResize: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  children: _propTypes2.default.any
	};
	
	var defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	var Align = function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    return _this;
	  }
	
	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      this.forceAlign();
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };
	
	  Align.prototype.render = function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;
	
	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  };
	
	  return Align;
	}(_react2.default.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.startMonitorWindowResize = function () {
	    if (!_this2.resizeHandler) {
	      _this2.bufferMonitor = buffer(_this2.forceAlign, _this2.props.monitorBufferTime);
	      _this2.resizeHandler = (0, _addEventListener2.default)(window, 'resize', _this2.bufferMonitor);
	    }
	  };
	
	  this.stopMonitorWindowResize = function () {
	    if (_this2.resizeHandler) {
	      _this2.bufferMonitor.clear();
	      _this2.resizeHandler.remove();
	      _this2.resizeHandler = null;
	    }
	  };
	
	  this.forceAlign = function () {
	    var props = _this2.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(_this2);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  };
	};
	
	;
	
	Align.defaultProps = defaultProps;
	Align.propTypes = propTypes;
	
	exports.default = Align;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.alignPoint = exports.alignElement = undefined;
	
	var _alignElement = __webpack_require__(51);
	
	var _alignElement2 = _interopRequireDefault(_alignElement);
	
	var _alignPoint = __webpack_require__(62);
	
	var _alignPoint2 = _interopRequireDefault(_alignPoint);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.alignElement = _alignElement2['default'];
	exports.alignPoint = _alignPoint2['default'];
	exports['default'] = _alignElement2['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _align = __webpack_require__(52);
	
	var _align2 = _interopRequireDefault(_align);
	
	var _getOffsetParent = __webpack_require__(56);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(55);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _getRegion = __webpack_require__(59);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isOutOfVisibleRect(target) {
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(target);
	  var targetRegion = (0, _getRegion2['default'])(target);
	
	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}
	
	function alignElement(el, refNode, align) {
	  var target = align.target || refNode;
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	
	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);
	
	  return (0, _align2['default'])(el, refNodeRegion, align, isTargetNotOutOfVisible);
	}
	
	alignElement.__getOffsetParent = _getOffsetParent2['default'];
	
	alignElement.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = alignElement;
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getVisibleRectForElement = __webpack_require__(55);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(58);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(59);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(60);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// http://yiminghe.iteye.com/blog/1124720
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	} /**
	   * align dom node flexibly
	   * @author yiminghe@gmail.com
	   */
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}
	
	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	/**
	 * @param el
	 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
	 * @param align
	 */
	function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, tgtRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
	
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
	
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, tgtRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
	    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
	    // 检查反下后的位置是否可以放下了，如果仍然放不下：
	    // 1. 复原修改过的定位参数
	    if (isStillFailX || isStillFailY) {
	      points = align.points;
	      offset = align.offset || [0, 0];
	      targetOffset = align.targetOffset || [0, 0];
	    }
	    // 2. 只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
	    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', _utils2['default'].width(source) + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', _utils2['default'].height(source) + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform,
	    ignoreShake: align.ignoreShake
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	exports['default'] = doAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _propertyUtils = __webpack_require__(54);
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = void 0;
	
	// https://stackoverflow.com/a/3485654/3040605
	function forceRelayout(elem) {
	  var originalStyle = elem.style.display;
	  elem.style.display = 'none';
	  elem.offsetHeight; // eslint-disable-line
	  elem.style.display = originalStyle;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	  if (node.nodeType === 9) {
	    return node;
	  }
	  return node.ownerDocument;
	}
	
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  // force relayout
	  forceRelayout(elem);
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  forceRelayout(elem);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}
	
	function setOffset(elem, offset, option) {
	  if (option.ignoreShake) {
	    var oriOffset = getOffset(elem);
	
	    var oLeft = oriOffset.left.toFixed(0);
	    var oTop = oriOffset.top.toFixed(0);
	    var tLeft = offset.left.toFixed(0);
	    var tTop = offset.top.toFixed(0);
	
	    if (oLeft === tLeft && oTop === tTop) {
	      return;
	    }
	  }
	
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	
	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;
	
	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};
	
	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}
	
	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}
	
	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}
	
	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}
	
	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}
	
	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}
	
	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}
	
	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;
	
	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(56);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _isAncestorFixed = __webpack_require__(57);
	
	var _isAncestorFixed2 = _interopRequireDefault(_isAncestorFixed);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var doc = _utils2['default'].getDocument(element);
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	  var originalPosition = null;
	  if (!_utils2['default'].isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = _utils2['default'].css(element, 'position');
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight;
	
	  // Reset element position after calculate the visible area
	  if (element.style) {
	    element.style.position = originalPosition;
	  }
	
	  if ((0, _isAncestorFixed2['default'])(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
	
	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }
	
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return null;
	  }
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isAncestorFixed;
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isAncestorFixed(element) {
	  if (_utils2['default'].isWindow(element) || element.nodeType === 9) {
	    return false;
	  }
	
	  var doc = _utils2['default'].getDocument(element);
	  var body = doc.body;
	  var parent = null;
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    var positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getAlignOffset = __webpack_require__(61);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  var p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
	    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	
	  var x = region.left;
	  var y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _utils = __webpack_require__(53);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _align = __webpack_require__(52);
	
	var _align2 = _interopRequireDefault(_align);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
	 * If client position provided, will internal convert to page position.
	 */
	
	function alignPoint(el, tgtPoint, align) {
	  var pageX = void 0;
	  var pageY = void 0;
	
	  var doc = _utils2['default'].getDocument(el);
	  var win = doc.defaultView || doc.parentWindow;
	
	  var scrollX = _utils2['default'].getWindowScrollLeft(win);
	  var scrollY = _utils2['default'].getWindowScrollTop(win);
	  var viewportWidth = _utils2['default'].viewportWidth(win);
	  var viewportHeight = _utils2['default'].viewportHeight(win);
	
	  if ('pageX' in tgtPoint) {
	    pageX = tgtPoint.pageX;
	  } else {
	    pageX = scrollX + tgtPoint.clientX;
	  }
	
	  if ('pageY' in tgtPoint) {
	    pageY = tgtPoint.pageY;
	  } else {
	    pageY = scrollY + tgtPoint.clientY;
	  }
	
	  var tgtRegion = {
	    left: pageX,
	    top: pageY,
	    width: 0,
	    height: 0
	  };
	
	  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
	
	  // Provide default target point
	  var points = [align.points[0], 'cc'];
	
	  return (0, _align2['default'])(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
	}
	
	exports['default'] = alignPoint;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(12);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };
	
	  return Fade;
	}(_react2["default"].Component);
	
	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;
	
	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(65);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Message2["default"];
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeNotification = __webpack_require__(66);
	
	var _beeNotification2 = _interopRequireDefault(_beeNotification);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultDuration = 1.5;
	var defaultTop = 0;
	var defaultBottom = 48;
	var bottom = 90;
	var padding = 30;
	var width = 200;
	var messageInstance = void 0;
	var key = 1;
	var clsPrefix = 'u-message';
	var noop = function noop() {};
	
	var positionObj = {
	    "top": {
	        messageStyle: {
	            width: "100%"
	        },
	        notificationStyle: {
	            top: defaultTop,
	            width: "100%"
	        },
	        transitionName: 'top'
	    },
	    "bottom": {
	        messageStyle: {
	            width: "100%"
	        },
	        notificationStyle: {
	            bottom: defaultBottom,
	            width: "100%"
	        },
	        transitionName: 'bottom'
	    },
	    "topRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "bottomRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "topLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    },
	    "bottomLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    }
	};
	
	function getMessageInstance() {
	    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';
	    var callback = arguments[1];
	
	    if (messageInstance) {
	        callback(messageInstance);
	        return;
	    }
	    var style = positionObj[position].notificationStyle;
	    _beeNotification2["default"].newInstance({
	        clsPrefix: clsPrefix,
	        transitionName: clsPrefix + '-' + positionObj[position].transitionName,
	        style: style, // 覆盖原来的样式
	        position: ''
	    }, function (instance) {
	        messageInstance = instance;
	        callback(instance);
	    });
	}
	
	function notice(content, duration, type, onClose, position, style) {
	    var iconType = {
	        info: 'uf uf-i-c-2',
	        success: 'uf uf-correct',
	        danger: 'uf uf-close-c',
	        warning: 'uf uf-exc-t',
	        light: 'uf uf-notification',
	        dark: 'uf uf-bubble',
	        news: 'uf uf-bell',
	        infolight: 'uf uf-i-c-2',
	        successlight: 'uf uf-correct',
	        dangerlight: 'uf uf-close-c',
	        warninglight: 'uf uf-exc-t'
	    }[type];
	
	    var positionStyle = positionObj[position].messageStyle;
	
	    getMessageInstance(position, function (instance) {
	        instance.notice({
	            key: key,
	            duration: duration,
	            color: type,
	            style: _extends({}, positionStyle, style),
	            content: _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-icon' },
	                    _react2["default"].createElement('i', { className: (0, _classnames2["default"])(iconType) })
	                ),
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-content' },
	                    content
	                )
	            ),
	            onClose: onClose
	        });
	    });
	    return function () {
	        var target = key++;
	        return function () {
	            if (messageInstance) {
	                messageInstance.removeNotice(target);
	            }
	        };
	    }();
	}
	
	exports["default"] = {
	    create: function create(obj) {
	        var content = obj.content || '';
	        var duration = _typeof(obj.duration) == undefined ? defaultDuration : obj.duration;
	        var color = obj.color || 'dark';
	        var onClose = obj.onClose || noop;
	        var position = obj.position || "top";
	        var style = obj.style || {};
	        return notice(content, duration, color, onClose, position, style);
	    },
	    config: function config(options) {
	        if (options.top !== undefined) {
	            defaultTop = options.top;
	        }
	        if (options.duration !== undefined) {
	            defaultDuration = options.duration;
	        }
	        if (options.clsPrefix !== undefined) {
	            clsPrefix = options.clsPrefix;
	        }
	        if (options.defaultBottom !== undefined) {
	            defaultBottom = options.defaultBottom;
	        }
	        if (options.bottom !== undefined) {
	            bottom = options.bottom;
	        }
	        if (options.width !== undefined) {
	            bottom = options.width;
	        }
	    },
	    destroy: function destroy() {
	        if (messageInstance) {
	            messageInstance.destroy();
	            messageInstance = null;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Notification = __webpack_require__(67);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Notification2["default"];
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeAnimate = __webpack_require__(68);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _createChainedFunction = __webpack_require__(36);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Notice = __webpack_require__(73);
	
	var _Notice2 = _interopRequireDefault(_Notice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var seed = 0;
	var now = Date.now();
	
	function getUuid() {
	  return 'uNotification_' + now + '_' + seed++;
	}
	
	var propTypes = {
	  show: _propTypes2["default"].bool,
	  clsPrefix: _propTypes2["default"].string,
	  style: _propTypes2["default"].object,
	  position: _propTypes2["default"].oneOf(['topRight', 'bottomRight', '']),
	  transitionName: _propTypes2["default"].string,
	  animation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
	};
	
	var defaultProps = {
	  clsPrefix: 'u-notification',
	  animation: 'fade',
	  position: 'topRight'
	};
	
	var Notification = function (_Component) {
	  _inherits(Notification, _Component);
	
	  function Notification(props) {
	    _classCallCheck(this, Notification);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      notices: []
	    };
	    _this.add = _this.add.bind(_this);
	    _this.remove = _this.remove.bind(_this);
	
	    return _this;
	  }
	
	  Notification.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.clsPrefix + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  Notification.prototype.add = function add(notice) {
	    var key = notice.key = notice.key || getUuid();
	    this.setState(function (previousState) {
	      var notices = previousState.notices;
	      if (!notices.filter(function (v) {
	        return v.key === key;
	      }).length) {
	        return {
	          notices: notices.concat(notice)
	        };
	      }
	    });
	  };
	
	  Notification.prototype.remove = function remove(key) {
	    this.setState(function (previousState) {
	      return {
	        notices: previousState.notices.filter(function (notice) {
	          return notice.key !== key;
	        })
	      };
	    });
	  };
	
	  Notification.prototype.render = function render() {
	    var _this2 = this,
	        _classes;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        position = _props.position,
	        style = _props.style;
	
	    var noticeNodes = this.state.notices.map(function (notice) {
	      var onClose = (0, _createChainedFunction2["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
	      return _react2["default"].createElement(
	        _Notice2["default"],
	        _extends({
	          clsPrefix: clsPrefix
	        }, notice, {
	          onClose: onClose
	        }),
	        notice.content
	      );
	    });
	    var classes = (_classes = {}, _defineProperty(_classes, clsPrefix, 1), _defineProperty(_classes, className, !!className), _classes);
	    if (position) {
	      classes[clsPrefix + '-' + position] = !!position;
	    }
	
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className, classes), style: style },
	      _react2["default"].createElement(
	        _beeAnimate2["default"],
	        { transitionName: this.getTransitionName() },
	        noticeNodes
	      )
	    );
	  };
	
	  return Notification;
	}(_react.Component);
	
	;
	
	Notification.propTypes = propTypes;
	Notification.defaultProps = defaultProps;
	
	Notification.newInstance = function newNotificationInstance(properties, callback) {
	  var props = properties || {};
	  var div = document.createElement('div');
	  document.body.appendChild(div);
	
	  var called = false;
	  function ref(notification) {
	    if (called) {
	      return;
	    }
	    called = true;
	    callback({
	      notice: function notice(noticeProps) {
	        notification.add(noticeProps);
	      },
	      removeNotice: function removeNotice(key) {
	        notification.remove(key);
	      },
	
	      component: notification,
	      destroy: function destroy() {
	        _reactDom2["default"].unmountComponentAtNode(div);
	        document.body.removeChild(div);
	      }
	    });
	  }
	  _reactDom2["default"].render(_react2["default"].createElement(Notification, _extends({}, props, { ref: ref })), div);
	};
	
	exports["default"] = Notification;
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Animate = __webpack_require__(69);
	
	var _Animate2 = _interopRequireDefault(_Animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Animate2["default"];
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(70);
	
	var _AnimateChild = __webpack_require__(71);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(72);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var defaultKey = 'u_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var propTypes = {
	  component: _propTypes2["default"].any,
	  animation: _propTypes2["default"].object,
	  transitionName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  transitionEnter: _propTypes2["default"].bool,
	  transitionAppear: _propTypes2["default"].bool,
	  exclusive: _propTypes2["default"].bool,
	  transitionLeave: _propTypes2["default"].bool,
	  onEnd: _propTypes2["default"].func,
	  onEnter: _propTypes2["default"].func,
	  onLeave: _propTypes2["default"].func,
	  onAppear: _propTypes2["default"].func,
	  showProp: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  animation: {},
	  component: 'span',
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var Animate = function (_Component) {
	  _inherits(Animate, _Component);
	
	  function Animate(props) {
	    _classCallCheck(this, Animate);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };
	
	    _this.performEnter = _this.performEnter.bind(_this);
	    _this.performAppear = _this.performAppear.bind(_this);
	    _this.handleDoneAdding = _this.handleDoneAdding.bind(_this);
	    _this.performLeave = _this.performLeave.bind(_this);
	
	    _this.performLeave = _this.performLeave.bind(_this);
	    _this.handleDoneLeaving = _this.handleDoneLeaving.bind(_this);
	    _this.isValidChildByKey = _this.isValidChildByKey.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  Animate.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.mounted = true;
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this2.performAppear(child.key);
	      }
	    });
	  };
	
	  Animate.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };
	
	  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this3 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this3.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this3.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this3.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this3.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this3.keysToLeave.push(key);
	      }
	    });
	  };
	
	  Animate.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  Animate.prototype.performEnter = function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  };
	
	  Animate.prototype.performAppear = function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  };
	
	  Animate.prototype.handleDoneAdding = function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };
	
	  Animate.prototype.performLeave = function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  };
	
	  Animate.prototype.handleDoneLeaving = function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.mounted && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	
	  Animate.prototype.isValidChildByKey = function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  };
	
	  Animate.prototype.stop = function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  };
	
	  Animate.prototype.render = function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  };
	
	  return Animate;
	}(_react.Component);
	
	;
	Animate.defaultProps = defaultProps;
	Animate.propTypes = Animate.propTypes;
	
	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _util = __webpack_require__(72);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var propTypes = {
	  children: _propTypes2["default"].any
	};
	
	var AnimateChild = function (_Component) {
	  _inherits(AnimateChild, _Component);
	
	  function AnimateChild(props) {
	    _classCallCheck(this, AnimateChild);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.transition = _this.transition.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stop();
	  };
	
	  AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  };
	
	  AnimateChild.prototype.transition = function transition(animationType, finishCallback) {
	    var _this2 = this;
	
	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this2.stopper = null;
	      finishCallback();
	    };
	    if ((_tinperBeeCore.cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _tinperBeeCore.cssAnimation)(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  };
	
	  AnimateChild.prototype.stop = function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  };
	
	  AnimateChild.prototype.render = function render() {
	    return this.props.children;
	  };
	
	  return AnimateChild;
	}(_react.Component);
	
	;
	
	AnimateChild.propTypes = propTypes;
	
	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  duration: _propTypes2["default"].number,
	  onClose: _propTypes2["default"].func,
	  children: _propTypes2["default"].any,
	  color: _propTypes2["default"].oneOf(['light']),
	  title: _propTypes2["default"].any
	};
	
	function noop() {}
	
	var defaultProps = {
	  onEnd: noop,
	  onClose: noop,
	  duration: 4.5,
	  closable: true
	};
	
	var Notice = function (_React$Component) {
	  _inherits(Notice, _React$Component);
	
	  function Notice(props) {
	    _classCallCheck(this, Notice);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.clearCloseTimer = _this.clearCloseTimer.bind(_this);
	    _this.close = _this.close.bind(_this);
	    return _this;
	  }
	
	  Notice.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    if (this.props.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this2.close();
	      }, this.props.duration * 1000);
	    }
	  };
	
	  Notice.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearCloseTimer();
	  };
	
	  Notice.prototype.clearCloseTimer = function clearCloseTimer() {
	    if (this.closeTimer) {
	      clearTimeout(this.closeTimer);
	      this.closeTimer = null;
	    }
	  };
	
	  Notice.prototype.close = function close() {
	    this.clearCloseTimer();
	    this.props.onClose();
	  };
	
	  Notice.prototype.render = function render() {
	    var _classes;
	
	    var _props = this.props,
	        closable = _props.closable,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        style = _props.style,
	        children = _props.children,
	        color = _props.color,
	        title = _props.title;
	
	    var componentClass = clsPrefix + '-notice';
	    var classes = (_classes = {}, _defineProperty(_classes, '' + componentClass, 1), _defineProperty(_classes, componentClass + '-closable', closable), _defineProperty(_classes, className, !!className), _classes);
	    if (color) {
	      classes[componentClass + '-' + color] = true;
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(classes), style: style, onClick: this.close },
	      _react2["default"].createElement(
	        'div',
	        { className: componentClass + '-content' },
	        title && _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-title' },
	          title
	        ),
	        _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-description' },
	          children
	        )
	      ),
	      closable ? _react2["default"].createElement(
	        'a',
	        { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
	        _react2["default"].createElement('span', { className: componentClass + '-close-x' })
	      ) : null
	    );
	  };
	
	  return Notice;
	}(_react2["default"].Component);
	
	;
	
	Notice.PropTypes = _propTypes2["default"];
	Notice.defaultProps = defaultProps;
	
	exports["default"] = Notice;
	module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var deselectCurrent = __webpack_require__(75);
	
	var defaultMessage = 'Copy to clipboard: #{key}, Enter';
	
	function format(message) {
	  var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
	  return message.replace(/#{\s*key\s*}/g, copyKey);
	}
	
	function copy(text, options) {
	  var debug, message, reselectPrevious, range, selection, mark, success = false;
	  if (!options) { options = {}; }
	  debug = options.debug || false;
	  try {
	    reselectPrevious = deselectCurrent();
	
	    range = document.createRange();
	    selection = document.getSelection();
	
	    mark = document.createElement('span');
	    mark.textContent = text;
	    // reset user styles for span element
	    mark.style.all = 'unset';
	    // prevents scrolling to the end of the page
	    mark.style.position = 'fixed';
	    mark.style.top = 0;
	    mark.style.clip = 'rect(0, 0, 0, 0)';
	    // used to preserve spaces and line breaks
	    mark.style.whiteSpace = 'pre';
	    // do not inherit user-select (it may be `none`)
	    mark.style.webkitUserSelect = 'text';
	    mark.style.MozUserSelect = 'text';
	    mark.style.msUserSelect = 'text';
	    mark.style.userSelect = 'text';
	
	    document.body.appendChild(mark);
	
	    range.selectNode(mark);
	    selection.addRange(range);
	
	    var successful = document.execCommand('copy');
	    if (!successful) {
	      throw new Error('copy command was unsuccessful');
	    }
	    success = true;
	  } catch (err) {
	    debug && console.error('unable to copy using execCommand: ', err);
	    debug && console.warn('trying IE specific stuff');
	    try {
	      window.clipboardData.setData('text', text);
	      success = true;
	    } catch (err) {
	      debug && console.error('unable to copy using clipboardData: ', err);
	      debug && console.error('falling back to prompt');
	      message = format('message' in options ? options.message : defaultMessage);
	      window.prompt(message, text);
	    }
	  } finally {
	    if (selection) {
	      if (typeof selection.removeRange == 'function') {
	        selection.removeRange(range);
	      } else {
	        selection.removeAllRanges();
	      }
	    }
	
	    if (mark) {
	      document.body.removeChild(mark);
	    }
	    reselectPrevious();
	  }
	
	  return success;
	}
	
	module.exports = copy;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	
	module.exports = function () {
	  var selection = document.getSelection();
	  if (!selection.rangeCount) {
	    return function () {};
	  }
	  var active = document.activeElement;
	
	  var ranges = [];
	  for (var i = 0; i < selection.rangeCount; i++) {
	    ranges.push(selection.getRangeAt(i));
	  }
	
	  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
	    case 'INPUT':
	    case 'TEXTAREA':
	      active.blur();
	      break;
	
	    default:
	      active = null;
	      break;
	  }
	
	  selection.removeAllRanges();
	  return function () {
	    selection.type === 'Caret' &&
	    selection.removeAllRanges();
	
	    if (!selection.rangeCount) {
	      ranges.forEach(function(range) {
	        selection.addRange(range);
	      });
	    }
	
	    active &&
	    active.focus();
	  };
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否是手风琴效果
	  accordion: _propTypes2["default"].bool,
	  //激活的项
	  activeKey: _propTypes2["default"].any,
	  //默认的激活的项
	  defaultActiveKey: _propTypes2["default"].any,
	  //选中函数
	  onSelect: _propTypes2["default"].func,
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};
	
	// TODO: Use uncontrollable.
	
	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);
	
	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleSelect = _this.handleSelect.bind(_this);
	
	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }
	
	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({ activeKey: key });
	  };
	
	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);
	
	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };
	
	        if (accordion) {
	          _extends(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }
	
	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };
	
	  return PanelGroup;
	}(_react2["default"].Component);
	
	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;
	
	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Drawer = __webpack_require__(78);
	
	var _Drawer2 = _interopRequireDefault(_Drawer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Drawer2["default"];
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _common = __webpack_require__(79);
	
	var _reactTransitionGroup = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
		placement: _propTypes2["default"].oneOf(['left', 'right', 'top', 'bottom']),
		hasHeader: _propTypes2["default"].bool,
		show: _propTypes2["default"].bool,
		title: _propTypes2["default"].string,
		className: _propTypes2["default"].string,
		showMask: _propTypes2["default"].bool,
		maskClosable: _propTypes2["default"].bool,
		zIndex: _propTypes2["default"].number,
		showClose: _propTypes2["default"].bool,
		width: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
		height: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
		destroyOnClose: _propTypes2["default"].bool,
		container: _propTypes2["default"].string
	};
	
	var defaultProps = {
		placement: 'left',
		hasHeader: true,
		show: false,
		showMask: true,
		maskClosable: true,
		zIndex: 100000,
		showClose: false,
		width: 'auto',
		height: 'auto',
		destroyOnClose: false,
		container: 'body'
	};
	
	var DrawerContext = _react2["default"].createContext(null);
	
	var Drawer = function (_Component) {
		_inherits(Drawer, _Component);
	
		function Drawer(props) {
			_classCallCheck(this, Drawer);
	
			var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
			_this.state = {
				showDrawer: true,
				width: '0',
				push: false
			};
			_this.drawer = null;
			_this.parentDrawer = null;
			(0, _common.bindAll)(_this, ['fMaskClick', 'fDrawerTransitionEnd', 'renderMask', 'renderClose', 'fCloseClick', 'renderBody', 'renderAll']);
			return _this;
		}
	
		Drawer.prototype.componentDidUpdate = function componentDidUpdate(preProps) {
			//在有父级抽屉时候，子级触发父级向外移动一段距离
			if (preProps.show != this.props.show && this.parentDrawer) {
				if (this.props.show) {
					this.parentDrawer.push();
				} else {
					this.parentDrawer.pull();
				}
			}
		};
	
		Drawer.prototype.push = function push() {
			this.setState({
				push: true
			});
		};
	
		Drawer.prototype.pull = function pull() {
			this.setState({
				push: false
			});
		};
	
		Drawer.prototype.fMaskClick = function fMaskClick() {
			var maskClosable = this.props.maskClosable;
	
			if (maskClosable) {
				var onClose = this.props.onClose;
	
				onClose && onClose();
			}
		};
	
		Drawer.prototype.fCloseClick = function fCloseClick() {
			var onClose = this.props.onClose;
	
			onClose && onClose();
		};
	
		Drawer.prototype.fDrawerTransitionEnd = function fDrawerTransitionEnd(e) {};
	
		Drawer.prototype.renderMask = function renderMask() {
			var _props = this.props,
			    show = _props.show,
			    showMask = _props.showMask,
			    fMaskClick = _props.fMaskClick;
			//mask样式
	
			var maskStyle = void 0;
			if (show) {
				maskStyle = {
					opacity: 1,
					width: '100%'
				};
			} else {
				maskStyle = {
					opacity: 0,
					width: 0
				};
			}
			return showMask ? _react2["default"].createElement('div', { className: 'drawer-mask', style: maskStyle, onClick: this.fMaskClick }) : null;
		};
	
		Drawer.prototype.renderClose = function renderClose() {
			var showClose = this.props.showClose;
	
			return showClose ? _react2["default"].createElement(
				'i',
				{ className: 'drawer-close', onClick: this.fCloseClick },
				'\xD7'
			) : null;
		};
	
		Drawer.prototype.renderBody = function renderBody() {
			var _this2 = this;
	
			var _props2 = this.props,
			    destroyOnClose = _props2.destroyOnClose,
			    show = _props2.show;
	
			if (destroyOnClose && !show) {
				return null;
			}
			var _props3 = this.props,
			    hasHeader = _props3.hasHeader,
			    title = _props3.title,
			    children = _props3.children,
			    width = _props3.width,
			    height = _props3.height,
			    placement = _props3.placement;
			var push = this.state.push;
			//抽屉类
	
			var drawerClass = (0, _classnames2["default"])('drawer', 'drawer-' + placement);
			//根据位置获取抽屉样式
			var translateHideMap = {
				left: 'translateX(-100%)',
				right: 'translateX(100%)',
				top: 'translateY(-100%)',
				bottom: 'translateY(100%)'
			};
			var translateShow = 'translate(0,0)';
			if (push) {
				var pushNum = 50;
				var translateShowMap = {
					left: 'translate(' + pushNum + 'px,0)',
					right: 'translate(-' + pushNum + 'px,0)',
					top: 'translate(0,' + pushNum + 'px)',
					bottom: 'translate(0,-' + pushNum + 'px)'
				};
				translateShow = translateShowMap[placement];
			}
			var translate = show ? translateShow : translateHideMap[placement];
			//抽屉面板样式
			if ((0, _common.isNumber)(width)) {
				width = width + 'px';
			}
			if ((0, _common.isNumber)(height)) {
				height = height + 'px';
			}
			if (placement == 'top' || placement == 'bottom') {
				if (width == 'auto') {
					width = '100%';
				}
			}
			if (placement == 'left' || placement == 'right') {
				if (height == 'auto') {
					height = '100%';
				}
			}
			var drawerStyle = {
				transform: translate,
				WebkitTransform: translate,
				width: width,
				height: height
			};
			var closer = this.renderClose();
			var header = hasHeader ? _react2["default"].createElement(
				'div',
				{ className: 'drawer-header' },
				_react2["default"].createElement(
					'div',
					{ className: 'drawer-header-title' },
					title
				)
			) : '';
			return _react2["default"].createElement(
				DrawerContext.Provider,
				{ value: this },
				_react2["default"].createElement(
					'div',
					{ ref: function ref(drawer) {
							_this2.drawer = drawer;
						}, onTransitionEnd: this.fDrawerTransitionEnd, className: drawerClass, style: drawerStyle },
					closer,
					header,
					_react2["default"].createElement(
						'div',
						{ className: 'drawer-body' },
						children
					)
				)
			);
		};
	
		Drawer.prototype.renderAll = function renderAll(value) {
			var _props4 = this.props,
			    show = _props4.show,
			    className = _props4.className,
			    zIndex = _props4.zIndex;
			//容器类
	
			var drawercClass = (0, _classnames2["default"])('drawerc', className);
			//容器样式
			var drawercStyle = { zIndex: zIndex };
			if (show) {
				drawercStyle.width = '100%';
			} else {
				drawercStyle.width = 0;
			}
			//获取父级抽屉
			this.parentDrawer = value;
	
			return _react2["default"].createElement(
				'div',
				{ className: drawercClass, style: drawercStyle },
				this.renderMask(),
				this.renderBody()
			);
		};
	
		Drawer.prototype.render = function render() {
			var container = this.props.container;
	
			var conDom = document.querySelector(container);
	
			return _reactDom2["default"].createPortal(_react2["default"].createElement(
				DrawerContext.Consumer,
				null,
				this.renderAll
			), conDom);
		};
	
		return Drawer;
	}(_react.Component);
	
	Drawer.propTypes = propTypes;
	Drawer.defaultProps = defaultProps;
	
	exports["default"] = Drawer;
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bindAll = bindAll;
	exports.type = type;
	exports.isNumber = isNumber;
	function bindAll(context, arrFunc) {
	    arrFunc.forEach(function (item) {
	        context[item] = context[item].bind(context);
	    });
	}
	
	function type(obj) {
	    var toString = Object.prototype.toString;
	    return toString.call(obj);
	}
	
	function isNumber(obj) {
	    return type(obj) == '[object Number]';
	}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _CSSTransition = _interopRequireDefault(__webpack_require__(81));
	
	var _ReplaceTransition = _interopRequireDefault(__webpack_require__(88));
	
	var _TransitionGroup = _interopRequireDefault(__webpack_require__(89));
	
	var _Transition = _interopRequireDefault(__webpack_require__(85));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  Transition: _Transition.default,
	  TransitionGroup: _TransitionGroup.default,
	  ReplaceTransition: _ReplaceTransition.default,
	  CSSTransition: _CSSTransition.default
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var PropTypes = _interopRequireWildcard(__webpack_require__(6));
	
	var _addClass = _interopRequireDefault(__webpack_require__(82));
	
	var _removeClass = _interopRequireDefault(__webpack_require__(84));
	
	var _react = _interopRequireDefault(__webpack_require__(1));
	
	var _Transition = _interopRequireDefault(__webpack_require__(85));
	
	var _PropTypes = __webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
	
	var addClass = function addClass(node, classes) {
	  return node && classes && classes.split(' ').forEach(function (c) {
	    return (0, _addClass.default)(node, c);
	  });
	};
	
	var removeClass = function removeClass(node, classes) {
	  return node && classes && classes.split(' ').forEach(function (c) {
	    return (0, _removeClass.default)(node, c);
	  });
	};
	/**
	 * A `Transition` component using CSS transitions and animations.
	 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
	 *
	 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
	 * and `exit` stages of the transition. The first class is applied and then a
	 * second "active" class in order to activate the css animation. After the animation,
	 * matching `done` class names are applied to persist the animation state.
	 *
	 * When the `in` prop is toggled to `true` the Component will get
	 * the `example-enter` CSS class and the `example-enter-active` CSS class
	 * added in the next tick. This is a convention based on the `classNames` prop.
	 */
	
	
	var CSSTransition =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(CSSTransition, _React$Component);
	
	  function CSSTransition() {
	    var _this;
	
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
	
	    _this.onEnter = function (node, appearing) {
	      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
	          className = _this$getClassNames.className;
	
	      _this.removeClasses(node, 'exit');
	
	      addClass(node, className);
	
	      if (_this.props.onEnter) {
	        _this.props.onEnter(node, appearing);
	      }
	    };
	
	    _this.onEntering = function (node, appearing) {
	      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
	          activeClassName = _this$getClassNames2.activeClassName;
	
	      _this.reflowAndAddClass(node, activeClassName);
	
	      if (_this.props.onEntering) {
	        _this.props.onEntering(node, appearing);
	      }
	    };
	
	    _this.onEntered = function (node, appearing) {
	      var _this$getClassNames3 = _this.getClassNames('enter'),
	          doneClassName = _this$getClassNames3.doneClassName;
	
	      _this.removeClasses(node, appearing ? 'appear' : 'enter');
	
	      addClass(node, doneClassName);
	
	      if (_this.props.onEntered) {
	        _this.props.onEntered(node, appearing);
	      }
	    };
	
	    _this.onExit = function (node) {
	      var _this$getClassNames4 = _this.getClassNames('exit'),
	          className = _this$getClassNames4.className;
	
	      _this.removeClasses(node, 'appear');
	
	      _this.removeClasses(node, 'enter');
	
	      addClass(node, className);
	
	      if (_this.props.onExit) {
	        _this.props.onExit(node);
	      }
	    };
	
	    _this.onExiting = function (node) {
	      var _this$getClassNames5 = _this.getClassNames('exit'),
	          activeClassName = _this$getClassNames5.activeClassName;
	
	      _this.reflowAndAddClass(node, activeClassName);
	
	      if (_this.props.onExiting) {
	        _this.props.onExiting(node);
	      }
	    };
	
	    _this.onExited = function (node) {
	      var _this$getClassNames6 = _this.getClassNames('exit'),
	          doneClassName = _this$getClassNames6.doneClassName;
	
	      _this.removeClasses(node, 'exit');
	
	      addClass(node, doneClassName);
	
	      if (_this.props.onExited) {
	        _this.props.onExited(node);
	      }
	    };
	
	    _this.getClassNames = function (type) {
	      var classNames = _this.props.classNames;
	      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
	      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
	      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
	      return {
	        className: className,
	        activeClassName: activeClassName,
	        doneClassName: doneClassName
	      };
	    };
	
	    return _this;
	  }
	
	  var _proto = CSSTransition.prototype;
	
	  _proto.removeClasses = function removeClasses(node, type) {
	    var _this$getClassNames7 = this.getClassNames(type),
	        className = _this$getClassNames7.className,
	        activeClassName = _this$getClassNames7.activeClassName,
	        doneClassName = _this$getClassNames7.doneClassName;
	
	    className && removeClass(node, className);
	    activeClassName && removeClass(node, activeClassName);
	    doneClassName && removeClass(node, doneClassName);
	  };
	
	  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
	    // This is for to force a repaint,
	    // which is necessary in order to transition styles when adding a class name.
	    if (className) {
	      /* eslint-disable no-unused-expressions */
	      node && node.scrollTop;
	      /* eslint-enable no-unused-expressions */
	
	      addClass(node, className);
	    }
	  };
	
	  _proto.render = function render() {
	    var props = _extends({}, this.props);
	
	    delete props.classNames;
	    return _react.default.createElement(_Transition.default, _extends({}, props, {
	      onEnter: this.onEnter,
	      onEntered: this.onEntered,
	      onEntering: this.onEntering,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }));
	  };
	
	  return CSSTransition;
	}(_react.default.Component);
	
	CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Transition.default.propTypes, {
	  /**
	   * The animation classNames applied to the component as it enters, exits or has finished the transition.
	   * A single name can be provided and it will be suffixed for each stage: e.g.
	   *
	   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
	   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
	   * Each individual classNames can also be specified independently like:
	   *
	   * ```js
	   * classNames={{
	   *  appear: 'my-appear',
	   *  appearActive: 'my-active-appear',
	   *  enter: 'my-enter',
	   *  enterActive: 'my-active-enter',
	   *  enterDone: 'my-done-enter',
	   *  exit: 'my-exit',
	   *  exitActive: 'my-active-exit',
	   *  exitDone: 'my-done-exit',
	   * }}
	   * ```
	   *
	   * If you want to set these classes using CSS Modules:
	   *
	   * ```js
	   * import styles from './styles.css';
	   * ```
	   *
	   * you might want to use camelCase in your CSS file, that way could simply spread
	   * them instead of listing them one by one:
	   *
	   * ```js
	   * classNames={{ ...styles }}
	   * ```
	   *
	   * @type {string | {
	   *  appear?: string,
	   *  appearActive?: string,
	   *  enter?: string,
	   *  enterActive?: string,
	   *  enterDone?: string,
	   *  exit?: string,
	   *  exitActive?: string,
	   *  exitDone?: string,
	   * }}
	   */
	  classNames: _PropTypes.classNamesShape,
	
	  /**
	   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
	   * applied.
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEnter: PropTypes.func,
	
	  /**
	   * A `<Transition>` callback fired immediately after the 'enter-active' or
	   * 'appear-active' class is applied.
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEntering: PropTypes.func,
	
	  /**
	   * A `<Transition>` callback fired immediately after the 'enter' or
	   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEntered: PropTypes.func,
	
	  /**
	   * A `<Transition>` callback fired immediately after the 'exit' class is
	   * applied.
	   *
	   * @type Function(node: HtmlElement)
	   */
	  onExit: PropTypes.func,
	
	  /**
	   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
	   *
	   * @type Function(node: HtmlElement)
	   */
	  onExiting: PropTypes.func,
	
	  /**
	   * A `<Transition>` callback fired immediately after the 'exit' classes
	   * are **removed** and the `exit-done` class is added to the DOM node.
	   *
	   * @type Function(node: HtmlElement)
	   */
	  onExited: PropTypes.func
	}) : {};
	var _default = CSSTransition;
	exports.default = _default;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addClass;
	
	var _hasClass = __webpack_require__(83);
	
	var _hasClass2 = _interopRequireDefault(_hasClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function addClass(element, className) {
	  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
	}
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hasClass;
	function hasClass(element, className) {
	  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
	}
	module.exports = exports["default"];

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	'use strict';
	
	function replaceClassName(origClass, classToRemove) {
	  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	}
	
	module.exports = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
	};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;
	
	var PropTypes = _interopRequireWildcard(__webpack_require__(6));
	
	var _react = _interopRequireDefault(__webpack_require__(1));
	
	var _reactDom = _interopRequireDefault(__webpack_require__(2));
	
	var _reactLifecyclesCompat = __webpack_require__(86);
	
	var _PropTypes = __webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	
	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
	
	var UNMOUNTED = 'unmounted';
	exports.UNMOUNTED = UNMOUNTED;
	var EXITED = 'exited';
	exports.EXITED = EXITED;
	var ENTERING = 'entering';
	exports.ENTERING = ENTERING;
	var ENTERED = 'entered';
	exports.ENTERED = ENTERED;
	var EXITING = 'exiting';
	/**
	 * The Transition component lets you describe a transition from one component
	 * state to another _over time_ with a simple declarative API. Most commonly
	 * it's used to animate the mounting and unmounting of a component, but can also
	 * be used to describe in-place transition states as well.
	 *
	 * By default the `Transition` component does not alter the behavior of the
	 * component it renders, it only tracks "enter" and "exit" states for the components.
	 * It's up to you to give meaning and effect to those states. For example we can
	 * add styles to a component when it enters or exits:
	 *
	 * ```jsx
	 * import Transition from 'react-transition-group/Transition';
	 *
	 * const duration = 300;
	 *
	 * const defaultStyle = {
	 *   transition: `opacity ${duration}ms ease-in-out`,
	 *   opacity: 0,
	 * }
	 *
	 * const transitionStyles = {
	 *   entering: { opacity: 0 },
	 *   entered:  { opacity: 1 },
	 * };
	 *
	 * const Fade = ({ in: inProp }) => (
	 *   <Transition in={inProp} timeout={duration}>
	 *     {(state) => (
	 *       <div style={{
	 *         ...defaultStyle,
	 *         ...transitionStyles[state]
	 *       }}>
	 *         I'm a fade Transition!
	 *       </div>
	 *     )}
	 *   </Transition>
	 * );
	 * ```
	 *
	 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
	 * What it does do is track transition states over time so you can update the
	 * component (such as by adding styles or classes) when it changes states.
	 *
	 * There are 4 main states a Transition can be in:
	 *  - `'entering'`
	 *  - `'entered'`
	 *  - `'exiting'`
	 *  - `'exited'`
	 *
	 * Transition state is toggled via the `in` prop. When `true` the component begins the
	 * "Enter" stage. During this stage, the component will shift from its current transition state,
	 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
	 * it's complete. Let's take the following example:
	 *
	 * ```jsx
	 * state = { in: false };
	 *
	 * toggleEnterState = () => {
	 *   this.setState({ in: true });
	 * }
	 *
	 * render() {
	 *   return (
	 *     <div>
	 *       <Transition in={this.state.in} timeout={500} />
	 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
	 *     </div>
	 *   );
	 * }
	 * ```
	 *
	 * When the button is clicked the component will shift to the `'entering'` state and
	 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
	 *
	 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
	 *
	 * ## Timing
	 *
	 * Timing is often the trickiest part of animation, mistakes can result in slight delays
	 * that are hard to pin down. A common example is when you want to add an exit transition,
	 * you should set the desired final styles when the state is `'exiting'`. That's when the
	 * transition to those styles will start and, if you matched the `timeout` prop with the
	 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
	 *
	 * > **Note**: For simpler transitions the `Transition` component might be enough, but
	 * > take into account that it's platform-agnostic, while the `CSSTransition` component
	 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	 * > in order to make more complex transitions more predictable. For example, even though
	 * > classes `example-enter` and `example-enter-active` are applied immediately one after
	 * > another, you can still transition from one to the other because of the forced reflow
	 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
	 * > for more info). Take this into account when choosing between `Transition` and
	 * > `CSSTransition`.
	 */
	
	exports.EXITING = EXITING;
	
	var Transition =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Transition, _React$Component);
	
	  function Transition(props, context) {
	    var _this;
	
	    _this = _React$Component.call(this, props, context) || this;
	    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears
	
	    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	    var initialStatus;
	    _this.appearStatus = null;
	
	    if (props.in) {
	      if (appear) {
	        initialStatus = EXITED;
	        _this.appearStatus = ENTERING;
	      } else {
	        initialStatus = ENTERED;
	      }
	    } else {
	      if (props.unmountOnExit || props.mountOnEnter) {
	        initialStatus = UNMOUNTED;
	      } else {
	        initialStatus = EXITED;
	      }
	    }
	
	    _this.state = {
	      status: initialStatus
	    };
	    _this.nextCallback = null;
	    return _this;
	  }
	
	  var _proto = Transition.prototype;
	
	  _proto.getChildContext = function getChildContext() {
	    return {
	      transitionGroup: null // allows for nested Transitions
	
	    };
	  };
	
	  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
	    var nextIn = _ref.in;
	
	    if (nextIn && prevState.status === UNMOUNTED) {
	      return {
	        status: EXITED
	      };
	    }
	
	    return null;
	  }; // getSnapshotBeforeUpdate(prevProps) {
	  //   let nextStatus = null
	  //   if (prevProps !== this.props) {
	  //     const { status } = this.state
	  //     if (this.props.in) {
	  //       if (status !== ENTERING && status !== ENTERED) {
	  //         nextStatus = ENTERING
	  //       }
	  //     } else {
	  //       if (status === ENTERING || status === ENTERED) {
	  //         nextStatus = EXITING
	  //       }
	  //     }
	  //   }
	  //   return { nextStatus }
	  // }
	
	
	  _proto.componentDidMount = function componentDidMount() {
	    this.updateStatus(true, this.appearStatus);
	  };
	
	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var nextStatus = null;
	
	    if (prevProps !== this.props) {
	      var status = this.state.status;
	
	      if (this.props.in) {
	        if (status !== ENTERING && status !== ENTERED) {
	          nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          nextStatus = EXITING;
	        }
	      }
	    }
	
	    this.updateStatus(false, nextStatus);
	  };
	
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  _proto.getTimeouts = function getTimeouts() {
	    var timeout = this.props.timeout;
	    var exit, enter, appear;
	    exit = enter = appear = timeout;
	
	    if (timeout != null && typeof timeout !== 'number') {
	      exit = timeout.exit;
	      enter = timeout.enter; // TODO: remove fallback for next major
	
	      appear = timeout.appear !== undefined ? timeout.appear : enter;
	    }
	
	    return {
	      exit: exit,
	      enter: enter,
	      appear: appear
	    };
	  };
	
	  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
	    if (mounting === void 0) {
	      mounting = false;
	    }
	
	    if (nextStatus !== null) {
	      // nextStatus will always be ENTERING or EXITING.
	      this.cancelNextCallback();
	
	      var node = _reactDom.default.findDOMNode(this);
	
	      if (nextStatus === ENTERING) {
	        this.performEnter(node, mounting);
	      } else {
	        this.performExit(node);
	      }
	    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	      this.setState({
	        status: UNMOUNTED
	      });
	    }
	  };
	
	  _proto.performEnter = function performEnter(node, mounting) {
	    var _this2 = this;
	
	    var enter = this.props.enter;
	    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
	    var timeouts = this.getTimeouts();
	    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
	    // if we are mounting and running this it means appear _must_ be set
	
	    if (!mounting && !enter) {
	      this.safeSetState({
	        status: ENTERED
	      }, function () {
	        _this2.props.onEntered(node);
	      });
	      return;
	    }
	
	    this.props.onEnter(node, appearing);
	    this.safeSetState({
	      status: ENTERING
	    }, function () {
	      _this2.props.onEntering(node, appearing);
	
	      _this2.onTransitionEnd(node, enterTimeout, function () {
	        _this2.safeSetState({
	          status: ENTERED
	        }, function () {
	          _this2.props.onEntered(node, appearing);
	        });
	      });
	    });
	  };
	
	  _proto.performExit = function performExit(node) {
	    var _this3 = this;
	
	    var exit = this.props.exit;
	    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED
	
	    if (!exit) {
	      this.safeSetState({
	        status: EXITED
	      }, function () {
	        _this3.props.onExited(node);
	      });
	      return;
	    }
	
	    this.props.onExit(node);
	    this.safeSetState({
	      status: EXITING
	    }, function () {
	      _this3.props.onExiting(node);
	
	      _this3.onTransitionEnd(node, timeouts.exit, function () {
	        _this3.safeSetState({
	          status: EXITED
	        }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  _proto.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  _proto.safeSetState = function safeSetState(nextState, callback) {
	    // This shouldn't be necessary, but there are weird race conditions with
	    // setState callbacks and unmounting in testing, so always make sure that
	    // we can cancel any pending setState callbacks after we unmount.
	    callback = this.setNextCallback(callback);
	    this.setState(nextState, callback);
	  };
	
	  _proto.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
	    this.setNextCallback(handler);
	    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
	
	    if (!node || doesNotHaveTimeoutOrListener) {
	      setTimeout(this.nextCallback, 0);
	      return;
	    }
	
	    if (this.props.addEndListener) {
	      this.props.addEndListener(node, this.nextCallback);
	    }
	
	    if (timeout != null) {
	      setTimeout(this.nextCallback, timeout);
	    }
	  };
	
	  _proto.render = function render() {
	    var status = this.state.status;
	
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _this$props = this.props,
	        children = _this$props.children,
	        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition
	
	
	    delete childProps.in;
	    delete childProps.mountOnEnter;
	    delete childProps.unmountOnExit;
	    delete childProps.appear;
	    delete childProps.enter;
	    delete childProps.exit;
	    delete childProps.timeout;
	    delete childProps.addEndListener;
	    delete childProps.onEnter;
	    delete childProps.onEntering;
	    delete childProps.onEntered;
	    delete childProps.onExit;
	    delete childProps.onExiting;
	    delete childProps.onExited;
	
	    if (typeof children === 'function') {
	      return children(status, childProps);
	    }
	
	    var child = _react.default.Children.only(children);
	
	    return _react.default.cloneElement(child, childProps);
	  };
	
	  return Transition;
	}(_react.default.Component);
	
	Transition.contextTypes = {
	  transitionGroup: PropTypes.object
	};
	Transition.childContextTypes = {
	  transitionGroup: function transitionGroup() {}
	};
	Transition.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * A `function` child can be used instead of a React element.
	   * This function is called with the current transition status
	   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
	   * to apply context specific props to a component.
	   *
	   * ```jsx
	   * <Transition timeout={150}>
	   *   {(status) => (
	   *     <MyComponent className={`fade fade-${status}`} />
	   *   )}
	   * </Transition>
	   * ```
	   */
	  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
	
	  /**
	   * Show the component; triggers the enter or exit states
	   */
	  in: PropTypes.bool,
	
	  /**
	   * By default the child component is mounted immediately along with
	   * the parent `Transition` component. If you want to "lazy mount" the component on the
	   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
	   * mounted, even on "exited", unless you also specify `unmountOnExit`.
	   */
	  mountOnEnter: PropTypes.bool,
	
	  /**
	   * By default the child component stays mounted after it reaches the `'exited'` state.
	   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
	   */
	  unmountOnExit: PropTypes.bool,
	
	  /**
	   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
	   * If you want to transition on the first mount set `appear` to `true`, and the
	   * component will transition in as soon as the `<Transition>` mounts.
	   *
	   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
	   */
	  appear: PropTypes.bool,
	
	  /**
	   * Enable or disable enter transitions.
	   */
	  enter: PropTypes.bool,
	
	  /**
	   * Enable or disable exit transitions.
	   */
	  exit: PropTypes.bool,
	
	  /**
	   * The duration of the transition, in milliseconds.
	   * Required unless `addEndListener` is provided
	   *
	   * You may specify a single timeout for all transitions like: `timeout={500}`,
	   * or individually like:
	   *
	   * ```jsx
	   * timeout={{
	   *  enter: 300,
	   *  exit: 500,
	   *  appear: 500,
	   * }}
	   * ```
	   *
	   * If the value of `appear` is not set, then the value from enter is taken.
	   *
	   * If the `enter` or `exit` value is `null` or `undefined`, then the timer is set to `0`
	   *
	   * @type {number | { enter?: number, exit?: number, appear?: number }}
	   */
	  timeout: function timeout(props) {
	    var pt = process.env.NODE_ENV !== "production" ? _PropTypes.timeoutsShape : {};;
	    if (!props.addEndListener) pt = pt.isRequired;
	
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return pt.apply(void 0, [props].concat(args));
	  },
	
	  /**
	   * Add a custom transition end trigger. Called with the transitioning
	   * DOM node and a `done` callback. Allows for more fine grained transition end
	   * logic. **Note:** Timeouts are still used as a fallback if provided.
	   *
	   * ```jsx
	   * addEndListener={(node, done) => {
	   *   // use the css transitionend event to mark the finish of a transition
	   *   node.addEventListener('transitionend', done, false);
	   * }}
	   * ```
	   */
	  addEndListener: PropTypes.func,
	
	  /**
	   * Callback fired before the "entering" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool) -> void
	   */
	  onEnter: PropTypes.func,
	
	  /**
	   * Callback fired after the "entering" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool)
	   */
	  onEntering: PropTypes.func,
	
	  /**
	   * Callback fired after the "entered" status is applied. An extra parameter
	   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	   *
	   * @type Function(node: HtmlElement, isAppearing: bool) -> void
	   */
	  onEntered: PropTypes.func,
	
	  /**
	   * Callback fired before the "exiting" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExit: PropTypes.func,
	
	  /**
	   * Callback fired after the "exiting" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExiting: PropTypes.func,
	
	  /**
	   * Callback fired after the "exited" status is applied.
	   *
	   * @type Function(node: HtmlElement) -> void
	   */
	  onExited: PropTypes.func // Name the function so it is clearer in the documentation
	
	} : {};
	
	function noop() {}
	
	Transition.defaultProps = {
	  in: false,
	  mountOnEnter: false,
	  unmountOnExit: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	Transition.UNMOUNTED = 0;
	Transition.EXITED = 1;
	Transition.ENTERING = 2;
	Transition.ENTERED = 3;
	Transition.EXITING = 4;
	
	var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);
	
	exports.default = _default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}
	
	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  }
	  // Binding "this" is important for shallow renderer support.
	  this.setState(updater.bind(this));
	}
	
	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
	      prevProps,
	      prevState
	    );
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	}
	
	// React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.
	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;
	
	function polyfill(Component) {
	  var prototype = Component.prototype;
	
	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }
	
	  if (
	    typeof Component.getDerivedStateFromProps !== 'function' &&
	    typeof prototype.getSnapshotBeforeUpdate !== 'function'
	  ) {
	    return Component;
	  }
	
	  // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.
	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;
	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }
	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }
	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }
	  if (
	    foundWillMountName !== null ||
	    foundWillReceivePropsName !== null ||
	    foundWillUpdateName !== null
	  ) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName =
	      typeof Component.getDerivedStateFromProps === 'function'
	        ? 'getDerivedStateFromProps()'
	        : 'getSnapshotBeforeUpdate()';
	
	    throw Error(
	      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
	        componentName +
	        ' uses ' +
	        newApiName +
	        ' but also contains the following legacy lifecycles:' +
	        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
	        (foundWillReceivePropsName !== null
	          ? '\n  ' + foundWillReceivePropsName
	          : '') +
	        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
	        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
	        'https://fb.me/react-async-component-lifecycle-hooks'
	    );
	  }
	
	  // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.
	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  }
	
	  // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.
	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error(
	        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
	      );
	    }
	
	    prototype.componentWillUpdate = componentWillUpdate;
	
	    var componentDidUpdate = prototype.componentDidUpdate;
	
	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
	      prevProps,
	      prevState,
	      maybeSnapshot
	    ) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag
	        ? this.__reactInternalSnapshot
	        : maybeSnapshot;
	
	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }
	
	  return Component;
	}
	
	exports.polyfill = polyfill;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	exports.classNamesShape = exports.timeoutsShape = void 0;
	
	var _propTypes = _interopRequireDefault(__webpack_require__(6));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var timeoutsShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
	  enter: _propTypes.default.number,
	  exit: _propTypes.default.number,
	  appear: _propTypes.default.number
	}).isRequired]) : null;
	exports.timeoutsShape = timeoutsShape;
	var classNamesShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
	  enter: _propTypes.default.string,
	  exit: _propTypes.default.string,
	  active: _propTypes.default.string
	}), _propTypes.default.shape({
	  enter: _propTypes.default.string,
	  enterDone: _propTypes.default.string,
	  enterActive: _propTypes.default.string,
	  exit: _propTypes.default.string,
	  exitDone: _propTypes.default.string,
	  exitActive: _propTypes.default.string
	})]) : null;
	exports.classNamesShape = classNamesShape;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _propTypes = _interopRequireDefault(__webpack_require__(6));
	
	var _react = _interopRequireDefault(__webpack_require__(1));
	
	var _reactDom = __webpack_require__(2);
	
	var _TransitionGroup = _interopRequireDefault(__webpack_require__(89));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	
	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
	
	/**
	 * The `<ReplaceTransition>` component is a specialized `Transition` component
	 * that animates between two children.
	 *
	 * ```jsx
	 * <ReplaceTransition in>
	 *   <Fade><div>I appear first</div></Fade>
	 *   <Fade><div>I replace the above</div></Fade>
	 * </ReplaceTransition>
	 * ```
	 */
	var ReplaceTransition =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(ReplaceTransition, _React$Component);
	
	  function ReplaceTransition() {
	    var _this;
	
	    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
	      _args[_key] = arguments[_key];
	    }
	
	    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
	
	    _this.handleEnter = function () {
	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      return _this.handleLifecycle('onEnter', 0, args);
	    };
	
	    _this.handleEntering = function () {
	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return _this.handleLifecycle('onEntering', 0, args);
	    };
	
	    _this.handleEntered = function () {
	      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      return _this.handleLifecycle('onEntered', 0, args);
	    };
	
	    _this.handleExit = function () {
	      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      return _this.handleLifecycle('onExit', 1, args);
	    };
	
	    _this.handleExiting = function () {
	      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      return _this.handleLifecycle('onExiting', 1, args);
	    };
	
	    _this.handleExited = function () {
	      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      return _this.handleLifecycle('onExited', 1, args);
	    };
	
	    return _this;
	  }
	
	  var _proto = ReplaceTransition.prototype;
	
	  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
	    var _child$props;
	
	    var children = this.props.children;
	
	    var child = _react.default.Children.toArray(children)[idx];
	
	    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
	    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
	  };
	
	  _proto.render = function render() {
	    var _this$props = this.props,
	        children = _this$props.children,
	        inProp = _this$props.in,
	        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);
	
	    var _React$Children$toArr = _react.default.Children.toArray(children),
	        first = _React$Children$toArr[0],
	        second = _React$Children$toArr[1];
	
	    delete props.onEnter;
	    delete props.onEntering;
	    delete props.onEntered;
	    delete props.onExit;
	    delete props.onExiting;
	    delete props.onExited;
	    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
	      key: 'first',
	      onEnter: this.handleEnter,
	      onEntering: this.handleEntering,
	      onEntered: this.handleEntered
	    }) : _react.default.cloneElement(second, {
	      key: 'second',
	      onEnter: this.handleExit,
	      onEntering: this.handleExiting,
	      onEntered: this.handleExited
	    }));
	  };
	
	  return ReplaceTransition;
	}(_react.default.Component);
	
	ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
	  in: _propTypes.default.bool.isRequired,
	  children: function children(props, propName) {
	    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
	    return null;
	  }
	} : {};
	var _default = ReplaceTransition;
	exports.default = _default;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _propTypes = _interopRequireDefault(__webpack_require__(6));
	
	var _react = _interopRequireDefault(__webpack_require__(1));
	
	var _reactLifecyclesCompat = __webpack_require__(86);
	
	var _ChildMapping = __webpack_require__(90);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
	
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	
	var values = Object.values || function (obj) {
	  return Object.keys(obj).map(function (k) {
	    return obj[k];
	  });
	};
	
	var defaultProps = {
	  component: 'div',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	  /**
	   * The `<TransitionGroup>` component manages a set of transition components
	   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
	   * components, `<TransitionGroup>` is a state machine for managing the mounting
	   * and unmounting of components over time.
	   *
	   * Consider the example below. As items are removed or added to the TodoList the
	   * `in` prop is toggled automatically by the `<TransitionGroup>`.
	   *
	   * Note that `<TransitionGroup>`  does not define any animation behavior!
	   * Exactly _how_ a list item animates is up to the individual transition
	   * component. This means you can mix and match animations across different list
	   * items.
	   */
	
	};
	
	var TransitionGroup =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(TransitionGroup, _React$Component);
	
	  function TransitionGroup(props, context) {
	    var _this;
	
	    _this = _React$Component.call(this, props, context) || this;
	
	    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear
	
	
	    _this.state = {
	      handleExited: handleExited,
	      firstRender: true
	    };
	    return _this;
	  }
	
	  var _proto = TransitionGroup.prototype;
	
	  _proto.getChildContext = function getChildContext() {
	    return {
	      transitionGroup: {
	        isMounting: !this.appeared
	      }
	    };
	  };
	
	  _proto.componentDidMount = function componentDidMount() {
	    this.appeared = true;
	    this.mounted = true;
	  };
	
	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };
	
	  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
	    var prevChildMapping = _ref.children,
	        handleExited = _ref.handleExited,
	        firstRender = _ref.firstRender;
	    return {
	      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
	      firstRender: false
	    };
	  };
	
	  _proto.handleExited = function handleExited(child, node) {
	    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
	    if (child.key in currentChildMapping) return;
	
	    if (child.props.onExited) {
	      child.props.onExited(node);
	    }
	
	    if (this.mounted) {
	      this.setState(function (state) {
	        var children = _extends({}, state.children);
	
	        delete children[child.key];
	        return {
	          children: children
	        };
	      });
	    }
	  };
	
	  _proto.render = function render() {
	    var _this$props = this.props,
	        Component = _this$props.component,
	        childFactory = _this$props.childFactory,
	        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
	
	    var children = values(this.state.children).map(childFactory);
	    delete props.appear;
	    delete props.enter;
	    delete props.exit;
	
	    if (Component === null) {
	      return children;
	    }
	
	    return _react.default.createElement(Component, props, children);
	  };
	
	  return TransitionGroup;
	}(_react.default.Component);
	
	TransitionGroup.childContextTypes = {
	  transitionGroup: _propTypes.default.object.isRequired
	};
	TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
	  /**
	   * `<TransitionGroup>` renders a `<div>` by default. You can change this
	   * behavior by providing a `component` prop.
	   * If you use React v16+ and would like to avoid a wrapping `<div>` element
	   * you can pass in `component={null}`. This is useful if the wrapping div
	   * borks your css styles.
	   */
	  component: _propTypes.default.any,
	
	  /**
	   * A set of `<Transition>` components, that are toggled `in` and out as they
	   * leave. the `<TransitionGroup>` will inject specific transition props, so
	   * remember to spread them through if you are wrapping the `<Transition>` as
	   * with our `<Fade>` example.
	   *
	   * While this component is meant to make it easier to animate multiple
	   * `Transition` or `CSSTransition` children, sometimes you want to transition a
	   * single child by changing its content, e.g. routes, slides, images in a
	   * carousel etc. In that case you can change the `key` prop of the child
	   * component along with its content, that way `TransitionGroup` will know that
	   * it should transition the child.
	   */
	  children: _propTypes.default.node,
	
	  /**
	   * A convenience prop that enables or disables appear animations
	   * for all children. Note that specifying this will override any defaults set
	   * on individual children Transitions.
	   */
	  appear: _propTypes.default.bool,
	
	  /**
	   * A convenience prop that enables or disables enter animations
	   * for all children. Note that specifying this will override any defaults set
	   * on individual children Transitions.
	   */
	  enter: _propTypes.default.bool,
	
	  /**
	   * A convenience prop that enables or disables exit animations
	   * for all children. Note that specifying this will override any defaults set
	   * on individual children Transitions.
	   */
	  exit: _propTypes.default.bool,
	
	  /**
	   * You may need to apply reactive updates to a child as it is exiting.
	   * This is generally done by using `cloneElement` however in the case of an exiting
	   * child the element has already been removed and not accessible to the consumer.
	   *
	   * If you do need to update a child as it leaves you can provide a `childFactory`
	   * to wrap every child, even the ones that are leaving.
	   *
	   * @type Function(child: ReactElement) -> ReactElement
	   */
	  childFactory: _propTypes.default.func
	} : {};
	TransitionGroup.defaultProps = defaultProps;
	
	var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);
	
	exports.default = _default;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.getChildMapping = getChildMapping;
	exports.mergeChildMappings = mergeChildMappings;
	exports.getInitialChildMapping = getInitialChildMapping;
	exports.getNextChildMapping = getNextChildMapping;
	
	var _react = __webpack_require__(1);
	
	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */
	function getChildMapping(children, mapFn) {
	  var mapper = function mapper(child) {
	    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
	  };
	
	  var result = Object.create(null);
	  if (children) _react.Children.map(children, function (c) {
	    return c;
	  }).forEach(function (child) {
	    // run the map function here instead so that the key is the computed one
	    result[child.key] = mapper(child);
	  });
	  return result;
	}
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */
	
	
	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};
	
	  function getValueForKey(key) {
	    return key in next ? next[key] : prev[key];
	  } // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	
	
	  var nextKeysPending = Object.create(null);
	  var pendingKeys = [];
	
	  for (var prevKey in prev) {
	    if (prevKey in next) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }
	
	  var i;
	  var childMapping = {};
	
	  for (var nextKey in next) {
	    if (nextKeysPending[nextKey]) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }
	
	    childMapping[nextKey] = getValueForKey(nextKey);
	  } // Finally, add the keys which didn't appear before any key in `next`
	
	
	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }
	
	  return childMapping;
	}
	
	function getProp(child, prop, props) {
	  return props[prop] != null ? props[prop] : child.props[prop];
	}
	
	function getInitialChildMapping(props, onExited) {
	  return getChildMapping(props.children, function (child) {
	    return (0, _react.cloneElement)(child, {
	      onExited: onExited.bind(null, child),
	      in: true,
	      appear: getProp(child, 'appear', props),
	      enter: getProp(child, 'enter', props),
	      exit: getProp(child, 'exit', props)
	    });
	  });
	}
	
	function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	  var nextChildMapping = getChildMapping(nextProps.children);
	  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	  Object.keys(children).forEach(function (key) {
	    var child = children[key];
	    if (!(0, _react.isValidElement)(child)) return;
	    var hasPrev = key in prevChildMapping;
	    var hasNext = key in nextChildMapping;
	    var prevChild = prevChildMapping[key];
	    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)
	
	    if (hasNext && (!hasPrev || isLeaving)) {
	      // console.log('entering', key)
	      children[key] = (0, _react.cloneElement)(child, {
	        onExited: onExited.bind(null, child),
	        in: true,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    } else if (!hasNext && hasPrev && !isLeaving) {
	      // item is old (exiting)
	      // console.log('leaving', key)
	      children[key] = (0, _react.cloneElement)(child, {
	        in: false
	      });
	    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
	      // item hasn't changed transition states
	      // copy over the last transition props;
	      // console.log('unchanged', key)
	      children[key] = (0, _react.cloneElement)(child, {
	        onExited: onExited.bind(null, child),
	        in: prevChild.props.in,
	        exit: getProp(child, 'exit', nextProps),
	        enter: getProp(child, 'enter', nextProps)
	      });
	    }
	  });
	  return children;
	}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Clipboard = __webpack_require__(92);
	
	var _Clipboard2 = _interopRequireDefault(_Clipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Clipboard2["default"];
	module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _clipboard = __webpack_require__(93);
	
	var _clipboard2 = _interopRequireDefault(_clipboard);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _beeIcon = __webpack_require__(101);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeTooltip = __webpack_require__(103);
	
	var _beeTooltip2 = _interopRequireDefault(_beeTooltip);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tool = __webpack_require__(130);
	
	var _i18n = __webpack_require__(131);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _beeModal = __webpack_require__(132);
	
	var _beeModal2 = _interopRequireDefault(_beeModal);
	
	var _beeFormControl = __webpack_require__(151);
	
	var _beeFormControl2 = _interopRequireDefault(_beeFormControl);
	
	var _beeButton = __webpack_require__(153);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	//text和target都写的时候，target无效。 text的cut改为copy。
	// target可以传css3选择器
	var propTypes = {
	    action: _propTypes2["default"].oneOf(['copy', 'cut', null]),
	    text: _propTypes2["default"].string,
	    success: _propTypes2["default"].func,
	    error: _propTypes2["default"].func,
	    locale: _propTypes2["default"].object
	};
	var defaultProps = {
	    action: 'copy',
	    text: '',
	    target: '',
	    success: function success() {},
	    error: function error() {},
	    locale: {}
	};
	
	var Clipboard = function (_Component) {
	    _inherits(Clipboard, _Component);
	
	    function Clipboard(props, context) {
	        _classCallCheck(this, Clipboard);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.blur = function () {
	            _this.setState({
	                currect: false,
	                ready: false
	            });
	        };
	
	        _this.close = function () {
	            _this.setState({
	                modalShow: false
	            });
	        };
	
	        _this.state = {
	            currect: false,
	            html: '',
	            ready: false,
	            id: 'id' + Math.round(Math.random() * 1000 + 1) + new Date().getTime(),
	            modalShow: false
	        };
	        return _this;
	    }
	
	    Clipboard.prototype.componentWillMount = function componentWillMount() {
	        var self = this;
	        var _props = this.props,
	            success = _props.success,
	            error = _props.error;
	
	
	        var id = this.state.id;
	        var cb = new _clipboard2["default"]('#' + id);
	        cb.on('success', function (e) {
	            self.setState({
	                currect: true,
	                ready: true
	            });
	            e.clearSelection();
	            if (success instanceof Function) success();
	        });
	        cb.on('error', function (e) {
	            self.setState({
	                modalShow: true,
	                html: e.text
	            });
	            _reactDom2["default"].findDOMNode(self.refs.text).select();
	            if (error instanceof Function) error();
	        });
	    };
	
	    Clipboard.prototype.render = function render() {
	        var _props2 = this.props,
	            action = _props2.action,
	            text = _props2.text,
	            target = _props2.target;
	
	        if (text) action = 'copy';
	
	        var locale = (0, _tool.getComponentLocale)(this.props, this.context, 'Clipboard', function () {
	            return _i18n2["default"];
	        });
	        var tootipContent = locale[action];
	        if (this.state.ready) {
	            tootipContent = locale[action + 'Ready'];
	        }
	
	        return _react2["default"].createElement(
	            _beeTooltip2["default"],
	            {
	                positionTop: '20px',
	                overlay: tootipContent,
	                placement: 'top' },
	            _react2["default"].createElement(
	                'span',
	                {
	                    onMouseOut: this.blur,
	                    className: 'u-clipboard',
	                    id: this.state.id,
	                    'data-clipboard-action': action,
	                    'data-clipboard-target': target,
	                    'data-clipboard-text': text },
	                this.props.children ? this.props.children : _react2["default"].createElement(_beeIcon2["default"], {
	                    className: (0, _classnames2["default"])({
	                        'uf-correct': this.state.currect,
	                        'uf-copy': !this.state.currect
	                    })
	                }),
	                _react2["default"].createElement(
	                    _beeModal2["default"],
	                    { show: this.state.modalShow, onHide: this.close },
	                    _react2["default"].createElement(
	                        _beeModal2["default"].Header,
	                        { closeButton: true },
	                        _react2["default"].createElement(
	                            _beeModal2["default"].Title,
	                            null,
	                            ' Ctrl+C ',
	                            locale['copyToClipboard'],
	                            ' '
	                        )
	                    ),
	                    _react2["default"].createElement(
	                        _beeModal2["default"].Body,
	                        null,
	                        _react2["default"].createElement(_beeFormControl2["default"], { ref: 'text', type: 'text', readOnly: true, value: this.state.html })
	                    ),
	                    _react2["default"].createElement(
	                        _beeModal2["default"].Footer,
	                        null,
	                        _react2["default"].createElement(
	                            _beeButton2["default"],
	                            { onClick: this.close },
	                            ' ',
	                            locale['close'],
	                            ' '
	                        )
	                    )
	                )
	            )
	        );
	    };
	
	    return Clipboard;
	}(_react.Component);
	
	;
	Clipboard.propTypes = propTypes;
	Clipboard.defaultProps = defaultProps;
	exports["default"] = Clipboard;
	module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(94), __webpack_require__(96), __webpack_require__(97)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
	        global.clipboard = mod.exports;
	    }
	})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
	    'use strict';
	
	    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);
	
	    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);
	
	    var _goodListener2 = _interopRequireDefault(_goodListener);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }
	
	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }
	
	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }
	
	    var Clipboard = function (_Emitter) {
	        _inherits(Clipboard, _Emitter);
	
	        /**
	         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	         * @param {Object} options
	         */
	        function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);
	
	            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
	
	            _this.resolveOptions(options);
	            _this.listenClick(trigger);
	            return _this;
	        }
	
	        /**
	         * Defines if attributes would be resolved using internal setter functions
	         * or custom functions that were passed in the constructor.
	         * @param {Object} options
	         */
	
	
	        _createClass(Clipboard, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
	            }
	        }, {
	            key: 'listenClick',
	            value: function listenClick(trigger) {
	                var _this2 = this;
	
	                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                    return _this2.onClick(e);
	                });
	            }
	        }, {
	            key: 'onClick',
	            value: function onClick(e) {
	                var trigger = e.delegateTarget || e.currentTarget;
	
	                if (this.clipboardAction) {
	                    this.clipboardAction = null;
	                }
	
	                this.clipboardAction = new _clipboardAction2.default({
	                    action: this.action(trigger),
	                    target: this.target(trigger),
	                    text: this.text(trigger),
	                    container: this.container,
	                    trigger: trigger,
	                    emitter: this
	                });
	            }
	        }, {
	            key: 'defaultAction',
	            value: function defaultAction(trigger) {
	                return getAttributeValue('action', trigger);
	            }
	        }, {
	            key: 'defaultTarget',
	            value: function defaultTarget(trigger) {
	                var selector = getAttributeValue('target', trigger);
	
	                if (selector) {
	                    return document.querySelector(selector);
	                }
	            }
	        }, {
	            key: 'defaultText',
	            value: function defaultText(trigger) {
	                return getAttributeValue('text', trigger);
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.listener.destroy();
	
	                if (this.clipboardAction) {
	                    this.clipboardAction.destroy();
	                    this.clipboardAction = null;
	                }
	            }
	        }], [{
	            key: 'isSupported',
	            value: function isSupported() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
	
	                var actions = typeof action === 'string' ? [action] : action;
	                var support = !!document.queryCommandSupported;
	
	                actions.forEach(function (action) {
	                    support = support && !!document.queryCommandSupported(action);
	                });
	
	                return support;
	            }
	        }]);
	
	        return Clipboard;
	    }(_tinyEmitter2.default);
	
	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */
	    function getAttributeValue(suffix, element) {
	        var attribute = 'data-clipboard-' + suffix;
	
	        if (!element.hasAttribute(attribute)) {
	            return;
	        }
	
	        return element.getAttribute(attribute);
	    }
	
	    module.exports = Clipboard;
	});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(95)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('select'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.select);
	        global.clipboardAction = mod.exports;
	    }
	})(this, function (module, _select) {
	    'use strict';
	
	    var _select2 = _interopRequireDefault(_select);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    var ClipboardAction = function () {
	        /**
	         * @param {Object} options
	         */
	        function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);
	
	            this.resolveOptions(options);
	            this.initSelection();
	        }
	
	        /**
	         * Defines base properties passed from constructor.
	         * @param {Object} options
	         */
	
	
	        _createClass(ClipboardAction, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                this.action = options.action;
	                this.container = options.container;
	                this.emitter = options.emitter;
	                this.target = options.target;
	                this.text = options.text;
	                this.trigger = options.trigger;
	
	                this.selectedText = '';
	            }
	        }, {
	            key: 'initSelection',
	            value: function initSelection() {
	                if (this.text) {
	                    this.selectFake();
	                } else if (this.target) {
	                    this.selectTarget();
	                }
	            }
	        }, {
	            key: 'selectFake',
	            value: function selectFake() {
	                var _this = this;
	
	                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
	
	                this.removeFake();
	
	                this.fakeHandlerCallback = function () {
	                    return _this.removeFake();
	                };
	                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
	
	                this.fakeElem = document.createElement('textarea');
	                // Prevent zooming on iOS
	                this.fakeElem.style.fontSize = '12pt';
	                // Reset box model
	                this.fakeElem.style.border = '0';
	                this.fakeElem.style.padding = '0';
	                this.fakeElem.style.margin = '0';
	                // Move element out of screen horizontally
	                this.fakeElem.style.position = 'absolute';
	                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
	                // Move element to the same position vertically
	                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
	                this.fakeElem.style.top = yPosition + 'px';
	
	                this.fakeElem.setAttribute('readonly', '');
	                this.fakeElem.value = this.text;
	
	                this.container.appendChild(this.fakeElem);
	
	                this.selectedText = (0, _select2.default)(this.fakeElem);
	                this.copyText();
	            }
	        }, {
	            key: 'removeFake',
	            value: function removeFake() {
	                if (this.fakeHandler) {
	                    this.container.removeEventListener('click', this.fakeHandlerCallback);
	                    this.fakeHandler = null;
	                    this.fakeHandlerCallback = null;
	                }
	
	                if (this.fakeElem) {
	                    this.container.removeChild(this.fakeElem);
	                    this.fakeElem = null;
	                }
	            }
	        }, {
	            key: 'selectTarget',
	            value: function selectTarget() {
	                this.selectedText = (0, _select2.default)(this.target);
	                this.copyText();
	            }
	        }, {
	            key: 'copyText',
	            value: function copyText() {
	                var succeeded = void 0;
	
	                try {
	                    succeeded = document.execCommand(this.action);
	                } catch (err) {
	                    succeeded = false;
	                }
	
	                this.handleResult(succeeded);
	            }
	        }, {
	            key: 'handleResult',
	            value: function handleResult(succeeded) {
	                this.emitter.emit(succeeded ? 'success' : 'error', {
	                    action: this.action,
	                    text: this.selectedText,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            }
	        }, {
	            key: 'clearSelection',
	            value: function clearSelection() {
	                if (this.trigger) {
	                    this.trigger.focus();
	                }
	
	                window.getSelection().removeAllRanges();
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.removeFake();
	            }
	        }, {
	            key: 'action',
	            set: function set() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
	
	                this._action = action;
	
	                if (this._action !== 'copy' && this._action !== 'cut') {
	                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
	                }
	            },
	            get: function get() {
	                return this._action;
	            }
	        }, {
	            key: 'target',
	            set: function set(target) {
	                if (target !== undefined) {
	                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                        }
	
	                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                        }
	
	                        this._target = target;
	                    } else {
	                        throw new Error('Invalid "target" value, use a valid Element');
	                    }
	                }
	            },
	            get: function get() {
	                return this._target;
	            }
	        }]);
	
	        return ClipboardAction;
	    }();
	
	    module.exports = ClipboardAction;
	});

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	function select(element) {
	    var selectedText;
	
	    if (element.nodeName === 'SELECT') {
	        element.focus();
	
	        selectedText = element.value;
	    }
	    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        var isReadOnly = element.hasAttribute('readonly');
	
	        if (!isReadOnly) {
	            element.setAttribute('readonly', '');
	        }
	
	        element.select();
	        element.setSelectionRange(0, element.value.length);
	
	        if (!isReadOnly) {
	            element.removeAttribute('readonly');
	        }
	
	        selectedText = element.value;
	    }
	    else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }
	
	        var selection = window.getSelection();
	        var range = document.createRange();
	
	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);
	
	        selectedText = selection.toString();
	    }
	
	    return selectedText;
	}
	
	module.exports = select;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}
	
	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});
	
	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });
	
	    return this;
	  },
	
	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };
	
	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },
	
	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;
	
	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }
	
	    return this;
	  },
	
	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];
	
	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }
	
	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
	
	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];
	
	    return this;
	  }
	};
	
	module.exports = E;
	module.exports.TinyEmitter = E;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var is = __webpack_require__(98);
	var delegate = __webpack_require__(99);
	
	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }
	
	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }
	
	    if (!is.fn(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }
	
	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    }
	    else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    }
	    else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    }
	    else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}
	
	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);
	
	    return {
	        destroy: function() {
	            node.removeEventListener(type, callback);
	        }
	    }
	}
	
	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function(node) {
	        node.addEventListener(type, callback);
	    });
	
	    return {
	        destroy: function() {
	            Array.prototype.forEach.call(nodeList, function(node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    }
	}
	
	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}
	
	module.exports = listen;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function(value) {
	    return value !== undefined
	        && value instanceof HTMLElement
	        && value.nodeType === 1;
	};
	
	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return value !== undefined
	        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
	        && ('length' in value)
	        && (value.length === 0 || exports.node(value[0]));
	};
	
	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function(value) {
	    return typeof value === 'string'
	        || value instanceof String;
	};
	
	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.fn = function(value) {
	    var type = Object.prototype.toString.call(value);
	
	    return type === '[object Function]';
	};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(100);
	
	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function _delegate(element, selector, type, callback, useCapture) {
	    var listenerFn = listener.apply(this, arguments);
	
	    element.addEventListener(type, listenerFn, useCapture);
	
	    return {
	        destroy: function() {
	            element.removeEventListener(type, listenerFn, useCapture);
	        }
	    }
	}
	
	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element|String|Array} [elements]
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function delegate(elements, selector, type, callback, useCapture) {
	    // Handle the regular Element usage
	    if (typeof elements.addEventListener === 'function') {
	        return _delegate.apply(null, arguments);
	    }
	
	    // Handle Element-less usage, it defaults to global delegation
	    if (typeof type === 'function') {
	        // Use `document` as the first parameter, then apply arguments
	        // This is a short way to .unshift `arguments` without running into deoptimizations
	        return _delegate.bind(null, document).apply(null, arguments);
	    }
	
	    // Handle Selector-based usage
	    if (typeof elements === 'string') {
	        elements = document.querySelectorAll(elements);
	    }
	
	    // Handle Array-like based usage
	    return Array.prototype.map.call(elements, function (element) {
	        return _delegate(element, selector, type, callback, useCapture);
	    });
	}
	
	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function(e) {
	        e.delegateTarget = closest(e.target, selector);
	
	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    }
	}
	
	module.exports = delegate;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	var DOCUMENT_NODE_TYPE = 9;
	
	/**
	 * A polyfill for Element.matches()
	 */
	if (typeof Element !== 'undefined' && !Element.prototype.matches) {
	    var proto = Element.prototype;
	
	    proto.matches = proto.matchesSelector ||
	                    proto.mozMatchesSelector ||
	                    proto.msMatchesSelector ||
	                    proto.oMatchesSelector ||
	                    proto.webkitMatchesSelector;
	}
	
	/**
	 * Finds the closest parent that matches a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @return {Function}
	 */
	function closest (element, selector) {
	    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
	        if (typeof element.matches === 'function' &&
	            element.matches(selector)) {
	          return element;
	        }
	        element = element.parentNode;
	    }
	}
	
	module.exports = closest;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(102);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Icon2["default"];
	module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
		type: _propTypes2["default"].string
	
	};
	/**
	 *  badge 默认显示内容1
	 */
	var defaultProps = {
		clsPrefix: 'uf'
	};
	
	var Icon = function (_Component) {
		_inherits(Icon, _Component);
	
		function Icon(props) {
			_classCallCheck(this, Icon);
	
			return _possibleConstructorReturn(this, _Component.call(this, props));
		}
	
		Icon.prototype.render = function render() {
			var _props = this.props,
			    type = _props.type,
			    className = _props.className,
			    clsPrefix = _props.clsPrefix,
			    others = _objectWithoutProperties(_props, ['type', 'className', 'clsPrefix']);
	
			var clsObj = {};
	
			var classNames = (0, _classnames2["default"])(clsPrefix, type);
	
			return _react2["default"].createElement('i', _extends({}, others, { className: (0, _classnames2["default"])(classNames, className) }));
		};
	
		return Icon;
	}(_react.Component);
	
	Icon.defaultProps = defaultProps;
	Icon.propTypes = propTypes;
	
	exports["default"] = Icon;
	module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(104);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Tooltip2["default"];
	module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _OverlayTrigger = __webpack_require__(105);
	
	var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    /**
	     * @required
	     */
	    id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	    inverse: _propTypes2["default"].bool,
	    visible: _propTypes2["default"].bool,
	    onVisibleChange: _propTypes2["default"].func,
	    /**
	     * 相对目标元素显示上下左右的位置
	     */
	    placement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),
	
	    /**
	     * 绝对定位上边距.
	     */
	    positionTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
	    /**
	     * 绝对定位左边距
	     */
	    positionLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
	
	    /**
	     * 与目标Top的距离
	     */
	    arrowOffsetTop: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
	    /**
	     * 与目标Left的距离
	     */
	    arrowOffsetLeft: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])
	};
	
	var defaultProps = {
	    placement: 'right',
	    clsPrefix: 'u-tooltip'
	};
	function OverlayNode(props) {
	    var className = props.className,
	        classNames = props.classNames,
	        style = props.style,
	        overlay = props.overlay,
	        arrowOffsetTop = props.arrowOffsetTop,
	        arrowOffsetLeft = props.arrowOffsetLeft;
	
	    return _react2["default"].createElement(
	        'div',
	        {
	            className: (0, _classnames2["default"])(className, classNames),
	            onMouseEnter: props.onMouseEnter,
	            onMouseLeave: props.onMouseLeave,
	            style: style
	        },
	        overlay ? _react2["default"].createElement('div', { className: 'tooltip-arrow', style: {
	                top: arrowOffsetTop,
	                left: arrowOffsetLeft
	            } }) : '',
	        overlay ? _react2["default"].createElement(
	            'div',
	            { className: 'tooltip-inner' },
	            overlay
	        ) : ''
	    );
	}
	
	var Tooltip = function (_React$Component) {
	    _inherits(Tooltip, _React$Component);
	
	    function Tooltip(props) {
	        _classCallCheck(this, Tooltip);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.onMouseEnter = function () {
	            _this.setState({
	                isHoverShow: true
	            });
	        };
	
	        _this.onMouseLeave = function () {
	            _this.setState({
	                isHoverShow: false
	            });
	        };
	
	        var initState = {
	            isHoverShow: false
	        };
	        if ('visible' in props) {
	            _extends(initState, {
	                visible: props.visible
	            });
	        }
	        _this.state = initState;
	        return _this;
	    }
	
	    Tooltip.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        var _props = this.props,
	            visible = _props.visible,
	            onVisibleChange = _props.onVisibleChange;
	
	        if ('visible' in this.props && prevProps.visible !== visible) {
	            this.setState({
	                visible: visible
	            });
	            onVisibleChange && onVisibleChange(visible);
	        }
	    };
	
	    /**
	     * @desc 鼠标划入时候的事件
	     */
	
	
	    /**
	     * @desc 鼠标划出时候的事件
	     */
	
	
	    Tooltip.prototype.render = function render() {
	        var _classes,
	            _this2 = this;
	
	        var _props2 = this.props,
	            placement = _props2.placement,
	            positionTop = _props2.positionTop,
	            positionLeft = _props2.positionLeft,
	            arrowOffsetTop = _props2.arrowOffsetTop,
	            arrowOffsetLeft = _props2.arrowOffsetLeft,
	            className = _props2.className,
	            style = _props2.style,
	            children = _props2.children,
	            clsPrefix = _props2.clsPrefix,
	            overlay = _props2.overlay,
	            inverse = _props2.inverse,
	            others = _objectWithoutProperties(_props2, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'className', 'style', 'children', 'clsPrefix', 'overlay', 'inverse']);
	
	        var classes = (_classes = {}, _defineProperty(_classes, placement, true), _defineProperty(_classes, 'inverse', inverse), _classes);
	
	        var outerStyle = _extends({
	            top: positionTop,
	            left: positionLeft
	        }, style);
	
	        var arrowStyle = {
	            top: arrowOffsetTop,
	            left: arrowOffsetLeft
	        };
	
	        var classNames = (0, _classnames2["default"])(clsPrefix, classes);
	
	        var overlayNode = _react2["default"].createElement(OverlayNode, {
	            className: className,
	            classNames: classNames,
	            overlay: overlay,
	            onMouseEnter: this.onMouseEnter,
	            onMouseLeave: this.onMouseLeave,
	            style: true,
	            arrowOffsetTop: true,
	            arrowOffsetLeft: true
	        });
	        return 'visible' in this.props ? _react2["default"].createElement(
	            _OverlayTrigger2["default"],
	            _extends({ visible: this.state.visible, ref: function ref(_ref) {
	                    return _this2.trigger = _ref;
	                }, shouldUpdatePosition: true, placement: placement }, others, { overlay: overlayNode }),
	            children
	        ) : _react2["default"].createElement(
	            _OverlayTrigger2["default"],
	            _extends({ isHoverShow: this.state.isHoverShow, ref: function ref(_ref2) {
	                    return _this2.trigger = _ref2;
	                }, shouldUpdatePosition: true, placement: placement }, others, { overlay: overlayNode }),
	            children
	        );
	    };
	
	    return Tooltip;
	}(_react2["default"].Component);
	
	Tooltip.propTypes = propTypes;
	Tooltip.defaultProps = defaultProps;
	
	exports["default"] = Tooltip;
	module.exports = exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _contains = __webpack_require__(106);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _warning = __webpack_require__(31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _Portal = __webpack_require__(107);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _Overlay = __webpack_require__(111);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _createChainedFunction = __webpack_require__(129);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var isReact16 = _reactDom2["default"].createPortal !== undefined;
	var createPortal = isReact16 ? _reactDom2["default"].createPortal : _reactDom2["default"].unstable_renderSubtreeIntoContainer;
	
	/**
	 * 检查值是属于这个值，还是等于这个值
	 *
	 * @param {string} one
	 * @param {string|array} of
	 * @returns {boolean}
	 */
	function isOneOf(one, of) {
	    if (Array.isArray(of)) {
	        return of.indexOf(one) >= 0;
	    }
	    return one === of;
	}
	
	var triggerType = _propTypes2["default"].oneOf(['click', 'hover', 'focus']);
	
	var propTypes = _extends({}, _Portal2["default"].propTypes, _Overlay2["default"].propTypes, {
	
	    /**
	     * 指定哪些操作或操作触发叠加层可见性
	     */
	    trigger: _propTypes2["default"].oneOfType([triggerType, _propTypes2["default"].arrayOf(triggerType)]),
	
	    /**
	     * 显示和隐藏覆盖一旦触发的毫秒延迟量
	     */
	    delay: _propTypes2["default"].number,
	    /**
	     * 触发后显示叠加层之前的延迟毫秒
	     */
	    delayShow: _propTypes2["default"].number,
	    /**
	     * 触发后隐藏叠加层的延迟毫秒
	     */
	    delayHide: _propTypes2["default"].number,
	
	    // FIXME: This should be `defaultShow`.
	    /**
	     * 覆盖的初始可见性状态。对于更细微的可见性控制，请考虑直接使用覆盖组件。
	     */
	    defaultOverlayShown: _propTypes2["default"].bool,
	    visible: _propTypes2["default"].bool,
	
	    /**
	     * 要覆盖在目标旁边的元素或文本。
	     */
	    overlay: _propTypes2["default"].node.isRequired,
	
	    /**
	     * @private
	     */
	    onBlur: _propTypes2["default"].func,
	    /**
	     * @private
	     */
	    onClick: _propTypes2["default"].func,
	    /**
	     * @private
	     */
	    onFocus: _propTypes2["default"].func,
	    /**
	     * @private
	     */
	    onMouseOut: _propTypes2["default"].func,
	    /**
	     * @private
	     */
	    onMouseOver: _propTypes2["default"].func,
	
	    // Overridden props from `<Overlay>`.
	    /**
	     * @private
	     */
	    target: _propTypes2["default"].oneOf([null]),
	    /**
	     * @private
	     */
	    onHide: _propTypes2["default"].oneOf([null]),
	    /**
	     * @private
	     */
	    show: _propTypes2["default"].oneOf([null])
	});
	
	var defaultProps = {
	    defaultOverlayShown: false,
	    trigger: ['hover', 'focus']
	};
	
	var OverlayTrigger = function (_Component) {
	    _inherits(OverlayTrigger, _Component);
	
	    function OverlayTrigger(props, context) {
	        _classCallCheck(this, OverlayTrigger);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.handleToggle = _this.handleToggle.bind(_this);
	        _this.handleDelayedShow = _this.handleDelayedShow.bind(_this);
	        _this.handleDelayedHide = _this.handleDelayedHide.bind(_this);
	        _this.handleHide = _this.handleHide.bind(_this);
	        _this.makeOverlay = _this.makeOverlay.bind(_this);
	
	        _this.handleMouseOver = function (e) {
	            return _this.handleMouseOverOut(_this.handleDelayedShow, e);
	        };
	        _this.handleMouseOut = function (e) {
	            return _this.handleMouseOverOut(_this.handleDelayedHide, e);
	        };
	
	        _this._mountNode = null;
	
	        var visible = void 0;
	        if ('visible' in props) {
	            visible = !!props.visible;
	        } else {
	            visible = !!props.defaultOverlayShown;
	        }
	
	        _this.state = {
	            show: visible
	        };
	        return _this;
	    }
	
	    OverlayTrigger.prototype.componentDidMount = function componentDidMount() {
	        this._mountNode = document.createElement('div');
	        !isReact16 && this.renderOverlay();
	    };
	
	    OverlayTrigger.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        !isReact16 && this.renderOverlay();
	        if ('visible' in this.props && prevProps.visible !== this.props.visible) {
	            this.setState({
	                show: this.props.visible
	            });
	        }
	        if ('isHoverShow' in this.props && prevProps.isHoverShow !== this.props.isHoverShow) {
	            this.setState({
	                show: this.props.isHoverShow
	            });
	        }
	    };
	
	    OverlayTrigger.prototype.componentWillUnmount = function componentWillUnmount() {
	        !isReact16 && _reactDom2["default"].unmountComponentAtNode(this._mountNode);
	        this._mountNode = null;
	        // 加判断去掉 clearTimeout
	        this._hoverShowDelay && clearTimeout(this._hoverShowDelay);
	        this._hoverShowDelay && clearTimeout(this._hoverHideDelay);
	    };
	
	    OverlayTrigger.prototype.handleToggle = function handleToggle() {
	        if (this.state.show) {
	            this.hide();
	        } else {
	            this.show();
	        }
	    };
	
	    OverlayTrigger.prototype.handleDelayedShow = function handleDelayedShow() {
	        var _this2 = this;
	
	        if (this._hoverHideDelay != null) {
	            clearTimeout(this._hoverHideDelay);
	            this._hoverHideDelay = null;
	            return;
	        }
	
	        if (this.state.show || this._hoverShowDelay != null) {
	            return;
	        }
	
	        var delay = this.props.delayShow != null ? this.props.delayShow : this.props.delay;
	
	        if (!delay) {
	            this.show();
	            return;
	        }
	
	        this._hoverShowDelay = setTimeout(function () {
	            _this2._hoverShowDelay = null;
	            _this2.show();
	        }, delay);
	    };
	
	    OverlayTrigger.prototype.handleDelayedHide = function handleDelayedHide() {
	        var _this3 = this;
	
	        if (this._hoverShowDelay != null) {
	            clearTimeout(this._hoverShowDelay);
	            this._hoverShowDelay = null;
	            return;
	        }
	
	        if (!this.state.show || this._hoverHideDelay != null) {
	            return;
	        }
	
	        var delay = this.props.delayHide != null ? this.props.delayHide : this.props.delay;
	
	        if (!delay) {
	            this.hide();
	            return;
	        }
	
	        this._hoverHideDelay = setTimeout(function () {
	            _this3._hoverHideDelay = null;
	            _this3.hide();
	        }, delay);
	    };
	
	    // 简单实现mouseEnter和mouseLeave。
	    // React的内置版本是有问题的：https://github.com/facebook/react/issues/4251
	    //在触发器被禁用的情况下，mouseOut / Over可能导致闪烁
	    //从一个子元素移动到另一个子元素。
	
	
	    OverlayTrigger.prototype.handleMouseOverOut = function handleMouseOverOut(handler, e) {
	        var target = e.currentTarget;
	        var related = e.relatedTarget || e.nativeEvent.toElement;
	
	        if (!related || related !== target && !(0, _contains2["default"])(target, related)) {
	            handler(e);
	        }
	    };
	
	    OverlayTrigger.prototype.handleHide = function handleHide() {
	        this.hide();
	    };
	
	    OverlayTrigger.prototype.show = function show() {
	        this.setState({ show: true });
	    };
	
	    OverlayTrigger.prototype.hide = function hide() {
	        this.setState({ show: false });
	    };
	
	    OverlayTrigger.prototype.makeOverlay = function makeOverlay(overlay, props) {
	        return _react2["default"].createElement(
	            _Overlay2["default"],
	            _extends({}, props, {
	                show: this.state.show,
	                onHide: this.handleHide,
	                target: this
	            }),
	            overlay
	        );
	    };
	
	    OverlayTrigger.prototype.renderOverlay = function renderOverlay() {
	        _reactDom2["default"].unstable_renderSubtreeIntoContainer(this, this._overlay, this._mountNode);
	    };
	
	    OverlayTrigger.prototype.render = function render() {
	        var _props = this.props,
	            trigger = _props.trigger,
	            overlay = _props.overlay,
	            children = _props.children,
	            onBlur = _props.onBlur,
	            onClick = _props.onClick,
	            onFocus = _props.onFocus,
	            onMouseOut = _props.onMouseOut,
	            onMouseOver = _props.onMouseOver,
	            props = _objectWithoutProperties(_props, ['trigger', 'overlay', 'children', 'onBlur', 'onClick', 'onFocus', 'onMouseOut', 'onMouseOver']);
	
	        delete props.delay;
	        delete props.delayShow;
	        delete props.delayHide;
	        delete props.defaultOverlayShown;
	
	        var child = _react2["default"].Children.only(children);
	        var childProps = child.props;
	
	        var triggerProps = {
	            'aria-describedby': overlay.props.id
	        };
	
	        // FIXME: 这里用于传递这个组件上的处理程序的逻辑是不一致的。我们不应该通过任何这些道具。
	
	        triggerProps.onClick = (0, _createChainedFunction2["default"])(childProps.onClick, onClick);
	
	        if (isOneOf('click', trigger) && !('visible' in this.props)) {
	            triggerProps.onClick = (0, _createChainedFunction2["default"])(triggerProps.onClick, this.handleToggle);
	        }
	
	        if (isOneOf('hover', trigger) && !('visible' in this.props)) {
	            (0, _warning2["default"])(!(trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.');
	
	            triggerProps.onMouseOver = (0, _createChainedFunction2["default"])(childProps.onMouseOver, onMouseOver, this.handleMouseOver);
	            triggerProps.onMouseOut = (0, _createChainedFunction2["default"])(childProps.onMouseOut, onMouseOut, this.handleMouseOut);
	        }
	
	        if (isOneOf('focus', trigger) && !('visible' in this.props)) {
	            triggerProps.onFocus = (0, _createChainedFunction2["default"])(childProps.onFocus, onFocus, this.handleDelayedShow);
	            triggerProps.onBlur = (0, _createChainedFunction2["default"])(childProps.onBlur, onBlur, this.handleDelayedHide);
	        }
	
	        this._overlay = this.makeOverlay(overlay, props);
	
	        if (!isReact16) {
	            return (0, _react.cloneElement)(child, triggerProps);
	        }
	        triggerProps.key = 'overlay';
	
	        var portal = _react2["default"].createElement(
	            _Portal2["default"],
	            {
	                key: 'portal',
	                container: props.container },
	            this._overlay
	        );
	
	        return [(0, _react.cloneElement)(child, triggerProps), portal];
	    };
	
	    return OverlayTrigger;
	}(_react.Component);
	
	OverlayTrigger.propTypes = propTypes;
	OverlayTrigger.defaultProps = defaultProps;
	
	exports["default"] = OverlayTrigger;
	module.exports = exports['default'];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  // HTML DOM and SVG DOM may have different support levels,
	  // so we need to check on context instead of a document root element.
	  return _inDOM2.default ? function (context, node) {
	    if (context.contains) {
	      return context.contains(node);
	    } else if (context.compareDocumentPosition) {
	      return context === node || !!(context.compareDocumentPosition(node) & 16);
	    } else {
	      return fallback(context, node);
	    }
	  } : fallback;
	}();
	
	function fallback(context, node) {
	  if (node) do {
	    if (node === context) return true;
	  } while (node = node.parentNode);
	
	  return false;
	}
	module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ownerDocument = __webpack_require__(108);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _getContainer = __webpack_require__(110);
	
	var _getContainer2 = _interopRequireDefault(_getContainer);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var isReact16 = _reactDom2["default"].createPortal !== undefined;
	var createPortal = isReact16 ? _reactDom2["default"].createPortal : _reactDom2["default"].unstable_renderSubtreeIntoContainer;
	
	var propTypes = {
	  /**
	   * 存放子组件的容器
	   */
	  container: _propTypes2["default"].oneOfType([_tinperBeeCore.componentOrElement, _propTypes2["default"].func])
	};
	
	var defaultProps = {};
	
	/**
	 * Portal组件是将子组件渲染
	 */
	
	var Portal = function (_Component) {
	  _inherits(Portal, _Component);
	
	  function Portal(props) {
	    _classCallCheck(this, Portal);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.getMountNode = _this.getMountNode.bind(_this);
	    _this.getOverlayDOMNode = _this.getOverlayDOMNode.bind(_this);
	    _this.mountOverlayTarget = _this.mountOverlayTarget.bind(_this);
	    _this.unmountOverlayTarget = _this.unmountOverlayTarget.bind(_this);
	    _this.renderOverlay = _this.renderOverlay.bind(_this);
	    _this.unrenderOverlay = _this.unrenderOverlay.bind(_this);
	
	    _this.overlayTarget = isReact16 ? document.createElement('div') : null;
	    return _this;
	  }
	
	  Portal.prototype.componentDidMount = function componentDidMount() {
	    if (isReact16) {
	      this.portalContainerNode = (0, _getContainer2["default"])(this.props.container, (0, _ownerDocument2["default"])(this).body);
	      this.portalContainerNode.appendChild(this.overlayTarget);
	    } else {
	      this.renderOverlay();
	    }
	
	    this.mounted = true;
	  };
	
	  Portal.prototype.componentDidUpdate = function componentDidUpdate() {
	    if (isReact16) {
	      var overlay = !this.props.children ? null : _react2["default"].Children.only(this.props.children);
	      if (overlay === null) {
	        this.unrenderOverlay();
	        this.unmountOverlayTarget();
	      } else {}
	    } else {
	      this.renderOverlay();
	    }
	  };
	  //this._overlayTarget为当前的要添加的子组件， this._portalContainerNode要添加组件的容器元素
	
	
	  Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.overlayTarget && nextProps.container !== this.props.container) {
	      this.portalContainerNode.removeChild(this.overlayTarget);
	      this.portalContainerNode = (0, _getContainer2["default"])(nextProps.container, (0, _ownerDocument2["default"])(this).body);
	      this.portalContainerNode.appendChild(this.overlayTarget);
	    }
	  };
	
	  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unrenderOverlay();
	    this.unmountOverlayTarget();
	
	    this.mounted = false;
	  };
	
	  Portal.prototype.getMountNode = function getMountNode() {
	    return this.overlayTarget;
	  };
	
	  Portal.prototype.getOverlayDOMNode = function getOverlayDOMNode() {
	    if (!this.mounted) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	    }
	
	    if (this.overlayInstance) {
	      return _reactDom2["default"].findDOMNode(this.overlayInstance);
	    }
	
	    return null;
	  };
	
	  /**
	   * 如果要添加的子组件不存在，就将div添加到要添加容器的DOM中；
	   */
	
	  Portal.prototype.mountOverlayTarget = function mountOverlayTarget() {
	    if (!this.overlayTarget) {
	      this.overlayTarget = document.createElement('div');
	      this.portalContainerNode = (0, _getContainer2["default"])(this.props.container, (0, _ownerDocument2["default"])(this).body);
	      this.portalContainerNode.appendChild(this.overlayTarget);
	    }
	  };
	  /**
	   * 将要添加的子元素从容器中移除，并把变量置为null
	   */
	
	
	  Portal.prototype.unmountOverlayTarget = function unmountOverlayTarget() {
	    if (this.overlayTarget) {
	      this.portalContainerNode.removeChild(this.overlayTarget);
	      this.overlayTarget = null;
	    }
	    this.portalContainerNode = null;
	  };
	  /**
	   * 手动渲染_overlayTarget
	   */
	
	
	  Portal.prototype.renderOverlay = function renderOverlay() {
	
	    var overlay = !this.props.children ? null : _react2["default"].Children.only(this.props.children);
	
	    // Save reference for future access.
	    if (overlay !== null) {
	      this.mountOverlayTarget();
	      this.overlayInstance = _reactDom2["default"].unstable_renderSubtreeIntoContainer(this, overlay, this.overlayTarget);
	    } else {
	      // Unrender if the component is null for transitions to null
	      this.unrenderOverlay();
	      this.unmountOverlayTarget();
	    }
	  };
	  /**
	   * 销毁_overlayTarget组件。并把_overlayInstance置为null
	   */
	
	
	  Portal.prototype.unrenderOverlay = function unrenderOverlay() {
	    if (this.overlayTarget) {
	      !isReact16 && _reactDom2["default"].unmountComponentAtNode(this.overlayTarget);
	      this.overlayInstance = null;
	    }
	  };
	
	  Portal.prototype.render = function render() {
	    if (!isReact16) {
	      return null;
	    }
	
	    var overlay = !this.props.children ? null : _react2["default"].Children.only(this.props.children);
	
	    return _reactDom2["default"].createPortal(overlay, this.overlayTarget);
	  };
	
	  return Portal;
	}(_react.Component);
	
	;
	
	Portal.propTypes = propTypes;
	Portal.defaultProps = defaultProps;
	
	exports["default"] = Portal;
	module.exports = exports['default'];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (componentOrElement) {
	  return (0, _ownerDocument2["default"])(_reactDom2["default"].findDOMNode(componentOrElement));
	};
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _ownerDocument = __webpack_require__(109);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ownerDocument;
	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}
	module.exports = exports["default"];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getContainer;
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * 获取容器组件
	 * @param  {[type]} container        [description]
	 * @param  {[type]} defaultContainer [description]
	 * @return {[type]}                  [description]
	 */
	function getContainer(container, defaultContainer) {
	  container = typeof container === 'function' ? container() : container;
	  return _reactDom2["default"].findDOMNode(container) || defaultContainer;
	}
	module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _BaseOverlay = __webpack_require__(112);
	
	var _BaseOverlay2 = _interopRequireDefault(_BaseOverlay);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _Fade = __webpack_require__(127);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = _extends({}, _BaseOverlay2["default"].propTypes, {
	
	  /**
	   * 是否显示
	   */
	  show: _propTypes2["default"].bool,
	  /**
	   * 是
	   */
	  rootClose: _propTypes2["default"].bool,
	  /**
	   * 当点击rootClose触发close时的回调函数
	   */
	  onHide: _propTypes2["default"].func,
	
	  /**
	   * 使用动画
	   */
	  animation: _propTypes2["default"].oneOfType([_tinperBeeCore.elementType, _propTypes2["default"].func]),
	
	  /**
	   * Callback fired before the Overlay transitions in
	   */
	  onEnter: _propTypes2["default"].func,
	
	  /**
	   * Callback fired as the Overlay begins to transition in
	   */
	  onEntering: _propTypes2["default"].func,
	
	  /**
	   * Callback fired after the Overlay finishes transitioning in
	   */
	  onEntered: _propTypes2["default"].func,
	
	  /**
	   * Callback fired right before the Overlay transitions out
	   */
	  onExit: _propTypes2["default"].func,
	
	  /**
	   * Callback fired as the Overlay begins to transition out
	   */
	  onExiting: _propTypes2["default"].func,
	
	  /**
	   * Callback fired after the Overlay finishes transitioning out
	   */
	  onExited: _propTypes2["default"].func,
	
	  /**
	   * Sets the direction of the Overlay.
	   */
	  placement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),
	
	  /**
	   * 当Overlay在placement方向放不下时的第二优先级方向
	   */
	  secondPlacement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left'])
	});
	
	var defaultProps = {
	  animation: _Fade2["default"],
	  rootClose: false,
	  show: false,
	  placement: 'right'
	};
	
	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);
	
	  function Overlay() {
	    _classCallCheck(this, Overlay);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Overlay.prototype.render = function render() {
	    var _props = this.props,
	        animation = _props.animation,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['animation', 'children']);
	
	    var transition = animation === true ? _Fade2["default"] : animation || null;
	
	    var child = void 0;
	
	    if (!transition) {
	      child = (0, _react.cloneElement)(children, {
	        className: (0, _classnames2["default"])(children.props.className, 'in')
	      });
	    } else {
	      child = children;
	    }
	
	    return _react2["default"].createElement(
	      _BaseOverlay2["default"],
	      _extends({}, props, {
	        transition: transition
	      }),
	      child
	    );
	  };
	
	  return Overlay;
	}(_react.Component);
	
	Overlay.propTypes = propTypes;
	Overlay.defaultProps = defaultProps;
	
	exports["default"] = Overlay;
	module.exports = exports['default'];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Portal = __webpack_require__(107);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _Position = __webpack_require__(113);
	
	var _Position2 = _interopRequireDefault(_Position);
	
	var _RootCloseWrapper = __webpack_require__(126);
	
	var _RootCloseWrapper2 = _interopRequireDefault(_RootCloseWrapper);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var isReact16 = _reactDom2["default"].createPortal !== undefined;
	
	var propTypes = _extends({}, _Position2["default"].propTypes, {
	
	  /**
	   * 是否显示
	   */
	  show: _propTypes2["default"].bool,
	
	  /**
	   * 点击其他地方，是否隐藏overlay
	   */
	  rootClose: _propTypes2["default"].bool,
	
	  /**
	   * 当rootClose为true的时候，触发的隐藏方法
	   * @type func
	   */
	  onHide: function onHide(props) {
	    var propType = _propTypes2["default"].func;
	    if (props.rootClose) {
	      propType = propType.isRequired;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return propType.apply(undefined, [props].concat(args));
	  },
	
	
	  /**
	   * 过渡动画组件
	   */
	  transition: _propTypes2["default"].oneOfType([_tinperBeeCore.elementType, _propTypes2["default"].func]),
	
	  /**
	   * overlay添加动画前的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	
	  /**
	   * 开始动画的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	
	  /**
	   * 渲染之后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	
	  /**
	   * 关闭开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	
	  /**
	   * 关闭时的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	
	  /**
	   * 关闭后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
	});
	
	function noop() {}
	
	var defaultProps = {
	  show: false,
	  rootClose: true
	};
	
	/**
	 * 悬浮组件
	 */
	
	var BaseOverlay = function (_Component) {
	  _inherits(BaseOverlay, _Component);
	
	  function BaseOverlay(props, context) {
	    _classCallCheck(this, BaseOverlay);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.state = { exited: !props.show };
	    _this.onHiddenListener = _this.handleHidden.bind(_this);
	    return _this;
	  }
	
	  BaseOverlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.show) {
	      this.setState({ exited: false });
	    } else if (!nextProps.transition) {
	      // Otherwise let handleHidden take care of marking exited.
	      this.setState({ exited: true });
	    }
	  };
	
	  BaseOverlay.prototype.handleHidden = function handleHidden() {
	    this.setState({ exited: true });
	
	    if (this.props.onExited) {
	      var _props;
	
	      (_props = this.props).onExited.apply(_props, arguments);
	    }
	  };
	
	  BaseOverlay.prototype.render = function render() {
	    var _props2 = this.props,
	        container = _props2.container,
	        containerPadding = _props2.containerPadding,
	        target = _props2.target,
	        placement = _props2.placement,
	        secondPlacement = _props2.secondPlacement,
	        shouldUpdatePosition = _props2.shouldUpdatePosition,
	        rootClose = _props2.rootClose,
	        positionLeft = _props2.positionLeft,
	        positionTop = _props2.positionTop,
	        children = _props2.children,
	        Transition = _props2.transition,
	        props = _objectWithoutProperties(_props2, ['container', 'containerPadding', 'target', 'placement', 'secondPlacement', 'shouldUpdatePosition', 'rootClose', 'positionLeft', 'positionTop', 'children', 'transition']);
	
	    // Don't un-render the overlay while it's transitioning out.
	
	
	    var mountOverlay = props.show || Transition && !this.state.exited;
	    if (!mountOverlay) {
	      // Don't bother showing anything if we don't have to.
	      return null;
	    }
	
	    var child = children;
	
	    // Position is be inner-most because it adds inline styles into the child,
	    // which the other wrappers don't forward correctly.
	    child = _react2["default"].createElement(
	      _Position2["default"],
	      {
	        container: container,
	        containerPadding: containerPadding,
	        target: target,
	        positionLeft: positionLeft,
	        positionTop: positionTop,
	        placement: placement,
	        secondPlacement: secondPlacement,
	        shouldUpdatePosition: shouldUpdatePosition },
	      child
	    );
	
	    if (Transition) {
	      var onExit = props.onExit,
	          onExiting = props.onExiting,
	          onEnter = props.onEnter,
	          onEntering = props.onEntering,
	          onEntered = props.onEntered;
	
	      // This animates the child node by injecting props, so it must precede
	      // anything that adds a wrapping div.
	
	      child = _react2["default"].createElement(
	        Transition,
	        {
	          'in': props.show,
	          transitionAppear: true,
	          onExit: onExit,
	          onExiting: onExiting,
	          onExited: this.onHiddenListener,
	          onEnter: onEnter,
	          onEntering: onEntering,
	          onEntered: onEntered
	        },
	        child
	      );
	    }
	
	    // This goes after everything else because it adds a wrapping div.
	    if (rootClose) {
	      child = _react2["default"].createElement(
	        _RootCloseWrapper2["default"],
	        { onRootClose: props.onHide },
	        child
	      );
	    }
	
	    if (isReact16) {
	      return child;
	    } else {
	      return _react2["default"].createElement(
	        _Portal2["default"],
	        { container: container },
	        child
	      );
	    }
	  };
	
	  return BaseOverlay;
	}(_react.Component);
	
	BaseOverlay.propTypes = propTypes;
	BaseOverlay.defaultProps = defaultProps;
	
	exports["default"] = BaseOverlay;
	module.exports = exports['default'];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _requestAnimationFrame = __webpack_require__(114);
	
	var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);
	
	var _calculatePosition = __webpack_require__(115);
	
	var _calculatePosition2 = _interopRequireDefault(_calculatePosition);
	
	var _getContainer = __webpack_require__(110);
	
	var _getContainer2 = _interopRequireDefault(_getContainer);
	
	var _ownerDocument = __webpack_require__(108);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _ownerWindow = __webpack_require__(122);
	
	var _ownerWindow2 = _interopRequireDefault(_ownerWindow);
	
	var _addEventListener = __webpack_require__(124);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    /**
	     * 要设置定位的元素
	     */
	    target: _propTypes2["default"].oneOfType([_tinperBeeCore.componentOrElement, _propTypes2["default"].func]),
	
	    /**
	     * 存放的容器元素
	     */
	    container: _propTypes2["default"].oneOfType([_tinperBeeCore.componentOrElement, _propTypes2["default"].func]),
	    /**
	     * 容器padding值
	     */
	    containerPadding: _propTypes2["default"].number,
	    /**
	     * 位置设置
	     */
	    placement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),
	
	    /**
	     * 第二优先级位置设置
	     */
	    secondPlacement: _propTypes2["default"].oneOf(['top', 'right', 'bottom', 'left']),
	
	    /**
	     * 是否需要更新位置
	     */
	    shouldUpdatePosition: _propTypes2["default"].bool
	};
	
	var defaultProps = {
	    containerPadding: 0,
	    placement: 'right',
	    shouldUpdatePosition: false
	};
	
	/**
	 * 计算子组件的位置的组件
	 */
	
	var Position = function (_Component) {
	    _inherits(Position, _Component);
	
	    function Position(props, context) {
	        _classCallCheck(this, Position);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.state = {
	            positionLeft: 0,
	            positionTop: 0,
	            arrowOffsetLeft: null,
	            arrowOffsetTop: null
	        };
	
	        _this.needsFlush = false;
	        _this.lastTarget = null;
	
	        _this.getTarget = _this.getTarget.bind(_this);
	        _this.maybeUpdatePosition = _this.maybeUpdatePosition.bind(_this);
	        _this.updatePosition = _this.updatePosition.bind(_this);
	        _this.onWindowResize = _this.onWindowResize.bind(_this);
	        return _this;
	    }
	
	    Position.prototype.componentDidMount = function componentDidMount() {
	        var _this2 = this;
	
	        this._isMounted = true;
	
	        this._windowResizeListener = (0, _addEventListener2["default"])((0, _ownerWindow2["default"])(this), 'resize', function () {
	            return _this2.onWindowResize();
	        });
	
	        this.updatePosition(this.getTarget());
	    };
	
	    Position.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
	        this.needsFlush = true;
	    };
	
	    Position.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	        if (this.needsFlush) {
	            this.needsFlush = false;
	
	            this.maybeUpdatePosition();
	        }
	    };
	
	    Position.prototype.componentWillUnmount = function componentWillUnmount() {
	        this._isMounted = false;
	
	        if (this._windowResizeListener) {
	            this._windowResizeListener.remove();
	        }
	    };
	
	    /**
	     * 获取要设置位置的子元素
	     */
	
	
	    Position.prototype.getTarget = function getTarget() {
	        var target = this.props.target;
	
	        var targetElement = typeof target === 'function' ? target() : target;
	        return targetElement && _reactDom2["default"].findDOMNode(targetElement) || null;
	    };
	
	    /**
	     * 验证是否需要更新位置
	     */
	
	
	    Position.prototype.maybeUpdatePosition = function maybeUpdatePosition(placementChanged) {
	        var target = this.getTarget();
	        if (!this.props.shouldUpdatePosition && target === this.lastTarget && !placementChanged) {
	            return;
	        }
	
	        this.updatePosition(target);
	    };
	
	    Position.prototype.onWindowResize = function onWindowResize() {
	        var _this3 = this;
	
	        (0, _requestAnimationFrame2["default"])(function () {
	            return _this3.updatePosition(_this3.getTarget());
	        });
	    };
	
	    /**
	     * 更新位置
	     */
	
	    Position.prototype.updatePosition = function updatePosition(target) {
	        var _props = this.props,
	            placement = _props.placement,
	            secondPlacement = _props.secondPlacement;
	
	
	        if (!this._isMounted) {
	            return;
	        }
	        this.lastTarget = target;
	
	        if (!target) {
	            this.setState({
	                positionLeft: 0,
	                positionTop: 0,
	                arrowOffsetLeft: null,
	                arrowOffsetTop: null
	            });
	
	            return;
	        }
	
	        var overlay = _reactDom2["default"].findDOMNode(this);
	        var container = (0, _getContainer2["default"])(this.props.container, (0, _ownerDocument2["default"])(this).body);
	
	        // 若设置了第二渲染位置，placement的优先级是： placement > secondPlacement > placement的反方向
	        if ("secondPlacement" in this.props && secondPlacement) {
	            var initPosition = (0, _calculatePosition2["default"])(placement, overlay, target, container, this.props.containerPadding);
	            if (initPosition.inverseArrow) {
	                var secondPosition = (0, _calculatePosition2["default"])(secondPlacement, overlay, target, container, this.props.containerPadding);
	
	                if (secondPosition.inverseArrow) {
	                    this.setState(_extends({}, initPosition, {
	                        renderPlacement: placement
	                    }));
	                } else {
	                    this.setState(_extends({}, secondPosition, {
	                        renderPlacement: secondPlacement
	                    }));
	                }
	            } else {
	                this.setState(_extends({}, initPosition, {
	                    renderPlacement: placement
	                }));
	            }
	        } else {
	            this.setState((0, _calculatePosition2["default"])(placement, overlay, target, container, this.props.containerPadding));
	        }
	    };
	
	    Position.prototype.render = function render() {
	        var _props2 = this.props,
	            children = _props2.children,
	            className = _props2.className,
	            props = _objectWithoutProperties(_props2, ['children', 'className']);
	
	        var _state = this.state,
	            positionLeft = _state.positionLeft,
	            positionTop = _state.positionTop,
	            inverseArrow = _state.inverseArrow,
	            width = _state.width,
	            arrowPosition = _objectWithoutProperties(_state, ['positionLeft', 'positionTop', 'inverseArrow', 'width']);
	
	        // These should not be forwarded to the child.
	
	
	        delete props.target;
	        delete props.container;
	        delete props.containerPadding;
	        delete props.shouldUpdatePosition;
	
	        var child = _react2["default"].Children.only(children);
	        return (0, _react.cloneElement)(child, _extends({
	            className: (0, _classnames2["default"])(className, child.props.className, { 'inverse-arrow': inverseArrow })
	        }, arrowPosition, {
	            style: _extends({}, child.props.style, {
	                width: width,
	                left: positionLeft,
	                top: positionTop
	            })
	        }));
	    };
	
	    return Position;
	}(_react.Component);
	
	Position.propTypes = propTypes;
	Position.defaultProps = defaultProps;
	
	exports["default"] = Position;
	module.exports = exports['default'];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
	var cancel = 'clearTimeout';
	var raf = fallback;
	var compatRaf = void 0;
	
	var getKey = function getKey(vendor, k) {
	  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
	};
	
	if (_inDOM2.default) {
	  vendors.some(function (vendor) {
	    var rafKey = getKey(vendor, 'request');
	
	    if (rafKey in window) {
	      cancel = getKey(vendor, 'cancel');
	      return raf = function raf(cb) {
	        return window[rafKey](cb);
	      };
	    }
	  });
	}
	
	/* https://github.com/component/raf */
	var prev = new Date().getTime();
	function fallback(fn) {
	  var curr = new Date().getTime(),
	      ms = Math.max(0, 16 - (curr - prev)),
	      req = setTimeout(fn, ms);
	
	  prev = curr;
	  return req;
	}
	
	compatRaf = function compatRaf(cb) {
	  return raf(cb);
	};
	compatRaf.cancel = function (id) {
	  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
	};
	exports.default = compatRaf;
	module.exports = exports['default'];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = calculatePosition;
	
	var _offset = __webpack_require__(116);
	
	var _offset2 = _interopRequireDefault(_offset);
	
	var _position = __webpack_require__(118);
	
	var _position2 = _interopRequireDefault(_position);
	
	var _scrollTop = __webpack_require__(120);
	
	var _scrollTop2 = _interopRequireDefault(_scrollTop);
	
	var _ownerDocument = __webpack_require__(108);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getContainerDimensions(containerNode) {
	    var width = void 0,
	        height = void 0,
	        scroll = void 0;
	
	    if (containerNode.tagName === 'BODY') {
	        width = document.body.scrollWidth;
	        height = document.body.scrollHeight;
	
	        scroll = (0, _scrollTop2["default"])((0, _ownerDocument2["default"])(containerNode).documentElement) || (0, _scrollTop2["default"])(containerNode);
	    } else {
	        var _getOffset = (0, _offset2["default"])(containerNode);
	
	        width = _getOffset.width;
	        height = _getOffset.height;
	
	        scroll = (0, _scrollTop2["default"])(containerNode);
	    }
	
	    return { width: width, height: height, scroll: scroll };
	}
	
	function getTopDelta(top, overlayHeight, container, padding) {
	    var containerDimensions = getContainerDimensions(container);
	    var containerScroll = containerDimensions.scroll;
	    var containerHeight = containerDimensions.height;
	
	    var topEdgeOffset = top - padding - containerScroll;
	    var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;
	
	    if (topEdgeOffset < 0) {
	        return -topEdgeOffset;
	    } else if (bottomEdgeOffset > containerHeight) {
	        return containerHeight - bottomEdgeOffset;
	    } else {
	        return 0;
	    }
	}
	
	function getLeftDelta(left, overlayWidth, container, padding) {
	    var containerDimensions = getContainerDimensions(container);
	    var containerWidth = containerDimensions.width;
	
	    var leftEdgeOffset = left - padding;
	    var rightEdgeOffset = left + padding + overlayWidth;
	
	    if (leftEdgeOffset < 0) {
	        return -leftEdgeOffset;
	    } else if (rightEdgeOffset > containerWidth) {
	        return containerWidth - rightEdgeOffset;
	    }
	
	    return 0;
	}
	
	function calculatePosition(placement, overlayNode, target, container, padding) {
	    var childOffset = container.tagName === 'BODY' ? (0, _offset2["default"])(target) : (0, _position2["default"])(target, container);
	
	    var _getOffset2 = (0, _offset2["default"])(overlayNode),
	        overlayHeight = _getOffset2.height,
	        overlayWidth = _getOffset2.width;
	
	    var positionLeft = void 0,
	        positionTop = void 0,
	        arrowOffsetLeft = void 0,
	        arrowOffsetTop = void 0,
	        inverseArrow = void 0;
	
	    if (/^left|^right/.test(placement)) {
	        positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;
	
	        if (/left/.test(placement)) {
	            positionLeft = childOffset.left - overlayWidth;
	        } else {
	            positionLeft = childOffset.left + childOffset.width;
	        }
	
	        if (/Top/.test(placement)) {
	            positionTop = childOffset.top;
	        } else if (/Bottom/.test(placement)) {
	            positionTop = childOffset.top + childOffset.height - overlayHeight;
	        }
	
	        var topDelta = getTopDelta(positionTop, overlayHeight, container, padding);
	        var leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
	        //内容超出
	        if (leftDelta > 0) {
	            inverseArrow = true;
	            positionLeft = childOffset.left + childOffset.width + 6;
	        } else if (leftDelta < 0) {
	            inverseArrow = true;
	            positionLeft = childOffset.left - overlayWidth - 6;
	        } else {
	            positionLeft += leftDelta;
	        }
	        positionTop += topDelta;
	        arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
	        arrowOffsetLeft = void 0;
	    } else if (/^top|^bottom/.test(placement)) {
	        positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;
	
	        if (/top/.test(placement)) {
	            positionTop = childOffset.top - overlayHeight;
	        } else {
	            positionTop = childOffset.top + childOffset.height;
	        }
	
	        if (/Left/.test(placement)) {
	            positionLeft = childOffset.left;
	        } else if (/Right/.test(placement)) {
	            positionLeft = childOffset.left + (childOffset.width - overlayWidth);
	        }
	
	        var _leftDelta = getLeftDelta(positionLeft, overlayWidth, container, padding);
	        var _topDelta = getTopDelta(positionTop, overlayHeight, container, padding);
	        positionLeft += _leftDelta;
	        arrowOffsetLeft = 50 * (1 - 2 * _leftDelta / overlayWidth) + '%';
	        arrowOffsetTop = void 0;
	        if (_topDelta > 0) {
	            inverseArrow = true;
	            positionTop = childOffset.top + childOffset.height + 6;
	        } else if (_topDelta < 0) {
	            inverseArrow = true;
	            positionTop = childOffset.top - overlayHeight - 6;
	        } else {
	            positionTop += _topDelta;
	        }
	
	        // if((positionLeft + panelWidth) > docWidth)
	        //         left = docWidth - panelWidth - 10;
	        //     if(left < 0)
	        //         left = 0;
	
	        //      if((top + panelHeight) > docHeight) {
	        //  top = docHeight - panelHeight - 10;
	        //  }
	
	        //      if(top < 0)
	        //          top = 0;
	    } else {
	        throw new Error('calcOverlayPosition(): No such placement of "' + placement + '" found.');
	    }
	
	    return { positionLeft: positionLeft, positionTop: positionTop, arrowOffsetLeft: arrowOffsetLeft, arrowOffsetTop: arrowOffsetTop, inverseArrow: inverseArrow, width: overlayWidth };
	}
	module.exports = exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = offset;
	
	var _contains = __webpack_require__(106);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _isWindow = __webpack_require__(117);
	
	var _isWindow2 = _interopRequireDefault(_isWindow);
	
	var _ownerDocument = __webpack_require__(109);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function offset(node) {
	  var doc = (0, _ownerDocument2.default)(node),
	      win = (0, _isWindow2.default)(doc),
	      docElem = doc && doc.documentElement,
	      box = { top: 0, left: 0, height: 0, width: 0 };
	
	  if (!doc) return;
	
	  // Make sure it's not a disconnected DOM node
	  if (!(0, _contains2.default)(docElem, node)) return box;
	
	  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
	
	  // IE8 getBoundingClientRect doesn't support width & height
	  box = {
	    top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
	    left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
	    width: (box.width == null ? node.offsetWidth : box.width) || 0,
	    height: (box.height == null ? node.offsetHeight : box.height) || 0
	  };
	
	  return box;
	}
	module.exports = exports['default'];

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getWindow;
	function getWindow(node) {
	  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
	}
	module.exports = exports["default"];

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = position;
	
	var _offset = __webpack_require__(116);
	
	var _offset2 = _interopRequireDefault(_offset);
	
	var _offsetParent = __webpack_require__(119);
	
	var _offsetParent2 = _interopRequireDefault(_offsetParent);
	
	var _scrollTop = __webpack_require__(120);
	
	var _scrollTop2 = _interopRequireDefault(_scrollTop);
	
	var _scrollLeft = __webpack_require__(121);
	
	var _scrollLeft2 = _interopRequireDefault(_scrollLeft);
	
	var _style = __webpack_require__(17);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function nodeName(node) {
	  return node.nodeName && node.nodeName.toLowerCase();
	}
	
	function position(node, offsetParent) {
	  var parentOffset = { top: 0, left: 0 },
	      offset;
	
	  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	  // because it is its only offset parent
	  if ((0, _style2.default)(node, 'position') === 'fixed') {
	    offset = node.getBoundingClientRect();
	  } else {
	    offsetParent = offsetParent || (0, _offsetParent2.default)(node);
	    offset = (0, _offset2.default)(node);
	
	    if (nodeName(offsetParent) !== 'html') parentOffset = (0, _offset2.default)(offsetParent);
	
	    parentOffset.top += parseInt((0, _style2.default)(offsetParent, 'borderTopWidth'), 10) - (0, _scrollTop2.default)(offsetParent) || 0;
	    parentOffset.left += parseInt((0, _style2.default)(offsetParent, 'borderLeftWidth'), 10) - (0, _scrollLeft2.default)(offsetParent) || 0;
	  }
	
	  // Subtract parent offsets and node margins
	  return _extends({}, offset, {
	    top: offset.top - parentOffset.top - (parseInt((0, _style2.default)(node, 'marginTop'), 10) || 0),
	    left: offset.left - parentOffset.left - (parseInt((0, _style2.default)(node, 'marginLeft'), 10) || 0)
	  });
	}
	module.exports = exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = offsetParent;
	
	var _ownerDocument = __webpack_require__(109);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _style = __webpack_require__(17);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function nodeName(node) {
	  return node.nodeName && node.nodeName.toLowerCase();
	}
	
	function offsetParent(node) {
	  var doc = (0, _ownerDocument2.default)(node),
	      offsetParent = node && node.offsetParent;
	
	  while (offsetParent && nodeName(node) !== 'html' && (0, _style2.default)(offsetParent, 'position') === 'static') {
	    offsetParent = offsetParent.offsetParent;
	  }
	
	  return offsetParent || doc.documentElement;
	}
	module.exports = exports['default'];

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = scrollTop;
	
	var _isWindow = __webpack_require__(117);
	
	var _isWindow2 = _interopRequireDefault(_isWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function scrollTop(node, val) {
	  var win = (0, _isWindow2.default)(node);
	
	  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
	
	  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
	}
	module.exports = exports['default'];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = scrollTop;
	
	var _isWindow = __webpack_require__(117);
	
	var _isWindow2 = _interopRequireDefault(_isWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function scrollTop(node, val) {
	  var win = (0, _isWindow2.default)(node);
	
	  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
	
	  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
	}
	module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (componentOrElement) {
	  return (0, _ownerWindow2["default"])(_reactDom2["default"].findDOMNode(componentOrElement));
	};
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _ownerWindow = __webpack_require__(123);
	
	var _ownerWindow2 = _interopRequireDefault(_ownerWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ownerWindow;
	
	var _ownerDocument = __webpack_require__(109);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ownerWindow(node) {
	  var doc = (0, _ownerDocument2.default)(node);
	  return doc && doc.defaultView || doc.parentWindow;
	}
	module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (node, event, handler, capture) {
	  (0, _on2["default"])(node, event, handler, capture);
	
	  return {
	    remove: function remove() {
	      (0, _off2["default"])(node, event, handler, capture);
	    }
	  };
	};
	
	var _on = __webpack_require__(15);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _off = __webpack_require__(125);
	
	var _off2 = _interopRequireDefault(_off);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var off = function off() {};
	if (_inDOM2.default) {
	  off = function () {
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.removeEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.detachEvent('on' + eventName, handler);
	    };
	  }();
	}
	
	exports.default = off;
	module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _contains = __webpack_require__(106);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _addEventListener = __webpack_require__(124);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _ownerDocument = __webpack_require__(108);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  onRootClose: _propTypes2["default"].func,
	  children: _propTypes2["default"].element,
	  /**
	   * 是否禁用
	   */
	  disabled: _propTypes2["default"].bool,
	  /**
	   * 触发事件选择
	   */
	  event: _propTypes2["default"].oneOf(['click', 'mousedown'])
	};
	
	var defaultProps = {
	  event: 'click'
	};
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	var RootCloseWrapper = function (_Component) {
	  _inherits(RootCloseWrapper, _Component);
	
	  function RootCloseWrapper(props, context) {
	    _classCallCheck(this, RootCloseWrapper);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.handleMouseCapture = function (e) {
	      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains2["default"])(_reactDom2["default"].findDOMNode(_this), e.target);
	    };
	
	    _this.handleMouse = function () {
	      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
	        _this.props.onRootClose();
	      }
	    };
	
	    _this.handleKeyUp = function (e) {
	      if (e.keyCode === 27 && _this.props.onRootClose) {
	        _this.props.onRootClose();
	      }
	    };
	
	    _this.preventMouseRootClose = false;
	
	    _this.addEventListeners = _this.addEventListeners.bind(_this);
	    _this.removeEventListeners = _this.removeEventListeners.bind(_this);
	
	    return _this;
	  }
	
	  RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
	    if (!this.props.disabled) {
	      this.addEventListeners();
	    }
	  };
	
	  RootCloseWrapper.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (!this.props.disabled && prevProps.disabled) {
	      this.addEventListeners();
	    } else if (this.props.disabled && !prevProps.disabled) {
	      this.removeEventListeners();
	    }
	  };
	
	  RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (!this.props.disabled) {
	      this.removeEventListeners();
	    }
	  };
	
	  RootCloseWrapper.prototype.addEventListeners = function addEventListeners() {
	    var event = this.props.event;
	
	    var doc = (0, _ownerDocument2["default"])(this);
	
	    // 避免react的监听事件触发引起判断的不准确
	    this.documentMouseCaptureListener = (0, _addEventListener2["default"])(doc, event, this.handleMouseCapture, true);
	
	    this.documentMouseListener = (0, _addEventListener2["default"])(doc, event, this.handleMouse);
	
	    this.documentKeyupListener = (0, _addEventListener2["default"])(doc, 'keyup', this.handleKeyUp);
	  };
	
	  RootCloseWrapper.prototype.removeEventListeners = function removeEventListeners() {
	    if (this.documentMouseCaptureListener) {
	      this.documentMouseCaptureListener.remove();
	    }
	
	    if (this.documentMouseListener) {
	      this.documentMouseListener.remove();
	    }
	
	    if (this.documentKeyupListener) {
	      this.documentKeyupListener.remove();
	    }
	  };
	
	  RootCloseWrapper.prototype.render = function render() {
	    return this.props.children;
	  };
	
	  return RootCloseWrapper;
	}(_react.Component);
	
	RootCloseWrapper.propTypes = propTypes;
	
	RootCloseWrapper.defaultProps = defaultProps;
	
	exports["default"] = RootCloseWrapper;
	module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Transition = __webpack_require__(128);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };
	
	  return Fade;
	}(_react2["default"].Component);
	
	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;
	
	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _properties = __webpack_require__(13);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _on = __webpack_require__(15);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionEndEvent = _properties2["default"].end;
	
	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;
	
	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _propTypes2["default"].string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _propTypes2["default"].string,
	
	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
	};
	
	function noop() {}
	
	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	/**
	 * 动画组件
	 */
	
	var Transition = function (_Component) {
	  _inherits(Transition, _Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };
	
	    _this.nextCallback = null;
	
	    _this.performEnter = _this.performEnter.bind(_this);
	    _this.performExit = _this.performExit.bind(_this);
	    _this.cancelNextCallback = _this.cancelNextCallback.bind(_this);
	    _this.onTransitionEnd = _this.onTransitionEnd.bind(_this);
	    _this.safeSetState = _this.safeSetState.bind(_this);
	    _this.setNextCallback = _this.setNextCallback.bind(_this);
	
	    return _this;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;
	
	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	
	      return;
	    }
	
	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;
	
	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    // 这里接收新props
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);
	
	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	}(_react.Component);
	
	Transition.propTypes = propTypes;
	
	Transition.defaultProps = defaultProps;
	
	exports["default"] = Transition;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	
	exports["default"] = createChainedFunction;
	module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.getComponentLocale = getComponentLocale;
	exports.getLocaleCode = getLocaleCode;
	function getComponentLocale(props, context, componentName, getDefaultLocale) {
	    var locale = {};
	    if (context && context.beeLocale && context.beeLocale[componentName]) {
	        locale = context.beeLocale[componentName];
	    } else {
	        var defaultLocale = getDefaultLocale();
	
	        locale = defaultLocale["default"] || defaultLocale;
	    }
	
	    var result = _extends({}, locale, props.locale);
	    if (props.locale) {
	        result.lang = _extends({}, locale.lang, props.locale.lang);
	    } else {
	        result.lang = _extends({}, locale.lang);
	    }
	
	    return result;
	}
	
	function getLocaleCode(context) {
	    var localeCode = context.beeLocale && context.beeLocale.lang;
	    // Had use LocaleProvide but didn't set locale
	    if (context.beeLocale && context.beeLocale.exist && !localeCode) {
	        return 'zh-cn';
	    }
	    return localeCode;
	}

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = {
	    'lang': 'zh-cn',
	    'copy': '复制',
	    'cut': '剪切',
	    'copyReady': '已复制',
	    'cutReady': '已剪切',
	    'copyToClipboard': '复制到剪切板',
	    'close': '关闭',
	
	    'en-us': {
	        'copy': 'copy',
	        'cut': 'cut',
	        'copyReady': 'copied',
	        'cutReady': 'cut',
	        'copyToClipboard': 'copy to clipboard',
	        'close': 'close'
	    },
	    'zh-tw': {
	        'copy': '複製',
	        'cut': '剪切',
	        'copyReady': '已複製',
	        'cutReady': '已剪切',
	        'copyToClipboard': '複製到剪切板',
	        'close': '關閉'
	    }
	};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(133);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Modal2["default"];
	module.exports = exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _events = __webpack_require__(134);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _ownerDocument = __webpack_require__(109);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	var _scrollbarSize = __webpack_require__(138);
	
	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Modal = __webpack_require__(139);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _isOverflowing = __webpack_require__(142);
	
	var _isOverflowing2 = _interopRequireDefault(_isOverflowing);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _beeTransition = __webpack_require__(11);
	
	var _ModalBody = __webpack_require__(146);
	
	var _ModalBody2 = _interopRequireDefault(_ModalBody);
	
	var _ModalDialog = __webpack_require__(147);
	
	var _ModalDialog2 = _interopRequireDefault(_ModalDialog);
	
	var _ModalFooter = __webpack_require__(148);
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
	var _ModalHeader = __webpack_require__(149);
	
	var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
	
	var _ModalTitle = __webpack_require__(150);
	
	var _ModalTitle2 = _interopRequireDefault(_ModalTitle);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = _extends({}, _Modal2["default"].propTypes, _ModalDialog2["default"].propTypes, {
	
	  /**
	   * 是否弹出遮罩层/遮罩层点击是否触发关闭
	   */
	  backdrop: _propTypes2["default"].oneOf(['static', true, false]),
	
	  /**
	   * 点击遮罩层是否允许关闭
	   */
	  backdropClosable: _propTypes2["default"].bool,
	  /**
	   * esc触发关闭
	   */
	  keyboard: _propTypes2["default"].bool,
	
	  /**
	   * 显隐时是否使用动画
	   */
	  animation: _propTypes2["default"].bool,
	
	  /**
	   * 传递给模态框的样式
	   */
	  dialogComponentClass: _tinperBeeCore.elementType,
	
	  /**
	   * 自动设置焦点
	   */
	  autoFocus: _propTypes2["default"].bool,
	
	  /**
	   * 防止打开时焦点离开模态框
	   */
	  enforceFocus: _propTypes2["default"].bool,
	
	  /**
	   * 是否打开模态框
	   */
	  show: _propTypes2["default"].bool,
	
	  /**
	   * 关闭时的钩子函数
	   */
	  onHide: _propTypes2["default"].func,
	
	  onEnter: _propTypes2["default"].func,
	
	  onEntering: _propTypes2["default"].func,
	
	  onEntered: _propTypes2["default"].func,
	
	  onExit: _propTypes2["default"].func,
	
	  onExiting: _propTypes2["default"].func,
	
	  onExited: _propTypes2["default"].func,
	
	  /**
	   * 要添加到的元素
	   */
	  container: _Modal2["default"].propTypes.container,
	
	  /**
	   * 尺寸
	   */
	  size: _propTypes2["default"].oneOf(["sm", "lg", "xlg", ""]),
	  /**
	   * 自定义宽度
	   */
	  width: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])
	});
	
	var defaultProps = _extends({}, _Modal2["default"].defaultProps, {
	  backdropClosable: true,
	  animation: true,
	  dialogComponentClass: _ModalDialog2["default"],
	  clsPrefix: 'u-modal'
	});
	
	var childContextTypes = {
	  $u_modal: _propTypes2["default"].shape({
	    onHide: _propTypes2["default"].func
	  })
	};
	
	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);
	
	  function Modal(props, context) {
	    _classCallCheck(this, Modal);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleExited = _this.handleExited.bind(_this);
	    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
	    _this.handleDialogClick = _this.handleDialogClick.bind(_this);
	
	    _this.state = {
	      style: {}
	    };
	    return _this;
	  }
	
	  Modal.prototype.getChildContext = function getChildContext() {
	    return {
	      $u_modal: {
	        onHide: this.props.onHide
	      }
	    };
	  };
	
	  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
	    // Clean up the listener if we need to.
	    this.handleExited();
	  };
	
	  Modal.prototype.handleEntering = function handleEntering() {
	    // FIXME: This should work even when animation is disabled.
	    _events2["default"].on(window, 'resize', this.handleWindowResize);
	    this.updateStyle();
	  };
	
	  Modal.prototype.handleExited = function handleExited() {
	    // FIXME: This should work even when animation is disabled.
	    _events2["default"].off(window, 'resize', this.handleWindowResize);
	  };
	
	  Modal.prototype.handleWindowResize = function handleWindowResize() {
	    this.updateStyle();
	  };
	
	  Modal.prototype.handleDialogClick = function handleDialogClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }
	
	    this.props.onHide();
	  };
	
	  Modal.prototype.updateStyle = function updateStyle() {
	    if (!_inDOM2["default"] || !this._modal) {
	      return;
	    }
	
	    var dialogNode = this._modal.getDialogElement();
	    var dialogHeight = dialogNode.scrollHeight;
	
	    var document = (0, _ownerDocument2["default"])(dialogNode);
	    var bodyIsOverflowing = (0, _isOverflowing2["default"])(_reactDom2["default"].findDOMNode(this.props.container || document.body));
	    var modalIsOverflowing = dialogHeight > document.documentElement.clientHeight;
	
	    this.setState({
	      style: {
	        paddingRight: bodyIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize2["default"])() : undefined,
	        paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize2["default"])() : undefined
	      }
	    });
	  };
	
	  Modal.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        backdrop = _props.backdrop,
	        backdropClosable = _props.backdropClosable,
	        animation = _props.animation,
	        show = _props.show,
	        Dialog = _props.dialogComponentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        _props$style = _props.style,
	        style = _props$style === undefined ? {} : _props$style,
	        size = _props.size,
	        width = _props.width,
	        children = _props.children,
	        onEntering = _props.onEntering,
	        onExited = _props.onExited,
	        props = _objectWithoutProperties(_props, ['backdrop', 'backdropClosable', 'animation', 'show', 'dialogComponentClass', 'className', 'clsPrefix', 'style', 'size', 'width', 'children', 'onEntering', 'onExited']);
	
	    var _splitComponent = (0, _tinperBeeCore.splitComponent)(props, _Modal2["default"]),
	        _splitComponent2 = _slicedToArray(_splitComponent, 2),
	        baseModalProps = _splitComponent2[0],
	        dialogProps = _splitComponent2[1];
	
	    var inClassName = show && !animation && 'in';
	
	    var backdropClasses = _defineProperty({}, clsPrefix + '-backdrop', true);
	    var containerClasses = _defineProperty({}, clsPrefix + '-open', true);
	    if (Number(width)) width += 'px';
	
	    var styleRes = _extends({}, this.state.style, style);
	    if (width) {
	      _extends(styleRes, { width: width });
	    }
	    return _react2["default"].createElement(
	      _Modal2["default"],
	      _extends({}, baseModalProps, {
	        ref: function ref(c) {
	          _this2._modal = c;
	        },
	        show: show,
	        onEntering: (0, _tinperBeeCore.createChainedFunction)(onEntering, this.handleEntering),
	        onExited: (0, _tinperBeeCore.createChainedFunction)(onExited, this.handleExited),
	        backdrop: backdrop,
	        backdropClassName: (0, _classnames2["default"])(backdropClasses, inClassName),
	        containerClassName: (0, _classnames2["default"])(containerClasses),
	        transition: animation ? _beeTransition.Fade : undefined,
	        dialogTransitionTimeout: Modal.TRANSITION_DURATION,
	        backdropTransitionTimeout: Modal.BACKDROP_TRANSITION_DURATION
	      }),
	      _react2["default"].createElement(
	        Dialog,
	        _extends({}, dialogProps, {
	          style: styleRes,
	          className: (0, _classnames2["default"])(className, inClassName),
	          onClick: backdrop === true && !!backdropClosable ? this.handleDialogClick : null,
	          size: size
	        }),
	        children
	      )
	    );
	  };
	
	  return Modal;
	}(_react2["default"].Component);
	
	Modal.propTypes = propTypes;
	Modal.defaultProps = defaultProps;
	Modal.childContextTypes = childContextTypes;
	
	Modal.Body = _ModalBody2["default"];
	Modal.Header = _ModalHeader2["default"];
	Modal.Title = _ModalTitle2["default"];
	Modal.Footer = _ModalFooter2["default"];
	
	Modal.Dialog = _ModalDialog2["default"];
	
	Modal.TRANSITION_DURATION = 200000;
	Modal.BACKDROP_TRANSITION_DURATION = 10000;
	
	exports["default"] = Modal;
	module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.listen = exports.filter = exports.off = exports.on = undefined;
	
	var _on = __webpack_require__(15);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _off = __webpack_require__(125);
	
	var _off2 = _interopRequireDefault(_off);
	
	var _filter = __webpack_require__(135);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _listen = __webpack_require__(137);
	
	var _listen2 = _interopRequireDefault(_listen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.on = _on2.default;
	exports.off = _off2.default;
	exports.filter = _filter2.default;
	exports.listen = _listen2.default;
	exports.default = { on: _on2.default, off: _off2.default, filter: _filter2.default, listen: _listen2.default };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = filterEvents;
	
	var _contains = __webpack_require__(106);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _querySelectorAll = __webpack_require__(136);
	
	var _querySelectorAll2 = _interopRequireDefault(_querySelectorAll);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function filterEvents(selector, handler) {
	  return function filterHandler(e) {
	    var top = e.currentTarget,
	        target = e.target,
	        matches = (0, _querySelectorAll2.default)(top, selector);
	
	    if (matches.some(function (match) {
	      return (0, _contains2.default)(match, target);
	    })) handler.call(this, e);
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = qsa;
	// Zepto.js
	// (c) 2010-2015 Thomas Fuchs
	// Zepto.js may be freely distributed under the MIT license.
	var simpleSelectorRE = /^[\w-]*$/;
	var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
	
	function qsa(element, selector) {
	  var maybeID = selector[0] === '#',
	      maybeClass = selector[0] === '.',
	      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
	      isSimple = simpleSelectorRE.test(nameOnly),
	      found;
	
	  if (isSimple) {
	    if (maybeID) {
	      element = element.getElementById ? element : document;
	      return (found = element.getElementById(nameOnly)) ? [found] : [];
	    }
	
	    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));
	
	    return toArray(element.getElementsByTagName(selector));
	  }
	
	  return toArray(element.querySelectorAll(selector));
	}
	module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	var _on = __webpack_require__(15);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _off = __webpack_require__(125);
	
	var _off2 = _interopRequireDefault(_off);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var listen = function listen() {};
	
	if (_inDOM2.default) {
	  listen = function listen(node, eventName, handler, capture) {
	    (0, _on2.default)(node, eventName, handler, capture);
	    return function () {
	      (0, _off2.default)(node, eventName, handler, capture);
	    };
	  };
	}
	
	exports.default = listen;
	module.exports = exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (recalc) {
	  if (!size && size !== 0 || recalc) {
	    if (_inDOM2.default) {
	      var scrollDiv = document.createElement('div');
	
	      scrollDiv.style.position = 'absolute';
	      scrollDiv.style.top = '-9999px';
	      scrollDiv.style.width = '50px';
	      scrollDiv.style.height = '50px';
	      scrollDiv.style.overflow = 'scroll';
	
	      document.body.appendChild(scrollDiv);
	      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	    }
	  }
	
	  return size;
	};
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var size = void 0;
	
	module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*eslint-disable react/prop-types */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(31);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	var _Portal = __webpack_require__(107);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _ModalManager = __webpack_require__(140);
	
	var _ModalManager2 = _interopRequireDefault(_ModalManager);
	
	var _ownerDocument = __webpack_require__(108);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _addEventListener = __webpack_require__(124);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _addFocusListener = __webpack_require__(144);
	
	var _addFocusListener2 = _interopRequireDefault(_addFocusListener);
	
	var _inDOM = __webpack_require__(14);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	var _activeElement = __webpack_require__(145);
	
	var _activeElement2 = _interopRequireDefault(_activeElement);
	
	var _contains = __webpack_require__(106);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _getContainer = __webpack_require__(110);
	
	var _getContainer2 = _interopRequireDefault(_getContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var modalManager = new _ModalManager2["default"]();
	
	/**
	 * 模态框
	 */
	
	var propTypes = _extends({}, _Portal2["default"].propTypes, {
	
	  /**
	   * 是否显示
	   */
	  show: _propTypes2["default"].bool,
	
	  /**
	   * 容器
	   */
	  container: _propTypes2["default"].oneOfType([_tinperBeeCore.componentOrElement, _propTypes2["default"].func]),
	
	  /**
	   * 当模态框打开时的钩子函数
	   */
	  onShow: _propTypes2["default"].func,
	
	  /**
	   * 当show参数为false时触发的模态框关闭时的钩子函数
	   */
	  onHide: _propTypes2["default"].func,
	
	  /**
	   * 是否包含背景
	   */
	  backdrop: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].oneOf(['static'])]),
	
	  /**
	   *返回背景组件的函数
	   */
	  renderBackdrop: _propTypes2["default"].func,
	
	  /**
	   * 设置esc键特殊钩子函数
	   */
	  onEscapeKeyUp: _propTypes2["default"].func,
	
	  /**
	   * 当点击背景时触发的函数
	   */
	  onBackdropClick: _propTypes2["default"].func,
	
	  /**
	   * 背景的style
	   */
	  backdropStyle: _propTypes2["default"].object,
	
	  /**
	   * 背景的class
	   */
	  backdropClassName: _propTypes2["default"].string,
	
	  /**
	   *容器的class
	   */
	  containerClassName: _propTypes2["default"].string,
	
	  /**
	   * 按esc键是否关闭模态框
	   */
	  keyboard: _propTypes2["default"].bool,
	
	  /**
	   * 动画组件
	   */
	  transition: _tinperBeeCore.elementType,
	
	  /**
	   * 设置动画超时时间
	   */
	  dialogTransitionTimeout: _propTypes2["default"].number,
	
	  /**
	   * 设置背景动画超时时间
	   */
	  backdropTransitionTimeout: _propTypes2["default"].number,
	
	  /**
	   * 是否自动设置焦点
	   */
	  autoFocus: _propTypes2["default"].bool,
	
	  /**
	   * 防止焦点离开模态框
	   */
	  enforceFocus: _propTypes2["default"].bool,
	
	  /**
	   * 模态框进入时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	
	  /**
	   * 模态框开始进入时的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	
	  /**
	   * 模态框进入后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	
	  /**
	   * 模态框退出时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	
	  /**
	   * 模态框开始退出时的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	
	  /**
	   * 模态框推出后的钩子函数
	   */
	  onExited: _propTypes2["default"].func,
	
	  /**
	   *管理model状态的实例
	   */
	  manager: _propTypes2["default"].object.isRequired
	});
	
	var defaultProps = {
	  show: false,
	  backdrop: true,
	  keyboard: true,
	  autoFocus: true,
	  enforceFocus: true,
	  onHide: function onHide() {},
	  manager: modalManager,
	  renderBackdrop: function renderBackdrop(props) {
	    return _react2["default"].createElement('div', props);
	  }
	};
	
	var BaseModal = function (_Component) {
	  _inherits(BaseModal, _Component);
	
	  function BaseModal(props, content) {
	    _classCallCheck(this, BaseModal);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      exited: !_this.props.show
	    };
	
	    _this.onShow = _this.onShow.bind(_this);
	    _this.onHide = _this.onHide.bind(_this);
	    _this.setMountNode = _this.setMountNode.bind(_this);
	    _this.handleHidden = _this.handleHidden.bind(_this);
	    _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
	    _this.handleDocumentKeyUp = _this.handleDocumentKeyUp.bind(_this);
	    _this.checkForFocus = _this.checkForFocus.bind(_this);
	    _this.focus = _this.focus.bind(_this);
	    _this.restoreLastFocus = _this.restoreLastFocus.bind(_this);
	    _this.enforceFocus = _this.enforceFocus.bind(_this);
	    _this.getDialogElement = _this.getDialogElement.bind(_this);
	    _this.isTopModal = _this.isTopModal.bind(_this);
	    _this.renderBackdrop = _this.renderBackdrop.bind(_this);
	    return _this;
	  }
	
	  BaseModal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps.show) {
	      this.setState({ exited: false });
	    } else if (!nextProps.transition) {
	      // Otherwise let handleHidden take care of marking exited.
	      this.setState({ exited: true });
	    }
	  };
	
	  BaseModal.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
	    if (!this.props.show && nextProps.show) {
	      this.checkForFocus();
	    }
	  };
	
	  BaseModal.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.show) {
	      this.onShow();
	    }
	    this.mounted = true;
	  };
	
	  BaseModal.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var transition = this.props.transition;
	
	
	    if (prevProps.show && !this.props.show && !transition) {
	      // Otherwise handleHidden will call this.
	      this.onHide();
	    } else if (!prevProps.show && this.props.show) {
	      this.onShow();
	    }
	  };
	
	  BaseModal.prototype.componentWillUnmount = function componentWillUnmount() {
	    var _props = this.props,
	        show = _props.show,
	        transition = _props.transition;
	
	
	    if (show || transition && !this.state.exited) {
	      this.onHide();
	    }
	
	    this.mounted = false;
	  };
	
	  BaseModal.prototype.onShow = function onShow() {
	    var doc = (0, _ownerDocument2["default"])(this);
	    var container = (0, _getContainer2["default"])(this.props.container, doc.body);
	
	    this.props.manager.add(this, container, this.props.containerClassName);
	
	    this._onDocumentKeyupListener = (0, _addEventListener2["default"])(doc, 'keyup', this.handleDocumentKeyUp);
	
	    this._onFocusinListener = (0, _addFocusListener2["default"])(this.enforceFocus);
	
	    this.focus();
	
	    if (this.props.onShow) {
	      this.props.onShow();
	    }
	  };
	
	  BaseModal.prototype.onHide = function onHide() {
	    this.props.manager.remove(this);
	
	    this._onDocumentKeyupListener.remove();
	
	    this._onFocusinListener.remove();
	
	    this.restoreLastFocus();
	  };
	
	  BaseModal.prototype.setMountNode = function setMountNode(ref) {
	    this.mountNode = ref ? ref.getMountNode() : ref;
	  };
	
	  BaseModal.prototype.handleHidden = function handleHidden() {
	    this.setState({ exited: true });
	    this.onHide();
	
	    if (this.props.onExited) {
	      var _props2;
	
	      (_props2 = this.props).onExited.apply(_props2, arguments);
	    }
	  };
	
	  BaseModal.prototype.handleBackdropClick = function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget) {
	      return;
	    }
	
	    if (this.props.onBackdropClick) {
	      this.props.onBackdropClick(e);
	    }
	
	    if (this.props.backdrop === true) {
	      this.props.onHide();
	    }
	  };
	
	  BaseModal.prototype.handleDocumentKeyUp = function handleDocumentKeyUp(e) {
	    if (this.props.keyboard && e.keyCode === 27 && this.isTopModal()) {
	      if (this.props.onEscapeKeyUp) {
	        this.props.onEscapeKeyUp(e);
	      }
	      this.props.onHide();
	    }
	  };
	
	  BaseModal.prototype.checkForFocus = function checkForFocus() {
	    if (_inDOM2["default"]) {
	      this.lastFocus = (0, _activeElement2["default"])();
	    }
	  };
	
	  BaseModal.prototype.focus = function focus() {
	    var autoFocus = this.props.autoFocus;
	    var modalContent = this.getDialogElement();
	    var current = (0, _activeElement2["default"])((0, _ownerDocument2["default"])(this));
	    var focusInModal = current && (0, _contains2["default"])(modalContent, current);
	
	    if (modalContent && autoFocus && !focusInModal) {
	      this.lastFocus = current;
	
	      if (!modalContent.hasAttribute('tabIndex')) {
	        modalContent.setAttribute('tabIndex', -1);
	        (0, _warning2["default"])(false, 'The modal content node does not accept focus. ' + 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
	      }
	
	      modalContent.focus();
	    }
	  };
	
	  BaseModal.prototype.restoreLastFocus = function restoreLastFocus() {
	    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
	    if (this.lastFocus && this.lastFocus.focus) {
	      this.lastFocus.focus();
	      this.lastFocus = null;
	    }
	  };
	
	  BaseModal.prototype.enforceFocus = function enforceFocus() {
	    var enforceFocus = this.props.enforceFocus;
	
	
	    if (!enforceFocus || !this.mounted || !this.isTopModal()) {
	      return;
	    }
	
	    var active = (0, _activeElement2["default"])((0, _ownerDocument2["default"])(this));
	    var modal = this.getDialogElement();
	
	    if (modal && modal !== active && !(0, _contains2["default"])(modal, active)) {
	      modal.focus();
	    }
	  };
	
	  //instead of a ref, which might conflict with one the parent applied.
	
	
	  BaseModal.prototype.getDialogElement = function getDialogElement() {
	    var node = this.refs.modal;
	    return node && node.lastChild;
	  };
	
	  BaseModal.prototype.isTopModal = function isTopModal() {
	    return this.props.manager.isTopModal(this);
	  };
	
	  BaseModal.prototype.renderBackdrop = function renderBackdrop() {
	    var _this2 = this;
	
	    var _props3 = this.props,
	        backdropStyle = _props3.backdropStyle,
	        backdropClassName = _props3.backdropClassName,
	        renderBackdrop = _props3.renderBackdrop,
	        Transition = _props3.transition,
	        backdropTransitionTimeout = _props3.backdropTransitionTimeout;
	
	
	    var backdropRef = function backdropRef(ref) {
	      return _this2.backdrop = ref;
	    };
	
	    var backdrop = _react2["default"].createElement('div', {
	      ref: backdropRef,
	      style: this.props.backdropStyle,
	      className: this.props.backdropClassName,
	      onClick: this.handleBackdropClick
	    });
	
	    if (Transition) {
	      backdrop = _react2["default"].createElement(
	        Transition,
	        { transitionAppear: true,
	          'in': this.props.show,
	          timeout: backdropTransitionTimeout
	        },
	        renderBackdrop({
	          ref: backdropRef,
	          style: backdropStyle,
	          className: backdropClassName,
	          onClick: this.handleBackdropClick
	        })
	      );
	    }
	
	    return backdrop;
	  };
	
	  BaseModal.prototype.render = function render() {
	    var _props4 = this.props,
	        show = _props4.show,
	        container = _props4.container,
	        children = _props4.children,
	        Transition = _props4.transition,
	        backdrop = _props4.backdrop,
	        dialogTransitionTimeout = _props4.dialogTransitionTimeout,
	        className = _props4.className,
	        style = _props4.style,
	        onExit = _props4.onExit,
	        onExiting = _props4.onExiting,
	        onEnter = _props4.onEnter,
	        onEntering = _props4.onEntering,
	        onEntered = _props4.onEntered;
	
	
	    var dialog = _react2["default"].Children.only(children);
	
	    var mountModal = show || Transition && !this.state.exited;
	    if (!mountModal) {
	      return null;
	    }
	
	    var _dialog$props = dialog.props,
	        role = _dialog$props.role,
	        tabIndex = _dialog$props.tabIndex;
	
	
	    if (role === undefined || tabIndex === undefined) {
	      dialog = (0, _react.cloneElement)(dialog, {
	        role: role === undefined ? 'document' : role,
	        tabIndex: tabIndex == null ? '-1' : tabIndex
	      });
	    }
	
	    if (Transition) {
	      dialog = _react2["default"].createElement(
	        Transition,
	        {
	          transitionAppear: true,
	          unmountOnExit: true,
	          'in': show,
	          timeout: dialogTransitionTimeout,
	          onExit: onExit,
	          onExiting: onExiting,
	          onExited: this.handleHidden,
	          onEnter: onEnter,
	          onEntering: onEntering,
	          onEntered: onEntered
	        },
	        dialog
	      );
	    }
	
	    return _react2["default"].createElement(
	      _Portal2["default"],
	      {
	        ref: this.setMountNode,
	        container: container
	      },
	      _react2["default"].createElement(
	        'div',
	        {
	          ref: 'modal',
	          role: role || 'dialog',
	          style: style,
	          className: className
	        },
	        backdrop && this.renderBackdrop(),
	        dialog
	      )
	    );
	  };
	
	  return BaseModal;
	}(_react.Component);
	
	;
	
	BaseModal.Manager = _ModalManager2["default"];
	
	BaseModal.propTypes = propTypes;
	BaseModal.defaultProps = defaultProps;
	
	exports["default"] = BaseModal;
	module.exports = exports['default'];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _style = __webpack_require__(17);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _class = __webpack_require__(141);
	
	var _class2 = _interopRequireDefault(_class);
	
	var _scrollbarSize = __webpack_require__(138);
	
	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);
	
	var _isOverflowing = __webpack_require__(142);
	
	var _isOverflowing2 = _interopRequireDefault(_isOverflowing);
	
	var _manageAriaHidden = __webpack_require__(143);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function findIndexOf(arr, cb) {
	  var idx = -1;
	  arr.some(function (d, i) {
	    if (cb(d, i)) {
	      idx = i;
	      return true;
	    }
	  });
	  return idx;
	}
	
	//查找容器
	function findContainer(data, modal) {
	  return findIndexOf(data, function (d) {
	    return d.modals.indexOf(modal) !== -1;
	  });
	}
	
	//设置容器style
	function setContainerStyle(state, container) {
	  var style = { overflow: 'hidden' };
	
	  state.style = {
	    overflow: container.style.overflow,
	    paddingRight: container.style.paddingRight
	  };
	
	  if (state.overflowing) {
	    //设置内边距，和添加滚动条宽度
	    style.paddingRight = parseInt((0, _style2["default"])(container, 'paddingRight') || 0, 10) + (0, _scrollbarSize2["default"])() + 'px';
	  }
	
	  (0, _style2["default"])(container, style);
	}
	//移除容器style
	function removeContainerStyle(_ref, container) {
	  var style = _ref.style;
	
	
	  Object.keys(style).forEach(function (key) {
	    return container.style[key] = style[key];
	  });
	}
	/**
	 * 容器的正确状态管理和那些容器中的模态。
	 */
	
	var ModalManager = function () {
	  function ModalManager() {
	    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
	        hideSiblingNodes = _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
	        _ref2$handleContainer = _ref2.handleContainerOverflow,
	        handleContainerOverflow = _ref2$handleContainer === undefined ? true : _ref2$handleContainer;
	
	    _classCallCheck(this, ModalManager);
	
	    this.hideSiblingNodes = hideSiblingNodes;
	    this.handleContainerOverflow = handleContainerOverflow;
	    this.modals = [];
	    this.containers = [];
	    this.data = [];
	  }
	
	  ModalManager.prototype.add = function add(modal, container, className) {
	    var modalIdx = this.modals.indexOf(modal);
	    var containerIdx = this.containers.indexOf(container);
	
	    if (modalIdx !== -1) {
	      return modalIdx;
	    }
	
	    modalIdx = this.modals.length;
	    this.modals.push(modal);
	
	    if (this.hideSiblingNodes) {
	      (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
	    }
	
	    if (containerIdx !== -1) {
	      this.data[containerIdx].modals.push(modal);
	      return modalIdx;
	    }
	
	    var data = {
	      modals: [modal],
	      //right now only the first modal of a container will have its classes applied
	      classes: className ? className.split(/\s+/) : [],
	
	      overflowing: (0, _isOverflowing2["default"])(container)
	    };
	
	    if (this.handleContainerOverflow) {
	      setContainerStyle(data, container);
	    }
	
	    data.classes.forEach(_class2["default"].addClass.bind(null, container));
	
	    this.containers.push(container);
	    this.data.push(data);
	
	    return modalIdx;
	  };
	
	  ModalManager.prototype.remove = function remove(modal) {
	    var modalIdx = this.modals.indexOf(modal);
	
	    if (modalIdx === -1) {
	      return;
	    }
	
	    var containerIdx = findContainer(this.data, modal);
	    var data = this.data[containerIdx];
	    var container = this.containers[containerIdx];
	
	    data.modals.splice(data.modals.indexOf(modal), 1);
	
	    this.modals.splice(modalIdx, 1);
	
	    // if that was the last modal in a container,
	    // clean up the container
	    if (data.modals.length === 0) {
	      data.classes.forEach(_class2["default"].removeClass.bind(null, container));
	
	      if (this.handleContainerOverflow) {
	        removeContainerStyle(data, container);
	      }
	
	      if (this.hideSiblingNodes) {
	        (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
	      }
	      this.containers.splice(containerIdx, 1);
	      this.data.splice(containerIdx, 1);
	    } else if (this.hideSiblingNodes) {
	      //otherwise make sure the next top modal is visible to a SR
	      (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
	    }
	  };
	
	  ModalManager.prototype.isTopModal = function isTopModal(modal) {
	    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
	  };
	
	  return ModalManager;
	}();
	
	exports["default"] = ModalManager;
	module.exports = exports['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hasClass = exports.removeClass = exports.addClass = undefined;
	
	var _addClass = __webpack_require__(82);
	
	var _addClass2 = _interopRequireDefault(_addClass);
	
	var _removeClass = __webpack_require__(84);
	
	var _removeClass2 = _interopRequireDefault(_removeClass);
	
	var _hasClass = __webpack_require__(83);
	
	var _hasClass2 = _interopRequireDefault(_hasClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.addClass = _addClass2.default;
	exports.removeClass = _removeClass2.default;
	exports.hasClass = _hasClass2.default;
	exports.default = { addClass: _addClass2.default, removeClass: _removeClass2.default, hasClass: _hasClass2.default };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isOverflowing;
	
	var _isWindow = __webpack_require__(117);
	
	var _isWindow2 = _interopRequireDefault(_isWindow);
	
	var _ownerDocument = __webpack_require__(109);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function isBody(node) {
	  return node && node.tagName.toLowerCase() === 'body';
	}
	
	function bodyIsOverflowing(node) {
	  var doc = (0, _ownerDocument2["default"])(node);
	  var win = (0, _isWindow2["default"])(doc);
	  var fullWidth = win.innerWidth;
	
	  // Support: ie8, no innerWidth
	  if (!fullWidth) {
	    var documentElementRect = doc.documentElement.getBoundingClientRect();
	    fullWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	  }
	
	  return doc.body.clientWidth < fullWidth;
	}
	
	function isOverflowing(container) {
	  var win = (0, _isWindow2["default"])(container);
	
	  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
	}
	module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ariaHidden = ariaHidden;
	exports.hideSiblings = hideSiblings;
	exports.showSiblings = showSiblings;
	
	var BLACKLIST = ['template', 'script', 'style'];
	
	var isHidable = function isHidable(_ref) {
	  var nodeType = _ref.nodeType,
	      tagName = _ref.tagName;
	  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
	};
	
	var siblings = function siblings(container, mount, cb) {
	  mount = [].concat(mount);
	
	  [].forEach.call(container.children, function (node) {
	    if (mount.indexOf(node) === -1 && isHidable(node)) {
	      cb(node);
	    }
	  });
	};
	
	function ariaHidden(show, node) {
	  if (!node) {
	    return;
	  }
	  if (show) {
	    node.setAttribute('aria-hidden', 'true');
	  } else {
	    node.removeAttribute('aria-hidden');
	  }
	}
	
	function hideSiblings(container, mountNode) {
	  siblings(container, mountNode, function (node) {
	    return ariaHidden(true, node);
	  });
	}
	
	function showSiblings(container, mountNode) {
	  siblings(container, mountNode, function (node) {
	    return ariaHidden(false, node);
	  });
	}

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = addFocusListener;
	/**
	 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
	 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
	 *
	 * We only allow one Listener at a time to avoid stack overflows
	 */
	function addFocusListener(handler) {
	  var useFocusin = !document.addEventListener;
	  var remove = void 0;
	
	  if (useFocusin) {
	    document.attachEvent('onfocusin', handler);
	    remove = function remove() {
	      return document.detachEvent('onfocusin', handler);
	    };
	  } else {
	    document.addEventListener('focus', handler, true);
	    remove = function remove() {
	      return document.removeEventListener('focus', handler, true);
	    };
	  }
	
	  return { remove: remove };
	}
	module.exports = exports['default'];

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = activeElement;
	
	var _ownerDocument = __webpack_require__(109);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function activeElement() {
	  var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _ownerDocument2.default)();
	
	  try {
	    return doc.activeElement;
	  } catch (e) {/* ie throws if no active element */}
	}
	module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _tinperBeeCore.elementType
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-modal-body'
	};
	
	var ModalBody = function (_React$Component) {
	  _inherits(ModalBody, _React$Component);
	
	  function ModalBody() {
	    _classCallCheck(this, ModalBody);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  ModalBody.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(Component, _extends({}, props, {
	      className: (0, _classnames2["default"])(className, classes)
	    }));
	  };
	
	  return ModalBody;
	}(_react2["default"].Component);
	
	ModalBody.propTypes = propTypes;
	ModalBody.defaultProps = defaultProps;
	
	exports["default"] = ModalBody;
	module.exports = exports['default'];

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * 传给dialog的classname
	   */
	  dialogClassName: _propTypes2["default"].string,
	  contentStyle: _propTypes2["default"].object
	
	};
	
	var defaultProps = {
	  clsPrefix: 'u-modal'
	};
	
	var ModalDialog = function (_React$Component) {
	  _inherits(ModalDialog, _React$Component);
	
	  function ModalDialog() {
	    _classCallCheck(this, ModalDialog);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  ModalDialog.prototype.render = function render() {
	    var _dialogClasses;
	
	    var _props = this.props,
	        dialogClassName = _props.dialogClassName,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        size = _props.size,
	        style = _props.style,
	        contentStyle = _props.contentStyle,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['dialogClassName', 'className', 'clsPrefix', 'size', 'style', 'contentStyle', 'children']);
	    // const [bsProps, elementProps] = splitBsProps(props);
	    //
	
	
	    var uClassName = _defineProperty({}, '' + clsPrefix, true);
	
	    var modalStyle = { display: 'block' };
	
	    var dialogClasses = (_dialogClasses = {}, _defineProperty(_dialogClasses, uClassName, false), _defineProperty(_dialogClasses, clsPrefix + '-dialog', true), _dialogClasses);
	    if (size) {
	      dialogClasses[clsPrefix + '-' + size] = true;
	    }
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        tabIndex: '-1',
	        role: 'dialog',
	        style: modalStyle,
	        className: (0, _classnames2["default"])(className, uClassName)
	      }),
	      _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(dialogClassName, dialogClasses), style: style },
	        _react2["default"].createElement(
	          'div',
	          { style: contentStyle, className: (0, _classnames2["default"])([clsPrefix + '-content']), role: 'document' },
	          children
	        )
	      )
	    );
	  };
	
	  return ModalDialog;
	}(_react2["default"].Component);
	
	ModalDialog.propTypes = propTypes;
	ModalDialog.defaultProps = defaultProps;
	
	exports["default"] = ModalDialog;
	module.exports = exports['default'];

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _tinperBeeCore.elementType
	};
	
	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-modal-footer'
	};
	
	var ModalFooter = function (_React$Component) {
	  _inherits(ModalFooter, _React$Component);
	
	  function ModalFooter() {
	    _classCallCheck(this, ModalFooter);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  ModalFooter.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(Component, _extends({}, props, {
	      className: (0, _classnames2["default"])(className, classes)
	    }));
	  };
	
	  return ModalFooter;
	}(_react2["default"].Component);
	
	ModalFooter.propTypes = propTypes;
	ModalFooter.defaultProps = defaultProps;
	
	exports["default"] = ModalFooter;
	module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	
	  /**
	   * 是否显示关闭按钮
	   */
	  closeButton: _propTypes2["default"].bool,
	
	  /**
	   * 关闭时的钩子函数
	   */
	  onHide: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  'aria-label': 'Close',
	  closeButton: false,
	  clsPrefix: 'u-modal-header'
	};
	
	var contextTypes = {
	  $u_modal: _propTypes2["default"].shape({
	    onHide: _propTypes2["default"].func
	  })
	};
	
	var ModalHeader = function (_React$Component) {
	  _inherits(ModalHeader, _React$Component);
	
	  function ModalHeader() {
	    _classCallCheck(this, ModalHeader);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  ModalHeader.prototype.render = function render() {
	    var _props = this.props,
	        label = _props['aria-label'],
	        closeButton = _props.closeButton,
	        onHide = _props.onHide,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['aria-label', 'closeButton', 'onHide', 'className', 'clsPrefix', 'children']);
	
	    var modal = this.context.$u_modal;
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      closeButton && _react2["default"].createElement(
	        'button',
	        {
	          type: 'button',
	          className: 'u-close',
	          'aria-label': label,
	          onClick: (0, _tinperBeeCore.createChainedFunction)(modal.onHide, onHide)
	        },
	        _react2["default"].createElement(
	          'span',
	          { 'aria-hidden': 'true' },
	          _react2["default"].createElement('i', { className: 'uf uf-close' })
	        )
	      ),
	      children
	    );
	  };
	
	  return ModalHeader;
	}(_react2["default"].Component);
	
	ModalHeader.propTypes = propTypes;
	ModalHeader.defaultProps = defaultProps;
	ModalHeader.contextTypes = contextTypes;
	
	exports["default"] = ModalHeader;
	module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tinperBeeCore = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  componentClass: _tinperBeeCore.elementType
	};
	
	var defaultProps = {
	  componentClass: 'h4',
	  clsPrefix: 'u-modal-title'
	};
	
	var ModalTitle = function (_React$Component) {
	  _inherits(ModalTitle, _React$Component);
	
	  function ModalTitle() {
	    _classCallCheck(this, ModalTitle);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  ModalTitle.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        props = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(Component, _extends({}, props, {
	      className: (0, _classnames2["default"])(className, classes)
	    }));
	  };
	
	  return ModalTitle;
	}(_react2["default"].Component);
	
	ModalTitle.propTypes = propTypes;
	ModalTitle.defaultProps = defaultProps;
	
	exports["default"] = ModalTitle;
	module.exports = exports['default'];

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FormControl = __webpack_require__(152);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _FormControl2["default"];
	module.exports = exports['default'];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _beeIcon = __webpack_require__(101);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    componentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
	    type: _propTypes2["default"].string,
	    size: _propTypes2["default"].oneOf(['sm', 'md', 'lg']),
	    onSearch: _propTypes2["default"].func,
	    onChange: _propTypes2["default"].func,
	    onBlur: _propTypes2["default"].func,
	    showClose: _propTypes2["default"].bool,
	    focusSelect: _propTypes2["default"].bool
	};
	
	var defaultProps = {
	    componentClass: 'input',
	    clsPrefix: 'u-form-control',
	    type: 'text',
	    size: 'md'
	};
	
	var FormControl = function (_React$Component) {
	    _inherits(FormControl, _React$Component);
	
	    function FormControl(props) {
	        _classCallCheck(this, FormControl);
	
	        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	        _this.handleSearchChange = function (e) {
	            var onChange = _this.props.onChange;
	
	            var value = _this.input.value;
	            _this.setState({
	                value: value,
	                showSearch: value == null || value === ""
	            });
	            if (onChange) {
	                onChange(value, e);
	            }
	        };
	
	        _this.handleChange = function (e) {
	            var onChange = _this.props.onChange;
	
	            var value = _this.input.value;
	            _this.setState({
	                showClose: true
	            });
	            if (onChange) {
	                onChange(value, e);
	            }
	        };
	
	        _this.clearValue = function () {
	            var onChange = _this.props.onChange;
	
	            _this.setState({
	                showSearch: true,
	                value: "",
	                showClose: false
	            });
	            if (onChange) {
	                onChange("");
	            }
	            _this.input.focus();
	        };
	
	        _this.handleKeyDown = function (e) {
	            var _this$props = _this.props,
	                onSearch = _this$props.onSearch,
	                type = _this$props.type;
	
	            if (e.keyCode === 13 && type === "search") {
	                if (onSearch) {
	                    onSearch(_this.input.value);
	                }
	            }
	        };
	
	        _this.handleSearch = function (e) {
	            var onSearch = _this.props.onSearch;
	
	            if (onSearch) onSearch(_this.input.value);
	        };
	
	        _this.handleBlur = function (e) {
	            var value = _this.state.value;
	            var onBlur = _this.props.onBlur;
	
	
	            if (onBlur) {
	                onBlur(value, e);
	            }
	        };
	
	        _this.handleFocus = function (e) {
	            var value = _this.state.value;
	            var onFocus = _this.props.onFocus;
	
	            if (_this.props.focusSelect) {
	                _this.input.select();
	            }
	            if (onFocus) {
	                onFocus(value, e);
	            }
	        };
	
	        _this.renderInput = function () {
	            var _this$props2 = _this.props,
	                Component = _this$props2.componentClass,
	                type = _this$props2.type,
	                className = _this$props2.className,
	                size = _this$props2.size,
	                clsPrefix = _this$props2.clsPrefix,
	                value = _this$props2.value,
	                onChange = _this$props2.onChange,
	                onSearch = _this$props2.onSearch,
	                onBlur = _this$props2.onBlur,
	                showClose = _this$props2.showClose,
	                focusSelect = _this$props2.focusSelect,
	                others = _objectWithoutProperties(_this$props2, ['componentClass', 'type', 'className', 'size', 'clsPrefix', 'value', 'onChange', 'onSearch', 'onBlur', 'showClose', 'focusSelect']);
	            // input[type="file"] 不应该有类名 .form-control.
	
	
	            var classes = {};
	            if (size) {
	                classes['' + size] = true;
	            }
	
	            var classNames = void 0;
	            if (type !== 'file') {
	                classNames = (0, _classnames2["default"])(clsPrefix, classes);
	            }
	
	            return showClose ? _react2["default"].createElement(
	                'div',
	                { className: (0, _classnames2["default"])(clsPrefix + '-close', clsPrefix + '-affix-wrapper', className) },
	                _react2["default"].createElement(Component, _extends({}, others, {
	                    type: type,
	                    ref: function ref(el) {
	                        return _this.input = el;
	                    },
	                    value: value,
	                    onChange: _this.handleChange,
	                    onBlur: _this.handleBlur,
	                    onFocus: _this.handleFocus,
	                    className: (0, _classnames2["default"])(className, classNames)
	                })),
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-suffix' },
	                    _this.state.showClose ? _react2["default"].createElement(_beeIcon2["default"], { onClick: _this.clearValue, type: 'uf-close-c' }) : ''
	                )
	            ) : _react2["default"].createElement(Component, _extends({}, others, {
	                type: type,
	                ref: function ref(el) {
	                    return _this.input = el;
	                },
	                value: value,
	                onChange: _this.handleChange,
	                onBlur: _this.handleBlur,
	                onFocus: _this.handleFocus,
	                className: (0, _classnames2["default"])(className, classNames)
	            }));
	        };
	
	        _this.renderSearch = function () {
	            var _this$props3 = _this.props,
	                Component = _this$props3.componentClass,
	                type = _this$props3.type,
	                className = _this$props3.className,
	                size = _this$props3.size,
	                clsPrefix = _this$props3.clsPrefix,
	                value = _this$props3.value,
	                onChange = _this$props3.onChange,
	                onSearch = _this$props3.onSearch,
	                onBlur = _this$props3.onBlur,
	                others = _objectWithoutProperties(_this$props3, ['componentClass', 'type', 'className', 'size', 'clsPrefix', 'value', 'onChange', 'onSearch', 'onBlur']);
	            // input[type="file"] 不应该有类名 .form-control.
	
	
	            var classes = {};
	            if (size) {
	                classes['' + size] = true;
	            }
	            classes[clsPrefix + '-search'] = true;
	
	            if (type === "search") {
	                return _react2["default"].createElement(
	                    'div',
	                    { className: (0, _classnames2["default"])(clsPrefix + '-search', clsPrefix + '-affix-wrapper', className) },
	                    _react2["default"].createElement(Component, _extends({}, others, {
	                        type: type,
	                        ref: function ref(el) {
	                            return _this.input = el;
	                        },
	                        onChange: _this.handleSearchChange,
	                        value: value,
	                        onKeyDown: _this.handleKeyDown,
	                        onBlur: _this.handleBlur,
	                        onFocus: _this.handleFocus,
	                        className: (0, _classnames2["default"])(className, clsPrefix, classes)
	                    })),
	                    _react2["default"].createElement(
	                        'div',
	                        { className: clsPrefix + '-suffix' },
	                        _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search', onClick: _this.handleSearch })
	                    )
	                );
	            }
	        };
	
	        _this.state = {
	            showSearch: !props.value,
	            value: props.value == null ? "" : props.value,
	            showClose: false
	        };
	        _this.input = {};
	        return _this;
	    }
	
	    FormControl.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProp) {
	        if (nextProp.value !== this.state.value) {
	            this.setState({ value: nextProp.value });
	        }
	    };
	
	    FormControl.prototype.render = function render() {
	
	        if (this.props.type === "search") {
	            return this.renderSearch();
	        }
	
	        return this.renderInput();
	    };
	
	    return FormControl;
	}(_react2["default"].Component);
	
	FormControl.propTypes = propTypes;
	FormControl.defaultProps = defaultProps;
	
	exports["default"] = FormControl;
	module.exports = exports['default'];

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(154);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _propTypes2["default"].oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _propTypes2["default"].object,
	    /**
	     * @title 形状
	     */
	    shape: _propTypes2["default"].oneOf(['block', 'round', 'border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),
	
	    bordered: _propTypes2["default"].bool,
	    /**
	    * @title 类型
	    */
	    colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _propTypes2["default"].bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _propTypes2["default"].string,
	
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _propTypes2["default"].oneOf(['submit', 'button', 'reset']),
	    isSubmit: _propTypes2["default"].bool //是否作为form的提交按钮
	};
	
	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button',
	    bordered: false,
	    isSubmit: false
	};
	
	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};
	
	var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button(props) {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }
	
	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            bordered = _props.bordered,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            isSubmit = _props.isSubmit,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'bordered', 'children', 'htmlType', 'clsPrefix', 'isSubmit']);
	
	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        //clsObj[`${clsPrefix}-border`] = bordered;
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };
	
	    return Button;
	}(_react.Component);
	
	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;
	
	exports["default"] = Button;
	module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Carousel = __webpack_require__(156);
	
	var _Carousel2 = _interopRequireDefault(_Carousel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _Carousel2['default'];
	module.exports = exports['default'];

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _swiper = __webpack_require__(157);
	
	var _swiper2 = _interopRequireDefault(_swiper);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
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
	    containerClass: _propTypes2['default'].string,
	    wrapperClass: _propTypes2['default'].string,
	    children: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].element]),
	    rebuildOnUpdate: _propTypes2['default'].bool,
	    shouldSwiperUpdate: _propTypes2['default'].bool,
	    prevButtonCustomizedClass: _propTypes2['default'].string,
	    nextButtonCustomizedClass: _propTypes2['default'].string,
	    paginationCustomizedClass: _propTypes2['default'].string,
	    scrollbarCustomizedClass: _propTypes2['default'].string,
	    activeSlideKey: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
	    // parallax
	    parallax: _propTypes2['default'].bool,
	    parallaxEl: _propTypes2['default'].shape({
	        el: _propTypes2['default'].string,
	        value: _propTypes2['default'].string
	    }),
	
	    // swiper parameter
	    init: _propTypes2['default'].bool,
	    initialSlide: _propTypes2['default'].number,
	    direction: _propTypes2['default'].string,
	    rtl: _propTypes2['default'].bool,
	    speed: _propTypes2['default'].number,
	    setWrapperSize: _propTypes2['default'].bool,
	    virtualTranslate: _propTypes2['default'].bool,
	    width: _propTypes2['default'].number,
	    height: _propTypes2['default'].number,
	    autoHeight: _propTypes2['default'].bool,
	    roundLengths: _propTypes2['default'].bool,
	    nested: _propTypes2['default'].bool,
	    uniqueNavElements: _propTypes2['default'].bool,
	    effect: _propTypes2['default'].string,
	    runCallbacksOnInit: _propTypes2['default'].bool,
	
	    // slides grid
	    spaceBetween: _propTypes2['default'].number,
	    slidesPerView: _propTypes2['default'].any,
	    slidesPerColumn: _propTypes2['default'].number,
	    slidesPerColumnFill: _propTypes2['default'].string,
	    slidesPerGroup: _propTypes2['default'].number,
	    centeredSlides: _propTypes2['default'].bool,
	    slidesOffsetBefore: _propTypes2['default'].number,
	    slidesOffsetAfter: _propTypes2['default'].number,
	    normalizeSlideIndex: _propTypes2['default'].bool,
	
	    // grab cursor
	    grabCursor: _propTypes2['default'].bool,
	
	    // touches
	    touchEventsTarget: _propTypes2['default'].string,
	    touchRatio: _propTypes2['default'].number,
	    touchAngle: _propTypes2['default'].number,
	    simulateTouch: _propTypes2['default'].bool,
	    shortSwipes: _propTypes2['default'].bool,
	    longSwipes: _propTypes2['default'].bool,
	    longSwipesRatio: _propTypes2['default'].number,
	    longSwipesMs: _propTypes2['default'].number,
	    followFinger: _propTypes2['default'].bool,
	    allowTouchMove: _propTypes2['default'].bool,
	    threshold: _propTypes2['default'].number,
	    touchMoveStopPropagation: _propTypes2['default'].bool,
	    iOSEdgeSwipeDetection: _propTypes2['default'].bool,
	    iOSEdgeSwipeThreshold: _propTypes2['default'].number,
	    touchReleaseOnEdges: _propTypes2['default'].bool,
	    passiveListeners: _propTypes2['default'].bool,
	
	    // touch resistance
	    resistance: _propTypes2['default'].bool,
	    resistanceRatio: _propTypes2['default'].number,
	
	    // swiping / no swiping
	    allowSlidePrev: _propTypes2['default'].bool,
	    allowSlideNext: _propTypes2['default'].bool,
	    noSwiping: _propTypes2['default'].bool,
	    noSwipingClass: _propTypes2['default'].string,
	    swipeHandler: _propTypes2['default'].any,
	
	    // clicks
	    preventClicks: _propTypes2['default'].bool,
	    preventClicksPropagation: _propTypes2['default'].bool,
	    slideToClickedSlide: _propTypes2['default'].bool,
	
	    // freemode
	    freeMode: _propTypes2['default'].bool,
	    freeModeMomentum: _propTypes2['default'].bool,
	    freeModeMomentumRatio: _propTypes2['default'].number,
	    freeModeMomentumVelocityRatio: _propTypes2['default'].number,
	    freeModeMomentumBounce: _propTypes2['default'].bool,
	    freeModeMomentumBounceRatio: _propTypes2['default'].number,
	    freeModeMinimumVelocity: _propTypes2['default'].number,
	    freeModeSticky: _propTypes2['default'].bool,
	
	    // progress
	    watchSlidesProgress: _propTypes2['default'].bool,
	    watchSlidesVisibility: _propTypes2['default'].bool,
	
	    // images
	    preloadImages: _propTypes2['default'].bool,
	    updateOnImagesReady: _propTypes2['default'].bool,
	
	    // loop
	    loop: _propTypes2['default'].bool,
	    loopAdditionalSlides: _propTypes2['default'].number,
	    loopedSlides: _propTypes2['default'].number,
	    loopFillGroupWithBlank: _propTypes2['default'].bool,
	
	    // breakpoints
	    breakpoints: _propTypes2['default'].object,
	
	    // observer
	    observer: _propTypes2['default'].bool,
	    observeParents: _propTypes2['default'].bool,
	
	    // namespace
	    containerModifierClass: _propTypes2['default'].string,
	    slideClass: _propTypes2['default'].string,
	    slideActiveClass: _propTypes2['default'].string,
	    slideDuplicatedActiveClass: _propTypes2['default'].string,
	    slideVisibleClass: _propTypes2['default'].string,
	    slideDuplicateClass: _propTypes2['default'].string,
	    slideNextClass: _propTypes2['default'].string,
	    slideDuplicatedNextClass: _propTypes2['default'].string,
	    slidePrevClass: _propTypes2['default'].string,
	    slideDuplicatedPrevClass: _propTypes2['default'].string,
	
	    // autoplay
	    autoplay: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].shape({
	        delay: _propTypes2['default'].number,
	        stopOnLast: _propTypes2['default'].bool,
	        disableOnInteraction: _propTypes2['default'].bool
	    })]),
	
	    // pagination
	    pagination: _propTypes2['default'].shape({
	        el: _propTypes2['default'].string,
	        type: _propTypes2['default'].string,
	        bulletElement: _propTypes2['default'].string,
	        dynamicBullets: _propTypes2['default'].bool,
	        hideOnClick: _propTypes2['default'].bool,
	        clickable: _propTypes2['default'].bool,
	        renderBullet: _propTypes2['default'].func,
	        renderFraction: _propTypes2['default'].func,
	        renderProgressbar: _propTypes2['default'].func,
	        renderCustom: _propTypes2['default'].func,
	        bulletClass: _propTypes2['default'].string,
	        bulletActiveClass: _propTypes2['default'].string,
	        modifierClass: _propTypes2['default'].string,
	        currentClass: _propTypes2['default'].string,
	        totalClass: _propTypes2['default'].string,
	        hiddenClass: _propTypes2['default'].string,
	        progressbarFillClass: _propTypes2['default'].string,
	        clickableClass: _propTypes2['default'].string
	    }),
	
	    // scrollbar
	    scrollbar: _propTypes2['default'].shape({
	        el: _propTypes2['default'].any,
	        hide: _propTypes2['default'].bool,
	        draggable: _propTypes2['default'].bool,
	        snapOnRelease: _propTypes2['default'].bool,
	        dragSize: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])
	    }),
	
	    // navigation
	    navigation: _propTypes2['default'].shape({
	        nextEl: _propTypes2['default'].string,
	        prevEl: _propTypes2['default'].string,
	        hideOnClick: _propTypes2['default'].bool,
	        disabledClass: _propTypes2['default'].string,
	        hiddenClass: _propTypes2['default'].string
	    }),
	
	    // a11y
	    a11y: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].shape({
	        prevSlideMessage: _propTypes2['default'].string,
	        nextSlideMessage: _propTypes2['default'].string,
	        firstSlideMessage: _propTypes2['default'].string,
	        lastSlideMessage: _propTypes2['default'].string,
	        paginationBulletMessage: _propTypes2['default'].string,
	        notificationClass: _propTypes2['default'].string
	    })]),
	
	    // zoom
	    zoom: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].shape({
	        maxRatio: _propTypes2['default'].number,
	        minRatio: _propTypes2['default'].number,
	        toggle: _propTypes2['default'].bool,
	        containerClass: _propTypes2['default'].string,
	        zoomedSlideClass: _propTypes2['default'].string
	    })]),
	
	    // keyboard
	    keyboard: _propTypes2['default'].bool,
	
	    // mousewheel
	    mousewheel: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].shape({
	        forceToAxis: _propTypes2['default'].bool,
	        releaseOnEdges: _propTypes2['default'].bool,
	        invert: _propTypes2['default'].bool,
	        sensitivity: _propTypes2['default'].number,
	        eventsTarged: _propTypes2['default'].string
	    })]),
	
	    // hashNavigation
	    hashNavigation: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].shape({
	        watchState: _propTypes2['default'].bool,
	        replaceState: _propTypes2['default'].bool
	    })]),
	
	    // history
	    history: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].shape({
	        key: _propTypes2['default'].string,
	        replaceState: _propTypes2['default'].bool
	    })]),
	
	    // lazy
	    lazy: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].shape({
	        loadPrevNext: _propTypes2['default'].bool,
	        loadPrevNextAmount: _propTypes2['default'].number,
	        loadOnTransitionStart: _propTypes2['default'].bool,
	        elementClass: _propTypes2['default'].string,
	        loadingClass: _propTypes2['default'].string,
	        loadedClass: _propTypes2['default'].string,
	        preloaderClass: _propTypes2['default'].string
	    })]),
	
	    // fadeEffect
	    fadeEffect: _propTypes2['default'].shape({
	        crossFade: _propTypes2['default'].bool
	    }),
	
	    // coverflowEffect
	    coverflowEffect: _propTypes2['default'].shape({
	        slideShadows: _propTypes2['default'].bool,
	        rotate: _propTypes2['default'].number,
	        stretch: _propTypes2['default'].number,
	        depth: _propTypes2['default'].number,
	        modifier: _propTypes2['default'].number
	    }),
	
	    // flipEffect
	    flipEffect: _propTypes2['default'].shape({
	        slideShadows: _propTypes2['default'].bool,
	        limitRotation: _propTypes2['default'].bool
	    }),
	
	    // cubeEffect
	    cubeEffect: _propTypes2['default'].shape({
	        slideShadows: _propTypes2['default'].bool,
	        shadow: _propTypes2['default'].bool,
	        shadowOffset: _propTypes2['default'].number,
	        shadowScale: _propTypes2['default'].number
	    }),
	
	    // controller
	    controller: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].shape({
	        control: _propTypes2['default'].any,
	        inverse: _propTypes2['default'].bool,
	        by: _propTypes2['default'].string
	    })]),
	
	    // events
	    on: _propTypes2['default'].shape({
	        init: _propTypes2['default'].func,
	        beforeDestroy: _propTypes2['default'].func,
	        slideChange: _propTypes2['default'].func,
	        slideChangeTransitionStart: _propTypes2['default'].func,
	        slideChangeTransitionEnd: _propTypes2['default'].func,
	        slideNextTransitionStart: _propTypes2['default'].func,
	        slideNextTransitionEnd: _propTypes2['default'].func,
	        slidePrevTransitionStart: _propTypes2['default'].func,
	        slidePrevTransitionEnd: _propTypes2['default'].func,
	        transitionStart: _propTypes2['default'].func,
	        onTransitionEnd: _propTypes2['default'].func,
	        touchStart: _propTypes2['default'].func,
	        touchMove: _propTypes2['default'].func,
	        touchMoveOpposite: _propTypes2['default'].func,
	        sliderMove: _propTypes2['default'].func,
	        touchEnd: _propTypes2['default'].func,
	        click: _propTypes2['default'].func,
	        tap: _propTypes2['default'].func,
	        doubleTap: _propTypes2['default'].func,
	        imagesReady: _propTypes2['default'].func,
	        progress: _propTypes2['default'].func,
	        reachBeginning: _propTypes2['default'].func,
	        reachEnd: _propTypes2['default'].func,
	        fromEdge: _propTypes2['default'].func,
	        setTranslate: _propTypes2['default'].func,
	        setTransition: _propTypes2['default'].func,
	        resize: _propTypes2['default'].func
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
	
	            return _react2['default'].createElement('div', { className: [scrollbarClass, scrollbarCustomizedClass].join(' ') });
	        };
	
	        _this.renderPagination = function () {
	            if (!_this.props.pagination || !_this.props.pagination.el) return false;
	            var paginationCustomizedClass = _this.validateClass(_this.props.paginationCustomizedClass);
	            var paginationClass = _this.validateClass(_this.props.pagination.el);
	
	            return _react2['default'].createElement('div', { className: [paginationClass, paginationCustomizedClass].join(' ') });
	        };
	
	        _this.renderNextButton = function () {
	            if (!_this.props.navigation || !_this.props.navigation.nextEl) return false;
	            var nextButtonCustomizedClass = _this.validateClass(_this.props.nextButtonCustomizedClass);
	            var nextButtonClass = _this.validateClass(_this.props.navigation.nextEl);
	
	            return _react2['default'].createElement('div', { className: [nextButtonClass, nextButtonCustomizedClass].join(' ') });
	        };
	
	        _this.renderPrevButton = function () {
	            if (!_this.props.navigation || !_this.props.navigation.prevEl) return false;
	            var prevButtonCustomizedClass = _this.validateClass(_this.props.prevButtonCustomizedClass);
	            var prevButtonClass = _this.validateClass(_this.props.navigation.prevEl);
	
	            return _react2['default'].createElement('div', { className: [prevButtonClass, prevButtonCustomizedClass].join(' ') });
	        };
	
	        _this.renderParallax = function () {
	            if (!_this.props.parallax || !_this.props.parallaxEl) return false;
	
	            var parallaxBgClass = _this.validateClass(_this.props.parallaxEl.el);
	            return _react2['default'].createElement('div', { className: parallaxBgClass, 'data-swiper-parallax': _this.props.parallaxEl.value });
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
	
	            return _react2['default'].cloneElement(e, _extends({}, childProps));
	        };
	
	        return _this;
	    }
	
	    Carousel.prototype.componentDidMount = function componentDidMount() {
	        this.swiper = new _swiper2['default'](_reactDom2['default'].findDOMNode(this), _extends({}, this.props));
	    };
	
	    Carousel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
	            this.swiper.destroy(true, true);
	            this.swiper = new _swiper2['default'](_reactDom2['default'].findDOMNode(this), _extends({}, nextProps));
	        }
	    };
	
	    Carousel.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return nextProps.children !== this.props.children;
	    };
	
	    Carousel.prototype.componentDidUpdate = function componentDidUpdate() {
	        var _this2 = this;
	
	        if (this.props.rebuildOnUpdate && typeof this.swiper !== 'undefined') {
	            this.swiper.destroy(true, true);
	            this.swiper = new _swiper2['default'](_reactDom2['default'].findDOMNode(this), _extends({}, this.props));
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
	            _react2['default'].Children.forEach(this.props.children, function (child) {
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
	
	        return _react2['default'].createElement(
	            'div',
	            _extends({ className: containerClass }, rtlProp),
	            this.renderParallax(),
	            _react2['default'].createElement(
	                'div',
	                { className: wrapperClass },
	                _react2['default'].Children.map(children, this.renderContent)
	            ),
	            this.renderPagination(),
	            this.renderScrollBar(),
	            this.renderNextButton(),
	            this.renderPrevButton()
	        );
	    };
	
	    return Carousel;
	}(_react2['default'].Component);
	
	Carousel.defaultProps = defaultProps;
	
	Carousel.propTypes = propTypes;
	
	exports['default'] = Carousel;
	module.exports = exports['default'];

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Swiper 4.4.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * http://www.idangero.us/swiper/
	 *
	 * Copyright 2014-2018 Vladimir Kharlampidi
	 *
	 * Released under the MIT License
	 *
	 * Released on: September 14, 2018
	 */
	
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Swiper = factory());
	}(this, (function () { 'use strict';
	
	  /**
	   * SSR Window 1.0.1
	   * Better handling for window object in SSR environment
	   * https://github.com/nolimits4web/ssr-window
	   *
	   * Copyright 2018, Vladimir Kharlampidi
	   *
	   * Licensed under MIT
	   *
	   * Released on: July 18, 2018
	   */
	  var doc = (typeof document === 'undefined') ? {
	    body: {},
	    addEventListener: function addEventListener() {},
	    removeEventListener: function removeEventListener() {},
	    activeElement: {
	      blur: function blur() {},
	      nodeName: '',
	    },
	    querySelector: function querySelector() {
	      return null;
	    },
	    querySelectorAll: function querySelectorAll() {
	      return [];
	    },
	    getElementById: function getElementById() {
	      return null;
	    },
	    createEvent: function createEvent() {
	      return {
	        initEvent: function initEvent() {},
	      };
	    },
	    createElement: function createElement() {
	      return {
	        children: [],
	        childNodes: [],
	        style: {},
	        setAttribute: function setAttribute() {},
	        getElementsByTagName: function getElementsByTagName() {
	          return [];
	        },
	      };
	    },
	    location: { hash: '' },
	  } : document; // eslint-disable-line
	
	  var win = (typeof window === 'undefined') ? {
	    document: doc,
	    navigator: {
	      userAgent: '',
	    },
	    location: {},
	    history: {},
	    CustomEvent: function CustomEvent() {
	      return this;
	    },
	    addEventListener: function addEventListener() {},
	    removeEventListener: function removeEventListener() {},
	    getComputedStyle: function getComputedStyle() {
	      return {
	        getPropertyValue: function getPropertyValue() {
	          return '';
	        },
	      };
	    },
	    Image: function Image() {},
	    Date: function Date() {},
	    screen: {},
	    setTimeout: function setTimeout() {},
	    clearTimeout: function clearTimeout() {},
	  } : window; // eslint-disable-line
	
	  /**
	   * Dom7 2.1.2
	   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
	   * http://framework7.io/docs/dom.html
	   *
	   * Copyright 2018, Vladimir Kharlampidi
	   * The iDangero.us
	   * http://www.idangero.us/
	   *
	   * Licensed under MIT
	   *
	   * Released on: September 13, 2018
	   */
	
	  var Dom7 = function Dom7(arr) {
	    var self = this;
	    // Create array-like object
	    for (var i = 0; i < arr.length; i += 1) {
	      self[i] = arr[i];
	    }
	    self.length = arr.length;
	    // Return collection with methods
	    return this;
	  };
	
	  function $(selector, context) {
	    var arr = [];
	    var i = 0;
	    if (selector && !context) {
	      if (selector instanceof Dom7) {
	        return selector;
	      }
	    }
	    if (selector) {
	        // String
	      if (typeof selector === 'string') {
	        var els;
	        var tempParent;
	        var html = selector.trim();
	        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
	          var toCreate = 'div';
	          if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
	          if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
	          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
	          if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
	          if (html.indexOf('<option') === 0) { toCreate = 'select'; }
	          tempParent = doc.createElement(toCreate);
	          tempParent.innerHTML = html;
	          for (i = 0; i < tempParent.childNodes.length; i += 1) {
	            arr.push(tempParent.childNodes[i]);
	          }
	        } else {
	          if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
	            // Pure ID selector
	            els = [doc.getElementById(selector.trim().split('#')[1])];
	          } else {
	            // Other selectors
	            els = (context || doc).querySelectorAll(selector.trim());
	          }
	          for (i = 0; i < els.length; i += 1) {
	            if (els[i]) { arr.push(els[i]); }
	          }
	        }
	      } else if (selector.nodeType || selector === win || selector === doc) {
	        // Node/element
	        arr.push(selector);
	      } else if (selector.length > 0 && selector[0].nodeType) {
	        // Array of elements or instance of Dom
	        for (i = 0; i < selector.length; i += 1) {
	          arr.push(selector[i]);
	        }
	      }
	    }
	    return new Dom7(arr);
	  }
	
	  $.fn = Dom7.prototype;
	  $.Class = Dom7;
	  $.Dom7 = Dom7;
	
	  function unique(arr) {
	    var uniqueArray = [];
	    for (var i = 0; i < arr.length; i += 1) {
	      if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
	    }
	    return uniqueArray;
	  }
	
	  // Classes and attributes
	  function addClass(className) {
	    var this$1 = this;
	
	    if (typeof className === 'undefined') {
	      return this;
	    }
	    var classes = className.split(' ');
	    for (var i = 0; i < classes.length; i += 1) {
	      for (var j = 0; j < this.length; j += 1) {
	        if (typeof this$1[j] !== 'undefined' && typeof this$1[j].classList !== 'undefined') { this$1[j].classList.add(classes[i]); }
	      }
	    }
	    return this;
	  }
	  function removeClass(className) {
	    var this$1 = this;
	
	    var classes = className.split(' ');
	    for (var i = 0; i < classes.length; i += 1) {
	      for (var j = 0; j < this.length; j += 1) {
	        if (typeof this$1[j] !== 'undefined' && typeof this$1[j].classList !== 'undefined') { this$1[j].classList.remove(classes[i]); }
	      }
	    }
	    return this;
	  }
	  function hasClass(className) {
	    if (!this[0]) { return false; }
	    return this[0].classList.contains(className);
	  }
	  function toggleClass(className) {
	    var this$1 = this;
	
	    var classes = className.split(' ');
	    for (var i = 0; i < classes.length; i += 1) {
	      for (var j = 0; j < this.length; j += 1) {
	        if (typeof this$1[j] !== 'undefined' && typeof this$1[j].classList !== 'undefined') { this$1[j].classList.toggle(classes[i]); }
	      }
	    }
	    return this;
	  }
	  function attr(attrs, value) {
	    var arguments$1 = arguments;
	    var this$1 = this;
	
	    if (arguments.length === 1 && typeof attrs === 'string') {
	      // Get attr
	      if (this[0]) { return this[0].getAttribute(attrs); }
	      return undefined;
	    }
	
	    // Set attrs
	    for (var i = 0; i < this.length; i += 1) {
	      if (arguments$1.length === 2) {
	        // String
	        this$1[i].setAttribute(attrs, value);
	      } else {
	        // Object
	        // eslint-disable-next-line
	        for (var attrName in attrs) {
	          this$1[i][attrName] = attrs[attrName];
	          this$1[i].setAttribute(attrName, attrs[attrName]);
	        }
	      }
	    }
	    return this;
	  }
	  // eslint-disable-next-line
	  function removeAttr(attr) {
	    var this$1 = this;
	
	    for (var i = 0; i < this.length; i += 1) {
	      this$1[i].removeAttribute(attr);
	    }
	    return this;
	  }
	  function data(key, value) {
	    var this$1 = this;
	
	    var el;
	    if (typeof value === 'undefined') {
	      el = this[0];
	      // Get value
	      if (el) {
	        if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
	          return el.dom7ElementDataStorage[key];
	        }
	
	        var dataKey = el.getAttribute(("data-" + key));
	        if (dataKey) {
	          return dataKey;
	        }
	        return undefined;
	      }
	      return undefined;
	    }
	
	    // Set value
	    for (var i = 0; i < this.length; i += 1) {
	      el = this$1[i];
	      if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
	      el.dom7ElementDataStorage[key] = value;
	    }
	    return this;
	  }
	  // Transforms
	  // eslint-disable-next-line
	  function transform(transform) {
	    var this$1 = this;
	
	    for (var i = 0; i < this.length; i += 1) {
	      var elStyle = this$1[i].style;
	      elStyle.webkitTransform = transform;
	      elStyle.transform = transform;
	    }
	    return this;
	  }
	  function transition(duration) {
	    var this$1 = this;
	
	    if (typeof duration !== 'string') {
	      duration = duration + "ms"; // eslint-disable-line
	    }
	    for (var i = 0; i < this.length; i += 1) {
	      var elStyle = this$1[i].style;
	      elStyle.webkitTransitionDuration = duration;
	      elStyle.transitionDuration = duration;
	    }
	    return this;
	  }
	  // Events
	  function on() {
	    var this$1 = this;
	    var assign;
	
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	    var eventType = args[0];
	    var targetSelector = args[1];
	    var listener = args[2];
	    var capture = args[3];
	    if (typeof args[1] === 'function') {
	      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
	      targetSelector = undefined;
	    }
	    if (!capture) { capture = false; }
	
	    function handleLiveEvent(e) {
	      var target = e.target;
	      if (!target) { return; }
	      var eventData = e.target.dom7EventData || [];
	      if (eventData.indexOf(e) < 0) {
	        eventData.unshift(e);
	      }
	      if ($(target).is(targetSelector)) { listener.apply(target, eventData); }
	      else {
	        var parents = $(target).parents(); // eslint-disable-line
	        for (var k = 0; k < parents.length; k += 1) {
	          if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
	        }
	      }
	    }
	    function handleEvent(e) {
	      var eventData = e && e.target ? e.target.dom7EventData || [] : [];
	      if (eventData.indexOf(e) < 0) {
	        eventData.unshift(e);
	      }
	      listener.apply(this, eventData);
	    }
	    var events = eventType.split(' ');
	    var j;
	    for (var i = 0; i < this.length; i += 1) {
	      var el = this$1[i];
	      if (!targetSelector) {
	        for (j = 0; j < events.length; j += 1) {
	          var event = events[j];
	          if (!el.dom7Listeners) { el.dom7Listeners = {}; }
	          if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
	          el.dom7Listeners[event].push({
	            listener: listener,
	            proxyListener: handleEvent,
	          });
	          el.addEventListener(event, handleEvent, capture);
	        }
	      } else {
	        // Live events
	        for (j = 0; j < events.length; j += 1) {
	          var event$1 = events[j];
	          if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
	          if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
	          el.dom7LiveListeners[event$1].push({
	            listener: listener,
	            proxyListener: handleLiveEvent,
	          });
	          el.addEventListener(event$1, handleLiveEvent, capture);
	        }
	      }
	    }
	    return this;
	  }
	  function off() {
	    var this$1 = this;
	    var assign;
	
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	    var eventType = args[0];
	    var targetSelector = args[1];
	    var listener = args[2];
	    var capture = args[3];
	    if (typeof args[1] === 'function') {
	      (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
	      targetSelector = undefined;
	    }
	    if (!capture) { capture = false; }
	
	    var events = eventType.split(' ');
	    for (var i = 0; i < events.length; i += 1) {
	      var event = events[i];
	      for (var j = 0; j < this.length; j += 1) {
	        var el = this$1[j];
	        var handlers = (void 0);
	        if (!targetSelector && el.dom7Listeners) {
	          handlers = el.dom7Listeners[event];
	        } else if (targetSelector && el.dom7LiveListeners) {
	          handlers = el.dom7LiveListeners[event];
	        }
	        if (handlers && handlers.length) {
	          for (var k = handlers.length - 1; k >= 0; k -= 1) {
	            var handler = handlers[k];
	            if (listener && handler.listener === listener) {
	              el.removeEventListener(event, handler.proxyListener, capture);
	              handlers.splice(k, 1);
	            } else if (!listener) {
	              el.removeEventListener(event, handler.proxyListener, capture);
	              handlers.splice(k, 1);
	            }
	          }
	        }
	      }
	    }
	    return this;
	  }
	  function trigger() {
	    var this$1 = this;
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	
	    var events = args[0].split(' ');
	    var eventData = args[1];
	    for (var i = 0; i < events.length; i += 1) {
	      var event = events[i];
	      for (var j = 0; j < this.length; j += 1) {
	        var el = this$1[j];
	        var evt = (void 0);
	        try {
	          evt = new win.CustomEvent(event, {
	            detail: eventData,
	            bubbles: true,
	            cancelable: true,
	          });
	        } catch (e) {
	          evt = doc.createEvent('Event');
	          evt.initEvent(event, true, true);
	          evt.detail = eventData;
	        }
	        // eslint-disable-next-line
	        el.dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
	        el.dispatchEvent(evt);
	        el.dom7EventData = [];
	        delete el.dom7EventData;
	      }
	    }
	    return this;
	  }
	  function transitionEnd(callback) {
	    var events = ['webkitTransitionEnd', 'transitionend'];
	    var dom = this;
	    var i;
	    function fireCallBack(e) {
	      /* jshint validthis:true */
	      if (e.target !== this) { return; }
	      callback.call(this, e);
	      for (i = 0; i < events.length; i += 1) {
	        dom.off(events[i], fireCallBack);
	      }
	    }
	    if (callback) {
	      for (i = 0; i < events.length; i += 1) {
	        dom.on(events[i], fireCallBack);
	      }
	    }
	    return this;
	  }
	  function outerWidth(includeMargins) {
	    if (this.length > 0) {
	      if (includeMargins) {
	        // eslint-disable-next-line
	        var styles = this.styles();
	        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
	      }
	      return this[0].offsetWidth;
	    }
	    return null;
	  }
	  function outerHeight(includeMargins) {
	    if (this.length > 0) {
	      if (includeMargins) {
	        // eslint-disable-next-line
	        var styles = this.styles();
	        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
	      }
	      return this[0].offsetHeight;
	    }
	    return null;
	  }
	  function offset() {
	    if (this.length > 0) {
	      var el = this[0];
	      var box = el.getBoundingClientRect();
	      var body = doc.body;
	      var clientTop = el.clientTop || body.clientTop || 0;
	      var clientLeft = el.clientLeft || body.clientLeft || 0;
	      var scrollTop = el === win ? win.scrollY : el.scrollTop;
	      var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
	      return {
	        top: (box.top + scrollTop) - clientTop,
	        left: (box.left + scrollLeft) - clientLeft,
	      };
	    }
	
	    return null;
	  }
	  function styles() {
	    if (this[0]) { return win.getComputedStyle(this[0], null); }
	    return {};
	  }
	  function css(props, value) {
	    var this$1 = this;
	
	    var i;
	    if (arguments.length === 1) {
	      if (typeof props === 'string') {
	        if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); }
	      } else {
	        for (i = 0; i < this.length; i += 1) {
	          // eslint-disable-next-line
	          for (var prop in props) {
	            this$1[i].style[prop] = props[prop];
	          }
	        }
	        return this;
	      }
	    }
	    if (arguments.length === 2 && typeof props === 'string') {
	      for (i = 0; i < this.length; i += 1) {
	        this$1[i].style[props] = value;
	      }
	      return this;
	    }
	    return this;
	  }
	  // Iterate over the collection passing elements to `callback`
	  function each(callback) {
	    var this$1 = this;
	
	    // Don't bother continuing without a callback
	    if (!callback) { return this; }
	    // Iterate over the current collection
	    for (var i = 0; i < this.length; i += 1) {
	      // If the callback returns false
	      if (callback.call(this$1[i], i, this$1[i]) === false) {
	        // End the loop early
	        return this$1;
	      }
	    }
	    // Return `this` to allow chained DOM operations
	    return this;
	  }
	  // eslint-disable-next-line
	  function html(html) {
	    var this$1 = this;
	
	    if (typeof html === 'undefined') {
	      return this[0] ? this[0].innerHTML : undefined;
	    }
	
	    for (var i = 0; i < this.length; i += 1) {
	      this$1[i].innerHTML = html;
	    }
	    return this;
	  }
	  // eslint-disable-next-line
	  function text(text) {
	    var this$1 = this;
	
	    if (typeof text === 'undefined') {
	      if (this[0]) {
	        return this[0].textContent.trim();
	      }
	      return null;
	    }
	
	    for (var i = 0; i < this.length; i += 1) {
	      this$1[i].textContent = text;
	    }
	    return this;
	  }
	  function is(selector) {
	    var el = this[0];
	    var compareWith;
	    var i;
	    if (!el || typeof selector === 'undefined') { return false; }
	    if (typeof selector === 'string') {
	      if (el.matches) { return el.matches(selector); }
	      else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
	      else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }
	
	      compareWith = $(selector);
	      for (i = 0; i < compareWith.length; i += 1) {
	        if (compareWith[i] === el) { return true; }
	      }
	      return false;
	    } else if (selector === doc) { return el === doc; }
	    else if (selector === win) { return el === win; }
	
	    if (selector.nodeType || selector instanceof Dom7) {
	      compareWith = selector.nodeType ? [selector] : selector;
	      for (i = 0; i < compareWith.length; i += 1) {
	        if (compareWith[i] === el) { return true; }
	      }
	      return false;
	    }
	    return false;
	  }
	  function index() {
	    var child = this[0];
	    var i;
	    if (child) {
	      i = 0;
	      // eslint-disable-next-line
	      while ((child = child.previousSibling) !== null) {
	        if (child.nodeType === 1) { i += 1; }
	      }
	      return i;
	    }
	    return undefined;
	  }
	  // eslint-disable-next-line
	  function eq(index) {
	    if (typeof index === 'undefined') { return this; }
	    var length = this.length;
	    var returnIndex;
	    if (index > length - 1) {
	      return new Dom7([]);
	    }
	    if (index < 0) {
	      returnIndex = length + index;
	      if (returnIndex < 0) { return new Dom7([]); }
	      return new Dom7([this[returnIndex]]);
	    }
	    return new Dom7([this[index]]);
	  }
	  function append() {
	    var this$1 = this;
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	
	    var newChild;
	
	    for (var k = 0; k < args.length; k += 1) {
	      newChild = args[k];
	      for (var i = 0; i < this.length; i += 1) {
	        if (typeof newChild === 'string') {
	          var tempDiv = doc.createElement('div');
	          tempDiv.innerHTML = newChild;
	          while (tempDiv.firstChild) {
	            this$1[i].appendChild(tempDiv.firstChild);
	          }
	        } else if (newChild instanceof Dom7) {
	          for (var j = 0; j < newChild.length; j += 1) {
	            this$1[i].appendChild(newChild[j]);
	          }
	        } else {
	          this$1[i].appendChild(newChild);
	        }
	      }
	    }
	
	    return this;
	  }
	  function prepend(newChild) {
	    var this$1 = this;
	
	    var i;
	    var j;
	    for (i = 0; i < this.length; i += 1) {
	      if (typeof newChild === 'string') {
	        var tempDiv = doc.createElement('div');
	        tempDiv.innerHTML = newChild;
	        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
	          this$1[i].insertBefore(tempDiv.childNodes[j], this$1[i].childNodes[0]);
	        }
	      } else if (newChild instanceof Dom7) {
	        for (j = 0; j < newChild.length; j += 1) {
	          this$1[i].insertBefore(newChild[j], this$1[i].childNodes[0]);
	        }
	      } else {
	        this$1[i].insertBefore(newChild, this$1[i].childNodes[0]);
	      }
	    }
	    return this;
	  }
	  function next(selector) {
	    if (this.length > 0) {
	      if (selector) {
	        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
	          return new Dom7([this[0].nextElementSibling]);
	        }
	        return new Dom7([]);
	      }
	
	      if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
	      return new Dom7([]);
	    }
	    return new Dom7([]);
	  }
	  function nextAll(selector) {
	    var nextEls = [];
	    var el = this[0];
	    if (!el) { return new Dom7([]); }
	    while (el.nextElementSibling) {
	      var next = el.nextElementSibling; // eslint-disable-line
	      if (selector) {
	        if ($(next).is(selector)) { nextEls.push(next); }
	      } else { nextEls.push(next); }
	      el = next;
	    }
	    return new Dom7(nextEls);
	  }
	  function prev(selector) {
	    if (this.length > 0) {
	      var el = this[0];
	      if (selector) {
	        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
	          return new Dom7([el.previousElementSibling]);
	        }
	        return new Dom7([]);
	      }
	
	      if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
	      return new Dom7([]);
	    }
	    return new Dom7([]);
	  }
	  function prevAll(selector) {
	    var prevEls = [];
	    var el = this[0];
	    if (!el) { return new Dom7([]); }
	    while (el.previousElementSibling) {
	      var prev = el.previousElementSibling; // eslint-disable-line
	      if (selector) {
	        if ($(prev).is(selector)) { prevEls.push(prev); }
	      } else { prevEls.push(prev); }
	      el = prev;
	    }
	    return new Dom7(prevEls);
	  }
	  function parent(selector) {
	    var this$1 = this;
	
	    var parents = []; // eslint-disable-line
	    for (var i = 0; i < this.length; i += 1) {
	      if (this$1[i].parentNode !== null) {
	        if (selector) {
	          if ($(this$1[i].parentNode).is(selector)) { parents.push(this$1[i].parentNode); }
	        } else {
	          parents.push(this$1[i].parentNode);
	        }
	      }
	    }
	    return $(unique(parents));
	  }
	  function parents(selector) {
	    var this$1 = this;
	
	    var parents = []; // eslint-disable-line
	    for (var i = 0; i < this.length; i += 1) {
	      var parent = this$1[i].parentNode; // eslint-disable-line
	      while (parent) {
	        if (selector) {
	          if ($(parent).is(selector)) { parents.push(parent); }
	        } else {
	          parents.push(parent);
	        }
	        parent = parent.parentNode;
	      }
	    }
	    return $(unique(parents));
	  }
	  function closest(selector) {
	    var closest = this; // eslint-disable-line
	    if (typeof selector === 'undefined') {
	      return new Dom7([]);
	    }
	    if (!closest.is(selector)) {
	      closest = closest.parents(selector).eq(0);
	    }
	    return closest;
	  }
	  function find(selector) {
	    var this$1 = this;
	
	    var foundElements = [];
	    for (var i = 0; i < this.length; i += 1) {
	      var found = this$1[i].querySelectorAll(selector);
	      for (var j = 0; j < found.length; j += 1) {
	        foundElements.push(found[j]);
	      }
	    }
	    return new Dom7(foundElements);
	  }
	  function children(selector) {
	    var this$1 = this;
	
	    var children = []; // eslint-disable-line
	    for (var i = 0; i < this.length; i += 1) {
	      var childNodes = this$1[i].childNodes;
	
	      for (var j = 0; j < childNodes.length; j += 1) {
	        if (!selector) {
	          if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
	        } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
	          children.push(childNodes[j]);
	        }
	      }
	    }
	    return new Dom7(unique(children));
	  }
	  function remove() {
	    var this$1 = this;
	
	    for (var i = 0; i < this.length; i += 1) {
	      if (this$1[i].parentNode) { this$1[i].parentNode.removeChild(this$1[i]); }
	    }
	    return this;
	  }
	  function add() {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];
	
	    var dom = this;
	    var i;
	    var j;
	    for (i = 0; i < args.length; i += 1) {
	      var toAdd = $(args[i]);
	      for (j = 0; j < toAdd.length; j += 1) {
	        dom[dom.length] = toAdd[j];
	        dom.length += 1;
	      }
	    }
	    return dom;
	  }
	
	  var Methods = {
	    addClass: addClass,
	    removeClass: removeClass,
	    hasClass: hasClass,
	    toggleClass: toggleClass,
	    attr: attr,
	    removeAttr: removeAttr,
	    data: data,
	    transform: transform,
	    transition: transition,
	    on: on,
	    off: off,
	    trigger: trigger,
	    transitionEnd: transitionEnd,
	    outerWidth: outerWidth,
	    outerHeight: outerHeight,
	    offset: offset,
	    css: css,
	    each: each,
	    html: html,
	    text: text,
	    is: is,
	    index: index,
	    eq: eq,
	    append: append,
	    prepend: prepend,
	    next: next,
	    nextAll: nextAll,
	    prev: prev,
	    prevAll: prevAll,
	    parent: parent,
	    parents: parents,
	    closest: closest,
	    find: find,
	    children: children,
	    remove: remove,
	    add: add,
	    styles: styles,
	  };
	
	  Object.keys(Methods).forEach(function (methodName) {
	    $.fn[methodName] = Methods[methodName];
	  });
	
	  var Utils = {
	    deleteProps: function deleteProps(obj) {
	      var object = obj;
	      Object.keys(object).forEach(function (key) {
	        try {
	          object[key] = null;
	        } catch (e) {
	          // no getter for object
	        }
	        try {
	          delete object[key];
	        } catch (e) {
	          // something got wrong
	        }
	      });
	    },
	    nextTick: function nextTick(callback, delay) {
	      if ( delay === void 0 ) delay = 0;
	
	      return setTimeout(callback, delay);
	    },
	    now: function now() {
	      return Date.now();
	    },
	    getTranslate: function getTranslate(el, axis) {
	      if ( axis === void 0 ) axis = 'x';
	
	      var matrix;
	      var curTransform;
	      var transformMatrix;
	
	      var curStyle = win.getComputedStyle(el, null);
	
	      if (win.WebKitCSSMatrix) {
	        curTransform = curStyle.transform || curStyle.webkitTransform;
	        if (curTransform.split(',').length > 6) {
	          curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
	        }
	        // Some old versions of Webkit choke when 'none' is passed; pass
	        // empty string instead in this case
	        transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	      } else {
	        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	        matrix = transformMatrix.toString().split(',');
	      }
	
	      if (axis === 'x') {
	        // Latest Chrome and webkits Fix
	        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
	        // Crazy IE10 Matrix
	        else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
	        // Normal Browsers
	        else { curTransform = parseFloat(matrix[4]); }
	      }
	      if (axis === 'y') {
	        // Latest Chrome and webkits Fix
	        if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
	        // Crazy IE10 Matrix
	        else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
	        // Normal Browsers
	        else { curTransform = parseFloat(matrix[5]); }
	      }
	      return curTransform || 0;
	    },
	    parseUrlQuery: function parseUrlQuery(url) {
	      var query = {};
	      var urlToParse = url || win.location.href;
	      var i;
	      var params;
	      var param;
	      var length;
	      if (typeof urlToParse === 'string' && urlToParse.length) {
	        urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
	        params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
	        length = params.length;
	
	        for (i = 0; i < length; i += 1) {
	          param = params[i].replace(/#\S+/g, '').split('=');
	          query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
	        }
	      }
	      return query;
	    },
	    isObject: function isObject(o) {
	      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
	    },
	    extend: function extend() {
	      var args = [], len$1 = arguments.length;
	      while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];
	
	      var to = Object(args[0]);
	      for (var i = 1; i < args.length; i += 1) {
	        var nextSource = args[i];
	        if (nextSource !== undefined && nextSource !== null) {
	          var keysArray = Object.keys(Object(nextSource));
	          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	              if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
	                Utils.extend(to[nextKey], nextSource[nextKey]);
	              } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
	                to[nextKey] = {};
	                Utils.extend(to[nextKey], nextSource[nextKey]);
	              } else {
	                to[nextKey] = nextSource[nextKey];
	              }
	            }
	          }
	        }
	      }
	      return to;
	    },
	  };
	
	  var Support = (function Support() {
	    var testDiv = doc.createElement('div');
	    return {
	      touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
	        return !!(('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
	      }()),
	
	      pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent),
	      prefixedPointerEvents: !!win.navigator.msPointerEnabled,
	
	      transition: (function checkTransition() {
	        var style = testDiv.style;
	        return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
	      }()),
	      transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
	        var style = testDiv.style;
	        return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
	      }()),
	
	      flexbox: (function checkFlexbox() {
	        var style = testDiv.style;
	        var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
	        for (var i = 0; i < styles.length; i += 1) {
	          if (styles[i] in style) { return true; }
	        }
	        return false;
	      }()),
	
	      observer: (function checkObserver() {
	        return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
	      }()),
	
	      passiveListener: (function checkPassiveListener() {
	        var supportsPassive = false;
	        try {
	          var opts = Object.defineProperty({}, 'passive', {
	            // eslint-disable-next-line
	            get: function get() {
	              supportsPassive = true;
	            },
	          });
	          win.addEventListener('testPassiveListener', null, opts);
	        } catch (e) {
	          // No support
	        }
	        return supportsPassive;
	      }()),
	
	      gestures: (function checkGestures() {
	        return 'ongesturestart' in win;
	      }()),
	    };
	  }());
	
	  var SwiperClass = function SwiperClass(params) {
	    if ( params === void 0 ) params = {};
	
	    var self = this;
	    self.params = params;
	
	    // Events
	    self.eventsListeners = {};
	
	    if (self.params && self.params.on) {
	      Object.keys(self.params.on).forEach(function (eventName) {
	        self.on(eventName, self.params.on[eventName]);
	      });
	    }
	  };
	
	  var staticAccessors = { components: { configurable: true } };
	
	  SwiperClass.prototype.on = function on (events, handler, priority) {
	    var self = this;
	    if (typeof handler !== 'function') { return self; }
	    var method = priority ? 'unshift' : 'push';
	    events.split(' ').forEach(function (event) {
	      if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
	      self.eventsListeners[event][method](handler);
	    });
	    return self;
	  };
	
	  SwiperClass.prototype.once = function once (events, handler, priority) {
	    var self = this;
	    if (typeof handler !== 'function') { return self; }
	    function onceHandler() {
	        var args = [], len = arguments.length;
	        while ( len-- ) args[ len ] = arguments[ len ];
	
	      handler.apply(self, args);
	      self.off(events, onceHandler);
	    }
	    return self.on(events, onceHandler, priority);
	  };
	
	  SwiperClass.prototype.off = function off (events, handler) {
	    var self = this;
	    if (!self.eventsListeners) { return self; }
	    events.split(' ').forEach(function (event) {
	      if (typeof handler === 'undefined') {
	        self.eventsListeners[event] = [];
	      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
	        self.eventsListeners[event].forEach(function (eventHandler, index) {
	          if (eventHandler === handler) {
	            self.eventsListeners[event].splice(index, 1);
	          }
	        });
	      }
	    });
	    return self;
	  };
	
	  SwiperClass.prototype.emit = function emit () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	
	    var self = this;
	    if (!self.eventsListeners) { return self; }
	    var events;
	    var data;
	    var context;
	    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
	      events = args[0];
	      data = args.slice(1, args.length);
	      context = self;
	    } else {
	      events = args[0].events;
	      data = args[0].data;
	      context = args[0].context || self;
	    }
	    var eventsArray = Array.isArray(events) ? events : events.split(' ');
	    eventsArray.forEach(function (event) {
	      if (self.eventsListeners && self.eventsListeners[event]) {
	        var handlers = [];
	        self.eventsListeners[event].forEach(function (eventHandler) {
	          handlers.push(eventHandler);
	        });
	        handlers.forEach(function (eventHandler) {
	          eventHandler.apply(context, data);
	        });
	      }
	    });
	    return self;
	  };
	
	  SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
	    var instance = this;
	    if (!instance.modules) { return; }
	    Object.keys(instance.modules).forEach(function (moduleName) {
	      var module = instance.modules[moduleName];
	      // Extend params
	      if (module.params) {
	        Utils.extend(instanceParams, module.params);
	      }
	    });
	  };
	
	  SwiperClass.prototype.useModules = function useModules (modulesParams) {
	      if ( modulesParams === void 0 ) modulesParams = {};
	
	    var instance = this;
	    if (!instance.modules) { return; }
	    Object.keys(instance.modules).forEach(function (moduleName) {
	      var module = instance.modules[moduleName];
	      var moduleParams = modulesParams[moduleName] || {};
	      // Extend instance methods and props
	      if (module.instance) {
	        Object.keys(module.instance).forEach(function (modulePropName) {
	          var moduleProp = module.instance[modulePropName];
	          if (typeof moduleProp === 'function') {
	            instance[modulePropName] = moduleProp.bind(instance);
	          } else {
	            instance[modulePropName] = moduleProp;
	          }
	        });
	      }
	      // Add event listeners
	      if (module.on && instance.on) {
	        Object.keys(module.on).forEach(function (moduleEventName) {
	          instance.on(moduleEventName, module.on[moduleEventName]);
	        });
	      }
	
	      // Module create callback
	      if (module.create) {
	        module.create.bind(instance)(moduleParams);
	      }
	    });
	  };
	
	  staticAccessors.components.set = function (components) {
	    var Class = this;
	    if (!Class.use) { return; }
	    Class.use(components);
	  };
	
	  SwiperClass.installModule = function installModule (module) {
	      var params = [], len = arguments.length - 1;
	      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];
	
	    var Class = this;
	    if (!Class.prototype.modules) { Class.prototype.modules = {}; }
	    var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
	    Class.prototype.modules[name] = module;
	    // Prototype
	    if (module.proto) {
	      Object.keys(module.proto).forEach(function (key) {
	        Class.prototype[key] = module.proto[key];
	      });
	    }
	    // Class
	    if (module.static) {
	      Object.keys(module.static).forEach(function (key) {
	        Class[key] = module.static[key];
	      });
	    }
	    // Callback
	    if (module.install) {
	      module.install.apply(Class, params);
	    }
	    return Class;
	  };
	
	  SwiperClass.use = function use (module) {
	      var params = [], len = arguments.length - 1;
	      while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];
	
	    var Class = this;
	    if (Array.isArray(module)) {
	      module.forEach(function (m) { return Class.installModule(m); });
	      return Class;
	    }
	    return Class.installModule.apply(Class, [ module ].concat( params ));
	  };
	
	  Object.defineProperties( SwiperClass, staticAccessors );
	
	  function updateSize () {
	    var swiper = this;
	    var width;
	    var height;
	    var $el = swiper.$el;
	    if (typeof swiper.params.width !== 'undefined') {
	      width = swiper.params.width;
	    } else {
	      width = $el[0].clientWidth;
	    }
	    if (typeof swiper.params.height !== 'undefined') {
	      height = swiper.params.height;
	    } else {
	      height = $el[0].clientHeight;
	    }
	    if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
	      return;
	    }
	
	    // Subtract paddings
	    width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
	    height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
	
	    Utils.extend(swiper, {
	      width: width,
	      height: height,
	      size: swiper.isHorizontal() ? width : height,
	    });
	  }
	
	  function updateSlides () {
	    var swiper = this;
	    var params = swiper.params;
	
	    var $wrapperEl = swiper.$wrapperEl;
	    var swiperSize = swiper.size;
	    var rtl = swiper.rtlTranslate;
	    var wrongRTL = swiper.wrongRTL;
	    var isVirtual = swiper.virtual && params.virtual.enabled;
	    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
	    var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
	    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
	    var snapGrid = [];
	    var slidesGrid = [];
	    var slidesSizesGrid = [];
	
	    var offsetBefore = params.slidesOffsetBefore;
	    if (typeof offsetBefore === 'function') {
	      offsetBefore = params.slidesOffsetBefore.call(swiper);
	    }
	
	    var offsetAfter = params.slidesOffsetAfter;
	    if (typeof offsetAfter === 'function') {
	      offsetAfter = params.slidesOffsetAfter.call(swiper);
	    }
	
	    var previousSnapGridLength = swiper.snapGrid.length;
	    var previousSlidesGridLength = swiper.snapGrid.length;
	
	    var spaceBetween = params.spaceBetween;
	    var slidePosition = -offsetBefore;
	    var prevSlideSize = 0;
	    var index = 0;
	    if (typeof swiperSize === 'undefined') {
	      return;
	    }
	    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	      spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
	    }
	
	    swiper.virtualSize = -spaceBetween;
	
	    // reset margins
	    if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
	    else { slides.css({ marginRight: '', marginBottom: '' }); }
	
	    var slidesNumberEvenToRows;
	    if (params.slidesPerColumn > 1) {
	      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
	        slidesNumberEvenToRows = slidesLength;
	      } else {
	        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
	      }
	      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
	        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
	      }
	    }
	
	    // Calc slides
	    var slideSize;
	    var slidesPerColumn = params.slidesPerColumn;
	    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	    var numFullColumns = slidesPerRow - ((params.slidesPerColumn * slidesPerRow) - slidesLength);
	    for (var i = 0; i < slidesLength; i += 1) {
	      slideSize = 0;
	      var slide = slides.eq(i);
	      if (params.slidesPerColumn > 1) {
	        // Set slides order
	        var newSlideOrderIndex = (void 0);
	        var column = (void 0);
	        var row = (void 0);
	        if (params.slidesPerColumnFill === 'column') {
	          column = Math.floor(i / slidesPerColumn);
	          row = i - (column * slidesPerColumn);
	          if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
	            row += 1;
	            if (row >= slidesPerColumn) {
	              row = 0;
	              column += 1;
	            }
	          }
	          newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
	          slide
	            .css({
	              '-webkit-box-ordinal-group': newSlideOrderIndex,
	              '-moz-box-ordinal-group': newSlideOrderIndex,
	              '-ms-flex-order': newSlideOrderIndex,
	              '-webkit-order': newSlideOrderIndex,
	              order: newSlideOrderIndex,
	            });
	        } else {
	          row = Math.floor(i / slidesPerRow);
	          column = i - (row * slidesPerRow);
	        }
	        slide
	          .css(
	            ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
	            (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
	          )
	          .attr('data-swiper-column', column)
	          .attr('data-swiper-row', row);
	      }
	      if (slide.css('display') === 'none') { continue; } // eslint-disable-line
	
	      if (params.slidesPerView === 'auto') {
	        var slideStyles = win.getComputedStyle(slide[0], null);
	        var currentTransform = slide[0].style.transform;
	        var currentWebKitTransform = slide[0].style.webkitTransform;
	        if (currentTransform) {
	          slide[0].style.transform = 'none';
	        }
	        if (currentWebKitTransform) {
	          slide[0].style.webkitTransform = 'none';
	        }
	        if (params.roundLengths) {
	          slideSize = swiper.isHorizontal()
	            ? slide.outerWidth(true)
	            : slide.outerHeight(true);
	        } else {
	          // eslint-disable-next-line
	          if (swiper.isHorizontal()) {
	            slideSize = slide[0].getBoundingClientRect().width
	              + parseFloat(slideStyles.getPropertyValue('margin-left'))
	              + parseFloat(slideStyles.getPropertyValue('margin-right'));
	          } else {
	            slideSize = slide[0].getBoundingClientRect().height
	              + parseFloat(slideStyles.getPropertyValue('margin-top'))
	              + parseFloat(slideStyles.getPropertyValue('margin-bottom'));
	          }
	        }
	        if (currentTransform) {
	          slide[0].style.transform = currentTransform;
	        }
	        if (currentWebKitTransform) {
	          slide[0].style.webkitTransform = currentWebKitTransform;
	        }
	        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
	      } else {
	        slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
	        if (params.roundLengths) { slideSize = Math.floor(slideSize); }
	
	        if (slides[i]) {
	          if (swiper.isHorizontal()) {
	            slides[i].style.width = slideSize + "px";
	          } else {
	            slides[i].style.height = slideSize + "px";
	          }
	        }
	      }
	      if (slides[i]) {
	        slides[i].swiperSlideSize = slideSize;
	      }
	      slidesSizesGrid.push(slideSize);
	
	
	      if (params.centeredSlides) {
	        slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
	        if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
	        if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
	        if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
	        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
	        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
	        slidesGrid.push(slidePosition);
	      } else {
	        if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
	        if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
	        slidesGrid.push(slidePosition);
	        slidePosition = slidePosition + slideSize + spaceBetween;
	      }
	
	      swiper.virtualSize += slideSize + spaceBetween;
	
	      prevSlideSize = slideSize;
	
	      index += 1;
	    }
	    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
	    var newSlidesGrid;
	
	    if (
	      rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
	      $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
	    }
	    if (!Support.flexbox || params.setWrapperSize) {
	      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
	      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
	    }
	
	    if (params.slidesPerColumn > 1) {
	      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
	      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
	      if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
	      else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
	      if (params.centeredSlides) {
	        newSlidesGrid = [];
	        for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
	          var slidesGridItem = snapGrid[i$1];
	          if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
	          if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
	        }
	        snapGrid = newSlidesGrid;
	      }
	    }
	
	    // Remove last grid elements depending on width
	    if (!params.centeredSlides) {
	      newSlidesGrid = [];
	      for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
	        var slidesGridItem$1 = snapGrid[i$2];
	        if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
	        if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
	          newSlidesGrid.push(slidesGridItem$1);
	        }
	      }
	      snapGrid = newSlidesGrid;
	      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
	        snapGrid.push(swiper.virtualSize - swiperSize);
	      }
	    }
	    if (snapGrid.length === 0) { snapGrid = [0]; }
	
	    if (params.spaceBetween !== 0) {
	      if (swiper.isHorizontal()) {
	        if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
	        else { slides.css({ marginRight: (spaceBetween + "px") }); }
	      } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
	    }
	
	    if (params.centerInsufficientSlides) {
	      var allSlidesSize = 0;
	      slidesSizesGrid.forEach(function (slideSizeValue) {
	        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
	      });
	      allSlidesSize -= params.spaceBetween;
	      if (allSlidesSize < swiperSize) {
	        var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
	        snapGrid.forEach(function (snap, snapIndex) {
	          snapGrid[snapIndex] = snap - allSlidesOffset;
	        });
	        slidesGrid.forEach(function (snap, snapIndex) {
	          slidesGrid[snapIndex] = snap + allSlidesOffset;
	        });
	      }
	    }
	
	    Utils.extend(swiper, {
	      slides: slides,
	      snapGrid: snapGrid,
	      slidesGrid: slidesGrid,
	      slidesSizesGrid: slidesSizesGrid,
	    });
	
	    if (slidesLength !== previousSlidesLength) {
	      swiper.emit('slidesLengthChange');
	    }
	    if (snapGrid.length !== previousSnapGridLength) {
	      if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
	      swiper.emit('snapGridLengthChange');
	    }
	    if (slidesGrid.length !== previousSlidesGridLength) {
	      swiper.emit('slidesGridLengthChange');
	    }
	
	    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
	      swiper.updateSlidesOffset();
	    }
	  }
	
	  function updateAutoHeight (speed) {
	    var swiper = this;
	    var activeSlides = [];
	    var newHeight = 0;
	    var i;
	    if (typeof speed === 'number') {
	      swiper.setTransition(speed);
	    } else if (speed === true) {
	      swiper.setTransition(swiper.params.speed);
	    }
	    // Find slides currently in view
	    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
	      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
	        var index = swiper.activeIndex + i;
	        if (index > swiper.slides.length) { break; }
	        activeSlides.push(swiper.slides.eq(index)[0]);
	      }
	    } else {
	      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
	    }
	
	    // Find new height from highest slide in view
	    for (i = 0; i < activeSlides.length; i += 1) {
	      if (typeof activeSlides[i] !== 'undefined') {
	        var height = activeSlides[i].offsetHeight;
	        newHeight = height > newHeight ? height : newHeight;
	      }
	    }
	
	    // Update Height
	    if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
	  }
	
	  function updateSlidesOffset () {
	    var swiper = this;
	    var slides = swiper.slides;
	    for (var i = 0; i < slides.length; i += 1) {
	      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
	    }
	  }
	
	  function updateSlidesProgress (translate) {
	    if ( translate === void 0 ) translate = (this && this.translate) || 0;
	
	    var swiper = this;
	    var params = swiper.params;
	
	    var slides = swiper.slides;
	    var rtl = swiper.rtlTranslate;
	
	    if (slides.length === 0) { return; }
	    if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }
	
	    var offsetCenter = -translate;
	    if (rtl) { offsetCenter = translate; }
	
	    // Visible Slides
	    slides.removeClass(params.slideVisibleClass);
	
	    swiper.visibleSlidesIndexes = [];
	    swiper.visibleSlides = [];
	
	    for (var i = 0; i < slides.length; i += 1) {
	      var slide = slides[i];
	      var slideProgress = (
	        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
	      ) / (slide.swiperSlideSize + params.spaceBetween);
	      if (params.watchSlidesVisibility) {
	        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
	        var isVisible = (slideBefore >= 0 && slideBefore < swiper.size)
	                  || (slideAfter > 0 && slideAfter <= swiper.size)
	                  || (slideBefore <= 0 && slideAfter >= swiper.size);
	        if (isVisible) {
	          swiper.visibleSlides.push(slide);
	          swiper.visibleSlidesIndexes.push(i);
	          slides.eq(i).addClass(params.slideVisibleClass);
	        }
	      }
	      slide.progress = rtl ? -slideProgress : slideProgress;
	    }
	    swiper.visibleSlides = $(swiper.visibleSlides);
	  }
	
	  function updateProgress (translate) {
	    if ( translate === void 0 ) translate = (this && this.translate) || 0;
	
	    var swiper = this;
	    var params = swiper.params;
	
	    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	    var progress = swiper.progress;
	    var isBeginning = swiper.isBeginning;
	    var isEnd = swiper.isEnd;
	    var wasBeginning = isBeginning;
	    var wasEnd = isEnd;
	    if (translatesDiff === 0) {
	      progress = 0;
	      isBeginning = true;
	      isEnd = true;
	    } else {
	      progress = (translate - swiper.minTranslate()) / (translatesDiff);
	      isBeginning = progress <= 0;
	      isEnd = progress >= 1;
	    }
	    Utils.extend(swiper, {
	      progress: progress,
	      isBeginning: isBeginning,
	      isEnd: isEnd,
	    });
	
	    if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }
	
	    if (isBeginning && !wasBeginning) {
	      swiper.emit('reachBeginning toEdge');
	    }
	    if (isEnd && !wasEnd) {
	      swiper.emit('reachEnd toEdge');
	    }
	    if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
	      swiper.emit('fromEdge');
	    }
	
	    swiper.emit('progress', progress);
	  }
	
	  function updateSlidesClasses () {
	    var swiper = this;
	
	    var slides = swiper.slides;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    var activeIndex = swiper.activeIndex;
	    var realIndex = swiper.realIndex;
	    var isVirtual = swiper.virtual && params.virtual.enabled;
	
	    slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));
	
	    var activeSlide;
	    if (isVirtual) {
	      activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
	    } else {
	      activeSlide = slides.eq(activeIndex);
	    }
	
	    // Active classes
	    activeSlide.addClass(params.slideActiveClass);
	
	    if (params.loop) {
	      // Duplicate to all looped slides
	      if (activeSlide.hasClass(params.slideDuplicateClass)) {
	        $wrapperEl
	          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
	          .addClass(params.slideDuplicateActiveClass);
	      } else {
	        $wrapperEl
	          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
	          .addClass(params.slideDuplicateActiveClass);
	      }
	    }
	    // Next Slide
	    var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
	    if (params.loop && nextSlide.length === 0) {
	      nextSlide = slides.eq(0);
	      nextSlide.addClass(params.slideNextClass);
	    }
	    // Prev Slide
	    var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
	    if (params.loop && prevSlide.length === 0) {
	      prevSlide = slides.eq(-1);
	      prevSlide.addClass(params.slidePrevClass);
	    }
	    if (params.loop) {
	      // Duplicate to all looped slides
	      if (nextSlide.hasClass(params.slideDuplicateClass)) {
	        $wrapperEl
	          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
	          .addClass(params.slideDuplicateNextClass);
	      } else {
	        $wrapperEl
	          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
	          .addClass(params.slideDuplicateNextClass);
	      }
	      if (prevSlide.hasClass(params.slideDuplicateClass)) {
	        $wrapperEl
	          .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
	          .addClass(params.slideDuplicatePrevClass);
	      } else {
	        $wrapperEl
	          .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
	          .addClass(params.slideDuplicatePrevClass);
	      }
	    }
	  }
	
	  function updateActiveIndex (newActiveIndex) {
	    var swiper = this;
	    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	    var slidesGrid = swiper.slidesGrid;
	    var snapGrid = swiper.snapGrid;
	    var params = swiper.params;
	    var previousIndex = swiper.activeIndex;
	    var previousRealIndex = swiper.realIndex;
	    var previousSnapIndex = swiper.snapIndex;
	    var activeIndex = newActiveIndex;
	    var snapIndex;
	    if (typeof activeIndex === 'undefined') {
	      for (var i = 0; i < slidesGrid.length; i += 1) {
	        if (typeof slidesGrid[i + 1] !== 'undefined') {
	          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
	            activeIndex = i;
	          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
	            activeIndex = i + 1;
	          }
	        } else if (translate >= slidesGrid[i]) {
	          activeIndex = i;
	        }
	      }
	      // Normalize slideIndex
	      if (params.normalizeSlideIndex) {
	        if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
	      }
	    }
	    if (snapGrid.indexOf(translate) >= 0) {
	      snapIndex = snapGrid.indexOf(translate);
	    } else {
	      snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
	    }
	    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
	    if (activeIndex === previousIndex) {
	      if (snapIndex !== previousSnapIndex) {
	        swiper.snapIndex = snapIndex;
	        swiper.emit('snapIndexChange');
	      }
	      return;
	    }
	
	    // Get real index
	    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
	
	    Utils.extend(swiper, {
	      snapIndex: snapIndex,
	      realIndex: realIndex,
	      previousIndex: previousIndex,
	      activeIndex: activeIndex,
	    });
	    swiper.emit('activeIndexChange');
	    swiper.emit('snapIndexChange');
	    if (previousRealIndex !== realIndex) {
	      swiper.emit('realIndexChange');
	    }
	    swiper.emit('slideChange');
	  }
	
	  function updateClickedSlide (e) {
	    var swiper = this;
	    var params = swiper.params;
	    var slide = $(e.target).closest(("." + (params.slideClass)))[0];
	    var slideFound = false;
	    if (slide) {
	      for (var i = 0; i < swiper.slides.length; i += 1) {
	        if (swiper.slides[i] === slide) { slideFound = true; }
	      }
	    }
	
	    if (slide && slideFound) {
	      swiper.clickedSlide = slide;
	      if (swiper.virtual && swiper.params.virtual.enabled) {
	        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
	      } else {
	        swiper.clickedIndex = $(slide).index();
	      }
	    } else {
	      swiper.clickedSlide = undefined;
	      swiper.clickedIndex = undefined;
	      return;
	    }
	    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
	      swiper.slideToClickedSlide();
	    }
	  }
	
	  var update = {
	    updateSize: updateSize,
	    updateSlides: updateSlides,
	    updateAutoHeight: updateAutoHeight,
	    updateSlidesOffset: updateSlidesOffset,
	    updateSlidesProgress: updateSlidesProgress,
	    updateProgress: updateProgress,
	    updateSlidesClasses: updateSlidesClasses,
	    updateActiveIndex: updateActiveIndex,
	    updateClickedSlide: updateClickedSlide,
	  };
	
	  function getTranslate (axis) {
	    if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';
	
	    var swiper = this;
	
	    var params = swiper.params;
	    var rtl = swiper.rtlTranslate;
	    var translate = swiper.translate;
	    var $wrapperEl = swiper.$wrapperEl;
	
	    if (params.virtualTranslate) {
	      return rtl ? -translate : translate;
	    }
	
	    var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
	    if (rtl) { currentTranslate = -currentTranslate; }
	
	    return currentTranslate || 0;
	  }
	
	  function setTranslate (translate, byController) {
	    var swiper = this;
	    var rtl = swiper.rtlTranslate;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    var progress = swiper.progress;
	    var x = 0;
	    var y = 0;
	    var z = 0;
	
	    if (swiper.isHorizontal()) {
	      x = rtl ? -translate : translate;
	    } else {
	      y = translate;
	    }
	
	    if (params.roundLengths) {
	      x = Math.floor(x);
	      y = Math.floor(y);
	    }
	
	    if (!params.virtualTranslate) {
	      if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
	      else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
	    }
	    swiper.previousTranslate = swiper.translate;
	    swiper.translate = swiper.isHorizontal() ? x : y;
	
	    // Check if we need to update progress
	    var newProgress;
	    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	    if (translatesDiff === 0) {
	      newProgress = 0;
	    } else {
	      newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
	    }
	    if (newProgress !== progress) {
	      swiper.updateProgress(translate);
	    }
	
	    swiper.emit('setTranslate', swiper.translate, byController);
	  }
	
	  function minTranslate () {
	    return (-this.snapGrid[0]);
	  }
	
	  function maxTranslate () {
	    return (-this.snapGrid[this.snapGrid.length - 1]);
	  }
	
	  var translate = {
	    getTranslate: getTranslate,
	    setTranslate: setTranslate,
	    minTranslate: minTranslate,
	    maxTranslate: maxTranslate,
	  };
	
	  function setTransition (duration, byController) {
	    var swiper = this;
	
	    swiper.$wrapperEl.transition(duration);
	
	    swiper.emit('setTransition', duration, byController);
	  }
	
	  function transitionStart (runCallbacks, direction) {
	    if ( runCallbacks === void 0 ) runCallbacks = true;
	
	    var swiper = this;
	    var activeIndex = swiper.activeIndex;
	    var params = swiper.params;
	    var previousIndex = swiper.previousIndex;
	    if (params.autoHeight) {
	      swiper.updateAutoHeight();
	    }
	
	    var dir = direction;
	    if (!dir) {
	      if (activeIndex > previousIndex) { dir = 'next'; }
	      else if (activeIndex < previousIndex) { dir = 'prev'; }
	      else { dir = 'reset'; }
	    }
	
	    swiper.emit('transitionStart');
	
	    if (runCallbacks && activeIndex !== previousIndex) {
	      if (dir === 'reset') {
	        swiper.emit('slideResetTransitionStart');
	        return;
	      }
	      swiper.emit('slideChangeTransitionStart');
	      if (dir === 'next') {
	        swiper.emit('slideNextTransitionStart');
	      } else {
	        swiper.emit('slidePrevTransitionStart');
	      }
	    }
	  }
	
	  function transitionEnd$1 (runCallbacks, direction) {
	    if ( runCallbacks === void 0 ) runCallbacks = true;
	
	    var swiper = this;
	    var activeIndex = swiper.activeIndex;
	    var previousIndex = swiper.previousIndex;
	    swiper.animating = false;
	    swiper.setTransition(0);
	
	    var dir = direction;
	    if (!dir) {
	      if (activeIndex > previousIndex) { dir = 'next'; }
	      else if (activeIndex < previousIndex) { dir = 'prev'; }
	      else { dir = 'reset'; }
	    }
	
	    swiper.emit('transitionEnd');
	
	    if (runCallbacks && activeIndex !== previousIndex) {
	      if (dir === 'reset') {
	        swiper.emit('slideResetTransitionEnd');
	        return;
	      }
	      swiper.emit('slideChangeTransitionEnd');
	      if (dir === 'next') {
	        swiper.emit('slideNextTransitionEnd');
	      } else {
	        swiper.emit('slidePrevTransitionEnd');
	      }
	    }
	  }
	
	  var transition$1 = {
	    setTransition: setTransition,
	    transitionStart: transitionStart,
	    transitionEnd: transitionEnd$1,
	  };
	
	  function slideTo (index, speed, runCallbacks, internal) {
	    if ( index === void 0 ) index = 0;
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;
	
	    var swiper = this;
	    var slideIndex = index;
	    if (slideIndex < 0) { slideIndex = 0; }
	
	    var params = swiper.params;
	    var snapGrid = swiper.snapGrid;
	    var slidesGrid = swiper.slidesGrid;
	    var previousIndex = swiper.previousIndex;
	    var activeIndex = swiper.activeIndex;
	    var rtl = swiper.rtlTranslate;
	    if (swiper.animating && params.preventInteractionOnTransition) {
	      return false;
	    }
	
	    var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
	    if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
	
	    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
	      swiper.emit('beforeSlideChangeStart');
	    }
	
	    var translate = -snapGrid[snapIndex];
	
	    // Update progress
	    swiper.updateProgress(translate);
	
	    // Normalize slideIndex
	    if (params.normalizeSlideIndex) {
	      for (var i = 0; i < slidesGrid.length; i += 1) {
	        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
	          slideIndex = i;
	        }
	      }
	    }
	    // Directions locks
	    if (swiper.initialized && slideIndex !== activeIndex) {
	      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
	        return false;
	      }
	      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
	        if ((activeIndex || 0) !== slideIndex) { return false; }
	      }
	    }
	
	    var direction;
	    if (slideIndex > activeIndex) { direction = 'next'; }
	    else if (slideIndex < activeIndex) { direction = 'prev'; }
	    else { direction = 'reset'; }
	
	
	    // Update Index
	    if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
	      swiper.updateActiveIndex(slideIndex);
	      // Update Height
	      if (params.autoHeight) {
	        swiper.updateAutoHeight();
	      }
	      swiper.updateSlidesClasses();
	      if (params.effect !== 'slide') {
	        swiper.setTranslate(translate);
	      }
	      if (direction !== 'reset') {
	        swiper.transitionStart(runCallbacks, direction);
	        swiper.transitionEnd(runCallbacks, direction);
	      }
	      return false;
	    }
	
	    if (speed === 0 || !Support.transition) {
	      swiper.setTransition(0);
	      swiper.setTranslate(translate);
	      swiper.updateActiveIndex(slideIndex);
	      swiper.updateSlidesClasses();
	      swiper.emit('beforeTransitionStart', speed, internal);
	      swiper.transitionStart(runCallbacks, direction);
	      swiper.transitionEnd(runCallbacks, direction);
	    } else {
	      swiper.setTransition(speed);
	      swiper.setTranslate(translate);
	      swiper.updateActiveIndex(slideIndex);
	      swiper.updateSlidesClasses();
	      swiper.emit('beforeTransitionStart', speed, internal);
	      swiper.transitionStart(runCallbacks, direction);
	      if (!swiper.animating) {
	        swiper.animating = true;
	        if (!swiper.onSlideToWrapperTransitionEnd) {
	          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
	            if (!swiper || swiper.destroyed) { return; }
	            if (e.target !== this) { return; }
	            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
	            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
	            swiper.onSlideToWrapperTransitionEnd = null;
	            delete swiper.onSlideToWrapperTransitionEnd;
	            swiper.transitionEnd(runCallbacks, direction);
	          };
	        }
	        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
	        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
	      }
	    }
	
	    return true;
	  }
	
	  function slideToLoop (index, speed, runCallbacks, internal) {
	    if ( index === void 0 ) index = 0;
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;
	
	    var swiper = this;
	    var newIndex = index;
	    if (swiper.params.loop) {
	      newIndex += swiper.loopedSlides;
	    }
	
	    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
	  }
	
	  /* eslint no-unused-vars: "off" */
	  function slideNext (speed, runCallbacks, internal) {
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;
	
	    var swiper = this;
	    var params = swiper.params;
	    var animating = swiper.animating;
	    if (params.loop) {
	      if (animating) { return false; }
	      swiper.loopFix();
	      // eslint-disable-next-line
	      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	      return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
	    }
	    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
	  }
	
	  /* eslint no-unused-vars: "off" */
	  function slidePrev (speed, runCallbacks, internal) {
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;
	
	    var swiper = this;
	    var params = swiper.params;
	    var animating = swiper.animating;
	    var snapGrid = swiper.snapGrid;
	    var slidesGrid = swiper.slidesGrid;
	    var rtlTranslate = swiper.rtlTranslate;
	
	    if (params.loop) {
	      if (animating) { return false; }
	      swiper.loopFix();
	      // eslint-disable-next-line
	      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	    }
	    var translate = rtlTranslate ? swiper.translate : -swiper.translate;
	    function normalize(val) {
	      if (val < 0) { return -Math.floor(Math.abs(val)); }
	      return Math.floor(val);
	    }
	    var normalizedTranslate = normalize(translate);
	    var normalizedSnapGrid = snapGrid.map(function (val) { return normalize(val); });
	    var normalizedSlidesGrid = slidesGrid.map(function (val) { return normalize(val); });
	
	    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
	    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
	    var prevIndex;
	    if (typeof prevSnap !== 'undefined') {
	      prevIndex = slidesGrid.indexOf(prevSnap);
	      if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; }
	    }
	    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
	  }
	
	  /* eslint no-unused-vars: "off" */
	  function slideReset (speed, runCallbacks, internal) {
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;
	
	    var swiper = this;
	    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
	  }
	
	  /* eslint no-unused-vars: "off" */
	  function slideToClosest (speed, runCallbacks, internal) {
	    if ( speed === void 0 ) speed = this.params.speed;
	    if ( runCallbacks === void 0 ) runCallbacks = true;
	
	    var swiper = this;
	    var index = swiper.activeIndex;
	    var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);
	
	    if (snapIndex < swiper.snapGrid.length - 1) {
	      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	
	      var currentSnap = swiper.snapGrid[snapIndex];
	      var nextSnap = swiper.snapGrid[snapIndex + 1];
	
	      if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
	        index = swiper.params.slidesPerGroup;
	      }
	    }
	
	    return swiper.slideTo(index, speed, runCallbacks, internal);
	  }
	
	  function slideToClickedSlide () {
	    var swiper = this;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	
	    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
	    var slideToIndex = swiper.clickedIndex;
	    var realIndex;
	    if (params.loop) {
	      if (swiper.animating) { return; }
	      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
	      if (params.centeredSlides) {
	        if (
	          (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
	          || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
	        ) {
	          swiper.loopFix();
	          slideToIndex = $wrapperEl
	            .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
	            .eq(0)
	            .index();
	
	          Utils.nextTick(function () {
	            swiper.slideTo(slideToIndex);
	          });
	        } else {
	          swiper.slideTo(slideToIndex);
	        }
	      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
	        swiper.loopFix();
	        slideToIndex = $wrapperEl
	          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
	          .eq(0)
	          .index();
	
	        Utils.nextTick(function () {
	          swiper.slideTo(slideToIndex);
	        });
	      } else {
	        swiper.slideTo(slideToIndex);
	      }
	    } else {
	      swiper.slideTo(slideToIndex);
	    }
	  }
	
	  var slide = {
	    slideTo: slideTo,
	    slideToLoop: slideToLoop,
	    slideNext: slideNext,
	    slidePrev: slidePrev,
	    slideReset: slideReset,
	    slideToClosest: slideToClosest,
	    slideToClickedSlide: slideToClickedSlide,
	  };
	
	  function loopCreate () {
	    var swiper = this;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    // Remove duplicated slides
	    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
	
	    var slides = $wrapperEl.children(("." + (params.slideClass)));
	
	    if (params.loopFillGroupWithBlank) {
	      var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
	      if (blankSlidesNum !== params.slidesPerGroup) {
	        for (var i = 0; i < blankSlidesNum; i += 1) {
	          var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
	          $wrapperEl.append(blankNode);
	        }
	        slides = $wrapperEl.children(("." + (params.slideClass)));
	      }
	    }
	
	    if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }
	
	    swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
	    swiper.loopedSlides += params.loopAdditionalSlides;
	    if (swiper.loopedSlides > slides.length) {
	      swiper.loopedSlides = slides.length;
	    }
	
	    var prependSlides = [];
	    var appendSlides = [];
	    slides.each(function (index, el) {
	      var slide = $(el);
	      if (index < swiper.loopedSlides) { appendSlides.push(el); }
	      if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
	      slide.attr('data-swiper-slide-index', index);
	    });
	    for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
	      $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
	    }
	    for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
	      $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
	    }
	  }
	
	  function loopFix () {
	    var swiper = this;
	    var params = swiper.params;
	    var activeIndex = swiper.activeIndex;
	    var slides = swiper.slides;
	    var loopedSlides = swiper.loopedSlides;
	    var allowSlidePrev = swiper.allowSlidePrev;
	    var allowSlideNext = swiper.allowSlideNext;
	    var snapGrid = swiper.snapGrid;
	    var rtl = swiper.rtlTranslate;
	    var newIndex;
	    swiper.allowSlidePrev = true;
	    swiper.allowSlideNext = true;
	
	    var snapTranslate = -snapGrid[activeIndex];
	    var diff = snapTranslate - swiper.getTranslate();
	
	
	    // Fix For Negative Oversliding
	    if (activeIndex < loopedSlides) {
	      newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
	      newIndex += loopedSlides;
	      var slideChanged = swiper.slideTo(newIndex, 0, false, true);
	      if (slideChanged && diff !== 0) {
	        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
	      }
	    } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
	      // Fix For Positive Oversliding
	      newIndex = -slides.length + activeIndex + loopedSlides;
	      newIndex += loopedSlides;
	      var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
	      if (slideChanged$1 && diff !== 0) {
	        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
	      }
	    }
	    swiper.allowSlidePrev = allowSlidePrev;
	    swiper.allowSlideNext = allowSlideNext;
	  }
	
	  function loopDestroy () {
	    var swiper = this;
	    var $wrapperEl = swiper.$wrapperEl;
	    var params = swiper.params;
	    var slides = swiper.slides;
	    $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
	    slides.removeAttr('data-swiper-slide-index');
	  }
	
	  var loop = {
	    loopCreate: loopCreate,
	    loopFix: loopFix,
	    loopDestroy: loopDestroy,
	  };
	
	  function setGrabCursor (moving) {
	    var swiper = this;
	    if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
	    var el = swiper.el;
	    el.style.cursor = 'move';
	    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
	    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
	    el.style.cursor = moving ? 'grabbing' : 'grab';
	  }
	
	  function unsetGrabCursor () {
	    var swiper = this;
	    if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
	    swiper.el.style.cursor = '';
	  }
	
	  var grabCursor = {
	    setGrabCursor: setGrabCursor,
	    unsetGrabCursor: unsetGrabCursor,
	  };
	
	  function appendSlide (slides) {
	    var swiper = this;
	    var $wrapperEl = swiper.$wrapperEl;
	    var params = swiper.params;
	    if (params.loop) {
	      swiper.loopDestroy();
	    }
	    if (typeof slides === 'object' && 'length' in slides) {
	      for (var i = 0; i < slides.length; i += 1) {
	        if (slides[i]) { $wrapperEl.append(slides[i]); }
	      }
	    } else {
	      $wrapperEl.append(slides);
	    }
	    if (params.loop) {
	      swiper.loopCreate();
	    }
	    if (!(params.observer && Support.observer)) {
	      swiper.update();
	    }
	  }
	
	  function prependSlide (slides) {
	    var swiper = this;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    var activeIndex = swiper.activeIndex;
	
	    if (params.loop) {
	      swiper.loopDestroy();
	    }
	    var newActiveIndex = activeIndex + 1;
	    if (typeof slides === 'object' && 'length' in slides) {
	      for (var i = 0; i < slides.length; i += 1) {
	        if (slides[i]) { $wrapperEl.prepend(slides[i]); }
	      }
	      newActiveIndex = activeIndex + slides.length;
	    } else {
	      $wrapperEl.prepend(slides);
	    }
	    if (params.loop) {
	      swiper.loopCreate();
	    }
	    if (!(params.observer && Support.observer)) {
	      swiper.update();
	    }
	    swiper.slideTo(newActiveIndex, 0, false);
	  }
	
	  function addSlide (index, slides) {
	    var swiper = this;
	    var $wrapperEl = swiper.$wrapperEl;
	    var params = swiper.params;
	    var activeIndex = swiper.activeIndex;
	    var activeIndexBuffer = activeIndex;
	    if (params.loop) {
	      activeIndexBuffer -= swiper.loopedSlides;
	      swiper.loopDestroy();
	      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
	    }
	    var baseLength = swiper.slides.length;
	    if (index <= 0) {
	      swiper.prependSlide(slides);
	      return;
	    }
	    if (index >= baseLength) {
	      swiper.appendSlide(slides);
	      return;
	    }
	    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
	
	    var slidesBuffer = [];
	    for (var i = baseLength - 1; i >= index; i -= 1) {
	      var currentSlide = swiper.slides.eq(i);
	      currentSlide.remove();
	      slidesBuffer.unshift(currentSlide);
	    }
	
	    if (typeof slides === 'object' && 'length' in slides) {
	      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
	        if (slides[i$1]) { $wrapperEl.append(slides[i$1]); }
	      }
	      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
	    } else {
	      $wrapperEl.append(slides);
	    }
	
	    for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
	      $wrapperEl.append(slidesBuffer[i$2]);
	    }
	
	    if (params.loop) {
	      swiper.loopCreate();
	    }
	    if (!(params.observer && Support.observer)) {
	      swiper.update();
	    }
	    if (params.loop) {
	      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
	    } else {
	      swiper.slideTo(newActiveIndex, 0, false);
	    }
	  }
	
	  function removeSlide (slidesIndexes) {
	    var swiper = this;
	    var params = swiper.params;
	    var $wrapperEl = swiper.$wrapperEl;
	    var activeIndex = swiper.activeIndex;
	
	    var activeIndexBuffer = activeIndex;
	    if (params.loop) {
	      activeIndexBuffer -= swiper.loopedSlides;
	      swiper.loopDestroy();
	      swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
	    }
	    var newActiveIndex = activeIndexBuffer;
	    var indexToRemove;
	
	    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
	      for (var i = 0; i < slidesIndexes.length; i += 1) {
	        indexToRemove = slidesIndexes[i];
	        if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
	        if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
	      }
	      newActiveIndex = Math.max(newActiveIndex, 0);
	    } else {
	      indexToRemove = slidesIndexes;
	      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
	      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
	      newActiveIndex = Math.max(newActiveIndex, 0);
	    }
	
	    if (params.loop) {
	      swiper.loopCreate();
	    }
	
	    if (!(params.observer && Support.observer)) {
	      swiper.update();
	    }
	    if (params.loop) {
	      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
	    } else {
	      swiper.slideTo(newActiveIndex, 0, false);
	    }
	  }
	
	  function removeAllSlides () {
	    var swiper = this;
	
	    var slidesIndexes = [];
	    for (var i = 0; i < swiper.slides.length; i += 1) {
	      slidesIndexes.push(i);
	    }
	    swiper.removeSlide(slidesIndexes);
	  }
	
	  var manipulation = {
	    appendSlide: appendSlide,
	    prependSlide: prependSlide,
	    addSlide: addSlide,
	    removeSlide: removeSlide,
	    removeAllSlides: removeAllSlides,
	  };
	
	  var Device = (function Device() {
	    var ua = win.navigator.userAgent;
	
	    var device = {
	      ios: false,
	      android: false,
	      androidChrome: false,
	      desktop: false,
	      windows: false,
	      iphone: false,
	      ipod: false,
	      ipad: false,
	      cordova: win.cordova || win.phonegap,
	      phonegap: win.cordova || win.phonegap,
	    };
	
	    var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
	    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
	    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
	
	
	    // Windows
	    if (windows) {
	      device.os = 'windows';
	      device.osVersion = windows[2];
	      device.windows = true;
	    }
	    // Android
	    if (android && !windows) {
	      device.os = 'android';
	      device.osVersion = android[2];
	      device.android = true;
	      device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
	    }
	    if (ipad || iphone || ipod) {
	      device.os = 'ios';
	      device.ios = true;
	    }
	    // iOS
	    if (iphone && !ipod) {
	      device.osVersion = iphone[2].replace(/_/g, '.');
	      device.iphone = true;
	    }
	    if (ipad) {
	      device.osVersion = ipad[2].replace(/_/g, '.');
	      device.ipad = true;
	    }
	    if (ipod) {
	      device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
	      device.iphone = true;
	    }
	    // iOS 8+ changed UA
	    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
	      if (device.osVersion.split('.')[0] === '10') {
	        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
	      }
	    }
	
	    // Desktop
	    device.desktop = !(device.os || device.android || device.webView);
	
	    // Webview
	    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
	
	    // Minimal UI
	    if (device.os && device.os === 'ios') {
	      var osVersionArr = device.osVersion.split('.');
	      var metaViewport = doc.querySelector('meta[name="viewport"]');
	      device.minimalUi = !device.webView
	        && (ipod || iphone)
	        && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
	        && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
	    }
	
	    // Pixel Ratio
	    device.pixelRatio = win.devicePixelRatio || 1;
	
	    // Export object
	    return device;
	  }());
	
	  function onTouchStart (event) {
	    var swiper = this;
	    var data = swiper.touchEventsData;
	    var params = swiper.params;
	    var touches = swiper.touches;
	    if (swiper.animating && params.preventInteractionOnTransition) {
	      return;
	    }
	    var e = event;
	    if (e.originalEvent) { e = e.originalEvent; }
	    data.isTouchEvent = e.type === 'touchstart';
	    if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
	    if (!data.isTouchEvent && 'button' in e && e.button > 0) { return; }
	    if (data.isTouched && data.isMoved) { return; }
	    if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
	      swiper.allowClick = true;
	      return;
	    }
	    if (params.swipeHandler) {
	      if (!$(e).closest(params.swipeHandler)[0]) { return; }
	    }
	
	    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	    var startX = touches.currentX;
	    var startY = touches.currentY;
	
	    // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	
	    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
	    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
	    if (
	      edgeSwipeDetection
	      && ((startX <= edgeSwipeThreshold)
	      || (startX >= win.screen.width - edgeSwipeThreshold))
	    ) {
	      return;
	    }
	
	    Utils.extend(data, {
	      isTouched: true,
	      isMoved: false,
	      allowTouchCallbacks: true,
	      isScrolling: undefined,
	      startMoving: undefined,
	    });
	
	    touches.startX = startX;
	    touches.startY = startY;
	    data.touchStartTime = Utils.now();
	    swiper.allowClick = true;
	    swiper.updateSize();
	    swiper.swipeDirection = undefined;
	    if (params.threshold > 0) { data.allowThresholdMove = false; }
	    if (e.type !== 'touchstart') {
	      var preventDefault = true;
	      if ($(e.target).is(data.formElements)) { preventDefault = false; }
	      if (
	        doc.activeElement
	        && $(doc.activeElement).is(data.formElements)
	        && doc.activeElement !== e.target
	      ) {
	        doc.activeElement.blur();
	      }
	      if (preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault) {
	        e.preventDefault();
	      }
	    }
	    swiper.emit('touchStart', e);
	  }
	
	  function onTouchMove (event) {
	    var swiper = this;
	    var data = swiper.touchEventsData;
	    var params = swiper.params;
	    var touches = swiper.touches;
	    var rtl = swiper.rtlTranslate;
	    var e = event;
	    if (e.originalEvent) { e = e.originalEvent; }
	    if (!data.isTouched) {
	      if (data.startMoving && data.isScrolling) {
	        swiper.emit('touchMoveOpposite', e);
	      }
	      return;
	    }
	    if (data.isTouchEvent && e.type === 'mousemove') { return; }
	    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	    if (e.preventedByNestedSwiper) {
	      touches.startX = pageX;
	      touches.startY = pageY;
	      return;
	    }
	    if (!swiper.allowTouchMove) {
	      // isMoved = true;
	      swiper.allowClick = false;
	      if (data.isTouched) {
	        Utils.extend(touches, {
	          startX: pageX,
	          startY: pageY,
	          currentX: pageX,
	          currentY: pageY,
	        });
	        data.touchStartTime = Utils.now();
	      }
	      return;
	    }
	    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
	      if (swiper.isVertical()) {
	        // Vertical
	        if (
	          (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
	          || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
	        ) {
	          data.isTouched = false;
	          data.isMoved = false;
	          return;
	        }
	      } else if (
	        (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
	        || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
	      ) {
	        return;
	      }
	    }
	    if (data.isTouchEvent && doc.activeElement) {
	      if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
	        data.isMoved = true;
	        swiper.allowClick = false;
	        return;
	      }
	    }
	    if (data.allowTouchCallbacks) {
	      swiper.emit('touchMove', e);
	    }
	    if (e.targetTouches && e.targetTouches.length > 1) { return; }
	
	    touches.currentX = pageX;
	    touches.currentY = pageY;
	
	    var diffX = touches.currentX - touches.startX;
	    var diffY = touches.currentY - touches.startY;
	    if (swiper.params.threshold && Math.sqrt((Math.pow( diffX, 2 )) + (Math.pow( diffY, 2 ))) < swiper.params.threshold) { return; }
	
	    if (typeof data.isScrolling === 'undefined') {
	      var touchAngle;
	      if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
	        data.isScrolling = false;
	      } else {
	        // eslint-disable-next-line
	        if ((diffX * diffX) + (diffY * diffY) >= 25) {
	          touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
	          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
	        }
	      }
	    }
	    if (data.isScrolling) {
	      swiper.emit('touchMoveOpposite', e);
	    }
	    if (typeof data.startMoving === 'undefined') {
	      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
	        data.startMoving = true;
	      }
	    }
	    if (data.isScrolling) {
	      data.isTouched = false;
	      return;
	    }
	    if (!data.startMoving) {
	      return;
	    }
	    swiper.allowClick = false;
	    e.preventDefault();
	    if (params.touchMoveStopPropagation && !params.nested) {
	      e.stopPropagation();
	    }
	
	    if (!data.isMoved) {
	      if (params.loop) {
	        swiper.loopFix();
	      }
	      data.startTranslate = swiper.getTranslate();
	      swiper.setTransition(0);
	      if (swiper.animating) {
	        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
	      }
	      data.allowMomentumBounce = false;
	      // Grab Cursor
	      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
	        swiper.setGrabCursor(true);
	      }
	      swiper.emit('sliderFirstMove', e);
	    }
	    swiper.emit('sliderMove', e);
	    data.isMoved = true;
	
	    var diff = swiper.isHorizontal() ? diffX : diffY;
	    touches.diff = diff;
	
	    diff *= params.touchRatio;
	    if (rtl) { diff = -diff; }
	
	    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
	    data.currentTranslate = diff + data.startTranslate;
	
	    var disableParentSwiper = true;
	    var resistanceRatio = params.resistanceRatio;
	    if (params.touchReleaseOnEdges) {
	      resistanceRatio = 0;
	    }
	    if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
	      disableParentSwiper = false;
	      if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
	    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
	      disableParentSwiper = false;
	      if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
	    }
	
	    if (disableParentSwiper) {
	      e.preventedByNestedSwiper = true;
	    }
	
	    // Directions locks
	    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
	      data.currentTranslate = data.startTranslate;
	    }
	    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
	      data.currentTranslate = data.startTranslate;
	    }
	
	
	    // Threshold
	    if (params.threshold > 0) {
	      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
	        if (!data.allowThresholdMove) {
	          data.allowThresholdMove = true;
	          touches.startX = touches.currentX;
	          touches.startY = touches.currentY;
	          data.currentTranslate = data.startTranslate;
	          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
	          return;
	        }
	      } else {
	        data.currentTranslate = data.startTranslate;
	        return;
	      }
	    }
	
	    if (!params.followFinger) { return; }
	
	    // Update active index in free mode
	    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	    }
	    if (params.freeMode) {
	      // Velocity
	      if (data.velocities.length === 0) {
	        data.velocities.push({
	          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
	          time: data.touchStartTime,
	        });
	      }
	      data.velocities.push({
	        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
	        time: Utils.now(),
	      });
	    }
	    // Update progress
	    swiper.updateProgress(data.currentTranslate);
	    // Update translate
	    swiper.setTranslate(data.currentTranslate);
	  }
	
	  function onTouchEnd (event) {
	    var swiper = this;
	    var data = swiper.touchEventsData;
	
	    var params = swiper.params;
	    var touches = swiper.touches;
	    var rtl = swiper.rtlTranslate;
	    var $wrapperEl = swiper.$wrapperEl;
	    var slidesGrid = swiper.slidesGrid;
	    var snapGrid = swiper.snapGrid;
	    var e = event;
	    if (e.originalEvent) { e = e.originalEvent; }
	    if (data.allowTouchCallbacks) {
	      swiper.emit('touchEnd', e);
	    }
	    data.allowTouchCallbacks = false;
	    if (!data.isTouched) {
	      if (data.isMoved && params.grabCursor) {
	        swiper.setGrabCursor(false);
	      }
	      data.isMoved = false;
	      data.startMoving = false;
	      return;
	    }
	    // Return Grab Cursor
	    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
	      swiper.setGrabCursor(false);
	    }
	
	    // Time diff
	    var touchEndTime = Utils.now();
	    var timeDiff = touchEndTime - data.touchStartTime;
	
	    // Tap, doubleTap, Click
	    if (swiper.allowClick) {
	      swiper.updateClickedSlide(e);
	      swiper.emit('tap', e);
	      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
	        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
	        data.clickTimeout = Utils.nextTick(function () {
	          if (!swiper || swiper.destroyed) { return; }
	          swiper.emit('click', e);
	        }, 300);
	      }
	      if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
	        if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
	        swiper.emit('doubleTap', e);
	      }
	    }
	
	    data.lastClickTime = Utils.now();
	    Utils.nextTick(function () {
	      if (!swiper.destroyed) { swiper.allowClick = true; }
	    });
	
	    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
	      data.isTouched = false;
	      data.isMoved = false;
	      data.startMoving = false;
	      return;
	    }
	    data.isTouched = false;
	    data.isMoved = false;
	    data.startMoving = false;
	
	    var currentPos;
	    if (params.followFinger) {
	      currentPos = rtl ? swiper.translate : -swiper.translate;
	    } else {
	      currentPos = -data.currentTranslate;
	    }
	
	    if (params.freeMode) {
	      if (currentPos < -swiper.minTranslate()) {
	        swiper.slideTo(swiper.activeIndex);
	        return;
	      }
	      if (currentPos > -swiper.maxTranslate()) {
	        if (swiper.slides.length < snapGrid.length) {
	          swiper.slideTo(snapGrid.length - 1);
	        } else {
	          swiper.slideTo(swiper.slides.length - 1);
	        }
	        return;
	      }
	
	      if (params.freeModeMomentum) {
	        if (data.velocities.length > 1) {
	          var lastMoveEvent = data.velocities.pop();
	          var velocityEvent = data.velocities.pop();
	
	          var distance = lastMoveEvent.position - velocityEvent.position;
	          var time = lastMoveEvent.time - velocityEvent.time;
	          swiper.velocity = distance / time;
	          swiper.velocity /= 2;
	          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
	            swiper.velocity = 0;
	          }
	          // this implies that the user stopped moving a finger then released.
	          // There would be no events with distance zero, so the last event is stale.
	          if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
	            swiper.velocity = 0;
	          }
	        } else {
	          swiper.velocity = 0;
	        }
	        swiper.velocity *= params.freeModeMomentumVelocityRatio;
	
	        data.velocities.length = 0;
	        var momentumDuration = 1000 * params.freeModeMomentumRatio;
	        var momentumDistance = swiper.velocity * momentumDuration;
	
	        var newPosition = swiper.translate + momentumDistance;
	        if (rtl) { newPosition = -newPosition; }
	
	        var doBounce = false;
	        var afterBouncePosition;
	        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
	        var needsLoopFix;
	        if (newPosition < swiper.maxTranslate()) {
	          if (params.freeModeMomentumBounce) {
	            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
	              newPosition = swiper.maxTranslate() - bounceAmount;
	            }
	            afterBouncePosition = swiper.maxTranslate();
	            doBounce = true;
	            data.allowMomentumBounce = true;
	          } else {
	            newPosition = swiper.maxTranslate();
	          }
	          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
	        } else if (newPosition > swiper.minTranslate()) {
	          if (params.freeModeMomentumBounce) {
	            if (newPosition - swiper.minTranslate() > bounceAmount) {
	              newPosition = swiper.minTranslate() + bounceAmount;
	            }
	            afterBouncePosition = swiper.minTranslate();
	            doBounce = true;
	            data.allowMomentumBounce = true;
	          } else {
	            newPosition = swiper.minTranslate();
	          }
	          if (params.loop && params.centeredSlides) { needsLoopFix = true; }
	        } else if (params.freeModeSticky) {
	          var nextSlide;
	          for (var j = 0; j < snapGrid.length; j += 1) {
	            if (snapGrid[j] > -newPosition) {
	              nextSlide = j;
	              break;
	            }
	          }
	
	          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
	            newPosition = snapGrid[nextSlide];
	          } else {
	            newPosition = snapGrid[nextSlide - 1];
	          }
	          newPosition = -newPosition;
	        }
	        if (needsLoopFix) {
	          swiper.once('transitionEnd', function () {
	            swiper.loopFix();
	          });
	        }
	        // Fix duration
	        if (swiper.velocity !== 0) {
	          if (rtl) {
	            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
	          } else {
	            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
	          }
	        } else if (params.freeModeSticky) {
	          swiper.slideToClosest();
	          return;
	        }
	
	        if (params.freeModeMomentumBounce && doBounce) {
	          swiper.updateProgress(afterBouncePosition);
	          swiper.setTransition(momentumDuration);
	          swiper.setTranslate(newPosition);
	          swiper.transitionStart(true, swiper.swipeDirection);
	          swiper.animating = true;
	          $wrapperEl.transitionEnd(function () {
	            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
	            swiper.emit('momentumBounce');
	
	            swiper.setTransition(params.speed);
	            swiper.setTranslate(afterBouncePosition);
	            $wrapperEl.transitionEnd(function () {
	              if (!swiper || swiper.destroyed) { return; }
	              swiper.transitionEnd();
	            });
	          });
	        } else if (swiper.velocity) {
	          swiper.updateProgress(newPosition);
	          swiper.setTransition(momentumDuration);
	          swiper.setTranslate(newPosition);
	          swiper.transitionStart(true, swiper.swipeDirection);
	          if (!swiper.animating) {
	            swiper.animating = true;
	            $wrapperEl.transitionEnd(function () {
	              if (!swiper || swiper.destroyed) { return; }
	              swiper.transitionEnd();
	            });
	          }
	        } else {
	          swiper.updateProgress(newPosition);
	        }
	
	        swiper.updateActiveIndex();
	        swiper.updateSlidesClasses();
	      } else if (params.freeModeSticky) {
	        swiper.slideToClosest();
	        return;
	      }
	
	      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
	        swiper.updateProgress();
	        swiper.updateActiveIndex();
	        swiper.updateSlidesClasses();
	      }
	      return;
	    }
	
	    // Find current slide
	    var stopIndex = 0;
	    var groupSize = swiper.slidesSizesGrid[0];
	    for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
	      if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
	        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
	          stopIndex = i;
	          groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
	        }
	      } else if (currentPos >= slidesGrid[i]) {
	        stopIndex = i;
	        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
	      }
	    }
	
	    // Find current slide size
	    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
	
	    if (timeDiff > params.longSwipesMs) {
	      // Long touches
	      if (!params.longSwipes) {
	        swiper.slideTo(swiper.activeIndex);
	        return;
	      }
	      if (swiper.swipeDirection === 'next') {
	        if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
	        else { swiper.slideTo(stopIndex); }
	      }
	      if (swiper.swipeDirection === 'prev') {
	        if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
	        else { swiper.slideTo(stopIndex); }
	      }
	    } else {
	      // Short swipes
	      if (!params.shortSwipes) {
	        swiper.slideTo(swiper.activeIndex);
	        return;
	      }
	      if (swiper.swipeDirection === 'next') {
	        swiper.slideTo(stopIndex + params.slidesPerGroup);
	      }
	      if (swiper.swipeDirection === 'prev') {
	        swiper.slideTo(stopIndex);
	      }
	    }
	  }
	
	  function onResize () {
	    var swiper = this;
	
	    var params = swiper.params;
	    var el = swiper.el;
	
	    if (el && el.offsetWidth === 0) { return; }
	
	    // Breakpoints
	    if (params.breakpoints) {
	      swiper.setBreakpoint();
	    }
	
	    // Save locks
	    var allowSlideNext = swiper.allowSlideNext;
	    var allowSlidePrev = swiper.allowSlidePrev;
	    var snapGrid = swiper.snapGrid;
	
	    // Disable locks on resize
	    swiper.allowSlideNext = true;
	    swiper.allowSlidePrev = true;
	
	    swiper.updateSize();
	    swiper.updateSlides();
	
	    if (params.freeMode) {
	      var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
	      swiper.setTranslate(newTranslate);
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	
	      if (params.autoHeight) {
	        swiper.updateAutoHeight();
	      }
	    } else {
	      swiper.updateSlidesClasses();
	      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
	        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
	      } else {
	        swiper.slideTo(swiper.activeIndex, 0, false, true);
	      }
	    }
	    // Return locks after resize
	    swiper.allowSlidePrev = allowSlidePrev;
	    swiper.allowSlideNext = allowSlideNext;
	
	    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
	      swiper.checkOverflow();
	    }
	  }
	
	  function onClick (e) {
	    var swiper = this;
	    if (!swiper.allowClick) {
	      if (swiper.params.preventClicks) { e.preventDefault(); }
	      if (swiper.params.preventClicksPropagation && swiper.animating) {
	        e.stopPropagation();
	        e.stopImmediatePropagation();
	      }
	    }
	  }
	
	  function attachEvents() {
	    var swiper = this;
	    var params = swiper.params;
	    var touchEvents = swiper.touchEvents;
	    var el = swiper.el;
	    var wrapperEl = swiper.wrapperEl;
	
	    {
	      swiper.onTouchStart = onTouchStart.bind(swiper);
	      swiper.onTouchMove = onTouchMove.bind(swiper);
	      swiper.onTouchEnd = onTouchEnd.bind(swiper);
	    }
	
	    swiper.onClick = onClick.bind(swiper);
	
	    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
	    var capture = !!params.nested;
	
	    // Touch Events
	    {
	      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	        target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
	        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
	        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
	      } else {
	        if (Support.touch) {
	          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	          target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
	          target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
	          target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
	        }
	        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
	          target.addEventListener('mousedown', swiper.onTouchStart, false);
	          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
	          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
	        }
	      }
	      // Prevent Links Clicks
	      if (params.preventClicks || params.preventClicksPropagation) {
	        target.addEventListener('click', swiper.onClick, true);
	      }
	    }
	
	    // Resize handler
	    swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
	  }
	
	  function detachEvents() {
	    var swiper = this;
	
	    var params = swiper.params;
	    var touchEvents = swiper.touchEvents;
	    var el = swiper.el;
	    var wrapperEl = swiper.wrapperEl;
	
	    var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
	    var capture = !!params.nested;
	
	    // Touch Events
	    {
	      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	        target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
	        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
	        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
	      } else {
	        if (Support.touch) {
	          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	          target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
	          target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
	          target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
	        }
	        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
	          target.removeEventListener('mousedown', swiper.onTouchStart, false);
	          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
	          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
	        }
	      }
	      // Prevent Links Clicks
	      if (params.preventClicks || params.preventClicksPropagation) {
	        target.removeEventListener('click', swiper.onClick, true);
	      }
	    }
	
	    // Resize handler
	    swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
	  }
	
	  var events = {
	    attachEvents: attachEvents,
	    detachEvents: detachEvents,
	  };
	
	  function setBreakpoint () {
	    var swiper = this;
	    var activeIndex = swiper.activeIndex;
	    var initialized = swiper.initialized;
	    var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
	    var params = swiper.params;
	    var breakpoints = params.breakpoints;
	    if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }
	    // Set breakpoint for window width and update parameters
	    var breakpoint = swiper.getBreakpoint(breakpoints);
	    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
	      var breakPointsParams = breakpoint in breakpoints ? breakpoints[breakpoint] : swiper.originalParams;
	      var needsReLoop = params.loop && (breakPointsParams.slidesPerView !== params.slidesPerView);
	
	      Utils.extend(swiper.params, breakPointsParams);
	
	      Utils.extend(swiper, {
	        allowTouchMove: swiper.params.allowTouchMove,
	        allowSlideNext: swiper.params.allowSlideNext,
	        allowSlidePrev: swiper.params.allowSlidePrev,
	      });
	
	      swiper.currentBreakpoint = breakpoint;
	
	      if (needsReLoop && initialized) {
	        swiper.loopDestroy();
	        swiper.loopCreate();
	        swiper.updateSlides();
	        swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
	      }
	      swiper.emit('breakpoint', breakPointsParams);
	    }
	  }
	
	  function getBreakpoint (breakpoints) {
	    var swiper = this;
	    // Get breakpoint for window width
	    if (!breakpoints) { return undefined; }
	    var breakpoint = false;
	    var points = [];
	    Object.keys(breakpoints).forEach(function (point) {
	      points.push(point);
	    });
	    points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
	    for (var i = 0; i < points.length; i += 1) {
	      var point = points[i];
	      if (swiper.params.breakpointsInverse) {
	        if (point <= win.innerWidth) {
	          breakpoint = point;
	        }
	      } else if (point >= win.innerWidth && !breakpoint) {
	        breakpoint = point;
	      }
	    }
	    return breakpoint || 'max';
	  }
	
	  var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };
	
	  var Browser = (function Browser() {
	    function isSafari() {
	      var ua = win.navigator.userAgent.toLowerCase();
	      return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
	    }
	    return {
	      isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
	      isEdge: !!win.navigator.userAgent.match(/Edge/g),
	      isSafari: isSafari(),
	      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
	    };
	  }());
	
	  function addClasses () {
	    var swiper = this;
	    var classNames = swiper.classNames;
	    var params = swiper.params;
	    var rtl = swiper.rtl;
	    var $el = swiper.$el;
	    var suffixes = [];
	
	    suffixes.push(params.direction);
	
	    if (params.freeMode) {
	      suffixes.push('free-mode');
	    }
	    if (!Support.flexbox) {
	      suffixes.push('no-flexbox');
	    }
	    if (params.autoHeight) {
	      suffixes.push('autoheight');
	    }
	    if (rtl) {
	      suffixes.push('rtl');
	    }
	    if (params.slidesPerColumn > 1) {
	      suffixes.push('multirow');
	    }
	    if (Device.android) {
	      suffixes.push('android');
	    }
	    if (Device.ios) {
	      suffixes.push('ios');
	    }
	    // WP8 Touch Events Fix
	    if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	      suffixes.push(("wp8-" + (params.direction)));
	    }
	
	    suffixes.forEach(function (suffix) {
	      classNames.push(params.containerModifierClass + suffix);
	    });
	
	    $el.addClass(classNames.join(' '));
	  }
	
	  function removeClasses () {
	    var swiper = this;
	    var $el = swiper.$el;
	    var classNames = swiper.classNames;
	
	    $el.removeClass(classNames.join(' '));
	  }
	
	  var classes = { addClasses: addClasses, removeClasses: removeClasses };
	
	  function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
	    var image;
	    function onReady() {
	      if (callback) { callback(); }
	    }
	    if (!imageEl.complete || !checkForComplete) {
	      if (src) {
	        image = new win.Image();
	        image.onload = onReady;
	        image.onerror = onReady;
	        if (sizes) {
	          image.sizes = sizes;
	        }
	        if (srcset) {
	          image.srcset = srcset;
	        }
	        if (src) {
	          image.src = src;
	        }
	      } else {
	        onReady();
	      }
	    } else {
	      // image already loaded...
	      onReady();
	    }
	  }
	
	  function preloadImages () {
	    var swiper = this;
	    swiper.imagesToLoad = swiper.$el.find('img');
	    function onReady() {
	      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
	      if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
	      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
	        if (swiper.params.updateOnImagesReady) { swiper.update(); }
	        swiper.emit('imagesReady');
	      }
	    }
	    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
	      var imageEl = swiper.imagesToLoad[i];
	      swiper.loadImage(
	        imageEl,
	        imageEl.currentSrc || imageEl.getAttribute('src'),
	        imageEl.srcset || imageEl.getAttribute('srcset'),
	        imageEl.sizes || imageEl.getAttribute('sizes'),
	        true,
	        onReady
	      );
	    }
	  }
	
	  var images = {
	    loadImage: loadImage,
	    preloadImages: preloadImages,
	  };
	
	  function checkOverflow() {
	    var swiper = this;
	    var wasLocked = swiper.isLocked;
	
	    swiper.isLocked = swiper.snapGrid.length === 1;
	    swiper.allowSlideNext = !swiper.isLocked;
	    swiper.allowSlidePrev = !swiper.isLocked;
	
	    // events
	    if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }
	
	    if (wasLocked && wasLocked !== swiper.isLocked) {
	      swiper.isEnd = false;
	      swiper.navigation.update();
	    }
	  }
	
	  var checkOverflow$1 = { checkOverflow: checkOverflow };
	
	  var defaults = {
	    init: true,
	    direction: 'horizontal',
	    touchEventsTarget: 'container',
	    initialSlide: 0,
	    speed: 300,
	    //
	    preventInteractionOnTransition: false,
	
	    // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	    edgeSwipeDetection: false,
	    edgeSwipeThreshold: 20,
	
	    // Free mode
	    freeMode: false,
	    freeModeMomentum: true,
	    freeModeMomentumRatio: 1,
	    freeModeMomentumBounce: true,
	    freeModeMomentumBounceRatio: 1,
	    freeModeMomentumVelocityRatio: 1,
	    freeModeSticky: false,
	    freeModeMinimumVelocity: 0.02,
	
	    // Autoheight
	    autoHeight: false,
	
	    // Set wrapper width
	    setWrapperSize: false,
	
	    // Virtual Translate
	    virtualTranslate: false,
	
	    // Effects
	    effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	
	    // Breakpoints
	    breakpoints: undefined,
	    breakpointsInverse: false,
	
	    // Slides grid
	    spaceBetween: 0,
	    slidesPerView: 1,
	    slidesPerColumn: 1,
	    slidesPerColumnFill: 'column',
	    slidesPerGroup: 1,
	    centeredSlides: false,
	    slidesOffsetBefore: 0, // in px
	    slidesOffsetAfter: 0, // in px
	    normalizeSlideIndex: true,
	    centerInsufficientSlides: false,
	
	    // Disable swiper and hide navigation when container not overflow
	    watchOverflow: false,
	
	    // Round length
	    roundLengths: false,
	
	    // Touches
	    touchRatio: 1,
	    touchAngle: 45,
	    simulateTouch: true,
	    shortSwipes: true,
	    longSwipes: true,
	    longSwipesRatio: 0.5,
	    longSwipesMs: 300,
	    followFinger: true,
	    allowTouchMove: true,
	    threshold: 0,
	    touchMoveStopPropagation: true,
	    touchStartPreventDefault: true,
	    touchReleaseOnEdges: false,
	
	    // Unique Navigation Elements
	    uniqueNavElements: true,
	
	    // Resistance
	    resistance: true,
	    resistanceRatio: 0.85,
	
	    // Progress
	    watchSlidesProgress: false,
	    watchSlidesVisibility: false,
	
	    // Cursor
	    grabCursor: false,
	
	    // Clicks
	    preventClicks: true,
	    preventClicksPropagation: true,
	    slideToClickedSlide: false,
	
	    // Images
	    preloadImages: true,
	    updateOnImagesReady: true,
	
	    // loop
	    loop: false,
	    loopAdditionalSlides: 0,
	    loopedSlides: null,
	    loopFillGroupWithBlank: false,
	
	    // Swiping/no swiping
	    allowSlidePrev: true,
	    allowSlideNext: true,
	    swipeHandler: null, // '.swipe-handler',
	    noSwiping: true,
	    noSwipingClass: 'swiper-no-swiping',
	    noSwipingSelector: null,
	
	    // Passive Listeners
	    passiveListeners: true,
	
	    // NS
	    containerModifierClass: 'swiper-container-', // NEW
	    slideClass: 'swiper-slide',
	    slideBlankClass: 'swiper-slide-invisible-blank',
	    slideActiveClass: 'swiper-slide-active',
	    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
	    slideVisibleClass: 'swiper-slide-visible',
	    slideDuplicateClass: 'swiper-slide-duplicate',
	    slideNextClass: 'swiper-slide-next',
	    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
	    slidePrevClass: 'swiper-slide-prev',
	    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
	    wrapperClass: 'swiper-wrapper',
	
	    // Callbacks
	    runCallbacksOnInit: true,
	  };
	
	  var prototypes = {
	    update: update,
	    translate: translate,
	    transition: transition$1,
	    slide: slide,
	    loop: loop,
	    grabCursor: grabCursor,
	    manipulation: manipulation,
	    events: events,
	    breakpoints: breakpoints,
	    checkOverflow: checkOverflow$1,
	    classes: classes,
	    images: images,
	  };
	
	  var extendedDefaults = {};
	
	  var Swiper = (function (SwiperClass$$1) {
	    function Swiper() {
	      var assign;
	
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	      var el;
	      var params;
	      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
	        params = args[0];
	      } else {
	        (assign = args, el = assign[0], params = assign[1]);
	      }
	      if (!params) { params = {}; }
	
	      params = Utils.extend({}, params);
	      if (el && !params.el) { params.el = el; }
	
	      SwiperClass$$1.call(this, params);
	
	      Object.keys(prototypes).forEach(function (prototypeGroup) {
	        Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
	          if (!Swiper.prototype[protoMethod]) {
	            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
	          }
	        });
	      });
	
	      // Swiper Instance
	      var swiper = this;
	      if (typeof swiper.modules === 'undefined') {
	        swiper.modules = {};
	      }
	      Object.keys(swiper.modules).forEach(function (moduleName) {
	        var module = swiper.modules[moduleName];
	        if (module.params) {
	          var moduleParamName = Object.keys(module.params)[0];
	          var moduleParams = module.params[moduleParamName];
	          if (typeof moduleParams !== 'object' || moduleParams === null) { return; }
	          if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
	          if (params[moduleParamName] === true) {
	            params[moduleParamName] = { enabled: true };
	          }
	          if (
	            typeof params[moduleParamName] === 'object'
	            && !('enabled' in params[moduleParamName])
	          ) {
	            params[moduleParamName].enabled = true;
	          }
	          if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
	        }
	      });
	
	      // Extend defaults with modules params
	      var swiperParams = Utils.extend({}, defaults);
	      swiper.useModulesParams(swiperParams);
	
	      // Extend defaults with passed params
	      swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
	      swiper.originalParams = Utils.extend({}, swiper.params);
	      swiper.passedParams = Utils.extend({}, params);
	
	      // Save Dom lib
	      swiper.$ = $;
	
	      // Find el
	      var $el = $(swiper.params.el);
	      el = $el[0];
	
	      if (!el) {
	        return undefined;
	      }
	
	      if ($el.length > 1) {
	        var swipers = [];
	        $el.each(function (index, containerEl) {
	          var newParams = Utils.extend({}, params, { el: containerEl });
	          swipers.push(new Swiper(newParams));
	        });
	        return swipers;
	      }
	
	      el.swiper = swiper;
	      $el.data('swiper', swiper);
	
	      // Find Wrapper
	      var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));
	
	      // Extend Swiper
	      Utils.extend(swiper, {
	        $el: $el,
	        el: el,
	        $wrapperEl: $wrapperEl,
	        wrapperEl: $wrapperEl[0],
	
	        // Classes
	        classNames: [],
	
	        // Slides
	        slides: $(),
	        slidesGrid: [],
	        snapGrid: [],
	        slidesSizesGrid: [],
	
	        // isDirection
	        isHorizontal: function isHorizontal() {
	          return swiper.params.direction === 'horizontal';
	        },
	        isVertical: function isVertical() {
	          return swiper.params.direction === 'vertical';
	        },
	        // RTL
	        rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
	        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
	        wrongRTL: $wrapperEl.css('display') === '-webkit-box',
	
	        // Indexes
	        activeIndex: 0,
	        realIndex: 0,
	
	        //
	        isBeginning: true,
	        isEnd: false,
	
	        // Props
	        translate: 0,
	        previousTranslate: 0,
	        progress: 0,
	        velocity: 0,
	        animating: false,
	
	        // Locks
	        allowSlideNext: swiper.params.allowSlideNext,
	        allowSlidePrev: swiper.params.allowSlidePrev,
	
	        // Touch Events
	        touchEvents: (function touchEvents() {
	          var touch = ['touchstart', 'touchmove', 'touchend'];
	          var desktop = ['mousedown', 'mousemove', 'mouseup'];
	          if (Support.pointerEvents) {
	            desktop = ['pointerdown', 'pointermove', 'pointerup'];
	          } else if (Support.prefixedPointerEvents) {
	            desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
	          }
	          swiper.touchEventsTouch = {
	            start: touch[0],
	            move: touch[1],
	            end: touch[2],
	          };
	          swiper.touchEventsDesktop = {
	            start: desktop[0],
	            move: desktop[1],
	            end: desktop[2],
	          };
	          return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
	        }()),
	        touchEventsData: {
	          isTouched: undefined,
	          isMoved: undefined,
	          allowTouchCallbacks: undefined,
	          touchStartTime: undefined,
	          isScrolling: undefined,
	          currentTranslate: undefined,
	          startTranslate: undefined,
	          allowThresholdMove: undefined,
	          // Form elements to match
	          formElements: 'input, select, option, textarea, button, video',
	          // Last click time
	          lastClickTime: Utils.now(),
	          clickTimeout: undefined,
	          // Velocities
	          velocities: [],
	          allowMomentumBounce: undefined,
	          isTouchEvent: undefined,
	          startMoving: undefined,
	        },
	
	        // Clicks
	        allowClick: true,
	
	        // Touches
	        allowTouchMove: swiper.params.allowTouchMove,
	
	        touches: {
	          startX: 0,
	          startY: 0,
	          currentX: 0,
	          currentY: 0,
	          diff: 0,
	        },
	
	        // Images
	        imagesToLoad: [],
	        imagesLoaded: 0,
	
	      });
	
	      // Install Modules
	      swiper.useModules();
	
	      // Init
	      if (swiper.params.init) {
	        swiper.init();
	      }
	
	      // Return app instance
	      return swiper;
	    }
	
	    if ( SwiperClass$$1 ) Swiper.__proto__ = SwiperClass$$1;
	    Swiper.prototype = Object.create( SwiperClass$$1 && SwiperClass$$1.prototype );
	    Swiper.prototype.constructor = Swiper;
	
	    var staticAccessors = { extendedDefaults: { configurable: true },defaults: { configurable: true },Class: { configurable: true },$: { configurable: true } };
	
	    Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
	      var swiper = this;
	      var params = swiper.params;
	      var slides = swiper.slides;
	      var slidesGrid = swiper.slidesGrid;
	      var swiperSize = swiper.size;
	      var activeIndex = swiper.activeIndex;
	      var spv = 1;
	      if (params.centeredSlides) {
	        var slideSize = slides[activeIndex].swiperSlideSize;
	        var breakLoop;
	        for (var i = activeIndex + 1; i < slides.length; i += 1) {
	          if (slides[i] && !breakLoop) {
	            slideSize += slides[i].swiperSlideSize;
	            spv += 1;
	            if (slideSize > swiperSize) { breakLoop = true; }
	          }
	        }
	        for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
	          if (slides[i$1] && !breakLoop) {
	            slideSize += slides[i$1].swiperSlideSize;
	            spv += 1;
	            if (slideSize > swiperSize) { breakLoop = true; }
	          }
	        }
	      } else {
	        for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
	          if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
	            spv += 1;
	          }
	        }
	      }
	      return spv;
	    };
	
	    Swiper.prototype.update = function update$$1 () {
	      var swiper = this;
	      if (!swiper || swiper.destroyed) { return; }
	      var snapGrid = swiper.snapGrid;
	      var params = swiper.params;
	      // Breakpoints
	      if (params.breakpoints) {
	        swiper.setBreakpoint();
	      }
	      swiper.updateSize();
	      swiper.updateSlides();
	      swiper.updateProgress();
	      swiper.updateSlidesClasses();
	
	      function setTranslate() {
	        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
	        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
	        swiper.setTranslate(newTranslate);
	        swiper.updateActiveIndex();
	        swiper.updateSlidesClasses();
	      }
	      var translated;
	      if (swiper.params.freeMode) {
	        setTranslate();
	        if (swiper.params.autoHeight) {
	          swiper.updateAutoHeight();
	        }
	      } else {
	        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
	          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
	        } else {
	          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
	        }
	        if (!translated) {
	          setTranslate();
	        }
	      }
	      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
	        swiper.checkOverflow();
	      }
	      swiper.emit('update');
	    };
	
	    Swiper.prototype.init = function init () {
	      var swiper = this;
	      if (swiper.initialized) { return; }
	
	      swiper.emit('beforeInit');
	
	      // Set breakpoint
	      if (swiper.params.breakpoints) {
	        swiper.setBreakpoint();
	      }
	
	      // Add Classes
	      swiper.addClasses();
	
	      // Create loop
	      if (swiper.params.loop) {
	        swiper.loopCreate();
	      }
	
	      // Update size
	      swiper.updateSize();
	
	      // Update slides
	      swiper.updateSlides();
	
	      if (swiper.params.watchOverflow) {
	        swiper.checkOverflow();
	      }
	
	      // Set Grab Cursor
	      if (swiper.params.grabCursor) {
	        swiper.setGrabCursor();
	      }
	
	      if (swiper.params.preloadImages) {
	        swiper.preloadImages();
	      }
	
	      // Slide To Initial Slide
	      if (swiper.params.loop) {
	        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
	      } else {
	        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
	      }
	
	      // Attach events
	      swiper.attachEvents();
	
	      // Init Flag
	      swiper.initialized = true;
	
	      // Emit
	      swiper.emit('init');
	    };
	
	    Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
	      if ( deleteInstance === void 0 ) deleteInstance = true;
	      if ( cleanStyles === void 0 ) cleanStyles = true;
	
	      var swiper = this;
	      var params = swiper.params;
	      var $el = swiper.$el;
	      var $wrapperEl = swiper.$wrapperEl;
	      var slides = swiper.slides;
	
	      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
	        return null;
	      }
	
	      swiper.emit('beforeDestroy');
	
	      // Init Flag
	      swiper.initialized = false;
	
	      // Detach events
	      swiper.detachEvents();
	
	      // Destroy loop
	      if (params.loop) {
	        swiper.loopDestroy();
	      }
	
	      // Cleanup styles
	      if (cleanStyles) {
	        swiper.removeClasses();
	        $el.removeAttr('style');
	        $wrapperEl.removeAttr('style');
	        if (slides && slides.length) {
	          slides
	            .removeClass([
	              params.slideVisibleClass,
	              params.slideActiveClass,
	              params.slideNextClass,
	              params.slidePrevClass ].join(' '))
	            .removeAttr('style')
	            .removeAttr('data-swiper-slide-index')
	            .removeAttr('data-swiper-column')
	            .removeAttr('data-swiper-row');
	        }
	      }
	
	      swiper.emit('destroy');
	
	      // Detach emitter events
	      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
	        swiper.off(eventName);
	      });
	
	      if (deleteInstance !== false) {
	        swiper.$el[0].swiper = null;
	        swiper.$el.data('swiper', null);
	        Utils.deleteProps(swiper);
	      }
	      swiper.destroyed = true;
	
	      return null;
	    };
	
	    Swiper.extendDefaults = function extendDefaults (newDefaults) {
	      Utils.extend(extendedDefaults, newDefaults);
	    };
	
	    staticAccessors.extendedDefaults.get = function () {
	      return extendedDefaults;
	    };
	
	    staticAccessors.defaults.get = function () {
	      return defaults;
	    };
	
	    staticAccessors.Class.get = function () {
	      return SwiperClass$$1;
	    };
	
	    staticAccessors.$.get = function () {
	      return $;
	    };
	
	    Object.defineProperties( Swiper, staticAccessors );
	
	    return Swiper;
	  }(SwiperClass));
	
	  var Device$1 = {
	    name: 'device',
	    proto: {
	      device: Device,
	    },
	    static: {
	      device: Device,
	    },
	  };
	
	  var Support$1 = {
	    name: 'support',
	    proto: {
	      support: Support,
	    },
	    static: {
	      support: Support,
	    },
	  };
	
	  var Browser$1 = {
	    name: 'browser',
	    proto: {
	      browser: Browser,
	    },
	    static: {
	      browser: Browser,
	    },
	  };
	
	  var Resize = {
	    name: 'resize',
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        resize: {
	          resizeHandler: function resizeHandler() {
	            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
	            swiper.emit('beforeResize');
	            swiper.emit('resize');
	          },
	          orientationChangeHandler: function orientationChangeHandler() {
	            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
	            swiper.emit('orientationchange');
	          },
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        // Emit resize
	        win.addEventListener('resize', swiper.resize.resizeHandler);
	
	        // Emit orientationchange
	        win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        win.removeEventListener('resize', swiper.resize.resizeHandler);
	        win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
	      },
	    },
	  };
	
	  var Observer = {
	    func: win.MutationObserver || win.WebkitMutationObserver,
	    attach: function attach(target, options) {
	      if ( options === void 0 ) options = {};
	
	      var swiper = this;
	
	      var ObserverFunc = Observer.func;
	      var observer = new ObserverFunc(function (mutations) {
	        // The observerUpdate event should only be triggered
	        // once despite the number of mutations.  Additional
	        // triggers are redundant and are very costly
	        if (mutations.length === 1) {
	          swiper.emit('observerUpdate', mutations[0]);
	          return;
	        }
	        var observerUpdate = function observerUpdate() {
	          swiper.emit('observerUpdate', mutations[0]);
	        };
	
	        if (win.requestAnimationFrame) {
	          win.requestAnimationFrame(observerUpdate);
	        } else {
	          win.setTimeout(observerUpdate, 0);
	        }
	      });
	
	      observer.observe(target, {
	        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	        childList: typeof options.childList === 'undefined' ? true : options.childList,
	        characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
	      });
	
	      swiper.observer.observers.push(observer);
	    },
	    init: function init() {
	      var swiper = this;
	      if (!Support.observer || !swiper.params.observer) { return; }
	      if (swiper.params.observeParents) {
	        var containerParents = swiper.$el.parents();
	        for (var i = 0; i < containerParents.length; i += 1) {
	          swiper.observer.attach(containerParents[i]);
	        }
	      }
	      // Observe container
	      swiper.observer.attach(swiper.$el[0], { childList: false });
	
	      // Observe wrapper
	      swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      swiper.observer.observers.forEach(function (observer) {
	        observer.disconnect();
	      });
	      swiper.observer.observers = [];
	    },
	  };
	
	  var Observer$1 = {
	    name: 'observer',
	    params: {
	      observer: false,
	      observeParents: false,
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        observer: {
	          init: Observer.init.bind(swiper),
	          attach: Observer.attach.bind(swiper),
	          destroy: Observer.destroy.bind(swiper),
	          observers: [],
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        swiper.observer.init();
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.observer.destroy();
	      },
	    },
	  };
	
	  var Virtual = {
	    update: function update(force) {
	      var swiper = this;
	      var ref = swiper.params;
	      var slidesPerView = ref.slidesPerView;
	      var slidesPerGroup = ref.slidesPerGroup;
	      var centeredSlides = ref.centeredSlides;
	      var ref$1 = swiper.params.virtual;
	      var addSlidesBefore = ref$1.addSlidesBefore;
	      var addSlidesAfter = ref$1.addSlidesAfter;
	      var ref$2 = swiper.virtual;
	      var previousFrom = ref$2.from;
	      var previousTo = ref$2.to;
	      var slides = ref$2.slides;
	      var previousSlidesGrid = ref$2.slidesGrid;
	      var renderSlide = ref$2.renderSlide;
	      var previousOffset = ref$2.offset;
	      swiper.updateActiveIndex();
	      var activeIndex = swiper.activeIndex || 0;
	
	      var offsetProp;
	      if (swiper.rtlTranslate) { offsetProp = 'right'; }
	      else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }
	
	      var slidesAfter;
	      var slidesBefore;
	      if (centeredSlides) {
	        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
	        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
	      } else {
	        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
	        slidesBefore = slidesPerGroup + addSlidesAfter;
	      }
	      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
	      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
	      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
	
	      Utils.extend(swiper.virtual, {
	        from: from,
	        to: to,
	        offset: offset,
	        slidesGrid: swiper.slidesGrid,
	      });
	
	      function onRendered() {
	        swiper.updateSlides();
	        swiper.updateProgress();
	        swiper.updateSlidesClasses();
	        if (swiper.lazy && swiper.params.lazy.enabled) {
	          swiper.lazy.load();
	        }
	      }
	
	      if (previousFrom === from && previousTo === to && !force) {
	        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
	          swiper.slides.css(offsetProp, (offset + "px"));
	        }
	        swiper.updateProgress();
	        return;
	      }
	      if (swiper.params.virtual.renderExternal) {
	        swiper.params.virtual.renderExternal.call(swiper, {
	          offset: offset,
	          from: from,
	          to: to,
	          slides: (function getSlides() {
	            var slidesToRender = [];
	            for (var i = from; i <= to; i += 1) {
	              slidesToRender.push(slides[i]);
	            }
	            return slidesToRender;
	          }()),
	        });
	        onRendered();
	        return;
	      }
	      var prependIndexes = [];
	      var appendIndexes = [];
	      if (force) {
	        swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
	      } else {
	        for (var i = previousFrom; i <= previousTo; i += 1) {
	          if (i < from || i > to) {
	            swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
	          }
	        }
	      }
	      for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
	        if (i$1 >= from && i$1 <= to) {
	          if (typeof previousTo === 'undefined' || force) {
	            appendIndexes.push(i$1);
	          } else {
	            if (i$1 > previousTo) { appendIndexes.push(i$1); }
	            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
	          }
	        }
	      }
	      appendIndexes.forEach(function (index) {
	        swiper.$wrapperEl.append(renderSlide(slides[index], index));
	      });
	      prependIndexes.sort(function (a, b) { return a < b; }).forEach(function (index) {
	        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
	      });
	      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
	      onRendered();
	    },
	    renderSlide: function renderSlide(slide, index) {
	      var swiper = this;
	      var params = swiper.params.virtual;
	      if (params.cache && swiper.virtual.cache[index]) {
	        return swiper.virtual.cache[index];
	      }
	      var $slideEl = params.renderSlide
	        ? $(params.renderSlide.call(swiper, slide, index))
	        : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
	      if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
	      if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
	      return $slideEl;
	    },
	    appendSlide: function appendSlide(slide) {
	      var swiper = this;
	      swiper.virtual.slides.push(slide);
	      swiper.virtual.update(true);
	    },
	    prependSlide: function prependSlide(slide) {
	      var swiper = this;
	      swiper.virtual.slides.unshift(slide);
	      if (swiper.params.virtual.cache) {
	        var cache = swiper.virtual.cache;
	        var newCache = {};
	        Object.keys(cache).forEach(function (cachedIndex) {
	          newCache[cachedIndex + 1] = cache[cachedIndex];
	        });
	        swiper.virtual.cache = newCache;
	      }
	      swiper.virtual.update(true);
	      swiper.slideNext(0);
	    },
	  };
	
	  var Virtual$1 = {
	    name: 'virtual',
	    params: {
	      virtual: {
	        enabled: false,
	        slides: [],
	        cache: true,
	        renderSlide: null,
	        renderExternal: null,
	        addSlidesBefore: 0,
	        addSlidesAfter: 0,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        virtual: {
	          update: Virtual.update.bind(swiper),
	          appendSlide: Virtual.appendSlide.bind(swiper),
	          prependSlide: Virtual.prependSlide.bind(swiper),
	          renderSlide: Virtual.renderSlide.bind(swiper),
	          slides: swiper.params.virtual.slides,
	          cache: {},
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (!swiper.params.virtual.enabled) { return; }
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
	        var overwriteParams = {
	          watchSlidesProgress: true,
	        };
	        Utils.extend(swiper.params, overwriteParams);
	        Utils.extend(swiper.originalParams, overwriteParams);
	
	        swiper.virtual.update();
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (!swiper.params.virtual.enabled) { return; }
	        swiper.virtual.update();
	      },
	    },
	  };
	
	  var Keyboard = {
	    handle: function handle(event) {
	      var swiper = this;
	      var rtl = swiper.rtlTranslate;
	      var e = event;
	      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
	      var kc = e.keyCode || e.charCode;
	      // Directions locks
	      if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
	        return false;
	      }
	      if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
	        return false;
	      }
	      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	        return undefined;
	      }
	      if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
	        return undefined;
	      }
	      if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
	        var inView = false;
	        // Check that swiper should be inside of visible area of window
	        if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
	          return undefined;
	        }
	        var windowWidth = win.innerWidth;
	        var windowHeight = win.innerHeight;
	        var swiperOffset = swiper.$el.offset();
	        if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
	        var swiperCoord = [
	          [swiperOffset.left, swiperOffset.top],
	          [swiperOffset.left + swiper.width, swiperOffset.top],
	          [swiperOffset.left, swiperOffset.top + swiper.height],
	          [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
	        for (var i = 0; i < swiperCoord.length; i += 1) {
	          var point = swiperCoord[i];
	          if (
	            point[0] >= 0 && point[0] <= windowWidth
	            && point[1] >= 0 && point[1] <= windowHeight
	          ) {
	            inView = true;
	          }
	        }
	        if (!inView) { return undefined; }
	      }
	      if (swiper.isHorizontal()) {
	        if (kc === 37 || kc === 39) {
	          if (e.preventDefault) { e.preventDefault(); }
	          else { e.returnValue = false; }
	        }
	        if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
	        if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
	      } else {
	        if (kc === 38 || kc === 40) {
	          if (e.preventDefault) { e.preventDefault(); }
	          else { e.returnValue = false; }
	        }
	        if (kc === 40) { swiper.slideNext(); }
	        if (kc === 38) { swiper.slidePrev(); }
	      }
	      swiper.emit('keyPress', kc);
	      return undefined;
	    },
	    enable: function enable() {
	      var swiper = this;
	      if (swiper.keyboard.enabled) { return; }
	      $(doc).on('keydown', swiper.keyboard.handle);
	      swiper.keyboard.enabled = true;
	    },
	    disable: function disable() {
	      var swiper = this;
	      if (!swiper.keyboard.enabled) { return; }
	      $(doc).off('keydown', swiper.keyboard.handle);
	      swiper.keyboard.enabled = false;
	    },
	  };
	
	  var Keyboard$1 = {
	    name: 'keyboard',
	    params: {
	      keyboard: {
	        enabled: false,
	        onlyInViewport: true,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        keyboard: {
	          enabled: false,
	          enable: Keyboard.enable.bind(swiper),
	          disable: Keyboard.disable.bind(swiper),
	          handle: Keyboard.handle.bind(swiper),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.keyboard.enabled) {
	          swiper.keyboard.enable();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.keyboard.enabled) {
	          swiper.keyboard.disable();
	        }
	      },
	    },
	  };
	
	  function isEventSupported() {
	    var eventName = 'onwheel';
	    var isSupported = eventName in doc;
	
	    if (!isSupported) {
	      var element = doc.createElement('div');
	      element.setAttribute(eventName, 'return;');
	      isSupported = typeof element[eventName] === 'function';
	    }
	
	    if (!isSupported
	      && doc.implementation
	      && doc.implementation.hasFeature
	      // always returns true in newer browsers as per the standard.
	      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	      && doc.implementation.hasFeature('', '') !== true
	    ) {
	      // This is the only way to test support for the `wheel` event in IE9+.
	      isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
	    }
	
	    return isSupported;
	  }
	  var Mousewheel = {
	    lastScrollTime: Utils.now(),
	    event: (function getEvent() {
	      if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
	      return isEventSupported() ? 'wheel' : 'mousewheel';
	    }()),
	    normalize: function normalize(e) {
	      // Reasonable defaults
	      var PIXEL_STEP = 10;
	      var LINE_HEIGHT = 40;
	      var PAGE_HEIGHT = 800;
	
	      var sX = 0;
	      var sY = 0; // spinX, spinY
	      var pX = 0;
	      var pY = 0; // pixelX, pixelY
	
	      // Legacy
	      if ('detail' in e) {
	        sY = e.detail;
	      }
	      if ('wheelDelta' in e) {
	        sY = -e.wheelDelta / 120;
	      }
	      if ('wheelDeltaY' in e) {
	        sY = -e.wheelDeltaY / 120;
	      }
	      if ('wheelDeltaX' in e) {
	        sX = -e.wheelDeltaX / 120;
	      }
	
	      // side scrolling on FF with DOMMouseScroll
	      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
	        sX = sY;
	        sY = 0;
	      }
	
	      pX = sX * PIXEL_STEP;
	      pY = sY * PIXEL_STEP;
	
	      if ('deltaY' in e) {
	        pY = e.deltaY;
	      }
	      if ('deltaX' in e) {
	        pX = e.deltaX;
	      }
	
	      if ((pX || pY) && e.deltaMode) {
	        if (e.deltaMode === 1) { // delta in LINE units
	          pX *= LINE_HEIGHT;
	          pY *= LINE_HEIGHT;
	        } else { // delta in PAGE units
	          pX *= PAGE_HEIGHT;
	          pY *= PAGE_HEIGHT;
	        }
	      }
	
	      // Fall-back if spin cannot be determined
	      if (pX && !sX) {
	        sX = (pX < 1) ? -1 : 1;
	      }
	      if (pY && !sY) {
	        sY = (pY < 1) ? -1 : 1;
	      }
	
	      return {
	        spinX: sX,
	        spinY: sY,
	        pixelX: pX,
	        pixelY: pY,
	      };
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      var swiper = this;
	      swiper.mouseEntered = true;
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      var swiper = this;
	      swiper.mouseEntered = false;
	    },
	    handle: function handle(event) {
	      var e = event;
	      var swiper = this;
	      var params = swiper.params.mousewheel;
	
	      if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }
	
	      if (e.originalEvent) { e = e.originalEvent; } // jquery fix
	      var delta = 0;
	      var rtlFactor = swiper.rtlTranslate ? -1 : 1;
	
	      var data = Mousewheel.normalize(e);
	
	      if (params.forceToAxis) {
	        if (swiper.isHorizontal()) {
	          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
	          else { return true; }
	        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
	        else { return true; }
	      } else {
	        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
	      }
	
	      if (delta === 0) { return true; }
	
	      if (params.invert) { delta = -delta; }
	
	      if (!swiper.params.freeMode) {
	        if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
	          if (delta < 0) {
	            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
	              swiper.slideNext();
	              swiper.emit('scroll', e);
	            } else if (params.releaseOnEdges) { return true; }
	          } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
	            swiper.slidePrev();
	            swiper.emit('scroll', e);
	          } else if (params.releaseOnEdges) { return true; }
	        }
	        swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
	      } else {
	        // Freemode or scrollContainer:
	        if (swiper.params.loop) {
	          swiper.loopFix();
	        }
	        var position = swiper.getTranslate() + (delta * params.sensitivity);
	        var wasBeginning = swiper.isBeginning;
	        var wasEnd = swiper.isEnd;
	
	        if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
	        if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }
	
	        swiper.setTransition(0);
	        swiper.setTranslate(position);
	        swiper.updateProgress();
	        swiper.updateActiveIndex();
	        swiper.updateSlidesClasses();
	
	        if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
	          swiper.updateSlidesClasses();
	        }
	
	        if (swiper.params.freeModeSticky) {
	          clearTimeout(swiper.mousewheel.timeout);
	          swiper.mousewheel.timeout = Utils.nextTick(function () {
	            swiper.slideToClosest();
	          }, 300);
	        }
	        // Emit event
	        swiper.emit('scroll', e);
	
	        // Stop autoplay
	        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
	        // Return page scroll on edge positions
	        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
	      }
	
	      if (e.preventDefault) { e.preventDefault(); }
	      else { e.returnValue = false; }
	      return false;
	    },
	    enable: function enable() {
	      var swiper = this;
	      if (!Mousewheel.event) { return false; }
	      if (swiper.mousewheel.enabled) { return false; }
	      var target = swiper.$el;
	      if (swiper.params.mousewheel.eventsTarged !== 'container') {
	        target = $(swiper.params.mousewheel.eventsTarged);
	      }
	      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
	      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
	      target.on(Mousewheel.event, swiper.mousewheel.handle);
	      swiper.mousewheel.enabled = true;
	      return true;
	    },
	    disable: function disable() {
	      var swiper = this;
	      if (!Mousewheel.event) { return false; }
	      if (!swiper.mousewheel.enabled) { return false; }
	      var target = swiper.$el;
	      if (swiper.params.mousewheel.eventsTarged !== 'container') {
	        target = $(swiper.params.mousewheel.eventsTarged);
	      }
	      target.off(Mousewheel.event, swiper.mousewheel.handle);
	      swiper.mousewheel.enabled = false;
	      return true;
	    },
	  };
	
	  var Mousewheel$1 = {
	    name: 'mousewheel',
	    params: {
	      mousewheel: {
	        enabled: false,
	        releaseOnEdges: false,
	        invert: false,
	        forceToAxis: false,
	        sensitivity: 1,
	        eventsTarged: 'container',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        mousewheel: {
	          enabled: false,
	          enable: Mousewheel.enable.bind(swiper),
	          disable: Mousewheel.disable.bind(swiper),
	          handle: Mousewheel.handle.bind(swiper),
	          handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
	          handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
	          lastScrollTime: Utils.now(),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
	      },
	    },
	  };
	
	  var Navigation = {
	    update: function update() {
	      // Update Navigation Buttons
	      var swiper = this;
	      var params = swiper.params.navigation;
	
	      if (swiper.params.loop) { return; }
	      var ref = swiper.navigation;
	      var $nextEl = ref.$nextEl;
	      var $prevEl = ref.$prevEl;
	
	      if ($prevEl && $prevEl.length > 0) {
	        if (swiper.isBeginning) {
	          $prevEl.addClass(params.disabledClass);
	        } else {
	          $prevEl.removeClass(params.disabledClass);
	        }
	        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	      }
	      if ($nextEl && $nextEl.length > 0) {
	        if (swiper.isEnd) {
	          $nextEl.addClass(params.disabledClass);
	        } else {
	          $nextEl.removeClass(params.disabledClass);
	        }
	        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	      }
	    },
	    init: function init() {
	      var swiper = this;
	      var params = swiper.params.navigation;
	      if (!(params.nextEl || params.prevEl)) { return; }
	
	      var $nextEl;
	      var $prevEl;
	      if (params.nextEl) {
	        $nextEl = $(params.nextEl);
	        if (
	          swiper.params.uniqueNavElements
	          && typeof params.nextEl === 'string'
	          && $nextEl.length > 1
	          && swiper.$el.find(params.nextEl).length === 1
	        ) {
	          $nextEl = swiper.$el.find(params.nextEl);
	        }
	      }
	      if (params.prevEl) {
	        $prevEl = $(params.prevEl);
	        if (
	          swiper.params.uniqueNavElements
	          && typeof params.prevEl === 'string'
	          && $prevEl.length > 1
	          && swiper.$el.find(params.prevEl).length === 1
	        ) {
	          $prevEl = swiper.$el.find(params.prevEl);
	        }
	      }
	
	      if ($nextEl && $nextEl.length > 0) {
	        $nextEl.on('click', function (e) {
	          e.preventDefault();
	          if (swiper.isEnd && !swiper.params.loop) { return; }
	          swiper.slideNext();
	        });
	      }
	      if ($prevEl && $prevEl.length > 0) {
	        $prevEl.on('click', function (e) {
	          e.preventDefault();
	          if (swiper.isBeginning && !swiper.params.loop) { return; }
	          swiper.slidePrev();
	        });
	      }
	
	      Utils.extend(swiper.navigation, {
	        $nextEl: $nextEl,
	        nextEl: $nextEl && $nextEl[0],
	        $prevEl: $prevEl,
	        prevEl: $prevEl && $prevEl[0],
	      });
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      var ref = swiper.navigation;
	      var $nextEl = ref.$nextEl;
	      var $prevEl = ref.$prevEl;
	      if ($nextEl && $nextEl.length) {
	        $nextEl.off('click');
	        $nextEl.removeClass(swiper.params.navigation.disabledClass);
	      }
	      if ($prevEl && $prevEl.length) {
	        $prevEl.off('click');
	        $prevEl.removeClass(swiper.params.navigation.disabledClass);
	      }
	    },
	  };
	
	  var Navigation$1 = {
	    name: 'navigation',
	    params: {
	      navigation: {
	        nextEl: null,
	        prevEl: null,
	
	        hideOnClick: false,
	        disabledClass: 'swiper-button-disabled',
	        hiddenClass: 'swiper-button-hidden',
	        lockClass: 'swiper-button-lock',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        navigation: {
	          init: Navigation.init.bind(swiper),
	          update: Navigation.update.bind(swiper),
	          destroy: Navigation.destroy.bind(swiper),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        swiper.navigation.init();
	        swiper.navigation.update();
	      },
	      toEdge: function toEdge() {
	        var swiper = this;
	        swiper.navigation.update();
	      },
	      fromEdge: function fromEdge() {
	        var swiper = this;
	        swiper.navigation.update();
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.navigation.destroy();
	      },
	      click: function click(e) {
	        var swiper = this;
	        var ref = swiper.navigation;
	        var $nextEl = ref.$nextEl;
	        var $prevEl = ref.$prevEl;
	        if (
	          swiper.params.navigation.hideOnClick
	          && !$(e.target).is($prevEl)
	          && !$(e.target).is($nextEl)
	        ) {
	          if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
	          if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
	        }
	      },
	    },
	  };
	
	  var Pagination = {
	    update: function update() {
	      // Render || Update Pagination bullets/items
	      var swiper = this;
	      var rtl = swiper.rtl;
	      var params = swiper.params.pagination;
	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
	      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
	      var $el = swiper.pagination.$el;
	      // Current/Total
	      var current;
	      var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	      if (swiper.params.loop) {
	        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
	        if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
	          current -= (slidesLength - (swiper.loopedSlides * 2));
	        }
	        if (current > total - 1) { current -= total; }
	        if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
	      } else if (typeof swiper.snapIndex !== 'undefined') {
	        current = swiper.snapIndex;
	      } else {
	        current = swiper.activeIndex || 0;
	      }
	      // Types
	      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
	        var bullets = swiper.pagination.bullets;
	        var firstIndex;
	        var lastIndex;
	        var midIndex;
	        if (params.dynamicBullets) {
	          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
	          $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
	          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
	            swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
	            if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
	              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
	            } else if (swiper.pagination.dynamicBulletIndex < 0) {
	              swiper.pagination.dynamicBulletIndex = 0;
	            }
	          }
	          firstIndex = current - swiper.pagination.dynamicBulletIndex;
	          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
	          midIndex = (lastIndex + firstIndex) / 2;
	        }
	        bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
	        if ($el.length > 1) {
	          bullets.each(function (index, bullet) {
	            var $bullet = $(bullet);
	            var bulletIndex = $bullet.index();
	            if (bulletIndex === current) {
	              $bullet.addClass(params.bulletActiveClass);
	            }
	            if (params.dynamicBullets) {
	              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
	                $bullet.addClass(((params.bulletActiveClass) + "-main"));
	              }
	              if (bulletIndex === firstIndex) {
	                $bullet
	                  .prev()
	                  .addClass(((params.bulletActiveClass) + "-prev"))
	                  .prev()
	                  .addClass(((params.bulletActiveClass) + "-prev-prev"));
	              }
	              if (bulletIndex === lastIndex) {
	                $bullet
	                  .next()
	                  .addClass(((params.bulletActiveClass) + "-next"))
	                  .next()
	                  .addClass(((params.bulletActiveClass) + "-next-next"));
	              }
	            }
	          });
	        } else {
	          var $bullet = bullets.eq(current);
	          $bullet.addClass(params.bulletActiveClass);
	          if (params.dynamicBullets) {
	            var $firstDisplayedBullet = bullets.eq(firstIndex);
	            var $lastDisplayedBullet = bullets.eq(lastIndex);
	            for (var i = firstIndex; i <= lastIndex; i += 1) {
	              bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
	            }
	            $firstDisplayedBullet
	              .prev()
	              .addClass(((params.bulletActiveClass) + "-prev"))
	              .prev()
	              .addClass(((params.bulletActiveClass) + "-prev-prev"));
	            $lastDisplayedBullet
	              .next()
	              .addClass(((params.bulletActiveClass) + "-next"))
	              .next()
	              .addClass(((params.bulletActiveClass) + "-next-next"));
	          }
	        }
	        if (params.dynamicBullets) {
	          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
	          var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
	          var offsetProp = rtl ? 'right' : 'left';
	          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
	        }
	      }
	      if (params.type === 'fraction') {
	        $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
	        $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
	      }
	      if (params.type === 'progressbar') {
	        var progressbarDirection;
	        if (params.progressbarOpposite) {
	          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
	        } else {
	          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
	        }
	        var scale = (current + 1) / total;
	        var scaleX = 1;
	        var scaleY = 1;
	        if (progressbarDirection === 'horizontal') {
	          scaleX = scale;
	        } else {
	          scaleY = scale;
	        }
	        $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
	      }
	      if (params.type === 'custom' && params.renderCustom) {
	        $el.html(params.renderCustom(swiper, current + 1, total));
	        swiper.emit('paginationRender', swiper, $el[0]);
	      } else {
	        swiper.emit('paginationUpdate', swiper, $el[0]);
	      }
	      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	    },
	    render: function render() {
	      // Render Container
	      var swiper = this;
	      var params = swiper.params.pagination;
	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
	      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
	
	      var $el = swiper.pagination.$el;
	      var paginationHTML = '';
	      if (params.type === 'bullets') {
	        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	        for (var i = 0; i < numberOfBullets; i += 1) {
	          if (params.renderBullet) {
	            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
	          } else {
	            paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
	          }
	        }
	        $el.html(paginationHTML);
	        swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
	      }
	      if (params.type === 'fraction') {
	        if (params.renderFraction) {
	          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
	        } else {
	          paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>"
	          + ' / '
	          + "<span class=\"" + (params.totalClass) + "\"></span>";
	        }
	        $el.html(paginationHTML);
	      }
	      if (params.type === 'progressbar') {
	        if (params.renderProgressbar) {
	          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
	        } else {
	          paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
	        }
	        $el.html(paginationHTML);
	      }
	      if (params.type !== 'custom') {
	        swiper.emit('paginationRender', swiper.pagination.$el[0]);
	      }
	    },
	    init: function init() {
	      var swiper = this;
	      var params = swiper.params.pagination;
	      if (!params.el) { return; }
	
	      var $el = $(params.el);
	      if ($el.length === 0) { return; }
	
	      if (
	        swiper.params.uniqueNavElements
	        && typeof params.el === 'string'
	        && $el.length > 1
	        && swiper.$el.find(params.el).length === 1
	      ) {
	        $el = swiper.$el.find(params.el);
	      }
	
	      if (params.type === 'bullets' && params.clickable) {
	        $el.addClass(params.clickableClass);
	      }
	
	      $el.addClass(params.modifierClass + params.type);
	
	      if (params.type === 'bullets' && params.dynamicBullets) {
	        $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
	        swiper.pagination.dynamicBulletIndex = 0;
	        if (params.dynamicMainBullets < 1) {
	          params.dynamicMainBullets = 1;
	        }
	      }
	      if (params.type === 'progressbar' && params.progressbarOpposite) {
	        $el.addClass(params.progressbarOppositeClass);
	      }
	
	      if (params.clickable) {
	        $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
	          e.preventDefault();
	          var index = $(this).index() * swiper.params.slidesPerGroup;
	          if (swiper.params.loop) { index += swiper.loopedSlides; }
	          swiper.slideTo(index);
	        });
	      }
	
	      Utils.extend(swiper.pagination, {
	        $el: $el,
	        el: $el[0],
	      });
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      var params = swiper.params.pagination;
	      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
	      var $el = swiper.pagination.$el;
	
	      $el.removeClass(params.hiddenClass);
	      $el.removeClass(params.modifierClass + params.type);
	      if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
	      if (params.clickable) {
	        $el.off('click', ("." + (params.bulletClass)));
	      }
	    },
	  };
	
	  var Pagination$1 = {
	    name: 'pagination',
	    params: {
	      pagination: {
	        el: null,
	        bulletElement: 'span',
	        clickable: false,
	        hideOnClick: false,
	        renderBullet: null,
	        renderProgressbar: null,
	        renderFraction: null,
	        renderCustom: null,
	        progressbarOpposite: false,
	        type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
	        dynamicBullets: false,
	        dynamicMainBullets: 1,
	        formatFractionCurrent: function (number) { return number; },
	        formatFractionTotal: function (number) { return number; },
	        bulletClass: 'swiper-pagination-bullet',
	        bulletActiveClass: 'swiper-pagination-bullet-active',
	        modifierClass: 'swiper-pagination-', // NEW
	        currentClass: 'swiper-pagination-current',
	        totalClass: 'swiper-pagination-total',
	        hiddenClass: 'swiper-pagination-hidden',
	        progressbarFillClass: 'swiper-pagination-progressbar-fill',
	        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
	        clickableClass: 'swiper-pagination-clickable', // NEW
	        lockClass: 'swiper-pagination-lock',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        pagination: {
	          init: Pagination.init.bind(swiper),
	          render: Pagination.render.bind(swiper),
	          update: Pagination.update.bind(swiper),
	          destroy: Pagination.destroy.bind(swiper),
	          dynamicBulletIndex: 0,
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        swiper.pagination.init();
	        swiper.pagination.render();
	        swiper.pagination.update();
	      },
	      activeIndexChange: function activeIndexChange() {
	        var swiper = this;
	        if (swiper.params.loop) {
	          swiper.pagination.update();
	        } else if (typeof swiper.snapIndex === 'undefined') {
	          swiper.pagination.update();
	        }
	      },
	      snapIndexChange: function snapIndexChange() {
	        var swiper = this;
	        if (!swiper.params.loop) {
	          swiper.pagination.update();
	        }
	      },
	      slidesLengthChange: function slidesLengthChange() {
	        var swiper = this;
	        if (swiper.params.loop) {
	          swiper.pagination.render();
	          swiper.pagination.update();
	        }
	      },
	      snapGridLengthChange: function snapGridLengthChange() {
	        var swiper = this;
	        if (!swiper.params.loop) {
	          swiper.pagination.render();
	          swiper.pagination.update();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.pagination.destroy();
	      },
	      click: function click(e) {
	        var swiper = this;
	        if (
	          swiper.params.pagination.el
	          && swiper.params.pagination.hideOnClick
	          && swiper.pagination.$el.length > 0
	          && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
	        ) {
	          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
	        }
	      },
	    },
	  };
	
	  var Scrollbar = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
	      var scrollbar = swiper.scrollbar;
	      var rtl = swiper.rtlTranslate;
	      var progress = swiper.progress;
	      var dragSize = scrollbar.dragSize;
	      var trackSize = scrollbar.trackSize;
	      var $dragEl = scrollbar.$dragEl;
	      var $el = scrollbar.$el;
	      var params = swiper.params.scrollbar;
	
	      var newSize = dragSize;
	      var newPos = (trackSize - dragSize) * progress;
	      if (rtl) {
	        newPos = -newPos;
	        if (newPos > 0) {
	          newSize = dragSize - newPos;
	          newPos = 0;
	        } else if (-newPos + dragSize > trackSize) {
	          newSize = trackSize + newPos;
	        }
	      } else if (newPos < 0) {
	        newSize = dragSize + newPos;
	        newPos = 0;
	      } else if (newPos + dragSize > trackSize) {
	        newSize = trackSize - newPos;
	      }
	      if (swiper.isHorizontal()) {
	        if (Support.transforms3d) {
	          $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
	        } else {
	          $dragEl.transform(("translateX(" + newPos + "px)"));
	        }
	        $dragEl[0].style.width = newSize + "px";
	      } else {
	        if (Support.transforms3d) {
	          $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
	        } else {
	          $dragEl.transform(("translateY(" + newPos + "px)"));
	        }
	        $dragEl[0].style.height = newSize + "px";
	      }
	      if (params.hide) {
	        clearTimeout(swiper.scrollbar.timeout);
	        $el[0].style.opacity = 1;
	        swiper.scrollbar.timeout = setTimeout(function () {
	          $el[0].style.opacity = 0;
	          $el.transition(400);
	        }, 1000);
	      }
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
	      swiper.scrollbar.$dragEl.transition(duration);
	    },
	    updateSize: function updateSize() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
	
	      var scrollbar = swiper.scrollbar;
	      var $dragEl = scrollbar.$dragEl;
	      var $el = scrollbar.$el;
	
	      $dragEl[0].style.width = '';
	      $dragEl[0].style.height = '';
	      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
	
	      var divider = swiper.size / swiper.virtualSize;
	      var moveDivider = divider * (trackSize / swiper.size);
	      var dragSize;
	      if (swiper.params.scrollbar.dragSize === 'auto') {
	        dragSize = trackSize * divider;
	      } else {
	        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
	      }
	
	      if (swiper.isHorizontal()) {
	        $dragEl[0].style.width = dragSize + "px";
	      } else {
	        $dragEl[0].style.height = dragSize + "px";
	      }
	
	      if (divider >= 1) {
	        $el[0].style.display = 'none';
	      } else {
	        $el[0].style.display = '';
	      }
	      if (swiper.params.scrollbarHide) {
	        $el[0].style.opacity = 0;
	      }
	      Utils.extend(scrollbar, {
	        trackSize: trackSize,
	        divider: divider,
	        moveDivider: moveDivider,
	        dragSize: dragSize,
	      });
	      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
	    },
	    setDragPosition: function setDragPosition(e) {
	      var swiper = this;
	      var scrollbar = swiper.scrollbar;
	      var rtl = swiper.rtlTranslate;
	      var $el = scrollbar.$el;
	      var dragSize = scrollbar.dragSize;
	      var trackSize = scrollbar.trackSize;
	
	      var pointerPosition;
	      if (swiper.isHorizontal()) {
	        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
	      } else {
	        pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
	      }
	      var positionRatio;
	      positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
	      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
	      if (rtl) {
	        positionRatio = 1 - positionRatio;
	      }
	
	      var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);
	
	      swiper.updateProgress(position);
	      swiper.setTranslate(position);
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	    },
	    onDragStart: function onDragStart(e) {
	      var swiper = this;
	      var params = swiper.params.scrollbar;
	      var scrollbar = swiper.scrollbar;
	      var $wrapperEl = swiper.$wrapperEl;
	      var $el = scrollbar.$el;
	      var $dragEl = scrollbar.$dragEl;
	      swiper.scrollbar.isTouched = true;
	      e.preventDefault();
	      e.stopPropagation();
	
	      $wrapperEl.transition(100);
	      $dragEl.transition(100);
	      scrollbar.setDragPosition(e);
	
	      clearTimeout(swiper.scrollbar.dragTimeout);
	
	      $el.transition(0);
	      if (params.hide) {
	        $el.css('opacity', 1);
	      }
	      swiper.emit('scrollbarDragStart', e);
	    },
	    onDragMove: function onDragMove(e) {
	      var swiper = this;
	      var scrollbar = swiper.scrollbar;
	      var $wrapperEl = swiper.$wrapperEl;
	      var $el = scrollbar.$el;
	      var $dragEl = scrollbar.$dragEl;
	
	      if (!swiper.scrollbar.isTouched) { return; }
	      if (e.preventDefault) { e.preventDefault(); }
	      else { e.returnValue = false; }
	      scrollbar.setDragPosition(e);
	      $wrapperEl.transition(0);
	      $el.transition(0);
	      $dragEl.transition(0);
	      swiper.emit('scrollbarDragMove', e);
	    },
	    onDragEnd: function onDragEnd(e) {
	      var swiper = this;
	
	      var params = swiper.params.scrollbar;
	      var scrollbar = swiper.scrollbar;
	      var $el = scrollbar.$el;
	
	      if (!swiper.scrollbar.isTouched) { return; }
	      swiper.scrollbar.isTouched = false;
	      if (params.hide) {
	        clearTimeout(swiper.scrollbar.dragTimeout);
	        swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
	          $el.css('opacity', 0);
	          $el.transition(400);
	        }, 1000);
	      }
	      swiper.emit('scrollbarDragEnd', e);
	      if (params.snapOnRelease) {
	        swiper.slideToClosest();
	      }
	    },
	    enableDraggable: function enableDraggable() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el) { return; }
	      var scrollbar = swiper.scrollbar;
	      var touchEvents = swiper.touchEvents;
	      var touchEventsDesktop = swiper.touchEventsDesktop;
	      var params = swiper.params;
	      var $el = scrollbar.$el;
	      var target = $el[0];
	      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
	      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
	        doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
	        doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
	      } else {
	        if (Support.touch) {
	          target.addEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
	          target.addEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
	          target.addEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
	        }
	        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
	          target.addEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
	          doc.addEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
	          doc.addEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
	        }
	      }
	    },
	    disableDraggable: function disableDraggable() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el) { return; }
	      var scrollbar = swiper.scrollbar;
	      var touchEvents = swiper.touchEvents;
	      var touchEventsDesktop = swiper.touchEventsDesktop;
	      var params = swiper.params;
	      var $el = scrollbar.$el;
	      var target = $el[0];
	      var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
	      var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	      if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
	        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
	        doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
	        doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
	      } else {
	        if (Support.touch) {
	          target.removeEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
	          target.removeEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
	          target.removeEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
	        }
	        if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
	          target.removeEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
	          doc.removeEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
	          doc.removeEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
	        }
	      }
	    },
	    init: function init() {
	      var swiper = this;
	      if (!swiper.params.scrollbar.el) { return; }
	      var scrollbar = swiper.scrollbar;
	      var $swiperEl = swiper.$el;
	      var params = swiper.params.scrollbar;
	
	      var $el = $(params.el);
	      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
	        $el = $swiperEl.find(params.el);
	      }
	
	      var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
	      if ($dragEl.length === 0) {
	        $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
	        $el.append($dragEl);
	      }
	
	      Utils.extend(scrollbar, {
	        $el: $el,
	        el: $el[0],
	        $dragEl: $dragEl,
	        dragEl: $dragEl[0],
	      });
	
	      if (params.draggable) {
	        scrollbar.enableDraggable();
	      }
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      swiper.scrollbar.disableDraggable();
	    },
	  };
	
	  var Scrollbar$1 = {
	    name: 'scrollbar',
	    params: {
	      scrollbar: {
	        el: null,
	        dragSize: 'auto',
	        hide: false,
	        draggable: false,
	        snapOnRelease: true,
	        lockClass: 'swiper-scrollbar-lock',
	        dragClass: 'swiper-scrollbar-drag',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        scrollbar: {
	          init: Scrollbar.init.bind(swiper),
	          destroy: Scrollbar.destroy.bind(swiper),
	          updateSize: Scrollbar.updateSize.bind(swiper),
	          setTranslate: Scrollbar.setTranslate.bind(swiper),
	          setTransition: Scrollbar.setTransition.bind(swiper),
	          enableDraggable: Scrollbar.enableDraggable.bind(swiper),
	          disableDraggable: Scrollbar.disableDraggable.bind(swiper),
	          setDragPosition: Scrollbar.setDragPosition.bind(swiper),
	          onDragStart: Scrollbar.onDragStart.bind(swiper),
	          onDragMove: Scrollbar.onDragMove.bind(swiper),
	          onDragEnd: Scrollbar.onDragEnd.bind(swiper),
	          isTouched: false,
	          timeout: null,
	          dragTimeout: null,
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        swiper.scrollbar.init();
	        swiper.scrollbar.updateSize();
	        swiper.scrollbar.setTranslate();
	      },
	      update: function update() {
	        var swiper = this;
	        swiper.scrollbar.updateSize();
	      },
	      resize: function resize() {
	        var swiper = this;
	        swiper.scrollbar.updateSize();
	      },
	      observerUpdate: function observerUpdate() {
	        var swiper = this;
	        swiper.scrollbar.updateSize();
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        swiper.scrollbar.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        swiper.scrollbar.setTransition(duration);
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.scrollbar.destroy();
	      },
	    },
	  };
	
	  var Parallax = {
	    setTransform: function setTransform(el, progress) {
	      var swiper = this;
	      var rtl = swiper.rtl;
	
	      var $el = $(el);
	      var rtlFactor = rtl ? -1 : 1;
	
	      var p = $el.attr('data-swiper-parallax') || '0';
	      var x = $el.attr('data-swiper-parallax-x');
	      var y = $el.attr('data-swiper-parallax-y');
	      var scale = $el.attr('data-swiper-parallax-scale');
	      var opacity = $el.attr('data-swiper-parallax-opacity');
	
	      if (x || y) {
	        x = x || '0';
	        y = y || '0';
	      } else if (swiper.isHorizontal()) {
	        x = p;
	        y = '0';
	      } else {
	        y = p;
	        x = '0';
	      }
	
	      if ((x).indexOf('%') >= 0) {
	        x = (parseInt(x, 10) * progress * rtlFactor) + "%";
	      } else {
	        x = (x * progress * rtlFactor) + "px";
	      }
	      if ((y).indexOf('%') >= 0) {
	        y = (parseInt(y, 10) * progress) + "%";
	      } else {
	        y = (y * progress) + "px";
	      }
	
	      if (typeof opacity !== 'undefined' && opacity !== null) {
	        var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
	        $el[0].style.opacity = currentOpacity;
	      }
	      if (typeof scale === 'undefined' || scale === null) {
	        $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
	      } else {
	        var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
	        $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
	      }
	    },
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var $el = swiper.$el;
	      var slides = swiper.slides;
	      var progress = swiper.progress;
	      var snapGrid = swiper.snapGrid;
	      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
	        .each(function (index, el) {
	          swiper.parallax.setTransform(el, progress);
	        });
	      slides.each(function (slideIndex, slideEl) {
	        var slideProgress = slideEl.progress;
	        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
	          slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
	        }
	        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
	        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
	          .each(function (index, el) {
	            swiper.parallax.setTransform(el, slideProgress);
	          });
	      });
	    },
	    setTransition: function setTransition(duration) {
	      if ( duration === void 0 ) duration = this.params.speed;
	
	      var swiper = this;
	      var $el = swiper.$el;
	      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
	        .each(function (index, parallaxEl) {
	          var $parallaxEl = $(parallaxEl);
	          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
	          if (duration === 0) { parallaxDuration = 0; }
	          $parallaxEl.transition(parallaxDuration);
	        });
	    },
	  };
	
	  var Parallax$1 = {
	    name: 'parallax',
	    params: {
	      parallax: {
	        enabled: false,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        parallax: {
	          setTransform: Parallax.setTransform.bind(swiper),
	          setTranslate: Parallax.setTranslate.bind(swiper),
	          setTransition: Parallax.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (!swiper.params.parallax.enabled) { return; }
	        swiper.params.watchSlidesProgress = true;
	        swiper.originalParams.watchSlidesProgress = true;
	      },
	      init: function init() {
	        var swiper = this;
	        if (!swiper.params.parallax) { return; }
	        swiper.parallax.setTranslate();
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (!swiper.params.parallax) { return; }
	        swiper.parallax.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (!swiper.params.parallax) { return; }
	        swiper.parallax.setTransition(duration);
	      },
	    },
	  };
	
	  var Zoom = {
	    // Calc Scale From Multi-touches
	    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
	      if (e.targetTouches.length < 2) { return 1; }
	      var x1 = e.targetTouches[0].pageX;
	      var y1 = e.targetTouches[0].pageY;
	      var x2 = e.targetTouches[1].pageX;
	      var y2 = e.targetTouches[1].pageY;
	      var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
	      return distance;
	    },
	    // Events
	    onGestureStart: function onGestureStart(e) {
	      var swiper = this;
	      var params = swiper.params.zoom;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      zoom.fakeGestureTouched = false;
	      zoom.fakeGestureMoved = false;
	      if (!Support.gestures) {
	        if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
	          return;
	        }
	        zoom.fakeGestureTouched = true;
	        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
	      }
	      if (!gesture.$slideEl || !gesture.$slideEl.length) {
	        gesture.$slideEl = $(e.target).closest('.swiper-slide');
	        if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
	        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	        if (gesture.$imageWrapEl.length === 0) {
	          gesture.$imageEl = undefined;
	          return;
	        }
	      }
	      gesture.$imageEl.transition(0);
	      swiper.zoom.isScaling = true;
	    },
	    onGestureChange: function onGestureChange(e) {
	      var swiper = this;
	      var params = swiper.params.zoom;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      if (!Support.gestures) {
	        if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
	          return;
	        }
	        zoom.fakeGestureMoved = true;
	        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
	      }
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      if (Support.gestures) {
	        swiper.zoom.scale = e.scale * zoom.currentScale;
	      } else {
	        zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
	      }
	      if (zoom.scale > gesture.maxRatio) {
	        zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
	      }
	      if (zoom.scale < params.minRatio) {
	        zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
	      }
	      gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
	    },
	    onGestureEnd: function onGestureEnd(e) {
	      var swiper = this;
	      var params = swiper.params.zoom;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      if (!Support.gestures) {
	        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
	          return;
	        }
	        if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
	          return;
	        }
	        zoom.fakeGestureTouched = false;
	        zoom.fakeGestureMoved = false;
	      }
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
	      gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
	      zoom.currentScale = zoom.scale;
	      zoom.isScaling = false;
	      if (zoom.scale === 1) { gesture.$slideEl = undefined; }
	    },
	    onTouchStart: function onTouchStart(e) {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      var image = zoom.image;
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      if (image.isTouched) { return; }
	      if (Device.android) { e.preventDefault(); }
	      image.isTouched = true;
	      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	    },
	    onTouchMove: function onTouchMove(e) {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      var image = zoom.image;
	      var velocity = zoom.velocity;
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      swiper.allowClick = false;
	      if (!image.isTouched || !gesture.$slideEl) { return; }
	
	      if (!image.isMoved) {
	        image.width = gesture.$imageEl[0].offsetWidth;
	        image.height = gesture.$imageEl[0].offsetHeight;
	        image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
	        image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
	        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
	        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
	        gesture.$imageWrapEl.transition(0);
	        if (swiper.rtl) {
	          image.startX = -image.startX;
	          image.startY = -image.startY;
	        }
	      }
	      // Define if we need image drag
	      var scaledWidth = image.width * zoom.scale;
	      var scaledHeight = image.height * zoom.scale;
	
	      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }
	
	      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
	      image.maxX = -image.minX;
	      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
	      image.maxY = -image.minY;
	
	      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	
	      if (!image.isMoved && !zoom.isScaling) {
	        if (
	          swiper.isHorizontal()
	          && (
	            (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
	            || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
	          )
	        ) {
	          image.isTouched = false;
	          return;
	        } if (
	          !swiper.isHorizontal()
	          && (
	            (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
	            || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
	          )
	        ) {
	          image.isTouched = false;
	          return;
	        }
	      }
	      e.preventDefault();
	      e.stopPropagation();
	
	      image.isMoved = true;
	      image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
	      image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;
	
	      if (image.currentX < image.minX) {
	        image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
	      }
	      if (image.currentX > image.maxX) {
	        image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
	      }
	
	      if (image.currentY < image.minY) {
	        image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
	      }
	      if (image.currentY > image.maxY) {
	        image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
	      }
	
	      // Velocity
	      if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
	      if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
	      if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
	      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
	      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
	      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
	      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
	      velocity.prevPositionX = image.touchesCurrent.x;
	      velocity.prevPositionY = image.touchesCurrent.y;
	      velocity.prevTime = Date.now();
	
	      gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
	    },
	    onTouchEnd: function onTouchEnd() {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      var image = zoom.image;
	      var velocity = zoom.velocity;
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	      if (!image.isTouched || !image.isMoved) {
	        image.isTouched = false;
	        image.isMoved = false;
	        return;
	      }
	      image.isTouched = false;
	      image.isMoved = false;
	      var momentumDurationX = 300;
	      var momentumDurationY = 300;
	      var momentumDistanceX = velocity.x * momentumDurationX;
	      var newPositionX = image.currentX + momentumDistanceX;
	      var momentumDistanceY = velocity.y * momentumDurationY;
	      var newPositionY = image.currentY + momentumDistanceY;
	
	      // Fix duration
	      if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
	      if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
	      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
	
	      image.currentX = newPositionX;
	      image.currentY = newPositionY;
	
	      // Define if we need image drag
	      var scaledWidth = image.width * zoom.scale;
	      var scaledHeight = image.height * zoom.scale;
	      image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
	      image.maxX = -image.minX;
	      image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
	      image.maxY = -image.minY;
	      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
	      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
	
	      gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
	    },
	    onTransitionEnd: function onTransitionEnd() {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      var gesture = zoom.gesture;
	      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
	        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
	        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
	        gesture.$slideEl = undefined;
	        gesture.$imageEl = undefined;
	        gesture.$imageWrapEl = undefined;
	
	        zoom.scale = 1;
	        zoom.currentScale = 1;
	      }
	    },
	    // Toggle Zoom
	    toggle: function toggle(e) {
	      var swiper = this;
	      var zoom = swiper.zoom;
	
	      if (zoom.scale && zoom.scale !== 1) {
	        // Zoom Out
	        zoom.out();
	      } else {
	        // Zoom In
	        zoom.in(e);
	      }
	    },
	    in: function in$1(e) {
	      var swiper = this;
	
	      var zoom = swiper.zoom;
	      var params = swiper.params.zoom;
	      var gesture = zoom.gesture;
	      var image = zoom.image;
	
	      if (!gesture.$slideEl) {
	        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
	      }
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	
	      gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));
	
	      var touchX;
	      var touchY;
	      var offsetX;
	      var offsetY;
	      var diffX;
	      var diffY;
	      var translateX;
	      var translateY;
	      var imageWidth;
	      var imageHeight;
	      var scaledWidth;
	      var scaledHeight;
	      var translateMinX;
	      var translateMinY;
	      var translateMaxX;
	      var translateMaxY;
	      var slideWidth;
	      var slideHeight;
	
	      if (typeof image.touchesStart.x === 'undefined' && e) {
	        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
	        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
	      } else {
	        touchX = image.touchesStart.x;
	        touchY = image.touchesStart.y;
	      }
	
	      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	      if (e) {
	        slideWidth = gesture.$slideEl[0].offsetWidth;
	        slideHeight = gesture.$slideEl[0].offsetHeight;
	        offsetX = gesture.$slideEl.offset().left;
	        offsetY = gesture.$slideEl.offset().top;
	        diffX = (offsetX + (slideWidth / 2)) - touchX;
	        diffY = (offsetY + (slideHeight / 2)) - touchY;
	
	        imageWidth = gesture.$imageEl[0].offsetWidth;
	        imageHeight = gesture.$imageEl[0].offsetHeight;
	        scaledWidth = imageWidth * zoom.scale;
	        scaledHeight = imageHeight * zoom.scale;
	
	        translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
	        translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
	        translateMaxX = -translateMinX;
	        translateMaxY = -translateMinY;
	
	        translateX = diffX * zoom.scale;
	        translateY = diffY * zoom.scale;
	
	        if (translateX < translateMinX) {
	          translateX = translateMinX;
	        }
	        if (translateX > translateMaxX) {
	          translateX = translateMaxX;
	        }
	
	        if (translateY < translateMinY) {
	          translateY = translateMinY;
	        }
	        if (translateY > translateMaxY) {
	          translateY = translateMaxY;
	        }
	      } else {
	        translateX = 0;
	        translateY = 0;
	      }
	      gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
	      gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
	    },
	    out: function out() {
	      var swiper = this;
	
	      var zoom = swiper.zoom;
	      var params = swiper.params.zoom;
	      var gesture = zoom.gesture;
	
	      if (!gesture.$slideEl) {
	        gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
	        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	        gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
	      }
	      if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
	
	      zoom.scale = 1;
	      zoom.currentScale = 1;
	      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
	      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
	      gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
	      gesture.$slideEl = undefined;
	    },
	    // Attach/Detach Events
	    enable: function enable() {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      if (zoom.enabled) { return; }
	      zoom.enabled = true;
	
	      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
	
	      // Scale image
	      if (Support.gestures) {
	        swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
	        swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
	        swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      } else if (swiper.touchEvents.start === 'touchstart') {
	        swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
	        swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
	        swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      }
	
	      // Move image
	      swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
	    },
	    disable: function disable() {
	      var swiper = this;
	      var zoom = swiper.zoom;
	      if (!zoom.enabled) { return; }
	
	      swiper.zoom.enabled = false;
	
	      var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
	
	      // Scale image
	      if (Support.gestures) {
	        swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
	        swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
	        swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      } else if (swiper.touchEvents.start === 'touchstart') {
	        swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
	        swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
	        swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      }
	
	      // Move image
	      swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
	    },
	  };
	
	  var Zoom$1 = {
	    name: 'zoom',
	    params: {
	      zoom: {
	        enabled: false,
	        maxRatio: 3,
	        minRatio: 1,
	        toggle: true,
	        containerClass: 'swiper-zoom-container',
	        zoomedSlideClass: 'swiper-slide-zoomed',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      var zoom = {
	        enabled: false,
	        scale: 1,
	        currentScale: 1,
	        isScaling: false,
	        gesture: {
	          $slideEl: undefined,
	          slideWidth: undefined,
	          slideHeight: undefined,
	          $imageEl: undefined,
	          $imageWrapEl: undefined,
	          maxRatio: 3,
	        },
	        image: {
	          isTouched: undefined,
	          isMoved: undefined,
	          currentX: undefined,
	          currentY: undefined,
	          minX: undefined,
	          minY: undefined,
	          maxX: undefined,
	          maxY: undefined,
	          width: undefined,
	          height: undefined,
	          startX: undefined,
	          startY: undefined,
	          touchesStart: {},
	          touchesCurrent: {},
	        },
	        velocity: {
	          x: undefined,
	          y: undefined,
	          prevPositionX: undefined,
	          prevPositionY: undefined,
	          prevTime: undefined,
	        },
	      };
	      ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
	        zoom[methodName] = Zoom[methodName].bind(swiper);
	      });
	      Utils.extend(swiper, {
	        zoom: zoom,
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.zoom.enabled) {
	          swiper.zoom.enable();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        swiper.zoom.disable();
	      },
	      touchStart: function touchStart(e) {
	        var swiper = this;
	        if (!swiper.zoom.enabled) { return; }
	        swiper.zoom.onTouchStart(e);
	      },
	      touchEnd: function touchEnd(e) {
	        var swiper = this;
	        if (!swiper.zoom.enabled) { return; }
	        swiper.zoom.onTouchEnd(e);
	      },
	      doubleTap: function doubleTap(e) {
	        var swiper = this;
	        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
	          swiper.zoom.toggle(e);
	        }
	      },
	      transitionEnd: function transitionEnd() {
	        var swiper = this;
	        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
	          swiper.zoom.onTransitionEnd();
	        }
	      },
	    },
	  };
	
	  var Lazy = {
	    loadInSlide: function loadInSlide(index, loadInDuplicate) {
	      if ( loadInDuplicate === void 0 ) loadInDuplicate = true;
	
	      var swiper = this;
	      var params = swiper.params.lazy;
	      if (typeof index === 'undefined') { return; }
	      if (swiper.slides.length === 0) { return; }
	      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	
	      var $slideEl = isVirtual
	        ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
	        : swiper.slides.eq(index);
	
	      var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
	      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
	        $images = $images.add($slideEl[0]);
	      }
	      if ($images.length === 0) { return; }
	
	      $images.each(function (imageIndex, imageEl) {
	        var $imageEl = $(imageEl);
	        $imageEl.addClass(params.loadingClass);
	
	        var background = $imageEl.attr('data-background');
	        var src = $imageEl.attr('data-src');
	        var srcset = $imageEl.attr('data-srcset');
	        var sizes = $imageEl.attr('data-sizes');
	
	        swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
	          if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
	          if (background) {
	            $imageEl.css('background-image', ("url(\"" + background + "\")"));
	            $imageEl.removeAttr('data-background');
	          } else {
	            if (srcset) {
	              $imageEl.attr('srcset', srcset);
	              $imageEl.removeAttr('data-srcset');
	            }
	            if (sizes) {
	              $imageEl.attr('sizes', sizes);
	              $imageEl.removeAttr('data-sizes');
	            }
	            if (src) {
	              $imageEl.attr('src', src);
	              $imageEl.removeAttr('data-src');
	            }
	          }
	
	          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
	          $slideEl.find(("." + (params.preloaderClass))).remove();
	          if (swiper.params.loop && loadInDuplicate) {
	            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
	            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
	              var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
	              swiper.lazy.loadInSlide(originalSlide.index(), false);
	            } else {
	              var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
	              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
	            }
	          }
	          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
	        });
	
	        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
	      });
	    },
	    load: function load() {
	      var swiper = this;
	      var $wrapperEl = swiper.$wrapperEl;
	      var swiperParams = swiper.params;
	      var slides = swiper.slides;
	      var activeIndex = swiper.activeIndex;
	      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
	      var params = swiperParams.lazy;
	
	      var slidesPerView = swiperParams.slidesPerView;
	      if (slidesPerView === 'auto') {
	        slidesPerView = 0;
	      }
	
	      function slideExist(index) {
	        if (isVirtual) {
	          if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
	            return true;
	          }
	        } else if (slides[index]) { return true; }
	        return false;
	      }
	      function slideIndex(slideEl) {
	        if (isVirtual) {
	          return $(slideEl).attr('data-swiper-slide-index');
	        }
	        return $(slideEl).index();
	      }
	
	      if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
	      if (swiper.params.watchSlidesVisibility) {
	        $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
	          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
	          swiper.lazy.loadInSlide(index);
	        });
	      } else if (slidesPerView > 1) {
	        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
	          if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
	        }
	      } else {
	        swiper.lazy.loadInSlide(activeIndex);
	      }
	      if (params.loadPrevNext) {
	        if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
	          var amount = params.loadPrevNextAmount;
	          var spv = slidesPerView;
	          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
	          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
	          // Next Slides
	          for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
	            if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
	          }
	          // Prev Slides
	          for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
	            if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
	          }
	        } else {
	          var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
	          if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }
	
	          var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
	          if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
	        }
	      }
	    },
	  };
	
	  var Lazy$1 = {
	    name: 'lazy',
	    params: {
	      lazy: {
	        enabled: false,
	        loadPrevNext: false,
	        loadPrevNextAmount: 1,
	        loadOnTransitionStart: false,
	
	        elementClass: 'swiper-lazy',
	        loadingClass: 'swiper-lazy-loading',
	        loadedClass: 'swiper-lazy-loaded',
	        preloaderClass: 'swiper-lazy-preloader',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        lazy: {
	          initialImageLoaded: false,
	          load: Lazy.load.bind(swiper),
	          loadInSlide: Lazy.loadInSlide.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
	          swiper.params.preloadImages = false;
	        }
	      },
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
	          swiper.lazy.load();
	        }
	      },
	      scroll: function scroll() {
	        var swiper = this;
	        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
	          swiper.lazy.load();
	        }
	      },
	      resize: function resize() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled) {
	          swiper.lazy.load();
	        }
	      },
	      scrollbarDragMove: function scrollbarDragMove() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled) {
	          swiper.lazy.load();
	        }
	      },
	      transitionStart: function transitionStart() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled) {
	          if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
	            swiper.lazy.load();
	          }
	        }
	      },
	      transitionEnd: function transitionEnd() {
	        var swiper = this;
	        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
	          swiper.lazy.load();
	        }
	      },
	    },
	  };
	
	  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
	
	  var Controller = {
	    LinearSpline: function LinearSpline(x, y) {
	      var binarySearch = (function search() {
	        var maxIndex;
	        var minIndex;
	        var guess;
	        return function (array, val) {
	          minIndex = -1;
	          maxIndex = array.length;
	          while (maxIndex - minIndex > 1) {
	            guess = maxIndex + minIndex >> 1;
	            if (array[guess] <= val) {
	              minIndex = guess;
	            } else {
	              maxIndex = guess;
	            }
	          }
	          return maxIndex;
	        };
	      }());
	      this.x = x;
	      this.y = y;
	      this.lastIndex = x.length - 1;
	      // Given an x value (x2), return the expected y2 value:
	      // (x1,y1) is the known point before given value,
	      // (x3,y3) is the known point after given value.
	      var i1;
	      var i3;
	
	      this.interpolate = function interpolate(x2) {
	        if (!x2) { return 0; }
	
	        // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	        i3 = binarySearch(this.x, x2);
	        i1 = i3 - 1;
	
	        // We have our indexes i1 & i3, so we can calculate already:
	        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	        return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
	      };
	      return this;
	    },
	    // xxx: for now i will just save one spline function to to
	    getInterpolateFunction: function getInterpolateFunction(c) {
	      var swiper = this;
	      if (!swiper.controller.spline) {
	        swiper.controller.spline = swiper.params.loop
	          ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
	          : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
	      }
	    },
	    setTranslate: function setTranslate(setTranslate$1, byController) {
	      var swiper = this;
	      var controlled = swiper.controller.control;
	      var multiplier;
	      var controlledTranslate;
	      function setControlledTranslate(c) {
	        // this will create an Interpolate function based on the snapGrids
	        // x is the Grid of the scrolled scroller and y will be the controlled scroller
	        // it makes sense to create this only once and recall it for the interpolation
	        // the function does a lot of value caching for performance
	        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
	        if (swiper.params.controller.by === 'slide') {
	          swiper.controller.getInterpolateFunction(c);
	          // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	          // but it did not work out
	          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
	        }
	
	        if (!controlledTranslate || swiper.params.controller.by === 'container') {
	          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
	          controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
	        }
	
	        if (swiper.params.controller.inverse) {
	          controlledTranslate = c.maxTranslate() - controlledTranslate;
	        }
	        c.updateProgress(controlledTranslate);
	        c.setTranslate(controlledTranslate, swiper);
	        c.updateActiveIndex();
	        c.updateSlidesClasses();
	      }
	      if (Array.isArray(controlled)) {
	        for (var i = 0; i < controlled.length; i += 1) {
	          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	            setControlledTranslate(controlled[i]);
	          }
	        }
	      } else if (controlled instanceof Swiper && byController !== controlled) {
	        setControlledTranslate(controlled);
	      }
	    },
	    setTransition: function setTransition(duration, byController) {
	      var swiper = this;
	      var controlled = swiper.controller.control;
	      var i;
	      function setControlledTransition(c) {
	        c.setTransition(duration, swiper);
	        if (duration !== 0) {
	          c.transitionStart();
	          if (c.params.autoHeight) {
	            Utils.nextTick(function () {
	              c.updateAutoHeight();
	            });
	          }
	          c.$wrapperEl.transitionEnd(function () {
	            if (!controlled) { return; }
	            if (c.params.loop && swiper.params.controller.by === 'slide') {
	              c.loopFix();
	            }
	            c.transitionEnd();
	          });
	        }
	      }
	      if (Array.isArray(controlled)) {
	        for (i = 0; i < controlled.length; i += 1) {
	          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	            setControlledTransition(controlled[i]);
	          }
	        }
	      } else if (controlled instanceof Swiper && byController !== controlled) {
	        setControlledTransition(controlled);
	      }
	    },
	  };
	  var Controller$1 = {
	    name: 'controller',
	    params: {
	      controller: {
	        control: undefined,
	        inverse: false,
	        by: 'slide', // or 'container'
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        controller: {
	          control: swiper.params.controller.control,
	          getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
	          setTranslate: Controller.setTranslate.bind(swiper),
	          setTransition: Controller.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      update: function update() {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        if (swiper.controller.spline) {
	          swiper.controller.spline = undefined;
	          delete swiper.controller.spline;
	        }
	      },
	      resize: function resize() {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        if (swiper.controller.spline) {
	          swiper.controller.spline = undefined;
	          delete swiper.controller.spline;
	        }
	      },
	      observerUpdate: function observerUpdate() {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        if (swiper.controller.spline) {
	          swiper.controller.spline = undefined;
	          delete swiper.controller.spline;
	        }
	      },
	      setTranslate: function setTranslate(translate, byController) {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        swiper.controller.setTranslate(translate, byController);
	      },
	      setTransition: function setTransition(duration, byController) {
	        var swiper = this;
	        if (!swiper.controller.control) { return; }
	        swiper.controller.setTransition(duration, byController);
	      },
	    },
	  };
	
	  var a11y = {
	    makeElFocusable: function makeElFocusable($el) {
	      $el.attr('tabIndex', '0');
	      return $el;
	    },
	    addElRole: function addElRole($el, role) {
	      $el.attr('role', role);
	      return $el;
	    },
	    addElLabel: function addElLabel($el, label) {
	      $el.attr('aria-label', label);
	      return $el;
	    },
	    disableEl: function disableEl($el) {
	      $el.attr('aria-disabled', true);
	      return $el;
	    },
	    enableEl: function enableEl($el) {
	      $el.attr('aria-disabled', false);
	      return $el;
	    },
	    onEnterKey: function onEnterKey(e) {
	      var swiper = this;
	      var params = swiper.params.a11y;
	      if (e.keyCode !== 13) { return; }
	      var $targetEl = $(e.target);
	      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
	        if (!(swiper.isEnd && !swiper.params.loop)) {
	          swiper.slideNext();
	        }
	        if (swiper.isEnd) {
	          swiper.a11y.notify(params.lastSlideMessage);
	        } else {
	          swiper.a11y.notify(params.nextSlideMessage);
	        }
	      }
	      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
	        if (!(swiper.isBeginning && !swiper.params.loop)) {
	          swiper.slidePrev();
	        }
	        if (swiper.isBeginning) {
	          swiper.a11y.notify(params.firstSlideMessage);
	        } else {
	          swiper.a11y.notify(params.prevSlideMessage);
	        }
	      }
	      if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
	        $targetEl[0].click();
	      }
	    },
	    notify: function notify(message) {
	      var swiper = this;
	      var notification = swiper.a11y.liveRegion;
	      if (notification.length === 0) { return; }
	      notification.html('');
	      notification.html(message);
	    },
	    updateNavigation: function updateNavigation() {
	      var swiper = this;
	
	      if (swiper.params.loop) { return; }
	      var ref = swiper.navigation;
	      var $nextEl = ref.$nextEl;
	      var $prevEl = ref.$prevEl;
	
	      if ($prevEl && $prevEl.length > 0) {
	        if (swiper.isBeginning) {
	          swiper.a11y.disableEl($prevEl);
	        } else {
	          swiper.a11y.enableEl($prevEl);
	        }
	      }
	      if ($nextEl && $nextEl.length > 0) {
	        if (swiper.isEnd) {
	          swiper.a11y.disableEl($nextEl);
	        } else {
	          swiper.a11y.enableEl($nextEl);
	        }
	      }
	    },
	    updatePagination: function updatePagination() {
	      var swiper = this;
	      var params = swiper.params.a11y;
	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	        swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
	          var $bulletEl = $(bulletEl);
	          swiper.a11y.makeElFocusable($bulletEl);
	          swiper.a11y.addElRole($bulletEl, 'button');
	          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
	        });
	      }
	    },
	    init: function init() {
	      var swiper = this;
	
	      swiper.$el.append(swiper.a11y.liveRegion);
	
	      // Navigation
	      var params = swiper.params.a11y;
	      var $nextEl;
	      var $prevEl;
	      if (swiper.navigation && swiper.navigation.$nextEl) {
	        $nextEl = swiper.navigation.$nextEl;
	      }
	      if (swiper.navigation && swiper.navigation.$prevEl) {
	        $prevEl = swiper.navigation.$prevEl;
	      }
	      if ($nextEl) {
	        swiper.a11y.makeElFocusable($nextEl);
	        swiper.a11y.addElRole($nextEl, 'button');
	        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
	        $nextEl.on('keydown', swiper.a11y.onEnterKey);
	      }
	      if ($prevEl) {
	        swiper.a11y.makeElFocusable($prevEl);
	        swiper.a11y.addElRole($prevEl, 'button');
	        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
	        $prevEl.on('keydown', swiper.a11y.onEnterKey);
	      }
	
	      // Pagination
	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	        swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
	      }
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }
	
	      var $nextEl;
	      var $prevEl;
	      if (swiper.navigation && swiper.navigation.$nextEl) {
	        $nextEl = swiper.navigation.$nextEl;
	      }
	      if (swiper.navigation && swiper.navigation.$prevEl) {
	        $prevEl = swiper.navigation.$prevEl;
	      }
	      if ($nextEl) {
	        $nextEl.off('keydown', swiper.a11y.onEnterKey);
	      }
	      if ($prevEl) {
	        $prevEl.off('keydown', swiper.a11y.onEnterKey);
	      }
	
	      // Pagination
	      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	        swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
	      }
	    },
	  };
	  var A11y = {
	    name: 'a11y',
	    params: {
	      a11y: {
	        enabled: true,
	        notificationClass: 'swiper-notification',
	        prevSlideMessage: 'Previous slide',
	        nextSlideMessage: 'Next slide',
	        firstSlideMessage: 'This is the first slide',
	        lastSlideMessage: 'This is the last slide',
	        paginationBulletMessage: 'Go to slide {{index}}',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        a11y: {
	          liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
	        },
	      });
	      Object.keys(a11y).forEach(function (methodName) {
	        swiper.a11y[methodName] = a11y[methodName].bind(swiper);
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.init();
	        swiper.a11y.updateNavigation();
	      },
	      toEdge: function toEdge() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.updateNavigation();
	      },
	      fromEdge: function fromEdge() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.updateNavigation();
	      },
	      paginationUpdate: function paginationUpdate() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.updatePagination();
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (!swiper.params.a11y.enabled) { return; }
	        swiper.a11y.destroy();
	      },
	    },
	  };
	
	  var History = {
	    init: function init() {
	      var swiper = this;
	      if (!swiper.params.history) { return; }
	      if (!win.history || !win.history.pushState) {
	        swiper.params.history.enabled = false;
	        swiper.params.hashNavigation.enabled = true;
	        return;
	      }
	      var history = swiper.history;
	      history.initialized = true;
	      history.paths = History.getPathValues();
	      if (!history.paths.key && !history.paths.value) { return; }
	      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
	      if (!swiper.params.history.replaceState) {
	        win.addEventListener('popstate', swiper.history.setHistoryPopState);
	      }
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      if (!swiper.params.history.replaceState) {
	        win.removeEventListener('popstate', swiper.history.setHistoryPopState);
	      }
	    },
	    setHistoryPopState: function setHistoryPopState() {
	      var swiper = this;
	      swiper.history.paths = History.getPathValues();
	      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
	    },
	    getPathValues: function getPathValues() {
	      var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
	      var total = pathArray.length;
	      var key = pathArray[total - 2];
	      var value = pathArray[total - 1];
	      return { key: key, value: value };
	    },
	    setHistory: function setHistory(key, index) {
	      var swiper = this;
	      if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
	      var slide = swiper.slides.eq(index);
	      var value = History.slugify(slide.attr('data-history'));
	      if (!win.location.pathname.includes(key)) {
	        value = key + "/" + value;
	      }
	      var currentState = win.history.state;
	      if (currentState && currentState.value === value) {
	        return;
	      }
	      if (swiper.params.history.replaceState) {
	        win.history.replaceState({ value: value }, null, value);
	      } else {
	        win.history.pushState({ value: value }, null, value);
	      }
	    },
	    slugify: function slugify(text) {
	      return text.toString().toLowerCase()
	        .replace(/\s+/g, '-')
	        .replace(/[^\w-]+/g, '')
	        .replace(/--+/g, '-')
	        .replace(/^-+/, '')
	        .replace(/-+$/, '');
	    },
	    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
	      var swiper = this;
	      if (value) {
	        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
	          var slide = swiper.slides.eq(i);
	          var slideHistory = History.slugify(slide.attr('data-history'));
	          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
	            var index = slide.index();
	            swiper.slideTo(index, speed, runCallbacks);
	          }
	        }
	      } else {
	        swiper.slideTo(0, speed, runCallbacks);
	      }
	    },
	  };
	
	  var History$1 = {
	    name: 'history',
	    params: {
	      history: {
	        enabled: false,
	        replaceState: false,
	        key: 'slides',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        history: {
	          init: History.init.bind(swiper),
	          setHistory: History.setHistory.bind(swiper),
	          setHistoryPopState: History.setHistoryPopState.bind(swiper),
	          scrollToSlide: History.scrollToSlide.bind(swiper),
	          destroy: History.destroy.bind(swiper),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.history.enabled) {
	          swiper.history.init();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.params.history.enabled) {
	          swiper.history.destroy();
	        }
	      },
	      transitionEnd: function transitionEnd() {
	        var swiper = this;
	        if (swiper.history.initialized) {
	          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
	        }
	      },
	    },
	  };
	
	  var HashNavigation = {
	    onHashCange: function onHashCange() {
	      var swiper = this;
	      var newHash = doc.location.hash.replace('#', '');
	      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
	      if (newHash !== activeSlideHash) {
	        var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
	        if (typeof newIndex === 'undefined') { return; }
	        swiper.slideTo(newIndex);
	      }
	    },
	    setHash: function setHash() {
	      var swiper = this;
	      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
	      if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
	        win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
	      } else {
	        var slide = swiper.slides.eq(swiper.activeIndex);
	        var hash = slide.attr('data-hash') || slide.attr('data-history');
	        doc.location.hash = hash || '';
	      }
	    },
	    init: function init() {
	      var swiper = this;
	      if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
	      swiper.hashNavigation.initialized = true;
	      var hash = doc.location.hash.replace('#', '');
	      if (hash) {
	        var speed = 0;
	        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
	          var slide = swiper.slides.eq(i);
	          var slideHash = slide.attr('data-hash') || slide.attr('data-history');
	          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
	            var index = slide.index();
	            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
	          }
	        }
	      }
	      if (swiper.params.hashNavigation.watchState) {
	        $(win).on('hashchange', swiper.hashNavigation.onHashCange);
	      }
	    },
	    destroy: function destroy() {
	      var swiper = this;
	      if (swiper.params.hashNavigation.watchState) {
	        $(win).off('hashchange', swiper.hashNavigation.onHashCange);
	      }
	    },
	  };
	  var HashNavigation$1 = {
	    name: 'hash-navigation',
	    params: {
	      hashNavigation: {
	        enabled: false,
	        replaceState: false,
	        watchState: false,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        hashNavigation: {
	          initialized: false,
	          init: HashNavigation.init.bind(swiper),
	          destroy: HashNavigation.destroy.bind(swiper),
	          setHash: HashNavigation.setHash.bind(swiper),
	          onHashCange: HashNavigation.onHashCange.bind(swiper),
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.hashNavigation.enabled) {
	          swiper.hashNavigation.init();
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.params.hashNavigation.enabled) {
	          swiper.hashNavigation.destroy();
	        }
	      },
	      transitionEnd: function transitionEnd() {
	        var swiper = this;
	        if (swiper.hashNavigation.initialized) {
	          swiper.hashNavigation.setHash();
	        }
	      },
	    },
	  };
	
	  /* eslint no-underscore-dangle: "off" */
	
	  var Autoplay = {
	    run: function run() {
	      var swiper = this;
	      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
	      var delay = swiper.params.autoplay.delay;
	      if ($activeSlideEl.attr('data-swiper-autoplay')) {
	        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
	      }
	      swiper.autoplay.timeout = Utils.nextTick(function () {
	        if (swiper.params.autoplay.reverseDirection) {
	          if (swiper.params.loop) {
	            swiper.loopFix();
	            swiper.slidePrev(swiper.params.speed, true, true);
	            swiper.emit('autoplay');
	          } else if (!swiper.isBeginning) {
	            swiper.slidePrev(swiper.params.speed, true, true);
	            swiper.emit('autoplay');
	          } else if (!swiper.params.autoplay.stopOnLastSlide) {
	            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
	            swiper.emit('autoplay');
	          } else {
	            swiper.autoplay.stop();
	          }
	        } else if (swiper.params.loop) {
	          swiper.loopFix();
	          swiper.slideNext(swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else if (!swiper.isEnd) {
	          swiper.slideNext(swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else if (!swiper.params.autoplay.stopOnLastSlide) {
	          swiper.slideTo(0, swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else {
	          swiper.autoplay.stop();
	        }
	      }, delay);
	    },
	    start: function start() {
	      var swiper = this;
	      if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
	      if (swiper.autoplay.running) { return false; }
	      swiper.autoplay.running = true;
	      swiper.emit('autoplayStart');
	      swiper.autoplay.run();
	      return true;
	    },
	    stop: function stop() {
	      var swiper = this;
	      if (!swiper.autoplay.running) { return false; }
	      if (typeof swiper.autoplay.timeout === 'undefined') { return false; }
	
	      if (swiper.autoplay.timeout) {
	        clearTimeout(swiper.autoplay.timeout);
	        swiper.autoplay.timeout = undefined;
	      }
	      swiper.autoplay.running = false;
	      swiper.emit('autoplayStop');
	      return true;
	    },
	    pause: function pause(speed) {
	      var swiper = this;
	      if (!swiper.autoplay.running) { return; }
	      if (swiper.autoplay.paused) { return; }
	      if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
	      swiper.autoplay.paused = true;
	      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
	        swiper.autoplay.paused = false;
	        swiper.autoplay.run();
	      } else {
	        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
	        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
	      }
	    },
	  };
	
	  var Autoplay$1 = {
	    name: 'autoplay',
	    params: {
	      autoplay: {
	        enabled: false,
	        delay: 3000,
	        waitForTransition: true,
	        disableOnInteraction: true,
	        stopOnLastSlide: false,
	        reverseDirection: false,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        autoplay: {
	          running: false,
	          paused: false,
	          run: Autoplay.run.bind(swiper),
	          start: Autoplay.start.bind(swiper),
	          stop: Autoplay.stop.bind(swiper),
	          pause: Autoplay.pause.bind(swiper),
	          onTransitionEnd: function onTransitionEnd(e) {
	            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
	            if (e.target !== this) { return; }
	            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
	            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
	            swiper.autoplay.paused = false;
	            if (!swiper.autoplay.running) {
	              swiper.autoplay.stop();
	            } else {
	              swiper.autoplay.run();
	            }
	          },
	        },
	      });
	    },
	    on: {
	      init: function init() {
	        var swiper = this;
	        if (swiper.params.autoplay.enabled) {
	          swiper.autoplay.start();
	        }
	      },
	      beforeTransitionStart: function beforeTransitionStart(speed, internal) {
	        var swiper = this;
	        if (swiper.autoplay.running) {
	          if (internal || !swiper.params.autoplay.disableOnInteraction) {
	            swiper.autoplay.pause(speed);
	          } else {
	            swiper.autoplay.stop();
	          }
	        }
	      },
	      sliderFirstMove: function sliderFirstMove() {
	        var swiper = this;
	        if (swiper.autoplay.running) {
	          if (swiper.params.autoplay.disableOnInteraction) {
	            swiper.autoplay.stop();
	          } else {
	            swiper.autoplay.pause();
	          }
	        }
	      },
	      destroy: function destroy() {
	        var swiper = this;
	        if (swiper.autoplay.running) {
	          swiper.autoplay.stop();
	        }
	      },
	    },
	  };
	
	  var Fade = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var slides = swiper.slides;
	      for (var i = 0; i < slides.length; i += 1) {
	        var $slideEl = swiper.slides.eq(i);
	        var offset = $slideEl[0].swiperSlideOffset;
	        var tx = -offset;
	        if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
	        var ty = 0;
	        if (!swiper.isHorizontal()) {
	          ty = tx;
	          tx = 0;
	        }
	        var slideOpacity = swiper.params.fadeEffect.crossFade
	          ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
	          : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
	        $slideEl
	          .css({
	            opacity: slideOpacity,
	          })
	          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
	      }
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      var slides = swiper.slides;
	      var $wrapperEl = swiper.$wrapperEl;
	      slides.transition(duration);
	      if (swiper.params.virtualTranslate && duration !== 0) {
	        var eventTriggered = false;
	        slides.transitionEnd(function () {
	          if (eventTriggered) { return; }
	          if (!swiper || swiper.destroyed) { return; }
	          eventTriggered = true;
	          swiper.animating = false;
	          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
	          for (var i = 0; i < triggerEvents.length; i += 1) {
	            $wrapperEl.trigger(triggerEvents[i]);
	          }
	        });
	      }
	    },
	  };
	
	  var EffectFade = {
	    name: 'effect-fade',
	    params: {
	      fadeEffect: {
	        crossFade: false,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        fadeEffect: {
	          setTranslate: Fade.setTranslate.bind(swiper),
	          setTransition: Fade.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.effect !== 'fade') { return; }
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
	        var overwriteParams = {
	          slidesPerView: 1,
	          slidesPerColumn: 1,
	          slidesPerGroup: 1,
	          watchSlidesProgress: true,
	          spaceBetween: 0,
	          virtualTranslate: true,
	        };
	        Utils.extend(swiper.params, overwriteParams);
	        Utils.extend(swiper.originalParams, overwriteParams);
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (swiper.params.effect !== 'fade') { return; }
	        swiper.fadeEffect.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (swiper.params.effect !== 'fade') { return; }
	        swiper.fadeEffect.setTransition(duration);
	      },
	    },
	  };
	
	  var Cube = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var $el = swiper.$el;
	      var $wrapperEl = swiper.$wrapperEl;
	      var slides = swiper.slides;
	      var swiperWidth = swiper.width;
	      var swiperHeight = swiper.height;
	      var rtl = swiper.rtlTranslate;
	      var swiperSize = swiper.size;
	      var params = swiper.params.cubeEffect;
	      var isHorizontal = swiper.isHorizontal();
	      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	      var wrapperRotate = 0;
	      var $cubeShadowEl;
	      if (params.shadow) {
	        if (isHorizontal) {
	          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
	          if ($cubeShadowEl.length === 0) {
	            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
	            $wrapperEl.append($cubeShadowEl);
	          }
	          $cubeShadowEl.css({ height: (swiperWidth + "px") });
	        } else {
	          $cubeShadowEl = $el.find('.swiper-cube-shadow');
	          if ($cubeShadowEl.length === 0) {
	            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
	            $el.append($cubeShadowEl);
	          }
	        }
	      }
	      for (var i = 0; i < slides.length; i += 1) {
	        var $slideEl = slides.eq(i);
	        var slideIndex = i;
	        if (isVirtual) {
	          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
	        }
	        var slideAngle = slideIndex * 90;
	        var round = Math.floor(slideAngle / 360);
	        if (rtl) {
	          slideAngle = -slideAngle;
	          round = Math.floor(-slideAngle / 360);
	        }
	        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
	        var tx = 0;
	        var ty = 0;
	        var tz = 0;
	        if (slideIndex % 4 === 0) {
	          tx = -round * 4 * swiperSize;
	          tz = 0;
	        } else if ((slideIndex - 1) % 4 === 0) {
	          tx = 0;
	          tz = -round * 4 * swiperSize;
	        } else if ((slideIndex - 2) % 4 === 0) {
	          tx = swiperSize + (round * 4 * swiperSize);
	          tz = swiperSize;
	        } else if ((slideIndex - 3) % 4 === 0) {
	          tx = -swiperSize;
	          tz = (3 * swiperSize) + (swiperSize * 4 * round);
	        }
	        if (rtl) {
	          tx = -tx;
	        }
	
	        if (!isHorizontal) {
	          ty = tx;
	          tx = 0;
	        }
	
	        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
	        if (progress <= 1 && progress > -1) {
	          wrapperRotate = (slideIndex * 90) + (progress * 90);
	          if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
	        }
	        $slideEl.transform(transform);
	        if (params.slideShadows) {
	          // Set shadows
	          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	          if (shadowBefore.length === 0) {
	            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
	            $slideEl.append(shadowBefore);
	          }
	          if (shadowAfter.length === 0) {
	            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
	            $slideEl.append(shadowAfter);
	          }
	          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
	          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
	        }
	      }
	      $wrapperEl.css({
	        '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
	        '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
	        '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
	        'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
	      });
	
	      if (params.shadow) {
	        if (isHorizontal) {
	          $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
	        } else {
	          var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
	          var multiplier = 1.5 - (
	            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
	            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
	          );
	          var scale1 = params.shadowScale;
	          var scale2 = params.shadowScale / multiplier;
	          var offset = params.shadowOffset;
	          $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
	        }
	      }
	      var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
	      $wrapperEl
	        .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      var $el = swiper.$el;
	      var slides = swiper.slides;
	      slides
	        .transition(duration)
	        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	        .transition(duration);
	      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
	        $el.find('.swiper-cube-shadow').transition(duration);
	      }
	    },
	  };
	
	  var EffectCube = {
	    name: 'effect-cube',
	    params: {
	      cubeEffect: {
	        slideShadows: true,
	        shadow: true,
	        shadowOffset: 20,
	        shadowScale: 0.94,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        cubeEffect: {
	          setTranslate: Cube.setTranslate.bind(swiper),
	          setTransition: Cube.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.effect !== 'cube') { return; }
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
	        var overwriteParams = {
	          slidesPerView: 1,
	          slidesPerColumn: 1,
	          slidesPerGroup: 1,
	          watchSlidesProgress: true,
	          resistanceRatio: 0,
	          spaceBetween: 0,
	          centeredSlides: false,
	          virtualTranslate: true,
	        };
	        Utils.extend(swiper.params, overwriteParams);
	        Utils.extend(swiper.originalParams, overwriteParams);
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (swiper.params.effect !== 'cube') { return; }
	        swiper.cubeEffect.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (swiper.params.effect !== 'cube') { return; }
	        swiper.cubeEffect.setTransition(duration);
	      },
	    },
	  };
	
	  var Flip = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var slides = swiper.slides;
	      var rtl = swiper.rtlTranslate;
	      for (var i = 0; i < slides.length; i += 1) {
	        var $slideEl = slides.eq(i);
	        var progress = $slideEl[0].progress;
	        if (swiper.params.flipEffect.limitRotation) {
	          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
	        }
	        var offset = $slideEl[0].swiperSlideOffset;
	        var rotate = -180 * progress;
	        var rotateY = rotate;
	        var rotateX = 0;
	        var tx = -offset;
	        var ty = 0;
	        if (!swiper.isHorizontal()) {
	          ty = tx;
	          tx = 0;
	          rotateX = -rotateY;
	          rotateY = 0;
	        } else if (rtl) {
	          rotateY = -rotateY;
	        }
	
	        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
	
	        if (swiper.params.flipEffect.slideShadows) {
	          // Set shadows
	          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	          if (shadowBefore.length === 0) {
	            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
	            $slideEl.append(shadowBefore);
	          }
	          if (shadowAfter.length === 0) {
	            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
	            $slideEl.append(shadowAfter);
	          }
	          if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
	          if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
	        }
	        $slideEl
	          .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
	      }
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      var slides = swiper.slides;
	      var activeIndex = swiper.activeIndex;
	      var $wrapperEl = swiper.$wrapperEl;
	      slides
	        .transition(duration)
	        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	        .transition(duration);
	      if (swiper.params.virtualTranslate && duration !== 0) {
	        var eventTriggered = false;
	        // eslint-disable-next-line
	        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
	          if (eventTriggered) { return; }
	          if (!swiper || swiper.destroyed) { return; }
	          // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
	          eventTriggered = true;
	          swiper.animating = false;
	          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
	          for (var i = 0; i < triggerEvents.length; i += 1) {
	            $wrapperEl.trigger(triggerEvents[i]);
	          }
	        });
	      }
	    },
	  };
	
	  var EffectFlip = {
	    name: 'effect-flip',
	    params: {
	      flipEffect: {
	        slideShadows: true,
	        limitRotation: true,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        flipEffect: {
	          setTranslate: Flip.setTranslate.bind(swiper),
	          setTransition: Flip.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.effect !== 'flip') { return; }
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
	        var overwriteParams = {
	          slidesPerView: 1,
	          slidesPerColumn: 1,
	          slidesPerGroup: 1,
	          watchSlidesProgress: true,
	          spaceBetween: 0,
	          virtualTranslate: true,
	        };
	        Utils.extend(swiper.params, overwriteParams);
	        Utils.extend(swiper.originalParams, overwriteParams);
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (swiper.params.effect !== 'flip') { return; }
	        swiper.flipEffect.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (swiper.params.effect !== 'flip') { return; }
	        swiper.flipEffect.setTransition(duration);
	      },
	    },
	  };
	
	  var Coverflow = {
	    setTranslate: function setTranslate() {
	      var swiper = this;
	      var swiperWidth = swiper.width;
	      var swiperHeight = swiper.height;
	      var slides = swiper.slides;
	      var $wrapperEl = swiper.$wrapperEl;
	      var slidesSizesGrid = swiper.slidesSizesGrid;
	      var params = swiper.params.coverflowEffect;
	      var isHorizontal = swiper.isHorizontal();
	      var transform = swiper.translate;
	      var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
	      var rotate = isHorizontal ? params.rotate : -params.rotate;
	      var translate = params.depth;
	      // Each slide offset from center
	      for (var i = 0, length = slides.length; i < length; i += 1) {
	        var $slideEl = slides.eq(i);
	        var slideSize = slidesSizesGrid[i];
	        var slideOffset = $slideEl[0].swiperSlideOffset;
	        var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
	
	        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
	        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
	        // var rotateZ = 0
	        var translateZ = -translate * Math.abs(offsetMultiplier);
	
	        var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
	        var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
	
	        // Fix for ultra small values
	        if (Math.abs(translateX) < 0.001) { translateX = 0; }
	        if (Math.abs(translateY) < 0.001) { translateY = 0; }
	        if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
	        if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
	        if (Math.abs(rotateX) < 0.001) { rotateX = 0; }
	
	        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
	
	        $slideEl.transform(slideTransform);
	        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	        if (params.slideShadows) {
	          // Set shadows
	          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	          if ($shadowBeforeEl.length === 0) {
	            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
	            $slideEl.append($shadowBeforeEl);
	          }
	          if ($shadowAfterEl.length === 0) {
	            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
	            $slideEl.append($shadowAfterEl);
	          }
	          if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
	          if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
	        }
	      }
	
	      // Set correct perspective for IE10
	      if (Support.pointerEvents || Support.prefixedPointerEvents) {
	        var ws = $wrapperEl[0].style;
	        ws.perspectiveOrigin = center + "px 50%";
	      }
	    },
	    setTransition: function setTransition(duration) {
	      var swiper = this;
	      swiper.slides
	        .transition(duration)
	        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	        .transition(duration);
	    },
	  };
	
	  var EffectCoverflow = {
	    name: 'effect-coverflow',
	    params: {
	      coverflowEffect: {
	        rotate: 50,
	        stretch: 0,
	        depth: 100,
	        modifier: 1,
	        slideShadows: true,
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        coverflowEffect: {
	          setTranslate: Coverflow.setTranslate.bind(swiper),
	          setTransition: Coverflow.setTransition.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        if (swiper.params.effect !== 'coverflow') { return; }
	
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
	        swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
	
	        swiper.params.watchSlidesProgress = true;
	        swiper.originalParams.watchSlidesProgress = true;
	      },
	      setTranslate: function setTranslate() {
	        var swiper = this;
	        if (swiper.params.effect !== 'coverflow') { return; }
	        swiper.coverflowEffect.setTranslate();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        if (swiper.params.effect !== 'coverflow') { return; }
	        swiper.coverflowEffect.setTransition(duration);
	      },
	    },
	  };
	
	  var Thumbs = {
	    init: function init() {
	      var swiper = this;
	      var ref = swiper.params;
	      var thumbsParams = ref.thumbs;
	      var SwiperClass = swiper.constructor;
	      if (thumbsParams.swiper instanceof SwiperClass) {
	        swiper.thumbs.swiper = thumbsParams.swiper;
	        Utils.extend(swiper.thumbs.swiper.originalParams, {
	          watchSlidesProgress: true,
	          slideToClickedSlide: false,
	        });
	        Utils.extend(swiper.thumbs.swiper.params, {
	          watchSlidesProgress: true,
	          slideToClickedSlide: false,
	        });
	      } else if (Utils.isObject(thumbsParams.swiper)) {
	        swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
	          watchSlidesVisibility: true,
	          watchSlidesProgress: true,
	          slideToClickedSlide: false,
	        }));
	        swiper.thumbs.swiperCreated = true;
	      }
	      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
	      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
	    },
	    onThumbClick: function onThumbClick() {
	      var swiper = this;
	      var thumbsSwiper = swiper.thumbs.swiper;
	      if (!thumbsSwiper) { return; }
	      var clickedIndex = thumbsSwiper.clickedIndex;
	      if (typeof clickedIndex === 'undefined' || clickedIndex === null) { return; }
	      var slideToIndex;
	      if (thumbsSwiper.params.loop) {
	        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
	      } else {
	        slideToIndex = clickedIndex;
	      }
	      if (swiper.params.loop) {
	        var currentIndex = swiper.activeIndex;
	        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
	          swiper.loopFix();
	          // eslint-disable-next-line
	          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	          currentIndex = swiper.activeIndex;
	        }
	        var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
	        var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
	        if (typeof prevIndex === 'undefined') { slideToIndex = nextIndex; }
	        else if (typeof nextIndex === 'undefined') { slideToIndex = prevIndex; }
	        else if (nextIndex - currentIndex < currentIndex - prevIndex) { slideToIndex = nextIndex; }
	        else { slideToIndex = prevIndex; }
	      }
	      swiper.slideTo(slideToIndex);
	    },
	    update: function update(initial) {
	      var swiper = this;
	      var thumbsSwiper = swiper.thumbs.swiper;
	      if (!thumbsSwiper) { return; }
	
	      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
	        ? thumbsSwiper.slidesPerViewDynamic()
	        : thumbsSwiper.params.slidesPerView;
	
	      if (swiper.realIndex !== thumbsSwiper.realIndex) {
	        var currentThumbsIndex = thumbsSwiper.activeIndex;
	        var newThumbsIndex;
	        if (thumbsSwiper.params.loop) {
	          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
	            thumbsSwiper.loopFix();
	            // eslint-disable-next-line
	            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
	            currentThumbsIndex = thumbsSwiper.activeIndex;
	          }
	          // Find actual thumbs index to slide to
	          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
	          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
	          if (typeof prevThumbsIndex === 'undefined') { newThumbsIndex = nextThumbsIndex; }
	          else if (typeof nextThumbsIndex === 'undefined') { newThumbsIndex = prevThumbsIndex; }
	          else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) { newThumbsIndex = nextThumbsIndex; }
	          else { newThumbsIndex = prevThumbsIndex; }
	        } else {
	          newThumbsIndex = swiper.realIndex;
	        }
	
	        if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
	          if (thumbsSwiper.params.centeredSlides) {
	            if (newThumbsIndex > currentThumbsIndex) {
	              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
	            } else {
	              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
	            }
	          } else if (newThumbsIndex > currentThumbsIndex) {
	            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
	          }
	          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
	        }
	      }
	
	      // Activate thumbs
	      var thumbsToActivate = 1;
	      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
	
	      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
	        thumbsToActivate = swiper.params.slidesPerView;
	      }
	
	      thumbsSwiper.slides.removeClass(thumbActiveClass);
	      if (thumbsSwiper.params.loop) {
	        for (var i = 0; i < thumbsToActivate; i += 1) {
	          thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
	        }
	      } else {
	        for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
	          thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
	        }
	      }
	    },
	  };
	  var Thumbs$1 = {
	    name: 'thumbs',
	    params: {
	      thumbs: {
	        swiper: null,
	        slideThumbActiveClass: 'swiper-slide-thumb-active',
	        thumbsContainerClass: 'swiper-container-thumbs',
	      },
	    },
	    create: function create() {
	      var swiper = this;
	      Utils.extend(swiper, {
	        thumbs: {
	          swiper: null,
	          init: Thumbs.init.bind(swiper),
	          update: Thumbs.update.bind(swiper),
	          onThumbClick: Thumbs.onThumbClick.bind(swiper),
	        },
	      });
	    },
	    on: {
	      beforeInit: function beforeInit() {
	        var swiper = this;
	        var ref = swiper.params;
	        var thumbs = ref.thumbs;
	        if (!thumbs || !thumbs.swiper) { return; }
	        swiper.thumbs.init();
	        swiper.thumbs.update(true);
	      },
	      slideChange: function slideChange() {
	        var swiper = this;
	        if (!swiper.thumbs.swiper) { return; }
	        swiper.thumbs.update();
	      },
	      update: function update() {
	        var swiper = this;
	        if (!swiper.thumbs.swiper) { return; }
	        swiper.thumbs.update();
	      },
	      resize: function resize() {
	        var swiper = this;
	        if (!swiper.thumbs.swiper) { return; }
	        swiper.thumbs.update();
	      },
	      observerUpdate: function observerUpdate() {
	        var swiper = this;
	        if (!swiper.thumbs.swiper) { return; }
	        swiper.thumbs.update();
	      },
	      setTransition: function setTransition(duration) {
	        var swiper = this;
	        var thumbsSwiper = swiper.thumbs.swiper;
	        if (!thumbsSwiper) { return; }
	        thumbsSwiper.setTransition(duration);
	      },
	      beforeDestroy: function beforeDestroy() {
	        var swiper = this;
	        var thumbsSwiper = swiper.thumbs.swiper;
	        if (!thumbsSwiper) { return; }
	        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
	          thumbsSwiper.destroy();
	        }
	      },
	    },
	  };
	
	  // Swiper Class
	
	  var components = [
	    Device$1,
	    Support$1,
	    Browser$1,
	    Resize,
	    Observer$1,
	    Virtual$1,
	    Keyboard$1,
	    Mousewheel$1,
	    Navigation$1,
	    Pagination$1,
	    Scrollbar$1,
	    Parallax$1,
	    Zoom$1,
	    Lazy$1,
	    Controller$1,
	    A11y,
	    History$1,
	    HashNavigation$1,
	    Autoplay$1,
	    EffectFade,
	    EffectCube,
	    EffectFlip,
	    EffectCoverflow,
	    Thumbs$1
	  ];
	
	  if (typeof Swiper.use === 'undefined') {
	    Swiper.use = Swiper.Class.use;
	    Swiper.installModule = Swiper.Class.installModule;
	  }
	
	  Swiper.use(components);
	
	  return Swiper;
	
	})));


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(155);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 基础轮播
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 可定制页码
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Demo1 = function (_React$Component) {
	  _inherits(Demo1, _React$Component);
	
	  function Demo1() {
	    _classCallCheck(this, Demo1);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Demo1.prototype.render = function render() {
	    var params = {
	      pagination: { //配置页码参数 其中 renderBullet 是自定义页码
	        el: '.swiper-pagination',
	        clickable: true, //可点击页码切换swiper
	        renderBullet: function renderBullet(index, className) {
	          return '<span class="' + className + '">' + (index + 1) + '</span>';
	        }
	
	      },
	      navigation: { //配置上一页下一页按钮
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      spaceBetween: 20 //配置两页之前切换距离
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { id: 'customized-pagination' },
	      _react2['default'].createElement(
	        _index2['default'],
	        params,
	        _react2['default'].createElement('div', { className: 'carousel-demo-1' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-2' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-3' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-4' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-5' })
	      )
	    );
	  };
	
	  return Demo1;
	}(_react2['default'].Component);
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(155);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 旋转轮播
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 切换动画是3d翻转形式
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Demo2 = function (_React$Component) {
	  _inherits(Demo2, _React$Component);
	
	  function Demo2() {
	    _classCallCheck(this, Demo2);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Demo2.prototype.render = function render() {
	    var params = {
	      pagination: {
	        el: '.swiper-pagination',
	        type: 'bullets',
	        clickable: true
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      },
	      spaceBetween: 30,
	      effect: 'flip' //设置3d翻转
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'carousel-demo-two' },
	      _react2['default'].createElement(
	        _index2['default'],
	        params,
	        _react2['default'].createElement('div', { className: 'carousel-demo-1' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-2' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-3' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-4' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-5' })
	      )
	    );
	  };
	
	  return Demo2;
	}(_react2['default'].Component);
	
	exports['default'] = Demo2;
	module.exports = exports['default'];

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(155);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 进度条轮播
	 * @description 切换进度可在上边1️以进度条的形式展现
	 *
	 */
	
	
	var Demo3 = function (_React$Component) {
	  _inherits(Demo3, _React$Component);
	
	  function Demo3() {
	    _classCallCheck(this, Demo3);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Demo3.prototype.render = function render() {
	    var params = {
	      pagination: {
	        el: '.swiper-pagination',
	        type: 'progressbar' //将页码改成进度条形式
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev'
	      }
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'carousel-demo-three' },
	      _react2['default'].createElement(
	        _index2['default'],
	        params,
	        _react2['default'].createElement('div', { className: 'carousel-demo-1' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-2' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-3' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-4' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-5' })
	      )
	    );
	  };
	
	  return Demo3;
	}(_react2['default'].Component);
	
	exports['default'] = Demo3;
	module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(155);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 触摸轮播
	 * @description 触发方式多用于手机端 最简单的触摸模式
	 *
	 */
	
	
	var Demo4 = function (_React$Component) {
	  _inherits(Demo4, _React$Component);
	
	  function Demo4() {
	    _classCallCheck(this, Demo4);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Demo4.prototype.render = function render() {
	    var params = {
	      pagination: {
	        el: '.swiper-pagination'
	      },
	      spaceBetween: 30
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'carousel-demo-four' },
	      _react2['default'].createElement(
	        _index2['default'],
	        params,
	        _react2['default'].createElement('div', { className: 'carousel-demo-1' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-2' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-3' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-4' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-5' })
	      )
	    );
	  };
	
	  return Demo4;
	}(_react2['default'].Component);
	
	exports['default'] = Demo4;
	module.exports = exports['default'];

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(155);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	/**
	 *
	 * @title 响应式轮播
	 * @description 根据滑动的力度，定位轮播当前active的进度
	 */
	
	
	var Demo5 = function (_React$Component) {
	  _inherits(Demo5, _React$Component);
	
	  function Demo5() {
	    _classCallCheck(this, Demo5);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Demo5.prototype.render = function render() {
	    var params = {
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true
	      },
	      slidesPerView: 5, //单屏显示几个slider
	      spaceBetween: 50,
	      breakpoints: { //设置不同尺寸下 单屏显示几个slider 
	        1024: {
	          slidesPerView: 4,
	          spaceBetween: 40
	        },
	        768: {
	          slidesPerView: 3,
	          spaceBetween: 30
	        },
	        640: {
	          slidesPerView: 2,
	          spaceBetween: 20
	        },
	        320: {
	          slidesPerView: 1,
	          spaceBetween: 10
	        }
	      }
	    };
	
	    return _react2['default'].createElement(
	      'div',
	      { className: 'carousel-demo-five' },
	      _react2['default'].createElement(
	        _index2['default'],
	        params,
	        _react2['default'].createElement('div', { className: 'carousel-demo-1' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-2' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-3' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-4' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-5' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-1' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-2' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-3' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-4' }),
	        _react2['default'].createElement('div', { className: 'carousel-demo-5' })
	      )
	    );
	  };
	
	  return Demo5;
	}(_react2['default'].Component);
	
	exports['default'] = Demo5;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map