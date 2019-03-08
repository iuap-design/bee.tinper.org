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
	
	var _beeLayout = __webpack_require__(1);
	
	var _beePanel = __webpack_require__(8);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _src = __webpack_require__(84);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });
	
	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });
	
	var Demo1 = __webpack_require__(245);var Demo2 = __webpack_require__(246);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 地区级联", "code": "/**\n*\n* @title 地区级联\n* @description 中国地区级联\n*\n*/\n\nimport React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport { CitySelect, Button  } from 'tinper-bee';\n\nclass Demo1 extends Component {\n\n\tconstructor() {\n\t\tsuper();\n\t\tthis.state = {\n\t\t\tdefaultValue:{ province:'北京',city:'北京',area:'东城区'},\n\t\t\tvalue:null\n\t\t}\n\t}\n\n\tonChange=(obj)=>{\n\t\tconsole.log(obj)\n\t}\n\n\tbtnOnClick=()=>{\n\t\tthis.setState({\n\t\t\tvalue:{ province:'山西',city:'长治',area:'长治县'}\n\t\t})\n\t}\n\n\trender () {\n\t\tlet value = { province:'山西',city:'长治',area:'长治县'};\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<CitySelect ref='city' onChange={this.onChange} defaultValue={this.state.defaultValue} value={value}/>\n\t\t\t\t<Button shape=\"border\" onClick={this.btnOnClick} style={{marginTop:\"10px\"}}>代码设置数据</Button>\n\t\t\t</div>\n\t)}\n}\n", "desc": " 中国地区级联" }, { "example": _react2['default'].createElement(Demo2, null), "title": " 切换语言", "code": "/**\n*\n* @title 切换语言\n* @description 目前支持三种语言  zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文\n*\n*/\n\nimport React, { Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport { CitySelect } from 'tinper-bee';\n\nclass Demo2 extends Component {\n\n\tonChange=(obj)=>{\n\t\tconsole.log(obj)\n\t}\n\trender () {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<CitySelect lang='en_US' onChange={this.onChange}/>\n\t\t\t\t<div style={{'height':'20px'}}/>\n\t\t\t\t<CitySelect lang='zh_TW' onChange={this.onChange}/>\n\t\t\t</div>\n\t)}\n}\n", "desc": " 目前支持三种语言  zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文" }];
	
	var Demo = function (_Component) {
	    _inherits(Demo, _Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.state = {
	            open: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }
	
	    Demo.prototype.handleClick = function handleClick() {
	        this.setState({ open: !this.state.open });
	    };
	
	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc;
	
	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";
	
	        var footer = _react2['default'].createElement(
	            _beeButton2['default'],
	            { shape: 'block', onClick: this.handleClick },
	            caret,
	            text
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12 },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { collapsible: true, headerContent: true, expanded: this.state.open, colors: 'bordered', header: example, footer: footer, footerStyle: { padding: 0 } },
	                _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                )
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
	
	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, desc: child.desc, key: index });
	            })
	        );
	    };
	
	    return DemoGroup;
	}(_react.Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;
	
	var _Col2 = __webpack_require__(2);
	
	var _Col3 = _interopRequireDefault(_Col2);
	
	var _Row2 = __webpack_require__(6);
	
	var _Row3 = _interopRequireDefault(_Row2);
	
	var _Layout = __webpack_require__(7);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = PropTypes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;
	
	var _Panel2 = __webpack_require__(9);
	
	var _Panel3 = _interopRequireDefault(_Panel2);
	
	var _PanelGroup2 = __webpack_require__(81);
	
	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeTransition = __webpack_require__(10);
	
	var _beeMessage = __webpack_require__(65);
	
	var _beeMessage2 = _interopRequireDefault(_beeMessage);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _copyToClipboard = __webpack_require__(79);
	
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
	        copyable && _react2["default"].createElement('i', { className: clsPrefix + '-copy uf uf-files-o', onClick: self.copyDemo })
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;
	
	var _Transition2 = __webpack_require__(11);
	
	var _Transition3 = _interopRequireDefault(_Transition2);
	
	var _Collapse2 = __webpack_require__(17);
	
	var _Collapse3 = _interopRequireDefault(_Collapse2);
	
	var _Fade2 = __webpack_require__(64);
	
	var _Fade3 = _interopRequireDefault(_Fade2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _properties = __webpack_require__(13);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _on = __webpack_require__(16);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
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
/* 12 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var transform = 'transform';
	exports.transform = transform;
	var prefix, transitionEnd, animationEnd;
	exports.animationEnd = animationEnd;
	exports.transitionEnd = transitionEnd;
	var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
	exports.transitionDelay = transitionDelay;
	exports.transitionTiming = transitionTiming;
	exports.transitionDuration = transitionDuration;
	exports.transitionProperty = transitionProperty;
	var animationName, animationDuration, animationTiming, animationDelay;
	exports.animationDelay = animationDelay;
	exports.animationTiming = animationTiming;
	exports.animationDuration = animationDuration;
	exports.animationName = animationName;
	
	if (_inDOM.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	  exports.transform = transform = prefix + "-" + transform;
	  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
	  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
	  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
	  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
	  exports.animationName = animationName = prefix + "-animation-name";
	  exports.animationDuration = animationDuration = prefix + "-animation-duration";
	  exports.animationTiming = animationTiming = prefix + "-animation-delay";
	  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
	}
	
	var _default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	exports.default = _default;
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	  var vendorMap = {
	    O: function O(e) {
	      return "o" + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return "webkit" + e;
	    },
	    ms: function ms(e) {
	      return "MS" + e;
	    }
	  };
	  var vendors = Object.keys(vendorMap);
	  var transitionEnd, animationEnd;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + "TransitionProperty" in style) {
	      prefix = "-" + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	  style = null;
	  return {
	    animationEnd: animationEnd,
	    transitionEnd: transitionEnd,
	    prefix: prefix
	  };
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    default: obj
	  };
	}
	
	module.exports = _interopRequireDefault;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var on = function on() {};
	
	if (_inDOM.default) {
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
	
	var _default = on;
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(18);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _capitalize = __webpack_require__(26);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _tinperBeeCore = __webpack_require__(27);
	
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = style;
	
	var _camelizeStyle = _interopRequireDefault(__webpack_require__(19));
	
	var _hyphenateStyle = _interopRequireDefault(__webpack_require__(21));
	
	var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(23));
	
	var _removeStyle = _interopRequireDefault(__webpack_require__(24));
	
	var _properties = __webpack_require__(13);
	
	var _isTransform = _interopRequireDefault(__webpack_require__(25));
	
	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;
	
	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }
	
	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	
	    if (!value && value !== 0) {
	      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
	    } else if ((0, _isTransform.default)(key)) {
	      transforms += key + "(" + value + ") ";
	    } else {
	      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
	    }
	  });
	
	  if (transforms) {
	    css += _properties.transform + ": " + transforms + ";";
	  }
	
	  node.style.cssText += ';' + css;
	}
	
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = camelizeStyleName;
	
	var _camelize = _interopRequireDefault(__webpack_require__(20));
	
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */
	var msPattern = /^-ms-/;
	
	function camelizeStyleName(string) {
	  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = camelize;
	var rHyphen = /-(.)/g;
	
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	
	module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = hyphenateStyleName;
	
	var _hyphenate = _interopRequireDefault(__webpack_require__(22));
	
	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */
	var msPattern = /^ms-/;
	
	function hyphenateStyleName(string) {
	  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
	}
	
	module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = hyphenate;
	var rUpper = /([A-Z])/g;
	
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	
	module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = _getComputedStyle;
	
	var _camelizeStyle = _interopRequireDefault(__webpack_require__(19));
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	      prop = (0, _camelizeStyle.default)(prop);
	      if (prop == 'float') prop = 'styleFloat';
	      var current = node.currentStyle[prop] || null;
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out
	
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px'; // Revert the changed values
	
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = removeStyle;
	
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	
	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	
	module.exports = exports["default"];

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;
	
	var _all2 = __webpack_require__(28);
	
	var _all3 = _interopRequireDefault(_all2);
	
	var _componentOrElement2 = __webpack_require__(30);
	
	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);
	
	var _deprecated2 = __webpack_require__(31);
	
	var _deprecated3 = _interopRequireDefault(_deprecated2);
	
	var _elementType2 = __webpack_require__(34);
	
	var _elementType3 = _interopRequireDefault(_elementType2);
	
	var _isRequiredForA11y2 = __webpack_require__(35);
	
	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);
	
	var _splitComponent2 = __webpack_require__(36);
	
	var _splitComponent3 = _interopRequireDefault(_splitComponent2);
	
	var _createChainedFunction2 = __webpack_require__(37);
	
	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);
	
	var _keyCode = __webpack_require__(38);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _contains2 = __webpack_require__(39);
	
	var _contains3 = _interopRequireDefault(_contains2);
	
	var _addEventListener2 = __webpack_require__(40);
	
	var _addEventListener3 = _interopRequireDefault(_addEventListener2);
	
	var _cssAnimation2 = __webpack_require__(45);
	
	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);
	
	var _toArray2 = __webpack_require__(49);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _Align2 = __webpack_require__(50);
	
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = all;
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
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
	} /**
	   * This source code is quoted from rc-util.
	   * homepage: https://github.com/react-component/util
	   */

/***/ }),
/* 29 */
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
	
	/* This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = deprecated;
	
	var _warning = __webpack_require__(32);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {}; /**
	                  * This source code is quoted from rc-util.
	                  * homepage: https://github.com/react-component/util
	                  */
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
/* 32 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(29);
	
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
/* 35 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
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
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = splitComponentProps;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
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
/* 37 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
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
	exports.default = createChainedFunction;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
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
/* 39 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = contains;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(41);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventObject = __webpack_require__(42);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function addEventListener(target, eventType, callback, option) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    var _ret = (function () {
	      var useCapture = false;
	      if (typeof option === 'object') {
	        useCapture = option.capture || false;
	      } else if (typeof option === 'boolean') {
	        useCapture = option;
	      }
	
	      target.addEventListener(eventType, wrapCallback, option || false);
	
	      return {
	        v: {
	          remove: function remove() {
	            target.removeEventListener(eventType, wrapCallback, useCapture);
	          }
	        }
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventBaseObject = __webpack_require__(43);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(44);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
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
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
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
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
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
	
	  _EventBaseObject2['default'].call(this);
	
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
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
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
	
	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
	
	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
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
	
	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	module.exports = exports["default"];

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _Event = __webpack_require__(46);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(47);
	
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
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(48);
	} catch (err) {
	  var index = __webpack_require__(48);
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
/* 48 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = toArray;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	} /**
	   * This source code is quoted from rc-util.
	   * homepage: https://github.com/react-component/util
	   */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(51);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _addEventListener = __webpack_require__(40);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.alignPoint = exports.alignElement = undefined;
	
	var _alignElement = __webpack_require__(52);
	
	var _alignElement2 = _interopRequireDefault(_alignElement);
	
	var _alignPoint = __webpack_require__(63);
	
	var _alignPoint2 = _interopRequireDefault(_alignPoint);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.alignElement = _alignElement2['default'];
	exports.alignPoint = _alignPoint2['default'];
	exports['default'] = _alignElement2['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _align = __webpack_require__(53);
	
	var _align2 = _interopRequireDefault(_align);
	
	var _getOffsetParent = __webpack_require__(57);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(56);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _getRegion = __webpack_require__(60);
	
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getVisibleRectForElement = __webpack_require__(56);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(59);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(60);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(61);
	
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _propertyUtils = __webpack_require__(55);
	
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
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(57);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _isAncestorFixed = __webpack_require__(58);
	
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
	
	  // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
	  // We should cut this ourself.
	  var bodyStyle = getComputedStyle(body);
	  if (bodyStyle.overflowX === 'hidden') {
	    documentWidth = win.innerWidth;
	  }
	  if (bodyStyle.overflowY === 'hidden') {
	    documentHeight = win.innerHeight;
	  }
	
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isAncestorFixed;
	
	var _utils = __webpack_require__(54);
	
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(54);
	
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getAlignOffset = __webpack_require__(62);
	
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
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _utils = __webpack_require__(54);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _align = __webpack_require__(53);
	
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(11);
	
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(66);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Message2["default"];
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeNotification = __webpack_require__(67);
	
	var _beeNotification2 = _interopRequireDefault(_beeNotification);
	
	var _classnames = __webpack_require__(3);
	
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
	    var keyboard = arguments[2];
	    var onEscapeKeyUp = arguments[3];
	
	    if (messageInstance) {
	        callback(messageInstance);
	        return;
	    }
	    var style = positionObj[position].notificationStyle;
	    var instanceObj = {
	        clsPrefix: clsPrefix,
	        transitionName: clsPrefix + '-' + positionObj[position].transitionName,
	        style: style, // 覆盖原来的样式
	        position: ''
	    };
	    if (typeof keyboard === 'boolean') {
	        instanceObj.keyboard = keyboard;
	    }
	    if (typeof onEscapeKeyUp === 'function') {
	        instanceObj.onEscapeKeyUp = onEscapeKeyUp;
	    }
	    _beeNotification2["default"].newInstance(instanceObj, function (instance) {
	        messageInstance = instance;
	        callback(instance);
	    });
	}
	
	function notice(content, duration, type, onClose, position, style, keyboard, onEscapeKeyUp, showIcon) {
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
	                showIcon ? _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-icon' },
	                    _react2["default"].createElement('i', { className: (0, _classnames2["default"])(iconType) })
	                ) : null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-content' },
	                    content
	                )
	            ),
	            onClose: onClose
	        });
	    }, keyboard, onEscapeKeyUp);
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
	        var showIcon = obj.showIcon || false;
	        return notice(content, duration, color, onClose, position, style, obj.keyboard, obj.onEscapeKeyUp, showIcon);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Notification = __webpack_require__(68);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Notification2["default"];
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeAnimate = __webpack_require__(69);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _createChainedFunction = __webpack_require__(37);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _ownerDocument = __webpack_require__(74);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _addEventListener = __webpack_require__(76);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Notice = __webpack_require__(78);
	
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
	  keyboard: _propTypes2["default"].bool, // 按esc键是否关闭notice
	  onEscapeKeyUp: _propTypes2["default"].func, // 设置esc键特殊钩子函数
	  animation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
	};
	
	var defaultProps = {
	  clsPrefix: 'u-notification',
	  animation: 'fade',
	  keyboard: true,
	  position: 'topRight'
	};
	
	var Notification = function (_Component) {
	  _inherits(Notification, _Component);
	
	  function Notification(props) {
	    _classCallCheck(this, Notification);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleDocumentKeyUp = function (e) {
	      if (_this.props.keyboard && e.keyCode === 27 && _this.state.notices.length) {
	        _this.setState(function (previousState) {
	          previousState.notices.shift();
	          return {
	            notices: previousState.notices
	          };
	        });
	        if (_this.props.onEscapeKeyUp) {
	          _this.props.onEscapeKeyUp(e);
	        }
	      }
	    };
	
	    _this.state = {
	      notices: []
	    };
	    _this.add = _this.add.bind(_this);
	    _this.remove = _this.remove.bind(_this);
	
	    return _this;
	  }
	
	  Notification.prototype.componentDidMount = function componentDidMount() {
	    // 给document绑定keyup事件
	    var doc = (0, _ownerDocument2["default"])(this);
	    this._onDocumentKeyupListener = (0, _addEventListener2["default"])(doc, 'keyup', this.handleDocumentKeyUp);
	  };
	
	  Notification.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._onDocumentKeyupListener.remove();
	  };
	
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
	
	  /**
	   * 处理绑定在document上的keyup事件
	   */
	
	
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
	  if (typeof callback !== 'function') {
	    console.error('You must introduce callback as the second parameter of Notification.newInstance().');
	    return;
	  }
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Animate = __webpack_require__(70);
	
	var _Animate2 = _interopRequireDefault(_Animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Animate2["default"];
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(71);
	
	var _AnimateChild = __webpack_require__(72);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(73);
	
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
/* 71 */
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
	
	var _react = __webpack_require__(4);
	
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _util = __webpack_require__(73);
	
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
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (componentOrElement) {
	  return (0, _ownerDocument2["default"])(_reactDom2["default"].findDOMNode(componentOrElement));
	};
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _ownerDocument = __webpack_require__(75);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = ownerDocument;
	
	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}
	
	module.exports = exports["default"];

/***/ }),
/* 76 */
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
	
	var _on = __webpack_require__(16);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _off = __webpack_require__(77);
	
	var _off2 = _interopRequireDefault(_off);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var off = function off() {};
	
	if (_inDOM.default) {
	  off = function () {
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.removeEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.detachEvent('on' + eventName, handler);
	    };
	  }();
	}
	
	var _default = off;
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(5);
	
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
	  color: _propTypes2["default"].oneOf(['info', 'success', 'danger', 'warning', 'light', 'dark', 'news', 'infolight', 'successlight', 'dangerlight', 'warninglight']),
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
	
	Notice.propTypes = propTypes;
	Notice.defaultProps = defaultProps;
	
	exports["default"] = Notice;
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var deselectCurrent = __webpack_require__(80);
	
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
/* 80 */
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(27);
	
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(83);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(3);
	
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
	    size: _propTypes2["default"].oneOf(['sm', 'md', 'xg', 'lg']),
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
	    colors: _propTypes2["default"].oneOf(['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'danger', 'dark', 'light', 'default']),
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
	    md: 'md',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    secondary: 'secondary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger',
	    dark: 'dark',
	    light: 'light'
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _CitySelect = __webpack_require__(85);
	
	var _CitySelect2 = _interopRequireDefault(_CitySelect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _CitySelect2['default'];
	module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _beeSelect = __webpack_require__(86);
	
	var _beeSelect2 = _interopRequireDefault(_beeSelect);
	
	var _lodash = __webpack_require__(239);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _provinceData = __webpack_require__(241);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Option = _beeSelect2['default'].Option;
	
	var propTypes = {
	    defaultValue: _propTypes2['default'].object,
	    value: _propTypes2['default'].object,
	    onChange: _propTypes2['default'].func,
	    provinceData: _propTypes2['default'].array,
	    lang: _propTypes2['default'].string
	};
	var defaultProps = {
	    defaultValue: _provinceData.zh.defaultValue,
	    value: null,
	    onChange: function onChange() {},
	    provinceData: _provinceData.zh.provinceData,
	    lang: 'zh_CN'
	};
	
	var CitySelect = function (_Component) {
	    _inherits(CitySelect, _Component);
	
	    function CitySelect(props) {
	        _classCallCheck(this, CitySelect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _initialiseProps.call(_this);
	
	        var provinceData = props.provinceData;
	        if (props.lang == 'zh_TW') {
	            provinceData = _provinceData.tw.provinceData;
	        } else if (props.lang == 'en_US') {
	            provinceData = _provinceData.en.provinceData;
	        }
	        _this.state = {
	            province: '北京',
	            provinceIndex: 0,
	            cityIndex: 0,
	            provinceData: provinceData,
	            cities: provinceData[0].city,
	            secondCity: provinceData[0].city[0].name,
	            areas: provinceData[0].city[0].area,
	            secondArea: provinceData[0].city[0].area[0]
	        };
	        return _this;
	    }
	
	    CitySelect.prototype.componentDidMount = function componentDidMount() {
	        var _props = this.props,
	            _defaultValue = _props.defaultValue,
	            value = _props.value,
	            lang = _props.lang;
	
	        var provinceData = this.state.provinceData;
	        if (lang == 'zh_TW') {
	            provinceData = _provinceData.tw.provinceData;
	            _defaultValue = _provinceData.tw.defaultValue;
	        } else if (lang == 'en_US') {
	            provinceData = _provinceData.en.provinceData;
	            _defaultValue = _provinceData.en.defaultValue;
	        }
	        var defaultValue = value ? value : _defaultValue;
	        var province = defaultValue.province;
	        var provinceIndex = this.getIndex('province', defaultValue.province);
	        var cityIndex = this.getIndex('city', defaultValue.city, provinceIndex);
	        var cities = provinceData[provinceIndex].city;
	        var secondCity = defaultValue.city;
	        var areas = cities[cityIndex].area;
	        var secondArea = defaultValue.area;
	        this.setState({
	            province: province,
	            provinceIndex: provinceIndex,
	            cityIndex: cityIndex,
	            cities: cities,
	            secondCity: secondCity,
	            areas: areas,
	            secondArea: secondArea,
	            provinceData: provinceData
	        });
	    };
	
	    CitySelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!nextProps.value) return;
	        var _nextProps$value = nextProps.value,
	            province = _nextProps$value.province,
	            city = _nextProps$value.city,
	            area = _nextProps$value.area;
	
	        this.setState({
	            province: province,
	            secondCity: city,
	            secondArea: area
	        });
	        this.handleProvinceChange(province);
	    };
	
	    CitySelect.prototype.render = function render() {
	        var provinceOptions = this.state.provinceData.map(function (province, index) {
	            return _react2['default'].createElement(
	                Option,
	                { key: province.name },
	                province.name
	            );
	        });
	        var cityOptions = this.state.cities.map(function (city, index) {
	            return _react2['default'].createElement(
	                Option,
	                { key: city.name },
	                city.name
	            );
	        });
	        var areaOptions = this.state.areas.map(function (area, index) {
	            return _react2['default'].createElement(
	                Option,
	                { key: area },
	                area
	            );
	        });
	        return _react2['default'].createElement(
	            'div',
	            { className: (0, _classnames2['default'])("u-city-select", this.props.className) },
	            _react2['default'].createElement(
	                _beeSelect2['default'],
	                {
	                    value: this.state.province,
	                    className: 'province',
	                    onChange: this.handleProvinceChange },
	                provinceOptions
	            ),
	            _react2['default'].createElement(
	                _beeSelect2['default'],
	                {
	                    value: this.state.secondCity,
	                    className: 'city',
	                    onChange: this.handleCityChange },
	                cityOptions
	            ),
	            _react2['default'].createElement(
	                _beeSelect2['default'],
	                {
	                    value: this.state.secondArea,
	                    className: 'area',
	                    onChange: this.onSecondAreaChange },
	                areaOptions
	            )
	        );
	    };
	
	    return CitySelect;
	}(_react.Component);
	
	var _initialiseProps = function _initialiseProps() {
	    var _this2 = this;
	
	    this.getIndex = function (type, name, provinceIndex) {
	        var provinceData = _this2.state.provinceData;
	        var provinceI = provinceIndex || _this2.state.provinceIndex;
	        switch (type) {
	            case 'province':
	                return (0, _lodash2['default'])(provinceData, function (province) {
	                    return province.name == name;
	                });
	                break;
	            case 'city':
	                return (0, _lodash2['default'])(provinceData[provinceI].city, function (city) {
	                    return city.name == name;
	                });
	                break;
	        }
	    };
	
	    this.handleProvinceChange = function (value) {
	        var provinceData = _this2.state.provinceData;
	        var index = _this2.getIndex('province', value);
	        var city = provinceData[index].city[0].name;
	        var area = provinceData[index].city[0].area[0];
	        _this2.setState({
	            province: value,
	            cities: provinceData[index].city,
	            secondCity: city,
	            provinceIndex: index,
	            areas: provinceData[index].city[0].area,
	            secondArea: area
	        });
	        _this2.onChange(value, city, area);
	    };
	
	    this.handleCityChange = function (value) {
	        var provinceData = _this2.state.provinceData;
	        var index = _this2.getIndex('city', value);
	        var provinceIndex = _this2.state.provinceIndex;
	        var area = provinceData[provinceIndex].city[index].area[0];
	        _this2.setState({
	            secondCity: provinceData[provinceIndex].city[index].name,
	            areas: provinceData[provinceIndex].city[index].area,
	            secondArea: area,
	            cityIndex: value
	        });
	        _this2.onChange(undefined, value, area);
	    };
	
	    this.onSecondAreaChange = function (value) {
	        _this2.setState({
	            secondArea: value
	        });
	        _this2.onChange(undefined, undefined, value);
	    };
	
	    this.onChange = function (province, city, area) {
	        _this2.props.onChange({
	            province: province || _this2.state.province,
	            city: city || _this2.state.secondCity,
	            area: area
	        });
	    };
	};
	
	CitySelect.propTypes = propTypes;
	CitySelect.defaultProps = defaultProps;
	exports['default'] = CitySelect;
	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SelectPropTypes = exports.OptGroup = exports.Option = undefined;
	
	var _Select = __webpack_require__(87);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(224);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _PropTypes = __webpack_require__(237);
	
	var _OptGroup = __webpack_require__(238);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	_Select2["default"].Option = _Option2["default"];
	_Select2["default"].OptGroup = _OptGroup2["default"];
	exports.Option = _Option2["default"];
	exports.OptGroup = _OptGroup2["default"];
	exports.SelectPropTypes = _PropTypes.SelectPropTypes;
	exports["default"] = _Select2["default"];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _RcSelect = __webpack_require__(88);
	
	var _RcSelect2 = _interopRequireDefault(_RcSelect);
	
	var _Option = __webpack_require__(224);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _OptGroup = __webpack_require__(238);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-select.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/select
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var SelectContext = {
	  antLocale: {
	    Select: _propTypes2["default"].any
	  }
	};
	
	var defaultProps = {
	  clsPrefix: "u-select",
	  showSearch: false,
	  transitionName: "slide-up",
	  choiceTransitionName: "zoom"
	};
	
	var propTypes = {
	  clsPrefix: _propTypes2["default"].string,
	  className: _propTypes2["default"].string,
	  value: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].any]),
	  defaultValue: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].array, _propTypes2["default"].any]),
	  size: _propTypes2["default"].oneOf(["default", "lg", "sm"]),
	  combobox: _propTypes2["default"].bool,
	  notFoundContent: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].array, _propTypes2["default"].any]),
	  showSearch: _propTypes2["default"].bool,
	  open: _propTypes2["default"].bool,
	  transitionName: _propTypes2["default"].string,
	  choiceTransitionName: _propTypes2["default"].string,
	  multiple: _propTypes2["default"].bool,
	  allowClear: _propTypes2["default"].bool,
	  filterOption: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].func]),
	  tags: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  onDeselect: _propTypes2["default"].func,
	  onSearch: _propTypes2["default"].func,
	  placeholder: _propTypes2["default"].string,
	  dropdownMatchSelectWidth: _propTypes2["default"].bool,
	  optionFilterProp: _propTypes2["default"].string,
	  optionLabelProp: _propTypes2["default"].string,
	  disabled: _propTypes2["default"].bool,
	  defaultActiveFirstOption: _propTypes2["default"].bool,
	  labelInValue: _propTypes2["default"].bool,
	  getPopupContainer: _propTypes2["default"].func,
	  style: _propTypes2["default"].object,
	  dropdownStyle: _propTypes2["default"].object,
	  dropdownMenuStyle: _propTypes2["default"].object,
	  onChange: _propTypes2["default"].func,
	  scrollToEnd: _propTypes2["default"].func
	};
	
	var Select = function (_Component) {
	  _inherits(Select, _Component);
	
	  function Select(props) {
	    _classCallCheck(this, Select);
	
	    return _possibleConstructorReturn(this, _Component.call(this, props));
	  }
	
	  Select.prototype.render = function render() {
	    var _classNames;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        _props$className = _props.className,
	        className = _props$className === undefined ? "" : _props$className,
	        size = _props.size,
	        data = _props.data,
	        showSearch = _props.showSearch,
	        combobox = _props.combobox;
	    var _props2 = this.props,
	        _props2$notFoundConte = _props2.notFoundContent,
	        notFoundContent = _props2$notFoundConte === undefined ? "Not Found" : _props2$notFoundConte,
	        optionLabelProp = _props2.optionLabelProp;
	
	
	    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, clsPrefix + "-lg", size === "lg"), _defineProperty(_classNames, clsPrefix + "-sm", size === "sm"), _defineProperty(_classNames, clsPrefix + "-show-search", showSearch), _classNames), className);
	
	    var antLocale = this.context.antLocale;
	
	    if (antLocale && antLocale.Select) {
	      notFoundContent = "notFoundContent" in this.props ? notFoundContent : antLocale.Select.notFoundContent;
	    }
	
	    if (combobox) {
	      notFoundContent = null;
	      // children 带 dom 结构时，无法填入输入框
	      optionLabelProp = optionLabelProp || "value";
	    }
	    if (data) {
	      data.map(function (item) {
	        return _react2["default"].createElement(
	          _Option2["default"],
	          { value: item.value },
	          item.key
	        );
	      });
	    }
	    return data ? _react2["default"].createElement(
	      _RcSelect2["default"],
	      _extends({}, this.props, {
	        className: cls,
	        optionLabelProp: optionLabelProp || "children",
	        notFoundContent: notFoundContent
	      }),
	      data.map(function (item) {
	        return _react2["default"].createElement(
	          _Option2["default"],
	          { key: item.value, value: item.value, disabled: item.disabled ? true : false },
	          item.key
	        );
	      })
	    ) : _react2["default"].createElement(_RcSelect2["default"], _extends({}, this.props, {
	      className: cls,
	      optionLabelProp: optionLabelProp || "children",
	      notFoundContent: notFoundContent
	    }));
	  };
	
	  return Select;
	}(_react.Component);
	
	Select.context = SelectContext;
	Select.propTypes = propTypes;
	Select.defaultProps = defaultProps;
	Select.Option = _Option2["default"];
	Select.OptGroup = _OptGroup2["default"];
	
	exports["default"] = Select;
	module.exports = exports["default"];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactLifecyclesCompat = __webpack_require__(89);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _classnames2 = __webpack_require__(3);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _beeAnimate = __webpack_require__(69);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _componentClasses = __webpack_require__(47);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	var _rcMenu = __webpack_require__(90);
	
	var _warning = __webpack_require__(32);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _Option = __webpack_require__(224);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _util = __webpack_require__(225);
	
	var _SelectTrigger = __webpack_require__(226);
	
	var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);
	
	var _PropTypes = __webpack_require__(237);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-select.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/select
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	function noop() {}
	
	function chaining() {
	  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
	    fns[_key] = arguments[_key];
	  }
	
	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    // eslint-disable-line
	    // eslint-disable-line
	    for (var i = 0; i < fns.length; i++) {
	      if (fns[i] && typeof fns[i] === 'function') {
	        fns[i].apply(this, args);
	      }
	    }
	  };
	}
	
	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);
	
	  function Select(props) {
	    _classCallCheck(this, Select);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    var optionsInfo = Select.getOptionsInfoFromProps(props);
	    _this.state = {
	      value: Select.getValueFromProps(props, true), // true: use default value
	      inputValue: props.combobox ? Select.getInputValueForCombobox(props, optionsInfo, true // use default value
	      ) : '',
	      open: props.defaultOpen,
	      optionsInfo: optionsInfo,
	      // a flag for aviod redundant getOptionsInfoFromProps call
	      skipBuildOptionsInfo: true
	    };
	
	    _this.saveInputRef = (0, _util.saveRef)(_this, 'inputRef');
	    _this.saveInputMirrorRef = (0, _util.saveRef)(_this, 'inputMirrorRef');
	    _this.saveTopCtrlRef = (0, _util.saveRef)(_this, 'topCtrlRef');
	    _this.saveSelectTriggerRef = (0, _util.saveRef)(_this, 'selectTriggerRef');
	    _this.saveRootRef = (0, _util.saveRef)(_this, 'rootRef');
	    _this.saveSelectionRef = (0, _util.saveRef)(_this, 'selectionRef');
	    return _this;
	  }
	
	  Select.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.autoFocus) {
	      this.focus();
	    }
	  };
	
	  Select.prototype.componentDidUpdate = function componentDidUpdate() {
	    if ((0, _util.isMultipleOrTags)(this.props)) {
	      var inputNode = this.getInputDOMNode();
	      var mirrorNode = this.getInputMirrorDOMNode();
	      if (inputNode.value) {
	        inputNode.style.width = '';
	        inputNode.style.width = mirrorNode.clientWidth + 'px';
	      } else {
	        inputNode.style.width = '';
	      }
	    }
	    this.forcePopupAlign();
	  };
	
	  Select.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearFocusTime();
	    this.clearBlurTime();
	    if (this.dropdownContainer) {
	      _reactDom2["default"].unmountComponentAtNode(this.dropdownContainer);
	      document.body.removeChild(this.dropdownContainer);
	      this.dropdownContainer = null;
	    }
	  };
	
	  // combobox ignore
	
	
	  Select.prototype.focus = function focus() {
	    if ((0, _util.isSingleMode)(this.props)) {
	      this.selectionRef.focus();
	    } else {
	      this.getInputDOMNode().focus();
	    }
	  };
	
	  Select.prototype.blur = function blur() {
	    if ((0, _util.isSingleMode)(this.props)) {
	      this.selectionRef.blur();
	    } else {
	      this.getInputDOMNode().blur();
	    }
	  };
	
	  Select.prototype.renderClear = function renderClear() {
	    var _props = this.props,
	        prefixCls = _props.prefixCls,
	        allowClear = _props.allowClear,
	        clearIcon = _props.clearIcon;
	    var _state = this.state,
	        value = _state.value,
	        inputValue = _state.inputValue;
	
	    var clear = _react2["default"].createElement(
	      'span',
	      _extends({
	        key: 'clear',
	        className: prefixCls + '-selection-clear',
	        onMouseDown: _util.preventDefaultEvent,
	        style: _util.UNSELECTABLE_STYLE
	      }, _util.UNSELECTABLE_ATTRIBUTE, {
	        onClick: this.onClearSelection
	      }),
	      clearIcon || _react2["default"].createElement(
	        'i',
	        { className: prefixCls + '-selection-clear-icon' },
	        '\xD7'
	      )
	    );
	    if (!allowClear) {
	      return null;
	    }
	    if ((0, _util.isCombobox)(this.props)) {
	      if (inputValue) {
	        return clear;
	      }
	      return null;
	    }
	    if (inputValue || value.length) {
	      return clear;
	    }
	    return null;
	  };
	
	  Select.prototype.render = function render() {
	    var _rootCls;
	
	    var props = this.props;
	    var multiple = (0, _util.isMultipleOrTags)(props);
	    var state = this.state;
	    var className = props.className,
	        disabled = props.disabled,
	        prefixCls = props.prefixCls,
	        inputIcon = props.inputIcon;
	
	    var ctrlNode = this.renderTopControlNode();
	    var open = this.state.open;
	
	    if (open) {
	      this._options = this.renderFilterOptions();
	    }
	    var realOpen = this.getRealOpenState();
	    var options = this._options || [];
	    var dataOrAriaAttributeProps = {};
	    for (var key in props) {
	      if (Object.prototype.hasOwnProperty.call(props, key) && (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')) {
	        dataOrAriaAttributeProps[key] = props[key];
	      }
	    }
	    var extraSelectionProps = _extends({}, dataOrAriaAttributeProps);
	    if (!(0, _util.isMultipleOrTagsOrCombobox)(props)) {
	      extraSelectionProps = _extends({}, extraSelectionProps, {
	        onKeyDown: this.onKeyDown,
	        tabIndex: props.disabled ? -1 : 0
	      });
	    }
	    var rootCls = (_rootCls = {}, _defineProperty(_rootCls, className, !!className), _defineProperty(_rootCls, prefixCls, 1), _defineProperty(_rootCls, prefixCls + '-open', open), _defineProperty(_rootCls, prefixCls + '-focused', open || !!this._focused), _defineProperty(_rootCls, prefixCls + '-combobox', (0, _util.isCombobox)(props)), _defineProperty(_rootCls, prefixCls + '-disabled', disabled), _defineProperty(_rootCls, prefixCls + '-enabled', !disabled), _defineProperty(_rootCls, prefixCls + '-allow-clear', !!props.allowClear), _defineProperty(_rootCls, prefixCls + '-no-arrow', !props.showArrow), _rootCls);
	    return _react2["default"].createElement(
	      _SelectTrigger2["default"],
	      {
	        open: props.open,
	        onPopupFocus: this.onPopupFocus,
	        onMouseEnter: this.props.onMouseEnter,
	        onMouseLeave: this.props.onMouseLeave,
	        dropdownAlign: props.dropdownAlign,
	        dropdownClassName: props.dropdownClassName,
	        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
	        defaultActiveFirstOption: props.defaultActiveFirstOption,
	        dropdownMenuStyle: props.dropdownMenuStyle,
	        transitionName: props.transitionName,
	        animation: props.animation,
	        prefixCls: props.prefixCls,
	        dropdownStyle: props.dropdownStyle,
	        combobox: props.combobox,
	        showSearch: props.showSearch,
	        options: options,
	        multiple: multiple,
	        disabled: disabled,
	        visible: realOpen,
	        inputValue: state.inputValue,
	        value: state.value,
	        backfillValue: state.backfillValue,
	        firstActiveValue: props.firstActiveValue,
	        onDropdownVisibleChange: this.onDropdownVisibleChange,
	        getPopupContainer: props.getPopupContainer,
	        onMenuSelect: this.onMenuSelect,
	        onMenuDeselect: this.onMenuDeselect,
	        onPopupScroll: props.onPopupScroll,
	        showAction: props.showAction,
	        ref: this.saveSelectTriggerRef,
	        clsPrefix: props.clsPrefix + '-dropdown',
	        menuItemSelectedIcon: props.menuItemSelectedIcon
	      },
	      _react2["default"].createElement(
	        'div',
	        {
	          id: props.id,
	          style: props.style,
	          ref: this.saveRootRef,
	          onBlur: this.onOuterBlur,
	          onFocus: this.onOuterFocus,
	          onClick: this.onOuterClick //sp
	          , className: (0, _classnames3["default"])(rootCls),
	          onMouseDown: this.markMouseDown,
	          onMouseUp: this.markMouseLeave,
	          onMouseOut: this.markMouseLeave
	        },
	        _react2["default"].createElement(
	          'div',
	          _extends({
	            ref: this.saveSelectionRef,
	            key: 'selection',
	            className: prefixCls + '-selection\n            ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
	            role: 'combobox',
	            'aria-autocomplete': 'list',
	            'aria-haspopup': 'true',
	            'aria-expanded': realOpen
	          }, extraSelectionProps),
	          ctrlNode,
	          this.renderClear(),
	          !props.showArrow ? null : //sp
	          _react2["default"].createElement(
	            'span',
	            _extends({
	              key: 'arrow',
	              className: prefixCls + '-arrow',
	              style: _util.UNSELECTABLE_STYLE
	            }, _util.UNSELECTABLE_ATTRIBUTE, {
	              onClick: this.onArrowClick
	            }),
	            inputIcon || _react2["default"].createElement('i', { className: prefixCls + '-arrow-icon' })
	          )
	        )
	      )
	    );
	  };
	
	  return Select;
	}(_react2["default"].Component);
	
	Select.propTypes = _PropTypes.SelectPropTypes;
	Select.defaultProps = {
	  prefixCls: 'u-select',
	  defaultOpen: false,
	  labelInValue: false,
	  defaultActiveFirstOption: true,
	  showSearch: true,
	  allowClear: false,
	  placeholder: '',
	  onChange: noop,
	  onFocus: noop,
	  onBlur: noop,
	  onSelect: noop,
	  onSearch: noop,
	  onDeselect: noop,
	  onInputKeyDown: noop,
	  showArrow: true,
	  dropdownMatchSelectWidth: true,
	  dropdownStyle: {},
	  dropdownMenuStyle: {},
	  optionFilterProp: 'value',
	  optionLabelProp: 'value',
	  notFoundContent: 'Not Found',
	  backfill: false,
	  showAction: ['click'],
	  tokenSeparators: [],
	  autoClearSearchValue: true,
	  onKeyDown: noop
	};
	
	Select.getDerivedStateFromProps = function (nextProps, prevState) {
	  var optionsInfo = prevState.skipBuildOptionsInfo ? prevState.optionsInfo : Select.getOptionsInfoFromProps(nextProps, prevState);
	
	  var newState = {
	    optionsInfo: optionsInfo,
	    skipBuildOptionsInfo: false
	  };
	
	  if ('open' in nextProps) {
	    newState.open = nextProps.open;
	  }
	
	  if ('value' in nextProps) {
	    var value = Select.getValueFromProps(nextProps);
	    newState.value = value;
	    if (nextProps.combobox) {
	      newState.inputValue = Select.getInputValueForCombobox(nextProps, optionsInfo);
	    }
	  }
	  return newState;
	};
	
	Select.getOptionsFromChildren = function (children) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	  _react2["default"].Children.forEach(children, function (child) {
	    if (!child) {
	      return;
	    }
	    if (child.type.isSelectOptGroup) {
	      Select.getOptionsFromChildren(child.props.children, options);
	    } else {
	      options.push(child);
	    }
	  });
	  return options;
	};
	
	Select.getInputValueForCombobox = function (props, optionsInfo, useDefaultValue) {
	  var value = [];
	  if ('value' in props && !useDefaultValue) {
	    value = (0, _util.toArray)(props.value);
	  }
	  if ('defaultValue' in props && useDefaultValue) {
	    value = (0, _util.toArray)(props.defaultValue);
	  }
	  if (value.length) {
	    value = value[0];
	  } else {
	    return '';
	  }
	  var label = value;
	  if (props.labelInValue) {
	    label = value.label;
	  } else if (optionsInfo[(0, _util.getMapKey)(value)]) {
	    label = optionsInfo[(0, _util.getMapKey)(value)].label;
	  }
	  if (label === undefined) {
	    label = '';
	  }
	  return label;
	};
	
	Select.getLabelFromOption = function (props, option) {
	  return (0, _util.getPropValue)(option, props.optionLabelProp);
	};
	
	Select.getOptionsInfoFromProps = function (props, preState) {
	  var options = Select.getOptionsFromChildren(props.children);
	  var optionsInfo = {};
	  options.forEach(function (option) {
	    var singleValue = (0, _util.getValuePropValue)(option);
	    optionsInfo[(0, _util.getMapKey)(singleValue)] = {
	      option: option,
	      value: singleValue,
	      label: Select.getLabelFromOption(props, option),
	      title: option.props.title
	    };
	  });
	  if (preState) {
	    // keep option info in pre state value.
	    var oldOptionsInfo = preState.optionsInfo;
	    var value = preState.value;
	    value.forEach(function (v) {
	      var key = (0, _util.getMapKey)(v);
	      if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
	        optionsInfo[key] = oldOptionsInfo[key];
	      }
	    });
	  }
	  return optionsInfo;
	};
	
	Select.getValueFromProps = function (props, useDefaultValue) {
	  var value = [];
	  if ('value' in props && !useDefaultValue) {
	    value = (0, _util.toArray)(props.value);
	  }
	  if ('defaultValue' in props && useDefaultValue) {
	    value = (0, _util.toArray)(props.defaultValue);
	  }
	  if (props.labelInValue) {
	    value = value.map(function (v) {
	      return v.key;
	    });
	  }
	  return value;
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.onInputChange = function (event) {
	    var tokenSeparators = _this2.props.tokenSeparators;
	
	    var val = event.target.value;
	    if ((0, _util.isMultipleOrTags)(_this2.props) && tokenSeparators.length && (0, _util.includesSeparators)(val, tokenSeparators)) {
	      var nextValue = _this2.getValueByInput(val);
	      if (nextValue !== undefined) {
	        _this2.fireChange(nextValue);
	      }
	      _this2.setOpenState(false, true);
	      _this2.setInputValue('', false);
	      return;
	    }
	    _this2.setInputValue(val);
	    _this2.setState({
	      open: true
	    });
	    if ((0, _util.isCombobox)(_this2.props)) {
	      _this2.fireChange([val]);
	    }
	  };
	
	  this.onDropdownVisibleChange = function (open) {
	    if (open && !_this2._focused) {
	      _this2.clearBlurTime();
	      _this2.timeoutFocus();
	      _this2._focused = true;
	      _this2.updateFocusClassName();
	    }
	    _this2.setOpenState(open);
	  };
	
	  this.onKeyDown = function (event) {
	    var open = _this2.state.open;
	    var _props2 = _this2.props,
	        disabled = _props2.disabled,
	        onKeyDown = _props2.onKeyDown;
	
	    if (disabled) {
	      return;
	    }
	    var keyCode = event.keyCode;
	    if (open && !_this2.getInputDOMNode()) {
	      _this2.onInputKeyDown(event);
	    } else if (keyCode === _tinperBeeCore.KeyCode.ENTER || keyCode === _tinperBeeCore.KeyCode.DOWN || keyCode === _tinperBeeCore.KeyCode.SPACE) {
	      if (!open) _this2.setOpenState(true);
	      event.preventDefault();
	    }
	    onKeyDown(event); //sp
	  };
	
	  this.onInputKeyDown = function (event) {
	    var props = _this2.props;
	    if (props.disabled) {
	      return;
	    }
	    var state = _this2.state;
	    var keyCode = event.keyCode;
	    if ((0, _util.isMultipleOrTags)(props) && !event.target.value && keyCode === _tinperBeeCore.KeyCode.BACKSPACE) {
	      event.preventDefault();
	      var value = state.value;
	
	      if (value.length) {
	        _this2.removeSelected(value[value.length - 1]);
	      }
	      return;
	    }
	    if (keyCode === _tinperBeeCore.KeyCode.DOWN) {
	      if (!state.open) {
	        _this2.openIfHasChildren();
	        event.preventDefault();
	        event.stopPropagation();
	        return;
	      }
	    } else if (keyCode === _tinperBeeCore.KeyCode.ENTER && state.open) {
	      // Aviod trigger form submit when select item
	      // https://github.com/ant-design/ant-design/issues/10861
	      event.preventDefault();
	    } else if (keyCode === _tinperBeeCore.KeyCode.ESC) {
	      if (state.open) {
	        _this2.setOpenState(false);
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      if (props.showSearch) props.onKeyDown(event); //sp
	      return;
	    }
	
	    if (_this2.getRealOpenState(state)) {
	      var menu = _this2.selectTriggerRef.getInnerMenu();
	      if (menu && menu.onKeyDown(event, _this2.handleBackfill)) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	    }
	  };
	
	  this.onMenuSelect = function (_ref) {
	    var item = _ref.item;
	
	    if (!item) {
	      return;
	    }
	
	    var value = _this2.state.value;
	    var props = _this2.props;
	    var selectedValue = (0, _util.getValuePropValue)(item);
	    var lastValue = value[value.length - 1];
	    _this2.fireSelect(selectedValue);
	    if ((0, _util.isMultipleOrTags)(props)) {
	      if ((0, _util.findIndexInValueBySingleValue)(value, selectedValue) !== -1) {
	        return;
	      }
	      value = value.concat([selectedValue]);
	    } else {
	      if (lastValue !== undefined && lastValue === selectedValue && selectedValue !== _this2.state.backfillValue) {
	        _this2.setOpenState(false, true);
	        return;
	      }
	      value = [selectedValue];
	      _this2.setOpenState(false, true);
	    }
	    _this2.fireChange(value);
	    var inputValue = void 0;
	    if ((0, _util.isCombobox)(props)) {
	      inputValue = (0, _util.getPropValue)(item, props.optionLabelProp);
	    } else {
	      inputValue = '';
	    }
	    if (props.autoClearSearchValue) {
	      _this2.setInputValue(inputValue, false);
	    }
	  };
	
	  this.onMenuDeselect = function (_ref2) {
	    var item = _ref2.item,
	        domEvent = _ref2.domEvent;
	
	    if (domEvent.type === 'keydown' && domEvent.keyCode === _tinperBeeCore.KeyCode.ENTER) {
	      _this2.removeSelected((0, _util.getValuePropValue)(item));
	      return;
	    }
	    if (domEvent.type === 'click') {
	      _this2.removeSelected((0, _util.getValuePropValue)(item));
	    }
	    var props = _this2.props;
	
	    if (props.autoClearSearchValue) {
	      _this2.setInputValue('', false);
	    }
	  };
	
	  this.onArrowClick = function (e) {
	    e.stopPropagation();
	    e.preventDefault();
	    _this2.props.onFocus(_this2.state.value);
	    if (!_this2.props.disabled) {
	      _this2.setOpenState(!_this2.state.open, !_this2.state.open);
	    }
	  };
	
	  this.onPlaceholderClick = function () {
	    if (_this2.getInputDOMNode()) {
	      _this2.getInputDOMNode().focus();
	    }
	  };
	
	  this.onOuterFocus = function (e) {
	    if (_this2.props.disabled) {
	      e.preventDefault();
	      return;
	    }
	    _this2.clearBlurTime();
	    if (!(0, _util.isMultipleOrTagsOrCombobox)(_this2.props) && e.target === _this2.getInputDOMNode()) {
	      return;
	    }
	    if (_this2._focused) {
	      return;
	    }
	    _this2._focused = true;
	    _this2.updateFocusClassName();
	    if (!_this2._mouseDown) {
	      _this2.timeoutFocus();
	    }
	  };
	
	  this.onPopupFocus = function () {
	    // fix ie scrollbar, focus element again
	    _this2.maybeFocus(true, true);
	  };
	
	  this.onOuterBlur = function (e) {
	    if (_this2.props.disabled) {
	      e.preventDefault();
	      return;
	    }
	    _this2.blurTimer = setTimeout(function () {
	      _this2._focused = false;
	      _this2.updateFocusClassName();
	      var props = _this2.props;
	      var value = _this2.state.value;
	      var inputValue = _this2.state.inputValue;
	
	      if ((0, _util.isSingleMode)(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
	        var options = _this2._options || [];
	        if (options.length) {
	          var firstOption = (0, _util.findFirstMenuItem)(options);
	          if (firstOption) {
	            value = [(0, _util.getValuePropValue)(firstOption)];
	            _this2.fireChange(value);
	          }
	        }
	      } else if ((0, _util.isMultipleOrTags)(props) && inputValue) {
	        if (_this2._mouseDown) {
	          // need update dropmenu when not blur
	          _this2.setInputValue('');
	        } else {
	          // why not use setState?
	          _this2.state.inputValue = _this2.getInputDOMNode().value = '';
	        }
	
	        value = _this2.getValueByInput(inputValue);
	        if (value !== undefined) {
	          _this2.fireChange(value);
	        }
	      }
	
	      // if click the rest space of Select in multiple mode
	      if ((0, _util.isMultipleOrTags)(props) && _this2._mouseDown) {
	        _this2.maybeFocus(true, true);
	        _this2._mouseDown = false;
	        return;
	      }
	      _this2.setOpenState(false);
	      props.onBlur(_this2.getVLForOnChange(value));
	    }, 10);
	  };
	
	  this.onClearSelection = function (event) {
	    var props = _this2.props;
	    var state = _this2.state;
	    if (props.disabled) {
	      return;
	    }
	    var inputValue = state.inputValue,
	        value = state.value;
	
	    event.stopPropagation();
	    if (inputValue || value.length) {
	      if (value.length) {
	        _this2.fireChange([]);
	      }
	      _this2.setOpenState(false, true);
	      if (inputValue) {
	        _this2.setInputValue('');
	      }
	    }
	  };
	
	  this.onChoiceAnimationLeave = function () {
	    _this2.forcePopupAlign();
	  };
	
	  this.getOptionInfoBySingleValue = function (value, optionsInfo) {
	    var info = void 0;
	    optionsInfo = optionsInfo || _this2.state.optionsInfo;
	    if (optionsInfo[(0, _util.getMapKey)(value)]) {
	      info = optionsInfo[(0, _util.getMapKey)(value)];
	    }
	    if (info) {
	      return info;
	    }
	    var defaultLabel = value;
	    if (_this2.props.labelInValue) {
	      var label = (0, _util.getLabelFromPropsValue)(_this2.props.value, value);
	      if (label !== undefined) {
	        defaultLabel = label;
	      }
	    }
	    var defaultInfo = {
	      option: _react2["default"].createElement(
	        _Option2["default"],
	        { value: value, key: value },
	        value
	      ),
	      value: value,
	      label: defaultLabel
	    };
	    return defaultInfo;
	  };
	
	  this.getOptionBySingleValue = function (value) {
	    var _getOptionInfoBySingl = _this2.getOptionInfoBySingleValue(value),
	        option = _getOptionInfoBySingl.option;
	
	    return option;
	  };
	
	  this.getOptionsBySingleValue = function (values) {
	    return values.map(function (value) {
	      return _this2.getOptionBySingleValue(value);
	    });
	  };
	
	  this.getValueByLabel = function (label) {
	    if (label === undefined) {
	      return null;
	    }
	    var value = null;
	    Object.keys(_this2.state.optionsInfo).forEach(function (key) {
	      var info = _this2.state.optionsInfo[key];
	      if ((0, _util.toArray)(info.label).join('') === label) {
	        value = info.value;
	      }
	    });
	    return value;
	  };
	
	  this.getVLBySingleValue = function (value) {
	    if (_this2.props.labelInValue) {
	      return {
	        key: value,
	        label: _this2.getLabelBySingleValue(value)
	      };
	    }
	    return value;
	  };
	
	  this.getVLForOnChange = function (vls_) {
	    var vls = vls_;
	    if (vls !== undefined) {
	      if (!_this2.props.labelInValue) {
	        vls = vls.map(function (v) {
	          return v;
	        });
	      } else {
	        vls = vls.map(function (vl) {
	          return {
	            key: vl,
	            label: _this2.getLabelBySingleValue(vl)
	          };
	        });
	      }
	      return (0, _util.isMultipleOrTags)(_this2.props) ? vls : vls[0];
	    }
	    return vls;
	  };
	
	  this.getLabelBySingleValue = function (value, optionsInfo) {
	    var _getOptionInfoBySingl2 = _this2.getOptionInfoBySingleValue(value, optionsInfo),
	        label = _getOptionInfoBySingl2.label;
	
	    return label;
	  };
	
	  this.getDropdownContainer = function () {
	    if (!_this2.dropdownContainer) {
	      _this2.dropdownContainer = document.createElement('div');
	      document.body.appendChild(_this2.dropdownContainer);
	    }
	    return _this2.dropdownContainer;
	  };
	
	  this.getPlaceholderElement = function () {
	    var props = _this2.props,
	        state = _this2.state;
	
	    var hidden = false;
	    if (state.inputValue) {
	      hidden = true;
	    }
	    if (state.value.length) {
	      hidden = true;
	    }
	    if ((0, _util.isCombobox)(props) && state.value.length === 1 && !state.value[0]) {
	      hidden = false;
	    }
	    var placeholder = props.placeholder;
	    if (placeholder) {
	      return _react2["default"].createElement(
	        'div',
	        _extends({
	          onMouseDown: _util.preventDefaultEvent,
	          style: _extends({
	            display: hidden ? 'none' : 'block'
	          }, _util.UNSELECTABLE_STYLE)
	        }, _util.UNSELECTABLE_ATTRIBUTE, {
	          onClick: _this2.onPlaceholderClick,
	          className: props.prefixCls + '-selection-placeholder'
	        }),
	        placeholder
	      );
	    }
	    return null;
	  };
	
	  this.getInputElement = function () {
	    var props = _this2.props;
	    var inputElement = props.getInputElement ? props.getInputElement() : _react2["default"].createElement('input', { id: props.id, autoComplete: 'off' });
	    var inputCls = (0, _classnames3["default"])(inputElement.props.className, _defineProperty({}, props.prefixCls + '-search-field', true));
	    // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
	    // Add space to the end of the inputValue as the width measurement tolerance
	    return _react2["default"].createElement(
	      'div',
	      { className: props.prefixCls + '-search-field-wrap' },
	      _react2["default"].cloneElement(inputElement, {
	        ref: _this2.saveInputRef,
	        onChange: _this2.onInputChange,
	        onKeyDown: chaining(_this2.onInputKeyDown, inputElement.props.onKeyDown, _this2.props.onInputKeyDown),
	        value: _this2.state.inputValue,
	        disabled: props.disabled,
	        className: inputCls
	      }),
	      _react2["default"].createElement(
	        'span',
	        {
	          ref: _this2.saveInputMirrorRef,
	          className: props.prefixCls + '-search-field-mirror'
	        },
	        _this2.state.inputValue,
	        '\xA0'
	      )
	    );
	  };
	
	  this.getInputDOMNode = function () {
	    return _this2.topCtrlRef ? _this2.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : _this2.inputRef;
	  };
	
	  this.getInputMirrorDOMNode = function () {
	    return _this2.inputMirrorRef;
	  };
	
	  this.getPopupDOMNode = function () {
	    return _this2.selectTriggerRef.getPopupDOMNode();
	  };
	
	  this.getPopupMenuComponent = function () {
	    return _this2.selectTriggerRef.getInnerMenu();
	  };
	
	  this.setOpenState = function (open, needFocus) {
	    var props = _this2.props,
	        state = _this2.state;
	
	    if (state.open === open) {
	      _this2.maybeFocus(open, needFocus);
	      return;
	    }
	
	    if (_this2.props.onDropdownVisibleChange) {
	      _this2.props.onDropdownVisibleChange(open);
	    }
	
	    var nextState = {
	      open: open,
	      backfillValue: undefined
	    };
	    // clear search input value when open is false in singleMode.
	    if (!open && (0, _util.isSingleMode)(props) && props.showSearch) {
	      _this2.setInputValue('', false);
	    }
	    if (!open) {
	      _this2.maybeFocus(open, needFocus);
	    }
	    _this2.setState(nextState, function () {
	      if (open) {
	        _this2.maybeFocus(open, needFocus);
	      }
	    });
	  };
	
	  this.setInputValue = function (inputValue) {
	    var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (inputValue !== _this2.state.inputValue) {
	      _this2.setState({
	        inputValue: inputValue
	      }, _this2.forcePopupAlign);
	      if (fireSearch) {
	        _this2.props.onSearch(inputValue);
	      }
	    }
	  };
	
	  this.getValueByInput = function (string) {
	    var _props3 = _this2.props,
	        multiple = _props3.multiple,
	        tokenSeparators = _props3.tokenSeparators;
	
	    var nextValue = _this2.state.value;
	    var hasNewValue = false;
	    (0, _util.splitBySeparators)(string, tokenSeparators).forEach(function (label) {
	      var selectedValue = [label];
	      if (multiple) {
	        var value = _this2.getValueByLabel(label);
	        if (value && (0, _util.findIndexInValueBySingleValue)(nextValue, value) === -1) {
	          nextValue = nextValue.concat(value);
	          hasNewValue = true;
	          _this2.fireSelect(value);
	        }
	      } else {
	        // tag
	        if ((0, _util.findIndexInValueBySingleValue)(nextValue, label) === -1) {
	          nextValue = nextValue.concat(selectedValue);
	          hasNewValue = true;
	          _this2.fireSelect(label);
	        }
	      }
	    });
	    return hasNewValue ? nextValue : undefined;
	  };
	
	  this.getRealOpenState = function (state) {
	    var _open = _this2.props.open;
	
	    if (typeof _open === 'boolean') {
	      return _open;
	    }
	    var open = (state || _this2.state).open;
	    var options = _this2._options || [];
	    if ((0, _util.isMultipleOrTagsOrCombobox)(_this2.props) || !_this2.props.showSearch) {
	      if (open && !options.length) {
	        open = false;
	      }
	    }
	    return open;
	  };
	
	  this.markMouseDown = function () {
	    _this2._mouseDown = true;
	  };
	
	  this.markMouseLeave = function () {
	    _this2._mouseDown = false;
	  };
	
	  this.handleBackfill = function (item) {
	    if (!_this2.props.backfill || !((0, _util.isSingleMode)(_this2.props) || (0, _util.isCombobox)(_this2.props))) {
	      return;
	    }
	
	    var key = (0, _util.getValuePropValue)(item);
	
	    if ((0, _util.isCombobox)(_this2.props)) {
	      _this2.setInputValue(key, false);
	    }
	
	    _this2.setState({
	      value: [key],
	      backfillValue: key
	    });
	  };
	
	  this.filterOption = function (input, child) {
	    var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util.defaultFilterFn;
	    var value = _this2.state.value;
	
	    var lastValue = value[value.length - 1];
	    if (!input || lastValue && lastValue === _this2.state.backfillValue) {
	      return true;
	    }
	    var filterFn = _this2.props.filterOption;
	    if ('filterOption' in _this2.props) {
	      if (_this2.props.filterOption === true) {
	        filterFn = defaultFilter;
	      }
	    } else {
	      filterFn = defaultFilter;
	    }
	
	    if (!filterFn) {
	      return true;
	    } else if (typeof filterFn === 'function') {
	      return filterFn.call(_this2, input, child);
	    } else if (child.props.disabled) {
	      return false;
	    }
	    return true;
	  };
	
	  this.timeoutFocus = function () {
	    if (_this2.focusTimer) {
	      _this2.clearFocusTime();
	    }
	    _this2.focusTimer = setTimeout(function () {
	      _this2.props.onFocus();
	    }, 10);
	  };
	
	  this.clearFocusTime = function () {
	    if (_this2.focusTimer) {
	      clearTimeout(_this2.focusTimer);
	      _this2.focusTimer = null;
	    }
	  };
	
	  this.clearBlurTime = function () {
	    if (_this2.blurTimer) {
	      clearTimeout(_this2.blurTimer);
	      _this2.blurTimer = null;
	    }
	  };
	
	  this.updateFocusClassName = function () {
	    var rootRef = _this2.rootRef,
	        props = _this2.props;
	    // avoid setState and its side effect
	
	    if (_this2._focused) {
	      (0, _componentClasses2["default"])(rootRef).add(props.prefixCls + '-focused');
	    } else {
	      (0, _componentClasses2["default"])(rootRef).remove(props.prefixCls + '-focused');
	    }
	  };
	
	  this.maybeFocus = function (open, needFocus) {
	    if (needFocus || open) {
	      var input = _this2.getInputDOMNode();
	      var _document = document,
	          activeElement = _document.activeElement;
	
	      if (input && (open || (0, _util.isMultipleOrTagsOrCombobox)(_this2.props))) {
	        if (activeElement !== input) {
	          input.focus();
	          _this2._focused = true;
	        }
	      } else if (activeElement !== _this2.selectionRef) {
	        _this2.selectionRef.focus();
	        _this2._focused = true;
	      }
	    }
	  };
	
	  this.removeSelected = function (selectedKey, e) {
	    var props = _this2.props;
	    if (props.disabled || _this2.isChildDisabled(selectedKey)) {
	      return;
	    }
	
	    // Do not trigger Trigger popup
	    if (e && e.stopPropagation) {
	      e.stopPropagation();
	    }
	
	    var value = _this2.state.value.filter(function (singleValue) {
	      return singleValue !== selectedKey;
	    });
	    var canMultiple = (0, _util.isMultipleOrTags)(props);
	
	    if (canMultiple) {
	      var event = selectedKey;
	      if (props.labelInValue) {
	        event = {
	          key: selectedKey,
	          label: _this2.getLabelBySingleValue(selectedKey)
	        };
	      }
	      props.onDeselect(event, _this2.getOptionBySingleValue(selectedKey));
	    }
	    _this2.fireChange(value);
	  };
	
	  this.openIfHasChildren = function () {
	    var props = _this2.props;
	    if (_react2["default"].Children.count(props.children) || (0, _util.isSingleMode)(props)) {
	      _this2.setOpenState(true);
	    }
	  };
	
	  this.fireSelect = function (value) {
	    _this2.props.onSelect(_this2.getVLBySingleValue(value), _this2.getOptionBySingleValue(value));
	  };
	
	  this.fireChange = function (value) {
	    var props = _this2.props;
	    if (!('value' in props)) {
	      _this2.setState({
	        value: value
	      }, _this2.forcePopupAlign);
	    }
	    var vls = _this2.getVLForOnChange(value);
	    var options = _this2.getOptionsBySingleValue(value);
	    props.onChange(vls, (0, _util.isMultipleOrTags)(_this2.props) ? options : options[0]);
	  };
	
	  this.isChildDisabled = function (key) {
	    return (0, _tinperBeeCore.toArray)(_this2.props.children).some(function (child) {
	      var childValue = (0, _util.getValuePropValue)(child);
	      return childValue === key && child.props && child.props.disabled;
	    });
	  };
	
	  this.forcePopupAlign = function () {
	    if (!_this2.state.open) {
	      return;
	    }
	    _this2.selectTriggerRef.triggerRef.forcePopupAlign();
	  };
	
	  this.renderFilterOptions = function () {
	    var inputValue = _this2.state.inputValue;
	    var _props4 = _this2.props,
	        children = _props4.children,
	        tags = _props4.tags,
	        filterOption = _props4.filterOption,
	        notFoundContent = _props4.notFoundContent;
	
	    var menuItems = [];
	    var childrenKeys = [];
	    var options = _this2.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);
	    if (tags) {
	      // tags value must be string
	      var value = _this2.state.value;
	      value = value.filter(function (singleValue) {
	        return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
	      });
	      value.forEach(function (singleValue) {
	        var key = singleValue;
	        var menuItem = _react2["default"].createElement(
	          _rcMenu.Item,
	          {
	            style: _util.UNSELECTABLE_STYLE,
	            role: 'option',
	            attribute: _util.UNSELECTABLE_ATTRIBUTE,
	            value: key,
	            key: key
	          },
	          key
	        );
	        options.push(menuItem);
	        menuItems.push(menuItem);
	      });
	      if (inputValue) {
	        var notFindInputItem = menuItems.every(function (option) {
	          // this.filterOption return true has two meaning,
	          // 1, some one exists after filtering
	          // 2, filterOption is set to false
	          // condition 2 does not mean the option has same value with inputValue
	          var filterFn = function filterFn() {
	            return (0, _util.getValuePropValue)(option) === inputValue;
	          };
	          if (filterOption !== false) {
	            return !_this2.filterOption.call(_this2, inputValue, option, filterFn);
	          }
	          return !filterFn();
	        });
	        if (notFindInputItem) {
	          options.unshift(_react2["default"].createElement(
	            _rcMenu.Item,
	            {
	              style: _util.UNSELECTABLE_STYLE,
	              role: 'option',
	              attribute: _util.UNSELECTABLE_ATTRIBUTE,
	              value: inputValue,
	              key: inputValue
	            },
	            inputValue
	          ));
	        }
	      }
	    }
	
	    if (!options.length && notFoundContent) {
	      options = [_react2["default"].createElement(
	        _rcMenu.Item,
	        {
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          disabled: true,
	          role: 'option',
	          value: 'NOT_FOUND',
	          key: 'NOT_FOUND'
	        },
	        notFoundContent
	      )];
	    }
	    return options;
	  };
	
	  this.renderFilterOptionsFromChildren = function (children, childrenKeys, menuItems) {
	    var sel = [];
	    var props = _this2.props;
	    var inputValue = _this2.state.inputValue;
	
	    var tags = props.tags;
	    _react2["default"].Children.forEach(children, function (child) {
	      if (!child) {
	        return;
	      }
	      if (child.type.isSelectOptGroup) {
	        var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, childrenKeys, menuItems);
	        if (innerItems.length) {
	          var label = child.props.label;
	          var key = child.key;
	          if (!key && typeof label === 'string') {
	            key = label;
	          } else if (!label && key) {
	            label = key;
	          }
	          sel.push(_react2["default"].createElement(
	            _rcMenu.ItemGroup,
	            { key: key, title: label },
	            innerItems
	          ));
	        }
	        return;
	      }
	
	      (0, _warning2["default"])(child.type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + ('instead of `' + (child.type.name || child.type.displayName || child.type) + '`.'));
	
	      var childValue = (0, _util.getValuePropValue)(child);
	
	      (0, _util.validateOptionValue)(childValue, _this2.props);
	
	      if (_this2.filterOption(inputValue, child)) {
	        var menuItem = _react2["default"].createElement(_rcMenu.Item, _extends({
	          style: _util.UNSELECTABLE_STYLE,
	          attribute: _util.UNSELECTABLE_ATTRIBUTE,
	          value: childValue,
	          key: childValue,
	          role: 'option'
	        }, child.props));
	        sel.push(menuItem);
	        menuItems.push(menuItem);
	      }
	
	      if (tags) {
	        childrenKeys.push(childValue);
	      }
	    });
	
	    return sel;
	  };
	
	  this.renderTopControlNode = function () {
	    var _state2 = _this2.state,
	        value = _state2.value,
	        open = _state2.open,
	        inputValue = _state2.inputValue;
	
	    var props = _this2.props;
	    var choiceTransitionName = props.choiceTransitionName,
	        prefixCls = props.prefixCls,
	        maxTagTextLength = props.maxTagTextLength,
	        maxTagCount = props.maxTagCount,
	        maxTagPlaceholder = props.maxTagPlaceholder,
	        showSearch = props.showSearch,
	        removeIcon = props.removeIcon;
	
	    var className = prefixCls + '-selection-rendered';
	    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
	    var innerNode = null;
	    if ((0, _util.isSingleMode)(props)) {
	      var selectedValue = null;
	      if (value.length) {
	        var showSelectedValue = false;
	        var opacity = 1;
	        if (!showSearch) {
	          showSelectedValue = true;
	        } else if (open) {
	          showSelectedValue = !inputValue;
	          if (showSelectedValue) {
	            opacity = 0.4;
	          }
	        } else {
	          showSelectedValue = true;
	        }
	        var singleValue = value[0];
	
	        var _getOptionInfoBySingl3 = _this2.getOptionInfoBySingleValue(singleValue),
	            label = _getOptionInfoBySingl3.label,
	            title = _getOptionInfoBySingl3.title;
	
	        selectedValue = _react2["default"].createElement(
	          'div',
	          {
	            key: 'value',
	            className: prefixCls + '-selection-selected-value',
	            title: (0, _util.toTitle)(title || label),
	            style: {
	              display: showSelectedValue ? 'block' : 'none',
	              opacity: opacity
	            }
	          },
	          label
	        );
	      }
	      if (!showSearch) {
	        innerNode = [selectedValue];
	      } else {
	        innerNode = [selectedValue, _react2["default"].createElement(
	          'div',
	          {
	            className: prefixCls + '-search ' + prefixCls + '-search--inline',
	            key: 'input',
	            style: {
	              display: open ? 'block' : 'none'
	            }
	          },
	          _this2.getInputElement()
	        )];
	      }
	    } else {
	      var selectedValueNodes = [];
	      var limitedCountValue = value;
	      var maxTagPlaceholderEl = void 0;
	      if (maxTagCount !== undefined && value.length > maxTagCount) {
	        limitedCountValue = limitedCountValue.slice(0, maxTagCount);
	        var omittedValues = _this2.getVLForOnChange(value.slice(maxTagCount, value.length));
	        var content = '+ ' + (value.length - maxTagCount) + ' ...';
	        if (maxTagPlaceholder) {
	          content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
	        }
	        maxTagPlaceholderEl = _react2["default"].createElement(
	          'li',
	          _extends({
	            style: _util.UNSELECTABLE_STYLE
	          }, _util.UNSELECTABLE_ATTRIBUTE, {
	            onMouseDown: _util.preventDefaultEvent,
	            className: prefixCls + '-selection-choice ' + prefixCls + '-selection-choice-disabled',
	            key: 'maxTagPlaceholder',
	            title: (0, _util.toTitle)(content)
	          }),
	          _react2["default"].createElement(
	            'div',
	            { className: prefixCls + '-selection-choice-content' },
	            content
	          )
	        );
	      }
	      if ((0, _util.isMultipleOrTags)(props)) {
	        selectedValueNodes = limitedCountValue.map(function (singleValue) {
	          var info = _this2.getOptionInfoBySingleValue(singleValue);
	          var content = info.label;
	          var title = info.title || content;
	          if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
	            content = content.slice(0, maxTagTextLength) + '...';
	          }
	          var disabled = _this2.isChildDisabled(singleValue);
	          var choiceClassName = disabled ? prefixCls + '-selection-choice ' + prefixCls + '-selection-choice-disabled' : prefixCls + '-selection-choice';
	          return _react2["default"].createElement(
	            'li',
	            _extends({
	              style: _util.UNSELECTABLE_STYLE
	            }, _util.UNSELECTABLE_ATTRIBUTE, {
	              onMouseDown: _util.preventDefaultEvent,
	              className: choiceClassName,
	              key: singleValue,
	              title: (0, _util.toTitle)(title)
	            }),
	            _react2["default"].createElement(
	              'div',
	              { className: prefixCls + '-selection-choice-content' },
	              content
	            ),
	            disabled ? null : _react2["default"].createElement(
	              'span',
	              {
	                onClick: function onClick(event) {
	                  _this2.removeSelected(singleValue, event);
	                },
	                className: prefixCls + '-selection-choice-remove'
	              },
	              removeIcon || _react2["default"].createElement(
	                'i',
	                { className: prefixCls + '-selection-choice-remove-icon' },
	                '\xD7'
	              )
	            )
	          );
	        });
	      }
	      if (maxTagPlaceholderEl) {
	        selectedValueNodes.push(maxTagPlaceholderEl);
	      }
	      selectedValueNodes.push(_react2["default"].createElement(
	        'li',
	        {
	          className: prefixCls + '-search ' + prefixCls + '-search--inline',
	          key: '-input'
	        },
	        _this2.getInputElement()
	      ));
	
	      if ((0, _util.isMultipleOrTags)(props) && choiceTransitionName) {
	        innerNode = _react2["default"].createElement(
	          _beeAnimate2["default"],
	          {
	            onLeave: _this2.onChoiceAnimationLeave,
	            component: 'ul',
	            transitionName: choiceTransitionName
	          },
	          selectedValueNodes
	        );
	      } else {
	        innerNode = _react2["default"].createElement(
	          'ul',
	          null,
	          selectedValueNodes
	        );
	      }
	    }
	    return _react2["default"].createElement(
	      'div',
	      { className: className, ref: _this2.saveTopCtrlRef },
	      _this2.getPlaceholderElement(),
	      innerNode
	    );
	  };
	
	  this.onOuterClick = function (event) {
	    //sp:在不能输入的情况下，点击事件触发focus
	    _this2._focused = true;
	    _this2.updateFocusClassName();
	    _this2.props.onFocus(_this2.state.value);
	  };
	};
	
	Select.displayName = 'Select';
	
	(0, _reactLifecyclesCompat.polyfill)(Select);
	
	exports["default"] = Select;
	module.exports = exports['default'];

/***/ }),
/* 89 */
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Divider = exports.ItemGroup = exports.MenuItemGroup = exports.MenuItem = exports.Item = exports.SubMenu = undefined;
	
	var _Menu = __webpack_require__(91);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(192);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(218);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(222);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	var _Divider = __webpack_require__(223);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.SubMenu = _SubMenu2['default'];
	exports.Item = _MenuItem2['default'];
	exports.MenuItem = _MenuItem2['default'];
	exports.MenuItemGroup = _MenuItemGroup2['default'];
	exports.ItemGroup = _MenuItemGroup2['default'];
	exports.Divider = _Divider2['default'];
	exports['default'] = _Menu2['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(92);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(131);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _miniStore = __webpack_require__(175);
	
	var _SubPopupMenu = __webpack_require__(185);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _util = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Menu = function (_React$Component) {
	  (0, _inherits3['default'])(Menu, _React$Component);
	
	  function Menu(props) {
	    (0, _classCallCheck3['default'])(this, Menu);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    _this.isRootMenu = true;
	
	    var selectedKeys = props.defaultSelectedKeys;
	    var openKeys = props.defaultOpenKeys;
	    if ('selectedKeys' in props) {
	      selectedKeys = props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = props.openKeys || [];
	    }
	
	    _this.store = (0, _miniStore.create)({
	      selectedKeys: selectedKeys,
	      openKeys: openKeys,
	      activeKey: { '0-menu-': (0, _SubPopupMenu.getActiveKey)(props, props.activeKey) }
	    });
	    return _this;
	  }
	
	  Menu.prototype.componentDidMount = function componentDidMount() {
	    this.updateMiniStore();
	  };
	
	  Menu.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.updateMiniStore();
	  };
	
	  // onKeyDown needs to be exposed as a instance method
	  // e.g., in rc-select, we need to navigate menu item while
	  // current active item is rc-select input box rather than the menu itself
	
	
	  Menu.prototype.updateMiniStore = function updateMiniStore() {
	    if ('selectedKeys' in this.props) {
	      this.store.setState({
	        selectedKeys: this.props.selectedKeys || []
	      });
	    }
	    if ('openKeys' in this.props) {
	      this.store.setState({
	        openKeys: this.props.openKeys || []
	      });
	    }
	  };
	
	  Menu.prototype.render = function render() {
	    var _this2 = this;
	
	    var props = (0, _objectWithoutProperties3['default'])(this.props, []);
	
	    props.className += ' ' + props.prefixCls + '-root';
	    props = (0, _extends3['default'])({}, props, {
	      onClick: this.onClick,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onSelect: this.onSelect,
	      openTransitionName: this.getOpenTransitionName(),
	      parentMenu: this
	    });
	    return _react2['default'].createElement(
	      _miniStore.Provider,
	      { store: this.store },
	      _react2['default'].createElement(
	        _SubPopupMenu2['default'],
	        (0, _extends3['default'])({}, props, { ref: function ref(c) {
	            return _this2.innerMenu = c;
	          } }),
	        this.props.children
	      )
	    );
	  };
	
	  return Menu;
	}(_react2['default'].Component);
	
	Menu.propTypes = {
	  defaultSelectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  defaultActiveFirst: _propTypes2['default'].bool,
	  selectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  defaultOpenKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  openKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  mode: _propTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
	  getPopupContainer: _propTypes2['default'].func,
	  onClick: _propTypes2['default'].func,
	  onSelect: _propTypes2['default'].func,
	  onDeselect: _propTypes2['default'].func,
	  onDestroy: _propTypes2['default'].func,
	  openTransitionName: _propTypes2['default'].string,
	  openAnimation: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  subMenuOpenDelay: _propTypes2['default'].number,
	  subMenuCloseDelay: _propTypes2['default'].number,
	  forceSubMenuRender: _propTypes2['default'].bool,
	  triggerSubMenuAction: _propTypes2['default'].string,
	  level: _propTypes2['default'].number,
	  selectable: _propTypes2['default'].bool,
	  multiple: _propTypes2['default'].bool,
	  children: _propTypes2['default'].any,
	  className: _propTypes2['default'].string,
	  style: _propTypes2['default'].object,
	  activeKey: _propTypes2['default'].string,
	  prefixCls: _propTypes2['default'].string,
	  builtinPlacements: _propTypes2['default'].object,
	  itemIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].node]),
	  expandIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].node]),
	  overflowedIndicator: _propTypes2['default'].node
	};
	Menu.defaultProps = {
	  selectable: true,
	  onClick: _util.noop,
	  onSelect: _util.noop,
	  onOpenChange: _util.noop,
	  onDeselect: _util.noop,
	  defaultSelectedKeys: [],
	  defaultOpenKeys: [],
	  subMenuOpenDelay: 0.1,
	  subMenuCloseDelay: 0.1,
	  triggerSubMenuAction: 'hover',
	  prefixCls: 'rc-menu',
	  className: '',
	  mode: 'vertical',
	  style: {},
	  builtinPlacements: {},
	  overflowedIndicator: _react2['default'].createElement(
	    'span',
	    null,
	    '\xB7\xB7\xB7'
	  )
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.onSelect = function (selectInfo) {
	    var props = _this3.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = _this3.store.getState().selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        _this3.store.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect((0, _extends3['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  };
	
	  this.onClick = function (e) {
	    _this3.props.onClick(e);
	  };
	
	  this.onKeyDown = function (e, callback) {
	    _this3.innerMenu.getWrappedInstance().onKeyDown(e, callback);
	  };
	
	  this.onOpenChange = function (event) {
	    var props = _this3.props;
	    var openKeys = _this3.store.getState().openKeys.concat();
	    var changed = false;
	    var processSingle = function processSingle(e) {
	      var oneChanged = false;
	      if (e.open) {
	        oneChanged = openKeys.indexOf(e.key) === -1;
	        if (oneChanged) {
	          openKeys.push(e.key);
	        }
	      } else {
	        var index = openKeys.indexOf(e.key);
	        oneChanged = index !== -1;
	        if (oneChanged) {
	          openKeys.splice(index, 1);
	        }
	      }
	      changed = changed || oneChanged;
	    };
	    if (Array.isArray(event)) {
	      // batch change call
	      event.forEach(processSingle);
	    } else {
	      processSingle(event);
	    }
	    if (changed) {
	      if (!('openKeys' in _this3.props)) {
	        _this3.store.setState({ openKeys: openKeys });
	      }
	      props.onOpenChange(openKeys);
	    }
	  };
	
	  this.onDeselect = function (selectInfo) {
	    var props = _this3.props;
	    if (props.selectable) {
	      var selectedKeys = _this3.store.getState().selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        _this3.store.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect((0, _extends3['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  };
	
	  this.getOpenTransitionName = function () {
	    var props = _this3.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  };
	};
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(93);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(95);
	module.exports = __webpack_require__(98).Object.assign;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(96);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(112) });


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(97);
	var core = __webpack_require__(98);
	var ctx = __webpack_require__(99);
	var hide = __webpack_require__(101);
	var has = __webpack_require__(111);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.6.5' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(100);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(102);
	var createDesc = __webpack_require__(110);
	module.exports = __webpack_require__(106) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(103);
	var IE8_DOM_DEFINE = __webpack_require__(105);
	var toPrimitive = __webpack_require__(109);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(106) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(104);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(106) && !__webpack_require__(107)(function () {
	  return Object.defineProperty(__webpack_require__(108)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(107)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(104);
	var document = __webpack_require__(97).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(104);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(113);
	var gOPS = __webpack_require__(128);
	var pIE = __webpack_require__(129);
	var toObject = __webpack_require__(130);
	var IObject = __webpack_require__(116);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(107)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(114);
	var enumBugKeys = __webpack_require__(127);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(111);
	var toIObject = __webpack_require__(115);
	var arrayIndexOf = __webpack_require__(119)(false);
	var IE_PROTO = __webpack_require__(123)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(116);
	var defined = __webpack_require__(118);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(117);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(115);
	var toLength = __webpack_require__(120);
	var toAbsoluteIndex = __webpack_require__(122);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(121);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(121);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(124)('keys');
	var uid = __webpack_require__(126);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(98);
	var global = __webpack_require__(97);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(125) ? 'pure' : 'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 128 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(118);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 131 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(134);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(135);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(154);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(137);
	__webpack_require__(149);
	module.exports = __webpack_require__(153).f('iterator');


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(138)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(139)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(121);
	var defined = __webpack_require__(118);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(125);
	var $export = __webpack_require__(96);
	var redefine = __webpack_require__(140);
	var hide = __webpack_require__(101);
	var Iterators = __webpack_require__(141);
	var $iterCreate = __webpack_require__(142);
	var setToStringTag = __webpack_require__(146);
	var getPrototypeOf = __webpack_require__(148);
	var ITERATOR = __webpack_require__(147)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(101);


/***/ }),
/* 141 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(143);
	var descriptor = __webpack_require__(110);
	var setToStringTag = __webpack_require__(146);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(101)(IteratorPrototype, __webpack_require__(147)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(103);
	var dPs = __webpack_require__(144);
	var enumBugKeys = __webpack_require__(127);
	var IE_PROTO = __webpack_require__(123)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(108)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(145).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(102);
	var anObject = __webpack_require__(103);
	var getKeys = __webpack_require__(113);
	
	module.exports = __webpack_require__(106) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(97).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(102).f;
	var has = __webpack_require__(111);
	var TAG = __webpack_require__(147)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(124)('wks');
	var uid = __webpack_require__(126);
	var Symbol = __webpack_require__(97).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(111);
	var toObject = __webpack_require__(130);
	var IE_PROTO = __webpack_require__(123)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(150);
	var global = __webpack_require__(97);
	var hide = __webpack_require__(101);
	var Iterators = __webpack_require__(141);
	var TO_STRING_TAG = __webpack_require__(147)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(151);
	var step = __webpack_require__(152);
	var Iterators = __webpack_require__(141);
	var toIObject = __webpack_require__(115);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(139)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 151 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 152 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(147);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(156);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	module.exports = __webpack_require__(98).Symbol;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(97);
	var has = __webpack_require__(111);
	var DESCRIPTORS = __webpack_require__(106);
	var $export = __webpack_require__(96);
	var redefine = __webpack_require__(140);
	var META = __webpack_require__(157).KEY;
	var $fails = __webpack_require__(107);
	var shared = __webpack_require__(124);
	var setToStringTag = __webpack_require__(146);
	var uid = __webpack_require__(126);
	var wks = __webpack_require__(147);
	var wksExt = __webpack_require__(153);
	var wksDefine = __webpack_require__(158);
	var enumKeys = __webpack_require__(159);
	var isArray = __webpack_require__(160);
	var anObject = __webpack_require__(103);
	var isObject = __webpack_require__(104);
	var toIObject = __webpack_require__(115);
	var toPrimitive = __webpack_require__(109);
	var createDesc = __webpack_require__(110);
	var _create = __webpack_require__(143);
	var gOPNExt = __webpack_require__(161);
	var $GOPD = __webpack_require__(163);
	var $DP = __webpack_require__(102);
	var $keys = __webpack_require__(113);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(162).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(129).f = $propertyIsEnumerable;
	  __webpack_require__(128).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(125)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(101)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(126)('meta');
	var isObject = __webpack_require__(104);
	var has = __webpack_require__(111);
	var setDesc = __webpack_require__(102).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(107)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(97);
	var core = __webpack_require__(98);
	var LIBRARY = __webpack_require__(125);
	var wksExt = __webpack_require__(153);
	var defineProperty = __webpack_require__(102).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(113);
	var gOPS = __webpack_require__(128);
	var pIE = __webpack_require__(129);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(117);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(115);
	var gOPN = __webpack_require__(162).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(114);
	var hiddenKeys = __webpack_require__(127).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(129);
	var createDesc = __webpack_require__(110);
	var toIObject = __webpack_require__(115);
	var toPrimitive = __webpack_require__(109);
	var has = __webpack_require__(111);
	var IE8_DOM_DEFINE = __webpack_require__(105);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(106) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 164 */
/***/ (function(module, exports) {



/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(158)('asyncIterator');


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(158)('observable');


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(168);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(172);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(134);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(170);
	module.exports = __webpack_require__(98).Object.setPrototypeOf;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(96);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(171).set });


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(104);
	var anObject = __webpack_require__(103);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(99)(Function.call, __webpack_require__(163).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(173), __esModule: true };

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(174);
	var $Object = __webpack_require__(98).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(96);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(143) });


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = exports.connect = exports.Provider = undefined;
	
	var _Provider2 = __webpack_require__(176);
	
	var _Provider3 = _interopRequireDefault(_Provider2);
	
	var _connect2 = __webpack_require__(178);
	
	var _connect3 = _interopRequireDefault(_connect2);
	
	var _create2 = __webpack_require__(184);
	
	var _create3 = _interopRequireDefault(_create2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Provider = _Provider3.default;
	exports.connect = _connect3.default;
	exports.create = _create3.default;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PropTypes = __webpack_require__(177);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  function Provider() {
	    _classCallCheck(this, Provider);
	
	    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
	  }
	
	  _createClass(Provider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        miniStore: this.props.store
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react.Children.only(this.props.children);
	    }
	  }]);
	
	  return Provider;
	}(_react.Component);
	
	Provider.propTypes = {
	  store: _PropTypes.storeShape.isRequired
	};
	Provider.childContextTypes = {
	  miniStore: _PropTypes.storeShape.isRequired
	};
	exports.default = Provider;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.storeShape = undefined;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var storeShape = exports.storeShape = _propTypes2.default.shape({
	  subscribe: _propTypes2.default.func.isRequired,
	  setState: _propTypes2.default.func.isRequired,
	  getState: _propTypes2.default.func.isRequired
	});

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = connect;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shallowequal = __webpack_require__(179);
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	var _hoistNonReactStatics = __webpack_require__(180);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _reactLifecyclesCompat = __webpack_require__(89);
	
	var _PropTypes = __webpack_require__(177);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	function isStateless(Component) {
	  return !Component.prototype.render;
	}
	
	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	
	function connect(mapStateToProps) {
	  var shouldSubscribe = !!mapStateToProps;
	  var finnalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	
	  return function wrapWithConnect(WrappedComponent) {
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      _createClass(Connect, null, [{
	        key: 'getDerivedStateFromProps',
	        value: function getDerivedStateFromProps(props, prevState) {
	          // using ownProps
	          if (mapStateToProps && mapStateToProps.length === 2 && props !== prevState.props) {
	            return {
	              subscribed: finnalMapStateToProps(prevState.store.getState(), props),
	              props: props
	            };
	          }
	          return { props: props };
	        }
	      }]);
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, (Connect.__proto__ || Object.getPrototypeOf(Connect)).call(this, props, context));
	
	        _this.handleChange = function () {
	          if (!_this.unsubscribe) {
	            return;
	          }
	          var nextState = finnalMapStateToProps(_this.store.getState(), _this.props);
	          _this.setState({ subscribed: nextState });
	        };
	
	        _this.store = context.miniStore;
	        _this.state = {
	          subscribed: finnalMapStateToProps(_this.store.getState(), props),
	          store: _this.store,
	          props: props
	        };
	        return _this;
	      }
	
	      _createClass(Connect, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          this.trySubscribe();
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          this.tryUnsubscribe();
	        }
	      }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	          return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state.subscribed, nextState.subscribed);
	        }
	      }, {
	        key: 'trySubscribe',
	        value: function trySubscribe() {
	          if (shouldSubscribe) {
	            this.unsubscribe = this.store.subscribe(this.handleChange);
	            this.handleChange();
	          }
	        }
	      }, {
	        key: 'tryUnsubscribe',
	        value: function tryUnsubscribe() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	            this.unsubscribe = null;
	          }
	        }
	      }, {
	        key: 'getWrappedInstance',
	        value: function getWrappedInstance() {
	          return this.wrappedInstance;
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _this2 = this;
	
	          var props = _extends({}, this.props, this.state.subscribed, {
	            store: this.store
	          });
	
	          if (!isStateless(WrappedComponent)) {
	            props = _extends({}, props, {
	              ref: function ref(c) {
	                return _this2.wrappedInstance = c;
	              }
	            });
	          }
	
	          return _react2.default.createElement(WrappedComponent, props);
	        }
	      }]);
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.contextTypes = {
	      miniStore: _PropTypes.storeShape.isRequired
	    };
	
	
	    (0, _reactLifecyclesCompat.polyfill)(Connect);
	
	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}

/***/ }),
/* 179 */
/***/ (function(module, exports) {

	//
	
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	  if (ret !== void 0) {
	    return !!ret;
	  }
	
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	  // Test for A's keys different from B.
	  for (var idx = 0; idx < keysA.length; idx++) {
	    var key = keysA[idx];
	
	    if (!bHasOwnProperty(key)) {
	      return false;
	    }
	
	    var valueA = objA[key];
	    var valueB = objB[key];
	
	    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	    if (ret === false || (ret === void 0 && valueA !== valueB)) {
	      return false;
	    }
	  }
	
	  return true;
	};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var ReactIs = __webpack_require__(181);
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextType: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    getDerivedStateFromError: true,
	    getDerivedStateFromProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    callee: true,
	    arguments: true,
	    arity: true
	};
	
	var FORWARD_REF_STATICS = {
	    '$$typeof': true,
	    render: true,
	    defaultProps: true,
	    displayName: true,
	    propTypes: true
	};
	
	var MEMO_STATICS = {
	    '$$typeof': true,
	    compare: true,
	    defaultProps: true,
	    displayName: true,
	    propTypes: true,
	    type: true
	};
	
	var TYPE_STATICS = {};
	TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;
	
	function getStatics(component) {
	    if (ReactIs.isMemo(component)) {
	        return MEMO_STATICS;
	    }
	    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}
	
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components
	
	        if (objectPrototype) {
	            var inheritedComponent = getPrototypeOf(sourceComponent);
	            if (inheritedComponent && inheritedComponent !== objectPrototype) {
	                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	            }
	        }
	
	        var keys = getOwnPropertyNames(sourceComponent);
	
	        if (getOwnPropertySymbols) {
	            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	        }
	
	        var targetStatics = getStatics(targetComponent);
	        var sourceStatics = getStatics(sourceComponent);
	
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try {
	                    // Avoid failures from read-only properties
	                    defineProperty(targetComponent, key, descriptor);
	                } catch (e) {}
	            }
	        }
	
	        return targetComponent;
	    }
	
	    return targetComponent;
	}
	
	module.exports = hoistNonReactStatics;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(182);
	} else {
	  module.exports = __webpack_require__(183);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 182 */
/***/ (function(module, exports) {

	/** @license React v16.8.3
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
	60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
	exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
	exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
	exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.8.3
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	
	
	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	
	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}
	
	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var lowPriorityWarning = function () {};
	
	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	var lowPriorityWarning$1 = lowPriorityWarning;
	
	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;
	
	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;
	
	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }
	
	  return undefined;
	}
	
	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	
	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	
	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 184 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = create;
	function create(initialState) {
	  var state = initialState;
	  var listeners = [];
	
	  function setState(partial) {
	    state = _extends({}, state, partial);
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	  }
	
	  function getState() {
	    return state;
	  }
	
	  function subscribe(listener) {
	    listeners.push(listener);
	
	    return function unsubscribe() {
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }
	
	  return {
	    setState: setState,
	    getState: getState,
	    subscribe: subscribe
	  };
	}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.SubPopupMenu = undefined;
	
	var _objectWithoutProperties2 = __webpack_require__(131);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends4 = __webpack_require__(92);
	
	var _extends5 = _interopRequireDefault(_extends4);
	
	exports.getActiveKey = getActiveKey;
	exports.saveRef = saveRef;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _miniStore = __webpack_require__(175);
	
	var _KeyCode = __webpack_require__(186);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _createChainedFunction = __webpack_require__(187);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _util = __webpack_require__(188);
	
	var _DOMWrap = __webpack_require__(190);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}
	
	function updateActiveKey(store, menuId, activeKey) {
	  var _extends2;
	
	  var state = store.getState();
	  store.setState({
	    activeKey: (0, _extends5['default'])({}, state.activeKey, (_extends2 = {}, _extends2[menuId] = activeKey, _extends2))
	  });
	}
	
	function getEventKey(props) {
	  // when eventKey not available ,it's menu and return menu id '0-menu-'
	  return props.eventKey || '0-menu-';
	}
	
	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children,
	      eventKey = props.eventKey;
	
	  if (activeKey) {
	    var found = void 0;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (c && !c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && c && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}
	
	function saveRef(c) {
	  if (c) {
	    var index = this.instanceArray.indexOf(c);
	    if (index !== -1) {
	      // update component if it's already inside instanceArray
	      this.instanceArray[index] = c;
	    } else {
	      // add component if it's not in instanceArray yet;
	      this.instanceArray.push(c);
	    }
	  }
	}
	
	var SubPopupMenu = exports.SubPopupMenu = function (_React$Component) {
	  (0, _inherits3['default'])(SubPopupMenu, _React$Component);
	
	  function SubPopupMenu(props) {
	    var _extends3;
	
	    (0, _classCallCheck3['default'])(this, SubPopupMenu);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    props.store.setState({
	      activeKey: (0, _extends5['default'])({}, props.store.getState().activeKey, (_extends3 = {}, _extends3[props.eventKey] = getActiveKey(props, props.activeKey), _extends3))
	    });
	
	    _this.instanceArray = [];
	    return _this;
	  }
	
	  SubPopupMenu.prototype.componentDidMount = function componentDidMount() {
	    // invoke customized ref to expose component to mixin
	    if (this.props.manualRef) {
	      this.props.manualRef(this);
	    }
	  };
	
	  SubPopupMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  };
	
	  SubPopupMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var props = this.props;
	    var originalActiveKey = 'activeKey' in props ? props.activeKey : props.store.getState().activeKey[getEventKey(props)];
	    var activeKey = getActiveKey(props, originalActiveKey);
	    if (activeKey !== originalActiveKey) {
	      updateActiveKey(props.store, getEventKey(props), activeKey);
	    } else if ('activeKey' in prevProps) {
	      // If prev activeKey is not same as current activeKey,
	      // we should set it.
	      var prevActiveKey = getActiveKey(prevProps, prevProps.activeKey);
	      if (activeKey !== prevActiveKey) {
	        updateActiveKey(props.store, getEventKey(props), activeKey);
	      }
	    }
	  };
	
	  // all keyboard events callbacks run from here at first
	
	
	  SubPopupMenu.prototype.render = function render() {
	    var _this2 = this;
	
	    var props = (0, _objectWithoutProperties3['default'])(this.props, []);
	
	    this.instanceArray = [];
	    var className = (0, _classnames2['default'])(props.prefixCls, props.className, props.prefixCls + '-' + props.mode);
	    var domProps = {
	      className: className,
	      // role could be 'select' and by default set to menu
	      role: props.role || 'menu'
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    var prefixCls = props.prefixCls,
	        eventKey = props.eventKey,
	        visible = props.visible,
	        level = props.level,
	        mode = props.mode,
	        overflowedIndicator = props.overflowedIndicator,
	        theme = props.theme;
	
	    _util.menuAllProps.forEach(function (key) {
	      return delete props[key];
	    });
	
	    // Otherwise, the propagated click event will trigger another onClick
	    delete props.onClick;
	
	    return (
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2['default'].createElement(
	        _DOMWrap2['default'],
	        (0, _extends5['default'])({}, props, {
	          prefixCls: prefixCls,
	          mode: mode,
	          tag: 'ul',
	          level: level,
	          theme: theme,
	          hiddenClassName: prefixCls + '-hidden',
	          visible: visible,
	          overflowedIndicator: overflowedIndicator
	        }, domProps),
	        _react2['default'].Children.map(props.children, function (c, i) {
	          return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
	        })
	      )
	      /*eslint-enable */
	
	    );
	  };
	
	  return SubPopupMenu;
	}(_react2['default'].Component);
	
	SubPopupMenu.propTypes = {
	  onSelect: _propTypes2['default'].func,
	  onClick: _propTypes2['default'].func,
	  onDeselect: _propTypes2['default'].func,
	  onOpenChange: _propTypes2['default'].func,
	  onDestroy: _propTypes2['default'].func,
	  openTransitionName: _propTypes2['default'].string,
	  openAnimation: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  openKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  visible: _propTypes2['default'].bool,
	  children: _propTypes2['default'].any,
	  parentMenu: _propTypes2['default'].object,
	  eventKey: _propTypes2['default'].string,
	  store: _propTypes2['default'].shape({
	    getState: _propTypes2['default'].func,
	    setState: _propTypes2['default'].func
	  }),
	
	  // adding in refactor
	  focusable: _propTypes2['default'].bool,
	  multiple: _propTypes2['default'].bool,
	  style: _propTypes2['default'].object,
	  defaultActiveFirst: _propTypes2['default'].bool,
	  activeKey: _propTypes2['default'].string,
	  selectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  defaultSelectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  defaultOpenKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  level: _propTypes2['default'].number,
	  mode: _propTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
	  triggerSubMenuAction: _propTypes2['default'].oneOf(['click', 'hover']),
	  inlineIndent: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
	  manualRef: _propTypes2['default'].func,
	  itemIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].node]),
	  expandIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].node])
	};
	SubPopupMenu.defaultProps = {
	  prefixCls: 'rc-menu',
	  className: '',
	  mode: 'vertical',
	  level: 1,
	  inlineIndent: 24,
	  visible: true,
	  focusable: true,
	  style: {},
	  manualRef: _util.noop
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.onKeyDown = function (e, callback) {
	    var keyCode = e.keyCode;
	    var handled = void 0;
	    _this3.getFlatInstanceArray().forEach(function (obj) {
	      if (obj && obj.props.active && obj.onKeyDown) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = null;
	    if (keyCode === _KeyCode2['default'].UP || keyCode === _KeyCode2['default'].DOWN) {
	      activeItem = _this3.step(keyCode === _KeyCode2['default'].UP ? -1 : 1);
	    }
	    if (activeItem) {
	      e.preventDefault();
	      updateActiveKey(_this3.props.store, getEventKey(_this3.props), activeItem.props.eventKey);
	
	      if (typeof callback === 'function') {
	        callback(activeItem);
	      }
	
	      return 1;
	    }
	  };
	
	  this.onItemHover = function (e) {
	    var key = e.key,
	        hover = e.hover;
	
	    updateActiveKey(_this3.props.store, getEventKey(_this3.props), hover ? key : null);
	  };
	
	  this.onDeselect = function (selectInfo) {
	    _this3.props.onDeselect(selectInfo);
	  };
	
	  this.onSelect = function (selectInfo) {
	    _this3.props.onSelect(selectInfo);
	  };
	
	  this.onClick = function (e) {
	    _this3.props.onClick(e);
	  };
	
	  this.onOpenChange = function (e) {
	    _this3.props.onOpenChange(e);
	  };
	
	  this.onDestroy = function (key) {
	    /* istanbul ignore next */
	    _this3.props.onDestroy(key);
	  };
	
	  this.getFlatInstanceArray = function () {
	    return _this3.instanceArray;
	  };
	
	  this.getOpenTransitionName = function () {
	    return _this3.props.openTransitionName;
	  };
	
	  this.step = function (direction) {
	    var children = _this3.getFlatInstanceArray();
	    var activeKey = _this3.props.store.getState().activeKey[getEventKey(_this3.props)];
	    var len = children.length;
	    if (!len) {
	      return null;
	    }
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c && c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    if (!_this3.props.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
	      return undefined;
	    }
	    var start = (activeIndex + 1) % len;
	    var i = start;
	
	    do {
	      var child = children[i];
	      if (!child || child.props.disabled) {
	        i = (i + 1) % len;
	      } else {
	        return child;
	      }
	    } while (i !== start);
	
	    return null;
	  };
	
	  this.renderCommonMenuItem = function (child, i, extraProps) {
	    var state = _this3.props.store.getState();
	    var props = _this3.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var isActive = key === state.activeKey;
	    var newChildProps = (0, _extends5['default'])({
	      mode: childProps.mode || props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: _this3.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: props.parentMenu,
	      // customized ref function, need to be invoked manually in child's componentDidMount
	      manualRef: childProps.disabled ? undefined : (0, _createChainedFunction2['default'])(child.ref, saveRef.bind(_this3)),
	      eventKey: key,
	      active: !childProps.disabled && isActive,
	      multiple: props.multiple,
	      onClick: function onClick(e) {
	        (childProps.onClick || _util.noop)(e);
	        _this3.onClick(e);
	      },
	      onItemHover: _this3.onItemHover,
	      openTransitionName: _this3.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      subMenuOpenDelay: props.subMenuOpenDelay,
	      subMenuCloseDelay: props.subMenuCloseDelay,
	      forceSubMenuRender: props.forceSubMenuRender,
	      onOpenChange: _this3.onOpenChange,
	      onDeselect: _this3.onDeselect,
	      onSelect: _this3.onSelect,
	      builtinPlacements: props.builtinPlacements,
	      itemIcon: childProps.itemIcon || _this3.props.itemIcon,
	      expandIcon: childProps.expandIcon || _this3.props.expandIcon
	    }, extraProps);
	    // ref: https://github.com/ant-design/ant-design/issues/13943
	    if (props.mode === 'inline' || (0, _util.isMobileDevice)()) {
	      newChildProps.triggerSubMenuAction = 'click';
	    }
	    return _react2['default'].cloneElement(child, newChildProps);
	  };
	
	  this.renderMenuItem = function (c, i, subMenuKey) {
	    /* istanbul ignore if */
	    if (!c) {
	      return null;
	    }
	    var state = _this3.props.store.getState();
	    var extraProps = {
	      openKeys: state.openKeys,
	      selectedKeys: state.selectedKeys,
	      triggerSubMenuAction: _this3.props.triggerSubMenuAction,
	      subMenuKey: subMenuKey
	    };
	    return _this3.renderCommonMenuItem(c, i, extraProps);
	  };
	};
	
	var connected = (0, _miniStore.connect)()(SubPopupMenu);
	
	exports['default'] = connected;

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	
	exports['default'] = KeyCode;
	module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = createChainedFunction;
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  var args = [].slice.call(arguments, 0);
	  if (args.length === 1) {
	    return args[0];
	  }
	
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.isMobileDevice = exports.setStyle = exports.getWidth = exports.menuAllProps = undefined;
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.getMenuIdFromSubMenuEventKey = getMenuIdFromSubMenuEventKey;
	exports.loopMenuItem = loopMenuItem;
	exports.loopMenuItemRecursively = loopMenuItemRecursively;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var isMobile = __webpack_require__(189);
	
	function noop() {}
	
	function getKeyFromChildrenIndex(child, menuEventKey, index) {
	  var prefix = menuEventKey || '';
	  return child.key || prefix + 'item_' + index;
	}
	
	function getMenuIdFromSubMenuEventKey(eventKey) {
	  return eventKey + '-menu-';
	}
	
	function loopMenuItem(children, cb) {
	  var index = -1;
	  _react2['default'].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type && c.type.isMenuItemGroup) {
	      _react2['default'].Children.forEach(c.props.children, function (c2) {
	        index++;
	        cb(c2, index);
	      });
	    } else {
	      cb(c, index);
	    }
	  });
	}
	
	function loopMenuItemRecursively(children, keys, ret) {
	  /* istanbul ignore if */
	  if (!children || ret.find) {
	    return;
	  }
	  _react2['default'].Children.forEach(children, function (c) {
	    if (c) {
	      var construct = c.type;
	      if (!construct || !(construct.isSubMenu || construct.isMenuItem || construct.isMenuItemGroup)) {
	        return;
	      }
	      if (keys.indexOf(c.key) !== -1) {
	        ret.find = true;
	      } else if (c.props.children) {
	        loopMenuItemRecursively(c.props.children, keys, ret);
	      }
	    }
	  });
	}
	
	var menuAllProps = exports.menuAllProps = ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'onSelect', 'onDeselect', 'onDestroy', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'onOpenChange', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'onItemHover', 'onTitleMouseEnter', 'onTitleMouseLeave', 'onTitleClick', 'popupAlign', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey', 'builtinPlacements', 'overflowedIndicator',
	
	// the following keys found need to be removed from test regression
	'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme', 'itemIcon', 'expandIcon'];
	
	// ref: https://github.com/ant-design/ant-design/issues/14007
	// ref: https://bugs.chromium.org/p/chromium/issues/detail?id=360889
	// getBoundingClientRect return the full precision value, which is
	// not the same behavior as on chrome. Set the precision to 6 to
	// unify their behavior
	var getWidth = exports.getWidth = function getWidth(elem) {
	  var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
	  if (width) {
	    width = +width.toFixed(6);
	  }
	  return width || 0;
	};
	
	var setStyle = exports.setStyle = function setStyle(elem, styleProperty, value) {
	  if (elem && typeof elem.style === 'object') {
	    elem.style[styleProperty] = value;
	  }
	};
	
	var isMobileDevice = exports.isMobileDevice = function isMobileDevice() {
	  return isMobile.any;
	};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e){var n=/iPhone/i,t=/iPod/i,r=/iPad/i,a=/\bAndroid(?:.+)Mobile\b/i,p=/Android/i,l=/\bAndroid(?:.+)SD4930UR\b/i,b=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,f=/Windows Phone/i,u=/\bWindows(?:.+)ARM\b/i,c=/BlackBerry/i,s=/BB10/i,v=/Opera Mini/i,h=/\b(CriOS|Chrome)(?:.+)Mobile/i,w=/\Mobile(?:.+)Firefox\b/i;function m(e,i){return e.test(i)}function i(e){var i=e||("undefined"!=typeof navigator?navigator.userAgent:""),o=i.split("[FBAN");void 0!==o[1]&&(i=o[0]),void 0!==(o=i.split("Twitter"))[1]&&(i=o[0]);var d={apple:{phone:m(n,i)&&!m(f,i),ipod:m(t,i),tablet:!m(n,i)&&m(r,i)&&!m(f,i),device:(m(n,i)||m(t,i)||m(r,i))&&!m(f,i)},amazon:{phone:m(l,i),tablet:!m(l,i)&&m(b,i),device:m(l,i)||m(b,i)},android:{phone:!m(f,i)&&m(l,i)||!m(f,i)&&m(a,i),tablet:!m(f,i)&&!m(l,i)&&!m(a,i)&&(m(b,i)||m(p,i)),device:!m(f,i)&&(m(l,i)||m(b,i)||m(a,i)||m(p,i))},windows:{phone:m(f,i),tablet:m(u,i),device:m(f,i)||m(u,i)},other:{blackberry:m(c,i),blackberry10:m(s,i),opera:m(v,i),firefox:m(w,i),chrome:m(h,i),device:m(c,i)||m(s,i)||m(v,i)||m(w,i)||m(h,i)}};return d.any=d.apple.device||d.android.device||d.windows.device||d.other.device,d.phone=d.apple.phone||d.android.phone||d.windows.phone,d.tablet=d.apple.tablet||d.android.tablet||d.windows.tablet,d}"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=i:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=i(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e.isMobile=i()), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e.isMobile=i()}(this);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(92);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(131);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _resizeObserverPolyfill = __webpack_require__(191);
	
	var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);
	
	var _SubMenu = __webpack_require__(192);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _util = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
	var FLOAT_PRECISION_ADJUST = 0.5;
	
	// Fix ssr
	if (canUseDOM) {
	  __webpack_require__(217);
	}
	
	var DOMWrap = function (_React$Component) {
	  (0, _inherits3['default'])(DOMWrap, _React$Component);
	
	  function DOMWrap() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3['default'])(this, DOMWrap);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      lastVisibleIndex: undefined
	    }, _this.getMenuItemNodes = function () {
	      var prefixCls = _this.props.prefixCls;
	
	      var ul = _reactDom2['default'].findDOMNode(_this);
	      if (!ul) {
	        return [];
	      }
	
	      // filter out all overflowed indicator placeholder
	      return [].slice.call(ul.children).filter(function (node) {
	        return node.className.split(' ').indexOf(prefixCls + '-overflowed-submenu') < 0;
	      });
	    }, _this.getOverflowedSubMenuItem = function (keyPrefix, overflowedItems, renderPlaceholder) {
	      var _this$props = _this.props,
	          overflowedIndicator = _this$props.overflowedIndicator,
	          level = _this$props.level,
	          mode = _this$props.mode,
	          prefixCls = _this$props.prefixCls,
	          theme = _this$props.theme,
	          propStyle = _this$props.style;
	
	      if (level !== 1 || mode !== 'horizontal') {
	        return null;
	      }
	      // put all the overflowed item inside a submenu
	      // with a title of overflow indicator ('...')
	      var copy = _this.props.children[0];
	      var _copy$props = copy.props,
	          throwAway = _copy$props.children,
	          title = _copy$props.title,
	          eventKey = _copy$props.eventKey,
	          rest = (0, _objectWithoutProperties3['default'])(_copy$props, ['children', 'title', 'eventKey']);
	
	
	      var style = (0, _extends3['default'])({}, propStyle);
	      var key = keyPrefix + '-overflowed-indicator';
	
	      if (overflowedItems.length === 0 && renderPlaceholder !== true) {
	        style = (0, _extends3['default'])({}, style, {
	          display: 'none'
	        });
	      } else if (renderPlaceholder) {
	        style = (0, _extends3['default'])({}, style, {
	          visibility: 'hidden',
	          // prevent from taking normal dom space
	          position: 'absolute'
	        });
	        key = key + '-placeholder';
	      }
	
	      var popupClassName = theme ? prefixCls + '-' + theme : '';
	      var props = {};
	      _util.menuAllProps.forEach(function (k) {
	        if (rest[k] !== undefined) {
	          props[k] = rest[k];
	        }
	      });
	
	      return _react2['default'].createElement(
	        _SubMenu2['default'],
	        (0, _extends3['default'])({
	          title: overflowedIndicator,
	          className: prefixCls + '-overflowed-submenu',
	          popupClassName: popupClassName
	        }, props, {
	          key: key,
	          eventKey: keyPrefix + '-overflowed-indicator',
	          disabled: false,
	          style: style
	        }),
	        overflowedItems
	      );
	    }, _this.setChildrenWidthAndResize = function () {
	      if (_this.props.mode !== 'horizontal') {
	        return;
	      }
	      var ul = _reactDom2['default'].findDOMNode(_this);
	
	      if (!ul) {
	        return;
	      }
	
	      var ulChildrenNodes = ul.children;
	
	      if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
	        return;
	      }
	
	      var lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1];
	
	      // need last overflowed indicator for calculating length;
	      (0, _util.setStyle)(lastOverflowedIndicatorPlaceholder, 'display', 'inline-block');
	
	      var menuItemNodes = _this.getMenuItemNodes();
	
	      // reset display attribute for all hidden elements caused by overflow to calculate updated width
	      // and then reset to original state after width calculation
	
	      var overflowedItems = menuItemNodes.filter(function (c) {
	        return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
	      });
	
	      overflowedItems.forEach(function (c) {
	        (0, _util.setStyle)(c, 'display', 'inline-block');
	      });
	
	      _this.menuItemSizes = menuItemNodes.map(function (c) {
	        return (0, _util.getWidth)(c);
	      });
	
	      overflowedItems.forEach(function (c) {
	        (0, _util.setStyle)(c, 'display', 'none');
	      });
	      _this.overflowedIndicatorWidth = (0, _util.getWidth)(ul.children[ul.children.length - 1]);
	      _this.originalTotalWidth = _this.menuItemSizes.reduce(function (acc, cur) {
	        return acc + cur;
	      }, 0);
	      _this.handleResize();
	      // prevent the overflowed indicator from taking space;
	      (0, _util.setStyle)(lastOverflowedIndicatorPlaceholder, 'display', 'none');
	    }, _this.resizeObserver = null, _this.mutationObserver = null, _this.originalTotalWidth = 0, _this.overflowedItems = [], _this.menuItemSizes = [], _this.handleResize = function () {
	      if (_this.props.mode !== 'horizontal') {
	        return;
	      }
	
	      var ul = _reactDom2['default'].findDOMNode(_this);
	      if (!ul) {
	        return;
	      }
	      var width = (0, _util.getWidth)(ul);
	
	      _this.overflowedItems = [];
	      var currentSumWidth = 0;
	
	      // index for last visible child in horizontal mode
	      var lastVisibleIndex = undefined;
	
	      // float number comparison could be problematic
	      // e.g. 0.1 + 0.2 > 0.3 =====> true
	      // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation
	      if (_this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
	        lastVisibleIndex = -1;
	
	        _this.menuItemSizes.forEach(function (liWidth) {
	          currentSumWidth += liWidth;
	          if (currentSumWidth + _this.overflowedIndicatorWidth <= width) {
	            lastVisibleIndex++;
	          }
	        });
	      }
	
	      _this.setState({ lastVisibleIndex: lastVisibleIndex });
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }
	
	  DOMWrap.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.setChildrenWidthAndResize();
	    if (this.props.level === 1 && this.props.mode === 'horizontal') {
	      var menuUl = _reactDom2['default'].findDOMNode(this);
	      if (!menuUl) {
	        return;
	      }
	      this.resizeObserver = new _resizeObserverPolyfill2['default'](function (entries) {
	        entries.forEach(_this2.setChildrenWidthAndResize);
	      });
	
	      [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
	        _this2.resizeObserver.observe(el);
	      });
	
	      if (typeof MutationObserver !== 'undefined') {
	        this.mutationObserver = new MutationObserver(function () {
	          _this2.resizeObserver.disconnect();
	          [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
	            _this2.resizeObserver.observe(el);
	          });
	          _this2.setChildrenWidthAndResize();
	        });
	        this.mutationObserver.observe(menuUl, { attributes: false, childList: true, subTree: false });
	      }
	    }
	  };
	
	  DOMWrap.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.resizeObserver) {
	      this.resizeObserver.disconnect();
	    }
	    if (this.mutationObserver) {
	      this.resizeObserver.disconnect();
	    }
	  };
	
	  // get all valid menuItem nodes
	
	
	  // memorize rendered menuSize
	
	
	  // original scroll size of the list
	
	
	  // copy of overflowed items
	
	
	  // cache item of the original items (so we can track the size and order)
	
	
	  DOMWrap.prototype.renderChildren = function renderChildren(children) {
	    var _this3 = this;
	
	    // need to take care of overflowed items in horizontal mode
	    var lastVisibleIndex = this.state.lastVisibleIndex;
	
	    return (children || []).reduce(function (acc, childNode, index) {
	      var item = childNode;
	      if (_this3.props.mode === 'horizontal') {
	        var overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, []);
	        if (lastVisibleIndex !== undefined && _this3.props.className.indexOf(_this3.props.prefixCls + '-root') !== -1) {
	          if (index > lastVisibleIndex) {
	            item = _react2['default'].cloneElement(childNode,
	            // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
	            {
	              style: { display: 'none' },
	              eventKey: childNode.props.eventKey + '-hidden',
	              className: childNode.className + ' ' + MENUITEM_OVERFLOWED_CLASSNAME
	            });
	          }
	          if (index === lastVisibleIndex + 1) {
	            _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
	              return _react2['default'].cloneElement(c,
	              // children[index].key will become '.$key' in clone by default,
	              // we have to overwrite with the correct key explicitly
	              { key: c.props.eventKey, mode: 'vertical-left' });
	            });
	
	            overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, _this3.overflowedItems);
	          }
	        }
	
	        var ret = [].concat(acc, [overflowed, item]);
	
	        if (index === children.length - 1) {
	          // need a placeholder for calculating overflowed indicator width
	          ret.push(_this3.getOverflowedSubMenuItem(childNode.props.eventKey, [], true));
	        }
	        return ret;
	      }
	      return [].concat(acc, [item]);
	    }, []);
	  };
	
	  DOMWrap.prototype.render = function render() {
	    var _props = this.props,
	        hiddenClassName = _props.hiddenClassName,
	        visible = _props.visible,
	        prefixCls = _props.prefixCls,
	        overflowedIndicator = _props.overflowedIndicator,
	        mode = _props.mode,
	        level = _props.level,
	        Tag = _props.tag,
	        children = _props.children,
	        theme = _props.theme,
	        rest = (0, _objectWithoutProperties3['default'])(_props, ['hiddenClassName', 'visible', 'prefixCls', 'overflowedIndicator', 'mode', 'level', 'tag', 'children', 'theme']);
	
	
	    if (!visible) {
	      rest.className += ' ' + hiddenClassName;
	    }
	
	    return _react2['default'].createElement(
	      Tag,
	      rest,
	      this.renderChildren(this.props.children)
	    );
	  };
	
	  return DOMWrap;
	}(_react2['default'].Component);
	
	DOMWrap.propTypes = {
	  className: _propTypes2['default'].string,
	  children: _propTypes2['default'].node,
	  mode: _propTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
	  prefixCls: _propTypes2['default'].string,
	  level: _propTypes2['default'].number,
	  theme: _propTypes2['default'].string,
	  overflowedIndicator: _propTypes2['default'].node,
	  visible: _propTypes2['default'].bool,
	  hiddenClassName: _propTypes2['default'].string,
	  tag: _propTypes2['default'].string,
	  style: _propTypes2['default'].object
	};
	
	DOMWrap.defaultProps = {
	  tag: 'div',
	  className: ''
	};
	
	exports['default'] = DOMWrap;
	module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ResizeObserver = factory());
	}(this, (function () { 'use strict';
	
	    /**
	     * A collection of shims that provide minimal functionality of the ES6 collections.
	     *
	     * These implementations are not meant to be used outside of the ResizeObserver
	     * modules as they cover only a limited range of use cases.
	     */
	    /* eslint-disable require-jsdoc, valid-jsdoc */
	    var MapShim = (function () {
	        if (typeof Map !== 'undefined') {
	            return Map;
	        }
	        /**
	         * Returns index in provided array that matches the specified key.
	         *
	         * @param {Array<Array>} arr
	         * @param {*} key
	         * @returns {number}
	         */
	        function getIndex(arr, key) {
	            var result = -1;
	            arr.some(function (entry, index) {
	                if (entry[0] === key) {
	                    result = index;
	                    return true;
	                }
	                return false;
	            });
	            return result;
	        }
	        return /** @class */ (function () {
	            function class_1() {
	                this.__entries__ = [];
	            }
	            Object.defineProperty(class_1.prototype, "size", {
	                /**
	                 * @returns {boolean}
	                 */
	                get: function () {
	                    return this.__entries__.length;
	                },
	                enumerable: true,
	                configurable: true
	            });
	            /**
	             * @param {*} key
	             * @returns {*}
	             */
	            class_1.prototype.get = function (key) {
	                var index = getIndex(this.__entries__, key);
	                var entry = this.__entries__[index];
	                return entry && entry[1];
	            };
	            /**
	             * @param {*} key
	             * @param {*} value
	             * @returns {void}
	             */
	            class_1.prototype.set = function (key, value) {
	                var index = getIndex(this.__entries__, key);
	                if (~index) {
	                    this.__entries__[index][1] = value;
	                }
	                else {
	                    this.__entries__.push([key, value]);
	                }
	            };
	            /**
	             * @param {*} key
	             * @returns {void}
	             */
	            class_1.prototype.delete = function (key) {
	                var entries = this.__entries__;
	                var index = getIndex(entries, key);
	                if (~index) {
	                    entries.splice(index, 1);
	                }
	            };
	            /**
	             * @param {*} key
	             * @returns {void}
	             */
	            class_1.prototype.has = function (key) {
	                return !!~getIndex(this.__entries__, key);
	            };
	            /**
	             * @returns {void}
	             */
	            class_1.prototype.clear = function () {
	                this.__entries__.splice(0);
	            };
	            /**
	             * @param {Function} callback
	             * @param {*} [ctx=null]
	             * @returns {void}
	             */
	            class_1.prototype.forEach = function (callback, ctx) {
	                if (ctx === void 0) { ctx = null; }
	                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
	                    var entry = _a[_i];
	                    callback.call(ctx, entry[1], entry[0]);
	                }
	            };
	            return class_1;
	        }());
	    })();
	
	    /**
	     * Detects whether window and document objects are available in current environment.
	     */
	    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;
	
	    // Returns global object of a current environment.
	    var global$1 = (function () {
	        if (typeof global !== 'undefined' && global.Math === Math) {
	            return global;
	        }
	        if (typeof self !== 'undefined' && self.Math === Math) {
	            return self;
	        }
	        if (typeof window !== 'undefined' && window.Math === Math) {
	            return window;
	        }
	        // eslint-disable-next-line no-new-func
	        return Function('return this')();
	    })();
	
	    /**
	     * A shim for the requestAnimationFrame which falls back to the setTimeout if
	     * first one is not supported.
	     *
	     * @returns {number} Requests' identifier.
	     */
	    var requestAnimationFrame$1 = (function () {
	        if (typeof requestAnimationFrame === 'function') {
	            // It's required to use a bounded function because IE sometimes throws
	            // an "Invalid calling object" error if rAF is invoked without the global
	            // object on the left hand side.
	            return requestAnimationFrame.bind(global$1);
	        }
	        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
	    })();
	
	    // Defines minimum timeout before adding a trailing call.
	    var trailingTimeout = 2;
	    /**
	     * Creates a wrapper function which ensures that provided callback will be
	     * invoked only once during the specified delay period.
	     *
	     * @param {Function} callback - Function to be invoked after the delay period.
	     * @param {number} delay - Delay after which to invoke callback.
	     * @returns {Function}
	     */
	    function throttle (callback, delay) {
	        var leadingCall = false, trailingCall = false, lastCallTime = 0;
	        /**
	         * Invokes the original callback function and schedules new invocation if
	         * the "proxy" was called during current request.
	         *
	         * @returns {void}
	         */
	        function resolvePending() {
	            if (leadingCall) {
	                leadingCall = false;
	                callback();
	            }
	            if (trailingCall) {
	                proxy();
	            }
	        }
	        /**
	         * Callback invoked after the specified delay. It will further postpone
	         * invocation of the original function delegating it to the
	         * requestAnimationFrame.
	         *
	         * @returns {void}
	         */
	        function timeoutCallback() {
	            requestAnimationFrame$1(resolvePending);
	        }
	        /**
	         * Schedules invocation of the original function.
	         *
	         * @returns {void}
	         */
	        function proxy() {
	            var timeStamp = Date.now();
	            if (leadingCall) {
	                // Reject immediately following calls.
	                if (timeStamp - lastCallTime < trailingTimeout) {
	                    return;
	                }
	                // Schedule new call to be in invoked when the pending one is resolved.
	                // This is important for "transitions" which never actually start
	                // immediately so there is a chance that we might miss one if change
	                // happens amids the pending invocation.
	                trailingCall = true;
	            }
	            else {
	                leadingCall = true;
	                trailingCall = false;
	                setTimeout(timeoutCallback, delay);
	            }
	            lastCallTime = timeStamp;
	        }
	        return proxy;
	    }
	
	    // Minimum delay before invoking the update of observers.
	    var REFRESH_DELAY = 20;
	    // A list of substrings of CSS properties used to find transition events that
	    // might affect dimensions of observed elements.
	    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
	    // Check if MutationObserver is available.
	    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
	    /**
	     * Singleton controller class which handles updates of ResizeObserver instances.
	     */
	    var ResizeObserverController = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserverController.
	         *
	         * @private
	         */
	        function ResizeObserverController() {
	            /**
	             * Indicates whether DOM listeners have been added.
	             *
	             * @private {boolean}
	             */
	            this.connected_ = false;
	            /**
	             * Tells that controller has subscribed for Mutation Events.
	             *
	             * @private {boolean}
	             */
	            this.mutationEventsAdded_ = false;
	            /**
	             * Keeps reference to the instance of MutationObserver.
	             *
	             * @private {MutationObserver}
	             */
	            this.mutationsObserver_ = null;
	            /**
	             * A list of connected observers.
	             *
	             * @private {Array<ResizeObserverSPI>}
	             */
	            this.observers_ = [];
	            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
	            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
	        }
	        /**
	         * Adds observer to observers list.
	         *
	         * @param {ResizeObserverSPI} observer - Observer to be added.
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.addObserver = function (observer) {
	            if (!~this.observers_.indexOf(observer)) {
	                this.observers_.push(observer);
	            }
	            // Add listeners if they haven't been added yet.
	            if (!this.connected_) {
	                this.connect_();
	            }
	        };
	        /**
	         * Removes observer from observers list.
	         *
	         * @param {ResizeObserverSPI} observer - Observer to be removed.
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.removeObserver = function (observer) {
	            var observers = this.observers_;
	            var index = observers.indexOf(observer);
	            // Remove observer if it's present in registry.
	            if (~index) {
	                observers.splice(index, 1);
	            }
	            // Remove listeners if controller has no connected observers.
	            if (!observers.length && this.connected_) {
	                this.disconnect_();
	            }
	        };
	        /**
	         * Invokes the update of observers. It will continue running updates insofar
	         * it detects changes.
	         *
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.refresh = function () {
	            var changesDetected = this.updateObservers_();
	            // Continue running updates if changes have been detected as there might
	            // be future ones caused by CSS transitions.
	            if (changesDetected) {
	                this.refresh();
	            }
	        };
	        /**
	         * Updates every observer from observers list and notifies them of queued
	         * entries.
	         *
	         * @private
	         * @returns {boolean} Returns "true" if any observer has detected changes in
	         *      dimensions of it's elements.
	         */
	        ResizeObserverController.prototype.updateObservers_ = function () {
	            // Collect observers that have active observations.
	            var activeObservers = this.observers_.filter(function (observer) {
	                return observer.gatherActive(), observer.hasActive();
	            });
	            // Deliver notifications in a separate cycle in order to avoid any
	            // collisions between observers, e.g. when multiple instances of
	            // ResizeObserver are tracking the same element and the callback of one
	            // of them changes content dimensions of the observed target. Sometimes
	            // this may result in notifications being blocked for the rest of observers.
	            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
	            return activeObservers.length > 0;
	        };
	        /**
	         * Initializes DOM listeners.
	         *
	         * @private
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.connect_ = function () {
	            // Do nothing if running in a non-browser environment or if listeners
	            // have been already added.
	            if (!isBrowser || this.connected_) {
	                return;
	            }
	            // Subscription to the "Transitionend" event is used as a workaround for
	            // delayed transitions. This way it's possible to capture at least the
	            // final state of an element.
	            document.addEventListener('transitionend', this.onTransitionEnd_);
	            window.addEventListener('resize', this.refresh);
	            if (mutationObserverSupported) {
	                this.mutationsObserver_ = new MutationObserver(this.refresh);
	                this.mutationsObserver_.observe(document, {
	                    attributes: true,
	                    childList: true,
	                    characterData: true,
	                    subtree: true
	                });
	            }
	            else {
	                document.addEventListener('DOMSubtreeModified', this.refresh);
	                this.mutationEventsAdded_ = true;
	            }
	            this.connected_ = true;
	        };
	        /**
	         * Removes DOM listeners.
	         *
	         * @private
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.disconnect_ = function () {
	            // Do nothing if running in a non-browser environment or if listeners
	            // have been already removed.
	            if (!isBrowser || !this.connected_) {
	                return;
	            }
	            document.removeEventListener('transitionend', this.onTransitionEnd_);
	            window.removeEventListener('resize', this.refresh);
	            if (this.mutationsObserver_) {
	                this.mutationsObserver_.disconnect();
	            }
	            if (this.mutationEventsAdded_) {
	                document.removeEventListener('DOMSubtreeModified', this.refresh);
	            }
	            this.mutationsObserver_ = null;
	            this.mutationEventsAdded_ = false;
	            this.connected_ = false;
	        };
	        /**
	         * "Transitionend" event handler.
	         *
	         * @private
	         * @param {TransitionEvent} event
	         * @returns {void}
	         */
	        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
	            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
	            // Detect whether transition may affect dimensions of an element.
	            var isReflowProperty = transitionKeys.some(function (key) {
	                return !!~propertyName.indexOf(key);
	            });
	            if (isReflowProperty) {
	                this.refresh();
	            }
	        };
	        /**
	         * Returns instance of the ResizeObserverController.
	         *
	         * @returns {ResizeObserverController}
	         */
	        ResizeObserverController.getInstance = function () {
	            if (!this.instance_) {
	                this.instance_ = new ResizeObserverController();
	            }
	            return this.instance_;
	        };
	        /**
	         * Holds reference to the controller's instance.
	         *
	         * @private {ResizeObserverController}
	         */
	        ResizeObserverController.instance_ = null;
	        return ResizeObserverController;
	    }());
	
	    /**
	     * Defines non-writable/enumerable properties of the provided target object.
	     *
	     * @param {Object} target - Object for which to define properties.
	     * @param {Object} props - Properties to be defined.
	     * @returns {Object} Target object.
	     */
	    var defineConfigurable = (function (target, props) {
	        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
	            var key = _a[_i];
	            Object.defineProperty(target, key, {
	                value: props[key],
	                enumerable: false,
	                writable: false,
	                configurable: true
	            });
	        }
	        return target;
	    });
	
	    /**
	     * Returns the global object associated with provided element.
	     *
	     * @param {Object} target
	     * @returns {Object}
	     */
	    var getWindowOf = (function (target) {
	        // Assume that the element is an instance of Node, which means that it
	        // has the "ownerDocument" property from which we can retrieve a
	        // corresponding global object.
	        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
	        // Return the local global object if it's not possible extract one from
	        // provided element.
	        return ownerGlobal || global$1;
	    });
	
	    // Placeholder of an empty content rectangle.
	    var emptyRect = createRectInit(0, 0, 0, 0);
	    /**
	     * Converts provided string to a number.
	     *
	     * @param {number|string} value
	     * @returns {number}
	     */
	    function toFloat(value) {
	        return parseFloat(value) || 0;
	    }
	    /**
	     * Extracts borders size from provided styles.
	     *
	     * @param {CSSStyleDeclaration} styles
	     * @param {...string} positions - Borders positions (top, right, ...)
	     * @returns {number}
	     */
	    function getBordersSize(styles) {
	        var positions = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            positions[_i - 1] = arguments[_i];
	        }
	        return positions.reduce(function (size, position) {
	            var value = styles['border-' + position + '-width'];
	            return size + toFloat(value);
	        }, 0);
	    }
	    /**
	     * Extracts paddings sizes from provided styles.
	     *
	     * @param {CSSStyleDeclaration} styles
	     * @returns {Object} Paddings box.
	     */
	    function getPaddings(styles) {
	        var positions = ['top', 'right', 'bottom', 'left'];
	        var paddings = {};
	        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
	            var position = positions_1[_i];
	            var value = styles['padding-' + position];
	            paddings[position] = toFloat(value);
	        }
	        return paddings;
	    }
	    /**
	     * Calculates content rectangle of provided SVG element.
	     *
	     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
	     *      to be calculated.
	     * @returns {DOMRectInit}
	     */
	    function getSVGContentRect(target) {
	        var bbox = target.getBBox();
	        return createRectInit(0, 0, bbox.width, bbox.height);
	    }
	    /**
	     * Calculates content rectangle of provided HTMLElement.
	     *
	     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
	     * @returns {DOMRectInit}
	     */
	    function getHTMLElementContentRect(target) {
	        // Client width & height properties can't be
	        // used exclusively as they provide rounded values.
	        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
	        // By this condition we can catch all non-replaced inline, hidden and
	        // detached elements. Though elements with width & height properties less
	        // than 0.5 will be discarded as well.
	        //
	        // Without it we would need to implement separate methods for each of
	        // those cases and it's not possible to perform a precise and performance
	        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
	        // gives wrong results for elements with width & height less than 0.5.
	        if (!clientWidth && !clientHeight) {
	            return emptyRect;
	        }
	        var styles = getWindowOf(target).getComputedStyle(target);
	        var paddings = getPaddings(styles);
	        var horizPad = paddings.left + paddings.right;
	        var vertPad = paddings.top + paddings.bottom;
	        // Computed styles of width & height are being used because they are the
	        // only dimensions available to JS that contain non-rounded values. It could
	        // be possible to utilize the getBoundingClientRect if only it's data wasn't
	        // affected by CSS transformations let alone paddings, borders and scroll bars.
	        var width = toFloat(styles.width), height = toFloat(styles.height);
	        // Width & height include paddings and borders when the 'border-box' box
	        // model is applied (except for IE).
	        if (styles.boxSizing === 'border-box') {
	            // Following conditions are required to handle Internet Explorer which
	            // doesn't include paddings and borders to computed CSS dimensions.
	            //
	            // We can say that if CSS dimensions + paddings are equal to the "client"
	            // properties then it's either IE, and thus we don't need to subtract
	            // anything, or an element merely doesn't have paddings/borders styles.
	            if (Math.round(width + horizPad) !== clientWidth) {
	                width -= getBordersSize(styles, 'left', 'right') + horizPad;
	            }
	            if (Math.round(height + vertPad) !== clientHeight) {
	                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
	            }
	        }
	        // Following steps can't be applied to the document's root element as its
	        // client[Width/Height] properties represent viewport area of the window.
	        // Besides, it's as well not necessary as the <html> itself neither has
	        // rendered scroll bars nor it can be clipped.
	        if (!isDocumentElement(target)) {
	            // In some browsers (only in Firefox, actually) CSS width & height
	            // include scroll bars size which can be removed at this step as scroll
	            // bars are the only difference between rounded dimensions + paddings
	            // and "client" properties, though that is not always true in Chrome.
	            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
	            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
	            // Chrome has a rather weird rounding of "client" properties.
	            // E.g. for an element with content width of 314.2px it sometimes gives
	            // the client width of 315px and for the width of 314.7px it may give
	            // 314px. And it doesn't happen all the time. So just ignore this delta
	            // as a non-relevant.
	            if (Math.abs(vertScrollbar) !== 1) {
	                width -= vertScrollbar;
	            }
	            if (Math.abs(horizScrollbar) !== 1) {
	                height -= horizScrollbar;
	            }
	        }
	        return createRectInit(paddings.left, paddings.top, width, height);
	    }
	    /**
	     * Checks whether provided element is an instance of the SVGGraphicsElement.
	     *
	     * @param {Element} target - Element to be checked.
	     * @returns {boolean}
	     */
	    var isSVGGraphicsElement = (function () {
	        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
	        // interface.
	        if (typeof SVGGraphicsElement !== 'undefined') {
	            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
	        }
	        // If it's so, then check that element is at least an instance of the
	        // SVGElement and that it has the "getBBox" method.
	        // eslint-disable-next-line no-extra-parens
	        return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
	            typeof target.getBBox === 'function'); };
	    })();
	    /**
	     * Checks whether provided element is a document element (<html>).
	     *
	     * @param {Element} target - Element to be checked.
	     * @returns {boolean}
	     */
	    function isDocumentElement(target) {
	        return target === getWindowOf(target).document.documentElement;
	    }
	    /**
	     * Calculates an appropriate content rectangle for provided html or svg element.
	     *
	     * @param {Element} target - Element content rectangle of which needs to be calculated.
	     * @returns {DOMRectInit}
	     */
	    function getContentRect(target) {
	        if (!isBrowser) {
	            return emptyRect;
	        }
	        if (isSVGGraphicsElement(target)) {
	            return getSVGContentRect(target);
	        }
	        return getHTMLElementContentRect(target);
	    }
	    /**
	     * Creates rectangle with an interface of the DOMRectReadOnly.
	     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
	     *
	     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
	     * @returns {DOMRectReadOnly}
	     */
	    function createReadOnlyRect(_a) {
	        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
	        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
	        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
	        var rect = Object.create(Constr.prototype);
	        // Rectangle's properties are not writable and non-enumerable.
	        defineConfigurable(rect, {
	            x: x, y: y, width: width, height: height,
	            top: y,
	            right: x + width,
	            bottom: height + y,
	            left: x
	        });
	        return rect;
	    }
	    /**
	     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
	     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
	     *
	     * @param {number} x - X coordinate.
	     * @param {number} y - Y coordinate.
	     * @param {number} width - Rectangle's width.
	     * @param {number} height - Rectangle's height.
	     * @returns {DOMRectInit}
	     */
	    function createRectInit(x, y, width, height) {
	        return { x: x, y: y, width: width, height: height };
	    }
	
	    /**
	     * Class that is responsible for computations of the content rectangle of
	     * provided DOM element and for keeping track of it's changes.
	     */
	    var ResizeObservation = /** @class */ (function () {
	        /**
	         * Creates an instance of ResizeObservation.
	         *
	         * @param {Element} target - Element to be observed.
	         */
	        function ResizeObservation(target) {
	            /**
	             * Broadcasted width of content rectangle.
	             *
	             * @type {number}
	             */
	            this.broadcastWidth = 0;
	            /**
	             * Broadcasted height of content rectangle.
	             *
	             * @type {number}
	             */
	            this.broadcastHeight = 0;
	            /**
	             * Reference to the last observed content rectangle.
	             *
	             * @private {DOMRectInit}
	             */
	            this.contentRect_ = createRectInit(0, 0, 0, 0);
	            this.target = target;
	        }
	        /**
	         * Updates content rectangle and tells whether it's width or height properties
	         * have changed since the last broadcast.
	         *
	         * @returns {boolean}
	         */
	        ResizeObservation.prototype.isActive = function () {
	            var rect = getContentRect(this.target);
	            this.contentRect_ = rect;
	            return (rect.width !== this.broadcastWidth ||
	                rect.height !== this.broadcastHeight);
	        };
	        /**
	         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
	         * from the corresponding properties of the last observed content rectangle.
	         *
	         * @returns {DOMRectInit} Last observed content rectangle.
	         */
	        ResizeObservation.prototype.broadcastRect = function () {
	            var rect = this.contentRect_;
	            this.broadcastWidth = rect.width;
	            this.broadcastHeight = rect.height;
	            return rect;
	        };
	        return ResizeObservation;
	    }());
	
	    var ResizeObserverEntry = /** @class */ (function () {
	        /**
	         * Creates an instance of ResizeObserverEntry.
	         *
	         * @param {Element} target - Element that is being observed.
	         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
	         */
	        function ResizeObserverEntry(target, rectInit) {
	            var contentRect = createReadOnlyRect(rectInit);
	            // According to the specification following properties are not writable
	            // and are also not enumerable in the native implementation.
	            //
	            // Property accessors are not being used as they'd require to define a
	            // private WeakMap storage which may cause memory leaks in browsers that
	            // don't support this type of collections.
	            defineConfigurable(this, { target: target, contentRect: contentRect });
	        }
	        return ResizeObserverEntry;
	    }());
	
	    var ResizeObserverSPI = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserver.
	         *
	         * @param {ResizeObserverCallback} callback - Callback function that is invoked
	         *      when one of the observed elements changes it's content dimensions.
	         * @param {ResizeObserverController} controller - Controller instance which
	         *      is responsible for the updates of observer.
	         * @param {ResizeObserver} callbackCtx - Reference to the public
	         *      ResizeObserver instance which will be passed to callback function.
	         */
	        function ResizeObserverSPI(callback, controller, callbackCtx) {
	            /**
	             * Collection of resize observations that have detected changes in dimensions
	             * of elements.
	             *
	             * @private {Array<ResizeObservation>}
	             */
	            this.activeObservations_ = [];
	            /**
	             * Registry of the ResizeObservation instances.
	             *
	             * @private {Map<Element, ResizeObservation>}
	             */
	            this.observations_ = new MapShim();
	            if (typeof callback !== 'function') {
	                throw new TypeError('The callback provided as parameter 1 is not a function.');
	            }
	            this.callback_ = callback;
	            this.controller_ = controller;
	            this.callbackCtx_ = callbackCtx;
	        }
	        /**
	         * Starts observing provided element.
	         *
	         * @param {Element} target - Element to be observed.
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.observe = function (target) {
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            // Do nothing if current environment doesn't have the Element interface.
	            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
	                return;
	            }
	            if (!(target instanceof getWindowOf(target).Element)) {
	                throw new TypeError('parameter 1 is not of type "Element".');
	            }
	            var observations = this.observations_;
	            // Do nothing if element is already being observed.
	            if (observations.has(target)) {
	                return;
	            }
	            observations.set(target, new ResizeObservation(target));
	            this.controller_.addObserver(this);
	            // Force the update of observations.
	            this.controller_.refresh();
	        };
	        /**
	         * Stops observing provided element.
	         *
	         * @param {Element} target - Element to stop observing.
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.unobserve = function (target) {
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            // Do nothing if current environment doesn't have the Element interface.
	            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
	                return;
	            }
	            if (!(target instanceof getWindowOf(target).Element)) {
	                throw new TypeError('parameter 1 is not of type "Element".');
	            }
	            var observations = this.observations_;
	            // Do nothing if element is not being observed.
	            if (!observations.has(target)) {
	                return;
	            }
	            observations.delete(target);
	            if (!observations.size) {
	                this.controller_.removeObserver(this);
	            }
	        };
	        /**
	         * Stops observing all elements.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.disconnect = function () {
	            this.clearActive();
	            this.observations_.clear();
	            this.controller_.removeObserver(this);
	        };
	        /**
	         * Collects observation instances the associated element of which has changed
	         * it's content rectangle.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.gatherActive = function () {
	            var _this = this;
	            this.clearActive();
	            this.observations_.forEach(function (observation) {
	                if (observation.isActive()) {
	                    _this.activeObservations_.push(observation);
	                }
	            });
	        };
	        /**
	         * Invokes initial callback function with a list of ResizeObserverEntry
	         * instances collected from active resize observations.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.broadcastActive = function () {
	            // Do nothing if observer doesn't have active observations.
	            if (!this.hasActive()) {
	                return;
	            }
	            var ctx = this.callbackCtx_;
	            // Create ResizeObserverEntry instance for every active observation.
	            var entries = this.activeObservations_.map(function (observation) {
	                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
	            });
	            this.callback_.call(ctx, entries, ctx);
	            this.clearActive();
	        };
	        /**
	         * Clears the collection of active observations.
	         *
	         * @returns {void}
	         */
	        ResizeObserverSPI.prototype.clearActive = function () {
	            this.activeObservations_.splice(0);
	        };
	        /**
	         * Tells whether observer has active observations.
	         *
	         * @returns {boolean}
	         */
	        ResizeObserverSPI.prototype.hasActive = function () {
	            return this.activeObservations_.length > 0;
	        };
	        return ResizeObserverSPI;
	    }());
	
	    // Registry of internal observers. If WeakMap is not available use current shim
	    // for the Map collection as it has all required methods and because WeakMap
	    // can't be fully polyfilled anyway.
	    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
	    /**
	     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
	     * exposing only those methods and properties that are defined in the spec.
	     */
	    var ResizeObserver = /** @class */ (function () {
	        /**
	         * Creates a new instance of ResizeObserver.
	         *
	         * @param {ResizeObserverCallback} callback - Callback that is invoked when
	         *      dimensions of the observed elements change.
	         */
	        function ResizeObserver(callback) {
	            if (!(this instanceof ResizeObserver)) {
	                throw new TypeError('Cannot call a class as a function.');
	            }
	            if (!arguments.length) {
	                throw new TypeError('1 argument required, but only 0 present.');
	            }
	            var controller = ResizeObserverController.getInstance();
	            var observer = new ResizeObserverSPI(callback, controller, this);
	            observers.set(this, observer);
	        }
	        return ResizeObserver;
	    }());
	    // Expose public methods of ResizeObserver.
	    [
	        'observe',
	        'unobserve',
	        'disconnect'
	    ].forEach(function (method) {
	        ResizeObserver.prototype[method] = function () {
	            var _a;
	            return (_a = observers.get(this))[method].apply(_a, arguments);
	        };
	    });
	
	    var index = (function () {
	        // Export existing implementation if available.
	        if (typeof global$1.ResizeObserver !== 'undefined') {
	            return global$1.ResizeObserver;
	        }
	        return ResizeObserver;
	    })();
	
	    return index;
	
	})));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.SubMenu = undefined;
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends3 = __webpack_require__(92);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _rcTrigger = __webpack_require__(193);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	var _KeyCode = __webpack_require__(186);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _miniStore = __webpack_require__(175);
	
	var _SubPopupMenu = __webpack_require__(185);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _placements = __webpack_require__(216);
	
	var _placements2 = _interopRequireDefault(_placements);
	
	var _rcAnimate = __webpack_require__(207);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _util = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var guid = 0;
	
	var popupPlacementMap = {
	  horizontal: 'bottomLeft',
	  vertical: 'rightTop',
	  'vertical-left': 'rightTop',
	  'vertical-right': 'leftTop'
	};
	
	var updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
	  var _extends2;
	
	  var menuId = (0, _util.getMenuIdFromSubMenuEventKey)(eventKey);
	  var state = store.getState();
	  store.setState({
	    defaultActiveFirst: (0, _extends4['default'])({}, state.defaultActiveFirst, (_extends2 = {}, _extends2[menuId] = defaultActiveFirst, _extends2))
	  });
	};
	
	var SubMenu = exports.SubMenu = function (_React$Component) {
	  (0, _inherits3['default'])(SubMenu, _React$Component);
	
	  function SubMenu(props) {
	    (0, _classCallCheck3['default'])(this, SubMenu);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    var store = props.store;
	    var eventKey = props.eventKey;
	    var defaultActiveFirst = store.getState().defaultActiveFirst;
	
	    _this.isRootMenu = false;
	
	    var value = false;
	
	    if (defaultActiveFirst) {
	      value = defaultActiveFirst[eventKey];
	    }
	
	    updateDefaultActiveFirst(store, eventKey, value);
	    return _this;
	  }
	
	  SubMenu.prototype.componentDidMount = function componentDidMount() {
	    this.componentDidUpdate();
	  };
	
	  SubMenu.prototype.componentDidUpdate = function componentDidUpdate() {
	    var _this2 = this;
	
	    var _props = this.props,
	        mode = _props.mode,
	        parentMenu = _props.parentMenu,
	        manualRef = _props.manualRef;
	
	    // invoke customized ref to expose component to mixin
	
	    if (manualRef) {
	      manualRef(this);
	    }
	
	    if (mode !== 'horizontal' || !parentMenu.isRootMenu || !this.props.isOpen) {
	      return;
	    }
	
	    this.minWidthTimeout = setTimeout(function () {
	      return _this2.adjustWidth();
	    }, 0);
	  };
	
	  SubMenu.prototype.componentWillUnmount = function componentWillUnmount() {
	    var _props2 = this.props,
	        onDestroy = _props2.onDestroy,
	        eventKey = _props2.eventKey;
	
	    if (onDestroy) {
	      onDestroy(eventKey);
	    }
	
	    /* istanbul ignore if */
	    if (this.minWidthTimeout) {
	      clearTimeout(this.minWidthTimeout);
	    }
	
	    /* istanbul ignore if */
	    if (this.mouseenterTimeout) {
	      clearTimeout(this.mouseenterTimeout);
	    }
	  };
	
	  SubMenu.prototype.renderChildren = function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: this.props.isOpen,
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      subMenuOpenDelay: props.subMenuOpenDelay,
	      parentMenu: this,
	      subMenuCloseDelay: props.subMenuCloseDelay,
	      forceSubMenuRender: props.forceSubMenuRender,
	      triggerSubMenuAction: props.triggerSubMenuAction,
	      builtinPlacements: props.builtinPlacements,
	      defaultActiveFirst: props.store.getState().defaultActiveFirst[(0, _util.getMenuIdFromSubMenuEventKey)(props.eventKey)],
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      manualRef: this.saveMenuInstance,
	      itemIcon: props.itemIcon,
	      expandIcon: props.expandIcon
	    };
	
	    var haveRendered = this.haveRendered;
	    this.haveRendered = true;
	
	    this.haveOpened = this.haveOpened || baseProps.visible || baseProps.forceSubMenuRender;
	    // never rendered not planning to, don't render
	    if (!this.haveOpened) {
	      return _react2['default'].createElement('div', null);
	    }
	
	    // don't show transition on first rendering (no animation for opened menu)
	    // show appear transition if it's not visible (not sure why)
	    // show appear transition if it's not inline mode
	    var transitionAppear = haveRendered || !baseProps.visible || !baseProps.mode === 'inline';
	
	    baseProps.className = ' ' + baseProps.prefixCls + '-sub';
	    var animProps = {};
	
	    if (baseProps.openTransitionName) {
	      animProps.transitionName = baseProps.openTransitionName;
	    } else if (typeof baseProps.openAnimation === 'object') {
	      animProps.animation = (0, _extends4['default'])({}, baseProps.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	
	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      (0, _extends4['default'])({}, animProps, {
	        showProp: 'visible',
	        component: '',
	        transitionAppear: transitionAppear
	      }),
	      _react2['default'].createElement(
	        _SubPopupMenu2['default'],
	        (0, _extends4['default'])({}, baseProps, { id: this._menuId }),
	        children
	      )
	    );
	  };
	
	  SubMenu.prototype.render = function render() {
	    var _classNames;
	
	    var props = (0, _extends4['default'])({}, this.props);
	    var isOpen = props.isOpen;
	    var prefixCls = this.getPrefixCls();
	    var isInlineMode = props.mode === 'inline';
	    var className = (0, _classnames2['default'])(prefixCls, prefixCls + '-' + props.mode, (_classNames = {}, _classNames[props.className] = !!props.className, _classNames[this.getOpenClassName()] = isOpen, _classNames[this.getActiveClassName()] = props.active || isOpen && !isInlineMode, _classNames[this.getDisabledClassName()] = props.disabled, _classNames[this.getSelectedClassName()] = this.isChildrenSelected(), _classNames));
	
	    if (!this._menuId) {
	      if (props.eventKey) {
	        this._menuId = props.eventKey + '$Menu';
	      } else {
	        this._menuId = '$__$' + ++guid + '$Menu';
	      }
	    }
	
	    var mouseEvents = {};
	    var titleClickEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	
	      // only works in title, not outer li
	      titleClickEvents = {
	        onClick: this.onTitleClick
	      };
	      titleMouseEvents = {
	        onMouseEnter: this.onTitleMouseEnter,
	        onMouseLeave: this.onTitleMouseLeave
	      };
	    }
	
	    var style = {};
	    if (isInlineMode) {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	
	    var ariaOwns = {};
	    // only set aria-owns when menu is open
	    // otherwise it would be an invalid aria-owns value
	    // since corresponding node cannot be found
	    if (this.props.isOpen) {
	      ariaOwns = {
	        'aria-owns': this._menuId
	      };
	    }
	
	    // expand custom icon should NOT be displayed in menu with horizontal mode.
	    var icon = null;
	    if (props.mode !== 'horizontal') {
	      icon = this.props.expandIcon; // ReactNode
	      if (typeof this.props.expandIcon === 'function') {
	        icon = _react2['default'].createElement(this.props.expandIcon, (0, _extends4['default'])({}, this.props));
	      }
	    }
	
	    var title = _react2['default'].createElement(
	      'div',
	      (0, _extends4['default'])({
	        ref: this.saveSubMenuTitle,
	        style: style,
	        className: prefixCls + '-title'
	      }, titleMouseEvents, titleClickEvents, {
	        'aria-expanded': isOpen
	      }, ariaOwns, {
	        'aria-haspopup': 'true',
	        title: typeof props.title === 'string' ? props.title : undefined
	      }),
	      props.title,
	      icon || _react2['default'].createElement('i', { className: prefixCls + '-arrow' })
	    );
	    var children = this.renderChildren(props.children);
	
	    var getPopupContainer = props.parentMenu.isRootMenu ? props.parentMenu.props.getPopupContainer : function (triggerNode) {
	      return triggerNode.parentNode;
	    };
	    var popupPlacement = popupPlacementMap[props.mode];
	    var popupAlign = props.popupOffset ? { offset: props.popupOffset } : {};
	    var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;
	    var disabled = props.disabled,
	        triggerSubMenuAction = props.triggerSubMenuAction,
	        subMenuOpenDelay = props.subMenuOpenDelay,
	        forceSubMenuRender = props.forceSubMenuRender,
	        subMenuCloseDelay = props.subMenuCloseDelay,
	        builtinPlacements = props.builtinPlacements;
	
	    _util.menuAllProps.forEach(function (key) {
	      return delete props[key];
	    });
	    // Set onClick to null, to ignore propagated onClick event
	    delete props.onClick;
	
	    return _react2['default'].createElement(
	      'li',
	      (0, _extends4['default'])({}, props, mouseEvents, {
	        className: className,
	        role: 'menuitem'
	      }),
	      isInlineMode && title,
	      isInlineMode && children,
	      !isInlineMode && _react2['default'].createElement(
	        _rcTrigger2['default'],
	        {
	          prefixCls: prefixCls,
	          popupClassName: prefixCls + '-popup ' + popupClassName,
	          getPopupContainer: getPopupContainer,
	          builtinPlacements: (0, _extends4['default'])({}, _placements2['default'], builtinPlacements),
	          popupPlacement: popupPlacement,
	          popupVisible: isOpen,
	          popupAlign: popupAlign,
	          popup: children,
	          action: disabled ? [] : [triggerSubMenuAction],
	          mouseEnterDelay: subMenuOpenDelay,
	          mouseLeaveDelay: subMenuCloseDelay,
	          onPopupVisibleChange: this.onPopupVisibleChange,
	          forceRender: forceSubMenuRender
	        },
	        title
	      )
	    );
	  };
	
	  return SubMenu;
	}(_react2['default'].Component);
	
	SubMenu.propTypes = {
	  parentMenu: _propTypes2['default'].object,
	  title: _propTypes2['default'].node,
	  children: _propTypes2['default'].any,
	  selectedKeys: _propTypes2['default'].array,
	  openKeys: _propTypes2['default'].array,
	  onClick: _propTypes2['default'].func,
	  onOpenChange: _propTypes2['default'].func,
	  rootPrefixCls: _propTypes2['default'].string,
	  eventKey: _propTypes2['default'].string,
	  multiple: _propTypes2['default'].bool,
	  active: _propTypes2['default'].bool, // TODO: remove
	  onItemHover: _propTypes2['default'].func,
	  onSelect: _propTypes2['default'].func,
	  triggerSubMenuAction: _propTypes2['default'].string,
	  onDeselect: _propTypes2['default'].func,
	  onDestroy: _propTypes2['default'].func,
	  onMouseEnter: _propTypes2['default'].func,
	  onMouseLeave: _propTypes2['default'].func,
	  onTitleMouseEnter: _propTypes2['default'].func,
	  onTitleMouseLeave: _propTypes2['default'].func,
	  onTitleClick: _propTypes2['default'].func,
	  popupOffset: _propTypes2['default'].array,
	  isOpen: _propTypes2['default'].bool,
	  store: _propTypes2['default'].object,
	  mode: _propTypes2['default'].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
	  manualRef: _propTypes2['default'].func,
	  itemIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].node]),
	  expandIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].node])
	};
	SubMenu.defaultProps = {
	  onMouseEnter: _util.noop,
	  onMouseLeave: _util.noop,
	  onTitleMouseEnter: _util.noop,
	  onTitleMouseLeave: _util.noop,
	  onTitleClick: _util.noop,
	  manualRef: _util.noop,
	  mode: 'vertical',
	  title: ''
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.onDestroy = function (key) {
	    _this3.props.onDestroy(key);
	  };
	
	  this.onKeyDown = function (e) {
	    var keyCode = e.keyCode;
	    var menu = _this3.menuInstance;
	    var _props3 = _this3.props,
	        isOpen = _props3.isOpen,
	        store = _props3.store;
	
	
	    if (keyCode === _KeyCode2['default'].ENTER) {
	      _this3.onTitleClick(e);
	      updateDefaultActiveFirst(store, _this3.props.eventKey, true);
	      return true;
	    }
	
	    if (keyCode === _KeyCode2['default'].RIGHT) {
	      if (isOpen) {
	        menu.onKeyDown(e);
	      } else {
	        _this3.triggerOpenChange(true);
	        // need to update current menu's defaultActiveFirst value
	        updateDefaultActiveFirst(store, _this3.props.eventKey, true);
	      }
	      return true;
	    }
	    if (keyCode === _KeyCode2['default'].LEFT) {
	      var handled = void 0;
	      if (isOpen) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        _this3.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }
	
	    if (isOpen && (keyCode === _KeyCode2['default'].UP || keyCode === _KeyCode2['default'].DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  };
	
	  this.onOpenChange = function (e) {
	    _this3.props.onOpenChange(e);
	  };
	
	  this.onPopupVisibleChange = function (visible) {
	    _this3.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
	  };
	
	  this.onMouseEnter = function (e) {
	    var _props4 = _this3.props,
	        key = _props4.eventKey,
	        onMouseEnter = _props4.onMouseEnter,
	        store = _props4.store;
	
	    updateDefaultActiveFirst(store, _this3.props.eventKey, false);
	    onMouseEnter({
	      key: key,
	      domEvent: e
	    });
	  };
	
	  this.onMouseLeave = function (e) {
	    var _props5 = _this3.props,
	        parentMenu = _props5.parentMenu,
	        eventKey = _props5.eventKey,
	        onMouseLeave = _props5.onMouseLeave;
	
	    parentMenu.subMenuInstance = _this3;
	    onMouseLeave({
	      key: eventKey,
	      domEvent: e
	    });
	  };
	
	  this.onTitleMouseEnter = function (domEvent) {
	    var _props6 = _this3.props,
	        key = _props6.eventKey,
	        onItemHover = _props6.onItemHover,
	        onTitleMouseEnter = _props6.onTitleMouseEnter;
	
	    onItemHover({
	      key: key,
	      hover: true
	    });
	    onTitleMouseEnter({
	      key: key,
	      domEvent: domEvent
	    });
	  };
	
	  this.onTitleMouseLeave = function (e) {
	    var _props7 = _this3.props,
	        parentMenu = _props7.parentMenu,
	        eventKey = _props7.eventKey,
	        onItemHover = _props7.onItemHover,
	        onTitleMouseLeave = _props7.onTitleMouseLeave;
	
	    parentMenu.subMenuInstance = _this3;
	    onItemHover({
	      key: eventKey,
	      hover: false
	    });
	    onTitleMouseLeave({
	      key: eventKey,
	      domEvent: e
	    });
	  };
	
	  this.onTitleClick = function (e) {
	    var props = _this3.props;
	
	    props.onTitleClick({
	      key: props.eventKey,
	      domEvent: e
	    });
	    if (props.triggerSubMenuAction === 'hover') {
	      return;
	    }
	    _this3.triggerOpenChange(!props.isOpen, 'click');
	    updateDefaultActiveFirst(props.store, _this3.props.eventKey, false);
	  };
	
	  this.onSubMenuClick = function (info) {
	    // in the case of overflowed submenu
	    // onClick is not copied over
	    if (typeof _this3.props.onClick === 'function') {
	      _this3.props.onClick(_this3.addKeyPath(info));
	    }
	  };
	
	  this.onSelect = function (info) {
	    _this3.props.onSelect(info);
	  };
	
	  this.onDeselect = function (info) {
	    _this3.props.onDeselect(info);
	  };
	
	  this.getPrefixCls = function () {
	    return _this3.props.rootPrefixCls + '-submenu';
	  };
	
	  this.getActiveClassName = function () {
	    return _this3.getPrefixCls() + '-active';
	  };
	
	  this.getDisabledClassName = function () {
	    return _this3.getPrefixCls() + '-disabled';
	  };
	
	  this.getSelectedClassName = function () {
	    return _this3.getPrefixCls() + '-selected';
	  };
	
	  this.getOpenClassName = function () {
	    return _this3.props.rootPrefixCls + '-submenu-open';
	  };
	
	  this.saveMenuInstance = function (c) {
	    // children menu instance
	    _this3.menuInstance = c;
	  };
	
	  this.addKeyPath = function (info) {
	    return (0, _extends4['default'])({}, info, {
	      keyPath: (info.keyPath || []).concat(_this3.props.eventKey)
	    });
	  };
	
	  this.triggerOpenChange = function (open, type) {
	    var key = _this3.props.eventKey;
	    var openChange = function openChange() {
	      _this3.onOpenChange({
	        key: key,
	        item: _this3,
	        trigger: type,
	        open: open
	      });
	    };
	    if (type === 'mouseenter') {
	      // make sure mouseenter happen after other menu item's mouseleave
	      _this3.mouseenterTimeout = setTimeout(function () {
	        openChange();
	      }, 0);
	    } else {
	      openChange();
	    }
	  };
	
	  this.isChildrenSelected = function () {
	    var ret = { find: false };
	    (0, _util.loopMenuItemRecursively)(_this3.props.children, _this3.props.selectedKeys, ret);
	    return ret.find;
	  };
	
	  this.isOpen = function () {
	    return _this3.props.openKeys.indexOf(_this3.props.eventKey) !== -1;
	  };
	
	  this.adjustWidth = function () {
	    /* istanbul ignore if */
	    if (!_this3.subMenuTitle || !_this3.menuInstance) {
	      return;
	    }
	    var popupMenu = _reactDom2['default'].findDOMNode(_this3.menuInstance);
	    if (popupMenu.offsetWidth >= _this3.subMenuTitle.offsetWidth) {
	      return;
	    }
	
	    /* istanbul ignore next */
	    popupMenu.style.minWidth = _this3.subMenuTitle.offsetWidth + 'px';
	  };
	
	  this.saveSubMenuTitle = function (subMenuTitle) {
	    _this3.subMenuTitle = subMenuTitle;
	  };
	};
	
	var connected = (0, _miniStore.connect)(function (_ref, _ref2) {
	  var openKeys = _ref.openKeys,
	      activeKey = _ref.activeKey,
	      selectedKeys = _ref.selectedKeys;
	  var eventKey = _ref2.eventKey,
	      subMenuKey = _ref2.subMenuKey;
	  return {
	    isOpen: openKeys.indexOf(eventKey) > -1,
	    active: activeKey[subMenuKey] === eventKey,
	    selectedKeys: selectedKeys
	  };
	})(SubMenu);
	
	connected.isSubMenu = true;
	
	exports['default'] = connected;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(92);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _contains = __webpack_require__(194);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _addEventListener = __webpack_require__(195);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _ContainerRender = __webpack_require__(196);
	
	var _ContainerRender2 = _interopRequireDefault(_ContainerRender);
	
	var _Portal = __webpack_require__(201);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(202);
	
	var _Popup = __webpack_require__(203);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function noop() {}
	
	function returnEmptyString() {
	  return '';
	}
	
	function returnDocument() {
	  return window.document;
	}
	
	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
	
	var IS_REACT_16 = !!_reactDom.createPortal;
	
	var contextTypes = {
	  rcTrigger: _propTypes2['default'].shape({
	    onPopupMouseDown: _propTypes2['default'].func
	  })
	};
	
	var Trigger = function (_React$Component) {
	  (0, _inherits3['default'])(Trigger, _React$Component);
	
	  function Trigger(props) {
	    (0, _classCallCheck3['default'])(this, Trigger);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    var popupVisible = void 0;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }
	
	    _this.prevPopupVisible = popupVisible;
	
	    _this.state = {
	      popupVisible: popupVisible
	    };
	    return _this;
	  }
	
	  Trigger.prototype.getChildContext = function getChildContext() {
	    return {
	      rcTrigger: {
	        onPopupMouseDown: this.onPopupMouseDown
	      }
	    };
	  };
	
	  Trigger.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    ALL_HANDLERS.forEach(function (h) {
	      _this2['fire' + h] = function (e) {
	        _this2.fireEvents(h, e);
	      };
	    });
	  };
	
	  Trigger.prototype.componentDidMount = function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  };
	
	  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
	    var popupVisible = _ref.popupVisible;
	
	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  };
	
	  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
	    var props = this.props;
	    var state = this.state;
	    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    };
	    if (!IS_REACT_16) {
	      this.renderComponent(null, triggerAfterPopupVisibleChange);
	    }
	
	    this.prevPopupVisible = prevState.popupVisible;
	
	    // We must listen to `mousedown` or `touchstart`, edge case:
	    // https://github.com/ant-design/ant-design/issues/5804
	    // https://github.com/react-component/calendar/issues/250
	    // https://github.com/react-component/trigger/issues/50
	    if (state.popupVisible) {
	      var currentDocument = void 0;
	      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
	        currentDocument = props.getDocument();
	        this.clickOutsideHandler = (0, _addEventListener2['default'])(currentDocument, 'mousedown', this.onDocumentClick);
	      }
	      // always hide on mobile
	      if (!this.touchOutsideHandler) {
	        currentDocument = currentDocument || props.getDocument();
	        this.touchOutsideHandler = (0, _addEventListener2['default'])(currentDocument, 'touchstart', this.onDocumentClick);
	      }
	      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
	      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
	        currentDocument = currentDocument || props.getDocument();
	        this.contextMenuOutsideHandler1 = (0, _addEventListener2['default'])(currentDocument, 'scroll', this.onContextMenuClose);
	      }
	      // close popup when trigger type contains 'onContextMenu' and window is blur.
	      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
	        this.contextMenuOutsideHandler2 = (0, _addEventListener2['default'])(window, 'blur', this.onContextMenuClose);
	      }
	      return;
	    }
	
	    this.clearOutsideHandler();
	  };
	
	  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearDelayTimer();
	    this.clearOutsideHandler();
	    clearTimeout(this.mouseDownTimeout);
	  };
	
	  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
	    // for test
	    if (this._component && this._component.getPopupDomNode) {
	      return this._component.getPopupDomNode();
	    }
	    return null;
	  };
	
	  Trigger.prototype.getPopupAlign = function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement,
	        popupAlign = props.popupAlign,
	        builtinPlacements = props.builtinPlacements;
	
	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  };
	
	  /**
	   * @param popupVisible    Show or not the popup element
	   * @param event           SyntheticEvent, used for `pointAlign`
	   */
	  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
	    var alignPoint = this.props.alignPoint;
	
	
	    this.clearDelayTimer();
	
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({ popupVisible: popupVisible });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	
	    // Always record the point position since mouseEnterDelay will delay the show
	    if (alignPoint && event) {
	      this.setPoint(event);
	    }
	  };
	
	  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
	    var _this3 = this;
	
	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
	      this.delayTimer = setTimeout(function () {
	        _this3.setPopupVisible(visible, point);
	        _this3.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible, event);
	    }
	  };
	
	  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  };
	
	  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	    }
	
	    if (this.contextMenuOutsideHandler1) {
	      this.contextMenuOutsideHandler1.remove();
	      this.contextMenuOutsideHandler1 = null;
	    }
	
	    if (this.contextMenuOutsideHandler2) {
	      this.contextMenuOutsideHandler2.remove();
	      this.contextMenuOutsideHandler2 = null;
	    }
	
	    if (this.touchOutsideHandler) {
	      this.touchOutsideHandler.remove();
	      this.touchOutsideHandler = null;
	    }
	  };
	
	  Trigger.prototype.createTwoChains = function createTwoChains(event) {
	    var childPros = this.props.children.props;
	    var props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  };
	
	  Trigger.prototype.isClickToShow = function isClickToShow() {
	    var _props = this.props,
	        action = _props.action,
	        showAction = _props.showAction;
	
	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  };
	
	  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
	    var _props2 = this.props,
	        action = _props2.action,
	        showAction = _props2.showAction;
	
	    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
	  };
	
	  Trigger.prototype.isClickToHide = function isClickToHide() {
	    var _props3 = this.props,
	        action = _props3.action,
	        hideAction = _props3.hideAction;
	
	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  };
	
	  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
	    var _props4 = this.props,
	        action = _props4.action,
	        showAction = _props4.showAction;
	
	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  };
	
	  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
	    var _props5 = this.props,
	        action = _props5.action,
	        hideAction = _props5.hideAction;
	
	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  };
	
	  Trigger.prototype.isFocusToShow = function isFocusToShow() {
	    var _props6 = this.props,
	        action = _props6.action,
	        showAction = _props6.showAction;
	
	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  };
	
	  Trigger.prototype.isBlurToHide = function isBlurToHide() {
	    var _props7 = this.props,
	        action = _props7.action,
	        hideAction = _props7.hideAction;
	
	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  };
	
	  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
	    if (this.state.popupVisible && this._component && this._component.alignInstance) {
	      this._component.alignInstance.forceAlign();
	    }
	  };
	
	  Trigger.prototype.fireEvents = function fireEvents(type, e) {
	    var childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    var callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  };
	
	  Trigger.prototype.close = function close() {
	    this.setPopupVisible(false);
	  };
	
	  Trigger.prototype.render = function render() {
	    var _this4 = this;
	
	    var popupVisible = this.state.popupVisible;
	    var _props8 = this.props,
	        children = _props8.children,
	        forceRender = _props8.forceRender,
	        alignPoint = _props8.alignPoint,
	        className = _props8.className;
	
	    var child = _react2['default'].Children.only(children);
	    var newChildProps = { key: 'trigger' };
	
	    if (this.isContextMenuToShow()) {
	      newChildProps.onContextMenu = this.onContextMenu;
	    } else {
	      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
	    }
	
	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	      if (alignPoint) {
	        newChildProps.onMouseMove = this.onMouseMove;
	      }
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }
	
	    var childrenClassName = (0, _classnames2['default'])(child && child.props && child.props.className, className);
	    if (childrenClassName) {
	      newChildProps.className = childrenClassName;
	    }
	    var trigger = _react2['default'].cloneElement(child, newChildProps);
	
	    if (!IS_REACT_16) {
	      return _react2['default'].createElement(
	        _ContainerRender2['default'],
	        {
	          parent: this,
	          visible: popupVisible,
	          autoMount: false,
	          forceRender: forceRender,
	          getComponent: this.getComponent,
	          getContainer: this.getContainer
	        },
	        function (_ref2) {
	          var renderComponent = _ref2.renderComponent;
	
	          _this4.renderComponent = renderComponent;
	          return trigger;
	        }
	      );
	    }
	
	    var portal = void 0;
	    // prevent unmounting after it's rendered
	    if (popupVisible || this._component || forceRender) {
	      portal = _react2['default'].createElement(
	        _Portal2['default'],
	        {
	          key: 'portal',
	          getContainer: this.getContainer,
	          didUpdate: this.handlePortalUpdate
	        },
	        this.getComponent()
	      );
	    }
	
	    return [trigger, portal];
	  };
	
	  return Trigger;
	}(_react2['default'].Component);
	
	Trigger.propTypes = {
	  children: _propTypes2['default'].any,
	  action: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].arrayOf(_propTypes2['default'].string)]),
	  showAction: _propTypes2['default'].any,
	  hideAction: _propTypes2['default'].any,
	  getPopupClassNameFromAlign: _propTypes2['default'].any,
	  onPopupVisibleChange: _propTypes2['default'].func,
	  afterPopupVisibleChange: _propTypes2['default'].func,
	  popup: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]).isRequired,
	  popupStyle: _propTypes2['default'].object,
	  prefixCls: _propTypes2['default'].string,
	  popupClassName: _propTypes2['default'].string,
	  className: _propTypes2['default'].string,
	  popupPlacement: _propTypes2['default'].string,
	  builtinPlacements: _propTypes2['default'].object,
	  popupTransitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  popupAnimation: _propTypes2['default'].any,
	  mouseEnterDelay: _propTypes2['default'].number,
	  mouseLeaveDelay: _propTypes2['default'].number,
	  zIndex: _propTypes2['default'].number,
	  focusDelay: _propTypes2['default'].number,
	  blurDelay: _propTypes2['default'].number,
	  getPopupContainer: _propTypes2['default'].func,
	  getDocument: _propTypes2['default'].func,
	  forceRender: _propTypes2['default'].bool,
	  destroyPopupOnHide: _propTypes2['default'].bool,
	  mask: _propTypes2['default'].bool,
	  maskClosable: _propTypes2['default'].bool,
	  onPopupAlign: _propTypes2['default'].func,
	  popupAlign: _propTypes2['default'].object,
	  popupVisible: _propTypes2['default'].bool,
	  defaultPopupVisible: _propTypes2['default'].bool,
	  maskTransitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  maskAnimation: _propTypes2['default'].string,
	  stretch: _propTypes2['default'].string,
	  alignPoint: _propTypes2['default'].bool // Maybe we can support user pass position in the future
	};
	Trigger.contextTypes = contextTypes;
	Trigger.childContextTypes = contextTypes;
	Trigger.defaultProps = {
	  prefixCls: 'rc-trigger-popup',
	  getPopupClassNameFromAlign: returnEmptyString,
	  getDocument: returnDocument,
	  onPopupVisibleChange: noop,
	  afterPopupVisibleChange: noop,
	  onPopupAlign: noop,
	  popupClassName: '',
	  mouseEnterDelay: 0,
	  mouseLeaveDelay: 0.1,
	  focusDelay: 0,
	  blurDelay: 0.15,
	  popupStyle: {},
	  destroyPopupOnHide: false,
	  popupAlign: {},
	  defaultPopupVisible: false,
	  mask: false,
	  maskClosable: true,
	  action: [],
	  showAction: [],
	  hideAction: []
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;
	
	  this.onMouseEnter = function (e) {
	    var mouseEnterDelay = _this5.props.mouseEnterDelay;
	
	    _this5.fireEvents('onMouseEnter', e);
	    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
	  };
	
	  this.onMouseMove = function (e) {
	    _this5.fireEvents('onMouseMove', e);
	    _this5.setPoint(e);
	  };
	
	  this.onMouseLeave = function (e) {
	    _this5.fireEvents('onMouseLeave', e);
	    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
	  };
	
	  this.onPopupMouseEnter = function () {
	    _this5.clearDelayTimer();
	  };
	
	  this.onPopupMouseLeave = function (e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && (0, _contains2['default'])(_this5._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
	  };
	
	  this.onFocus = function (e) {
	    _this5.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    _this5.clearDelayTimer();
	    if (_this5.isFocusToShow()) {
	      _this5.focusTime = Date.now();
	      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
	    }
	  };
	
	  this.onMouseDown = function (e) {
	    _this5.fireEvents('onMouseDown', e);
	    _this5.preClickTime = Date.now();
	  };
	
	  this.onTouchStart = function (e) {
	    _this5.fireEvents('onTouchStart', e);
	    _this5.preTouchTime = Date.now();
	  };
	
	  this.onBlur = function (e) {
	    _this5.fireEvents('onBlur', e);
	    _this5.clearDelayTimer();
	    if (_this5.isBlurToHide()) {
	      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
	    }
	  };
	
	  this.onContextMenu = function (e) {
	    e.preventDefault();
	    _this5.fireEvents('onContextMenu', e);
	    _this5.setPopupVisible(true, e);
	  };
	
	  this.onContextMenuClose = function () {
	    if (_this5.isContextMenuToShow()) {
	      _this5.close();
	    }
	  };
	
	  this.onClick = function (event) {
	    _this5.fireEvents('onClick', event);
	    // focus will trigger click
	    if (_this5.focusTime) {
	      var preTime = void 0;
	      if (_this5.preClickTime && _this5.preTouchTime) {
	        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
	      } else if (_this5.preClickTime) {
	        preTime = _this5.preClickTime;
	      } else if (_this5.preTouchTime) {
	        preTime = _this5.preTouchTime;
	      }
	      if (Math.abs(preTime - _this5.focusTime) < 20) {
	        return;
	      }
	      _this5.focusTime = 0;
	    }
	    _this5.preClickTime = 0;
	    _this5.preTouchTime = 0;
	    if (event && event.preventDefault) {
	      event.preventDefault();
	    }
	    var nextVisible = !_this5.state.popupVisible;
	    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
	      _this5.setPopupVisible(!_this5.state.popupVisible, event);
	    }
	  };
	
	  this.onPopupMouseDown = function () {
	    var _context$rcTrigger = _this5.context.rcTrigger,
	        rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;
	
	    _this5.hasPopupMouseDown = true;
	
	    clearTimeout(_this5.mouseDownTimeout);
	    _this5.mouseDownTimeout = setTimeout(function () {
	      _this5.hasPopupMouseDown = false;
	    }, 0);
	
	    if (rcTrigger.onPopupMouseDown) {
	      rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
	    }
	  };
	
	  this.onDocumentClick = function (event) {
	    if (_this5.props.mask && !_this5.props.maskClosable) {
	      return;
	    }
	
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(_this5);
	    if (!(0, _contains2['default'])(root, target) && !_this5.hasPopupMouseDown) {
	      _this5.close();
	    }
	  };
	
	  this.getRootDomNode = function () {
	    return (0, _reactDom.findDOMNode)(_this5);
	  };
	
	  this.getPopupClassNameFromAlign = function (align) {
	    var className = [];
	    var _props9 = _this5.props,
	        popupPlacement = _props9.popupPlacement,
	        builtinPlacements = _props9.builtinPlacements,
	        prefixCls = _props9.prefixCls,
	        alignPoint = _props9.alignPoint,
	        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;
	
	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getAlignPopupClassName)(builtinPlacements, prefixCls, align, alignPoint));
	    }
	    if (getPopupClassNameFromAlign) {
	      className.push(getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  };
	
	  this.getComponent = function () {
	    var _props10 = _this5.props,
	        prefixCls = _props10.prefixCls,
	        destroyPopupOnHide = _props10.destroyPopupOnHide,
	        popupClassName = _props10.popupClassName,
	        action = _props10.action,
	        onPopupAlign = _props10.onPopupAlign,
	        popupAnimation = _props10.popupAnimation,
	        popupTransitionName = _props10.popupTransitionName,
	        popupStyle = _props10.popupStyle,
	        mask = _props10.mask,
	        maskAnimation = _props10.maskAnimation,
	        maskTransitionName = _props10.maskTransitionName,
	        zIndex = _props10.zIndex,
	        popup = _props10.popup,
	        stretch = _props10.stretch,
	        alignPoint = _props10.alignPoint;
	    var _state = _this5.state,
	        popupVisible = _state.popupVisible,
	        point = _state.point;
	
	
	    var align = _this5.getPopupAlign();
	
	    var mouseProps = {};
	    if (_this5.isMouseEnterToShow()) {
	      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
	    }
	    if (_this5.isMouseLeaveToHide()) {
	      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
	    }
	
	    mouseProps.onMouseDown = _this5.onPopupMouseDown;
	    mouseProps.onTouchStart = _this5.onPopupMouseDown;
	
	    return _react2['default'].createElement(
	      _Popup2['default'],
	      (0, _extends3['default'])({
	        prefixCls: prefixCls,
	        destroyPopupOnHide: destroyPopupOnHide,
	        visible: popupVisible,
	        point: alignPoint && point,
	        className: popupClassName,
	        action: action,
	        align: align,
	        onAlign: onPopupAlign,
	        animation: popupAnimation,
	        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
	      }, mouseProps, {
	        stretch: stretch,
	        getRootDomNode: _this5.getRootDomNode,
	        style: popupStyle,
	        mask: mask,
	        zIndex: zIndex,
	        transitionName: popupTransitionName,
	        maskAnimation: maskAnimation,
	        maskTransitionName: maskTransitionName,
	        ref: _this5.savePopup
	      }),
	      typeof popup === 'function' ? popup() : popup
	    );
	  };
	
	  this.getContainer = function () {
	    var props = _this5.props;
	
	    var popupContainer = document.createElement('div');
	    // Make sure default popup container will never cause scrollbar appearing
	    // https://github.com/react-component/trigger/issues/41
	    popupContainer.style.position = 'absolute';
	    popupContainer.style.top = '0';
	    popupContainer.style.left = '0';
	    popupContainer.style.width = '100%';
	    var mountNode = props.getPopupContainer ? props.getPopupContainer((0, _reactDom.findDOMNode)(_this5)) : props.getDocument().body;
	    mountNode.appendChild(popupContainer);
	    return popupContainer;
	  };
	
	  this.setPoint = function (point) {
	    var alignPoint = _this5.props.alignPoint;
	
	    if (!alignPoint || !point) return;
	
	    _this5.setState({
	      point: {
	        pageX: point.pageX,
	        pageY: point.pageY
	      }
	    });
	  };
	
	  this.handlePortalUpdate = function () {
	    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
	      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
	    }
	  };
	
	  this.savePopup = function (node) {
	    _this5._component = node;
	  };
	};
	
	exports['default'] = Trigger;
	module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = contains;
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
	module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(41);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function addEventListenerWrap(target, eventType, cb, option) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
	    _reactDom2['default'].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2['default'])(target, eventType, callback, option);
	}
	module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(197);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var ContainerRender = function (_React$Component) {
	  (0, _inherits3['default'])(ContainerRender, _React$Component);
	
	  function ContainerRender() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3['default'])(this, ContainerRender);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
	      if (_this.container) {
	        _reactDom2['default'].unmountComponentAtNode(_this.container);
	        _this.container.parentNode.removeChild(_this.container);
	        _this.container = null;
	      }
	    }, _this.renderComponent = function (props, ready) {
	      var _this$props = _this.props,
	          visible = _this$props.visible,
	          getComponent = _this$props.getComponent,
	          forceRender = _this$props.forceRender,
	          getContainer = _this$props.getContainer,
	          parent = _this$props.parent;
	
	      if (visible || parent._component || forceRender) {
	        if (!_this.container) {
	          _this.container = getContainer();
	        }
	        _reactDom2['default'].unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
	          if (ready) {
	            ready.call(this);
	          }
	        });
	      }
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }
	
	  (0, _createClass3['default'])(ContainerRender, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.autoMount) {
	        this.renderComponent();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.autoMount) {
	        this.renderComponent();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.autoDestroy) {
	        this.removeContainer();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children({
	        renderComponent: this.renderComponent,
	        removeContainer: this.removeContainer
	      });
	    }
	  }]);
	  return ContainerRender;
	}(_react2['default'].Component);
	
	ContainerRender.propTypes = {
	  autoMount: _propTypes2['default'].bool,
	  autoDestroy: _propTypes2['default'].bool,
	  visible: _propTypes2['default'].bool,
	  forceRender: _propTypes2['default'].bool,
	  parent: _propTypes2['default'].any,
	  getComponent: _propTypes2['default'].func.isRequired,
	  getContainer: _propTypes2['default'].func.isRequired,
	  children: _propTypes2['default'].func.isRequired
	};
	ContainerRender.defaultProps = {
	  autoMount: true,
	  autoDestroy: true,
	  forceRender: false
	};
	exports['default'] = ContainerRender;
	module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(198);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(199), __esModule: true };

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(200);
	var $Object = __webpack_require__(98).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(96);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(106), 'Object', { defineProperty: __webpack_require__(102).f });


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(197);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Portal = function (_React$Component) {
	  (0, _inherits3['default'])(Portal, _React$Component);
	
	  function Portal() {
	    (0, _classCallCheck3['default'])(this, Portal);
	    return (0, _possibleConstructorReturn3['default'])(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	  }
	
	  (0, _createClass3['default'])(Portal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.createContainer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var didUpdate = this.props.didUpdate;
	
	      if (didUpdate) {
	        didUpdate(prevProps);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeContainer();
	    }
	  }, {
	    key: 'createContainer',
	    value: function createContainer() {
	      this._container = this.props.getContainer();
	      this.forceUpdate();
	    }
	  }, {
	    key: 'removeContainer',
	    value: function removeContainer() {
	      if (this._container) {
	        this._container.parentNode.removeChild(this._container);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this._container) {
	        return _reactDom2['default'].createPortal(this.props.children, this._container);
	      }
	      return null;
	    }
	  }]);
	  return Portal;
	}(_react2['default'].Component);
	
	Portal.propTypes = {
	  getContainer: _propTypes2['default'].func.isRequired,
	  children: _propTypes2['default'].node.isRequired,
	  didUpdate: _propTypes2['default'].func
	};
	exports['default'] = Portal;
	module.exports = exports['default'];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(92);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getAlignPopupClassName = getAlignPopupClassName;
	exports.saveRef = saveRef;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function isPointsEq(a1, a2, isAlignPoint) {
	  if (isAlignPoint) {
	    return a1[0] === a2[0];
	  }
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}
	
	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return (0, _extends3['default'])({}, baseAlign, align);
	}
	
	function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}
	
	function saveRef(name, component) {
	  this[name] = component;
	}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(92);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAlign = __webpack_require__(204);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(207);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _PopupInner = __webpack_require__(214);
	
	var _PopupInner2 = _interopRequireDefault(_PopupInner);
	
	var _LazyRenderBox = __webpack_require__(215);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	var _utils = __webpack_require__(202);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Popup = function (_Component) {
	  (0, _inherits3['default'])(Popup, _Component);
	
	  function Popup(props) {
	    (0, _classCallCheck3['default'])(this, Popup);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    _this.state = {
	      // Used for stretch
	      stretchChecked: false,
	      targetWidth: undefined,
	      targetHeight: undefined
	    };
	
	    _this.savePopupRef = _utils.saveRef.bind(_this, 'popupInstance');
	    _this.saveAlignRef = _utils.saveRef.bind(_this, 'alignInstance');
	    return _this;
	  }
	
	  Popup.prototype.componentDidMount = function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	    this.setStretchSize();
	  };
	
	  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
	    this.setStretchSize();
	  };
	
	  // Record size if stretch needed
	
	
	  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
	    return _reactDom2['default'].findDOMNode(this.popupInstance);
	  };
	
	  // `target` on `rc-align` can accept as a function to get the bind element or a point.
	  // ref: https://www.npmjs.com/package/rc-align
	
	
	  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  };
	
	  Popup.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
	    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	  };
	
	  Popup.prototype.getPopupElement = function getPopupElement() {
	    var _this2 = this;
	
	    var savePopupRef = this.savePopupRef;
	    var _state = this.state,
	        stretchChecked = _state.stretchChecked,
	        targetHeight = _state.targetHeight,
	        targetWidth = _state.targetWidth;
	    var _props = this.props,
	        align = _props.align,
	        visible = _props.visible,
	        prefixCls = _props.prefixCls,
	        style = _props.style,
	        getClassNameFromAlign = _props.getClassNameFromAlign,
	        destroyPopupOnHide = _props.destroyPopupOnHide,
	        stretch = _props.stretch,
	        children = _props.children,
	        onMouseEnter = _props.onMouseEnter,
	        onMouseLeave = _props.onMouseLeave,
	        onMouseDown = _props.onMouseDown,
	        onTouchStart = _props.onTouchStart;
	
	    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
	    var hiddenClassName = prefixCls + '-hidden';
	
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	
	    var sizeStyle = {};
	    if (stretch) {
	      // Stretch with target
	      if (stretch.indexOf('height') !== -1) {
	        sizeStyle.height = targetHeight;
	      } else if (stretch.indexOf('minHeight') !== -1) {
	        sizeStyle.minHeight = targetHeight;
	      }
	      if (stretch.indexOf('width') !== -1) {
	        sizeStyle.width = targetWidth;
	      } else if (stretch.indexOf('minWidth') !== -1) {
	        sizeStyle.minWidth = targetWidth;
	      }
	
	      // Delay force align to makes ui smooth
	      if (!stretchChecked) {
	        sizeStyle.visibility = 'hidden';
	        setTimeout(function () {
	          if (_this2.alignInstance) {
	            _this2.alignInstance.forceAlign();
	          }
	        }, 0);
	      }
	    }
	
	    var newStyle = (0, _extends3['default'])({}, sizeStyle, style, this.getZIndexStyle());
	
	    var popupInnerProps = {
	      className: className,
	      prefixCls: prefixCls,
	      ref: savePopupRef,
	      onMouseEnter: onMouseEnter,
	      onMouseLeave: onMouseLeave,
	      onMouseDown: onMouseDown,
	      onTouchStart: onTouchStart,
	      style: newStyle
	    };
	    if (destroyPopupOnHide) {
	      return _react2['default'].createElement(
	        _rcAnimate2['default'],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName()
	        },
	        visible ? _react2['default'].createElement(
	          _rcAlign2['default'],
	          {
	            target: this.getAlignTarget(),
	            key: 'popup',
	            ref: this.saveAlignRef,
	            monitorWindowResize: true,
	            align: align,
	            onAlign: this.onAlign
	          },
	          _react2['default'].createElement(
	            _PopupInner2['default'],
	            (0, _extends3['default'])({
	              visible: true
	            }, popupInnerProps),
	            children
	          )
	        ) : null
	      );
	    }
	
	    return _react2['default'].createElement(
	      _rcAnimate2['default'],
	      {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'xVisible'
	      },
	      _react2['default'].createElement(
	        _rcAlign2['default'],
	        {
	          target: this.getAlignTarget(),
	          key: 'popup',
	          ref: this.saveAlignRef,
	          monitorWindowResize: true,
	          xVisible: visible,
	          childrenProps: { visible: 'xVisible' },
	          disabled: !visible,
	          align: align,
	          onAlign: this.onAlign
	        },
	        _react2['default'].createElement(
	          _PopupInner2['default'],
	          (0, _extends3['default'])({
	            hiddenClassName: hiddenClassName
	          }, popupInnerProps),
	          children
	        )
	      )
	    );
	  };
	
	  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  };
	
	  Popup.prototype.getMaskElement = function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2['default'].createElement(_LazyRenderBox2['default'], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2['default'].createElement(
	          _rcAnimate2['default'],
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  };
	
	  Popup.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      this.getPopupElement()
	    );
	  };
	
	  return Popup;
	}(_react.Component);
	
	Popup.propTypes = {
	  visible: _propTypes2['default'].bool,
	  style: _propTypes2['default'].object,
	  getClassNameFromAlign: _propTypes2['default'].func,
	  onAlign: _propTypes2['default'].func,
	  getRootDomNode: _propTypes2['default'].func,
	  align: _propTypes2['default'].any,
	  destroyPopupOnHide: _propTypes2['default'].bool,
	  className: _propTypes2['default'].string,
	  prefixCls: _propTypes2['default'].string,
	  onMouseEnter: _propTypes2['default'].func,
	  onMouseLeave: _propTypes2['default'].func,
	  onMouseDown: _propTypes2['default'].func,
	  onTouchStart: _propTypes2['default'].func,
	  stretch: _propTypes2['default'].string,
	  children: _propTypes2['default'].node,
	  point: _propTypes2['default'].shape({
	    pageX: _propTypes2['default'].number,
	    pageY: _propTypes2['default'].number
	  })
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this3 = this;
	
	  this.onAlign = function (popupDomNode, align) {
	    var props = _this3.props;
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    // FIX: https://github.com/react-component/trigger/issues/56
	    // FIX: https://github.com/react-component/tooltip/issues/79
	    if (_this3.currentAlignClassName !== currentAlignClassName) {
	      _this3.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = _this3.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  };
	
	  this.setStretchSize = function () {
	    var _props2 = _this3.props,
	        stretch = _props2.stretch,
	        getRootDomNode = _props2.getRootDomNode,
	        visible = _props2.visible;
	    var _state2 = _this3.state,
	        stretchChecked = _state2.stretchChecked,
	        targetHeight = _state2.targetHeight,
	        targetWidth = _state2.targetWidth;
	
	
	    if (!stretch || !visible) {
	      if (stretchChecked) {
	        _this3.setState({ stretchChecked: false });
	      }
	      return;
	    }
	
	    var $ele = getRootDomNode();
	    if (!$ele) return;
	
	    var height = $ele.offsetHeight;
	    var width = $ele.offsetWidth;
	
	    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
	      _this3.setState({
	        stretchChecked: true,
	        targetHeight: height,
	        targetWidth: width
	      });
	    }
	  };
	
	  this.getTargetElement = function () {
	    return _this3.props.getRootDomNode();
	  };
	
	  this.getAlignTarget = function () {
	    var point = _this3.props.point;
	
	    if (point) {
	      return point;
	    }
	    return _this3.getTargetElement;
	  };
	};
	
	exports['default'] = Popup;
	module.exports = exports['default'];

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Align = __webpack_require__(205);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _Align2['default']; // export this package's api
	
	module.exports = exports['default'];

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(197);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(51);
	
	var _addEventListener = __webpack_require__(195);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _util = __webpack_require__(206);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function getElement(func) {
	  if (typeof func !== 'function' || !func) return null;
	  return func();
	}
	
	function getPoint(point) {
	  if (typeof point !== 'object' || !point) return null;
	  return point;
	}
	
	var Align = function (_Component) {
	  (0, _inherits3['default'])(Align, _Component);
	
	  function Align() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3['default'])(this, Align);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = Align.__proto__ || Object.getPrototypeOf(Align)).call.apply(_ref, [this].concat(args))), _this), _this.forceAlign = function () {
	      var _this$props = _this.props,
	          disabled = _this$props.disabled,
	          target = _this$props.target,
	          align = _this$props.align,
	          onAlign = _this$props.onAlign;
	
	      if (!disabled && target) {
	        var source = _reactDom2['default'].findDOMNode(_this);
	
	        var result = void 0;
	        var element = getElement(target);
	        var point = getPoint(target);
	
	        // IE lose focus after element realign
	        // We should record activeElement and restore later
	        var activeElement = document.activeElement;
	
	        if (element) {
	          result = (0, _domAlign.alignElement)(source, element, align);
	        } else if (point) {
	          result = (0, _domAlign.alignPoint)(source, point, align);
	        }
	
	        (0, _util.restoreFocus)(activeElement, source);
	
	        if (onAlign) {
	          onAlign(source, result);
	        }
	      }
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }
	
	  (0, _createClass3['default'])(Align, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var props = this.props;
	      // if parent ref not attached .... use document.getElementById
	      this.forceAlign();
	      if (!props.disabled && props.monitorWindowResize) {
	        this.startMonitorWindowResize();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var reAlign = false;
	      var props = this.props;
	
	      if (!props.disabled) {
	        var source = _reactDom2['default'].findDOMNode(this);
	        var sourceRect = source ? source.getBoundingClientRect() : null;
	
	        if (prevProps.disabled) {
	          reAlign = true;
	        } else {
	          var lastElement = getElement(prevProps.target);
	          var currentElement = getElement(props.target);
	          var lastPoint = getPoint(prevProps.target);
	          var currentPoint = getPoint(props.target);
	
	          if ((0, _util.isWindow)(lastElement) && (0, _util.isWindow)(currentElement)) {
	            // Skip if is window
	            reAlign = false;
	          } else if (lastElement !== currentElement || // Element change
	          lastElement && !currentElement && currentPoint || // Change from element to point
	          lastPoint && currentPoint && currentElement || // Change from point to element
	          currentPoint && !(0, _util.isSamePoint)(lastPoint, currentPoint)) {
	            reAlign = true;
	          }
	
	          // If source element size changed
	          var preRect = this.sourceRect || {};
	          if (!reAlign && source && (!(0, _util.isSimilarValue)(preRect.width, sourceRect.width) || !(0, _util.isSimilarValue)(preRect.height, sourceRect.height))) {
	            reAlign = true;
	          }
	        }
	
	        this.sourceRect = sourceRect;
	      }
	
	      if (reAlign) {
	        this.forceAlign();
	      }
	
	      if (props.monitorWindowResize && !props.disabled) {
	        this.startMonitorWindowResize();
	      } else {
	        this.stopMonitorWindowResize();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stopMonitorWindowResize();
	    }
	  }, {
	    key: 'startMonitorWindowResize',
	    value: function startMonitorWindowResize() {
	      if (!this.resizeHandler) {
	        this.bufferMonitor = (0, _util.buffer)(this.forceAlign, this.props.monitorBufferTime);
	        this.resizeHandler = (0, _addEventListener2['default'])(window, 'resize', this.bufferMonitor);
	      }
	    }
	  }, {
	    key: 'stopMonitorWindowResize',
	    value: function stopMonitorWindowResize() {
	      if (this.resizeHandler) {
	        this.bufferMonitor.clear();
	        this.resizeHandler.remove();
	        this.resizeHandler = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          childrenProps = _props.childrenProps,
	          children = _props.children;
	
	      var child = _react2['default'].Children.only(children);
	      if (childrenProps) {
	        var newProps = {};
	        var propList = Object.keys(childrenProps);
	        propList.forEach(function (prop) {
	          newProps[prop] = _this2.props[childrenProps[prop]];
	        });
	
	        return _react2['default'].cloneElement(child, newProps);
	      }
	      return child;
	    }
	  }]);
	  return Align;
	}(_react.Component);
	
	Align.propTypes = {
	  childrenProps: _propTypes2['default'].object,
	  align: _propTypes2['default'].object.isRequired,
	  target: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].shape({
	    clientX: _propTypes2['default'].number,
	    clientY: _propTypes2['default'].number,
	    pageX: _propTypes2['default'].number,
	    pageY: _propTypes2['default'].number
	  })]),
	  onAlign: _propTypes2['default'].func,
	  monitorBufferTime: _propTypes2['default'].number,
	  monitorWindowResize: _propTypes2['default'].bool,
	  disabled: _propTypes2['default'].bool,
	  children: _propTypes2['default'].any
	};
	Align.defaultProps = {
	  target: function target() {
	    return window;
	  },
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	exports['default'] = Align;
	module.exports = exports['default'];

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.buffer = buffer;
	exports.isSamePoint = isSamePoint;
	exports.isWindow = isWindow;
	exports.isSimilarValue = isSimilarValue;
	exports.restoreFocus = restoreFocus;
	
	var _contains = __webpack_require__(194);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
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
	
	function isSamePoint(prev, next) {
	  if (prev === next) return true;
	  if (!prev || !next) return false;
	
	  if ('pageX' in next && 'pageY' in next) {
	    return prev.pageX === next.pageX && prev.pageY === next.pageY;
	  }
	
	  if ('clientX' in next && 'clientY' in next) {
	    return prev.clientX === next.clientX && prev.clientY === next.clientY;
	  }
	
	  return false;
	}
	
	function isWindow(obj) {
	  return obj && typeof obj === 'object' && obj.window === obj;
	}
	
	function isSimilarValue(val1, val2) {
	  var int1 = Math.floor(val1);
	  var int2 = Math.floor(val2);
	  return Math.abs(int1 - int2) <= 1;
	}
	
	function restoreFocus(activeElement, container) {
	  // Focus back if is in the container
	  if (activeElement !== document.activeElement && (0, _contains2['default'])(container, activeElement)) {
	    activeElement.focus();
	  }
	}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(92);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _defineProperty2 = __webpack_require__(208);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(197);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(209);
	
	var _AnimateChild = __webpack_require__(210);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _animate = __webpack_require__(213);
	
	var _animate2 = _interopRequireDefault(_animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = function (_React$Component) {
	  (0, _inherits3['default'])(Animate, _React$Component);
	
	  // eslint-disable-line
	
	  function Animate(props) {
	    (0, _classCallCheck3['default'])(this, Animate);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));
	
	    _initialiseProps.call(_this);
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props))
	    };
	
	    _this.childrenRefs = {};
	    return _this;
	  }
	
	  (0, _createClass3['default'])(Animate, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
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
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
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
	            newChild = _react2['default'].cloneElement(nextChild || currentChild, (0, _defineProperty3['default'])({}, showProp, true));
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
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      var keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  }, {
	    key: 'isValidChildByKey',
	    value: function isValidChildByKey(currentChildren, key) {
	      var showProp = this.props.showProp;
	      if (showProp) {
	        return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	      }
	      return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	    }
	  }, {
	    key: 'stop',
	    value: function stop(key) {
	      delete this.currentlyAnimatingKeys[key];
	      var component = this.childrenRefs[key];
	      if (component) {
	        component.stop();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
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
	          return _react2['default'].createElement(
	            _AnimateChild2['default'],
	            {
	              key: child.key,
	              ref: function ref(node) {
	                _this4.childrenRefs[child.key] = node;
	              },
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
	          passedProps = (0, _extends3['default'])({
	            className: props.className,
	            style: props.style
	          }, props.componentProps);
	        }
	        return _react2['default'].createElement(
	          Component,
	          passedProps,
	          children
	        );
	      }
	      return children[0] || null;
	    }
	  }]);
	  return Animate;
	}(_react2['default'].Component);
	
	Animate.isAnimate = true;
	Animate.propTypes = {
	  component: _propTypes2['default'].any,
	  componentProps: _propTypes2['default'].object,
	  animation: _propTypes2['default'].object,
	  transitionName: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),
	  transitionEnter: _propTypes2['default'].bool,
	  transitionAppear: _propTypes2['default'].bool,
	  exclusive: _propTypes2['default'].bool,
	  transitionLeave: _propTypes2['default'].bool,
	  onEnd: _propTypes2['default'].func,
	  onEnter: _propTypes2['default'].func,
	  onLeave: _propTypes2['default'].func,
	  onAppear: _propTypes2['default'].func,
	  showProp: _propTypes2['default'].string,
	  children: _propTypes2['default'].node
	};
	Animate.defaultProps = {
	  animation: {},
	  component: 'span',
	  componentProps: {},
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this5 = this;
	
	  this.performEnter = function (key) {
	    // may already remove by exclusive
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
	    }
	  };
	
	  this.performAppear = function (key) {
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
	    }
	  };
	
	  this.handleDoneAdding = function (key, type) {
	    var props = _this5.props;
	    delete _this5.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== _this5.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!_this5.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      _this5.performLeave(key);
	    } else if (type === 'appear') {
	      if (_animate2['default'].allowAppearCallback(props)) {
	        props.onAppear(key);
	        props.onEnd(key, true);
	      }
	    } else if (_animate2['default'].allowEnterCallback(props)) {
	      props.onEnter(key);
	      props.onEnd(key, true);
	    }
	  };
	
	  this.performLeave = function (key) {
	    // may already remove by exclusive
	    if (_this5.childrenRefs[key]) {
	      _this5.currentlyAnimatingKeys[key] = true;
	      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
	    }
	  };
	
	  this.handleDoneLeaving = function (key) {
	    var props = _this5.props;
	    delete _this5.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== _this5.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (_this5.isValidChildByKey(currentChildren, key)) {
	      _this5.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_animate2['default'].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      if (!(0, _ChildrenUtils.isSameChildren)(_this5.state.children, currentChildren, props.showProp)) {
	        _this5.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	};
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(198);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }),
/* 209 */
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
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
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
	    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(197);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _cssAnimation = __webpack_require__(211);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _animate = __webpack_require__(213);
	
	var _animate2 = _interopRequireDefault(_animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = function (_React$Component) {
	  (0, _inherits3['default'])(AnimateChild, _React$Component);
	
	  function AnimateChild() {
	    (0, _classCallCheck3['default'])(this, AnimateChild);
	    return (0, _possibleConstructorReturn3['default'])(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
	  }
	
	  (0, _createClass3['default'])(AnimateChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stop();
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(done) {
	      if (_animate2['default'].isEnterSupported(this.props)) {
	        this.transition('enter', done);
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(done) {
	      if (_animate2['default'].isAppearSupported(this.props)) {
	        this.transition('appear', done);
	      } else {
	        done();
	      }
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(done) {
	      if (_animate2['default'].isLeaveSupported(this.props)) {
	        this.transition('leave', done);
	      } else {
	        // always sync, do not interupt with react component life cycle
	        // update hidden -> animate hidden ->
	        // didUpdate -> animate leave -> unmount (if animate is none)
	        done();
	      }
	    }
	  }, {
	    key: 'transition',
	    value: function transition(animationType, finishCallback) {
	      var _this2 = this;
	
	      var node = _reactDom2['default'].findDOMNode(this);
	      var props = this.props;
	      var transitionName = props.transitionName;
	      var nameIsObj = typeof transitionName === 'object';
	      this.stop();
	      var end = function end() {
	        _this2.stopper = null;
	        finishCallback();
	      };
	      if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	        var activeName = name + '-active';
	        if (nameIsObj && transitionName[animationType + 'Active']) {
	          activeName = transitionName[animationType + 'Active'];
	        }
	        this.stopper = (0, _cssAnimation2['default'])(node, {
	          name: name,
	          active: activeName
	        }, end);
	      } else {
	        this.stopper = props.animation[animationType](node, end);
	      }
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      var stopper = this.stopper;
	      if (stopper) {
	        this.stopper = null;
	        stopper.stop();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return AnimateChild;
	}(_react2['default'].Component);
	
	AnimateChild.propTypes = {
	  children: _propTypes2['default'].any
	};
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isCssAnimationSupported = undefined;
	
	var _typeof2 = __webpack_require__(134);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _Event = __webpack_require__(212);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(47);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var isCssAnimationSupported = _Event2['default'].endEvents.length !== 0;
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
	  var style = window.getComputedStyle(node, null);
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
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : (0, _typeof3['default'])(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2['default'])(node);
	
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
	
	    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2['default'].addEndEventListener(node, node.rcEndListener);
	
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
	
	    _Event2['default'].removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2['default'].addEndEventListener(node, node.rcEndListener);
	
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
	
	exports.isCssAnimationSupported = isCssAnimationSupported;
	exports['default'] = cssAnimation;

/***/ }),
/* 212 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var START_EVENT_NAME_MAP = {
	  transitionstart: {
	    transition: 'transitionstart',
	    WebkitTransition: 'webkitTransitionStart',
	    MozTransition: 'mozTransitionStart',
	    OTransition: 'oTransitionStart',
	    msTransition: 'MSTransitionStart'
	  },
	
	  animationstart: {
	    animation: 'animationstart',
	    WebkitAnimation: 'webkitAnimationStart',
	    MozAnimation: 'mozAnimationStart',
	    OAnimation: 'oAnimationStart',
	    msAnimation: 'MSAnimationStart'
	  }
	};
	
	var END_EVENT_NAME_MAP = {
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
	
	var startEvents = [];
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete START_EVENT_NAME_MAP.animationstart.animation;
	    delete END_EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete START_EVENT_NAME_MAP.transitionstart.transition;
	    delete END_EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  function process(EVENT_NAME_MAP, events) {
	    for (var baseEventName in EVENT_NAME_MAP) {
	      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	        var baseEvents = EVENT_NAME_MAP[baseEventName];
	        for (var styleName in baseEvents) {
	          if (styleName in style) {
	            events.push(baseEvents[styleName]);
	            break;
	          }
	        }
	      }
	    }
	  }
	
	  process(START_EVENT_NAME_MAP, startEvents);
	  process(END_EVENT_NAME_MAP, endEvents);
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
	  // Start events
	  startEvents: startEvents,
	
	  addStartEventListener: function addStartEventListener(node, eventListener) {
	    if (startEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    startEvents.forEach(function (startEvent) {
	      addEventListener(node, startEvent, eventListener);
	    });
	  },
	  removeStartEventListener: function removeStartEventListener(node, eventListener) {
	    if (startEvents.length === 0) {
	      return;
	    }
	    startEvents.forEach(function (startEvent) {
	      removeEventListener(node, startEvent, eventListener);
	    });
	  },
	
	
	  // End events
	  endEvents: endEvents,
	
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports['default'] = TransitionEvents;
	module.exports = exports['default'];

/***/ }),
/* 213 */
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
	module.exports = exports['default'];

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _LazyRenderBox = __webpack_require__(215);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var PopupInner = function (_Component) {
	  (0, _inherits3['default'])(PopupInner, _Component);
	
	  function PopupInner() {
	    (0, _classCallCheck3['default'])(this, PopupInner);
	    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
	  }
	
	  PopupInner.prototype.render = function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2['default'].createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        onMouseDown: props.onMouseDown,
	        onTouchStart: props.onTouchStart,
	        style: props.style
	      },
	      _react2['default'].createElement(
	        _LazyRenderBox2['default'],
	        { className: props.prefixCls + '-content', visible: props.visible },
	        props.children
	      )
	    );
	  };
	
	  return PopupInner;
	}(_react.Component);
	
	PopupInner.propTypes = {
	  hiddenClassName: _propTypes2['default'].string,
	  className: _propTypes2['default'].string,
	  prefixCls: _propTypes2['default'].string,
	  onMouseEnter: _propTypes2['default'].func,
	  onMouseLeave: _propTypes2['default'].func,
	  onMouseDown: _propTypes2['default'].func,
	  onTouchStart: _propTypes2['default'].func,
	  children: _propTypes2['default'].any
	};
	exports['default'] = PopupInner;
	module.exports = exports['default'];

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectWithoutProperties2 = __webpack_require__(131);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var LazyRenderBox = function (_Component) {
	  (0, _inherits3['default'])(LazyRenderBox, _Component);
	
	  function LazyRenderBox() {
	    (0, _classCallCheck3['default'])(this, LazyRenderBox);
	    return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));
	  }
	
	  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  };
	
	  LazyRenderBox.prototype.render = function render() {
	    var _props = this.props,
	        hiddenClassName = _props.hiddenClassName,
	        visible = _props.visible,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['hiddenClassName', 'visible']);
	
	
	    if (hiddenClassName || _react2['default'].Children.count(props.children) > 1) {
	      if (!visible && hiddenClassName) {
	        props.className += ' ' + hiddenClassName;
	      }
	      return _react2['default'].createElement('div', props);
	    }
	
	    return _react2['default'].Children.only(props.children);
	  };
	
	  return LazyRenderBox;
	}(_react.Component);
	
	LazyRenderBox.propTypes = {
	  children: _propTypes2['default'].any,
	  className: _propTypes2['default'].string,
	  visible: _propTypes2['default'].bool,
	  hiddenClassName: _propTypes2['default'].string
	};
	exports['default'] = LazyRenderBox;
	module.exports = exports['default'];

/***/ }),
/* 216 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};
	
	var placements = exports.placements = {
	  topLeft: {
	    points: ['bl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -7]
	  },
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 7]
	  },
	  leftTop: {
	    points: ['tr', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [-4, 0]
	  },
	  rightTop: {
	    points: ['tl', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [4, 0]
	  }
	};
	
	exports['default'] = placements;

/***/ }),
/* 217 */
/***/ (function(module, exports) {

	// mutationobserver-shim v0.3.2 (github.com/megawac/MutationObserver.js)
	// Authors: Graeme Yeates (github.com/megawac) 
	window.MutationObserver=window.MutationObserver||function(w){function v(a){this.i=[];this.m=a}function I(a){(function c(){var d=a.takeRecords();d.length&&a.m(d,a);a.h=setTimeout(c,v._period)})()}function p(a){var b={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null},c;for(c in a)b[c]!==w&&a[c]!==w&&(b[c]=a[c]);return b}function J(a,b){var c=C(a,b);return function(d){var f=d.length,n;b.a&&3===a.nodeType&&
	a.nodeValue!==c.a&&d.push(new p({type:"characterData",target:a,oldValue:c.a}));b.b&&c.b&&A(d,a,c.b,b.f);if(b.c||b.g)n=K(d,a,c,b);if(n||d.length!==f)c=C(a,b)}}function L(a,b){return b.value}function M(a,b){return"style"!==b.name?b.value:a.style.cssText}function A(a,b,c,d){for(var f={},n=b.attributes,k,g,x=n.length;x--;)k=n[x],g=k.name,d&&d[g]===w||(D(b,k)!==c[g]&&a.push(p({type:"attributes",target:b,attributeName:g,oldValue:c[g],attributeNamespace:k.namespaceURI})),f[g]=!0);for(g in c)f[g]||a.push(p({target:b,
	type:"attributes",attributeName:g,oldValue:c[g]}))}function K(a,b,c,d){function f(b,c,f,k,y){var g=b.length-1;y=-~((g-y)/2);for(var h,l,e;e=b.pop();)h=f[e.j],l=k[e.l],d.c&&y&&Math.abs(e.j-e.l)>=g&&(a.push(p({type:"childList",target:c,addedNodes:[h],removedNodes:[h],nextSibling:h.nextSibling,previousSibling:h.previousSibling})),y--),d.b&&l.b&&A(a,h,l.b,d.f),d.a&&3===h.nodeType&&h.nodeValue!==l.a&&a.push(p({type:"characterData",target:h,oldValue:l.a})),d.g&&n(h,l)}function n(b,c){for(var g=b.childNodes,
	q=c.c,x=g.length,v=q?q.length:0,h,l,e,m,t,z=0,u=0,r=0;u<x||r<v;)m=g[u],t=(e=q[r])&&e.node,m===t?(d.b&&e.b&&A(a,m,e.b,d.f),d.a&&e.a!==w&&m.nodeValue!==e.a&&a.push(p({type:"characterData",target:m,oldValue:e.a})),l&&f(l,b,g,q,z),d.g&&(m.childNodes.length||e.c&&e.c.length)&&n(m,e),u++,r++):(k=!0,h||(h={},l=[]),m&&(h[e=E(m)]||(h[e]=!0,-1===(e=F(q,m,r,"node"))?d.c&&(a.push(p({type:"childList",target:b,addedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),z++):l.push({j:u,l:e})),
	u++),t&&t!==g[u]&&(h[e=E(t)]||(h[e]=!0,-1===(e=F(g,t,u))?d.c&&(a.push(p({type:"childList",target:c.node,removedNodes:[t],nextSibling:q[r+1],previousSibling:q[r-1]})),z--):l.push({j:e,l:r})),r++));l&&f(l,b,g,q,z)}var k;n(b,c);return k}function C(a,b){var c=!0;return function f(a){var k={node:a};!b.a||3!==a.nodeType&&8!==a.nodeType?(b.b&&c&&1===a.nodeType&&(k.b=G(a.attributes,function(c,f){if(!b.f||b.f[f.name])c[f.name]=D(a,f);return c})),c&&(b.c||b.a||b.b&&b.g)&&(k.c=N(a.childNodes,f)),c=b.g):k.a=
	a.nodeValue;return k}(a)}function E(a){try{return a.id||(a.mo_id=a.mo_id||H++)}catch(b){try{return a.nodeValue}catch(c){return H++}}}function N(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c}function G(a,b){for(var c={},d=0;d<a.length;d++)c=b(c,a[d],d,a);return c}function F(a,b,c,d){for(;c<a.length;c++)if((d?a[c][d]:a[c])===b)return c;return-1}v._period=30;v.prototype={observe:function(a,b){for(var c={b:!!(b.attributes||b.attributeFilter||b.attributeOldValue),c:!!b.childList,g:!!b.subtree,
	a:!(!b.characterData&&!b.characterDataOldValue)},d=this.i,f=0;f<d.length;f++)d[f].s===a&&d.splice(f,1);b.attributeFilter&&(c.f=G(b.attributeFilter,function(a,b){a[b]=!0;return a}));d.push({s:a,o:J(a,c)});this.h||I(this)},takeRecords:function(){for(var a=[],b=this.i,c=0;c<b.length;c++)b[c].o(a);return a},disconnect:function(){this.i=[];clearTimeout(this.h);this.h=null}};var B=document.createElement("i");B.style.top=0;var D=(B="null"!=B.attributes.style.value)?L:M,H=1;return v}(void 0);


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.MenuItem = undefined;
	
	var _extends2 = __webpack_require__(92);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _KeyCode = __webpack_require__(186);
	
	var _KeyCode2 = _interopRequireDefault(_KeyCode);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domScrollIntoView = __webpack_require__(219);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _miniStore = __webpack_require__(175);
	
	var _util = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint react/no-is-mounted:0 */
	
	var MenuItem = exports.MenuItem = function (_React$Component) {
	  (0, _inherits3['default'])(MenuItem, _React$Component);
	
	  function MenuItem(props) {
	    (0, _classCallCheck3['default'])(this, MenuItem);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));
	
	    _this.onKeyDown = function (e) {
	      var keyCode = e.keyCode;
	      if (keyCode === _KeyCode2['default'].ENTER) {
	        _this.onClick(e);
	        return true;
	      }
	    };
	
	    _this.onMouseLeave = function (e) {
	      var _this$props = _this.props,
	          eventKey = _this$props.eventKey,
	          onItemHover = _this$props.onItemHover,
	          onMouseLeave = _this$props.onMouseLeave;
	
	      onItemHover({
	        key: eventKey,
	        hover: false
	      });
	      onMouseLeave({
	        key: eventKey,
	        domEvent: e
	      });
	    };
	
	    _this.onMouseEnter = function (e) {
	      var _this$props2 = _this.props,
	          eventKey = _this$props2.eventKey,
	          onItemHover = _this$props2.onItemHover,
	          onMouseEnter = _this$props2.onMouseEnter;
	
	      onItemHover({
	        key: eventKey,
	        hover: true
	      });
	      onMouseEnter({
	        key: eventKey,
	        domEvent: e
	      });
	    };
	
	    _this.onClick = function (e) {
	      var _this$props3 = _this.props,
	          eventKey = _this$props3.eventKey,
	          multiple = _this$props3.multiple,
	          onClick = _this$props3.onClick,
	          onSelect = _this$props3.onSelect,
	          onDeselect = _this$props3.onDeselect,
	          isSelected = _this$props3.isSelected;
	
	      var info = {
	        key: eventKey,
	        keyPath: [eventKey],
	        item: _this,
	        domEvent: e
	      };
	      onClick(info);
	      if (multiple) {
	        if (isSelected) {
	          onDeselect(info);
	        } else {
	          onSelect(info);
	        }
	      } else if (!isSelected) {
	        onSelect(info);
	      }
	    };
	
	    return _this;
	  }
	
	  MenuItem.prototype.componentDidMount = function componentDidMount() {
	    // invoke customized ref to expose component to mixin
	    this.callRef();
	  };
	
	  MenuItem.prototype.componentDidUpdate = function componentDidUpdate() {
	    if (this.props.active) {
	      (0, _domScrollIntoView2['default'])(_reactDom2['default'].findDOMNode(this), _reactDom2['default'].findDOMNode(this.props.parentMenu), {
	        onlyScrollIfNeeded: true
	      });
	    }
	    this.callRef();
	  };
	
	  MenuItem.prototype.componentWillUnmount = function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	  };
	
	  MenuItem.prototype.getPrefixCls = function getPrefixCls() {
	    return this.props.rootPrefixCls + '-item';
	  };
	
	  MenuItem.prototype.getActiveClassName = function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  };
	
	  MenuItem.prototype.getSelectedClassName = function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  };
	
	  MenuItem.prototype.getDisabledClassName = function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  };
	
	  MenuItem.prototype.callRef = function callRef() {
	    if (this.props.manualRef) {
	      this.props.manualRef(this);
	    }
	  };
	
	  MenuItem.prototype.render = function render() {
	    var _classNames;
	
	    var props = (0, _extends3['default'])({}, this.props);
	    var className = (0, _classnames2['default'])(this.getPrefixCls(), props.className, (_classNames = {}, _classNames[this.getActiveClassName()] = !props.disabled && props.active, _classNames[this.getSelectedClassName()] = props.isSelected, _classNames[this.getDisabledClassName()] = props.disabled, _classNames));
	    var attrs = (0, _extends3['default'])({}, props.attribute, {
	      title: props.title,
	      className: className,
	      // set to menuitem by default
	      role: props.role || 'menuitem',
	      'aria-disabled': props.disabled
	    });
	
	    if (props.role === 'option') {
	      // overwrite to option
	      attrs = (0, _extends3['default'])({}, attrs, {
	        role: 'option',
	        'aria-selected': props.isSelected
	      });
	    } else if (props.role === null || props.role === 'none') {
	      // sometimes we want to specify role inside <li/> element
	      // <li><a role='menuitem'>Link</a></li> would be a good example
	      // in this case the role on <li/> should be "none" to
	      // remove the implied listitem role.
	      // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
	      attrs.role = 'none';
	    }
	    // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
	    var mouseEvent = {
	      onClick: props.disabled ? null : this.onClick,
	      onMouseLeave: props.disabled ? null : this.onMouseLeave,
	      onMouseEnter: props.disabled ? null : this.onMouseEnter
	    };
	    var style = (0, _extends3['default'])({}, props.style);
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    _util.menuAllProps.forEach(function (key) {
	      return delete props[key];
	    });
	    var icon = this.props.itemIcon;
	    if (typeof this.props.itemIcon === 'function') {
	      icon = _react2['default'].createElement(this.props.itemIcon, this.props);
	    }
	    return _react2['default'].createElement(
	      'li',
	      (0, _extends3['default'])({}, props, attrs, mouseEvent, {
	        style: style
	      }),
	      props.children,
	      icon
	    );
	  };
	
	  return MenuItem;
	}(_react2['default'].Component);
	
	MenuItem.propTypes = {
	  attribute: _propTypes2['default'].object,
	  rootPrefixCls: _propTypes2['default'].string,
	  eventKey: _propTypes2['default'].string,
	  active: _propTypes2['default'].bool,
	  children: _propTypes2['default'].any,
	  selectedKeys: _propTypes2['default'].array,
	  disabled: _propTypes2['default'].bool,
	  title: _propTypes2['default'].string,
	  onItemHover: _propTypes2['default'].func,
	  onSelect: _propTypes2['default'].func,
	  onClick: _propTypes2['default'].func,
	  onDeselect: _propTypes2['default'].func,
	  parentMenu: _propTypes2['default'].object,
	  onDestroy: _propTypes2['default'].func,
	  onMouseEnter: _propTypes2['default'].func,
	  onMouseLeave: _propTypes2['default'].func,
	  multiple: _propTypes2['default'].bool,
	  isSelected: _propTypes2['default'].bool,
	  manualRef: _propTypes2['default'].func,
	  itemIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].node])
	};
	MenuItem.defaultProps = {
	  onSelect: _util.noop,
	  onMouseEnter: _util.noop,
	  onMouseLeave: _util.noop,
	  manualRef: _util.noop
	};
	
	
	MenuItem.isMenuItem = true;
	
	var connected = (0, _miniStore.connect)(function (_ref, _ref2) {
	  var activeKey = _ref.activeKey,
	      selectedKeys = _ref.selectedKeys;
	  var eventKey = _ref2.eventKey,
	      subMenuKey = _ref2.subMenuKey;
	  return {
	    active: activeKey[subMenuKey] === eventKey,
	    isSelected: selectedKeys.indexOf(eventKey) !== -1
	  };
	})(MenuItem);
	
	exports['default'] = connected;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(220);

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(221);
	
	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }
	
	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	  var offsetTop = config.offsetTop || 0;
	  var offsetLeft = config.offsetLeft || 0;
	  var offsetBottom = config.offsetBottom || 0;
	  var offsetRight = config.offsetRight || 0;
	
	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
	
	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;
	
	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left - offsetLeft,
	      top: elemOffset.top - winScroll.top - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
	      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
	    };
	  }
	
	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }
	
	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}
	
	module.exports = scrollIntoView;

/***/ }),
/* 221 */
/***/ (function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
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
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);
	
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
	
	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
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
	  var name = undefined;
	
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
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
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
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
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
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
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
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
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
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;
	
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}
	
	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(92);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(131);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _util = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var MenuItemGroup = function (_React$Component) {
	  (0, _inherits3['default'])(MenuItemGroup, _React$Component);
	
	  function MenuItemGroup() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3['default'])(this, MenuItemGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderInnerMenuItem = function (item) {
	      var _this$props = _this.props,
	          renderMenuItem = _this$props.renderMenuItem,
	          index = _this$props.index;
	
	      return renderMenuItem(item, index, _this.props.subMenuKey);
	    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
	  }
	
	  MenuItemGroup.prototype.render = function render() {
	    var props = (0, _objectWithoutProperties3['default'])(this.props, []);
	    var _props$className = props.className,
	        className = _props$className === undefined ? '' : _props$className,
	        rootPrefixCls = props.rootPrefixCls;
	
	    var titleClassName = rootPrefixCls + '-item-group-title';
	    var listClassName = rootPrefixCls + '-item-group-list';
	    var title = props.title,
	        children = props.children;
	
	    _util.menuAllProps.forEach(function (key) {
	      return delete props[key];
	    });
	
	    // Set onClick to null, to ignore propagated onClick event
	    delete props.onClick;
	
	    return _react2['default'].createElement(
	      'li',
	      (0, _extends3['default'])({}, props, { className: className + ' ' + rootPrefixCls + '-item-group' }),
	      _react2['default'].createElement(
	        'div',
	        {
	          className: titleClassName,
	          title: typeof title === 'string' ? title : undefined
	        },
	        title
	      ),
	      _react2['default'].createElement(
	        'ul',
	        { className: listClassName },
	        _react2['default'].Children.map(children, this.renderInnerMenuItem)
	      )
	    );
	  };
	
	  return MenuItemGroup;
	}(_react2['default'].Component);
	
	MenuItemGroup.propTypes = {
	  renderMenuItem: _propTypes2['default'].func,
	  index: _propTypes2['default'].number,
	  className: _propTypes2['default'].string,
	  subMenuKey: _propTypes2['default'].string,
	  rootPrefixCls: _propTypes2['default'].string
	};
	MenuItemGroup.defaultProps = {
	  disabled: true
	};
	
	
	MenuItemGroup.isMenuItemGroup = true;
	
	exports['default'] = MenuItemGroup;
	module.exports = exports['default'];

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _classCallCheck2 = __webpack_require__(132);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(133);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(167);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Divider = function (_React$Component) {
	  (0, _inherits3['default'])(Divider, _React$Component);
	
	  function Divider() {
	    (0, _classCallCheck3['default'])(this, Divider);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Divider.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        rootPrefixCls = _props.rootPrefixCls,
	        style = _props.style;
	
	    return _react2['default'].createElement('li', {
	      className: className + ' ' + rootPrefixCls + '-item-divider',
	      style: style
	    });
	  };
	
	  return Divider;
	}(_react2['default'].Component);
	
	Divider.propTypes = {
	  className: _propTypes2['default'].string,
	  rootPrefixCls: _propTypes2['default'].string,
	  style: _propTypes2['default'].object
	};
	Divider.defaultProps = {
	  // To fix keyboard UX.
	  disabled: true,
	  className: '',
	  style: {}
	};
	exports['default'] = Divider;
	module.exports = exports['default'];

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-select.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/select
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var Option = function (_React$Component) {
	  _inherits(Option, _React$Component);
	
	  function Option() {
	    _classCallCheck(this, Option);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  return Option;
	}(_react2["default"].Component);
	
	Option.propTypes = {
	  value: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number])
	};
	Option.isSelectOption = true;
	exports["default"] = Option;
	module.exports = exports['default'];

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_STYLE = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.toTitle = toTitle;
	exports.getValuePropValue = getValuePropValue;
	exports.getPropValue = getPropValue;
	exports.isMultiple = isMultiple;
	exports.isCombobox = isCombobox;
	exports.isMultipleOrTags = isMultipleOrTags;
	exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
	exports.isSingleMode = isSingleMode;
	exports.toArray = toArray;
	exports.getMapKey = getMapKey;
	exports.preventDefaultEvent = preventDefaultEvent;
	exports.findIndexInValueBySingleValue = findIndexInValueBySingleValue;
	exports.getLabelFromPropsValue = getLabelFromPropsValue;
	exports.getSelectKeys = getSelectKeys;
	exports.findFirstMenuItem = findFirstMenuItem;
	exports.includesSeparators = includesSeparators;
	exports.splitBySeparators = splitBySeparators;
	exports.defaultFilterFn = defaultFilterFn;
	exports.validateOptionValue = validateOptionValue;
	exports.saveRef = saveRef;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toTitle(title) {
	  if (typeof title === 'string') {
	    return title;
	  }
	  return null;
	}
	
	function getValuePropValue(child) {
	  if (!child) {
	    return null;
	  }
	
	  var props = child.props;
	  if ('value' in props) {
	    return props.value;
	  }
	  if (child.key) {
	    return child.key;
	  }
	  if (child.type && child.type.isSelectOptGroup && props.label) {
	    return props.label;
	  }
	  throw new Error('Need at least a key or a value or a label (only for OptGroup) for ' + child);
	}
	
	function getPropValue(child, prop) {
	  if (prop === 'value') {
	    return getValuePropValue(child);
	  }
	  return child.props[prop];
	}
	
	function isMultiple(props) {
	  return props.multiple;
	}
	
	function isCombobox(props) {
	  return props.combobox;
	}
	
	function isMultipleOrTags(props) {
	  return props.multiple || props.tags;
	}
	
	function isMultipleOrTagsOrCombobox(props) {
	  return isMultipleOrTags(props) || isCombobox(props);
	}
	
	function isSingleMode(props) {
	  return !isMultipleOrTagsOrCombobox(props);
	}
	
	function toArray(value) {
	  var ret = value;
	  if (value === undefined) {
	    ret = [];
	  } else if (!Array.isArray(value)) {
	    ret = [value];
	  }
	  return ret;
	}
	
	function getMapKey(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '-' + value;
	}
	
	function preventDefaultEvent(e) {
	  e.preventDefault();
	}
	
	function findIndexInValueBySingleValue(value, singleValue) {
	  var index = -1;
	  for (var i = 0; i < value.length; i++) {
	    if (value[i] === singleValue) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}
	
	function getLabelFromPropsValue(value, key) {
	  var label = void 0;
	  value = toArray(value);
	  for (var i = 0; i < value.length; i++) {
	    if (value[i].key === key) {
	      label = value[i].label;
	      break;
	    }
	  }
	  return label;
	}
	
	function getSelectKeys(menuItems, value) {
	  if (value === null || value === undefined) {
	    return [];
	  }
	  var selectedKeys = [];
	  _react2["default"].Children.forEach(menuItems, function (item) {
	    if (item.type.isMenuItemGroup) {
	      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
	    } else {
	      var itemValue = getValuePropValue(item);
	      var itemKey = item.key;
	      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey) {
	        selectedKeys.push(itemKey);
	      }
	    }
	  });
	  return selectedKeys;
	}
	
	var UNSELECTABLE_STYLE = exports.UNSELECTABLE_STYLE = {
	  userSelect: 'none',
	  WebkitUserSelect: 'none'
	};
	
	var UNSELECTABLE_ATTRIBUTE = exports.UNSELECTABLE_ATTRIBUTE = {
	  unselectable: 'on'
	};
	
	function findFirstMenuItem(children) {
	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (child.type.isMenuItemGroup) {
	      var found = findFirstMenuItem(child.props.children);
	      if (found) {
	        return found;
	      }
	    } else if (!child.props.disabled) {
	      return child;
	    }
	  }
	  return null;
	}
	
	function includesSeparators(string, separators) {
	  for (var i = 0; i < separators.length; ++i) {
	    if (string.lastIndexOf(separators[i]) > 0) {
	      return true;
	    }
	  }
	  return false;
	}
	
	function splitBySeparators(string, separators) {
	  var reg = new RegExp('[' + separators.join() + ']');
	  return string.split(reg).filter(function (token) {
	    return token;
	  });
	}
	
	function defaultFilterFn(input, child) {
	  if (child.props.disabled) {
	    return false;
	  }
	  var value = toArray(getPropValue(child, this.props.optionFilterProp)).join('');
	  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
	}
	
	function validateOptionValue(value, props) {
	  if (isSingleMode(props) || isMultiple(props)) {
	    return;
	  }
	  if (typeof value !== 'string') {
	    throw new Error('Invalid `value` of type `' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '` supplied to Option, ' + 'expected `string` when `tags/combobox` is `true`.');
	  }
	}
	
	function saveRef(instance, name) {
	  return function (node) {
	    instance[name] = node;
	  };
	}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _trigger = __webpack_require__(227);
	
	var _trigger2 = _interopRequireDefault(_trigger);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _util = __webpack_require__(225);
	
	var _DropdownMenu = __webpack_require__(234);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-select.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/select
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	_trigger2["default"].displayName = 'Trigger';
	
	var BUILT_IN_PLACEMENTS = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  }
	};
	
	var SelectTrigger = function (_React$Component) {
	  _inherits(SelectTrigger, _React$Component);
	
	  function SelectTrigger(props) {
	    _classCallCheck(this, SelectTrigger);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    _this.saveDropdownMenuRef = (0, _util.saveRef)(_this, 'dropdownMenuRef');
	    _this.saveTriggerRef = (0, _util.saveRef)(_this, 'triggerRef');
	
	    _this.state = {
	      dropdownWidth: null
	    };
	    return _this;
	  }
	
	  SelectTrigger.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.open) {
	      //宽度计算时机修改
	      this.setDropdownWidth();
	    }
	  };
	
	  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
	    if (this.props.visible) {
	      //宽度计算时机修改
	      this.setDropdownWidth();
	    }
	  };
	
	  SelectTrigger.prototype.render = function render() {
	    var _popupClassName;
	
	    var _props = this.props,
	        onPopupFocus = _props.onPopupFocus,
	        props = _objectWithoutProperties(_props, ['onPopupFocus']);
	
	    var multiple = props.multiple,
	        visible = props.visible,
	        inputValue = props.inputValue,
	        dropdownAlign = props.dropdownAlign,
	        disabled = props.disabled,
	        showSearch = props.showSearch,
	        dropdownClassName = props.dropdownClassName,
	        dropdownStyle = props.dropdownStyle,
	        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
	
	    var dropdownPrefixCls = this.getDropdownPrefixCls();
	    var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
	    var popupElement = this.getDropdownElement({
	      menuItems: props.options,
	      onPopupFocus: onPopupFocus,
	      multiple: multiple,
	      inputValue: inputValue,
	      visible: visible
	    });
	    var hideAction = void 0;
	    if (disabled) {
	      hideAction = [];
	    } else if ((0, _util.isSingleMode)(props) && !showSearch) {
	      hideAction = ['click'];
	    } else {
	      hideAction = ['blur'];
	    }
	    var popupStyle = _extends({}, dropdownStyle);
	    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
	    if (this.state.dropdownWidth) {
	      popupStyle[widthProp] = this.state.dropdownWidth + 'px';
	    }
	
	    return _react2["default"].createElement(
	      _trigger2["default"],
	      _extends({}, props, {
	        showAction: disabled ? [] : this.props.showAction,
	        hideAction: hideAction,
	        ref: this.saveTriggerRef,
	        popupPlacement: 'bottomLeft',
	        builtinPlacements: BUILT_IN_PLACEMENTS,
	        prefixCls: dropdownPrefixCls,
	        popupTransitionName: this.getDropdownTransitionName(),
	        onPopupVisibleChange: props.onDropdownVisibleChange,
	        popup: popupElement,
	        popupAlign: dropdownAlign,
	        popupVisible: visible,
	        getPopupContainer: props.getPopupContainer,
	        popupClassName: (0, _classnames2["default"])(popupClassName),
	        popupStyle: popupStyle
	      }),
	      props.children
	    );
	  };
	
	  return SelectTrigger;
	}(_react2["default"].Component);
	
	SelectTrigger.propTypes = {
	  onPopupFocus: _propTypes2["default"].func,
	  onPopupScroll: _propTypes2["default"].func,
	  dropdownMatchSelectWidth: _propTypes2["default"].bool,
	  dropdownAlign: _propTypes2["default"].object,
	  visible: _propTypes2["default"].bool,
	  disabled: _propTypes2["default"].bool,
	  showSearch: _propTypes2["default"].bool,
	  dropdownClassName: _propTypes2["default"].string,
	  multiple: _propTypes2["default"].bool,
	  inputValue: _propTypes2["default"].string,
	  filterOption: _propTypes2["default"].any,
	  options: _propTypes2["default"].any,
	  prefixCls: _propTypes2["default"].string,
	  popupClassName: _propTypes2["default"].string,
	  children: _propTypes2["default"].any,
	  showAction: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  menuItemSelectedIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node])
	};
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.setDropdownWidth = function () {
	    if (!_this2.props.dropdownMatchSelectWidth) {
	      return;
	    }
	    var width = _reactDom2["default"].findDOMNode(_this2).offsetWidth;
	    if (width !== _this2.state.dropdownWidth) {
	      _this2.setState({ dropdownWidth: width });
	    }
	  };
	
	  this.getInnerMenu = function () {
	    return _this2.dropdownMenuRef && _this2.dropdownMenuRef.menuRef;
	  };
	
	  this.getPopupDOMNode = function () {
	    return _this2.triggerRef.getPopupDomNode();
	  };
	
	  this.getDropdownElement = function (newProps) {
	    var props = _this2.props;
	    return _react2["default"].createElement(_DropdownMenu2["default"], _extends({
	      ref: _this2.saveDropdownMenuRef
	    }, newProps, {
	      clsPrefix: _this2.getDropdownPrefixCls(),
	      onMenuSelect: props.onMenuSelect,
	      onMenuDeselect: props.onMenuDeselect,
	      onPopupScroll: props.onPopupScroll,
	      value: props.value,
	      backfillValue: props.backfillValue,
	      firstActiveValue: props.firstActiveValue,
	      defaultActiveFirstOption: props.defaultActiveFirstOption,
	      dropdownMenuStyle: props.dropdownMenuStyle,
	      menuItemSelectedIcon: props.menuItemSelectedIcon
	    }));
	  };
	
	  this.getDropdownTransitionName = function () {
	    var props = _this2.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = _this2.getDropdownPrefixCls() + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  this.getDropdownPrefixCls = function () {
	    return _this2.props.prefixCls + '-dropdown';
	  };
	};
	
	exports["default"] = SelectTrigger;
	
	
	SelectTrigger.displayName = 'SelectTrigger';
	module.exports = exports['default'];

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(228);

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _contains = __webpack_require__(229);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _Popup = __webpack_require__(230);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _utils = __webpack_require__(233);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	//import getContainerRenderMixin from './getContainerRenderMixin';
	
	function noop() {}
	
	function returnEmptyString() {
	  return '';
	}
	
	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
	
	var propTypes = {
	  children: _propTypes2["default"].any,
	  action: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].arrayOf(_propTypes2["default"].string)]),
	  showAction: _propTypes2["default"].any,
	  hideAction: _propTypes2["default"].any,
	  getPopupClassNameFromAlign: _propTypes2["default"].any,
	  onPopupVisibleChange: _propTypes2["default"].func,
	  afterPopupVisibleChange: _propTypes2["default"].func,
	  popup: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func]).isRequired,
	  popupStyle: _propTypes2["default"].object,
	  clsPrefix: _propTypes2["default"].string,
	  popupClassName: _propTypes2["default"].string,
	  popupPlacement: _propTypes2["default"].string,
	  builtinPlacements: _propTypes2["default"].object,
	  popupTransitionName: _propTypes2["default"].string,
	  popupAnimation: _propTypes2["default"].any,
	  mouseEnterDelay: _propTypes2["default"].number,
	  mouseLeaveDelay: _propTypes2["default"].number,
	  zIndex: _propTypes2["default"].number,
	  focusDelay: _propTypes2["default"].number,
	  blurDelay: _propTypes2["default"].number,
	  getPopupContainer: _propTypes2["default"].func,
	  destroyPopupOnHide: _propTypes2["default"].bool,
	  mask: _propTypes2["default"].bool,
	  maskClosable: _propTypes2["default"].bool,
	  onPopupAlign: _propTypes2["default"].func,
	  popupAlign: _propTypes2["default"].object,
	  popupVisible: _propTypes2["default"].bool,
	  maskTransitionName: _propTypes2["default"].string,
	  maskAnimation: _propTypes2["default"].string,
	  getDocument: _propTypes2["default"].func //获得点击消失的document对象，适用于getPopupContainer渲染到非当前document情况，例如iframe
	};
	
	var defaultProps = {
	  clsPrefix: 'rc-trigger-popup',
	  getPopupClassNameFromAlign: returnEmptyString,
	  onPopupVisibleChange: noop,
	  afterPopupVisibleChange: noop,
	  onPopupAlign: noop,
	  popupClassName: '',
	  mouseEnterDelay: 0,
	  mouseLeaveDelay: 0.1,
	  focusDelay: 0,
	  blurDelay: 0.15,
	  popupStyle: {},
	  destroyPopupOnHide: false,
	  popupAlign: {},
	  defaultPopupVisible: false,
	  mask: false,
	  maskClosable: true,
	  action: [],
	  showAction: [],
	  hideAction: [],
	  getDocument: function getDocument() {
	    return document;
	  }
	};
	
	var Trigger = function (_Component) {
	  _inherits(Trigger, _Component);
	
	  function Trigger(props) {
	    _classCallCheck(this, Trigger);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.getDocument = function () {
	      var doc = document;
	      if (_this.props.getDocument) doc = _this.props.getDocument();
	      return doc;
	    };
	
	    _this.state = {
	      popupVisible: !!_this.props.popupVisible || _this.props.defaultPopupVisible
	      //this.removeContainer = this.removeContainer.bind(this);
	    };_this.getContainer = _this.getContainer.bind(_this);
	    _this.renderComponent = _this.renderComponent.bind(_this);
	    _this.isVisible = _this.isVisible.bind(_this);
	
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onPopupMouseEnter = _this.onPopupMouseEnter.bind(_this);
	    _this.onPopupMouseLeave = _this.onPopupMouseLeave.bind(_this);
	    _this.onFocus = _this.onFocus.bind(_this);
	
	    _this.onMouseDown = _this.onMouseDown.bind(_this);
	    _this.onTouchStart = _this.onTouchStart.bind(_this);
	    _this.onBlur = _this.onBlur.bind(_this);
	    _this.onDocumentClick = _this.onDocumentClick.bind(_this);
	    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);
	
	    _this.getRootDomNode = _this.getRootDomNode.bind(_this);
	    _this.getPopupClassNameFromAlign = _this.getPopupClassNameFromAlign.bind(_this);
	    _this.getPopupAlign = _this.getPopupAlign.bind(_this);
	    _this.getComponent = _this.getComponent.bind(_this);
	    _this.setPopupVisible = _this.setPopupVisible.bind(_this);
	
	    _this.delaySetPopupVisible = _this.delaySetPopupVisible.bind(_this);
	    _this.clearDelayTimer = _this.clearDelayTimer.bind(_this);
	    _this.createTwoChains = _this.createTwoChains.bind(_this);
	    _this.isClickToShow = _this.isClickToShow.bind(_this);
	    _this.isClickToHide = _this.isClickToHide.bind(_this);
	
	    _this.isMouseEnterToShow = _this.isMouseEnterToShow.bind(_this);
	    _this.isMouseLeaveToHide = _this.isMouseLeaveToHide.bind(_this);
	    _this.isFocusToShow = _this.isFocusToShow.bind(_this);
	    _this.isBlurToHide = _this.isBlurToHide.bind(_this);
	    _this.forcePopupAlign = _this.forcePopupAlign.bind(_this);
	
	    _this.fireEvents = _this.fireEvents.bind(_this);
	    _this.close = _this.close.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  Trigger.prototype.isVisible = function isVisible(instance) {
	    return instance.state.popupVisible;
	  };
	
	  Trigger.prototype.getContainer = function getContainer(instance) {
	    var popupContainer = document.createElement('div');
	    var mountNode = instance.props.getPopupContainer ? instance.props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : document.body;
	    mountNode.appendChild(popupContainer);
	    return popupContainer;
	  };
	
	  Trigger.prototype.renderComponent = function renderComponent(instance, componentArg, ready) {
	    if (instance._component || this.isVisible(instance)) {
	      if (!instance._container) {
	        instance._container = this.getContainer(instance);
	      }
	      var component = instance.getComponent(componentArg);
	      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  };
	
	  Trigger.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    this.mounted = false;
	    ALL_HANDLERS.forEach(function (h) {
	      _this2['fire' + h] = function (e) {
	        _this2.fireEvents(h, e);
	      };
	    });
	  };
	
	  Trigger.prototype.componentDidMount = function componentDidMount() {
	    this.mounted = true;
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  };
	
	  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
	    var popupVisible = _ref.popupVisible;
	
	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  };
	
	  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
	    var props = this.props;
	    var state = this.state;
	    this.renderComponent(this, null, function () {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    });
	    if (this.isClickToHide()) {
	      if (state.popupVisible) {
	        if (!this.clickOutsideHandler) {
	          this.clickOutsideHandler = (0, _tinperBeeCore.addEventListener)(this.getDocument(), 'mousedown', this.onDocumentClick);
	          this.touchOutsideHandler = (0, _tinperBeeCore.addEventListener)(this.getDocument(), 'touchstart', this.onDocumentClick);
	          this.mouseWheelOutsideHandler = (0, _tinperBeeCore.addEventListener)(this.getDocument(), 'mousewheel', this.onDocumentClick);
	        }
	        return;
	      }
	    }
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.mouseWheelOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	      this.mouseWheelOutsideHandler = null;
	    }
	  };
	
	  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearDelayTimer();
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.mouseWheelOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	      this.mouseWheelOutsideHandler = null;
	    }
	    if (this._container) {
	      _reactDom2["default"].unmountComponentAtNode(this._container);
	    }
	
	    //this.removeContainer();
	  };
	
	  Trigger.prototype.onMouseEnter = function onMouseEnter(e) {
	    this.fireEvents('onMouseEnter', e);
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  };
	
	  Trigger.prototype.onMouseLeave = function onMouseLeave(e) {
	    this.fireEvents('onMouseLeave', e);
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  };
	
	  Trigger.prototype.onPopupMouseEnter = function onPopupMouseEnter() {
	    this.clearDelayTimer();
	  };
	
	  Trigger.prototype.onPopupMouseLeave = function onPopupMouseLeave(e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && (0, _contains2["default"])(this._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  };
	
	  Trigger.prototype.onFocus = function onFocus(e) {
	    this.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    this.clearDelayTimer();
	    if (this.isFocusToShow()) {
	      this.focusTime = Date.now();
	      this.delaySetPopupVisible(true, this.props.focusDelay);
	    }
	  };
	
	  Trigger.prototype.onMouseDown = function onMouseDown(e) {
	    this.fireEvents('onMouseDown', e);
	    this.preClickTime = Date.now();
	  };
	
	  Trigger.prototype.onTouchStart = function onTouchStart(e) {
	    this.fireEvents('onTouchStart', e);
	    this.preTouchTime = Date.now();
	  };
	
	  Trigger.prototype.onBlur = function onBlur(e) {
	    this.fireEvents('onBlur', e);
	    this.clearDelayTimer();
	    if (this.isBlurToHide()) {
	      this.delaySetPopupVisible(false, this.props.blurDelay);
	    }
	  };
	
	  Trigger.prototype.onClick = function onClick(event) {
	    this.fireEvents('onClick', event);
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = void 0;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    var nextVisible = !this.state.popupVisible;
	    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
	      this.setPopupVisible(!this.state.popupVisible);
	    }
	  };
	
	  Trigger.prototype.onDocumentClick = function onDocumentClick(event) {
	    if (this.props.mask && !this.props.maskClosable) {
	      return;
	    }
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!(0, _contains2["default"])(root, target) && !(0, _contains2["default"])(popupNode, target)) {
	      this.close();
	    }
	  };
	
	  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
	    // for test
	    if (this._component) {
	      return this.mounted ? this._component.getPopupDomNode() : null;
	    }
	    return null;
	  };
	
	  Trigger.prototype.getRootDomNode = function getRootDomNode() {
	    return _reactDom2["default"].findDOMNode(this);
	  };
	
	  Trigger.prototype.getPopupClassNameFromAlign = function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement,
	        builtinPlacements = props.builtinPlacements,
	        clsPrefix = props.clsPrefix;
	
	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, clsPrefix, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  };
	
	  Trigger.prototype.getPopupAlign = function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement,
	        popupAlign = props.popupAlign,
	        builtinPlacements = props.builtinPlacements;
	
	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  };
	
	  Trigger.prototype.getComponent = function getComponent() {
	    var props = this.props,
	        state = this.state;
	
	    var mouseProps = {};
	    if (this.isMouseEnterToShow()) {
	      mouseProps.onMouseEnter = this.onPopupMouseEnter;
	    }
	    if (this.isMouseLeaveToHide()) {
	      mouseProps.onMouseLeave = this.onPopupMouseLeave;
	    }
	    return _react2["default"].createElement(
	      _Popup2["default"],
	      _extends({
	        clsPrefix: props.clsPrefix,
	        destroyPopupOnHide: props.destroyPopupOnHide,
	        visible: state.popupVisible,
	        className: props.popupClassName,
	        action: props.action,
	        align: this.getPopupAlign(),
	        onAlign: props.onPopupAlign,
	        animation: props.popupAnimation,
	        getClassNameFromAlign: this.getPopupClassNameFromAlign
	      }, mouseProps, {
	        getRootDomNode: this.getRootDomNode,
	        style: props.popupStyle,
	        mask: props.mask,
	        zIndex: props.zIndex,
	        transitionName: props.popupTransitionName,
	        maskAnimation: props.maskAnimation,
	        maskTransitionName: props.maskTransitionName
	      }),
	      typeof props.popup === 'function' ? props.popup() : props.popup
	    );
	  };
	
	  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible) {
	    this.clearDelayTimer();
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  };
	
	  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS) {
	    var _this3 = this;
	
	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this3.setPopupVisible(visible);
	        _this3.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  };
	
	  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  };
	
	  Trigger.prototype.createTwoChains = function createTwoChains(event) {
	    var childPros = this.props.children.props;
	    var props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  };
	
	  Trigger.prototype.isClickToShow = function isClickToShow() {
	    var _props = this.props,
	        action = _props.action,
	        showAction = _props.showAction;
	
	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  };
	
	  Trigger.prototype.isClickToHide = function isClickToHide() {
	    var _props2 = this.props,
	        action = _props2.action,
	        hideAction = _props2.hideAction;
	
	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  };
	
	  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
	    var _props3 = this.props,
	        action = _props3.action,
	        showAction = _props3.showAction;
	
	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  };
	
	  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
	    var _props4 = this.props,
	        action = _props4.action,
	        hideAction = _props4.hideAction;
	
	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  };
	
	  Trigger.prototype.isFocusToShow = function isFocusToShow() {
	    var _props5 = this.props,
	        action = _props5.action,
	        showAction = _props5.showAction;
	
	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  };
	
	  Trigger.prototype.isBlurToHide = function isBlurToHide() {
	    var _props6 = this.props,
	        action = _props6.action,
	        hideAction = _props6.hideAction;
	
	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  };
	
	  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
	    if (this.state.popupVisible && this.popupInstance && this.popupInstance.alignInstance) {
	      this.popupInstance.alignInstance.forceAlign();
	    }
	  };
	
	  Trigger.prototype.fireEvents = function fireEvents(type, e) {
	    var childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    var callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  };
	
	  Trigger.prototype.close = function close() {
	    this.setPopupVisible(false);
	  };
	
	  Trigger.prototype.render = function render() {
	    var props = this.props;
	    var children = props.children;
	    var child = _react2["default"].Children.only(children);
	    var newChildProps = {};
	
	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }
	
	    return _react2["default"].cloneElement(child, newChildProps);
	  };
	
	  return Trigger;
	}(_react.Component);
	
	;
	
	Trigger.propTypes = propTypes;
	Trigger.defaultProps = defaultProps;
	exports["default"] = Trigger;
	module.exports = exports['default'];

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(14);
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(15));
	
	var _default = function () {
	  // HTML DOM and SVG DOM may have different support levels,
	  // so we need to check on context instead of a document root element.
	  return _inDOM.default ? function (context, node) {
	    if (context.contains) {
	      return context.contains(node);
	    } else if (context.compareDocumentPosition) {
	      return context === node || !!(context.compareDocumentPosition(node) & 16);
	    } else {
	      return fallback(context, node);
	    }
	  } : fallback;
	}();
	
	exports.default = _default;
	
	function fallback(context, node) {
	  if (node) do {
	    if (node === context) return true;
	  } while (node = node.parentNode);
	  return false;
	}
	
	module.exports = exports["default"];

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Align = __webpack_require__(50);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	var _beeAnimate = __webpack_require__(69);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _PopupInner = __webpack_require__(231);
	
	var _PopupInner2 = _interopRequireDefault(_PopupInner);
	
	var _LazyRenderBox = __webpack_require__(232);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  visible: _propTypes2["default"].bool,
	  style: _propTypes2["default"].object,
	  getClassNameFromAlign: _propTypes2["default"].func,
	  onAlign: _propTypes2["default"].func,
	  getRootDomNode: _propTypes2["default"].func,
	  onMouseEnter: _propTypes2["default"].func,
	  align: _propTypes2["default"].any,
	  destroyPopupOnHide: _propTypes2["default"].bool,
	  className: _propTypes2["default"].string,
	  clsPrefix: _propTypes2["default"].string,
	  onMouseLeave: _propTypes2["default"].func
	};
	
	var Popup = function (_Component) {
	  _inherits(Popup, _Component);
	
	  function Popup() {
	    _classCallCheck(this, Popup);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this.onAlign = _this.onAlign.bind(_this);
	    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);
	    _this.getTarget = _this.getTarget.bind(_this);
	    _this.getMaskTransitionName = _this.getMaskTransitionName.bind(_this);
	    _this.getTransitionName = _this.getTransitionName.bind(_this);
	    _this.getClassName = _this.getClassName.bind(_this);
	    _this.getPopupElement = _this.getPopupElement.bind(_this);
	    _this.getZIndexStyle = _this.getZIndexStyle.bind(_this);
	    _this.getMaskElement = _this.getMaskElement.bind(_this);
	    _this.saveAlign = _this.saveAlign.bind(_this);
	    return _this;
	  }
	
	  Popup.prototype.componentDidMount = function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	  };
	
	  Popup.prototype.onAlign = function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var alignClassName = props.getClassNameFromAlign(props.align);
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    if (alignClassName !== currentAlignClassName) {
	      this.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = this.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  };
	
	  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
	    return _reactDom2["default"].findDOMNode(this.refs.popup);
	  };
	
	  Popup.prototype.getTarget = function getTarget() {
	    return this.props.getRootDomNode();
	  };
	
	  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.clsPrefix + '-' + animation;
	    }
	    return transitionName;
	  };
	
	  Popup.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.clsPrefix + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
	    return this.props.clsPrefix + ' ' + this.props.className + ' ' + currentAlignClassName;
	  };
	
	  Popup.prototype.getPopupElement = function getPopupElement() {
	    var props = this.props;
	    var align = props.align,
	        style = props.style,
	        visible = props.visible,
	        clsPrefix = props.clsPrefix,
	        destroyPopupOnHide = props.destroyPopupOnHide;
	
	    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	    var hiddenClassName = clsPrefix + '-hidden';
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	    var newStyle = _extends({}, style, this.getZIndexStyle());
	    var popupInnerProps = {
	      className: className,
	      clsPrefix: clsPrefix,
	      ref: 'popup',
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: newStyle
	    };
	    if (destroyPopupOnHide) {
	      return _react2["default"].createElement(
	        _beeAnimate2["default"],
	        {
	          component: '',
	          exclusive: true,
	          transitionAppear: true,
	          transitionName: this.getTransitionName()
	        },
	        visible ? _react2["default"].createElement(
	          _Align2["default"],
	          {
	            target: this.getTarget,
	            key: 'popup',
	            ref: this.saveAlign,
	            monitorWindowResize: true,
	            align: align,
	            onAlign: this.onAlign
	          },
	          _react2["default"].createElement(
	            _PopupInner2["default"],
	            _extends({
	              visible: true
	            }, popupInnerProps),
	            props.children
	          )
	        ) : null
	      );
	    }
	    return _react2["default"].createElement(
	      _beeAnimate2["default"],
	      {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName(),
	        showProp: 'xVisible'
	      },
	      _react2["default"].createElement(
	        _Align2["default"],
	        {
	          target: this.getTarget,
	          key: 'popup',
	          ref: this.saveAlign,
	          monitorWindowResize: true,
	          xVisible: visible,
	          childrenProps: { visible: 'xVisible' },
	          disabled: !visible,
	          align: align,
	          onAlign: this.onAlign
	        },
	        _react2["default"].createElement(
	          _PopupInner2["default"],
	          _extends({
	            hiddenClassName: hiddenClassName
	          }, popupInnerProps),
	          props.children
	        )
	      )
	    );
	  };
	
	  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  };
	
	  Popup.prototype.getMaskElement = function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.clsPrefix + '-mask',
	        hiddenClassName: props.clsPrefix + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2["default"].createElement(
	          _beeAnimate2["default"],
	          {
	            key: 'mask',
	            showProp: 'visible',
	            transitionAppear: true,
	            component: '',
	            transitionName: maskTransition
	          },
	          maskElement
	        );
	      }
	    }
	    return maskElement;
	  };
	
	  Popup.prototype.saveAlign = function saveAlign(align) {
	    this.alignInstance = align;
	  };
	
	  Popup.prototype.render = function render() {
	    return _react2["default"].createElement(
	      'div',
	      null,
	      this.getMaskElement(),
	      this.getPopupElement()
	    );
	  };
	
	  return Popup;
	}(_react.Component);
	
	;
	
	Popup.propTypes = propTypes;
	exports["default"] = Popup;
	module.exports = exports['default'];

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _LazyRenderBox = __webpack_require__(232);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  hiddenClassName: _propTypes2["default"].string,
	  className: _propTypes2["default"].string,
	  clsPrefix: _propTypes2["default"].string,
	  onMouseEnter: _propTypes2["default"].func,
	  onMouseLeave: _propTypes2["default"].func,
	  children: _propTypes2["default"].any
	};
	
	var PopupInner = function (_Component) {
	  _inherits(PopupInner, _Component);
	
	  function PopupInner() {
	    _classCallCheck(this, PopupInner);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  PopupInner.prototype.render = function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2["default"].createElement(
	      'div',
	      {
	        className: className,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        style: props.style
	      },
	      _react2["default"].createElement(
	        _LazyRenderBox2["default"],
	        { className: props.clsPrefix + '-content', visible: props.visible },
	        props.children
	      )
	    );
	  };
	
	  return PopupInner;
	}(_react.Component);
	
	;
	
	PopupInner.propTypes = propTypes;
	exports["default"] = PopupInner;
	module.exports = exports['default'];

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  children: _propTypes2["default"].any,
	  className: _propTypes2["default"].string,
	  visible: _propTypes2["default"].bool,
	  hiddenClassName: _propTypes2["default"].string
	};
	
	var LazyRenderBox = function (_Component) {
	  _inherits(LazyRenderBox, _Component);
	
	  function LazyRenderBox() {
	    _classCallCheck(this, LazyRenderBox);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  };
	
	  LazyRenderBox.prototype.render = function render() {
	    var _props = this.props,
	        hiddenClassName = _props.hiddenClassName,
	        visible = _props.visible,
	        props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);
	
	    if (hiddenClassName || _react2["default"].Children.count(props.children) > 1) {
	      if (!visible && hiddenClassName) {
	        props.className += ' ' + hiddenClassName;
	      }
	      return _react2["default"].createElement('div', props);
	    }
	
	    return _react2["default"].Children.only(props.children);
	  };
	
	  return LazyRenderBox;
	}(_react.Component);
	
	;
	LazyRenderBox.propTypes = propTypes;
	
	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ }),
/* 233 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}
	
	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return _extends({}, baseAlign, align);
	}
	
	function getPopupClassNameFromAlign(builtinPlacements, clsPrefix, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return clsPrefix + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _rcMenu = __webpack_require__(90);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	var _domScrollIntoView = __webpack_require__(219);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _raf = __webpack_require__(235);
	
	var _raf2 = _interopRequireDefault(_raf);
	
	var _util = __webpack_require__(225);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-select.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/select
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var DropdownMenu = function (_React$Component) {
	  _inherits(DropdownMenu, _React$Component);
	
	  function DropdownMenu(props) {
	    _classCallCheck(this, DropdownMenu);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.scrollActiveItemToView = function () {
	      // scroll into view
	      var itemComponent = (0, _reactDom.findDOMNode)(_this.firstActiveItem);
	      var _this$props = _this.props,
	          value = _this$props.value,
	          visible = _this$props.visible,
	          firstActiveValue = _this$props.firstActiveValue;
	
	
	      if (!itemComponent || !visible) {
	        return;
	      }
	      var scrollIntoViewOpts = {
	        onlyScrollIfNeeded: true
	      };
	      if ((!value || value.length === 0) && firstActiveValue) {
	        scrollIntoViewOpts.alignWithTop = true;
	      }
	
	      // Delay to scroll since current frame item position is not ready when pre view is by filter
	      // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462
	      _this.rafInstance = (0, _raf2["default"])(function () {
	        (0, _domScrollIntoView2["default"])(itemComponent, (0, _reactDom.findDOMNode)(_this.menuRef), scrollIntoViewOpts);
	      });
	    };
	
	    _this.lastInputValue = props.inputValue;
	    _this.saveMenuRef = (0, _util.saveRef)(_this, 'menuRef');
	    return _this;
	  }
	
	  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
	    this.scrollActiveItemToView();
	    this.lastVisible = this.props.visible;
	  };
	
	  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	    if (!nextProps.visible) {
	      this.lastVisible = false;
	    }
	    // freeze when hide
	    return nextProps.visible || nextProps.inputValue !== this.props.inputValue;
	  };
	
	  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var props = this.props;
	    if (!prevProps.visible && props.visible) {
	      this.scrollActiveItemToView();
	    }
	    this.lastVisible = props.visible;
	    this.lastInputValue = props.inputValue;
	  };
	
	  DropdownMenu.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.rafInstance && this.rafInstance.cancel) {
	      this.rafInstance.cancel();
	    }
	  };
	
	  DropdownMenu.prototype.renderMenu = function renderMenu() {
	    var _this2 = this;
	
	    var props = this.props;
	    var menuItems = props.menuItems,
	        menuItemSelectedIcon = props.menuItemSelectedIcon,
	        defaultActiveFirstOption = props.defaultActiveFirstOption,
	        value = props.value,
	        prefixCls = props.prefixCls,
	        multiple = props.multiple,
	        onMenuSelect = props.onMenuSelect,
	        inputValue = props.inputValue,
	        firstActiveValue = props.firstActiveValue,
	        backfillValue = props.backfillValue,
	        clsPrefix = props.clsPrefix;
	
	    if (menuItems && menuItems.length) {
	      var menuProps = {};
	      if (multiple) {
	        menuProps.onDeselect = props.onMenuDeselect;
	        menuProps.onSelect = onMenuSelect;
	      } else {
	        menuProps.onClick = onMenuSelect;
	      }
	
	      var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
	      var activeKeyProps = {};
	
	      var clonedMenuItems = menuItems;
	      if (selectedKeys.length || firstActiveValue) {
	        if (props.visible && !this.lastVisible) {
	          activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
	        }
	        var foundFirst = false;
	        // set firstActiveItem via cloning menus
	        // for scroll into view
	        var clone = function clone(item) {
	          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
	            foundFirst = true;
	            return (0, _react.cloneElement)(item, {
	              ref: function ref(_ref) {
	                _this2.firstActiveItem = _ref;
	              }
	            });
	          }
	          return item;
	        };
	
	        clonedMenuItems = menuItems.map(function (item) {
	          if (item.type.isMenuItemGroup) {
	            var children = (0, _tinperBeeCore.toArray)(item.props.children).map(clone);
	            return (0, _react.cloneElement)(item, {}, children);
	          }
	          return clone(item);
	        });
	      } else {
	        // Clear firstActiveItem when dropdown menu items was empty
	        // Avoid `Unable to find node on an unmounted component`
	        // https://github.com/ant-design/ant-design/issues/10774
	        this.firstActiveItem = null;
	      }
	
	      // clear activeKey when inputValue change
	      var lastValue = value && value[value.length - 1];
	      if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
	        activeKeyProps.activeKey = '';
	      }
	      return _react2["default"].createElement(
	        _rcMenu2["default"],
	        _extends({
	          ref: this.saveMenuRef,
	          style: this.props.dropdownMenuStyle,
	          defaultActiveFirst: defaultActiveFirstOption,
	          role: 'listbox',
	          itemIcon: multiple ? menuItemSelectedIcon : null
	        }, activeKeyProps, {
	          multiple: multiple
	        }, menuProps, {
	          selectedKeys: selectedKeys,
	          prefixCls: clsPrefix + '-menu'
	        }),
	        clonedMenuItems
	      );
	    }
	    return null;
	  };
	
	  DropdownMenu.prototype.render = function render() {
	    var renderMenu = this.renderMenu();
	    return renderMenu ? _react2["default"].createElement(
	      'div',
	      {
	        style: {
	          overflow: 'auto',
	          transform: 'translateZ(0)'
	        },
	        onFocus: this.props.onPopupFocus,
	        onMouseDown: _util.preventDefaultEvent,
	        onScroll: this.props.onPopupScroll
	      },
	      renderMenu
	    ) : null;
	  };
	
	  return DropdownMenu;
	}(_react2["default"].Component);
	
	DropdownMenu.displayName = 'DropdownMenu';
	DropdownMenu.propTypes = {
	  defaultActiveFirstOption: _propTypes2["default"].bool,
	  value: _propTypes2["default"].any,
	  dropdownMenuStyle: _propTypes2["default"].object,
	  multiple: _propTypes2["default"].bool,
	  onPopupFocus: _propTypes2["default"].func,
	  onPopupScroll: _propTypes2["default"].func,
	  onMenuDeSelect: _propTypes2["default"].func,
	  onMenuSelect: _propTypes2["default"].func,
	  prefixCls: _propTypes2["default"].string,
	  menuItems: _propTypes2["default"].any,
	  inputValue: _propTypes2["default"].string,
	  visible: _propTypes2["default"].bool,
	  firstActiveValue: _propTypes2["default"].string,
	  menuItemSelectedIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node])
	};
	exports["default"] = DropdownMenu;
	module.exports = exports['default'];

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(236)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]
	
	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}
	
	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60
	
	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }
	
	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}
	
	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function(object) {
	  if (!object) {
	    object = root;
	  }
	  object.requestAnimationFrame = raf
	  object.cancelAnimationFrame = caf
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
	(function() {
	  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
	
	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - nodeLoadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    moduleLoadTime = getNanoSeconds();
	    upTime = process.uptime() * 1e9;
	    nodeLoadTime = moduleLoadTime - upTime;
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	
	}).call(this);
	
	//# sourceMappingURL=performance-now.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SelectPropTypes = undefined;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function valueType(props, propName, componentName) {
	  var basicType = _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]);
	
	  var labelInValueShape = _propTypes2["default"].shape({
	    key: basicType.isRequired,
	    label: _propTypes2["default"].node
	  });
	  if (props.labelInValue) {
	    var validate = _propTypes2["default"].oneOfType([_propTypes2["default"].arrayOf(labelInValueShape), labelInValueShape]);
	    var error = validate.apply(undefined, arguments);
	    if (error) {
	      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`, ' + ('when you set `labelInValue` to `true`, `' + propName + '` should in ') + 'shape of `{ key: string | number, label?: ReactNode }`.');
	    }
	  } else if ((props.mode === 'multiple' || props.mode === 'tags' || props.multiple || props.tags) && props[propName] === '') {
	    return new Error('Invalid prop `' + propName + '` of type `string` supplied to `' + componentName + '`, ' + 'expected `array` when `multiple` or `tags` is `true`.');
	  } else {
	    var _validate = _propTypes2["default"].oneOfType([_propTypes2["default"].arrayOf(basicType), basicType]);
	    return _validate.apply(undefined, arguments);
	  }
	} /**
	  * This source code is quoted from rc-select.
	  * homepage: https://github.com/react-component/select
	  */
	var SelectPropTypes = exports.SelectPropTypes = {
	  id: _propTypes2["default"].string,
	  defaultActiveFirstOption: _propTypes2["default"].bool,
	  multiple: _propTypes2["default"].bool,
	  filterOption: _propTypes2["default"].any,
	  children: _propTypes2["default"].any,
	  showSearch: _propTypes2["default"].bool,
	  disabled: _propTypes2["default"].bool,
	  allowClear: _propTypes2["default"].bool,
	  showArrow: _propTypes2["default"].bool,
	  tags: _propTypes2["default"].bool,
	  prefixCls: _propTypes2["default"].string,
	  className: _propTypes2["default"].string,
	  transitionName: _propTypes2["default"].string,
	  optionLabelProp: _propTypes2["default"].string,
	  optionFilterProp: _propTypes2["default"].string,
	  animation: _propTypes2["default"].string,
	  choiceTransitionName: _propTypes2["default"].string,
	  open: _propTypes2["default"].bool,
	  defaultOpen: _propTypes2["default"].bool,
	  onChange: _propTypes2["default"].func,
	  onBlur: _propTypes2["default"].func,
	  onFocus: _propTypes2["default"].func,
	  onSelect: _propTypes2["default"].func,
	  onSearch: _propTypes2["default"].func,
	  onPopupScroll: _propTypes2["default"].func,
	  onMouseEnter: _propTypes2["default"].func,
	  onMouseLeave: _propTypes2["default"].func,
	  onInputKeyDown: _propTypes2["default"].func,
	  placeholder: _propTypes2["default"].any,
	  onDeselect: _propTypes2["default"].func,
	  labelInValue: _propTypes2["default"].bool,
	  value: valueType,
	  defaultValue: valueType,
	  dropdownStyle: _propTypes2["default"].object,
	  maxTagTextLength: _propTypes2["default"].number,
	  maxTagCount: _propTypes2["default"].number,
	  maxTagPlaceholder: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func]),
	  tokenSeparators: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  getInputElement: _propTypes2["default"].func,
	  showAction: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  clearIcon: _propTypes2["default"].node,
	  inputIcon: _propTypes2["default"].node,
	  removeIcon: _propTypes2["default"].node,
	  menuItemSelectedIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node])
	};

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var OptGroup = function (_React$Component) {
	  _inherits(OptGroup, _React$Component);
	
	  function OptGroup() {
	    _classCallCheck(this, OptGroup);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  return OptGroup;
	}(_react2["default"].Component);
	
	OptGroup.isSelectOptGroup = true;
	exports["default"] = OptGroup;
	module.exports = exports['default'];

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var result,
	      index = -1,
	      length = path.length;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = findIndex;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(240)(module)))

/***/ }),
/* 240 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.en = exports.tw = exports.zh = undefined;
	
	var _citys = __webpack_require__(242);
	
	var _citys2 = _interopRequireDefault(_citys);
	
	var _citysTw = __webpack_require__(243);
	
	var _citysTw2 = _interopRequireDefault(_citysTw);
	
	var _citysEn = __webpack_require__(244);
	
	var _citysEn2 = _interopRequireDefault(_citysEn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var zh = exports.zh = {
	    defaultValue: { province: '北京', city: '北京', area: '东城区' },
	    provinceData: _citys2['default']
	};
	
	var tw = exports.tw = {
	    defaultValue: { province: '北京', city: '北京', area: '東城區' },
	    provinceData: _citysTw2['default']
	};
	
	var en = exports.en = {
	    defaultValue: { province: 'Beijing', city: 'Beijing', area: 'Dongcheng District' },
	    provinceData: _citysEn2['default']
	};

/***/ }),
/* 242 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = [{
	    "name": "北京",
	    "city": [{
	        "name": "北京",
	        "area": ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "平谷区", "怀柔区", "密云县", "延庆县"]
	    }]
	}, {
	    "name": "天津",
	    "city": [{
	        "name": "天津",
	        "area": ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟县"]
	    }]
	}, {
	    "name": "河北",
	    "city": [{
	        "name": "石家庄",
	        "area": ["长安区", "桥东区", "桥西区", "新华区", "郊区", "井陉矿区", "井陉县", "正定县", "栾城县", "行唐县", "灵寿县", "高邑县", "深泽县", "赞皇县", "无极县", "平山县", "元氏县", "赵县", "辛集市", "藁", "晋州市", "新乐市", "鹿泉市"]
	    }, {
	        "name": "唐山",
	        "area": ["路南区", "路北区", "古冶区", "开平区", "新区", "丰润县", "滦县", "滦南县", "乐亭县", "迁西县", "玉田县", "唐海县", "遵化市", "丰南市", "迁安市"]
	    }, {
	        "name": "秦皇岛",
	        "area": ["海港区", "山海关区", "北戴河区", "青龙满族自治县", "昌黎县", "抚宁县", "卢龙县"]
	    }, {
	        "name": "邯郸",
	        "area": ["邯山区", "丛台区", "复兴区", "峰峰矿区", "邯郸县", "临漳县", "成安县", "大名县", "涉县", "磁县", "肥乡县", "永年县", "邱县", "鸡泽县", "广平县", "馆陶县", "魏县", "曲周县", "武安市"]
	    }, {
	        "name": "邢台",
	        "area": ["桥东区", "桥西区", "邢台县", "临城县", "内丘县", "柏乡县", "隆尧县", "任县", "南和县", "宁晋县", "巨鹿县", "新河县", "广宗县", "平乡县", "威县", "清河县", "临西县", "南宫市", "沙河市"]
	    }, {
	        "name": "保定",
	        "area": ["新市区", "北市区", "南市区", "满城县", "清苑县", "涞水县", "阜平县", "徐水县", "定兴县", "唐县", "高阳县", "容城县", "涞源县", "望都县", "安新县", "易县", "曲阳县", "蠡县", "顺平县", "博野", "雄县", "涿州市", "定州市", "安国市", "高碑店市"]
	    }, {
	        "name": "张家口",
	        "area": ["桥东区", "桥西区", "宣化区", "下花园区", "宣化县", "张北县", "康保县", "沽源县", "尚义县", "蔚县", "阳原县", "怀安县", "万全县", "怀来县", "涿鹿县", "赤城县", "崇礼县"]
	    }, {
	        "name": "承德",
	        "area": ["双桥区", "双滦区", "鹰手营子矿区", "承德县", "兴隆县", "平泉县", "滦平县", "隆化县", "丰宁满族自治县", "宽城满族自治县", "围场满族蒙古族自治县"]
	    }, {
	        "name": "沧州",
	        "area": ["新华区", "运河区", "沧县", "青县", "东光县", "海兴县", "盐山县", "肃宁县", "南皮县", "吴桥县", "献县", "孟村回族自治县", "泊头市", "任丘市", "黄骅市", "河间市"]
	    }, {
	        "name": "廊坊",
	        "area": ["安次区", "固安县", "永清县", "香河县", "大城县", "文安县", "大厂回族自治县", "霸州市", "三河市"]
	    }, {
	        "name": "衡水",
	        "area": ["桃城区", "枣强县", "武邑县", "武强县", "饶阳县", "安平县", "故城县", "景县", "阜城县", "冀州市", "深州市"]
	    }]
	}, {
	    "name": "山西",
	    "city": [{
	        "name": "太原",
	        "area": ["小店区", "迎泽区", "杏花岭区", "尖草坪区", "万柏林区", "晋源区", "清徐县", "阳曲县", "娄烦县", "古交市"]
	    }, {
	        "name": "大同",
	        "area": ["城区", "矿区", "南郊区", "新荣区", "阳高县", "天镇县", "广灵县", "灵丘县", "浑源县", "左云县", "大同县"]
	    }, {
	        "name": "阳泉",
	        "area": ["城区", "矿区", "郊区", "平定县", "盂县"]
	    }, {
	        "name": "长治",
	        "area": ["城区", "郊区", "长治县", "襄垣县", "屯留县", "平顺县", "黎城县", "壶关县", "长子县", "武乡县", "沁县", "沁源县", "潞城市"]
	    }, {
	        "name": "晋城",
	        "area": ["城区", "沁水县", "阳城县", "陵川县", "泽州县", "高平市"]
	    }, {
	        "name": "朔州",
	        "area": ["朔城区", "平鲁区", "山阴县", "应县", "右玉县", "怀仁县"]
	    }, {
	        "name": "忻州",
	        "area": ["忻府区", "原平市", "定襄县", "五台县", "代县", "繁峙县", "宁武县", "静乐县", "神池县", "五寨县", "岢岚县", "河曲县", "保德县", "偏关县"]
	    }, {
	        "name": "吕梁",
	        "area": ["离石区", "孝义市", "汾阳市", "文水县", "交城县", "兴县", "临县", "柳林县", "石楼县", "岚县", "方山县", "中阳县", "交口县"]
	    }, {
	        "name": "晋中",
	        "area": ["榆次市", "介休市", "榆社县", "左权县", "和顺县", "昔阳县", "寿阳县", "太谷县", "祁县", "平遥县", "灵石县"]
	    }, {
	        "name": "临汾",
	        "area": ["临汾市", "侯马市", "霍州市", "曲沃县", "翼城县", "襄汾县", "洪洞县", "古县", "安泽县", "浮山县", "吉县", "乡宁县", "蒲县", "大宁县", "永和县", "隰县", "汾西县"]
	    }, {
	        "name": "运城",
	        "area": ["运城市", "永济市", "河津市", "芮城县", "临猗县", "万荣县", "新绛县", "稷山县", "闻喜县", "夏县", "绛县", "平陆县", "垣曲县"]
	    }]
	}, {
	    "name": "内蒙古",
	    "city": [{
	        "name": "呼和浩特",
	        "area": ["新城区", "回民区", "玉泉区", "郊区", "土默特左旗", "托克托县", "和林格尔县", "清水河县", "武川县"]
	    }, {
	        "name": "包头",
	        "area": ["东河区", "昆都伦区", "青山区", "石拐矿区", "白云矿区", "郊区", "土默特右旗", "固阳县", "达尔罕茂明安联合旗"]
	    }, {
	        "name": "乌海",
	        "area": ["海勃湾区", "海南区", "乌达区"]
	    }, {
	        "name": "赤峰",
	        "area": ["红山区", "元宝山区", "松山区", "阿鲁科尔沁旗", "巴林左旗", "巴林右旗", "林西县", "克什克腾旗", "翁牛特旗", "喀喇沁旗", "宁城县", "敖汉旗"]
	    }, {
	        "name": "呼伦贝尔",
	        "area": ["海拉尔市", "满洲里市", "扎兰屯市", "牙克石市", "根河市", "额尔古纳市", "阿荣旗", "莫力达瓦达斡尔族自治旗", "鄂伦春自治旗", "鄂温克族自治旗", "新巴尔虎右旗", "新巴尔虎左旗", "陈巴尔虎旗"]
	    }, {
	        "name": "兴安盟",
	        "area": ["乌兰浩特市", "阿尔山市", "科尔沁右翼前旗", "科尔沁右翼中旗", "扎赉特旗", "突泉县"]
	    }, {
	        "name": "通辽",
	        "area": ["科尔沁区", "霍林郭勒市", "科尔沁左翼中旗", "科尔沁左翼后旗", "开鲁县", "库伦旗", "奈曼旗", "扎鲁特旗"]
	    }, {
	        "name": "锡林郭勒盟",
	        "area": ["二连浩特市", "锡林浩特市", "阿巴嘎旗", "苏尼特左旗", "苏尼特右旗", "东乌珠穆沁旗", "西乌珠穆沁旗", "太仆寺旗", "镶黄旗", "正镶白旗", "正蓝旗", "多伦县"]
	    }, {
	        "name": "乌兰察布盟",
	        "area": ["集宁市", "丰镇市", "卓资县", "化德县", "商都县", "兴和县", "凉城县", "察哈尔右翼前旗", "察哈尔右翼中旗", "察哈尔右翼后旗", "四子王旗"]
	    }, {
	        "name": "伊克昭盟",
	        "area": ["东胜市", "达拉特旗", "准格尔旗", "鄂托克前旗", "鄂托克旗", "杭锦旗", "乌审旗", "伊金霍洛旗"]
	    }, {
	        "name": "巴彦淖尔盟",
	        "area": ["临河市", "五原县", "磴口县", "乌拉特前旗", "乌拉特中旗", "乌拉特后旗", "杭锦后旗"]
	    }, {
	        "name": "阿拉善盟",
	        "area": ["阿拉善左旗", "阿拉善右旗", "额济纳旗"]
	    }]
	}, {
	    "name": "辽宁",
	    "city": [{
	        "name": "沈阳",
	        "area": ["沈河区", "皇姑区", "和平区", "大东区", "铁西区", "苏家屯区", "东陵区", "于洪区", "新民市", "法库县", "辽中县", "康平县", "新城子区", "其他"]
	    }, {
	        "name": "大连",
	        "area": ["西岗区", "中山区", "沙河口区", "甘井子区", "旅顺口区", "金州区", "瓦房店市", "普兰店市", "庄河市", "长海县", "其他"]
	    }, {
	        "name": "鞍山",
	        "area": ["铁东区", "铁西区", "立山区", "千山区", "海城市", "台安县", "岫岩满族自治县", "其他"]
	    }, {
	        "name": "抚顺",
	        "area": ["顺城区", "新抚区", "东洲区", "望花区", "抚顺县", "清原满族自治县", "新宾满族自治县", "其他"]
	    }, {
	        "name": "本溪",
	        "area": ["平山区", "明山区", "溪湖区", "南芬区", "本溪满族自治县", "桓仁满族自治县", "其他"]
	    }, {
	        "name": "丹东",
	        "area": ["振兴区", "元宝区", "振安区", "东港市", "凤城市", "宽甸满族自治县", "其他"]
	    }, {
	        "name": "锦州",
	        "area": ["太和区", "古塔区", "凌河区", "凌海市", "黑山县", "义县", "北宁市", "其他"]
	    }, {
	        "name": "营口",
	        "area": ["站前区", "西市区", "鲅鱼圈区", "老边区", "大石桥市", "盖州市", "其他"]
	    }, {
	        "name": "阜新",
	        "area": ["海州区", "新邱区", "太平区", "清河门区", "细河区", "彰武县", "阜新蒙古族自治县", "其他"]
	    }, {
	        "name": "辽阳",
	        "area": ["白塔区", "文圣区", "宏伟区", "太子河区", "弓长岭区", "灯塔市", "辽阳县", "其他"]
	    }, {
	        "name": "盘锦",
	        "area": ["双台子区", "兴隆台区", "盘山县", "大洼县", "其他"]
	    }, {
	        "name": "铁岭",
	        "area": ["银州区", "清河区", "调兵山市", "开原市", "铁岭县", "昌图县", "西丰县", "其他"]
	    }, {
	        "name": "朝阳",
	        "area": ["双塔区", "龙城区", "凌源市", "北票市", "朝阳县", "建平县", "喀喇沁左翼蒙古族自治县", "其他"]
	    }, {
	        "name": "葫芦岛",
	        "area": ["龙港区", "南票区", "连山区", "兴城市", "绥中县", "建昌县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "吉林",
	    "city": [{
	        "name": "长春",
	        "area": ["朝阳区", "宽城区", "二道区", "南关区", "绿园区", "双阳区", "九台市", "榆树市", "德惠市", "农安县", "其他"]
	    }, {
	        "name": "吉林",
	        "area": ["船营区", "昌邑区", "龙潭区", "丰满区", "舒兰市", "桦甸市", "蛟河市", "磐石市", "永吉县", "其他"]
	    }, {
	        "name": "四平",
	        "area": ["铁西区", "铁东区", "公主岭市", "双辽市", "梨树县", "伊通满族自治县", "其他"]
	    }, {
	        "name": "辽源",
	        "area": ["龙山区", "西安区", "东辽县", "东丰县", "其他"]
	    }, {
	        "name": "通化",
	        "area": ["东昌区", "二道江区", "梅河口市", "集安市", "通化县", "辉南县", "柳河县", "其他"]
	    }, {
	        "name": "白山",
	        "area": ["八道江区", "江源区", "临江市", "靖宇县", "抚松县", "长白朝鲜族自治县", "其他"]
	    }, {
	        "name": "松原",
	        "area": ["宁江区", "乾安县", "长岭县", "扶余县", "前郭尔罗斯蒙古族自治县", "其他"]
	    }, {
	        "name": "白城",
	        "area": ["洮北区", "大安市", "洮南市", "镇赉县", "通榆县", "其他"]
	    }, {
	        "name": "延边朝鲜族自治州",
	        "area": ["延吉市", "图们市", "敦化市", "龙井市", "珲春市", "和龙市", "安图县", "汪清县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "黑龙江",
	    "city": [{
	        "name": "哈尔滨",
	        "area": ["松北区", "道里区", "南岗区", "平房区", "香坊区", "道外区", "呼兰区", "阿城区", "双城市", "尚志市", "五常市", "宾县", "方正县", "通河县", "巴彦县", "延寿县", "木兰县", "依兰县", "其他"]
	    }, {
	        "name": "齐齐哈尔",
	        "area": ["龙沙区", "昂昂溪区", "铁锋区", "建华区", "富拉尔基区", "碾子山区", "梅里斯达斡尔族区", "讷河市", "富裕县", "拜泉县", "甘南县", "依安县", "克山县", "泰来县", "克东县", "龙江县", "其他"]
	    }, {
	        "name": "鹤岗",
	        "area": ["兴山区", "工农区", "南山区", "兴安区", "向阳区", "东山区", "萝北县", "绥滨县", "其他"]
	    }, {
	        "name": "双鸭山",
	        "area": ["尖山区", "岭东区", "四方台区", "宝山区", "集贤县", "宝清县", "友谊县", "饶河县", "其他"]
	    }, {
	        "name": "鸡西",
	        "area": ["鸡冠区", "恒山区", "城子河区", "滴道区", "梨树区", "麻山区", "密山市", "虎林市", "鸡东县", "其他"]
	    }, {
	        "name": "大庆",
	        "area": ["萨尔图区", "红岗区", "龙凤区", "让胡路区", "大同区", "林甸县", "肇州县", "肇源县", "杜尔伯特蒙古族自治县", "其他"]
	    }, {
	        "name": "伊春",
	        "area": ["伊春区", "带岭区", "南岔区", "金山屯区", "西林区", "美溪区", "乌马河区", "翠峦区", "友好区", "上甘岭区", "五营区", "红星区", "新青区", "汤旺河区", "乌伊岭区", "铁力市", "嘉荫县", "其他"]
	    }, {
	        "name": "牡丹江",
	        "area": ["爱民区", "东安区", "阳明区", "西安区", "绥芬河市", "宁安市", "海林市", "穆棱市", "林口县", "东宁县", "其他"]
	    }, {
	        "name": "佳木斯",
	        "area": ["向阳区", "前进区", "东风区", "郊区", "同江市", "富锦市", "桦川县", "抚远县", "桦南县", "汤原县", "其他"]
	    }, {
	        "name": "七台河",
	        "area": ["桃山区", "新兴区", "茄子河区", "勃利县", "其他"]
	    }, {
	        "name": "黑河",
	        "area": ["爱辉区", "北安市", "五大连池市", "逊克县", "嫩江县", "孙吴县", "其他"]
	    }, {
	        "name": "绥化",
	        "area": ["北林区", "安达市", "肇东市", "海伦市", "绥棱县", "兰西县", "明水县", "青冈县", "庆安县", "望奎县", "其他"]
	    }, {
	        "name": "大兴安岭地区",
	        "area": ["呼玛县", "塔河县", "漠河县", "大兴安岭辖区", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "上海",
	    "city": [{
	        "name": "上海",
	        "area": ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "宝山区", "闵行区", "嘉定区", "松江区", "金山区", "青浦区", "南汇区", "奉贤区", "浦东新区", "崇明县", "其他"]
	    }]
	}, {
	    "name": "江苏",
	    "city": [{
	        "name": "南京",
	        "area": ["玄武区", "白下区", "秦淮区", "建邺区", "鼓楼区", "下关区", "栖霞区", "雨花台区", "浦口区", "江宁区", "六合区", "溧水县", "高淳县", "其他"]
	    }, {
	        "name": "苏州",
	        "area": ["金阊区", "平江区", "沧浪区", "虎丘区", "吴中区", "相城区", "常熟市", "张家港市", "昆山市", "吴江市", "太仓市", "其他"]
	    }, {
	        "name": "无锡",
	        "area": ["崇安区", "南长区", "北塘区", "滨湖区", "锡山区", "惠山区", "江阴市", "宜兴市", "其他"]
	    }, {
	        "name": "常州",
	        "area": ["钟楼区", "天宁区", "戚墅堰区", "新北区", "武进区", "金坛市", "溧阳市", "其他"]
	    }, {
	        "name": "镇江",
	        "area": ["京口区", "润州区", "丹徒区", "丹阳市", "扬中市", "句容市", "其他"]
	    }, {
	        "name": "南通",
	        "area": ["崇川区", "港闸区", "通州市", "如皋市", "海门市", "启东市", "海安县", "如东县", "其他"]
	    }, {
	        "name": "泰州",
	        "area": ["海陵区", "高港区", "姜堰市", "泰兴市", "靖江市", "兴化市", "其他"]
	    }, {
	        "name": "扬州",
	        "area": ["广陵区", "维扬区", "邗江区", "江都市", "仪征市", "高邮市", "宝应县", "其他"]
	    }, {
	        "name": "盐城",
	        "area": ["亭湖区", "盐都区", "大丰市", "东台市", "建湖县", "射阳县", "阜宁县", "滨海县", "响水县", "其他"]
	    }, {
	        "name": "连云港",
	        "area": ["新浦区", "海州区", "连云区", "东海县", "灌云县", "赣榆县", "灌南县", "其他"]
	    }, {
	        "name": "徐州",
	        "area": ["云龙区", "鼓楼区", "九里区", "泉山区", "贾汪区", "邳州市", "新沂市", "铜山县", "睢宁县", "沛县", "丰县", "其他"]
	    }, {
	        "name": "淮安",
	        "area": ["清河区", "清浦区", "楚州区", "淮阴区", "涟水县", "洪泽县", "金湖县", "盱眙县", "其他"]
	    }, {
	        "name": "宿迁",
	        "area": ["宿城区", "宿豫区", "沭阳县", "泗阳县", "泗洪县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "浙江",
	    "city": [{
	        "name": "杭州",
	        "area": ["拱墅区", "西湖区", "上城区", "下城区", "江干区", "滨江区", "余杭区", "萧山区", "建德市", "富阳市", "临安市", "桐庐县", "淳安县", "其他"]
	    }, {
	        "name": "宁波",
	        "area": ["海曙区", "江东区", "江北区", "镇海区", "北仑区", "鄞州区", "余姚市", "慈溪市", "奉化市", "宁海县", "象山县", "其他"]
	    }, {
	        "name": "温州",
	        "area": ["鹿城区", "龙湾区", "瓯海区", "瑞安市", "乐清市", "永嘉县", "洞头县", "平阳县", "苍南县", "文成县", "泰顺县", "其他"]
	    }, {
	        "name": "嘉兴",
	        "area": ["秀城区", "秀洲区", "海宁市", "平湖市", "桐乡市", "嘉善县", "海盐县", "其他"]
	    }, {
	        "name": "湖州",
	        "area": ["吴兴区", "南浔区", "长兴县", "德清县", "安吉县", "其他"]
	    }, {
	        "name": "绍兴",
	        "area": ["越城区", "诸暨市", "上虞市", "嵊州市", "绍兴县", "新昌县", "其他"]
	    }, {
	        "name": "金华",
	        "area": ["婺城区", "金东区", "兰溪市", "义乌市", "东阳市", "永康市", "武义县", "浦江县", "磐安县", "其他"]
	    }, {
	        "name": "衢州",
	        "area": ["柯城区", "衢江区", "江山市", "龙游县", "常山县", "开化县", "其他"]
	    }, {
	        "name": "舟山",
	        "area": ["定海区", "普陀区", "岱山县", "嵊泗县", "其他"]
	    }, {
	        "name": "台州",
	        "area": ["椒江区", "黄岩区", "路桥区", "临海市", "温岭市", "玉环县", "天台县", "仙居县", "三门县", "其他"]
	    }, {
	        "name": "丽水",
	        "area": ["莲都区", "龙泉市", "缙云县", "青田县", "云和县", "遂昌县", "松阳县", "庆元县", "景宁畲族自治县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "安徽",
	    "city": [{
	        "name": "合肥",
	        "area": ["庐阳区", "瑶海区", "蜀山区", "包河区", "长丰县", "肥东县", "肥西县", "其他"]
	    }, {
	        "name": "芜湖",
	        "area": ["镜湖区", "弋江区", "鸠江区", "三山区", "芜湖县", "南陵县", "繁昌县", "其他"]
	    }, {
	        "name": "蚌埠",
	        "area": ["蚌山区", "龙子湖区", "禹会区", "淮上区", "怀远县", "固镇县", "五河县", "其他"]
	    }, {
	        "name": "淮南",
	        "area": ["田家庵区", "大通区", "谢家集区", "八公山区", "潘集区", "凤台县", "其他"]
	    }, {
	        "name": "马鞍山",
	        "area": ["雨山区", "花山区", "金家庄区", "当涂县", "其他"]
	    }, {
	        "name": "淮北",
	        "area": ["相山区", "杜集区", "烈山区", "濉溪县", "其他"]
	    }, {
	        "name": "铜陵",
	        "area": ["铜官山区", "狮子山区", "郊区", "铜陵县", "其他"]
	    }, {
	        "name": "安庆",
	        "area": ["迎江区", "大观区", "宜秀区", "桐城市", "宿松县", "枞阳县", "太湖县", "怀宁县", "岳西县", "望江县", "潜山县", "其他"]
	    }, {
	        "name": "黄山",
	        "area": ["屯溪区", "黄山区", "徽州区", "休宁县", "歙县", "祁门县", "黟县", "其他"]
	    }, {
	        "name": "滁州",
	        "area": ["琅琊区", "南谯区", "天长市", "明光市", "全椒县", "来安县", "定远县", "凤阳县", "其他"]
	    }, {
	        "name": "阜阳",
	        "area": ["颍州区", "颍东区", "颍泉区", "界首市", "临泉县", "颍上县", "阜南县", "太和县", "其他"]
	    }, {
	        "name": "宿州",
	        "area": ["埇桥区", "萧县", "泗县", "砀山县", "灵璧县", "其他"]
	    }, {
	        "name": "巢湖",
	        "area": ["居巢区", "含山县", "无为县", "庐江县", "和县", "其他"]
	    }, {
	        "name": "六安",
	        "area": ["金安区", "裕安区", "寿县", "霍山县", "霍邱县", "舒城县", "金寨县", "其他"]
	    }, {
	        "name": "亳州",
	        "area": ["谯城区", "利辛县", "涡阳县", "蒙城县", "其他"]
	    }, {
	        "name": "池州",
	        "area": ["贵池区", "东至县", "石台县", "青阳县", "其他"]
	    }, {
	        "name": "宣城",
	        "area": ["宣州区", "宁国市", "广德县", "郎溪县", "泾县", "旌德县", "绩溪县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "福建",
	    "city": [{
	        "name": "福州",
	        "area": ["鼓楼区", "台江区", "仓山区", "马尾区", "晋安区", "福清市", "长乐市", "闽侯县", "闽清县", "永泰县", "连江县", "罗源县", "平潭县", "其他"]
	    }, {
	        "name": "厦门",
	        "area": ["思明区", "海沧区", "湖里区", "集美区", "同安区", "翔安区", "其他"]
	    }, {
	        "name": "莆田",
	        "area": ["城厢区", "涵江区", "荔城区", "秀屿区", "仙游县", "其他"]
	    }, {
	        "name": "三明",
	        "area": ["梅列区", "三元区", "永安市", "明溪县", "将乐县", "大田县", "宁化县", "建宁县", "沙县", "尤溪县", "清流县", "泰宁县", "其他"]
	    }, {
	        "name": "泉州",
	        "area": ["鲤城区", "丰泽区", "洛江区", "泉港区", "石狮市", "晋江市", "南安市", "惠安县", "永春县", "安溪县", "德化县", "金门县", "其他"]
	    }, {
	        "name": "漳州",
	        "area": ["芗城区", "龙文区", "龙海市", "平和县", "南靖县", "诏安县", "漳浦县", "华安县", "东山县", "长泰县", "云霄县", "其他"]
	    }, {
	        "name": "南平",
	        "area": ["延平区", "建瓯市", "邵武市", "武夷山市", "建阳市", "松溪县", "光泽县", "顺昌县", "浦城县", "政和县", "其他"]
	    }, {
	        "name": "龙岩",
	        "area": ["新罗区", "漳平市", "长汀县", "武平县", "上杭县", "永定县", "连城县", "其他"]
	    }, {
	        "name": "宁德",
	        "area": ["蕉城区", "福安市", "福鼎市", "寿宁县", "霞浦县", "柘荣县", "屏南县", "古田县", "周宁县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "江西",
	    "city": [{
	        "name": "南昌",
	        "area": ["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "新建县", "南昌县", "进贤县", "安义县", "其他"]
	    }, {
	        "name": "景德镇",
	        "area": ["珠山区", "昌江区", "乐平市", "浮梁县", "其他"]
	    }, {
	        "name": "萍乡",
	        "area": ["安源区", "湘东区", "莲花县", "上栗县", "芦溪县", "其他"]
	    }, {
	        "name": "九江",
	        "area": ["浔阳区", "庐山区", "瑞昌市", "九江县", "星子县", "武宁县", "彭泽县", "永修县", "修水县", "湖口县", "德安县", "都昌县", "其他"]
	    }, {
	        "name": "新余",
	        "area": ["渝水区", "分宜县", "其他"]
	    }, {
	        "name": "鹰潭",
	        "area": ["月湖区", "贵溪市", "余江县", "其他"]
	    }, {
	        "name": "赣州",
	        "area": ["章贡区", "瑞金市", "南康市", "石城县", "安远县", "赣县", "宁都县", "寻乌县", "兴国县", "定南县", "上犹县", "于都县", "龙南县", "崇义县", "信丰县", "全南县", "大余县", "会昌县", "其他"]
	    }, {
	        "name": "吉安",
	        "area": ["吉州区", "青原区", "井冈山市", "吉安县", "永丰县", "永新县", "新干县", "泰和县", "峡江县", "遂川县", "安福县", "吉水县", "万安县", "其他"]
	    }, {
	        "name": "宜春",
	        "area": ["袁州区", "丰城市", "樟树市", "高安市", "铜鼓县", "靖安县", "宜丰县", "奉新县", "万载县", "上高县", "其他"]
	    }, {
	        "name": "抚州",
	        "area": ["临川区", "南丰县", "乐安县", "金溪县", "南城县", "东乡县", "资溪县", "宜黄县", "广昌县", "黎川县", "崇仁县", "其他"]
	    }, {
	        "name": "上饶",
	        "area": ["信州区", "德兴市", "上饶县", "广丰县", "鄱阳县", "婺源县", "铅山县", "余干县", "横峰县", "弋阳县", "玉山县", "万年县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "山东",
	    "city": [{
	        "name": "济南",
	        "area": ["市中区", "历下区", "天桥区", "槐荫区", "历城区", "长清区", "章丘市", "平阴县", "济阳县", "商河县", "其他"]
	    }, {
	        "name": "青岛",
	        "area": ["市南区", "市北区", "城阳区", "四方区", "李沧区", "黄岛区", "崂山区", "胶南市", "胶州市", "平度市", "莱西市", "即墨市", "其他"]
	    }, {
	        "name": "淄博",
	        "area": ["张店区", "临淄区", "淄川区", "博山区", "周村区", "桓台县", "高青县", "沂源县", "其他"]
	    }, {
	        "name": "枣庄",
	        "area": ["市中区", "山亭区", "峄城区", "台儿庄区", "薛城区", "滕州市", "其他"]
	    }, {
	        "name": "东营",
	        "area": ["东营区", "河口区", "垦利县", "广饶县", "利津县", "其他"]
	    }, {
	        "name": "烟台",
	        "area": ["芝罘区", "福山区", "牟平区", "莱山区", "龙口市", "莱阳市", "莱州市", "招远市", "蓬莱市", "栖霞市", "海阳市", "长岛县", "其他"]
	    }, {
	        "name": "潍坊",
	        "area": ["潍城区", "寒亭区", "坊子区", "奎文区", "青州市", "诸城市", "寿光市", "安丘市", "高密市", "昌邑市", "昌乐县", "临朐县", "其他"]
	    }, {
	        "name": "济宁",
	        "area": ["市中区", "任城区", "曲阜市", "兖州市", "邹城市", "鱼台县", "金乡县", "嘉祥县", "微山县", "汶上县", "泗水县", "梁山县", "其他"]
	    }, {
	        "name": "泰安",
	        "area": ["泰山区", "岱岳区", "新泰市", "肥城市", "宁阳县", "东平县", "其他"]
	    }, {
	        "name": "威海",
	        "area": ["环翠区", "乳山市", "文登市", "荣成市", "其他"]
	    }, {
	        "name": "日照",
	        "area": ["东港区", "岚山区", "五莲县", "莒县", "其他"]
	    }, {
	        "name": "莱芜",
	        "area": ["莱城区", "钢城区", "其他"]
	    }, {
	        "name": "临沂",
	        "area": ["兰山区", "罗庄区", "河东区", "沂南县", "郯城县", "沂水县", "苍山县", "费县", "平邑县", "莒南县", "蒙阴县", "临沭县", "其他"]
	    }, {
	        "name": "德州",
	        "area": ["德城区", "乐陵市", "禹城市", "陵县", "宁津县", "齐河县", "武城县", "庆云县", "平原县", "夏津县", "临邑县", "其他"]
	    }, {
	        "name": "聊城",
	        "area": ["东昌府区", "临清市", "高唐县", "阳谷县", "茌平县", "莘县", "东阿县", "冠县", "其他"]
	    }, {
	        "name": "滨州",
	        "area": ["滨城区", "邹平县", "沾化县", "惠民县", "博兴县", "阳信县", "无棣县", "其他"]
	    }, {
	        "name": "菏泽",
	        "area": ["牡丹区", "鄄城县", "单县", "郓城县", "曹县", "定陶县", "巨野县", "东明县", "成武县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "河南",
	    "city": [{
	        "name": "郑州",
	        "area": ["中原区", "金水区", "二七区", "管城回族区", "上街区", "惠济区", "巩义市", "新郑市", "新密市", "登封市", "荥阳市", "中牟县", "其他"]
	    }, {
	        "name": "开封",
	        "area": ["鼓楼区", "龙亭区", "顺河回族区", "禹王台区", "金明区", "开封县", "尉氏县", "兰考县", "杞县", "通许县", "其他"]
	    }, {
	        "name": "洛阳",
	        "area": ["西工区", "老城区", "涧西区", "瀍河回族区", "洛龙区", "吉利区", "偃师市", "孟津县", "汝阳县", "伊川县", "洛宁县", "嵩县", "宜阳县", "新安县", "栾川县", "其他"]
	    }, {
	        "name": "平顶山",
	        "area": ["新华区", "卫东区", "湛河区", "石龙区", "汝州市", "舞钢市", "宝丰县", "叶县", "郏县", "鲁山县", "其他"]
	    }, {
	        "name": "安阳",
	        "area": ["北关区", "文峰区", "殷都区", "龙安区", "林州市", "安阳县", "滑县", "内黄县", "汤阴县", "其他"]
	    }, {
	        "name": "鹤壁",
	        "area": ["淇滨区", "山城区", "鹤山区", "浚县", "淇县", "其他"]
	    }, {
	        "name": "新乡",
	        "area": ["卫滨区", "红旗区", "凤泉区", "牧野区", "卫辉市", "辉县市", "新乡县", "获嘉县", "原阳县", "长垣县", "封丘县", "延津县", "其他"]
	    }, {
	        "name": "焦作",
	        "area": ["解放区", "中站区", "马村区", "山阳区", "沁阳市", "孟州市", "修武县", "温县", "武陟县", "博爱县", "其他"]
	    }, {
	        "name": "濮阳",
	        "area": ["华龙区", "濮阳县", "南乐县", "台前县", "清丰县", "范县", "其他"]
	    }, {
	        "name": "许昌",
	        "area": ["魏都区", "禹州市", "长葛市", "许昌县", "鄢陵县", "襄城县", "其他"]
	    }, {
	        "name": "漯河",
	        "area": ["源汇区", "郾城区", "召陵区", "临颍县", "舞阳县", "其他"]
	    }, {
	        "name": "三门峡",
	        "area": ["湖滨区", "义马市", "灵宝市", "渑池县", "卢氏县", "陕县", "其他"]
	    }, {
	        "name": "南阳",
	        "area": ["卧龙区", "宛城区", "邓州市", "桐柏县", "方城县", "淅川县", "镇平县", "唐河县", "南召县", "内乡县", "新野县", "社旗县", "西峡县", "其他"]
	    }, {
	        "name": "商丘",
	        "area": ["梁园区", "睢阳区", "永城市", "宁陵县", "虞城县", "民权县", "夏邑县", "柘城县", "睢县", "其他"]
	    }, {
	        "name": "信阳",
	        "area": ["浉河区", "平桥区", "潢川县", "淮滨县", "息县", "新县", "商城县", "固始县", "罗山县", "光山县", "其他"]
	    }, {
	        "name": "周口",
	        "area": ["川汇区", "项城市", "商水县", "淮阳县", "太康县", "鹿邑县", "西华县", "扶沟县", "沈丘县", "郸城县", "其他"]
	    }, {
	        "name": "驻马店",
	        "area": ["驿城区", "确山县", "新蔡县", "上蔡县", "西平县", "泌阳县", "平舆县", "汝南县", "遂平县", "正阳县", "其他"]
	    }, {
	        "name": "焦作",
	        "area": ["济源市", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "湖北",
	    "city": [{
	        "name": "武汉",
	        "area": ["江岸区", "武昌区", "江汉区", "硚口区", "汉阳区", "青山区", "洪山区", "东西湖区", "汉南区", "蔡甸区", "江夏区", "黄陂区", "新洲区", "其他"]
	    }, {
	        "name": "黄石",
	        "area": ["黄石港区", "西塞山区", "下陆区", "铁山区", "大冶市", "阳新县", "其他"]
	    }, {
	        "name": "十堰",
	        "area": ["张湾区", "茅箭区", "丹江口市", "郧县", "竹山县", "房县", "郧西县", "竹溪县", "其他"]
	    }, {
	        "name": "荆州",
	        "area": ["沙市区", "荆州区", "洪湖市", "石首市", "松滋市", "监利县", "公安县", "江陵县", "其他"]
	    }, {
	        "name": "宜昌",
	        "area": ["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "宜都市", "当阳市", "枝江市", "秭归县", "远安县", "兴山县", "五峰土家族自治县", "长阳土家族自治县", "其他"]
	    }, {
	        "name": "襄樊",
	        "area": ["襄城区", "樊城区", "襄阳区", "老河口市", "枣阳市", "宜城市", "南漳县", "谷城县", "保康县", "其他"]
	    }, {
	        "name": "鄂州",
	        "area": ["鄂城区", "华容区", "梁子湖区", "其他"]
	    }, {
	        "name": "荆门",
	        "area": ["东宝区", "掇刀区", "钟祥市", "京山县", "沙洋县", "其他"]
	    }, {
	        "name": "孝感",
	        "area": ["孝南区", "应城市", "安陆市", "汉川市", "云梦县", "大悟县", "孝昌县", "其他"]
	    }, {
	        "name": "黄冈",
	        "area": ["黄州区", "麻城市", "武穴市", "红安县", "罗田县", "浠水县", "蕲春县", "黄梅县", "英山县", "团风县", "其他"]
	    }, {
	        "name": "咸宁",
	        "area": ["咸安区", "赤壁市", "嘉鱼县", "通山县", "崇阳县", "通城县", "其他"]
	    }, {
	        "name": "随州",
	        "area": ["曾都区", "广水市", "其他"]
	    }, {
	        "name": "恩施土家族苗族自治州",
	        "area": ["恩施市", "利川市", "建始县", "来凤县", "巴东县", "鹤峰县", "宣恩县", "咸丰县", "其他"]
	    }, {
	        "name": "仙桃",
	        "area": ["仙桃"]
	    }, {
	        "name": "天门",
	        "area": ["天门"]
	    }, {
	        "name": "潜江",
	        "area": ["潜江"]
	    }, {
	        "name": "神农架林区",
	        "area": ["神农架林区"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "湖南",
	    "city": [{
	        "name": "长沙",
	        "area": ["岳麓区", "芙蓉区", "天心区", "开福区", "雨花区", "浏阳市", "长沙县", "望城县", "宁乡县", "其他"]
	    }, {
	        "name": "株洲",
	        "area": ["天元区", "荷塘区", "芦淞区", "石峰区", "醴陵市", "株洲县", "炎陵县", "茶陵县", "攸县", "其他"]
	    }, {
	        "name": "湘潭",
	        "area": ["岳塘区", "雨湖区", "湘乡市", "韶山市", "湘潭县", "其他"]
	    }, {
	        "name": "衡阳",
	        "area": ["雁峰区", "珠晖区", "石鼓区", "蒸湘区", "南岳区", "耒阳市", "常宁市", "衡阳县", "衡东县", "衡山县", "衡南县", "祁东县", "其他"]
	    }, {
	        "name": "邵阳",
	        "area": ["双清区", "大祥区", "北塔区", "武冈市", "邵东县", "洞口县", "新邵县", "绥宁县", "新宁县", "邵阳县", "隆回县", "城步苗族自治县", "其他"]
	    }, {
	        "name": "岳阳",
	        "area": ["岳阳楼区", "云溪区", "君山区", "临湘市", "汨罗市", "岳阳县", "湘阴县", "平江县", "华容县", "其他"]
	    }, {
	        "name": "常德",
	        "area": ["武陵区", "鼎城区", "津市市", "澧县", "临澧县", "桃源县", "汉寿县", "安乡县", "石门县", "其他"]
	    }, {
	        "name": "张家界",
	        "area": ["永定区", "武陵源区", "慈利县", "桑植县", "其他"]
	    }, {
	        "name": "益阳",
	        "area": ["赫山区", "资阳区", "沅江市", "桃江县", "南县", "安化县", "其他"]
	    }, {
	        "name": "郴州",
	        "area": ["北湖区", "苏仙区", "资兴市", "宜章县", "汝城县", "安仁县", "嘉禾县", "临武县", "桂东县", "永兴县", "桂阳县", "其他"]
	    }, {
	        "name": "永州",
	        "area": ["冷水滩区", "零陵区", "祁阳县", "蓝山县", "宁远县", "新田县", "东安县", "江永县", "道县", "双牌县", "江华瑶族自治县", "其他"]
	    }, {
	        "name": "怀化",
	        "area": ["鹤城区", "洪江市", "会同县", "沅陵县", "辰溪县", "溆浦县", "中方县", "新晃侗族自治县", "芷江侗族自治县", "通道侗族自治县", "靖州苗族侗族自治县", "麻阳苗族自治县", "其他"]
	    }, {
	        "name": "娄底",
	        "area": ["娄星区", "冷水江市", "涟源市", "新化县", "双峰县", "其他"]
	    }, {
	        "name": "湘西土家族苗族自治州",
	        "area": ["吉首市", "古丈县", "龙山县", "永顺县", "凤凰县", "泸溪县", "保靖县", "花垣县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "广东",
	    "city": [{
	        "name": "广州",
	        "area": ["越秀区", "荔湾区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市", "其他"]
	    }, {
	        "name": "深圳",
	        "area": ["福田区", "罗湖区", "南山区", "宝安区", "龙岗区", "盐田区", "其他"]
	    }, {
	        "name": "东莞",
	        "area": ["莞城", "常平", "塘厦", "塘厦", "塘厦", "其他"]
	    }, {
	        "name": "中山",
	        "area": ["中山"]
	    }, {
	        "name": "潮州",
	        "area": ["湘桥区", "潮安县", "饶平县", "其他"]
	    }, {
	        "name": "揭阳",
	        "area": ["榕城区", "揭东县", "揭西县", "惠来县", "普宁市", "其他"]
	    }, {
	        "name": "云浮",
	        "area": ["云城区", "新兴县", "郁南县", "云安县", "罗定市", "其他"]
	    }, {
	        "name": "珠海",
	        "area": ["香洲区", "斗门区", "金湾区", "其他"]
	    }, {
	        "name": "汕头",
	        "area": ["金平区", "濠江区", "龙湖区", "潮阳区", "潮南区", "澄海区", "南澳县", "其他"]
	    }, {
	        "name": "韶关",
	        "area": ["浈江区", "武江区", "曲江区", "乐昌市", "南雄市", "始兴县", "仁化县", "翁源县", "新丰县", "乳源瑶族自治县", "其他"]
	    }, {
	        "name": "佛山",
	        "area": ["禅城区", "南海区", "顺德区", "三水区", "高明区", "其他"]
	    }, {
	        "name": "江门",
	        "area": ["蓬江区", "江海区", "新会区", "恩平市", "台山市", "开平市", "鹤山市", "其他"]
	    }, {
	        "name": "湛江",
	        "area": ["赤坎区", "霞山区", "坡头区", "麻章区", "吴川市", "廉江市", "雷州市", "遂溪县", "徐闻县", "其他"]
	    }, {
	        "name": "茂名",
	        "area": ["茂南区", "茂港区", "化州市", "信宜市", "高州市", "电白县", "其他"]
	    }, {
	        "name": "肇庆",
	        "area": ["端州区", "鼎湖区", "高要市", "四会市", "广宁县", "怀集县", "封开县", "德庆县", "其他"]
	    }, {
	        "name": "惠州",
	        "area": ["惠城区", "惠阳区", "博罗县", "惠东县", "龙门县", "其他"]
	    }, {
	        "name": "梅州",
	        "area": ["梅江区", "兴宁市", "梅县", "大埔县", "丰顺县", "五华县", "平远县", "蕉岭县", "其他"]
	    }, {
	        "name": "汕尾",
	        "area": ["城区", "陆丰市", "海丰县", "陆河县", "其他"]
	    }, {
	        "name": "河源",
	        "area": ["源城区", "紫金县", "龙川县", "连平县", "和平县", "东源县", "其他"]
	    }, {
	        "name": "阳江",
	        "area": ["江城区", "阳春市", "阳西县", "阳东县", "其他"]
	    }, {
	        "name": "清远",
	        "area": ["清城区", "英德市", "连州市", "佛冈县", "阳山县", "清新县", "连山壮族瑶族自治县", "连南瑶族自治县", "其他"]
	    }]
	}, {
	    "name": "广西",
	    "city": [{
	        "name": "南宁",
	        "area": ["青秀区", "兴宁区", "西乡塘区", "良庆区", "江南区", "邕宁区", "武鸣县", "隆安县", "马山县", "上林县", "宾阳县", "横县", "其他"]
	    }, {
	        "name": "柳州",
	        "area": ["城中区", "鱼峰区", "柳北区", "柳南区", "柳江县", "柳城县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县", "其他"]
	    }, {
	        "name": "桂林",
	        "area": ["象山区", "秀峰区", "叠彩区", "七星区", "雁山区", "阳朔县", "临桂县", "灵川县", "全州县", "平乐县", "兴安县", "灌阳县", "荔浦县", "资源县", "永福县", "龙胜各族自治县", "恭城瑶族自治县", "其他"]
	    }, {
	        "name": "梧州",
	        "area": ["万秀区", "蝶山区", "长洲区", "岑溪市", "苍梧县", "藤县", "蒙山县", "其他"]
	    }, {
	        "name": "北海",
	        "area": ["海城区", "银海区", "铁山港区", "合浦县", "其他"]
	    }, {
	        "name": "防城港",
	        "area": ["港口区", "防城区", "东兴市", "上思县", "其他"]
	    }, {
	        "name": "钦州",
	        "area": ["钦南区", "钦北区", "灵山县", "浦北县", "其他"]
	    }, {
	        "name": "贵港",
	        "area": ["港北区", "港南区", "覃塘区", "桂平市", "平南县", "其他"]
	    }, {
	        "name": "玉林",
	        "area": ["玉州区", "北流市", "容县", "陆川县", "博白县", "兴业县", "其他"]
	    }, {
	        "name": "百色",
	        "area": ["右江区", "凌云县", "平果县", "西林县", "乐业县", "德保县", "田林县", "田阳县", "靖西县", "田东县", "那坡县", "隆林各族自治县", "其他"]
	    }, {
	        "name": "贺州",
	        "area": ["八步区", "钟山县", "昭平县", "富川瑶族自治县", "其他"]
	    }, {
	        "name": "河池",
	        "area": ["金城江区", "宜州市", "天峨县", "凤山县", "南丹县", "东兰县", "都安瑶族自治县", "罗城仫佬族自治县", "巴马瑶族自治县", "环江毛南族自治县", "大化瑶族自治县", "其他"]
	    }, {
	        "name": "来宾",
	        "area": ["兴宾区", "合山市", "象州县", "武宣县", "忻城县", "金秀瑶族自治县", "其他"]
	    }, {
	        "name": "崇左",
	        "area": ["江州区", "凭祥市", "宁明县", "扶绥县", "龙州县", "大新县", "天等县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "海南",
	    "city": [{
	        "name": "海口",
	        "area": ["龙华区", "秀英区", "琼山区", "美兰区", "其他"]
	    }, {
	        "name": "三亚",
	        "area": ["三亚市", "其他"]
	    }, {
	        "name": "五指山",
	        "area": ["五指山"]
	    }, {
	        "name": "琼海",
	        "area": ["琼海"]
	    }, {
	        "name": "儋州",
	        "area": ["儋州"]
	    }, {
	        "name": "文昌",
	        "area": ["文昌"]
	    }, {
	        "name": "万宁",
	        "area": ["万宁"]
	    }, {
	        "name": "东方",
	        "area": ["东方"]
	    }, {
	        "name": "澄迈县",
	        "area": ["澄迈县"]
	    }, {
	        "name": "定安县",
	        "area": ["定安县"]
	    }, {
	        "name": "屯昌县",
	        "area": ["屯昌县"]
	    }, {
	        "name": "临高县",
	        "area": ["临高县"]
	    }, {
	        "name": "白沙黎族自治县",
	        "area": ["白沙黎族自治县"]
	    }, {
	        "name": "昌江黎族自治县",
	        "area": ["昌江黎族自治县"]
	    }, {
	        "name": "乐东黎族自治县",
	        "area": ["乐东黎族自治县"]
	    }, {
	        "name": "陵水黎族自治县",
	        "area": ["陵水黎族自治县"]
	    }, {
	        "name": "保亭黎族苗族自治县",
	        "area": ["保亭黎族苗族自治县"]
	    }, {
	        "name": "琼中黎族苗族自治县",
	        "area": ["琼中黎族苗族自治县"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "重庆",
	    "city": [{
	        "name": "重庆",
	        "area": ["渝中区", "大渡口区", "江北区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "双桥区", "沙坪坝区", "万盛区", "万州区", "涪陵区", "黔江区", "永川区", "合川区", "江津区", "九龙坡区", "南川区", "綦江县", "潼南县", "荣昌县", "璧山县", "大足县", "铜梁县", "梁平县", "开县", "忠县", "城口县", "垫江县", "武隆县", "丰都县", "奉节县", "云阳县", "巫溪县", "巫山县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县", "其他"]
	    }]
	}, {
	    "name": "四川",
	    "city": [{
	        "name": "成都",
	        "area": ["青羊区", "锦江区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "都江堰市", "彭州市", "邛崃市", "崇州市", "金堂县", "郫县", "新津县", "双流县", "蒲江县", "大邑县", "其他"]
	    }, {
	        "name": "自贡",
	        "area": ["大安区", "自流井区", "贡井区", "沿滩区", "荣县", "富顺县", "其他"]
	    }, {
	        "name": "攀枝花",
	        "area": ["仁和区", "米易县", "盐边县", "东区", "西区", "其他"]
	    }, {
	        "name": "泸州",
	        "area": ["江阳区", "纳溪区", "龙马潭区", "泸县", "合江县", "叙永县", "古蔺县", "其他"]
	    }, {
	        "name": "德阳",
	        "area": ["旌阳区", "广汉市", "什邡市", "绵竹市", "罗江县", "中江县", "其他"]
	    }, {
	        "name": "绵阳",
	        "area": ["涪城区", "游仙区", "江油市", "盐亭县", "三台县", "平武县", "安县", "梓潼县", "北川羌族自治县", "其他"]
	    }, {
	        "name": "广元",
	        "area": ["元坝区", "朝天区", "青川县", "旺苍县", "剑阁县", "苍溪县", "市中区", "其他"]
	    }, {
	        "name": "遂宁",
	        "area": ["船山区", "安居区", "射洪县", "蓬溪县", "大英县", "其他"]
	    }, {
	        "name": "内江",
	        "area": ["市中区", "东兴区", "资中县", "隆昌县", "威远县", "其他"]
	    }, {
	        "name": "乐山",
	        "area": ["市中区", "五通桥区", "沙湾区", "金口河区", "峨眉山市", "夹江县", "井研县", "犍为县", "沐川县", "马边彝族自治县", "峨边彝族自治县", "其他"]
	    }, {
	        "name": "南充",
	        "area": ["顺庆区", "高坪区", "嘉陵区", "阆中市", "营山县", "蓬安县", "仪陇县", "南部县", "西充县", "其他"]
	    }, {
	        "name": "眉山",
	        "area": ["东坡区", "仁寿县", "彭山县", "洪雅县", "丹棱县", "青神县", "其他"]
	    }, {
	        "name": "宜宾",
	        "area": ["翠屏区", "宜宾县", "兴文县", "南溪县", "珙县", "长宁县", "高县", "江安县", "筠连县", "屏山县", "其他"]
	    }, {
	        "name": "广安",
	        "area": ["广安区", "华蓥市", "岳池县", "邻水县", "武胜县", "其他"]
	    }, {
	        "name": "达州",
	        "area": ["通川区", "万源市", "达县", "渠县", "宣汉县", "开江县", "大竹县", "其他"]
	    }, {
	        "name": "雅安",
	        "area": ["雨城区", "芦山县", "石棉县", "名山县", "天全县", "荥经县", "宝兴县", "汉源县", "其他"]
	    }, {
	        "name": "巴中",
	        "area": ["巴州区", "南江县", "平昌县", "通江县", "其他"]
	    }, {
	        "name": "资阳",
	        "area": ["雁江区", "简阳市", "安岳县", "乐至县", "其他"]
	    }, {
	        "name": "阿坝藏族羌族自治州",
	        "area": ["马尔康县", "九寨沟县", "红原县", "汶川县", "阿坝县", "理县", "若尔盖县", "小金县", "黑水县", "金川县", "松潘县", "壤塘县", "茂县", "其他"]
	    }, {
	        "name": "甘孜藏族自治州",
	        "area": ["康定县", "丹巴县", "炉霍县", "九龙县", "甘孜县", "雅江县", "新龙县", "道孚县", "白玉县", "理塘县", "德格县", "乡城县", "石渠县", "稻城县", "色达县", "巴塘县", "泸定县", "得荣县", "其他"]
	    }, {
	        "name": "凉山彝族自治州",
	        "area": ["西昌市", "美姑县", "昭觉县", "金阳县", "甘洛县", "布拖县", "雷波县", "普格县", "宁南县", "喜德县", "会东县", "越西县", "会理县", "盐源县", "德昌县", "冕宁县", "木里藏族自治县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "贵州",
	    "city": [{
	        "name": "贵阳",
	        "area": ["南明区", "云岩区", "花溪区", "乌当区", "白云区", "小河区", "清镇市", "开阳县", "修文县", "息烽县", "其他"]
	    }, {
	        "name": "六盘水",
	        "area": ["钟山区", "水城县", "盘县", "六枝特区", "其他"]
	    }, {
	        "name": "遵义",
	        "area": ["红花岗区", "汇川区", "赤水市", "仁怀市", "遵义县", "绥阳县", "桐梓县", "习水县", "凤冈县", "正安县", "余庆县", "湄潭县", "道真仡佬族苗族自治县", "务川仡佬族苗族自治县", "其他"]
	    }, {
	        "name": "安顺",
	        "area": ["西秀区", "普定县", "平坝县", "镇宁布依族苗族自治县", "紫云苗族布依族自治县", "关岭布依族苗族自治县", "其他"]
	    }, {
	        "name": "铜仁地区",
	        "area": ["铜仁市", "德江县", "江口县", "思南县", "石阡县", "玉屏侗族自治县", "松桃苗族自治县", "印江土家族苗族自治县", "沿河土家族自治县", "万山特区", "其他"]
	    }, {
	        "name": "毕节地区",
	        "area": ["毕节市", "黔西县", "大方县", "织金县", "金沙县", "赫章县", "纳雍县", "威宁彝族回族苗族自治县", "其他"]
	    }, {
	        "name": "黔西南布依族苗族自治州",
	        "area": ["兴义市", "望谟县", "兴仁县", "普安县", "册亨县", "晴隆县", "贞丰县", "安龙县", "其他"]
	    }, {
	        "name": "黔东南苗族侗族自治州",
	        "area": ["凯里市", "施秉县", "从江县", "锦屏县", "镇远县", "麻江县", "台江县", "天柱县", "黄平县", "榕江县", "剑河县", "三穗县", "雷山县", "黎平县", "岑巩县", "丹寨县", "其他"]
	    }, {
	        "name": "黔南布依族苗族自治州",
	        "area": ["都匀市", "福泉市", "贵定县", "惠水县", "罗甸县", "瓮安县", "荔波县", "龙里县", "平塘县", "长顺县", "独山县", "三都水族自治县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "云南",
	    "city": [{
	        "name": "昆明",
	        "area": ["盘龙区", "五华区", "官渡区", "西山区", "东川区", "安宁市", "呈贡县", "晋宁县", "富民县", "宜良县", "嵩明县", "石林彝族自治县", "禄劝彝族苗族自治县", "寻甸回族彝族自治县", "其他"]
	    }, {
	        "name": "曲靖",
	        "area": ["麒麟区", "宣威市", "马龙县", "沾益县", "富源县", "罗平县", "师宗县", "陆良县", "会泽县", "其他"]
	    }, {
	        "name": "玉溪",
	        "area": ["红塔区", "江川县", "澄江县", "通海县", "华宁县", "易门县", "峨山彝族自治县", "新平彝族傣族自治县", "元江哈尼族彝族傣族自治县", "其他"]
	    }, {
	        "name": "保山",
	        "area": ["隆阳区", "施甸县", "腾冲县", "龙陵县", "昌宁县", "其他"]
	    }, {
	        "name": "昭通",
	        "area": ["昭阳区", "鲁甸县", "巧家县", "盐津县", "大关县", "永善县", "绥江县", "镇雄县", "彝良县", "威信县", "水富县", "其他"]
	    }, {
	        "name": "丽江",
	        "area": ["古城区", "永胜县", "华坪县", "玉龙纳西族自治县", "宁蒗彝族自治县", "其他"]
	    }, {
	        "name": "普洱",
	        "area": ["思茅区", "普洱哈尼族彝族自治县", "墨江哈尼族自治县", "景东彝族自治县", "景谷傣族彝族自治县", "镇沅彝族哈尼族拉祜族自治县", "江城哈尼族彝族自治县", "孟连傣族拉祜族佤族自治县", "澜沧拉祜族自治县", "西盟佤族自治县", "其他"]
	    }, {
	        "name": "临沧",
	        "area": ["临翔区", "凤庆县", "云县", "永德县", "镇康县", "双江拉祜族佤族布朗族傣族自治县", "耿马傣族佤族自治县", "沧源佤族自治县", "其他"]
	    }, {
	        "name": "德宏傣族景颇族自治州",
	        "area": ["潞西市", "瑞丽市", "梁河县", "盈江县", "陇川县", "其他"]
	    }, {
	        "name": "怒江傈僳族自治州",
	        "area": ["泸水县", "福贡县", "贡山独龙族怒族自治县", "兰坪白族普米族自治县", "其他"]
	    }, {
	        "name": "迪庆藏族自治州",
	        "area": ["香格里拉县", "德钦县", "维西傈僳族自治县", "其他"]
	    }, {
	        "name": "大理白族自治州",
	        "area": ["大理市", "祥云县", "宾川县", "弥渡县", "永平县", "云龙县", "洱源县", "剑川县", "鹤庆县", "漾濞彝族自治县", "南涧彝族自治县", "巍山彝族回族自治县", "其他"]
	    }, {
	        "name": "楚雄彝族自治州",
	        "area": ["楚雄市", "双柏县", "牟定县", "南华县", "姚安县", "大姚县", "永仁县", "元谋县", "武定县", "禄丰县", "其他"]
	    }, {
	        "name": "红河哈尼族彝族自治州",
	        "area": ["蒙自县", "个旧市", "开远市", "绿春县", "建水县", "石屏县", "弥勒县", "泸西县", "元阳县", "红河县", "金平苗族瑶族傣族自治县", "河口瑶族自治县", "屏边苗族自治县", "其他"]
	    }, {
	        "name": "文山壮族苗族自治州",
	        "area": ["文山县", "砚山县", "西畴县", "麻栗坡县", "马关县", "丘北县", "广南县", "富宁县", "其他"]
	    }, {
	        "name": "西双版纳傣族自治州",
	        "area": ["景洪市", "勐海县", "勐腊县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "西藏",
	    "city": [{
	        "name": "拉萨",
	        "area": ["城关区", "林周县", "当雄县", "尼木县", "曲水县", "堆龙德庆县", "达孜县", "墨竹工卡县", "其他"]
	    }, {
	        "name": "那曲地区",
	        "area": ["那曲县", "嘉黎县", "比如县", "聂荣县", "安多县", "申扎县", "索县", "班戈县", "巴青县", "尼玛县", "其他"]
	    }, {
	        "name": "昌都地区",
	        "area": ["昌都县", "江达县", "贡觉县", "类乌齐县", "丁青县", "察雅县", "八宿县", "左贡县", "芒康县", "洛隆县", "边坝县", "其他"]
	    }, {
	        "name": "林芝地区",
	        "area": ["林芝县", "工布江达县", "米林县", "墨脱县", "波密县", "察隅县", "朗县", "其他"]
	    }, {
	        "name": "山南地区",
	        "area": ["乃东县", "扎囊县", "贡嘎县", "桑日县", "琼结县", "曲松县", "措美县", "洛扎县", "加查县", "隆子县", "错那县", "浪卡子县", "其他"]
	    }, {
	        "name": "日喀则地区",
	        "area": ["日喀则市", "南木林县", "江孜县", "定日县", "萨迦县", "拉孜县", "昂仁县", "谢通门县", "白朗县", "仁布县", "康马县", "定结县", "仲巴县", "亚东县", "吉隆县", "聂拉木县", "萨嘎县", "岗巴县", "其他"]
	    }, {
	        "name": "阿里地区",
	        "area": ["噶尔县", "普兰县", "札达县", "日土县", "革吉县", "改则县", "措勤县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "陕西",
	    "city": [{
	        "name": "西安",
	        "area": ["莲湖区", "新城区", "碑林区", "雁塔区", "灞桥区", "未央区", "阎良区", "临潼区", "长安区", "高陵县", "蓝田县", "户县", "周至县", "其他"]
	    }, {
	        "name": "铜川",
	        "area": ["耀州区", "王益区", "印台区", "宜君县", "其他"]
	    }, {
	        "name": "宝鸡",
	        "area": ["渭滨区", "金台区", "陈仓区", "岐山县", "凤翔县", "陇县", "太白县", "麟游县", "扶风县", "千阳县", "眉县", "凤县", "其他"]
	    }, {
	        "name": "咸阳",
	        "area": ["秦都区", "渭城区", "杨陵区", "兴平市", "礼泉县", "泾阳县", "永寿县", "三原县", "彬县", "旬邑县", "长武县", "乾县", "武功县", "淳化县", "其他"]
	    }, {
	        "name": "渭南",
	        "area": ["临渭区", "韩城市", "华阴市", "蒲城县", "潼关县", "白水县", "澄城县", "华县", "合阳县", "富平县", "大荔县", "其他"]
	    }, {
	        "name": "延安",
	        "area": ["宝塔区", "安塞县", "洛川县", "子长县", "黄陵县", "延川县", "富县", "延长县", "甘泉县", "宜川县", "志丹县", "黄龙县", "吴起县", "其他"]
	    }, {
	        "name": "汉中",
	        "area": ["汉台区", "留坝县", "镇巴县", "城固县", "南郑县", "洋县", "宁强县", "佛坪县", "勉县", "西乡县", "略阳县", "其他"]
	    }, {
	        "name": "榆林",
	        "area": ["榆阳区", "清涧县", "绥德县", "神木县", "佳县", "府谷县", "子洲县", "靖边县", "横山县", "米脂县", "吴堡县", "定边县", "其他"]
	    }, {
	        "name": "安康",
	        "area": ["汉滨区", "紫阳县", "岚皋县", "旬阳县", "镇坪县", "平利县", "石泉县", "宁陕县", "白河县", "汉阴县", "其他"]
	    }, {
	        "name": "商洛",
	        "area": ["商州区", "镇安县", "山阳县", "洛南县", "商南县", "丹凤县", "柞水县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "甘肃",
	    "city": [{
	        "name": "兰州",
	        "area": ["城关区", "七里河区", "西固区", "安宁区", "红古区", "永登县", "皋兰县", "榆中县", "其他"]
	    }, {
	        "name": "嘉峪关",
	        "area": ["嘉峪关市", "其他"]
	    }, {
	        "name": "金昌",
	        "area": ["金川区", "永昌县", "其他"]
	    }, {
	        "name": "白银",
	        "area": ["白银区", "平川区", "靖远县", "会宁县", "景泰县", "其他"]
	    }, {
	        "name": "天水",
	        "area": ["清水县", "秦安县", "甘谷县", "武山县", "张家川回族自治县", "北道区", "秦城区", "其他"]
	    }, {
	        "name": "武威",
	        "area": ["凉州区", "民勤县", "古浪县", "天祝藏族自治县", "其他"]
	    }, {
	        "name": "酒泉",
	        "area": ["肃州区", "玉门市", "敦煌市", "金塔县", "肃北蒙古族自治县", "阿克塞哈萨克族自治县", "安西县", "其他"]
	    }, {
	        "name": "张掖",
	        "area": ["甘州区", "民乐县", "临泽县", "高台县", "山丹县", "肃南裕固族自治县", "其他"]
	    }, {
	        "name": "庆阳",
	        "area": ["西峰区", "庆城县", "环县", "华池县", "合水县", "正宁县", "宁县", "镇原县", "其他"]
	    }, {
	        "name": "平凉",
	        "area": ["崆峒区", "泾川县", "灵台县", "崇信县", "华亭县", "庄浪县", "静宁县", "其他"]
	    }, {
	        "name": "定西",
	        "area": ["安定区", "通渭县", "临洮县", "漳县", "岷县", "渭源县", "陇西县", "其他"]
	    }, {
	        "name": "陇南",
	        "area": ["武都区", "成县", "宕昌县", "康县", "文县", "西和县", "礼县", "两当县", "徽县", "其他"]
	    }, {
	        "name": "临夏回族自治州",
	        "area": ["临夏市", "临夏县", "康乐县", "永靖县", "广河县", "和政县", "东乡族自治县", "积石山保安族东乡族撒拉族自治县", "其他"]
	    }, {
	        "name": "甘南藏族自治州",
	        "area": ["合作市", "临潭县", "卓尼县", "舟曲县", "迭部县", "玛曲县", "碌曲县", "夏河县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "青海",
	    "city": [{
	        "name": "西宁",
	        "area": ["城中区", "城东区", "城西区", "城北区", "湟源县", "湟中县", "大通回族土族自治县", "其他"]
	    }, {
	        "name": "海东地区",
	        "area": ["平安县", "乐都县", "民和回族土族自治县", "互助土族自治县", "化隆回族自治县", "循化撒拉族自治县", "其他"]
	    }, {
	        "name": "海北藏族自治州",
	        "area": ["海晏县", "祁连县", "刚察县", "门源回族自治县", "其他"]
	    }, {
	        "name": "海南藏族自治州",
	        "area": ["共和县", "同德县", "贵德县", "兴海县", "贵南县", "其他"]
	    }, {
	        "name": "黄南藏族自治州",
	        "area": ["同仁县", "尖扎县", "泽库县", "河南蒙古族自治县", "其他"]
	    }, {
	        "name": "果洛藏族自治州",
	        "area": ["玛沁县", "班玛县", "甘德县", "达日县", "久治县", "玛多县", "其他"]
	    }, {
	        "name": "玉树藏族自治州",
	        "area": ["玉树县", "杂多县", "称多县", "治多县", "囊谦县", "曲麻莱县", "其他"]
	    }, {
	        "name": "海西蒙古族藏族自治州",
	        "area": ["德令哈市", "格尔木市", "乌兰县", "都兰县", "天峻县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "宁夏",
	    "city": [{
	        "name": "银川",
	        "area": ["兴庆区", "西夏区", "金凤区", "灵武市", "永宁县", "贺兰县", "其他"]
	    }, {
	        "name": "石嘴山",
	        "area": ["大武口区", "惠农区", "平罗县", "其他"]
	    }, {
	        "name": "吴忠",
	        "area": ["利通区", "青铜峡市", "盐池县", "同心县", "其他"]
	    }, {
	        "name": "固原",
	        "area": ["原州区", "西吉县", "隆德县", "泾源县", "彭阳县", "其他"]
	    }, {
	        "name": "中卫",
	        "area": ["沙坡头区", "中宁县", "海原县", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "新疆",
	    "city": [{
	        "name": "乌鲁木齐",
	        "area": ["天山区", "沙依巴克区", "新市区", "水磨沟区", "头屯河区", "达坂城区", "东山区", "乌鲁木齐县", "其他"]
	    }, {
	        "name": "克拉玛依",
	        "area": ["克拉玛依区", "独山子区", "白碱滩区", "乌尔禾区", "其他"]
	    }, {
	        "name": "吐鲁番地区",
	        "area": ["吐鲁番市", "托克逊县", "鄯善县", "其他"]
	    }, {
	        "name": "哈密地区",
	        "area": ["哈密市", "伊吾县", "巴里坤哈萨克自治县", "其他"]
	    }, {
	        "name": "和田地区",
	        "area": ["和田市", "和田县", "洛浦县", "民丰县", "皮山县", "策勒县", "于田县", "墨玉县", "其他"]
	    }, {
	        "name": "阿克苏地区",
	        "area": ["阿克苏市", "温宿县", "沙雅县", "拜城县", "阿瓦提县", "库车县", "柯坪县", "新和县", "乌什县", "其他"]
	    }, {
	        "name": "喀什地区",
	        "area": ["喀什市", "巴楚县", "泽普县", "伽师县", "叶城县", "岳普湖县", "疏勒县", "麦盖提县", "英吉沙县", "莎车县", "疏附县", "塔什库尔干塔吉克自治县", "其他"]
	    }, {
	        "name": "克孜勒苏柯尔克孜自治州",
	        "area": ["阿图什市", "阿合奇县", "乌恰县", "阿克陶县", "其他"]
	    }, {
	        "name": "巴音郭楞蒙古自治州",
	        "area": ["库尔勒市", "和静县", "尉犁县", "和硕县", "且末县", "博湖县", "轮台县", "若羌县", "焉耆回族自治县", "其他"]
	    }, {
	        "name": "昌吉回族自治州",
	        "area": ["昌吉市", "阜康市", "奇台县", "玛纳斯县", "吉木萨尔县", "呼图壁县", "木垒哈萨克自治县", "米泉市", "其他"]
	    }, {
	        "name": "博尔塔拉蒙古自治州",
	        "area": ["博乐市", "精河县", "温泉县", "其他"]
	    }, {
	        "name": "石河子",
	        "area": ["石河子"]
	    }, {
	        "name": "阿拉尔",
	        "area": ["阿拉尔"]
	    }, {
	        "name": "图木舒克",
	        "area": ["图木舒克"]
	    }, {
	        "name": "五家渠",
	        "area": ["五家渠"]
	    }, {
	        "name": "伊犁哈萨克自治州",
	        "area": ["伊宁市", "奎屯市", "伊宁县", "特克斯县", "尼勒克县", "昭苏县", "新源县", "霍城县", "巩留县", "察布查尔锡伯自治县", "塔城地区", "阿勒泰地区", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "台湾",
	    "city": [{
	        "name": "台湾",
	        "area": ["台北市", "高雄市", "台北县", "桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县", "台南县", "高雄县", "屏东县", "宜兰县", "花莲县", "台东县", "澎湖县", "基隆市", "新竹市", "台中市", "嘉义市", "台南市", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "澳门",
	    "city": [{
	        "name": "澳门",
	        "area": ["花地玛堂区", "圣安多尼堂区", "大堂区", "望德堂区", "风顺堂区", "嘉模堂区", "圣方济各堂区", "路凼", "其他"]
	    }]
	}, {
	    "name": "香港",
	    "city": [{
	        "name": "香港",
	        "area": ["中西区", "湾仔区", "东区", "南区", "深水埗区", "油尖旺区", "九龙城区", "黄大仙区", "观塘区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区", "其他"]
	    }]
	}];
	module.exports = exports["default"];

/***/ }),
/* 243 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = [{
	    "name": "北京",
	    "city": [{
	        "name": "北京",
	        "area": ["東城區", "西城區", "崇文區", "宣武區", "朝陽區", "豐臺區", "石景山區", "海澱區", "門頭溝區", "房山區", "通州區", "順義區", "昌平區", "大興區", "平穀區", "懷柔區", "密雲縣", "延慶縣"]
	    }]
	}, {
	    "name": "天津",
	    "city": [{
	        "name": "天津",
	        "area": ["和平區", "河東區", "河西區", "南開區", "河北區", "紅橋區", "塘沽區", "漢沽區", "大港區", "東麗區", "西青區", "津南區", "北辰區", "武清區", "寶坻區", "寧河縣", "靜海縣", "薊縣"]
	    }]
	}, {
	    "name": "河北",
	    "city": [{
	        "name": "石家莊",
	        "area": ["長安區", "橋東區", "橋西區", "新華區", "郊區", "井陘礦區", "井陘縣", "正定縣", "欒城縣", "行唐縣", "靈壽縣", "高邑縣", "深澤縣", "贊皇縣", "無極縣", "平山縣", "元氏縣", "趙縣", "辛集市", "槁", "晉州市", "新樂市", "鹿泉市"]
	    }, {
	        "name": "唐山",
	        "area": ["路南區", "路北區", "古冶區", "開平區", "新區", "豐潤縣", "灤縣", "灤南縣", "樂亭縣", "遷西縣", "玉田縣", "唐海縣", "遵化市", "豐南市", "遷安市"]
	    }, {
	        "name": "秦皇島",
	        "area": ["海港區", "山海關區", "北戴河區", "青龍滿族自治縣", "昌黎縣", "撫寧縣", "盧龍縣"]
	    }, {
	        "name": "邯鄲",
	        "area": ["邯山區", "叢臺區", "復興區", "峰峰礦區", "邯鄲縣", "臨漳縣", "成安縣", "大名縣", "涉縣", "磁縣", "肥鄉縣", "永年縣", "邱縣", "雞澤縣", "廣平縣", "館陶縣", "魏縣", "曲周縣", "武安市"]
	    }, {
	        "name": "邢臺",
	        "area": ["橋東區", "橋西區", "邢臺縣", "臨城縣", "內丘縣", "柏鄉縣", "隆堯縣", "任縣", "南和縣", "寧晉縣", "巨鹿縣", "新河縣", "廣宗縣", "平鄉縣", "威縣", "清河縣", "臨西縣", "南宮市", "沙河市"]
	    }, {
	        "name": "保定",
	        "area": ["新市區", "北市區", "南市區", "滿城縣", "清苑縣", "淶水縣", "阜平縣", "徐水縣", "定興縣", "唐縣", "高陽縣", "容城縣", "淶源縣", "望都縣", "安新縣", "易縣", "曲陽縣", "蠡縣", "順平縣", "博野", "雄縣", "涿州市", "定州市", "安國市", "高碑店市"]
	    }, {
	        "name": "張家口",
	        "area": ["橋東區", "橋西區", "宣化區", "下花園區", "宣化縣", "張北縣", "康保縣", "沽源縣", "尚義縣", "蔚縣", "陽原縣", "懷安縣", "萬全縣", "懷來縣", "涿鹿縣", "赤城縣", "崇禮縣"]
	    }, {
	        "name": "承德",
	        "area": ["雙橋區", "雙灤區", "鷹手營子礦區", "承德縣", "興隆縣", "平泉縣", "灤平縣", "隆化縣", "豐寧滿族自治縣", "寬城滿族自治縣", "圍場滿族蒙古族自治縣"]
	    }, {
	        "name": "滄州",
	        "area": ["新華區", "運河區", "滄縣", "青縣", "東光縣", "海興縣", "鹽山縣", "肅寧縣", "南皮縣", "吳橋縣", "獻縣", "孟村回族自治縣", "泊頭市", "任丘市", "黃驊市", "河間市"]
	    }, {
	        "name": "廊坊",
	        "area": ["安次區", "固安縣", "永清縣", "香河縣", "大城縣", "文安縣", "大廠回族自治縣", "霸州市", "三河市"]
	    }, {
	        "name": "衡水",
	        "area": ["桃城區", "棗強縣", "武邑縣", "武強縣", "饒陽縣", "安平縣", "故城縣", "景縣", "阜城縣", "冀州市", "深州市"]
	    }]
	}, {
	    "name": "山西",
	    "city": [{
	        "name": "太原",
	        "area": ["小店區", "迎澤區", "杏花嶺區", "尖草坪區", "萬柏林區", "晉源區", "清徐縣", "陽曲縣", "婁煩縣", "古交市"]
	    }, {
	        "name": "大同",
	        "area": ["城區", "礦區", "南郊區", "新榮區", "陽高縣", "天鎮縣", "廣靈縣", "靈丘縣", "渾源縣", "左雲縣", "大同縣"]
	    }, {
	        "name": "陽泉",
	        "area": ["城區", "礦區", "郊區", "平定縣", "盂縣"]
	    }, {
	        "name": "長治",
	        "area": ["城區", "郊區", "長治縣", "襄垣縣", "屯留縣", "平順縣", "黎城縣", "壺關縣", "長子縣", "武鄉縣", "沁縣", "沁源縣", "潞城市"]
	    }, {
	        "name": "晉城",
	        "area": ["城區", "沁水縣", "陽城縣", "陵川縣", "澤州縣", "高平市"]
	    }, {
	        "name": "朔州",
	        "area": ["朔城區", "平魯區", "山陰縣", "應縣", "右玉縣", "懷仁縣"]
	    }, {
	        "name": "忻州",
	        "area": ["忻府區", "原平市", "定襄縣", "五臺縣", "代縣", "繁峙縣", "寧武縣", "靜樂縣", "神池縣", "五寨縣", "岢嵐縣", "河曲縣", "保德縣", "偏關縣"]
	    }, {
	        "name": "呂梁",
	        "area": ["離石區", "孝義市", "汾陽市", "文水縣", "交城縣", "興縣", "臨縣", "柳林縣", "石樓縣", "嵐縣", "方山縣", "中陽縣", "交口縣"]
	    }, {
	        "name": "晉中",
	        "area": ["榆次市", "介休市", "榆社縣", "左權縣", "和順縣", "昔陽縣", "壽陽縣", "太穀縣", "祁縣", "平遙縣", "靈石縣"]
	    }, {
	        "name": "臨汾",
	        "area": ["臨汾市", "侯馬市", "霍州市", "曲沃縣", "翼城縣", "襄汾縣", "洪洞縣", "古縣", "安澤縣", "浮山縣", "吉縣", "鄉寧縣", "蒲縣", "大寧縣", "永和縣", "隰縣", "汾西縣"]
	    }, {
	        "name": "運城",
	        "area": ["運城市", "永濟市", "河津市", "芮城縣", "臨猗縣", "萬榮縣", "新絳縣", "稷山縣", "聞喜縣", "夏縣", "絳縣", "平陸縣", "垣曲縣"]
	    }]
	}, {
	    "name": "內蒙古",
	    "city": [{
	        "name": "呼和浩特",
	        "area": ["新城區", "回民區", "玉泉區", "郊區", "土默特左旗", "托克托縣", "和林格爾縣", "清水河縣", "武川縣"]
	    }, {
	        "name": "包頭",
	        "area": ["東河區", "昆都倫區", "青山區", "石拐礦區", "白雲礦區", "郊區", "土默特右旗", "固陽縣", "達爾罕茂明安聯合旗"]
	    }, {
	        "name": "烏海",
	        "area": ["海勃灣區", "海南區", "烏達區"]
	    }, {
	        "name": "赤峰",
	        "area": ["紅山區", "元寶山區", "松山區", "阿魯科爾沁旗", "巴林左旗", "巴林右旗", "林西縣", "克什克騰旗", "翁牛特旗", "喀喇沁旗", "寧城縣", "敖漢旗"]
	    }, {
	        "name": "呼倫貝爾",
	        "area": ["海拉爾市", "滿洲里市", "紮蘭屯市", "牙克石市", "根河市", "額爾古納市", "阿榮旗", "莫力達瓦達斡爾族自治旗", "鄂倫春自治旗", "鄂溫克族自治旗", "新巴爾虎右旗", "新巴爾虎左旗", "陳巴爾虎旗"]
	    }, {
	        "name": "興安盟",
	        "area": ["烏蘭浩特市", "阿爾山市", "科爾沁右翼前旗", "科爾沁右翼中旗", "紮賚特旗", "突泉縣"]
	    }, {
	        "name": "通遼",
	        "area": ["科爾沁區", "霍林郭勒市", "科爾沁左翼中旗", "科爾沁左翼後旗", "開魯縣", "庫倫旗", "奈曼旗", "紮魯特旗"]
	    }, {
	        "name": "錫林郭勒盟",
	        "area": ["二連浩特市", "錫林浩特市", "阿巴嘎旗", "蘇尼特左旗", "蘇尼特右旗", "東烏珠穆沁旗", "西烏珠穆沁旗", "太僕寺旗", "鑲黃旗", "正鑲白旗", "正藍旗", "多倫縣"]
	    }, {
	        "name": "烏蘭察布盟",
	        "area": ["集寧市", "豐鎮市", "卓資縣", "化德縣", "商都縣", "興和縣", "涼城縣", "察哈爾右翼前旗", "察哈爾右翼中旗", "察哈爾右翼後旗", "四子王旗"]
	    }, {
	        "name": "伊克昭盟",
	        "area": ["東勝市", "達拉特旗", "准格爾旗", "鄂托克前旗", "鄂托克旗", "杭錦旗", "烏審旗", "伊金霍洛旗"]
	    }, {
	        "name": "巴彥淖爾盟",
	        "area": ["臨河市", "五原縣", "磴口縣", "烏拉特前旗", "烏拉特中旗", "烏拉特後旗", "杭錦後旗"]
	    }, {
	        "name": "阿拉善盟",
	        "area": ["阿拉善左旗", "阿拉善右旗", "額濟納旗"]
	    }]
	}, {
	    "name": "遼寧",
	    "city": [{
	        "name": "瀋陽",
	        "area": ["沈河區", "皇姑區", "和平區", "大東區", "鐵西區", "蘇家屯區", "東陵區", "於洪區", "新民市", "法庫縣", "遼中縣", "康平縣", "新城子區", "其他"]
	    }, {
	        "name": "大連",
	        "area": ["西崗區", "中山區", "沙河口區", "甘井子區", "旅順口區", "金州區", "瓦房店市", "普蘭店市", "莊河市", "長海縣", "其他"]
	    }, {
	        "name": "鞍山",
	        "area": ["鐵東區", "鐵西區", "立山區", "千山區", "海城市", "臺安縣", "岫岩滿族自治縣", "其他"]
	    }, {
	        "name": "撫順",
	        "area": ["順城區", "新撫區", "東洲區", "望花區", "撫順縣", "清原滿族自治縣", "新賓滿族自治縣", "其他"]
	    }, {
	        "name": "本溪",
	        "area": ["平山區", "明山區", "溪湖區", "南芬區", "本溪滿族自治縣", "桓仁滿族自治縣", "其他"]
	    }, {
	        "name": "丹東",
	        "area": ["振興區", "元寶區", "振安區", "東港市", "鳳城市", "寬甸滿族自治縣", "其他"]
	    }, {
	        "name": "錦州",
	        "area": ["太和區", "古塔區", "淩河區", "淩海市", "黑山縣", "義縣", "北寧市", "其他"]
	    }, {
	        "name": "營口",
	        "area": ["站前區", "西市區", "鮁魚圈區", "老邊區", "大石橋市", "蓋州市", "其他"]
	    }, {
	        "name": "阜新",
	        "area": ["海州區", "新邱區", "太平區", "清河門區", "細河區", "彰武縣", "阜新蒙古族自治縣", "其他"]
	    }, {
	        "name": "遼陽",
	        "area": ["白塔區", "文聖區", "宏偉區", "太子河區", "弓長嶺區", "燈塔市", "遼陽縣", "其他"]
	    }, {
	        "name": "盤錦",
	        "area": ["雙臺子區", "興隆臺區", "盤山縣", "大窪縣", "其他"]
	    }, {
	        "name": "鐵嶺",
	        "area": ["銀州區", "清河區", "調兵山市", "開原市", "鐵嶺縣", "昌圖縣", "西豐縣", "其他"]
	    }, {
	        "name": "朝陽",
	        "area": ["雙塔區", "龍城區", "淩源市", "北票市", "朝陽縣", "建平縣", "喀喇沁左翼蒙古族自治縣", "其他"]
	    }, {
	        "name": "葫蘆島",
	        "area": ["龍港區", "南票區", "連山區", "興城市", "綏中縣", "建昌縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "吉林",
	    "city": [{
	        "name": "長春",
	        "area": ["朝陽區", "寬城區", "二道區", "南關區", "綠園區", "雙陽區", "九臺市", "榆樹市", "德惠市", "農安縣", "其他"]
	    }, {
	        "name": "吉林",
	        "area": ["船營區", "昌邑區", "龍潭區", "豐滿區", "舒蘭市", "樺甸市", "蛟河市", "磐石市", "永吉縣", "其他"]
	    }, {
	        "name": "四平",
	        "area": ["鐵西區", "鐵東區", "公主嶺市", "雙遼市", "梨樹縣", "伊通滿族自治縣", "其他"]
	    }, {
	        "name": "遼源",
	        "area": ["龍山區", "西安區", "東遼縣", "東豐縣", "其他"]
	    }, {
	        "name": "通化",
	        "area": ["東昌區", "二道江區", "梅河口市", "集安市", "通化縣", "輝南縣", "柳河縣", "其他"]
	    }, {
	        "name": "白山",
	        "area": ["八道江區", "江源區", "臨江市", "靖宇縣", "撫松縣", "長白朝鮮族自治縣", "其他"]
	    }, {
	        "name": "松原",
	        "area": ["寧江區", "乾安縣", "長嶺縣", "扶餘縣", "前郭爾羅斯蒙古族自治縣", "其他"]
	    }, {
	        "name": "白城",
	        "area": ["洮北區", "大安市", "洮南市", "鎮賚縣", "通榆縣", "其他"]
	    }, {
	        "name": "延邊朝鮮族自治州",
	        "area": ["延吉市", "圖們市", "敦化市", "龍井市", "琿春市", "和龍市", "安圖縣", "汪清縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "黑龍江",
	    "city": [{
	        "name": "哈爾濱",
	        "area": ["松北區", "道裏區", "南崗區", "平房區", "香坊區", "道外區", "呼蘭區", "阿城區", "雙城市", "尚志市", "五常市", "賓縣", "方正縣", "通河縣", "巴彥縣", "延壽縣", "木蘭縣", "依蘭縣", "其他"]
	    }, {
	        "name": "齊齊哈爾",
	        "area": ["龍沙區", "昂昂溪區", "鐵鋒區", "建華區", "富拉爾基區", "碾子山區", "梅裏斯達斡爾族區", "訥河市", "富裕縣", "拜泉縣", "甘南縣", "依安縣", "克山縣", "泰來縣", "克東縣", "龍江縣", "其他"]
	    }, {
	        "name": "鶴崗",
	        "area": ["興山區", "工農區", "南山區", "興安區", "向陽區", "東山區", "蘿北縣", "綏濱縣", "其他"]
	    }, {
	        "name": "雙鴨山",
	        "area": ["尖山區", "嶺東區", "四方臺區", "寶山區", "集賢縣", "寶清縣", "友誼縣", "饒河縣", "其他"]
	    }, {
	        "name": "雞西",
	        "area": ["雞冠區", "恒山區", "城子河區", "滴道區", "梨樹區", "麻山區", "密山市", "虎林市", "雞東縣", "其他"]
	    }, {
	        "name": "大慶",
	        "area": ["薩爾圖區", "紅崗區", "龍鳳區", "讓胡路區", "大同區", "林甸縣", "肇州縣", "肇源縣", "杜爾伯特蒙古族自治縣", "其他"]
	    }, {
	        "name": "伊春",
	        "area": ["伊春區", "帶嶺區", "南岔區", "金山屯區", "西林區", "美溪區", "烏馬河區", "翠巒區", "友好區", "上甘嶺區", "五營區", "紅星區", "新青區", "湯旺河區", "烏伊嶺區", "鐵力市", "嘉蔭縣", "其他"]
	    }, {
	        "name": "牡丹江",
	        "area": ["愛民區", "東安區", "陽明區", "西安區", "綏芬河市", "寧安市", "海林市", "穆棱市", "林口縣", "東寧縣", "其他"]
	    }, {
	        "name": "佳木斯",
	        "area": ["向陽區", "前進區", "東風區", "郊區", "同江市", "富錦市", "樺川縣", "撫遠縣", "樺南縣", "湯原縣", "其他"]
	    }, {
	        "name": "七臺河",
	        "area": ["桃山區", "新興區", "茄子河區", "勃利縣", "其他"]
	    }, {
	        "name": "黑河",
	        "area": ["愛輝區", "北安市", "五大連池市", "遜克縣", "嫩江縣", "孫吳縣", "其他"]
	    }, {
	        "name": "綏化",
	        "area": ["北林區", "安達市", "肇東市", "海倫市", "綏棱縣", "蘭西縣", "明水縣", "青岡縣", "慶安縣", "望奎縣", "其他"]
	    }, {
	        "name": "大興安嶺地區",
	        "area": ["呼瑪縣", "塔河縣", "漠河縣", "大興安嶺轄區", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "上海",
	    "city": [{
	        "name": "上海",
	        "area": ["黃浦區", "盧灣區", "徐匯區", "長寧區", "靜安區", "普陀區", "閘北區", "虹口區", "楊浦區", "寶山區", "閔行區", "嘉定區", "松江區", "金山區", "青浦區", "南匯區", "奉賢區", "浦東新區", "崇明縣", "其他"]
	    }]
	}, {
	    "name": "江蘇",
	    "city": [{
	        "name": "南京",
	        "area": ["玄武區", "白下區", "秦淮區", "建鄴區", "鼓樓區", "下關區", "棲霞區", "雨花台區", "浦口區", "江寧區", "六合區", "溧水縣", "高淳縣", "其他"]
	    }, {
	        "name": "蘇州",
	        "area": ["金閶區", "平江區", "滄浪區", "虎丘區", "吳中區", "相城區", "常熟市", "張家港市", "昆山市", "吳江市", "太倉市", "其他"]
	    }, {
	        "name": "無錫",
	        "area": ["崇安區", "南長區", "北塘區", "濱湖區", "錫山區", "惠山區", "江陰市", "宜興市", "其他"]
	    }, {
	        "name": "常州",
	        "area": ["鐘樓區", "天寧區", "戚墅堰區", "新北區", "武進區", "金壇市", "溧陽市", "其他"]
	    }, {
	        "name": "鎮江",
	        "area": ["京口區", "潤州區", "丹徒區", "丹陽市", "揚中市", "句容市", "其他"]
	    }, {
	        "name": "南通",
	        "area": ["崇川區", "港閘區", "通州市", "如皋市", "海門市", "啟東市", "海安縣", "如東縣", "其他"]
	    }, {
	        "name": "泰州",
	        "area": ["海陵區", "高港區", "薑堰市", "泰興市", "靖江市", "興化市", "其他"]
	    }, {
	        "name": "揚州",
	        "area": ["廣陵區", "維揚區", "邗江區", "江都市", "儀征市", "高郵市", "寶應縣", "其他"]
	    }, {
	        "name": "鹽城",
	        "area": ["亭湖區", "鹽都區", "大豐市", "東臺市", "建湖縣", "射陽縣", "阜寧縣", "濱海縣", "響水縣", "其他"]
	    }, {
	        "name": "連雲港",
	        "area": ["新浦區", "海州區", "連雲區", "東海縣", "灌雲縣", "贛榆縣", "灌南縣", "其他"]
	    }, {
	        "name": "徐州",
	        "area": ["雲龍區", "鼓樓區", "九裏區", "泉山區", "賈汪區", "邳州市", "新沂市", "銅山縣", "睢寧縣", "沛縣", "豐縣", "其他"]
	    }, {
	        "name": "淮安",
	        "area": ["清河區", "清浦區", "楚州區", "淮陰區", "漣水縣", "洪澤縣", "金湖縣", "盱眙縣", "其他"]
	    }, {
	        "name": "宿遷",
	        "area": ["宿城區", "宿豫區", "沭陽縣", "泗陽縣", "泗洪縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "浙江",
	    "city": [{
	        "name": "杭州",
	        "area": ["拱墅區", "西湖區", "上城區", "下城區", "江幹區", "濱江區", "餘杭區", "蕭山區", "建德市", "富陽市", "臨安市", "桐廬縣", "淳安縣", "其他"]
	    }, {
	        "name": "寧波",
	        "area": ["海曙區", "江東區", "江北區", "鎮海區", "北侖區", "鄞州區", "餘姚市", "慈溪市", "奉化市", "寧海縣", "象山縣", "其他"]
	    }, {
	        "name": "溫州",
	        "area": ["鹿城區", "龍灣區", "甌海區", "瑞安市", "樂清市", "永嘉縣", "洞頭縣", "平陽縣", "蒼南縣", "文成縣", "泰順縣", "其他"]
	    }, {
	        "name": "嘉興",
	        "area": ["秀城區", "秀洲區", "海寧市", "平湖市", "桐鄉市", "嘉善縣", "海鹽縣", "其他"]
	    }, {
	        "name": "湖州",
	        "area": ["吳興區", "南潯區", "長興縣", "德清縣", "安吉縣", "其他"]
	    }, {
	        "name": "紹興",
	        "area": ["越城區", "諸暨市", "上虞市", "嵊州市", "紹興縣", "新昌縣", "其他"]
	    }, {
	        "name": "金華",
	        "area": ["婺城區", "金東區", "蘭溪市", "義烏市", "東陽市", "永康市", "武義縣", "浦江縣", "磐安縣", "其他"]
	    }, {
	        "name": "衢州",
	        "area": ["柯城區", "衢江區", "江山市", "龍遊縣", "常山縣", "開化縣", "其他"]
	    }, {
	        "name": "舟山",
	        "area": ["定海區", "普陀區", "岱山縣", "嵊泗縣", "其他"]
	    }, {
	        "name": "臺州",
	        "area": ["椒江區", "黃岩區", "路橋區", "臨海市", "溫嶺市", "玉環縣", "天臺縣", "仙居縣", "三門縣", "其他"]
	    }, {
	        "name": "麗水",
	        "area": ["蓮都區", "龍泉市", "縉雲縣", "青田縣", "雲和縣", "遂昌縣", "松陽縣", "慶元縣", "景寧佘族自治縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "安徽",
	    "city": [{
	        "name": "合肥",
	        "area": ["廬陽區", "瑤海區", "蜀山區", "包河區", "長豐縣", "肥東縣", "肥西縣", "其他"]
	    }, {
	        "name": "蕪湖",
	        "area": ["鏡湖區", "弋江區", "鳩江區", "三山區", "蕪湖縣", "南陵縣", "繁昌縣", "其他"]
	    }, {
	        "name": "蚌埠",
	        "area": ["蚌山區", "龍子湖區", "禹會區", "淮上區", "懷遠縣", "固鎮縣", "五河縣", "其他"]
	    }, {
	        "name": "淮南",
	        "area": ["田家庵區", "大通區", "謝家集區", "八公山區", "潘集區", "鳳臺縣", "其他"]
	    }, {
	        "name": "馬鞍山",
	        "area": ["雨山區", "花山區", "金家莊區", "當塗縣", "其他"]
	    }, {
	        "name": "淮北",
	        "area": ["相山區", "杜集區", "烈山區", "濉溪縣", "其他"]
	    }, {
	        "name": "銅陵",
	        "area": ["銅官山區", "獅子山區", "郊區", "銅陵縣", "其他"]
	    }, {
	        "name": "安慶",
	        "area": ["迎江區", "大觀區", "宜秀區", "桐城市", "宿松縣", "樅陽縣", "太湖縣", "懷寧縣", "嶽西縣", "望江縣", "潛山縣", "其他"]
	    }, {
	        "name": "黃山",
	        "area": ["屯溪區", "黃山區", "徽州區", "休寧縣", "歙縣", "祁門縣", "黟縣", "其他"]
	    }, {
	        "name": "滁州",
	        "area": ["琅琊區", "南譙區", "天長市", "明光市", "全椒縣", "來安縣", "定遠縣", "鳳陽縣", "其他"]
	    }, {
	        "name": "阜陽",
	        "area": ["潁州區", "潁東區", "潁泉區", "界首市", "臨泉縣", "潁上縣", "阜南縣", "太和縣", "其他"]
	    }, {
	        "name": "宿州",
	        "area": ["埇橋區", "蕭縣", "泗縣", "碭山縣", "靈璧縣", "其他"]
	    }, {
	        "name": "巢湖",
	        "area": ["居巢區", "含山縣", "無為縣", "廬江縣", "和縣", "其他"]
	    }, {
	        "name": "六安",
	        "area": ["金安區", "裕安區", "壽縣", "霍山縣", "霍邱縣", "舒城縣", "金寨縣", "其他"]
	    }, {
	        "name": "亳州",
	        "area": ["譙城區", "利辛縣", "渦陽縣", "蒙城縣", "其他"]
	    }, {
	        "name": "池州",
	        "area": ["貴池區", "東至縣", "石臺縣", "青陽縣", "其他"]
	    }, {
	        "name": "宣城",
	        "area": ["宣州區", "寧國市", "廣德縣", "郎溪縣", "涇縣", "旌德縣", "績溪縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "福建",
	    "city": [{
	        "name": "福州",
	        "area": ["鼓樓區", "臺江區", "倉山區", "馬尾區", "晉安區", "福清市", "長樂市", "閩侯縣", "閩清縣", "永泰縣", "連江縣", "羅源縣", "平潭縣", "其他"]
	    }, {
	        "name": "廈門",
	        "area": ["思明區", "海滄區", "湖裏區", "集美區", "同安區", "翔安區", "其他"]
	    }, {
	        "name": "莆田",
	        "area": ["城廂區", "涵江區", "荔城區", "秀嶼區", "仙遊縣", "其他"]
	    }, {
	        "name": "三明",
	        "area": ["梅列區", "三元區", "永安市", "明溪縣", "將樂縣", "大田縣", "寧化縣", "建寧縣", "沙縣", "尤溪縣", "清流縣", "泰寧縣", "其他"]
	    }, {
	        "name": "泉州",
	        "area": ["鯉城區", "豐澤區", "洛江區", "泉港區", "石獅市", "晉江市", "南安市", "惠安縣", "永春縣", "安溪縣", "德化縣", "金門縣", "其他"]
	    }, {
	        "name": "漳州",
	        "area": ["薌城區", "龍文區", "龍海市", "平和縣", "南靖縣", "詔安縣", "漳浦縣", "華安縣", "東山縣", "長泰縣", "雲霄縣", "其他"]
	    }, {
	        "name": "南平",
	        "area": ["延平區", "建甌市", "邵武市", "武夷山市", "建陽市", "松溪縣", "光澤縣", "順昌縣", "浦城縣", "政和縣", "其他"]
	    }, {
	        "name": "龍岩",
	        "area": ["新羅區", "漳平市", "長汀縣", "武平縣", "上杭縣", "永定縣", "連城縣", "其他"]
	    }, {
	        "name": "寧德",
	        "area": ["蕉城區", "福安市", "福鼎市", "壽寧縣", "霞浦縣", "柘榮縣", "屏南縣", "古田縣", "周寧縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "江西",
	    "city": [{
	        "name": "南昌",
	        "area": ["東湖區", "西湖區", "青雲譜區", "灣裏區", "青山湖區", "新建縣", "南昌縣", "進賢縣", "安義縣", "其他"]
	    }, {
	        "name": "景德鎮",
	        "area": ["珠山區", "昌江區", "樂平市", "浮梁縣", "其他"]
	    }, {
	        "name": "萍鄉",
	        "area": ["安源區", "湘東區", "蓮花縣", "上栗縣", "蘆溪縣", "其他"]
	    }, {
	        "name": "九江",
	        "area": ["潯陽區", "廬山區", "瑞昌市", "九江縣", "星子縣", "武寧縣", "彭澤縣", "永修縣", "修水縣", "湖口縣", "德安縣", "都昌縣", "其他"]
	    }, {
	        "name": "新餘",
	        "area": ["渝水區", "分宜縣", "其他"]
	    }, {
	        "name": "鷹潭",
	        "area": ["月湖區", "貴溪市", "餘江縣", "其他"]
	    }, {
	        "name": "贛州",
	        "area": ["章貢區", "瑞金市", "南康市", "石城縣", "安遠縣", "贛縣", "寧都縣", "尋烏縣", "興國縣", "定南縣", "上猶縣", "於都縣", "龍南縣", "崇義縣", "信豐縣", "全南縣", "大餘縣", "會昌縣", "其他"]
	    }, {
	        "name": "吉安",
	        "area": ["吉州區", "青原區", "井岡山市", "吉安縣", "永豐縣", "永新縣", "新幹縣", "泰和縣", "峽江縣", "遂川縣", "安福縣", "吉水縣", "萬安縣", "其他"]
	    }, {
	        "name": "宜春",
	        "area": ["袁州區", "豐城市", "樟樹市", "高安市", "銅鼓縣", "靖安縣", "宜豐縣", "奉新縣", "萬載縣", "上高縣", "其他"]
	    }, {
	        "name": "撫州",
	        "area": ["臨川區", "南豐縣", "樂安縣", "金溪縣", "南城縣", "東鄉縣", "資溪縣", "宜黃縣", "廣昌縣", "黎川縣", "崇仁縣", "其他"]
	    }, {
	        "name": "上饒",
	        "area": ["信州區", "德興市", "上饒縣", "廣豐縣", "鄱陽縣", "婺源縣", "鉛山縣", "餘幹縣", "橫峰縣", "弋陽縣", "玉山縣", "萬年縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "山東",
	    "city": [{
	        "name": "濟南",
	        "area": ["市中區", "曆下區", "天橋區", "槐蔭區", "曆城區", "長清區", "章丘市", "平陰縣", "濟陽縣", "商河縣", "其他"]
	    }, {
	        "name": "青島",
	        "area": ["市南區", "市北區", "城陽區", "四方區", "李滄區", "黃島區", "嶗山區", "膠南市", "膠州市", "平度市", "萊西市", "即墨市", "其他"]
	    }, {
	        "name": "淄博",
	        "area": ["張店區", "臨淄區", "淄川區", "博山區", "周村區", "桓臺縣", "高青縣", "沂源縣", "其他"]
	    }, {
	        "name": "棗莊",
	        "area": ["市中區", "山亭區", "嶧城區", "臺兒莊區", "薛城區", "滕州市", "其他"]
	    }, {
	        "name": "東營",
	        "area": ["東營區", "河口區", "墾利縣", "廣饒縣", "利津縣", "其他"]
	    }, {
	        "name": "煙臺",
	        "area": ["芝罘區", "福山區", "牟平區", "萊山區", "龍口市", "萊陽市", "萊州市", "招遠市", "蓬萊市", "棲霞市", "海陽市", "長島縣", "其他"]
	    }, {
	        "name": "濰坊",
	        "area": ["濰城區", "寒亭區", "坊子區", "奎文區", "青州市", "諸城市", "壽光市", "安丘市", "高密市", "昌邑市", "昌樂縣", "臨朐縣", "其他"]
	    }, {
	        "name": "濟寧",
	        "area": ["市中區", "任城區", "曲阜市", "兗州市", "鄒城市", "魚臺縣", "金鄉縣", "嘉祥縣", "微山縣", "汶上縣", "泗水縣", "梁山縣", "其他"]
	    }, {
	        "name": "泰安",
	        "area": ["泰山區", "岱嶽區", "新泰市", "肥城市", "寧陽縣", "東平縣", "其他"]
	    }, {
	        "name": "威海",
	        "area": ["環翠區", "乳山市", "文登市", "榮成市", "其他"]
	    }, {
	        "name": "日照",
	        "area": ["東港區", "嵐山區", "五蓮縣", "莒縣", "其他"]
	    }, {
	        "name": "萊蕪",
	        "area": ["萊城區", "鋼城區", "其他"]
	    }, {
	        "name": "臨沂",
	        "area": ["蘭山區", "羅莊區", "河東區", "沂南縣", "郯城縣", "沂水縣", "蒼山縣", "費縣", "平邑縣", "莒南縣", "蒙陰縣", "臨沭縣", "其他"]
	    }, {
	        "name": "德州",
	        "area": ["德城區", "樂陵市", "禹城市", "陵縣", "寧津縣", "齊河縣", "武城縣", "慶雲縣", "平原縣", "夏津縣", "臨邑縣", "其他"]
	    }, {
	        "name": "聊城",
	        "area": ["東昌府區", "臨清市", "高唐縣", "陽穀縣", "茌平縣", "莘縣", "東阿縣", "冠縣", "其他"]
	    }, {
	        "name": "濱州",
	        "area": ["濱城區", "鄒平縣", "沾化縣", "惠民縣", "博興縣", "陽信縣", "無棣縣", "其他"]
	    }, {
	        "name": "菏澤",
	        "area": ["牡丹區", "鄄城縣", "單縣", "鄆城縣", "曹縣", "定陶縣", "巨野縣", "東明縣", "成武縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "河南",
	    "city": [{
	        "name": "鄭州",
	        "area": ["中原區", "金水區", "二七區", "管城回族區", "上街區", "惠濟區", "鞏義市", "新鄭市", "新密市", "登封市", "滎陽市", "中牟縣", "其他"]
	    }, {
	        "name": "開封",
	        "area": ["鼓樓區", "龍亭區", "順河回族區", "禹王臺區", "金明區", "開封縣", "尉氏縣", "蘭考縣", "杞縣", "通許縣", "其他"]
	    }, {
	        "name": "洛陽",
	        "area": ["西工區", "老城區", "澗西區", "瀍河回族區", "洛龍區", "吉利區", "偃師市", "孟津縣", "汝陽縣", "伊川縣", "洛寧縣", "嵩縣", "宜陽縣", "新安縣", "欒川縣", "其他"]
	    }, {
	        "name": "平頂山",
	        "area": ["新華區", "衛東區", "湛河區", "石龍區", "汝州市", "舞鋼市", "寶豐縣", "葉縣", "郟縣", "魯山縣", "其他"]
	    }, {
	        "name": "安陽",
	        "area": ["北關區", "文峰區", "殷都區", "龍安區", "林州市", "安陽縣", "滑縣", "內黃縣", "湯陰縣", "其他"]
	    }, {
	        "name": "鶴壁",
	        "area": ["淇濱區", "山城區", "鶴山區", "浚縣", "淇縣", "其他"]
	    }, {
	        "name": "新鄉",
	        "area": ["衛濱區", "紅旗區", "鳳泉區", "牧野區", "衛輝市", "輝縣市", "新鄉縣", "獲嘉縣", "原陽縣", "長垣縣", "封丘縣", "延津縣", "其他"]
	    }, {
	        "name": "焦作",
	        "area": ["解放區", "中站區", "馬村區", "山陽區", "沁陽市", "孟州市", "修武縣", "溫縣", "武陟縣", "博愛縣", "其他"]
	    }, {
	        "name": "濮陽",
	        "area": ["華龍區", "濮陽縣", "南樂縣", "臺前縣", "清豐縣", "範縣", "其他"]
	    }, {
	        "name": "許昌",
	        "area": ["魏都區", "禹州市", "長葛市", "許昌縣", "鄢陵縣", "襄城縣", "其他"]
	    }, {
	        "name": "漯河",
	        "area": ["源匯區", "郾城區", "召陵區", "臨潁縣", "舞陽縣", "其他"]
	    }, {
	        "name": "三門峽",
	        "area": ["湖濱區", "義馬市", "靈寶市", "澠池縣", "盧氏縣", "陝縣", "其他"]
	    }, {
	        "name": "南陽",
	        "area": ["臥龍區", "宛城區", "鄧州市", "桐柏縣", "方城縣", "淅川縣", "鎮平縣", "唐河縣", "南召縣", "內鄉縣", "新野縣", "社旗縣", "西峽縣", "其他"]
	    }, {
	        "name": "商丘",
	        "area": ["梁園區", "睢陽區", "永城市", "寧陵縣", "虞城縣", "民權縣", "夏邑縣", "柘城縣", "睢縣", "其他"]
	    }, {
	        "name": "信陽",
	        "area": ["浉河區", "平橋區", "潢川縣", "淮濱縣", "息縣", "新縣", "商城縣", "固始縣", "羅山縣", "光山縣", "其他"]
	    }, {
	        "name": "周口",
	        "area": ["川匯區", "項城市", "商水縣", "淮陽縣", "太康縣", "鹿邑縣", "西華縣", "扶溝縣", "沈丘縣", "鄲城縣", "其他"]
	    }, {
	        "name": "駐馬店",
	        "area": ["驛城區", "確山縣", "新蔡縣", "上蔡縣", "西平縣", "泌陽縣", "平輿縣", "汝南縣", "遂平縣", "正陽縣", "其他"]
	    }, {
	        "name": "焦作",
	        "area": ["濟源市", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "湖北",
	    "city": [{
	        "name": "武漢",
	        "area": ["江岸區", "武昌區", "江漢區", "硚口區", "漢陽區", "青山區", "洪山區", "東西湖區", "漢南區", "蔡甸區", "江夏區", "黃陂區", "新洲區", "其他"]
	    }, {
	        "name": "黃石",
	        "area": ["黃石港區", "西塞山區", "下陸區", "鐵山區", "大冶市", "陽新縣", "其他"]
	    }, {
	        "name": "十堰",
	        "area": ["張灣區", "茅箭區", "丹江口市", "鄖縣", "竹山縣", "房縣", "鄖西縣", "竹溪縣", "其他"]
	    }, {
	        "name": "荊州",
	        "area": ["沙市區", "荊州區", "洪湖市", "石首市", "松滋市", "監利縣", "公安縣", "江陵縣", "其他"]
	    }, {
	        "name": "宜昌",
	        "area": ["西陵區", "伍家崗區", "點軍區", "猇亭區", "夷陵區", "宜都市", "當陽市", "枝江市", "秭歸縣", "遠安縣", "興山縣", "五峰土家族自治縣", "長陽土家族自治縣", "其他"]
	    }, {
	        "name": "襄樊",
	        "area": ["襄城區", "樊城區", "襄陽區", "老河口市", "棗陽市", "宜城市", "南漳縣", "穀城縣", "保康縣", "其他"]
	    }, {
	        "name": "鄂州",
	        "area": ["鄂城區", "華容區", "梁子湖區", "其他"]
	    }, {
	        "name": "荊門",
	        "area": ["東寶區", "掇刀區", "鐘祥市", "京山縣", "沙洋縣", "其他"]
	    }, {
	        "name": "孝感",
	        "area": ["孝南區", "應城市", "安陸市", "漢川市", "雲夢縣", "大悟縣", "孝昌縣", "其他"]
	    }, {
	        "name": "黃岡",
	        "area": ["黃州區", "麻城市", "武穴市", "紅安縣", "羅田縣", "浠水縣", "蘄春縣", "黃梅縣", "英山縣", "團風縣", "其他"]
	    }, {
	        "name": "鹹寧",
	        "area": ["鹹安區", "赤壁市", "嘉魚縣", "通山縣", "崇陽縣", "通城縣", "其他"]
	    }, {
	        "name": "隨州",
	        "area": ["曾都區", "廣水市", "其他"]
	    }, {
	        "name": "恩施土家族苗族自治州",
	        "area": ["恩施市", "利川市", "建始縣", "來鳳縣", "巴東縣", "鶴峰縣", "宣恩縣", "鹹豐縣", "其他"]
	    }, {
	        "name": "仙桃",
	        "area": ["仙桃"]
	    }, {
	        "name": "天門",
	        "area": ["天門"]
	    }, {
	        "name": "潛江",
	        "area": ["潛江"]
	    }, {
	        "name": "神農架林區",
	        "area": ["神農架林區"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "湖南",
	    "city": [{
	        "name": "長沙",
	        "area": ["嶽麓區", "芙蓉區", "天心區", "開福區", "雨花區", "瀏陽市", "長沙縣", "望城縣", "寧鄉縣", "其他"]
	    }, {
	        "name": "株洲",
	        "area": ["天元區", "荷塘區", "蘆淞區", "石峰區", "醴陵市", "株洲縣", "炎陵縣", "茶陵縣", "攸縣", "其他"]
	    }, {
	        "name": "湘潭",
	        "area": ["嶽塘區", "雨湖區", "湘鄉市", "韶山市", "湘潭縣", "其他"]
	    }, {
	        "name": "衡陽",
	        "area": ["雁峰區", "珠暉區", "石鼓區", "蒸湘區", "南嶽區", "耒陽市", "常寧市", "衡陽縣", "衡東縣", "衡山縣", "衡南縣", "祁東縣", "其他"]
	    }, {
	        "name": "邵陽",
	        "area": ["雙清區", "大祥區", "北塔區", "武岡市", "邵東縣", "洞口縣", "新邵縣", "綏寧縣", "新寧縣", "邵陽縣", "隆回縣", "城步苗族自治縣", "其他"]
	    }, {
	        "name": "岳陽",
	        "area": ["岳陽樓區", "雲溪區", "君山區", "臨湘市", "汨羅市", "岳陽縣", "湘陰縣", "平江縣", "華容縣", "其他"]
	    }, {
	        "name": "常德",
	        "area": ["武陵區", "鼎城區", "津市市", "澧縣", "臨澧縣", "桃源縣", "漢壽縣", "安鄉縣", "石門縣", "其他"]
	    }, {
	        "name": "張家界",
	        "area": ["永定區", "武陵源區", "慈利縣", "桑植縣", "其他"]
	    }, {
	        "name": "益陽",
	        "area": ["赫山區", "資陽區", "沅江市", "桃江縣", "南縣", "安化縣", "其他"]
	    }, {
	        "name": "郴州",
	        "area": ["北湖區", "蘇仙區", "資興市", "宜章縣", "汝城縣", "安仁縣", "嘉禾縣", "臨武縣", "桂東縣", "永興縣", "桂陽縣", "其他"]
	    }, {
	        "name": "永州",
	        "area": ["冷水灘區", "零陵區", "祁陽縣", "藍山縣", "寧遠縣", "新田縣", "東安縣", "江永縣", "道縣", "雙牌縣", "江華瑤族自治縣", "其他"]
	    }, {
	        "name": "懷化",
	        "area": ["鶴城區", "洪江市", "會同縣", "沅陵縣", "辰溪縣", "漵浦縣", "中方縣", "新晃侗族自治縣", "芷江侗族自治縣", "通道侗族自治縣", "靖州苗族侗族自治縣", "麻陽苗族自治縣", "其他"]
	    }, {
	        "name": "婁底",
	        "area": ["婁星區", "冷水江市", "漣源市", "新化縣", "雙峰縣", "其他"]
	    }, {
	        "name": "湘西土家族苗族自治州",
	        "area": ["吉首市", "古丈縣", "龍山縣", "永順縣", "鳳凰縣", "瀘溪縣", "保靖縣", "花垣縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "廣東",
	    "city": [{
	        "name": "廣州",
	        "area": ["越秀區", "荔灣區", "海珠區", "天河區", "白雲區", "黃埔區", "番禺區", "花都區", "南沙區", "蘿崗區", "增城市", "從化市", "其他"]
	    }, {
	        "name": "深圳",
	        "area": ["福田區", "羅湖區", "南山區", "寶安區", "龍崗區", "鹽田區", "其他"]
	    }, {
	        "name": "東莞",
	        "area": ["莞城", "常平", "塘廈", "塘廈", "塘廈", "其他"]
	    }, {
	        "name": "中山",
	        "area": ["中山"]
	    }, {
	        "name": "潮州",
	        "area": ["湘橋區", "潮安縣", "饒平縣", "其他"]
	    }, {
	        "name": "揭陽",
	        "area": ["榕城區", "揭東縣", "揭西縣", "惠來縣", "普寧市", "其他"]
	    }, {
	        "name": "雲浮",
	        "area": ["雲城區", "新興縣", "鬱南縣", "雲安縣", "羅定市", "其他"]
	    }, {
	        "name": "珠海",
	        "area": ["香洲區", "斗門區", "金灣區", "其他"]
	    }, {
	        "name": "汕頭",
	        "area": ["金平區", "濠江區", "龍湖區", "潮陽區", "潮南區", "澄海區", "南澳縣", "其他"]
	    }, {
	        "name": "韶關",
	        "area": ["湞江區", "武江區", "曲江區", "樂昌市", "南雄市", "始興縣", "仁化縣", "翁源縣", "新豐縣", "乳源瑤族自治縣", "其他"]
	    }, {
	        "name": "佛山",
	        "area": ["禪城區", "南海區", "順德區", "三水區", "高明區", "其他"]
	    }, {
	        "name": "江門",
	        "area": ["蓬江區", "江海區", "新會區", "恩平市", "臺山市", "開平市", "鶴山市", "其他"]
	    }, {
	        "name": "湛江",
	        "area": ["赤坎區", "霞山區", "坡頭區", "麻章區", "吳川市", "廉江市", "雷州市", "遂溪縣", "徐聞縣", "其他"]
	    }, {
	        "name": "茂名",
	        "area": ["茂南區", "茂港區", "化州市", "信宜市", "高州市", "電白縣", "其他"]
	    }, {
	        "name": "肇慶",
	        "area": ["端州區", "鼎湖區", "高要市", "四會市", "廣寧縣", "懷集縣", "封開縣", "德慶縣", "其他"]
	    }, {
	        "name": "惠州",
	        "area": ["惠城區", "惠陽區", "博羅縣", "惠東縣", "龍門縣", "其他"]
	    }, {
	        "name": "梅州",
	        "area": ["梅江區", "興寧市", "梅縣", "大埔縣", "豐順縣", "五華縣", "平遠縣", "蕉嶺縣", "其他"]
	    }, {
	        "name": "汕尾",
	        "area": ["城區", "陸豐市", "海豐縣", "陸河縣", "其他"]
	    }, {
	        "name": "河源",
	        "area": ["源城區", "紫金縣", "龍川縣", "連平縣", "和平縣", "東源縣", "其他"]
	    }, {
	        "name": "陽江",
	        "area": ["江城區", "陽春市", "陽西縣", "陽東縣", "其他"]
	    }, {
	        "name": "清遠",
	        "area": ["清城區", "英德市", "連州市", "佛岡縣", "陽山縣", "清新縣", "連山壯族瑤族自治縣", "連南瑤族自治縣", "其他"]
	    }]
	}, {
	    "name": "廣西",
	    "city": [{
	        "name": "南寧",
	        "area": ["青秀區", "興寧區", "西鄉塘區", "良慶區", "江南區", "邕寧區", "武鳴縣", "隆安縣", "馬山縣", "上林縣", "賓陽縣", "橫縣", "其他"]
	    }, {
	        "name": "柳州",
	        "area": ["城中區", "魚峰區", "柳北區", "柳南區", "柳江縣", "柳城縣", "鹿寨縣", "融安縣", "融水苗族自治縣", "三江侗族自治縣", "其他"]
	    }, {
	        "name": "桂林",
	        "area": ["象山區", "秀峰區", "疊彩區", "七星區", "雁山區", "陽朔縣", "臨桂縣", "靈川縣", "全州縣", "平樂縣", "興安縣", "灌陽縣", "荔浦縣", "資源縣", "永福縣", "龍勝各族自治縣", "恭城瑤族自治縣", "其他"]
	    }, {
	        "name": "梧州",
	        "area": ["萬秀區", "蝶山區", "長洲區", "岑溪市", "蒼梧縣", "藤縣", "蒙山縣", "其他"]
	    }, {
	        "name": "北海",
	        "area": ["海城區", "銀海區", "鐵山港區", "合浦縣", "其他"]
	    }, {
	        "name": "防城港",
	        "area": ["港口區", "防城區", "東興市", "上思縣", "其他"]
	    }, {
	        "name": "欽州",
	        "area": ["欽南區", "欽北區", "靈山縣", "浦北縣", "其他"]
	    }, {
	        "name": "貴港",
	        "area": ["港北區", "港南區", "覃塘區", "桂平市", "平南縣", "其他"]
	    }, {
	        "name": "玉林",
	        "area": ["玉州區", "北流市", "容縣", "陸川縣", "博白縣", "興業縣", "其他"]
	    }, {
	        "name": "百色",
	        "area": ["右江區", "淩雲縣", "平果縣", "西林縣", "樂業縣", "德保縣", "田林縣", "田陽縣", "靖西縣", "田東縣", "那坡縣", "隆林各族自治縣", "其他"]
	    }, {
	        "name": "賀州",
	        "area": ["八步區", "鐘山縣", "昭平縣", "富川瑤族自治縣", "其他"]
	    }, {
	        "name": "河池",
	        "area": ["金城江區", "宜州市", "天峨縣", "鳳山縣", "南丹縣", "東蘭縣", "都安瑤族自治縣", "羅城仫佬族自治縣", "巴馬瑤族自治縣", "環江毛南族自治縣", "大化瑤族自治縣", "其他"]
	    }, {
	        "name": "來賓",
	        "area": ["興賓區", "合山市", "象州縣", "武宣縣", "忻城縣", "金秀瑤族自治縣", "其他"]
	    }, {
	        "name": "崇左",
	        "area": ["江州區", "憑祥市", "寧明縣", "扶綏縣", "龍州縣", "大新縣", "天等縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "海南",
	    "city": [{
	        "name": "海口",
	        "area": ["龍華區", "秀英區", "瓊山區", "美蘭區", "其他"]
	    }, {
	        "name": "三亞",
	        "area": ["三亞市", "其他"]
	    }, {
	        "name": "五指山",
	        "area": ["五指山"]
	    }, {
	        "name": "瓊海",
	        "area": ["瓊海"]
	    }, {
	        "name": "儋州",
	        "area": ["儋州"]
	    }, {
	        "name": "文昌",
	        "area": ["文昌"]
	    }, {
	        "name": "萬寧",
	        "area": ["萬寧"]
	    }, {
	        "name": "東方",
	        "area": ["東方"]
	    }, {
	        "name": "澄邁縣",
	        "area": ["澄邁縣"]
	    }, {
	        "name": "定安縣",
	        "area": ["定安縣"]
	    }, {
	        "name": "屯昌縣",
	        "area": ["屯昌縣"]
	    }, {
	        "name": "臨高縣",
	        "area": ["臨高縣"]
	    }, {
	        "name": "白沙黎族自治縣",
	        "area": ["白沙黎族自治縣"]
	    }, {
	        "name": "昌江黎族自治縣",
	        "area": ["昌江黎族自治縣"]
	    }, {
	        "name": "樂東黎族自治縣",
	        "area": ["樂東黎族自治縣"]
	    }, {
	        "name": "陵水黎族自治縣",
	        "area": ["陵水黎族自治縣"]
	    }, {
	        "name": "保亭黎族苗族自治縣",
	        "area": ["保亭黎族苗族自治縣"]
	    }, {
	        "name": "瓊中黎族苗族自治縣",
	        "area": ["瓊中黎族苗族自治縣"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "重慶",
	    "city": [{
	        "name": "重慶",
	        "area": ["渝中區", "大渡口區", "江北區", "南岸區", "北碚區", "渝北區", "巴南區", "長壽區", "雙橋區", "沙坪壩區", "萬盛區", "萬州區", "涪陵區", "黔江區", "永川區", "合川區", "江津區", "九龍坡區", "南川區", "綦江縣", "潼南縣", "榮昌縣", "璧山縣", "大足縣", "銅梁縣", "梁平縣", "開縣", "忠縣", "城口縣", "墊江縣", "武隆縣", "豐都縣", "奉節縣", "雲陽縣", "巫溪縣", "巫山縣", "石柱土家族自治縣", "秀山土家族苗族自治縣", "酉陽土家族苗族自治縣", "彭水苗族土家族自治縣", "其他"]
	    }]
	}, {
	    "name": "四川",
	    "city": [{
	        "name": "成都",
	        "area": ["青羊區", "錦江區", "金牛區", "武侯區", "成華區", "龍泉驛區", "青白江區", "新都區", "溫江區", "都江堰市", "彭州市", "邛崍市", "崇州市", "金堂縣", "郫縣", "新津縣", "雙流縣", "蒲江縣", "大邑縣", "其他"]
	    }, {
	        "name": "自貢",
	        "area": ["大安區", "自流井區", "貢井區", "沿灘區", "榮縣", "富順縣", "其他"]
	    }, {
	        "name": "攀枝花",
	        "area": ["仁和區", "米易縣", "鹽邊縣", "東區", "西區", "其他"]
	    }, {
	        "name": "瀘州",
	        "area": ["江陽區", "納溪區", "龍馬潭區", "瀘縣", "合江縣", "敘永縣", "古藺縣", "其他"]
	    }, {
	        "name": "德陽",
	        "area": ["旌陽區", "廣漢市", "什邡市", "綿竹市", "羅江縣", "中江縣", "其他"]
	    }, {
	        "name": "綿陽",
	        "area": ["涪城區", "遊仙區", "江油市", "鹽亭縣", "三臺縣", "平武縣", "安縣", "梓潼縣", "北川羌族自治縣", "其他"]
	    }, {
	        "name": "廣元",
	        "area": ["元壩區", "朝天區", "青川縣", "旺蒼縣", "劍閣縣", "蒼溪縣", "市中區", "其他"]
	    }, {
	        "name": "遂寧",
	        "area": ["船山區", "安居區", "射洪縣", "蓬溪縣", "大英縣", "其他"]
	    }, {
	        "name": "內江",
	        "area": ["市中區", "東興區", "資中縣", "隆昌縣", "威遠縣", "其他"]
	    }, {
	        "name": "樂山",
	        "area": ["市中區", "五通橋區", "沙灣區", "金口河區", "峨眉山市", "夾江縣", "井研縣", "犍為縣", "沐川縣", "馬邊彝族自治縣", "峨邊彝族自治縣", "其他"]
	    }, {
	        "name": "南充",
	        "area": ["順慶區", "高坪區", "嘉陵區", "閬中市", "營山縣", "蓬安縣", "儀隴縣", "南部縣", "西充縣", "其他"]
	    }, {
	        "name": "眉山",
	        "area": ["東坡區", "仁壽縣", "彭山縣", "洪雅縣", "丹棱縣", "青神縣", "其他"]
	    }, {
	        "name": "宜賓",
	        "area": ["翠屏區", "宜賓縣", "興文縣", "南溪縣", "珙縣", "長寧縣", "高縣", "江安縣", "筠連縣", "屏山縣", "其他"]
	    }, {
	        "name": "廣安",
	        "area": ["廣安區", "華鎣市", "嶽池縣", "鄰水縣", "武勝縣", "其他"]
	    }, {
	        "name": "達州",
	        "area": ["通川區", "萬源市", "達縣", "渠縣", "宣漢縣", "開江縣", "大竹縣", "其他"]
	    }, {
	        "name": "雅安",
	        "area": ["雨城區", "蘆山縣", "石棉縣", "名山縣", "天全縣", "滎經縣", "寶興縣", "漢源縣", "其他"]
	    }, {
	        "name": "巴中",
	        "area": ["巴州區", "南江縣", "平昌縣", "通江縣", "其他"]
	    }, {
	        "name": "資陽",
	        "area": ["雁江區", "簡陽市", "安嶽縣", "樂至縣", "其他"]
	    }, {
	        "name": "阿壩藏族羌族自治州",
	        "area": ["馬爾康縣", "九寨溝縣", "紅原縣", "汶川縣", "阿壩縣", "理縣", "若爾蓋縣", "小金縣", "黑水縣", "金川縣", "松潘縣", "壤塘縣", "茂縣", "其他"]
	    }, {
	        "name": "甘孜藏族自治州",
	        "area": ["康定縣", "丹巴縣", "爐霍縣", "九龍縣", "甘孜縣", "雅江縣", "新龍縣", "道孚縣", "白玉縣", "理塘縣", "德格縣", "鄉城縣", "石渠縣", "稻城縣", "色達縣", "巴塘縣", "瀘定縣", "得榮縣", "其他"]
	    }, {
	        "name": "涼山彝族自治州",
	        "area": ["西昌市", "美姑縣", "昭覺縣", "金陽縣", "甘洛縣", "布拖縣", "雷波縣", "普格縣", "寧南縣", "喜德縣", "會東縣", "越西縣", "會理縣", "鹽源縣", "德昌縣", "冕寧縣", "木裏藏族自治縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "貴州",
	    "city": [{
	        "name": "貴陽",
	        "area": ["南明區", "雲岩區", "花溪區", "烏當區", "白雲區", "小河區", "清鎮市", "開陽縣", "修文縣", "息烽縣", "其他"]
	    }, {
	        "name": "六盤水",
	        "area": ["鐘山區", "水城縣", "盤縣", "六枝特區", "其他"]
	    }, {
	        "name": "遵義",
	        "area": ["紅花崗區", "匯川區", "赤水市", "仁懷市", "遵義縣", "綏陽縣", "桐梓縣", "習水縣", "鳳岡縣", "正安縣", "餘慶縣", "湄潭縣", "道真仡佬族苗族自治縣", "務川仡佬族苗族自治縣", "其他"]
	    }, {
	        "name": "安順",
	        "area": ["西秀區", "普定縣", "平壩縣", "鎮寧布依族苗族自治縣", "紫雲苗族布依族自治縣", "關嶺布依族苗族自治縣", "其他"]
	    }, {
	        "name": "銅仁地區",
	        "area": ["銅仁市", "德江縣", "江口縣", "思南縣", "石阡縣", "玉屏侗族自治縣", "松桃苗族自治縣", "印江土家族苗族自治縣", "沿河土家族自治縣", "萬山特區", "其他"]
	    }, {
	        "name": "畢節地區",
	        "area": ["畢節市", "黔西縣", "大方縣", "織金縣", "金沙縣", "赫章縣", "納雍縣", "威寧彝族回族苗族自治縣", "其他"]
	    }, {
	        "name": "黔西南布依族苗族自治州",
	        "area": ["興義市", "望謨縣", "興仁縣", "普安縣", "冊亨縣", "晴隆縣", "貞豐縣", "安龍縣", "其他"]
	    }, {
	        "name": "黔東南苗族侗族自治州",
	        "area": ["凱裏市", "施秉縣", "從江縣", "錦屏縣", "鎮遠縣", "麻江縣", "臺江縣", "天柱縣", "黃平縣", "榕江縣", "劍河縣", "三穗縣", "雷山縣", "黎平縣", "岑鞏縣", "丹寨縣", "其他"]
	    }, {
	        "name": "黔南布依族苗族自治州",
	        "area": ["都勻市", "福泉市", "貴定縣", "惠水縣", "羅甸縣", "甕安縣", "荔波縣", "龍裏縣", "平塘縣", "長順縣", "獨山縣", "三都水族自治縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "雲南",
	    "city": [{
	        "name": "昆明",
	        "area": ["盤龍區", "五華區", "官渡區", "西山區", "東川區", "安寧市", "呈貢縣", "晉寧縣", "富民縣", "宜良縣", "嵩明縣", "石林彝族自治縣", "祿勸彝族苗族自治縣", "尋甸回族彝族自治縣", "其他"]
	    }, {
	        "name": "曲靖",
	        "area": ["麒麟區", "宣威市", "馬龍縣", "沾益縣", "富源縣", "羅平縣", "師宗縣", "陸良縣", "會澤縣", "其他"]
	    }, {
	        "name": "玉溪",
	        "area": ["紅塔區", "江川縣", "澄江縣", "通海縣", "華寧縣", "易門縣", "峨山彝族自治縣", "新平彝族傣族自治縣", "元江哈尼族彝族傣族自治縣", "其他"]
	    }, {
	        "name": "保山",
	        "area": ["隆陽區", "施甸縣", "騰沖縣", "龍陵縣", "昌寧縣", "其他"]
	    }, {
	        "name": "昭通",
	        "area": ["昭陽區", "魯甸縣", "巧家縣", "鹽津縣", "大關縣", "永善縣", "綏江縣", "鎮雄縣", "彝良縣", "威信縣", "水富縣", "其他"]
	    }, {
	        "name": "麗江",
	        "area": ["古城區", "永勝縣", "華坪縣", "玉龍納西族自治縣", "寧蒗彝族自治縣", "其他"]
	    }, {
	        "name": "普洱",
	        "area": ["思茅區", "普洱哈尼族彝族自治縣", "墨江哈尼族自治縣", "景東彝族自治縣", "景穀傣族彝族自治縣", "鎮沅彝族哈尼族拉祜族自治縣", "江城哈尼族彝族自治縣", "孟連傣族拉祜族佤族自治縣", "瀾滄拉祜族自治縣", "西盟佤族自治縣", "其他"]
	    }, {
	        "name": "臨滄",
	        "area": ["臨翔區", "鳳慶縣", "雲縣", "永德縣", "鎮康縣", "雙江拉祜族佤族布朗族傣族自治縣", "耿馬傣族佤族自治縣", "滄源佤族自治縣", "其他"]
	    }, {
	        "name": "德宏傣族景頗族自治州",
	        "area": ["潞西市", "瑞麗市", "梁河縣", "盈江縣", "隴川縣", "其他"]
	    }, {
	        "name": "怒江傈僳族自治州",
	        "area": ["瀘水縣", "福貢縣", "貢山獨龍族怒族自治縣", "蘭坪白族普米族自治縣", "其他"]
	    }, {
	        "name": "迪慶藏族自治州",
	        "area": ["香格里拉縣", "德欽縣", "維西傈僳族自治縣", "其他"]
	    }, {
	        "name": "大理白族自治州",
	        "area": ["大理市", "祥雲縣", "賓川縣", "彌渡縣", "永平縣", "雲龍縣", "洱源縣", "劍川縣", "鶴慶縣", "漾濞彝族自治縣", "南澗彝族自治縣", "巍山彝族回族自治縣", "其他"]
	    }, {
	        "name": "楚雄彝族自治州",
	        "area": ["楚雄市", "雙柏縣", "牟定縣", "南華縣", "姚安縣", "大姚縣", "永仁縣", "元謀縣", "武定縣", "祿豐縣", "其他"]
	    }, {
	        "name": "紅河哈尼族彝族自治州",
	        "area": ["蒙自縣", "個舊市", "開遠市", "綠春縣", "建水縣", "石屏縣", "彌勒縣", "瀘西縣", "元陽縣", "紅河縣", "金平苗族瑤族傣族自治縣", "河口瑤族自治縣", "屏邊苗族自治縣", "其他"]
	    }, {
	        "name": "文山壯族苗族自治州",
	        "area": ["文山縣", "硯山縣", "西疇縣", "麻栗坡縣", "馬關縣", "丘北縣", "廣南縣", "富寧縣", "其他"]
	    }, {
	        "name": "西雙版納傣族自治州",
	        "area": ["景洪市", "勐海縣", "勐臘縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "西藏",
	    "city": [{
	        "name": "拉薩",
	        "area": ["城關區", "林周縣", "當雄縣", "尼木縣", "曲水縣", "堆龍德慶縣", "達孜縣", "墨竹工卡縣", "其他"]
	    }, {
	        "name": "那曲地區",
	        "area": ["那曲縣", "嘉黎縣", "比如縣", "聶榮縣", "安多縣", "申紮縣", "索縣", "班戈縣", "巴青縣", "尼瑪縣", "其他"]
	    }, {
	        "name": "昌都地區",
	        "area": ["昌都縣", "江達縣", "貢覺縣", "類烏齊縣", "丁青縣", "察雅縣", "八宿縣", "左貢縣", "芒康縣", "洛隆縣", "邊壩縣", "其他"]
	    }, {
	        "name": "林芝地區",
	        "area": ["林芝縣", "工布江達縣", "米林縣", "墨脫縣", "波密縣", "察隅縣", "朗縣", "其他"]
	    }, {
	        "name": "山南地區",
	        "area": ["乃東縣", "紮囊縣", "貢嘎縣", "桑日縣", "瓊結縣", "曲松縣", "措美縣", "洛紮縣", "加查縣", "隆子縣", "錯那縣", "浪卡子縣", "其他"]
	    }, {
	        "name": "日喀則地區",
	        "area": ["日喀則市", "南木林縣", "江孜縣", "定日縣", "薩迦縣", "拉孜縣", "昂仁縣", "謝通門縣", "白朗縣", "仁布縣", "康馬縣", "定結縣", "仲巴縣", "亞東縣", "吉隆縣", "聶拉木縣", "薩嘎縣", "崗巴縣", "其他"]
	    }, {
	        "name": "阿裏地區",
	        "area": ["噶爾縣", "普蘭縣", "劄達縣", "日土縣", "革吉縣", "改則縣", "措勤縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "陝西",
	    "city": [{
	        "name": "西安",
	        "area": ["蓮湖區", "新城區", "碑林區", "雁塔區", "灞橋區", "未央區", "閻良區", "臨潼區", "長安區", "高陵縣", "藍田縣", "戶縣", "周至縣", "其他"]
	    }, {
	        "name": "銅川",
	        "area": ["耀州區", "王益區", "印臺區", "宜君縣", "其他"]
	    }, {
	        "name": "寶雞",
	        "area": ["渭濱區", "金臺區", "陳倉區", "岐山縣", "鳳翔縣", "隴縣", "太白縣", "麟遊縣", "扶風縣", "千陽縣", "眉縣", "鳳縣", "其他"]
	    }, {
	        "name": "咸陽",
	        "area": ["秦都區", "渭城區", "楊陵區", "興平市", "禮泉縣", "涇陽縣", "永壽縣", "三原縣", "彬縣", "旬邑縣", "長武縣", "乾縣", "武功縣", "淳化縣", "其他"]
	    }, {
	        "name": "渭南",
	        "area": ["臨渭區", "韓城市", "華陰市", "蒲城縣", "潼關縣", "白水縣", "澄城縣", "華縣", "合陽縣", "富平縣", "大荔縣", "其他"]
	    }, {
	        "name": "延安",
	        "area": ["寶塔區", "安塞縣", "洛川縣", "子長縣", "黃陵縣", "延川縣", "富縣", "延長縣", "甘泉縣", "宜川縣", "志丹縣", "黃龍縣", "吳起縣", "其他"]
	    }, {
	        "name": "漢中",
	        "area": ["漢臺區", "留壩縣", "鎮巴縣", "城固縣", "南鄭縣", "洋縣", "寧強縣", "佛坪縣", "勉縣", "西鄉縣", "略陽縣", "其他"]
	    }, {
	        "name": "榆林",
	        "area": ["榆陽區", "清澗縣", "綏德縣", "神木縣", "佳縣", "府穀縣", "子洲縣", "靖邊縣", "橫山縣", "米脂縣", "吳堡縣", "定邊縣", "其他"]
	    }, {
	        "name": "安康",
	        "area": ["漢濱區", "紫陽縣", "嵐皋縣", "旬陽縣", "鎮坪縣", "平利縣", "石泉縣", "寧陝縣", "白河縣", "漢陰縣", "其他"]
	    }, {
	        "name": "商洛",
	        "area": ["商州區", "鎮安縣", "山陽縣", "洛南縣", "商南縣", "丹鳳縣", "柞水縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "甘肅",
	    "city": [{
	        "name": "蘭州",
	        "area": ["城關區", "七裏河區", "西固區", "安寧區", "紅古區", "永登縣", "皋蘭縣", "榆中縣", "其他"]
	    }, {
	        "name": "嘉峪關",
	        "area": ["嘉峪關市", "其他"]
	    }, {
	        "name": "金昌",
	        "area": ["金川區", "永昌縣", "其他"]
	    }, {
	        "name": "白銀",
	        "area": ["白銀區", "平川區", "靖遠縣", "會寧縣", "景泰縣", "其他"]
	    }, {
	        "name": "天水",
	        "area": ["清水縣", "秦安縣", "甘穀縣", "武山縣", "張家川回族自治縣", "北道區", "秦城區", "其他"]
	    }, {
	        "name": "武威",
	        "area": ["涼州區", "民勤縣", "古浪縣", "天祝藏族自治縣", "其他"]
	    }, {
	        "name": "酒泉",
	        "area": ["肅州區", "玉門市", "敦煌市", "金塔縣", "肅北蒙古族自治縣", "阿克塞哈薩克族自治縣", "安西縣", "其他"]
	    }, {
	        "name": "張掖",
	        "area": ["甘州區", "民樂縣", "臨澤縣", "高臺縣", "山丹縣", "肅南裕固族自治縣", "其他"]
	    }, {
	        "name": "慶陽",
	        "area": ["西峰區", "慶城縣", "環縣", "華池縣", "合水縣", "正寧縣", "寧縣", "鎮原縣", "其他"]
	    }, {
	        "name": "平涼",
	        "area": ["崆峒區", "涇川縣", "靈臺縣", "崇信縣", "華亭縣", "莊浪縣", "靜寧縣", "其他"]
	    }, {
	        "name": "定西",
	        "area": ["安定區", "通渭縣", "臨洮縣", "漳縣", "岷縣", "渭源縣", "隴西縣", "其他"]
	    }, {
	        "name": "隴南",
	        "area": ["武都區", "成縣", "宕昌縣", "康縣", "文縣", "西和縣", "禮縣", "兩當縣", "徽縣", "其他"]
	    }, {
	        "name": "臨夏回族自治州",
	        "area": ["臨夏市", "臨夏縣", "康樂縣", "永靖縣", "廣河縣", "和政縣", "東鄉族自治縣", "積石山保安族東鄉族撒拉族自治縣", "其他"]
	    }, {
	        "name": "甘南藏族自治州",
	        "area": ["合作市", "臨潭縣", "卓尼縣", "舟曲縣", "迭部縣", "瑪曲縣", "碌曲縣", "夏河縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "青海",
	    "city": [{
	        "name": "西寧",
	        "area": ["城中區", "城東區", "城西區", "城北區", "湟源縣", "湟中縣", "大通回族土族自治縣", "其他"]
	    }, {
	        "name": "海東地區",
	        "area": ["平安縣", "樂都縣", "民和回族土族自治縣", "互助土族自治縣", "化隆回族自治縣", "循化撒拉族自治縣", "其他"]
	    }, {
	        "name": "海北藏族自治州",
	        "area": ["海晏縣", "祁連縣", "剛察縣", "門源回族自治縣", "其他"]
	    }, {
	        "name": "海南藏族自治州",
	        "area": ["共和縣", "同德縣", "貴德縣", "興海縣", "貴南縣", "其他"]
	    }, {
	        "name": "黃南藏族自治州",
	        "area": ["同仁縣", "尖紮縣", "澤庫縣", "河南蒙古族自治縣", "其他"]
	    }, {
	        "name": "果洛藏族自治州",
	        "area": ["瑪沁縣", "班瑪縣", "甘德縣", "達日縣", "久治縣", "瑪多縣", "其他"]
	    }, {
	        "name": "玉樹藏族自治州",
	        "area": ["玉樹縣", "雜多縣", "稱多縣", "治多縣", "囊謙縣", "曲麻萊縣", "其他"]
	    }, {
	        "name": "海西蒙古族藏族自治州",
	        "area": ["德令哈市", "格爾木市", "烏蘭縣", "都蘭縣", "天峻縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "寧夏",
	    "city": [{
	        "name": "銀川",
	        "area": ["興慶區", "西夏區", "金鳳區", "靈武市", "永寧縣", "賀蘭縣", "其他"]
	    }, {
	        "name": "石嘴山",
	        "area": ["大武口區", "惠農區", "平羅縣", "其他"]
	    }, {
	        "name": "吳忠",
	        "area": ["利通區", "青銅峽市", "鹽池縣", "同心縣", "其他"]
	    }, {
	        "name": "固原",
	        "area": ["原州區", "西吉縣", "隆德縣", "涇源縣", "彭陽縣", "其他"]
	    }, {
	        "name": "中衛",
	        "area": ["沙坡頭區", "中寧縣", "海原縣", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "新疆",
	    "city": [{
	        "name": "烏魯木齊",
	        "area": ["天山區", "沙依巴克區", "新市區", "水磨溝區", "頭屯河區", "達阪城區", "東山區", "烏魯木齊縣", "其他"]
	    }, {
	        "name": "克拉瑪依",
	        "area": ["克拉瑪依區", "獨山子區", "白堿灘區", "烏爾禾區", "其他"]
	    }, {
	        "name": "吐魯番地區",
	        "area": ["吐魯番市", "托克遜縣", "鄯善縣", "其他"]
	    }, {
	        "name": "哈密地區",
	        "area": ["哈密市", "伊吾縣", "巴裏坤哈薩克自治縣", "其他"]
	    }, {
	        "name": "和田地區",
	        "area": ["和田市", "和田縣", "洛浦縣", "民豐縣", "皮山縣", "策勒縣", "於田縣", "墨玉縣", "其他"]
	    }, {
	        "name": "阿克蘇地區",
	        "area": ["阿克蘇市", "溫宿縣", "沙雅縣", "拜城縣", "阿瓦提縣", "庫車縣", "柯坪縣", "新和縣", "烏什縣", "其他"]
	    }, {
	        "name": "喀什地區",
	        "area": ["喀什市", "巴楚縣", "澤普縣", "伽師縣", "葉城縣", "嶽普湖縣", "疏勒縣", "麥蓋提縣", "英吉沙縣", "莎車縣", "疏附縣", "塔什庫爾幹塔吉克自治縣", "其他"]
	    }, {
	        "name": "克孜勒蘇柯爾克孜自治州",
	        "area": ["阿圖什市", "阿合奇縣", "烏恰縣", "阿克陶縣", "其他"]
	    }, {
	        "name": "巴音郭楞蒙古自治州",
	        "area": ["庫爾勒市", "和靜縣", "尉犁縣", "和碩縣", "且末縣", "博湖縣", "輪臺縣", "若羌縣", "焉耆回族自治縣", "其他"]
	    }, {
	        "name": "昌吉回族自治州",
	        "area": ["昌吉市", "阜康市", "奇臺縣", "瑪納斯縣", "吉木薩爾縣", "呼圖壁縣", "木壘哈薩克自治縣", "米泉市", "其他"]
	    }, {
	        "name": "博爾塔拉蒙古自治州",
	        "area": ["博樂市", "精河縣", "溫泉縣", "其他"]
	    }, {
	        "name": "石河子",
	        "area": ["石河子"]
	    }, {
	        "name": "阿拉爾",
	        "area": ["阿拉爾"]
	    }, {
	        "name": "圖木舒克",
	        "area": ["圖木舒克"]
	    }, {
	        "name": "五家渠",
	        "area": ["五家渠"]
	    }, {
	        "name": "伊犁哈薩克自治州",
	        "area": ["伊寧市", "奎屯市", "伊寧縣", "特克斯縣", "尼勒克縣", "昭蘇縣", "新源縣", "霍城縣", "鞏留縣", "察布查爾錫伯自治縣", "塔城地區", "阿勒泰地區", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "臺灣",
	    "city": [{
	        "name": "臺灣",
	        "area": ["臺北市", "高雄市", "臺北縣", "桃園縣", "新竹縣", "苗栗縣", "臺中縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "臺南縣", "高雄縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "基隆市", "新竹市", "臺中市", "嘉義市", "臺南市", "其他"]
	    }, {
	        "name": "其他",
	        "area": ["其他"]
	    }]
	}, {
	    "name": "澳門",
	    "city": [{
	        "name": "澳門",
	        "area": ["花地瑪堂區", "聖安多尼堂區", "大堂區", "望德堂區", "風順堂區", "嘉模堂區", "聖方濟各堂區", "路氹", "其他"]
	    }]
	}, {
	    "name": "香港",
	    "city": [{
	        "name": "香港",
	        "area": ["中西區", "灣仔區", "東區", "南區", "深水埗區", "油尖旺區", "九龍城區", "黃大仙區", "觀塘區", "北區", "大埔區", "沙田區", "西貢區", "元朗區", "屯門區", "荃灣區", "葵青區", "離島區", "其他"]
	    }]
	}];
	module.exports = exports["default"];

/***/ }),
/* 244 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var provinceData = [{ "name": "Beijing", "city": [{ "name": "Beijing", "area": ["Dongcheng District", "Xicheng District", "Chongwen District", "Xuanwu District", "Chaoyang District", "Fengtai District", "Shijingshan District", "Haidian District", "Mentougou District", "Fangshan District", "Tongzhou District", "Shunyi District", "Changping District", "Daxing District", "Pinggu District", "Huairou District", "Miyun County", "Yanqing County"] }] }, { "name": "Tianjin", "city": [{ "name": "Tianjin", "area": ["Heping District", "Hedong District", "Hexi District", "Nankai District", "Hebei District", "Hongqiao District", "Tanggu District", "Hangu District", "Dagang District", "Dongli District", "Xiqing District", "Jinnan District", "Beichen District", "Wuqing District", "Baodi District", "Ninghe County", "Jinghai County", "Ji County"] }] }, {
	    "name": "Hebei", "city": [{ "name": "Shijiazhuang", "area": ["Chang'an District", "Qiaodong District", "Qiaoxi District", "Xinhua District", "Suburb", "Jingxing Mining Area", "Jingxing County", "Zhengding County", "Luancheng County", "Xingtang County", "Lingshou County", "Gaoyi County", "Shenze County", "Zanhuang County", "Wuji County", "Pingshan County", "Yuanshi County", "Zhao County", "Xinji City", "Gao", "Jinzhou City", "Xinle City", "Luquan City"] }, { "name": "Tangshan", "area": ["Lunan District", "Lubei District", "Guye District", "Kaiping District", "New District", "Fengrun County", "Luan County", "Luannan County", "Laoting County", "Qianxi County", "Yutian County", "Tanghai County", "Zunhua City", "Fengnan City", "Qian'an City"] }, { "name": "Qinhuangdao", "area": ["Haigang District", "Shanhaiguan District", "Beidaihe District", "Qinglong Manchu Autonomous County", "Changli County", "Funing County", "Lulong County"] }, { "name": "Handan", "area": ["Hanshan District", "Congtai District", "Fuxing District", "Fengfeng Mining Area", "Handan County", "Linzhang County", "Cheng'an County", "Daming County", "She County", "Ci County", "Feixiang County", "Yongnian County", "Qiu County", "Jize County", "Guangping County", "Guantao County", "Wei County", "Quzhou County", "Wu'an City"] }, { "name": "Xingtai", "area": ["Qiaodong District", "Qiaoxi District", "Xingtai County", "Lincheng County", "Neiqiu County", "Baixiang County", "Longyao County", "Ren County", "Nanhe County", "Ningjin County", "Julu County", "Xinhe County", "Guangzong County", "Pingxiang County", "Wei County", "Qinghe County", "Linxi County", "Nangong City", "Shahe City"] }, { "name": "Baoding", "area": ["New Urban District", "North Urban District", "South Urban District", "Mancheng County", "Qingyuan County", "Laishui County", "Fuping County", "Xushui County", "Dingxing County", "Tang County", "Gaoyang County", "Rongcheng County", "Laiyuan County", "Wangdu County", "Anxin County", "Yi County", "Quyang County", "Li County", "Shunping County", "Boye", "Xiong County", "Zhuozhou City", "Dingzhou City", "Anguo City", "Gaobeidian City"] }, { "name": "Zhangjiakou", "area": ["Qiaodong District", "Qiaoxi District", "Xuanhua District", "Xiahuayuan District", "Xuanhua County", "Zhangbei County", "Kangbao County", "Guyuan County", "Shangyi County", "Yu County", "Yangyuan County", "Huai'an County", "Wanquan County", "Huailai County", "Zhuolu County", "Chicheng County", "Chongli County"] }, { "name": "Chengde", "area": ["Shuangqiao District", "Shuangluan District", "Yingshouyingzi Mining Area", "Chengde County", "Xinglong County", "Pingquan County", "Luanping County", "Longhua County", "Fengning Manchu Autonomous County", "Kuancheng Manchu Autonomous County", "Weichang Manchu Mongolian Autonomous County"] }, { "name": "Cangzhou", "area": ["Xinhua District", "Yunhe District", "Cang County", "Qing County", "Dongguang County", "Haixing County", "Yanshan County", "Suning County", "Nanpi County", "Wuqiao County", "Xian County", "Mengcun Hui Nationality Autonomous County", "Botou City", "Renqiu City", "Huanghua City", "Hejian City"] }, { "name": "Langfang", "area": ["Anci District", "Gu'an County", "Yongqing County", "Xianghe County", "Dacheng County", "Wen'an County", "Dachang Hui Nationality Autonomous County", "Bazhou City", "Sanhe City"] }, { "name": "Hengshui", "area": ["Taocheng District", "Zaoqiang County", "Wuyi County", "Wuqiang County", "Raoyang County", "Anping County", "Gucheng County", "Jing County", "Yucheng County", "Quzhou City", "Shenzhou City"] }]
	}, {
	    "name": "Shanxi", "city": [{ "name": "Taiyuan", "area": ["Xiaodian District", "Yingze District", "Xinghualing District", "Jiancaoping District", "Wanbolin District", "Jinyuan District", "Qingxu County", "Yangqu County", "Loufan County", "Gujiao City"] }, { "name": "Datong", "area": ["Urban Area", "Mining Area", "Southern Suburb", "Xinrong District", "Yanggao County", "Tianzhen County", "Guangling County", "Lingqiu County", "Wuyuan County", "Zuoyun County", "Datong County"] }, { "name": "Yangquan", "area": ["Urban Area", "Mining Area", "Suburbs", "Pingding County", "Yu County"] }, { "name": "Changzhi", "area": ["Urban Area", "Suburbs", "Changzhi County", "Xiangyuan County", "Tunliu County", "Pingshun County", "Licheng County", "Huguan County", "Changzi County", "Wuxiang County", "Qin County", "Qinyuan County", "Lucheng City"] }, { "name": "Jincheng", "area": ["Urban Area", "Qinshui County", "Yangcheng County", "Lingchuan County", "Zezhou County", "Gaoping City"] }, { "name": "Shuozhou", "area": ["Shuocheng District", "Pinglu District", "Shanyin County", "Ying County", "Youyu County", "Huairen County"] }, { "name": "Xinzhou", "area": ["Xinfu District", "Yuanping City", "Dingxiang County", "Wutai County", "Dai County", "Fanzhi County", "Ningwu County", "Jingle County", "Shenchi County", "Wuzhai County", "Kelan County", "Hequ County", "Baode County", "Pianguan County"] }, { "name": "Lvliang", "area": ["Lishi District", "Xiaoyi City", "Fenyang City", "Wenshui County", "Jiaocheng County", "Xing County", "Lin County", "Liulin County", "Shilou County", "Lan County", "Fangshan County", "Zhongyang County", "Jiaokou County"] }, { "name": "Jinzhong", "area": ["Yuci City", "Jiexiu City", "Yushe County", "Zuoquan County", "Heshun County", "Xiyang County", "Shouyang County", "Taigu County", "Qi County", "Pingyao County", "Lingshi County"] }, { "name": "Linyi", "area": ["Linyi City", "Houma City", "Huozhou City", "Quwo County", "Yicheng County", "Xiangfen County", "Hongdong County", "Gu county", "Anze County", "Fushan County", "Ji County", "Xiangning County", "Pu County", "Daning County", "Yonghe County", "Xi County", "Fenxi County"] }, { "name": "Yuncheng", "area": ["Yuncheng City", "Yongji City", "Hejin City", "Ruicheng County", "Linyi County", "Wanrong County", "Xinjiang County", "Jishan County", "Wenxi County", "Xia County", "Jiang County", "Pinglu County", "Yuanqu County"] }]
	}, {
	    "name": "Inner Mongolia", "city": [{ "name": "Hohhot", "area": ["New Urban Area", "Huimin District", "Yuquan District", "Suburbs", "Tumut Left Banner", "Tokto County", "Horinger County", "Qingshuihe County", "Wuchuan County"] }, { "name": "Baotou", "area": ["Donghe District", "Kundulun District", "Qingshan District", "Shiguai Mining Area", "Baiyun Mining Area", "Suburbs", "Tumut Right Banner", "Guyang County", "Dalhan Maomingan United Banner"] }, { "name": "Wuhai", "area": ["Haibowan District", "Hainan District", "Wuda District"] }, { "name": "Chifeng", "area": ["Hongshan District", "Yuanbaoshan Area", "Songshan District", "Aruker Banner", "Bahrain Left Banner", "Bahrain Right Banner", "Linxi County", "Keshiketeng Banner", "Weng Niute Banner", "Kalaqin Banner", "Ningcheng County", "Aohan Banner"] }, { "name": "Hulunbeier", "area": ["Hailar City", "Manzhouli City", "Zhalantun City", "Yakeshi City", "Genhe City", "Ergun City", "Arong Banner", "Molidawada Muir Autonomous Banner", "Oroqen Autonomous Banner", "Ewenki Autonomous Banner", "New Barr Right Banner", "New Bay Tiger Left Banner", "Chen Baerhu Banner"] }, { "name": "Xing'an League", "area": ["Ulanhot City", "Aershan", "Horqin Right Wing Front Banner", "Horqin Right Wing Middle Banner", "Zhabit Banner", "Tuquan County"] }, { "name": "Tongliao", "area": ["Horqin District", "Hollingol City", "Kerqin Left Wing Middle Banner", "Horqin Left Wing Back Banner", "Kailu County", "Kulun Banner", "Naiman Banner", "Zalute Banner"] }, { "name": "Xilin Gol League", "area": ["Erlianhot City", "Xilinhot City", "Abaqi Banner", "Sunite Left Banner", "Sunite Right Banner", "East Ujimqin Banner", "Xiwuzhumuqi Banner", "Taipu Temple Banner", "Xianghuang Banner", "Zhengxiangbai Banner", "Zhenglan Banner", "Duolun County"] }, { "name": "Ulanchabu League", "area": ["Jining City", "Fengzhen City", "Zhuozi County", "Huade County", "Shangdu County", "Xinghe County", "Liangcheng County", "Chahar Right Front Banner", "Chahar Right Wing Middle Banner", "Chahar Right Back Banner", "Siziwang Banner"] }, { "name": "Ikezhao League", "area": ["Dongsheng City", "Dalat Banner", "Zhungeer Banner", "Etuokeqian Banner", "Etuoke Banner", "Hangjin Banner", "Wushen Banner", "Yijinhuoluo Banner"] }, { "name": "Bayannaoer League", "area": ["Linhe City", "Wuyuan County", "Dengkou County", "Urad Front Banner", "Urad Middle Banner", "Urad Back Banner", "Hangjin Back Banner"] }, { "name": "Alxa League", "area": ["Alxa Left Banner", "Alxa Right Banner", "Ejina Banner"] }]
	}, {
	    "name": "Liaoning", "city": [{ "name": "Shenyang", "area": ["Shenhe District", "Huanggu District", "Heping District", "Dadong District", "Tiexi District", "Sujiatun District", "Dongling District", "Yuhong District", "Xinmin City", "Faku County", "Liaozhong County", "Kangping County", "Xinchengzi District", "Other"] }, { "name": "Dalian", "area": ["Xigang District", "Zhongshan District", "Shahekou District", "Ganjingzi District", "Lvshunkou District", "Jinzhou District", "Wafangdian City", "Pulandian City", "Zhuanghe City", "Changhai County", "Other"] }, { "name": "Anshan", "area": ["Tiedong District", "Tiexi District", "Lishan District", "Qianshan District", "Haicheng city", "Tai'an County", "Xiuyan Manchu Autonomous County", "Other"] }, { "name": "Fushun", "area": ["Shuncheng District", "Xinfu District", "Dongzhou District", "Wanghua District", "Fushun County", "Qingyuan Manchu Autonomous County", "Xinbin Manchu Autonomous County", "Other"] }, { "name": "Benxi", "area": ["Pingshan District", "Mingshan District", "Xihu District", "Nanfen District", "Benxi Manchu Autonomous County", "Huanren Manchu Autonomous County", "Other"] }, { "name": "Dandong", "area": ["Zhenxing District", "Yuanbao District", "Zhen'an District", "Donggang City", "Fengcheng", "Kuandian Manchu Autonomous County", "Other"] }, { "name": "Jinzhou", "area": ["Taihe District", "Guta District", "Linghe District", "Linghai City", "Heishan County", "Yi County", "Beining City", "Other"] }, { "name": "Yingkou", "area": ["Zhanqian District", "West Urban District", "Bayuquan District", "Laobian District", "Dashiqiao City", "Gaizhou City", "Other"] }, { "name": "Fuxin", "area": ["Haizhou District", "Xinqiu District", "Taiping District", "Qinghemen District", "Xihe District", "Zhangwu County", "Fuxin Mongolian Autonomous County", "Other"] }, { "name": "Liaoyang", "area": ["Baita District", "Wensheng District", "Hongwei District", "Taizihe District", "Gongchangling District", "Dengta City", "Liaoyang County", "Other"] }, { "name": "Panjin", "area": ["Shuangtaizi District", "Xinglongtai District", "Panshan County", "Dawa County", "Other"] }, { "name": "Tieling", "area": ["Yinzhou District", "Qinghe District", "Diaobingshan City", "Kaiyuan City", "Tieling County", "Changtu County", "Xifeng County", "Other"] }, { "name": "Chaoyang", "area": ["Shuangta District", "Longcheng District", "Lingyuan City", "Beipiao City", "Chaoyang County", "Jianping County", "Karachi Left Mongolian Autonomous County", "Other"] }, { "name": "Huludao", "area": ["Longgang District", "Nanpiao District", "Lianshan District", "Xingcheng City", "Suizhong County", "Jianchang County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Jilin", "city": [{ "name": "Changchun", "area": ["Chaoyang District", "Kuancheng District", "Erdao District", "Nanguan District", "Lvyuan District", "Shuangyang District", "Jiutai City", "Yushu City", "Dehui City", "Nong'an County", "Other"] }, { "name": "Jilin", "area": ["Chuanying District", "Changyi District", "Longtan District", "Fengman District", "Shulan City", "Huadian City", "Jiaohe City", "Panshi City", "Yongji County", "Other"] }, { "name": "Siping", "area": ["Tiexi District", "Tiedong District", "Gongzhuling City", "Shuangliao City", "Lishu County", "Yitong Manchu Autonomous County", "Other"] }, { "name": "Liaoyuan", "area": ["Longshan District", "Xi'an District", "Dongliao County", "Dongfeng County", "Other"] }, { "name": "Tonghua", "area": ["Dongchang District", "Erdaojiang District", "Meihekou City", "Ji'an City", "Tonghua County", "Huinan County", "Liuhe County", "Other"] }, { "name": "Baishan", "area": ["Badaojiang District", "Jiangyuan District", "Linjiang City", "Jingyu County", "Fusong County", "Changbai Korean Autonomous County", "Other"] }, { "name": "Songyuan", "area": ["Ningjiang District", "Qian'an County", "Changling County", "Fuyu County", "Qianguoerluosi Mongolian Autonomous County", "Other"] }, { "name": "Baicheng", "area": ["Taobei District", "Da'an City", "Taonan City", "Zhenlai County", "Tongyu County", "Other"] }, { "name": "Yanbian Korean Autonomous Prefecture", "area": ["Yanji City", "Tumen City", "Dunhua City", "Longjing City", "Hunchun City", "Helong City", "Antu County", "Wangqing County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Heilongjiang", "city": [{ "name": "Harbin", "area": ["Songbei District", "Daoli District", "Nangang District", "Pingfang District", "Xiangfang District", "Daowai District", "Hulan District", "Acheng District", "Shuangcheng City", "Shangzhi City", "Wuchang City", "Bin County", "Fangzheng County", "Tonghe County", "Bayan County", "Yanshou County", "Mulan County", "Yilan County", "Other"] }, { "name": "Qiqihar", "area": ["Longsha District", "Ang'angxi District", "Tiefeng District", "Jianhua District", "Fulaerki District", "Nianzishan District", "Merisda Daur District", "Nehe City", "Fuyu County", "Baiquan County", "Gannan County", "Yi'an County", "Keshan County", "Tailai County", "Kedong County", "Longjiang County", "Other"] }, { "name": "Hegang", "area": ["Xingshan District", "Gongnong District", "Nanshan District", "Xing'an District", "Xiangyang District", "Dongshan District", "Luobei County", "Suibin County", "Other"] }, { "name": "Shuangyashan", "area": ["Jianshan District", "Lingdong District", "Sifangtai District", "Baoshan District", "Jixian County", "Baoqing County", "Youyi County", "Raohe County", "Other"] }, { "name": "Jixi", "area": ["Jiguan District", "Hengshan District", "Chengzihe District", "Didao District", "Lishu District", "Mashan District", "Mishan City", "Hulin City", "Jidong County", "Other"] }, { "name": "Daqing", "area": ["Saltu District", "Honggang District", "Longfeng District", "Ranghulu District", "Datong District", "Lindian County", "Zhaozhou County", "Zhaoyuan County", "Durbert Mongolian Autonomous County", "Other"] }, { "name": "Yichun", "area": ["Yichun District", "Dailing District", "Nancha District", "Jinshanyu District", "Xilin District", "Meixi District", "Wumahe District", "Cuiyu District", "Youhao District", "Shangganling District", "Wuying District", "Hongxing District", "Xinqing District", "Tangwanghe District", "Wuyiling District", "Tieli City", "Jiayin County", "Other"] }, { "name": "Mudanjiang", "area": ["Aimin District", "Dong'an District", "Yangming District", "Xi'an District", "Suifenhe City", "Ning'an City", "Hailin City", "Muling City", "Linkou County", "Dongning County", "Other"] }, { "name": "Jiamusi", "area": ["Xiangyang District", "Qianjin District", "Dongfeng District", "Suburbs", "Tongjiang City", "Fujin City", "Huachuan County", "Fuyuan County", "Huanan County", "Tangyuan County", "Other"] }, { "name": "Qitaihe", "area": ["Taoshan District", "Xinxing District", "Qiezihe District", "Boli County", "Other"] }, { "name": "Heihe", "area": ["Aihui District", "Bei'an City", "Wudalianchi City", "Xunke County", "Nenjiang County", "Sun Wu County", "Other"] }, { "name": "Suihua", "area": ["Beilin District", "Anda City", "Zhaodong City", "Hailun City", "Suiling County", "Lanxi County", "Mingshui County", "Qinggang County", "Qing'an County", "Wangkui County", "Other"] }, { "name": "Daxing'anling area", "area": ["Huma County", "Tahe County", "Mohe County", "Daxing'anling District", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Shanghai", "city": [{ "name": "Shanghai", "area": ["Huangpu District", "Luwan District", "Xuhui District", "Changning District", "Jing'an District", "Putuo District", "Zhabei District", "Hongkou District", "Yangpu District", "Baoshan District", "Minhang District", "Jiading District", "Songjiang District", "Jinshan District", "Qingpu District", "Nanhui District", "Fengxian District", "Pudong New District", "Chongming County", "Other"] }]
	}, {
	    "name": "Jiangsu", "city": [{ "name": "Nanjing", "area": ["Xuanwu District", "White area", "Qinhuai District", "Jianye District", "Gulou District", "Xiaguan District", "Qixia District", "Yuhuatai District", "Pukou District", "Jiangning District", "Liuhe District", "Lishui County", "Gaochun County", "Other"] }, { "name": "Suzhou", "area": ["Jinchang District", "Pingjiang District", "Canglang District", "Huqiu District", "Wuzhong District", "Xiangcheng District", "Changshu City", "Zhangjiagang City", "Kunshan City", "Wujiang City", "Taicang City", "Other"] }, { "name": "Wuxi", "area": ["Chong'an District", "Nanchang District", "Beitang District", "Binhu District", "Xishan District", "Huishan District", "Jiangyin City", "Yixing City", "Other"] }, { "name": "Changzhou", "area": ["Zhonglou District", "Tianning District", "Qishuyan District", "Xinbei District", "Wujin District", "Jintan City", "Liyang City", "Other"] }, { "name": "Zhenjiang", "area": ["Jingkou District", "Runzhou District", "Dantu District", "Danyang City", "Yangzhong City", "Jurong City", "Other"] }, { "name": "Nantong", "area": ["Chongchuan District", "Gangzha District", "Tongzhou City", "Rugao City", "Haimen City", "Qidong City", "Hai'an County", "Rudong County", "Other"] }, { "name": "Taizhou", "area": ["Hailing District", "Gaogang District", "Jiangyan City", "Taixing City", "Jingjiang City", "Xinghua City", "Other"] }, { "name": "Yangzhou", "area": ["Guangling District", "Weiyang District", "Hanjiang District", "Jiangdu City", "Yizheng City", "Gaoyou City", "Baoying County", "Other"] }, { "name": "Yancheng", "area": ["Tinghu District", "Yandu District", "Dafeng City", "Dongtai City", "Jianhu County", "Sheyang County", "Funing County", "Binhai County", "Xiangshui County", "Other"] }, { "name": "Lianyungang", "area": ["Xinpu District", "Haizhou District", "Lianyun District", "Donghai County", "Guanyun County", "Ganyu County", "Guannan County", "Other"] }, { "name": "Xuzhou", "area": ["Yunlong District", "Gulou District", "Jiuli District", "Quanshan District", "Jiawang District", "Pizhou City", "Xinyi City", "Tongshan County", "Suining County", "Pei County", "Feng County", "Other"] }, { "name": "Huai'an", "area": ["Qinghe District", "Qingpu District", "Chuzhou District", "Huaiyin District", "Yishui County", "Hongze County", "Jinhu County", "Xuyi County", "Other"] }, { "name": "Suqian", "area": ["Sucheng District", "Suyu District", "Shuyang County", "Siyang County", "Sihong County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Zhejiang", "city": [{ "name": "Hangzhou", "area": ["Gongshu District", "West Lake District", "Up Urban Area", "Down Urban Area", "Jianggan District", "Binjiang District", "Yuhang District", "Xiaoshan Strict", "Jiande City", "Fuyang City", "Lin'an City", "Tonglu County", "Chun'an County", "Other"] }, { "name": "Ningbo", "area": ["Haishu District", "Jiangdong District", "Jiangbei District", "Zhenhai District", "Beilun District", "Yinzhou District", "Yuyao City", "Cixi City", "Fenghua City", "Ninghai County", "Xiangshan County", "Other"] }, { "name": "Wenzhou", "area": ["Lucheng District", "Longwan District", "Ouhai District", "Ruian City", "Yueqing City", "Yongjia County", "Dongtou County", "Pingyang County", "Cangnan County", "Wencheng County", "Taishun County", "Other"] }, { "name": "Jiaxing", "area": ["Xiucheng District", "Xiuzhou District", "Haining City", "Pinghu City", "Tongxiang City", "Jiashan County", "Haiyan County", "Other"] }, { "name": "Huzhou", "area": ["Wuxing District", "Nanxun District", "Changxing County", "Deqing County", "Anji County", "Other"] }, { "name": "Shaoxing", "area": ["Yuecheng District", "Zhuji City", "Shangyu City", "Shengzhou City", "Shaoxing County", "Xinchang County", "Other"] }, { "name": "Jinhua", "area": ["Wucheng District", "Jindong District", "Lanxi City", "Yiwu City", "Dongyang City", "Yongkang City", "Wuyi County", "Pujiang County", "Pan'an County", "Other"] }, { "name": "Quzhou", "area": ["Kecheng District", "Qujiang District", "Jiangshan City", "Longyou County", "Changshan County", "Kaihua County", "Other"] }, { "name": "Zhoushan", "area": ["Dinghai District", "Putuo District", "Daishan County", "Shengsi County", "Other"] }, { "name": "Taizhou", "area": ["Jiaojiang District", "Huangyan District", "Luqiao District", "Linhai City", "Wenling City", "Yuhuan County", "Tiantai County", "Xianju County", "Sanmen County", "Other"] }, { "name": "Lishui", "area": ["Liandu District", "Longquan City", "Jinyun County", "Qingtian County", "Yunhe County", "Suichang County", "Songyang County", "Qingyuan County", "Jingning Yi Autonomous County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Anhui", "city": [{ "name": "Hefei", "area": ["Luyang District", "Yaohai District", "Laoshan District", "Baohe District", "Changfeng County", "Feidong County", "Feixi County", "Other"] }, { "name": "Wuhu", "area": ["Jinghu District", "Yijiang District", "Jiujiang District", "Sanshan District", "Wuhu County", "Nanling County", "Fanchang County", "Other"] }, { "name": "Bengbu", "area": ["Bengshan District", "Longzihu District", "Yuhui District", "Huaishang District", "Huaiyuan County", "Guzhen County", "Wuhe County", "Other"] }, { "name": "Huainan", "area": ["Tianjia'an District", "Datong District", "Xiejiaji District", "Bagongshan District", "Panji District", "Fengtai County", "Other"] }, { "name": "Ma'anshan", "area": ["Yushan District", "Huashan District", "Jinjiazhuang District", "Dangtu County", "Other"] }, { "name": "Huaibei", "area": ["Xiangshan", "Duji District", "Lieshan District", "Suixi County", "Other"] }, { "name": "Tongling", "area": ["Tongguanshan District", "Shizishan District", "Suburbs", "Tongling County", "Other"] }, { "name": "Anqing", "area": ["Yingjiang District", "Daguan District", "Yixiu District", "Tongcheng City", "Susong County", "Zongyang County", "Taihu County", "Huaining County", "Yuexi County", "Wangjiang County", "Qianshan County", "Other"] }, { "name": "Huangshan", "area": ["Tunxi District", "Huangshan District", "Huizhou District", "Xiuning County", "She County", "Qimen County", "Ji County", "Other"] }, { "name": "Chuzhou District", "area": ["Langya District", "Nanqiao District", "Tianchang City", "Mingguang City", "Quanjiao County", "Lai'an County", "Dingyuan County", "Fengyang County", "Other"] }, { "name": "Fuyang", "area": ["Yingzhou District", "Yingdong District", "Yingquan District", "Jieshou City", "Linquan County", "Yingshang County", "Funan County", "Taihe County", "Other"] }, { "name": "Suzhou", "area": ["Yongqiao District", "Xiao County", "Si County", "Dangshan County", "Lingbi County", "Other"] }, { "name": "Chaohu", "area": ["Juchao District", "Hanshan County", "Wuwei County", "Lujiang County", "He county", "Other"] }, { "name": "Lu'an", "area": ["Jin'an District", "Yu'an District", "Shou County", "Huoshan County", "Huoqiu County", "Shucheng County", "Jinzhai County", "Other"] }, { "name": "Bozhou", "area": ["Qiaocheng District", "Lixin County", "Woyang County", "Mengcheng County", "Other"] }, { "name": "Chizhou", "area": ["Guichi District", "Dongzhi County", "Shitai County", "Qingyang County", "Other"] }, { "name": "Xuancheng", "area": ["Xuanzhou District", "Ningguo City", "Guangde County", "Langxi County", "Jing County", "Jingde County", "Jixi County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Fujian", "city": [{ "name": "Fuzhou", "area": ["Gulou District", "Taijiang District", "Cangshan District", "Mawei District", "Jin'an District", "Fuqing City", "Changle City", "Minhou County", "Minqing County", "Yongtai County", "Lianjiang County", "Luoyuan County", "Pingtan County", "Other"] }, { "name": "Xiamen", "area": ["Siming District", "Haishu District", "Huli District", "Jimei District", "Tong'an District", "Xiang'an District", "Other"] }, { "name": "Putian", "area": ["Chengxiang District", "Hanjiang District", "Licheng District", "Xiuyu District", "Xianyou County", "Other"] }, { "name": "Sanming", "area": ["Meilie District", "Sanyuan District", "Yong'an City", "Mingxi County", "Jiangle County", "Datian County", "Ninghua County", "Jianning County", "Sha County", "Youxi County", "Qingliu County", "Taining County", "Other"] }, { "name": "Quanzhou", "area": ["Licheng District", "Fengze District", "Luojiang District", "Quangang District", "Shishi City", "Jinjiang City", "Nan'an City", "Hui'an County", "Yongchun County", "Anxi County", "Dehua County", "Jinmen County", "Other"] }, { "name": "Zhangzhou", "area": ["Xiangcheng District", "Longwen District", "Longhai City", "Pinghe County", "Nanjing County", "Zhao'an County", "Zhangpu County", "Hua'an County", "Dongshan County", "Changtai County", "Yunxiao County", "Other"] }, { "name": "Nanping", "area": ["Yanping District", "Jian'ou City", "Shaowu City", "Wuyishan City", "Jianyang City", "Songxi County", "Guangze County", "Shunchang County", "Pucheng County", "Zhenghe County", "Other"] }, { "name": "Longyan", "area": ["Xinluo District", "Zhangping City", "Changting County", "Wuping County", "Shanghang County", "Yongding County", "Liancheng County", "Other"] }, { "name": "Ningde", "area": ["Jiaocheng District", "Fu'an City", "Fuding City", "Shouning County", "Xiapu County", "Zherong County", "Pingnan County", "Gutian County", "Zhouning County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Jiangxi", "city": [{ "name": "Nanchang", "area": ["Donghu District", "Xihu District", "Qingyunpu District", "Wanli District", "Qingshanhu District", "Xinjian County", "Nanchang County", "Jinxian County", "Anyi County", "Other"] }, { "name": "Jingdezhen", "area": ["Zhushan District", "Changjiang District", "Leping City", "Fuliang County", "Other"] }, { "name": "Pingxiang", "area": ["Anyuan District", "Xiangdong District", "Lianhua County", "Shangli County", "Luxi County", "Other"] }, { "name": "Jiujiang", "area": ["Xunyang District", "Lushan District", "Ruichang City", "Jiujiang County", "Xingzi County", "Wuning County", "Pengze County", "Yongxiu County", "Xiushui County", "Hukou County", "De'an County", "Duchang County", "Other"] }, { "name": "Xinyu", "area": ["Yushui District", "Fenyi County", "Other"] }, { "name": "Yingtan", "area": ["Yuehu District", "Guixi City", "Yujiang County", "Other"] }, { "name": "Ganzhou", "area": ["Zhanggong District", "Ruijin City", "Nankang City", "Shicheng County", "Anyuan County", "Gan County", "Ningdu County", "Xunwu County", "Xingguo County", "Dingnan County", "Shangyou County", "Yudu County", "Longnan County", "Chongyi County", "Xinfeng County", "Quannan County", "Dayu County", "Huichang County", "Other"] }, { "name": "Ji'an", "area": ["Jizhou District", "Qingyuan District", "Jinggangshan City", "Ji'an County", "Yongfeng County", "Yongxin County", "Xingan County", "Taihe County", "Xiajiang County", "Suichuan County", "Anfu County", "Jishui County", "Wan'an County", "Other"] }, { "name": "Yichun", "area": ["Yuanzhou District", "Fengcheng City", "Zhangshu City", "Gao'an City", "Tonggu County", "Jing'an County", "Yifeng County", "Fengxin County", "Wanzai County", "Shanggao County", "Other"] }, { "name": "Fuzhou", "area": ["Linchuan District", "Nanfeng County", "Le'an County", "Jinxi County", "Nancheng County", "Dongxiang County", "Zixi County", "Yihuang County", "Guangchang County", "Lichuan County", "Chongren County", "Other"] }, { "name": "Shangrao", "area": ["Xinzhou District", "Dexing City", "Shangrao County", "Guangfeng County", "Poyang County", "Wuyuan County", "Qianshan County", "Yugan County", "Hengfeng County", "Yiyang County", "Yushan County", "Wannian County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Shandong", "city": [{ "name": "Jinan", "area": ["Central District", "Lixia District", "Tianqiao District", "Huaiyin District", "Licheng District", "Changqing District", "Zhangqiu City", "Pingyin County", "Jiyang County", "Shanghe County", "Other"] }, { "name": "Qingdao", "area": ["City Southern District", "City Northern District", "Chengyang District", "Sifang District", "Licang District", "Huangdao District", "Laoshan District", "Jiaonan City", "Jiaozhou City", "Pingdu City", "Laixi City", "Jimo City", "Other"] }, { "name": "Zibo", "area": ["Zhangdian District", "Linzi District", "Zichuan District", "Boshan District", "Zhoucun District", "Huantai County", "Gaoqing County", "Yiyuan County", "Other"] }, { "name": "Zaozhuang", "area": ["Central District", "Shanting District", "Yicheng District", "Taierzhuang District", "Xuecheng District", "Tengzhou City", "Other"] }, { "name": "Dongying", "area": ["Dongying District", "Hekou District", "Kenli County", "Guangrao County", "Lijin County", "Other"] }, { "name": "Yantai", "area": ["Zhifu District", "Fushan District", "Muping District", "Laishan District", "Longkou City", "Laiyang City", "Laizhou City", "Zhaoyuan City", "Penglai City", "Qixia City", "Haiyang City", "Long Island County", "Other"] }, { "name": "Weifang", "area": ["Weicheng Qu", "Hanting District", "Fangzi District", "Kuiwen District", "Qingzhou City", "Zhucheng", "Shouguang City", "Anqiu City", "Gaomi City", "Changyi City", "Changle County", "Linqu County", "Other"] }, { "name": "Jining", "area": ["Central District", "Rencheng District", "Qufu City", "Yanzhou City", "Zoucheng City", "Yutai County", "Jinxiang County", "Jiaxiang County", "Weishan County", "Wenshang County", "Yishui County", "Liangshan County", "Other"] }, { "name": "Taian", "area": ["Taishan District", "Daiyue District", "Xintai City", "Feicheng city", "Ningyang County", "Dongping County", "Other"] }, { "name": "Weihai", "area": ["Huancui District", "Rushan City", "Wendeng City", "Rongcheng City", "Other"] }, { "name": "Rizhao", "area": ["Donggang District", "Lanshan District", "Wulian County", "Ju County", "Other"] }, { "name": "Laiwu", "area": ["Laicheng District", "Tongcheng District", "Other"] }, { "name": "Linyi", "area": ["Lanshan District", "Luozhuang District", "Hedong District", "Yinan County", "Tancheng County", "Yishui County", "Cangshan County", "Fei County", "Pingyi County", "Junan County", "Mengyin County", "Linshu County", "Other"] }, { "name": "Dezhou", "area": ["Decheng District", "Leling City", "Yucheng city", "Ling County", "Ningjin County", "Qihe County", "Wucheng County", "Qingyun County", "Pingyuan County", "Xiajin County", "Linyi County", "Other"] }, { "name": "Liaocheng", "area": ["Dongchangfu District", "Linqing City", "Gaotang County", "Yanggu County", "Chiping County", "Shen County", "Dong'a County", "Guan County", "Other"] }, { "name": "Binzhou", "area": ["Bincheng District", "Zouping County", "Zhanhua County", "Huimin County", "Boxing County", "Yangxin County", "Wudi County", "Other"] }, { "name": "Heze", "area": ["Mudan District", "Juancheng County", "Shan county", "Yuncheng County", "Cao County", "Dingtao County", "Juye County", "Dongming County", "Chengwu County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Henan", "city": [{ "name": "Zhengzhou", "area": ["Zhongyuan District", "Jinshui District", "Erqi District", "Guancheng Hui Nationality District", "Shangxin District", "Huiji District", "Gongyi City", "Xinzheng City", "Xinmi City", "Dengfeng City", "Xingyang City", "Zhongmu County", "Other"] }, { "name": "Kaifeng", "area": ["Gulou District", "Longting District", "Shunhe Hui Nationality District", "Wangwangtai District", "Jinming District", "Kaifeng County", "Weishi County", "Lankao County", "Qi County", "Tongxu County", "Other"] }, { "name": "Luoyang", "area": ["Xigong District", "Laocheng District", "Jianxi District", "Chanhe Hui Nationality Area", "Luolong District", "Jili District", "Yanshi City", "Mengjin County", "Ruyang County", "Yichuan County", "Luoning County", "Song County", "Yiyang County", "Xin'an County", "Luanchuan County", "Other"] }, { "name": "Pingdingshan", "area": ["Xinhua District", "Weidong District", "Zhanhe District", "Shilong District", "Ruzhou City", "Wugang City", "Baofeng County", "Ye County", "Jia County", "Lushan County", "Other"] }, { "name": "Anyang", "area": ["Beiguan District", "Wenfeng District", "Yindu District", "Long'an District", "Linzhou City", "Anyang County", "Hua County", "Neihuang County", "Tangyin County", "Other"] }, { "name": "Hebi", "area": ["Qibin District", "Shancheng District", "Heshan District", "Xun County", "Qi County", "Other"] }, { "name": "Xinxiang", "area": ["Weibin District", "Hongqi District", "Fengquan District", "Muye District", "Weihui City", "Huixian City", "Xinxiang County", "Huojia County", "Yuanyang County", "Changyuan County", "Fengqiu County", "Yanjin County", "Other"] }, { "name": "Jiaozuo", "area": ["Jiefang District", "Zhongzhan District", "Macun District", "Shanyang District", "Qinyang City", "Mengzhou City", "Xiuwu County", "Wen County", "Wuzhi County", "Bo'ai County", "Other"] }, { "name": "Puyang", "area": ["Hualong District", "Shuyang County", "Nanle County", "Taiqian County", "Qingfeng County", "Fan County", "Other"] }, { "name": "Xu Chang", "area": ["Weidu District", "Yuzhou City", "Changge City", "Xuchang County", "Yanling County", "Xiangcheng County", "Other"] }, { "name": "Luohe", "area": ["Yuanhui District", "Yancheng District", "Zhaoling District", "Linying County", "Wuyang County", "Other"] }, { "name": "Sanmenxia", "area": ["Hubin District", "Yima City", "Lingbao City", "Mianchi County", "Lushi County", "Shan County", "Other"] }, { "name": "Nanyang", "area": ["Wolong District", "Wancheng District", "Dengzhou City", "Tongbai County", "Fangcheng County", "Xichuan County", "Zhenping County", "Tanghe County", "Nanzhao County", "Neixiang County", "Xinye County", "Sheqi County", "Xixia County", "Other"] }, { "name": "Shangqiu", "area": ["Liangyuan District", "Suiyang District", "Yongcheng City", "Ningling County", "Yucheng County", "Minquan County", "Xiayi County", "Zhecheng County", "Sui County", "Other"] }, { "name": "Xinyang", "area": ["Shihe District", "Pingqiao District", "Huangchuan County", "Huaibin County", "Xi County", "Xin County", "Shangcheng County", "Gushi County", "Luoshan County", "Guangshan County", "Other"] }, { "name": "Zhoukou", "area": ["Chuanhui District", "Xiangcheng City", "Shangshui County", "Huaiyang County", "Taikang County", "Luyi County", "Xihua County", "Fugou County", "Shenqiu County", "Dancheng County", "Other"] }, { "name": "Zhumadian", "area": ["Yicheng District", "Queshan County", "Xincai County", "Shangcai County", "Xiping County", "Biyang County", "Pingyu County", "Runan County", "Suiping County", "Zhengyang County", "Other"] }, { "name": "Jiaozuo", "area": ["Jiyuan City", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Hubei", "city": [{ "name": "Wuhan", "area": ["Jiang'an District", "Wuchang District", "Jianghan District", "Qiaokou District", "Hanyang District", "Qingshan District", "Hongshan District", "Dongxihu District", "Hannan District", "Caidian District", "Jiangxia District", "Huangpi District", "Xinzhou District", "Other"] }, { "name": "Huangshi", "area": ["Huangshi Port Area", "Xisaishan District", "Lower Land Area", "Tieshan District", "Daye City", "Yangxin County", "Other"] }, { "name": "Shiyan", "area": ["Zhangwan District", "Maojian District", "Danjiangkou City", "Yun County", "Zhushan County", "Fang County", "Yunxi County", "Zhuxi County", "Other"] }, { "name": "Jingzhou", "area": ["Shashi District", "Jingzhou District", "Honghu City", "Shishou City", "Songzi City", "Jianli County", "Gong'an County", "Jiangling County", "Other"] }, { "name": "Yichang", "area": ["Xiling District", "Wujiagang District", "Dianjun District", "Xiaoting District", "Yiling District", "Yidu City", "Dangyang City", "Zhijiang City", "Zigui County", "Yuan'an County", "Xingshan County", "Wufeng Tujia Autonomous County", "Changyang Tujia Autonomous County", "Other"] }, { "name": "Xiangfan", "area": ["Xiangcheng District", "Fancheng District", "Xiangyang District", "Laohekou City", "Zaoyang City", "Yicheng City", "Nanzhang County", "Gucheng County", "Baokang County", "Other"] }, { "name": "Ezhou", "area": ["Echeng District", "Huarong District", "Liangzihu District", "Other"] }, { "name": "Jingmen", "area": ["Dongbao District", "Duodao District", "Zhongxiang City", "Jingshan County", "Shayang County", "Other"] }, { "name": "Xiaogan", "area": ["Xiaonan District", "Yingcheng City", "Anlu City", "Hanchuan City", "Yunmeng County", "Dawu County", "Xiaochang County", "Other"] }, { "name": "Huanggang", "area": ["Huangzhou District", "Macheng", "Wuxue City", "Hong'an County", "Luotian County", "Xishui County", "Qichun County", "Huangmei County", "Yingshan County", "Tuanfeng County", "Other"] }, { "name": "Xianning", "area": ["Xian'an District", "Chibi City", "Jiayu County", "Tongshan County", "Chongyang County", "Tongcheng County", "Other"] }, { "name": "Suizhou", "area": ["Zengdu District", "Guangshui City", "Other"] }, { "name": "Enshi Tujia and Miao Autonomous Prefecture", "area": ["Enshi City", "Lichuan City", "Jianshi County", "Laifeng County", "Badong County", "Hefeng County", "Xuan'en County", "Xianfeng County", "Other"] }, { "name": "Xiantao", "area": ["Xiantao"] }, { "name": "Tianmen", "area": ["Tianmen"] }, { "name": "Qianjiang", "area": ["Qianjiang"] }, { "name": "Shennongjia Forest Area", "area": ["Shennongjia Forest Area"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Hu'nan", "city": [{ "name": "Changsha", "area": ["Yuelu District", "Furong District", "Tianxin District", "Kaifu District", "Yuhua District", "Liuyang City", "Changsha County", "Wangcheng County", "Ningxiang County", "Other"] }, { "name": "Zhuzhou", "area": ["Tianyuan District", "Hetang District", "Lusong District", "Shifeng District", "Liling City", "Zhuzhou County", "Yanling County", "Chaling County", "You County", "Other"] }, { "name": "Xiangtan", "area": ["Yuetang District", "Yuhu District", "Xiangxiang City", "Shaoshan City", "Xiangtan County", "Other"] }, { "name": "Hengyang", "area": ["Yanfeng District", "Zhuhui District", "Shigu District", "Zhengxiang District", "Nanyue District", "Leiyang City", "Changning City", "Hengyang County", "Hengdong County", "Hengshan County", "Hengnan County", "Qidong County", "Other"] }, { "name": "Shaoyang", "area": ["Shuangqing District", "Daxiang District", "Beita District", "Wugang City", "Shaodong County", "Dongkou County", "Xinshao County", "Suining County", "Xinning County", "Shaoyang County", "Longhui County", "Chengbu Miao Autonomous County", "Other"] }, { "name": "Yueyang", "area": ["Yueyang Building District", "Yunxi District", "Junshan District", "Linxiang City", "Miluo City", "Yueyang County", "Xiangyin County", "Pingjiang County", "Huarong County", "Other"] }, { "name": "Changde", "area": ["Wuling District", "Dingcheng District", "Jinshi City", "Li County", "Linli County", "Taoyuan County", "Hanshou County", "Anxiang County", "Shimen County", "Other"] }, { "name": "Zhangjiajie", "area": ["Yongding District", "Wulingyuan District", "Cili County", "Sangzhi County", "Other"] }, { "name": "Yiyang", "area": ["Heshan District", "Ziyang District", "Yuanjiang City", "Taojiang County", "Nan County", "Anhua County", "Other"] }, { "name": "Chenzhou", "area": ["Beihu District", "Suxian District", "Zixing City", "Yizhang County", "Yucheng County", "Anren County", "Jiahe County", "Linwu County", "Guidong County", "Yongxing County", "Guiyang County", "Other"] }, { "name": "Yongzhou", "area": ["Lengshuitan District", "Lingling District", "Qiyang County", "Lanshan County", "Ningyuan County", "Xintian County", "Dong'an County", "Jiangyong County", "Dao County", "Shuangpai County", "Jianghua Yao Autonomous County", "Other"] }, { "name": "Huaihua", "area": ["Hecheng District", "Hongjiang City", "Huitong County", "Yanling County", "Chenxi County", "Xupu County", "Zhongfang County", "Xinhuang Dong Autonomous County", "Minjiang Dong Autonomous County", "Channel Dong Autonomous County", "Jingzhou Miao and Dong Autonomous County", "Mayang Miao Autonomous County", "Other"] }, { "name": "Bottom", "area": ["Comet area", "Lengshuijiang City", "Lianyuan City", "Xinhua County", "Shuangfeng County", "Other"] }, { "name": "Xiangxi Tujia and Miao Autonomous Prefecture", "area": ["Jishou City", "Guzhang County", "Longshan County", "Yongshun County", "Fenghuang County", "Luxi County", "Baojing County", "Huayuan County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Guangdong", "city": [{ "name": "Guangzhou", "area": ["Yuexiu District", "Liwan District", "Haizhu District", "Tianhe District", "Baiyun District", "Huangpu District", "Fanyu District", "Huadu District", "Nansha District", "Luogang District", "Zengcheng City", "Conghua City", "Other"] }, { "name": "Shenzhen", "area": ["Futian District", "Luohu District", "Nanshan District", "Bao'an District", "Longgang District", "Yantian District", "Other"] }, { "name": "Dongguan", "area": ["Guancheng", "Changping", "Tangxia", "Tangxia", "Tangxia", "Other"] }, { "name": "Zhongshan", "area": ["Zhongshan"] }, { "name": "Chaozhou", "area": ["Xiangqiao District", "Chao'an County", "Raoping County", "Other"] }, { "name": "Jieyang", "area": ["Rongcheng District", "Jiedong County", "Jiexi County", "Huilai County", "Puning City", "Other"] }, { "name": "Yunfu", "area": ["Yuncheng District", "Xinxing County", "Yunan County", "Yun'an County", "Luoding City", "Other"] }, { "name": "Zhuhai", "area": ["Xiangzhou District", "Doumen District", "Jinwan District", "Other"] }, { "name": "Shantou", "area": ["Jinping District", "Haojiang District", "Longhu District", "Chaoyang District", "Chaonan District", "Chenghai District", "Nan'ao County", "Other"] }, { "name": "Shaoguan", "area": ["Zhenjiang District", "Wujiang District", "Qujiang District", "Lechang City", "Nanxiong City", "Shixing County", "Renhua County", "Wengyuan County", "Xinfeng County", "Ruyuan Yao Autonomous County", "Other"] }, { "name": "Foshan", "area": ["Chancheng District", "Nanhai District", "Shunde District", "Sanshui District", "Gaoming District", "Other"] }, { "name": "Jiangmen", "area": ["Pengjiang District", "Jianghai District", "Xinhui District", "Enping City", "Taishan City", "Kaiping City", "Heshan City", "Other"] }, { "name": "Zhanjiang", "area": ["Chikan District", "Xiashan District", "Potou District", "Mazhang District", "Wuchuan City", "Lianjiang City", "Leizhou City", "Suixi County", "Xuwen County", "Other"] }, { "name": "Maoming", "area": ["Maonan District", "Maogang District", "Huazhou City", "Xinyi City", "Gaozhou", "Dianbai County", "Other"] }, { "name": "Zhaoqing", "area": ["Duanzhou District", "Dinghu District", "Gaoyao City", "Sihui City", "Guangning County", "Huaiji County", "Fengkai County", "Deqing County", "Other"] }, { "name": "Huizhou", "area": ["Huicheng District", "Huiyang District", "Boluo County", "Huidong County", "Longmen County", "Other"] }, { "name": "Meizhou", "area": ["Meijiang District", "Xingning City", "Mei County", "Dapu County", "Fengshun County", "Wuhua County", "Pingyuan County", "Jiaoling County", "Other"] }, { "name": "Shanwei", "area": ["Urban Area", "Lufeng City", "Haifeng County", "Luhe County", "Other"] }, { "name": "Heyuan", "area": ["Yuancheng District", "Zijin County", "Longchuan County", "Lianping County", "Heping County", "Dongyuan County", "Other"] }, { "name": "Yangjiang", "area": ["Jiangcheng District", "Yangchun City", "Yangxi County", "Yangdong County", "Other"] }, { "name": "Qingyuan", "area": ["Qingcheng District", "Yingde City", "Lianzhou City", "Fogang County", "Yangshan County", "Qingxin County", "Lianshan Zhuang and Yao Autonomous County", "Liannan Yao Autonomous County", "Other"] }]
	}, {
	    "name": "Guangxi", "city": [{ "name": "Nanning", "area": ["Qingxiu District", "Xingning District", "Xixiangtang District", "Liangqing District", "Jiangnan District", "Yongning District", "Wuming County", "Longan County", "Mashan County", "Shanglin County", "Binyang County", "Heng County", "Other"] }, { "name": "Liuzhou", "area": ["Chengzhong District", "Yufeng District", "Liubei District", "Liunan District", "Liujiang County", "Liucheng County", "Luzhai County", "Rong'an County", "Rongshui Miao Autonomous County", "Sanjiang Dong Autonomous County", "Other"] }, { "name": "Guilin", "area": ["Xiangshan District", "Xiufeng District", "Stacking area", "Qixing District", "Yanshan District", "Yangshuo County", "Lingui County", "Lingchuan County", "Quanzhou County", "Pingle County", "Xing'an County", "Guanyang County", "Lipu County", "Ziyuan County", "Yongfu County", "Longsheng Multinational Autonomous County ", "Gongcheng Yao Autonomous County", "Other"] }, { "name": "Wuzhou", "area": ["Wanxiu District", "Dieshan District", "Changzhou District", "Cenxi City", "Cangwu County", "Teng County", "Mengshan County", "Other"] }, { "name": "Beihai", "area": ["Haicheng District", "Yinhai District", "Tieshan Port Area", "Hepu County", "Other"] }, { "name": "Fangchenggang", "area": ["Port Area", "Fangcheng District", "Dongxing City", "Shangsi County", "Other"] }, { "name": "Qinzhou", "area": ["Qinnan District", "Qinbei District", "Lingshan County", "Pubei County", "Other"] }, { "name": "Guigang", "area": ["Gangbei District", "Gangnam District", "Qintang District", "Guiping City", "Pingnan County", "Other"] }, { "name": "Yulin", "area": ["Yuzhou District", "Beiliu City", "Rong County", "Luchuan County", "Bobai County", "Xingye County", "Other"] }, { "name": "Baise", "area": ["Youjiang District", "Lingyun County", "Pingguo County", "Xilin County", "Leye County", "Debao County", "Tianlin County", "Tianyang County", "Jingxi County", "Tiandong County", "Napo County", "Longlin Multinational Autonomous County", "Other"] }, { "name": "Hezhou", "area": ["Babu District", "Zhongshan County", "Zhaoping County", "Fuchuan Yao Autonomous County", "Other"] }, { "name": "Hechi", "area": ["Jinchengjiang District", "Yizhou City", "Tian'e County", "Fengshan County", "Nandan County", "Donglan County", "Du'an Yao Autonomous County", "Luocheng Mulam Autonomous County", "Bama Yao Autonomous County", "Huanjiang Maonan Autonomous County", "Dahua Yao Autonomous County", "Other"] }, { "name": "Guest", "area": ["Xingbin District", "Heshan City", "Xiangzhou County", "Wuxuan County", "Xincheng County", "Jinxiu Yao Autonomous County", "Other"] }, { "name": "Chongzuo", "area": ["Jiangzhou District", "Pingxiang City", "Ningming County", "Fusui County", "Longzhou County", "Daxin County", "Tiandeng County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Hainan", "city": [{ "name": "Haikou", "area": ["Longhua District", "Xiuying District", "Qiongshan District", "Meilan District", "Other"] }, { "name": "Sanya", "area": ["Sanya City", "Other"] }, { "name": "Wuzhishan", "area": ["Wuzhishan"] }, { "name": "Qionghai", "area": ["Qionghai"] }, { "name": "Danzhou", "area": ["Danzhou"] }, { "name": "Wenchang", "area": ["Wenchang"] }, { "name": "Wanning", "area": ["Wanning"] }, { "name": "Dongfang", "area": ["Dongfang"] }, { "name": "Chengmai County", "area": ["Chengmai County"] }, { "name": "Ding'an County", "area": ["Ding'an County"] }, { "name": "Tunchang County", "area": ["Tunchang County"] }, { "name": "Lingao County", "area": ["Lingao County"] }, { "name": "Baisha Li Autonomous County", "area": ["Baisha Li Autonomous County"] }, { "name": "Changjiang Li Autonomous County", "area": ["Changjiang Li Autonomous County"] }, { "name": "Ledong Li Autonomous County", "area": ["Ledong Li Autonomous County"] }, { "name": "Lingshui Li Autonomous County", "area": ["Lingshui Li Autonomous County"] }, { "name": "Baoting Li and Miao Autonomous County", "area": ["Baoting Li and Miao Autonomous County"] }, { "name": "Qiongzhong Li and Miao Autonomous County", "area": ["Qiongzhong Li and Miao Autonomous County"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Chongqing", "city": [{ "name": "Chongqing", "area": ["Yuzhong District", "Dadukou District", "Jiangbei District", "Nan'an District", "Beibei District", "Yubei District", "Banan District", "Changshou District", "Shuangqiao District", "Shapingba District", "Wansheng District", "Wanzhou District", "Fuling District", "Qianjiang District", "Yongchuan District", "Hechuan District", "Jiangjin District", "Jiulongpo District", "Nanchuan District", "Qijiang County", "Tongnan District", "Rongchang County", "Bishan County", "Dazu County", "Tongliang County", "Liangping County", "Kai County", "Zhong County", "Chengkou County", "Dianjiang County", "Wulong County", "Fengdu County", "Fengjie County", "Yunyang County", "Wuxi County", "Wushan County", "Shizhu Tujia Autonomous County", "Xiushan Tujia and Miao Autonomous County", "Xiangyang Tujia and Miao Autonomous County", "Pengshui Miao and Tujia Autonomous County", "Other"] }]
	}, {
	    "name": "Sichuan", "city": [{ "name": "Chengdu", "area": ["Qingyang District", "Jinjiang District", "Jinniu District", "Wuhou District", "Chenghua District", "Longquanyi District", "Qingbaijiang District", "Xindu District", "Wenjiang District", "Dujiangyan City", "Pengzhou City", "Qionglai City", "Chongzhou City", "Jintang County", "Pi County", "Xinjin County", "Shuangliu County", "Pujiang County", "Dayi County", "Other"] }, { "name": "Zigong", "area": ["Daan District", "Ziliujing District", "Gongjing District", "Yantan District", "Rong County", "Fushun County", "Other"] }, { "name": "Panzhihua", "area": ["Renhe District", "Miyi County", "Yanbian County", "Eastern District", "Western District", "Other"] }, { "name": "Luzhou", "area": ["Jiangyang District", "Naxi District", "Longmatan District", "Lu County", "Hejiang County", "Xuyong County", "Gulin County", "Other"] }, { "name": "Deyang", "area": ["Jingyang District", "Guanghan City", "Shifang City", "Mianzhu City", "Luojiang County", "Zhongjiang County", "Other"] }, { "name": "Mianyang", "area": ["Fucheng District", "Youxian District", "Jiangyou City", "Yanting County", "Santai County", "Pingwu County", "An County", "Zitong County", "Beichuan Qiang Autonomous County", "Other"] }, { "name": "Guangyuan", "area": ["Yuanba District", "Chaotian District", "Qingchuan County", "Wangcang County", "Jiange County", "Cangxi County", "Shizhong District", "Other"] }, { "name": "Suining", "area": ["Chuanshan District", "Anju District", "Shehong County", "Pengxi County", "Daying County", "Other"] }, { "name": "Neijiang", "area": ["Shizhong District", "Dongxing District", "Zizhong County", "Longchang County", "Weiyuan County", "Other"] }, { "name": "Leshan", "area": ["Shizhong District", "Wutongqiao District", "Shawan District", "Jinkouhe District", "Emeishan City", "Jiajiang County", "Jingyan County", "Qianwei County", "Muchuan County", "Mabian Yi Autonomous County", "Yibian Yi Autonomous County", "Other"] }, { "name": "Nanchong", "area": ["Shunqing District", "Gaoping District", "Jialing District", "Langzhong City", "Yingshan County", "Peng'an County", "Yilong County", "Nanbu County", "Xichong County", "Other"] }, { "name": "Meishan", "area": ["Dongpo District", "Renshou County", "Pengshan County", "Hongya County", "Danling County", "Qingshen County", "Other"] }, { "name": "Yibin", "area": ["Cuiping District", "Yibin County", "Xingwen County", "Nanxi County", "Gong County", "Changning County", "Gao County", "Jiang'an County", "Junlian County", "Pingshan County", "Other"] }, { "name": "Guang'an", "area": ["Guang'an District", "Huaying City", "Yuechi County", "Linshui County", "Wusheng County", "Other"] }, { "name": "Dazhou", "area": ["Tongchuan District", "Wanyuan City", "Daxian", "Qu County", "Xuanhan County", "Kaijiang County", "Dazhu County", "Other"] }, { "name": "Yaan", "area": ["Yucheng District", "Lushan County", "Shimian County", "Mingshan County", "Tianquan County", "Yingjing County", "Baoxing County", "Hanyuan County", "Other"] }, { "name": "Bazhong", "area": ["Bazhou District", "Nanjiang County", "Pingchang County", "Tongjiang County", "Other"] }, { "name": "Ziyang", "area": ["Yanjiang District", "Jianyang City", "Anyue County", "Lezhi County", "Other"] }, { "name": "Aba Tibetan and Qiang Autonomous Prefecture", "area": ["Malcom County", "Jiuzhaigou County", "Hongyuan County", "Wenchuan County", "Aba County", "Li County", "Ruoergai County", "Xiaojin County", "Heishui County", "Jinchuan County", "Songpan County", "Xiangtang County", "Mao County", "Other"] }, { "name": "Ganzi Tibetan Autonomous Prefecture", "area": ["Kangding County", "Danba County", "Luhuo County", "Jiulong County", "Ganzi County", "Yajiang County", "Xinlong County", "Daofu County", "Baiyu County", "Litang County", "Dege County", "Xiangcheng County", "Shiqu County", "Daocheng County", "Seda County", "Batang County", "Luding County", "Derong County", "Other"] }, { "name": "Liangshan Yi Autonomous Prefecture", "area": ["Xichang City", "Meigu County", "Zhaojue County", "Jinyang County", "Ganluo County", "Butuo County", "Leibo County", "Puge County", "Ningnan County", "Xide County", "Huidong County", "Yuexi County", "Huili County", "Yanyuan County", "Dechang County", "Mianning County", "Muli Tibetan Autonomous County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Guizhou", "city": [{ "name": "Guiyang", "area": ["Nanming District", "Yunyan District", "Huaxi District", "Wudang District", "Baiyun District", "Xiaohe District", "Qingzhen City", "Kaiyang County", "Xiuwen County", "Xifeng County", "Other"] }, { "name": "Liupanshui", "area": ["Zhongshan District", "Shuicheng County", "Pan County", "Liuzhite District", "Other"] }, { "name": "Zunyi", "area": ["Honghuagang District", "Huichuan District", "Chishui City", "Renhuai City", "Zunyi County", "Suiyang County", "Tongzi County", "Xishui County", "Fenggang County", "Zheng'an County", "Yuqing County", "Meitan County", "Daozhen Gelao and Miao Autonomous County", "Wuchuan Gelao and Miao Autonomous County", "Other"] }, { "name": "Anshun", "area": ["Xixiu District", "Puding County", "Pingba County", "Zhenning Buyi and Miao Autonomous County", "Ziyun Buyi and Miao Autonomous County", "Guanling Buyi and Miao Autonomous County", "Other"] }, { "name": "Tongren Area", "area": ["Tongren City", "Dejiang County", "Jiangkou County", "Sinan County", "Shiqian County", "Yuping Dong Autonomous County", "Songtao Miao Autonomous County", "Yinjiang Tujia and Miao Autonomous County", "Yanhe Tujia Autonomous County", "Wanshan Special Area", "Other"] }, { "name": "Bijie Area", "area": ["Bijie City", "Qianxi County", "Dafang County", "Zhijin County", "Jinsha County", "Hezhang County", "Nayong County", "Weining Yi Hui and Miao Autonomous County", "Other"] }, { "name": "Southwest Qian Buyi and Miao Autonomous Prefecture", "area": ["Xingyi City", "Wangmo County", "Xingren County", "Pu'an County", "Ceheng County", "Qinglong County", "Zhenfeng County", "Anlong County", "Other"] }, { "name": "Southeast Qian Miao and Dong Autonomous Prefecture", "area": ["Kaili City", "Shibing County", "Congjiang County", "Jinping County", "Zhenyuan County", "Majiang County", "Taijiang County", "Tianzhu County", "Huangping County", "Rongjiang County", "Jianhe County", "Sansui County", "Leishan County", "Liping County", "Cengong County", "Danzhai County", "Other"] }, { "name": "South Qian Buyi and Miao Autonomous Prefecture", "area": ["Duyun City", "Fuquan City", "Guiding County", "Huishui County", "Luodian County", "Chun'an County", "Libo County", "Longli County", "Pingtang County", "Changshun County", "Dushan County", "Sandu Shui Autonomous County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Yunnan", "city": [{ "name": "Kunming", "area": ["Panlong District", "Wuhua District", "Guandu District", "Xishan District", "Dongchuan District", "Anning City", "Chenggong County", "Jinning County", "Fumin County", "Yiliang County", "Songming County", "Shilin Yi Autonomous County", "Luquan Yi and Miao Autonomous County", "Xundian Hui and Yi Autonomous County", "Other"] }, { "name": "Qujing", "area": ["Qilin District", "Xuanwei City", "Malong County", "Zhanyi County", "Fuyuan County", "Luoping County", "Shizong County", "Luliang County", "Huize County", "Other"] }, { "name": "Yuxi", "area": ["Hongta District", "Jiangchuan County", "Chengjiang County", "Tonghai County", "Huaning County", "Yimen County", "Eshan Yi Autonomous County", "Xinping Yi and Dong Autonomous County", "Yuanjiang Hani Dai and Yi Autonomous County", "Other"] }, { "name": "Baoshan", "area": ["Longyang District", "Shidian County", "Tengchong County", "Longling County", "Changning County", "Other"] }, { "name": "Zhaotong", "area": ["Zhaoyang District", "Ludian County", "Qiaojia County", "Yanjin County", "Daguan County", "Yongshan County", "Suijiang County", "Zhenxiong County", "Yiliang County", "Weixin County", "Shuifu County", "Other"] }, { "name": "Lijiang", "area": ["Gucheng District", "Yongsheng County", "Huaping County", "Yulong Naxi Autonomous County", "Ninglang Yi Autonomous County", "Other"] }, { "name": "Pu'er", "area": ["Simao District", "Pu'er Hani and Yi Autonomous County", "Mojiang Hani Autonomous County", "Jingdong Yi Autonomous County", "Jinggu Yi and Dai Autonomous County", "Zhenuan Yi Hani ad Lahu Autonomous County", "Jiangcheng Hani and Yi Autonomous County", "Menglian Dai Lahu and Wa Autonomous County", "Lancang Lagu Autonomous County", "Ximeng Wa Autonomous County", "Other"] }, { "name": "Lincang", "area": ["Linxiang District", "Fengqing County", "Yun County", "Yongde County", "Zhenkang County", "Shuangjiang Lahu Wa Blang and Dai Autonomous County", "Gengma Dai and Wa Autonomous County", "Cangyuan Wa Autonomous County", "Other"] }, { "name": "Dehong Dai and Jingpo Autonomous Prefecture", "area": ["Luxi City", "Ruili City", "Lianghe County", "Yingjiang County", "Longchuan County", "Other"] }, { "name": "Nujiang Lisu Autonomous Prefecture", "area": ["Lushui County", "Fugong County", "Gongshan Dulong and Nu Autonomous County", "Lanping Baizu and Pumi Autonomous County", "Other"] }, { "name": "Diqing Tibetan Autonomous Prefecture", "area": ["Shangri-La County", "Deqin County", "Weixi Lisu Autonomous County", "Other"] }, { "name": "Dali Bai Autonomous Prefecture", "area": ["Dali City", "Xiangyun County", "Binchuan County", "Midu County", "Yongping County", "Yunlong County", "Eryuan County", "Jianchuan County", "Heqing County", "Yangbi Yi Autonomous County", "Nanjian Yi Autonomous County", "Weishan Yi and Hui Autonomous County", "Other"] }, { "name": "Chuxiong Yi Autonomous Prefecture", "area": ["Chuxiong City", "Shuangbai County", "Muding County", "Nanhua County", "Yao'an County", "Dayao County", "Yongren County", "Yuanmou County", "Wuding County", "Lufeng County", "Other"] }, { "name": "Honghe Hani and Yi Autonomous Prefecture", "area": ["Mengzi County", "Gejiu City", "Kaiyuan City", "LVchun County", "Jianshui County", "Shiping County", "Mile County", "Luxi County", "Yuanyang County", "Honghe County", "Jinping Miao Yao and Dai Autonomous County", "Hekou Yao Autonomous County", "Pingbian Miao Autonomous County", "Other"] }, { "name": "Wenshan Zhuang and Miao Autonomous Prefecture", "area": ["Wenshan County", "Yanshan County", "Xichou County", "Malipo County", "Maguan County", "Qiubei County", "Guangnan County", "Funing County", "Other"] }, { "name": "Xishuangbanna Dai Autonomous Prefecture", "area": ["Jinghong City", "Menghai County", "Mengla County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Tibet", "city": [{ "name": "Lhasa", "area": ["Chengguan District", "Linzhou County", "Dangxiong County", "Nimu County", "Qushui County", "Duilongdeqing County", "Dazi County", "Mozhugongka County", "Other"] }, { "name": "Naqu Area", "area": ["Naqu County", "Jiali County", "Biru county", "Nierong County", "Anduo County", "Shenzha County", "Suo County", "Bange County", "Baqing County", "Nima County", "Other"] }, { "name": "Changdu Area", "area": ["Changdu County", "Jiangda County", "Gongjue County", "Leiwuqi County", "Dingqing County", "Chaya County", "Basu County", "Zuogong County", "Mangkang County", "Luolong County", "Bianba County", "Other"] }, { "name": "Linzhi Area", "area": ["Linzhi County", "Gongbujiangda County", "Milin County", "Medog County", "Bomi County", "Chayu County", "Lang County", "Other"] }, { "name": "Shannan Area", "area": ["Naidong County", "Chanang County", "Gongga County", "Sangri County", "Qiongjie County", "Qusong County", "Cuomei County", "Loza County", "Jiacha County", "Longzi County", "Cuona County", "Langkazi County", "Other"] }, { "name": "Shigatse Area", "area": ["Shigatse City", "Nanmling County", "Jiangzi County", "Dingri County", "Sag'ya County", "Lazi County", "Angren County", "Xietongmen County", "Bailang County", "Renbu County", "Kangma County", "Dingjie County", "Zhongba County", "Yadong County", "Jilong County", "Nyalam County", "Saga County", "Gamba County", "Other"] }, { "name": "Ali area", "area": ["Gar County", "Pulan County", "Zanda County", "Ritu County", "Geji County", "Gerze county", "Coqen County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Shaanxi", "city": [{ "name": "Xi'an", "area": ["Lianhu District", "New Urban Area", "Beilin District", "Yanta District", "Baqiao District", "Weiyang District", "Yanliang District", "Lintong District", "Chang'an District", "Gaoling County", "Lantian County", "Hu County", "Zhouzhi County", "Other"] }, { "name": "Tongchuan", "area": ["Yaozhou District", "Wangyi District", "Yintai District", "Yijun County", "Other"] }, { "name": "Baoji", "area": ["Weibin District", "Jintai District", "Chencang District", "Qishan County", "Fengxiang County", "Long County", "Taibai County", "Linyou County", "Fufeng County", "Qianyang County", "Mei County", "Feng County", "Other"] }, { "name": "Xianyang", "area": ["Qindu District", "Weicheng District", "Yangling District", "Xingping City", "Liquan County", "Jingyang County", "Yongshou County", "Sanyuan County", "Bin County", "Xunyi County", "Changwu County", "Qian County", "Wugong County", "Chunhua County", "Other"] }, { "name": "Weinan", "area": ["Linyi District", "Hancheng City", "Huayin City", "Pucheng County", "Tongguan County", "Baishui County", "Chengcheng County", "Hua County", "Heyang County", "Fuping County", "Dali County", "Other"] }, { "name": "Yan'an", "area": ["Baota District", "Ansai County", "Luochuan County", "Zichang County", "Huangling County", "Yanchuan County", "Fu County", "Yanchang County", "Ganquan County", "Yichuan County", "Zhidan County", "Huanglong County", "Wuqi County", "Other"] }, { "name": "Hanzhong", "area": ["Hantai District", "Liuba County", "Zhenba County", "Chenggu County", "Nanzheng County", "Yang County", "Ningqiang County", "Foping County", "Mian County", "Xixiang County", "Lueyang County", "Other"] }, { "name": "Yulin", "area": ["Yuyang District", "Qingjian County", "Suide County", "Shenmu County", "Jia County", "Fugu County", "Zizhou County", "Jingbian County", "Hengshan County", "Mizhi County", "Wubao County", "Dingbian County", "Other"] }, { "name": "Ankang", "area": ["Hanbin District", "Ziyang County", "Langao County", "Xunyang County", "Zhenping County", "Pingli County", "Shiquan County", "Ningshan County", "Baihe County", "Hanyin County", "Other"] }, { "name": "Shangluo", "area": ["Shangzhou District", "Zhen'an County", "Shanyang County", "Luonan County", "Shangnan County", "Danfeng County", "Zhashui County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Gansu", "city": [{ "name": "Lanzhou", "area": ["Chengguan District", "Qilihe District", "Xigu District", "Anning District", "Honggu District", "Yongdeng County", "Gaolan County", "Yuzhong County", "Other"] }, { "name": "Jiayuguan", "area": ["Jiayuguan City", "Other"] }, { "name": "Jinchang", "area": ["Jinchuan District", "Yongchang County", "Other"] }, { "name": "Baiyin", "area": ["Baiyin area", "Pingchuan District", "Jingyuan County", "Huining County", "Jingtai County", "Other"] }, { "name": "Tianshui", "area": ["Qingshui County", "Qin'an County", "Gangu County", "Wushan County", "Zhangjiachuan Hui Autonomous County", "Beidao District", "Qincheng District", "Other"] }, { "name": "Wuwei", "area": ["Liangzhou District", "Minqin County", "Gulang County", "Tianzhu Tibetan Autonomous County", "Other"] }, { "name": "Jiuquan", "area": ["Suzhou District", "Yumen City", "Dunhuang City", "Jinta County", "Subei Mongolian Autonomous County", "Akesai Kazakh Autonomous County", "Anxi County", "Other"] }, { "name": "Zhangye", "area": ["Ganzhou District", "Minle County", "Linze County", "Gaotai County", "Shandan County", "Sunan Yugu Autonomous County", "Other"] }, { "name": "Qingyang", "area": ["Xifeng District", "Qingcheng County", "Huan County", "Huachi County", "Heshui County", "Zhengning County", "Ning County", "Zhenyuan County", "Other"] }, { "name": "Pingliang", "area": ["Kongtong District", "Jingchuan County", "Lingtai County", "Chongxin County", "Huating County", "Zhuanglang County", "Jingning County", "Other"] }, { "name": "Dingxi", "area": ["Anding District", "Tongwei County", "Lintao County", "Zhang County", "Min County", "Weiyuan County", "Longxi County", "Other"] }, { "name": "Longnan", "area": ["Wudu District", "Cheng County", "Tanchang County", "Kang County", "Wen County", "Xihe County", "Li County", "Liangdang County", "Hui County", "Other"] }, { "name": "Linxia Hui Autonomous Prefecture", "area": ["Linxia City", "Linxia County", "Kangle County", "Yongjing County", "Guanghe County", "Hezheng County", "Dongxiang Autonomous County", "Jishishan Baoan Dongxiang Sala Autonomous County", "Other"] }, { "name": "Gannan Tibetan Autonomous Prefecture", "area": ["Hezuo City", "Lintan County", "Zhuoni County", "Zhouqu County", "Diebu County", "Maqu County", "Luqu County", "Xiahe County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Qinghai", "city": [{ "name": "Xining", "area": ["Chengzhong District", "Chengdong District", "Chengxi District", "Chengbei District", "Huangyuan County", "Huangzhong County", "Datong Hui Nationality Autonomous County", "Other"] }, { "name": "Haidong area", "area": ["Pingan County", "Ledu County", "Minhe Hui and Tu Autonomous County", "Huzhu Tu Autonomous County", "Hualong Hui Autonomous County", "Xunhua Sala Autonomous County", "Other"] }, { "name": "Haibei Tibetan Autonomous Prefecture", "area": ["Haiyan County", "Qilian County", "Gangcha County", "Menyuan Hui Autonomous County", "Other"] }, { "name": "Hainan Tibetan Autonomous Prefecture", "area": ["Gonghe County", "Tongde County", "Guide County", "Xinghai County", "Guinan County", "Other"] }, { "name": "Huangnan Tibetan Autonomous Prefecture", "area": ["Tongren County", "Jianzha County", "Zeku County", "Henan Mongolian Autonomous County", "Other"] }, { "name": "Guoluo Tibetan Autonomous Prefecture", "area": ["Maqin County", "Banma County", "Gande County", "Dari County", "Jiuzhi County", "Maduo County", "Other"] }, { "name": "Yushu Tibetan Autonomous Prefecture", "area": ["Yushu County", "Zaduo County", "Chengduo County", "Zhiduo County", "Nangqian County", "Qumalai County", "Other"] }, { "name": "Haixi Mongolian and Tibetan Autonomous Prefecture", "area": ["Delingha City", "Golmud City", "Wulan County", "Dulan County", "Tianjun County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Ningxia", "city": [{ "name": "Yinchuan", "area": ["Xingqing District", "Xixia District", "Jinfeng District", "Lingwu City", "Yongning County", "Helan County", "Other"] }, { "name": "Shizuishan", "area": ["Dawukou District", "Huinong District", "Pingluo County", "Other"] }, { "name": "Wuzhong", "area": ["Litong District", "Qingtongxia City", "Yanchi County", "Tongxin County", "Other"] }, { "name": "Guyuan", "area": ["Yuanzhou District", "Xiji County", "Longde County", "Jingyuan County", "Pengyang County", "Other"] }, { "name": "Zhongwei", "area": ["Shapotou District", "Zhongning County", "Haiyuan County", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Xinjiang", "city": [{ "name": "Urumqi", "area": ["Tianshan District", "Shaybak District", "New Urban Area", "Shuimogou District", "Toutunhe District", "Dabancheng District", "Dongshan District", "Urumqi County", "Other"] }, { "name": "Karamay", "area": ["Karamay District", "Dushanzi District", "Baijitan area", "Urho District", "Other"] }, { "name": "Turpan Area", "area": ["Turpan City", "Toksun County", "Shanshan County", "Other"] }, { "name": "Hami area", "area": ["Hami City", "Yiwu County", "Balikun Kazakh Autonomous County", "Other"] }, { "name": "Hotan area", "area": ["Hotan City", "Hotan County", "Luopu County", "Minfeng County", "Pishan County", "Celle County", "Yutian County", "Moyu County", "Other"] }, { "name": "Aksu Area", "area": ["Aksu City", "Wensu County", "Shaya County", "Baicheng County", "Awati County", "Kuche County", "Keping County", "Xinhe County", "Wushi County", "Other"] }, { "name": "Kashgar Area", "area": ["Kashgar City", "Bachu County", "Zepu County", "Jiashi County", "Yecheng County", "Yuepuhu County", "Shule County", "Makati County", "Yingjisha County", "Shache County", "Shufu County", "Tashkurgan Tajik Autonomous County", "Other"] }, { "name": "Kizilsu Kirghiz Autonomous Prefecture", "area": ["Atushi City", "Aheqi County", "Wuqia County", "Akto County", "Other"] }, { "name": "Bayin Guoyu Mongolian Autonomous Prefecture", "area": ["Korla City", "Hejing County", "Yuli County", "Heshuo County", "Qiemo County", "Bohu County", "Luntai County", "Ruoqiang County", "Yanqi Hui Autonomous County", "Other"] }, { "name": "Changji Hui Autonomous Prefecture", "area": ["Changji City", "Fukang City", "Qitai County", "Manas County", "Jimsar County", "Hutubi County", "Mulei Kazakh Autonomous County", "Miquan City", "Other"] }, { "name": "Bortala Mongolian Autonomous Prefecture", "area": ["Bole City", "Jinghe County", "Wenquan County", "Other"] }, { "name": "Shihezi", "area": ["Shihezi"] }, { "name": "Alar", "area": ["Alar"] }, { "name": "Tumushuk", "area": ["Tumushuk"] }, { "name": "Wujiaqu", "area": ["Wujiaqu"] }, { "name": "Ili Kazakh Autonomous Prefecture", "area": ["Yining City", "Kuitun City", "Yining County", "Turks County", "Nilek County", "Zhaosu County", "Xinyuan County", "Huocheng County", "Gongliu County", "Chabuchar Xibe Autonomous County", "Tacheng Area", "Altay Area", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Taiwan", "city": [{ "name": "Taiwan", "area": ["Taipei City", "Kaohsiung City", "Taipei County", "Taoyuan County", "Hsinchu County", "Miaoli County", "Taichung County", "Changhua County", "Nantou County", "Yunlin County", "Chiayi County", "Tainan County", "Kaohsiung County", "Pingtung County", "Yilan County", "Hualien County", "Taitung County", "Wuhu County", "Keelung City", "Hsinchu City", "Taichung City", "Chiayi City", "Tainan City", "Other"] }, { "name": "Other", "area": ["Other"] }]
	}, {
	    "name": "Macao", "city": [{ "name": "Macao", "area": ["Huadi Matang District", "Freguesia De Santo António ", "Sé Freguesias", "Wangdetang District", "Fengshuntang District", "Jiamotang District", "San Francesco Di Assisi District", "Ludang", "Other"] }]
	}, {
	    "name": "Hong Kong", "city": [{ "name": "Hong Kong", "area": ["Central and Western District", "Wanchai District", "Eastern District", "Southern District", "Sham Shui Po District", "Yau Tsim Mong District", "Kowloon City District", "Wong Tai Sin District", "Kwun Tong District", "Northern District", "Tai Po District", "Sha Tin District", "Sai Kung District", "Yuen Long District", "Tuen Mun District", "Quanwan District", "Kwai Tsing District", "Lidao District", "Other"] }]
	}];
	exports["default"] = provinceData;
	module.exports = exports["default"];

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _src = __webpack_require__(84);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @title 地区级联
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @description 中国地区级联
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	var Demo1 = function (_Component) {
		_inherits(Demo1, _Component);
	
		function Demo1() {
			_classCallCheck(this, Demo1);
	
			var _this = _possibleConstructorReturn(this, _Component.call(this));
	
			_this.onChange = function (obj) {
				console.log(obj);
			};
	
			_this.btnOnClick = function () {
				_this.setState({
					value: { province: '山西', city: '长治', area: '长治县' }
				});
			};
	
			_this.state = {
				defaultValue: { province: '北京', city: '北京', area: '东城区' },
				value: null
			};
			return _this;
		}
	
		Demo1.prototype.render = function render() {
			var value = { province: '山西', city: '长治', area: '长治县' };
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_src2['default'], { ref: 'city', onChange: this.onChange, defaultValue: this.state.defaultValue, value: value }),
				_react2['default'].createElement(
					_beeButton2['default'],
					{ shape: 'border', onClick: this.btnOnClick, style: { marginTop: "10px" } },
					'\u4EE3\u7801\u8BBE\u7F6E\u6570\u636E'
				)
			);
		};
	
		return Demo1;
	}(_react.Component);
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _src = __webpack_require__(84);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @title 切换语言
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @description 目前支持三种语言  zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	var Demo2 = function (_Component) {
		_inherits(Demo2, _Component);
	
		function Demo2() {
			var _temp, _this, _ret;
	
			_classCallCheck(this, Demo2);
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onChange = function (obj) {
				console.log(obj);
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}
	
		Demo2.prototype.render = function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_src2['default'], { lang: 'en_US', onChange: this.onChange }),
				_react2['default'].createElement('div', { style: { 'height': '20px' } }),
				_react2['default'].createElement(_src2['default'], { lang: 'zh_TW', onChange: this.onChange })
			);
		};
	
		return Demo2;
	}(_react.Component);
	
	exports['default'] = Demo2;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map