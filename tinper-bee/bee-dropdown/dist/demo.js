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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });
	
	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });
	
	var Demo1 = __webpack_require__(84);var Demo2 = __webpack_require__(209);var Demo3 = __webpack_require__(210);var Demo4 = __webpack_require__(211);var Demo5 = __webpack_require__(212);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 基础下拉菜单", "code": "/**\r\n *\r\n * @title 基础下拉菜单\r\n * @description 下拉菜单提供click，hover和focus事件触发。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\n\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item } = Menu;\r\n\r\n function onSelect({ key }) {\r\n   console.log(`${key} selected`);\r\n\r\n }\r\n\r\n function onVisibleChange(visible) {\r\n   console.log(visible);\r\n }\r\n\r\n class Demo1 extends Component {\r\n\r\n    render () {\r\n\r\n        const menu1 = (\r\n              <Menu\r\n                onSelect={onSelect}>\r\n                <Item key=\"1\">借款合同</Item>\r\n                <Item key=\"2\">抵/质押合同</Item>\r\n                <Item key=\"3\">担保合同</Item>\r\n                <Item key=\"4\">联保合同</Item>\r\n                <Item key=\"5\">合同审批</Item>\r\n                <Item key=\"6\">抵/质押合同跟踪</Item>\r\n              </Menu>\r\n          );\r\n          const menu2 = (\r\n                <Menu\r\n                  onSelect={onSelect}>\r\n                      <Item key=\"1\"><Icon type='uf-listsearch' />借款合同</Item>\r\n                      <Item key=\"2\"><Icon type='uf-listsearch' />抵/质押合同</Item>\r\n                      <Item key=\"3\"><Icon type='uf-listsearch' />担保合同</Item>\r\n                      <Item key=\"4\"><Icon type='uf-listsearch' />联保合同</Item>\r\n                      <Item key=\"5\"><Icon type='uf-seal' />合同审批</Item>\r\n                      <Item key=\"6\"><Icon type='uf-bullseye' />抵/质押合同跟踪</Item>\r\n                </Menu>\r\n            );\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']}\r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                </Dropdown>\r\n                <Dropdown\r\n                    trigger={['hover']}\r\n                    overlay={menu2}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>鼠标滑过显示</Button>\r\n                </Dropdown>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n", "desc": " 下拉菜单提供click，hover和focus事件触发。" }, { "example": _react2['default'].createElement(Demo2, null), "title": " 不同样子的下拉菜单", "code": "/**\r\n *\r\n * @title 不同样子的下拉菜单\r\n * @description 通过不同的子组件搭配，组成不同形式的菜单\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\nimport { Dropdown, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item,Divider, SubMenu, ItemGroup } = Menu;\r\n\r\n\r\n\r\n function onSelect({ key }) {\r\n   console.log(`${key} selected`);\r\n\r\n }\r\n\r\n function onVisibleChange(visible) {\r\n   console.log(visible);\r\n }\r\n\r\n const menu1 = (\r\n     <Menu\r\n       multiple\r\n       onSelect={onSelect}>\r\n       <Item key=\"1\">借款合同</Item>\r\n       <Item key=\"2\">抵/质押合同</Item>\r\n       <Item key=\"3\">担保合同</Item>\r\n       <Item key=\"4\">联保合同</Item>\r\n       <Divider />\r\n       <Item key=\"5\">合同审批</Item>\r\n       <Item key=\"6\">抵/质押合同跟踪</Item>\r\n     </Menu>\r\n );\r\n\r\n const menu2 = (\r\n     <Menu\r\n       multiple\r\n       onSelect={onSelect}>\r\n       <ItemGroup title=\"合同类别\">\r\n           <Item key=\"1\">借款合同</Item>\r\n           <Item key=\"2\">抵/质押合同</Item>\r\n           <Item key=\"3\">担保合同</Item>\r\n           <Item key=\"4\">联保合同</Item>\r\n        </ItemGroup>\r\n        <ItemGroup title=\"合同操作\">\r\n            <Item key=\"5\">合同审批</Item>\r\n            <Item key=\"6\">抵/质押合同跟踪</Item>\r\n        </ItemGroup>\r\n     </Menu>\r\n );\r\n const menu3 = (\r\n     <Menu\r\n       vertical\r\n       onSelect={onSelect}>\r\n       <SubMenu key=\"sub1\" title=\"合同类别\">\r\n            <Item key=\"1\">借款合同</Item>\r\n            <Item key=\"2\">抵/质押合同</Item>\r\n            <Item key=\"3\">担保合同</Item>\r\n            <Item key=\"4\">联保合同</Item>\r\n\t\t</SubMenu>\r\n\t\t<SubMenu key=\"sub2\" title=\"合同操作\">\r\n            <Item key=\"5\">抵/质押合同跟踪</Item>\r\n\t\t    <SubMenu key=\"sub3\" title=\"合同审批\">\r\n                <Item key=\"6\">待审批合同</Item>\r\n                <Item key=\"7\">已审批合同</Item>\r\n\t\t\t</SubMenu>\r\n\t\t</SubMenu>\r\n     </Menu>\r\n );\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu1}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary'>带有分割线的下拉</Button>\r\n                 </Dropdown>\r\n\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu2}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary'>带有小标题的下拉</Button>\r\n                 </Dropdown>\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu3}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary' style={{ width: 150 }}>多级下拉</Button>\r\n                 </Dropdown>\r\n             </div>\r\n        )\r\n    }\r\n}\r\n\r\n", "desc": " 通过不同的子组件搭配，组成不同形式的菜单" }, { "example": _react2['default'].createElement(Demo3, null), "title": " 控制显示隐藏的下拉菜单", "code": "/**\r\n *\r\n * @title 控制显示隐藏的下拉菜单\r\n * @description 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\nimport { Dropdown, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item } = Menu;\r\n\r\n\r\nfunction onVisibleChange(visible) {\r\n    console.log(visible);\r\n}\r\n\r\nclass Demo3 extends Component {\r\n    state = {\r\n        visible: false\r\n    }\r\n    handleSelect = () => {\r\n        this.setState({\r\n            visible: false\r\n        })\r\n    }\r\n\r\n    handleShow = () => {\r\n        this.setState({\r\n            visible: true\r\n        })\r\n    }\r\n\r\n    render () {\r\n\r\n        const menu1 = (\r\n            <Menu\r\n                onSelect={this.handleSelect}>\r\n                <Item key=\"1\">借款合同</Item>\r\n                <Item key=\"2\">抵/质押合同</Item>\r\n                <Item key=\"3\">担保合同</Item>\r\n                <Item key=\"4\">联保合同</Item>\r\n                <Item key=\"5\">合同审批</Item>\r\n                <Item key=\"6\">抵/质押合同跟踪</Item>\r\n            </Menu>\r\n        );\r\n\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']}\r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    visible={ this.state.visible }\r\n                    onVisibleChange={onVisibleChange}\r\n                >\r\n                    <Button\r\n                        onClick={this.handleShow}\r\n                        colors='primary'>\r\n                        受控制的下拉\r\n                    </Button>\r\n                </Dropdown>\r\n\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n\r\n", "desc": " 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。" }, { "example": _react2['default'].createElement(Demo4, null), "title": " 基础下拉菜单", "code": "/**\r\n *\r\n * @title 基础下拉菜单\r\n * @description 如何获取选中对象自定义对象和数据\r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\n\n\n\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item } = Menu;\r\n  \r\n const dataList = [\r\n     {\"key\":\"1\",value:\"借款合同\",id:\"a\"},\r\n     {\"key\":\"2\",value:\"抵/质押合同\",id:\"v\"},\r\n     {\"key\":\"3\",value:\"担保合同\",id:\"c\"},\r\n     {\"key\":\"4\",value:\"联保合同\",id:\"d\"},\r\n ]\r\n\r\nfunction onVisibleChange(visible) {\r\n    console.log(visible);\r\n}\r\n\r\n class Demo4 extends Component {\r\n \r\n    /**\r\n     * 获取当前选中行的item对象。\r\n     * @param {*} value \r\n     */\r\n    onSelect({key,item}){ \r\n      console.log(`${key} selected`); //获取key\r\n      let currentObject = item.props.data; //获取选中对象的数据\r\n      console.log(currentObject); \r\n    }\r\n \r\n    render () {\r\n        const menu1 = (\r\n            <Menu onSelect={this.onSelect} >{\r\n                dataList.map(da=><Item key={da.key} data={da} >{da.value}</Item> )}\r\n            </Menu>)\r\n\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']} \r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                  </Dropdown> \r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n", "desc": " 如何获取选中对象自定义对象和数据" }, { "example": _react2['default'].createElement(Demo5, null), "title": " 使用键盘操作示例", "code": "/**\r\n *\r\n * @title 使用键盘操作示例\r\n * @description \r\n *\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport ReactDOM from 'react-dom';\r\n\n\n\nimport { Dropdown, Icon, Menu, Button } from 'tinper-bee';\r\n\r\nconst { Item } = Menu;\r\n\r\n\r\n\r\n class Demo5 extends Component {\r\n\r\n    onSelect({ key }) {\r\n        console.log(`${key} selected`);\r\n    }\r\n    onVisibleChange=(visible)=> {\r\n        console.log(visible);\r\n         if(visible){\r\n             window.setTimeout(()=>{\r\n                ReactDOM.findDOMNode(this.refs.menurefs).focus();\r\n             })\r\n         }\r\n      }\r\n\r\n    render () {\r\n\r\n        const menu1 = (\r\n            <Menu ref='menurefs'\r\n                onSelect={this.onSelect}>\r\n                <Item key=\"1\">借款合同</Item>\r\n                <Item key=\"2\">抵/质押合同</Item>\r\n                <Item key=\"3\">担保合同</Item>\r\n                <Item key=\"4\">联保合同</Item>\r\n                <Item key=\"5\">合同审批</Item>\r\n                <Item key=\"6\">抵/质押合同跟踪</Item>\r\n              </Menu>\r\n          );\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']}\r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={this.onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                </Dropdown>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n", "desc": " " }];
	
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
	            desc = _props.desc,
	            scss_code = _props.scss_code;
	
	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";
	
	        var header = _react2['default'].createElement(
	            'div',
	            null,
	            example,
	            _react2['default'].createElement(
	                _beeButton2['default'],
	                { style: { "marginTop": "10px" }, shape: 'block', onClick: this.handleClick },
	                caret,
	                text
	            )
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12, id: title.trim() },
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
	                { collapsible: true, headerContent: true, expanded: this.state.open, colors: 'bordered', header: header, footerStyle: { padding: 0 } },
	                _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                ),
	                !!scss_code ? _react2['default'].createElement(
	                    'pre',
	                    null,
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
	  var bodyStyle = window.getComputedStyle(body);
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
	        if (bordered) {
	            clsObj[clsPrefix + '-border'] = bordered;
	        }
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
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _beeMenus = __webpack_require__(85);
	
	var _beeMenus2 = _interopRequireDefault(_beeMenus);
	
	var _beeIcon = __webpack_require__(197);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	var _src = __webpack_require__(199);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 基础下拉菜单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 下拉菜单提供click，hover和focus事件触发。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Item = _beeMenus2['default'].Item;
	
	
	function onSelect(_ref) {
	    var key = _ref.key;
	
	    console.log(key + ' selected');
	}
	
	function onVisibleChange(visible) {
	    console.log(visible);
	}
	
	var Demo1 = function (_Component) {
	    _inherits(Demo1, _Component);
	
	    function Demo1() {
	        _classCallCheck(this, Demo1);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    Demo1.prototype.render = function render() {
	
	        var menu1 = _react2['default'].createElement(
	            _beeMenus2['default'],
	            {
	                onSelect: onSelect },
	            _react2['default'].createElement(
	                Item,
	                { key: '1' },
	                '\u501F\u6B3E\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '2' },
	                '\u62B5/\u8D28\u62BC\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '3' },
	                '\u62C5\u4FDD\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '4' },
	                '\u8054\u4FDD\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '5' },
	                '\u5408\u540C\u5BA1\u6279'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '6' },
	                '\u62B5/\u8D28\u62BC\u5408\u540C\u8DDF\u8E2A'
	            )
	        );
	        var menu2 = _react2['default'].createElement(
	            _beeMenus2['default'],
	            {
	                onSelect: onSelect },
	            _react2['default'].createElement(
	                Item,
	                { key: '1' },
	                _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-listsearch' }),
	                '\u501F\u6B3E\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '2' },
	                _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-listsearch' }),
	                '\u62B5/\u8D28\u62BC\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '3' },
	                _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-listsearch' }),
	                '\u62C5\u4FDD\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '4' },
	                _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-listsearch' }),
	                '\u8054\u4FDD\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '5' },
	                _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-seal' }),
	                '\u5408\u540C\u5BA1\u6279'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '6' },
	                _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-bullseye' }),
	                '\u62B5/\u8D28\u62BC\u5408\u540C\u8DDF\u8E2A'
	            )
	        );
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                _src2['default'],
	                {
	                    trigger: ['click'],
	                    overlay: menu1,
	                    animation: 'slide-up',
	                    onVisibleChange: onVisibleChange },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { colors: 'primary' },
	                    '\u70B9\u51FB\u663E\u793A'
	                )
	            ),
	            _react2['default'].createElement(
	                _src2['default'],
	                {
	                    trigger: ['hover'],
	                    overlay: menu2,
	                    animation: 'slide-up',
	                    onVisibleChange: onVisibleChange },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { colors: 'primary' },
	                    '\u9F20\u6807\u6ED1\u8FC7\u663E\u793A'
	                )
	            )
	        );
	    };
	
	    return Demo1;
	}(_react.Component);
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VerticalMenu = __webpack_require__(86);
	
	var _VerticalMenu2 = _interopRequireDefault(_VerticalMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _VerticalMenu2["default"];
	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ExportMenu = __webpack_require__(87);
	
	var _ExportMenu2 = _interopRequireDefault(_ExportMenu);
	
	var _openAnimation = __webpack_require__(195);
	
	var _openAnimation2 = _interopRequireDefault(_openAnimation);
	
	var _warning = __webpack_require__(196);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Menu = function (_React$Component) {
	  _inherits(Menu, _React$Component);
	
	  function Menu(props) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.handleClick = function (e) {
	      _this.setOpenKeys([]);
	
	      var onClick = _this.props.onClick;
	      if (onClick) {
	        onClick(e);
	      }
	    };
	
	    _this.handleOpenChange = function (openKeys) {
	      _this.setOpenKeys(openKeys);
	
	      var onOpenChange = _this.props.onOpenChange;
	      if (onOpenChange) {
	        onOpenChange(openKeys);
	      }
	    };
	
	    (0, _warning2["default"])(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead.');
	
	    _this.state = {
	      openKeys: []
	    };
	    _this.rcMenu = {};
	    return _this;
	  }
	
	  Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
	      this.switchModeFromInline = true;
	    }
	    if ('openKeys' in nextProps) {
	      this.setOpenKeys(nextProps.openKeys);
	    }
	  };
	
	  Menu.prototype.setOpenKeys = function setOpenKeys(openKeys) {
	    if (!('openKeys' in this.props)) {
	      this.setState({ openKeys: openKeys });
	    }
	  };
	
	  Menu.prototype.render = function render() {
	    var _this2 = this;
	
	    var openAnimation = this.props.openAnimation || this.props.openTransitionName;
	    if (!openAnimation) {
	      switch (this.props.mode) {
	        case 'horizontal':
	          openAnimation = '';
	          break;
	        case 'vertical':
	          // When mode switch from inline
	          // submenu should hide without animation
	          if (this.switchModeFromInline) {
	            openAnimation = _openAnimation2["default"];
	            this.switchModeFromInline = false;
	          } else {
	            openAnimation = 'zoom-big';
	          }
	          break;
	        case 'inline':
	          openAnimation = _openAnimation2["default"];
	          break;
	        default:
	      }
	    }
	
	    var props = {};
	    var className = this.props.className + ' ' + this.props.prefixCls + '-' + this.props.theme;
	    if (this.props.mode !== 'inline') {
	      // 这组属性的目的是
	      // 弹出型的菜单需要点击后立即关闭
	      // 另外，弹出型的菜单的受控模式没有使用场景
	      props = {
	        openKeys: this.state.openKeys,
	        onClick: this.handleClick,
	        onOpenChange: this.handleOpenChange,
	        openTransitionName: openAnimation,
	        className: className
	      };
	    } else {
	      props = {
	        openAnimation: openAnimation,
	        className: className
	      };
	    }
	    return _react2["default"].createElement(_ExportMenu2["default"], _extends({ ref: function ref(el) {
	        return _this2.rcMenu = el;
	      } }, this.props, props));
	  };
	
	  return Menu;
	}(_react2["default"].Component);
	
	Menu.defaultProps = {
	  prefixCls: 'u-menu',
	  className: '',
	  theme: 'light' // or dark
	};
	
	Menu.Divider = _ExportMenu.Divider;
	Menu.Item = _ExportMenu.Item;
	Menu.SubMenu = _ExportMenu.SubMenu;
	Menu.ItemGroup = _ExportMenu.ItemGroup;
	Menu.MenuToggle = _ExportMenu.MenuToggle;
	Menu.SideContainer = _ExportMenu.SideContainer;
	exports["default"] = Menu;
	module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MenuToggle = exports.SideContainer = exports.Divider = exports.ItemGroup = exports.MenuItemGroup = exports.MenuItem = exports.Item = exports.SubMenu = undefined;
	
	var _Menu = __webpack_require__(88);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(102);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(187);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(191);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	var _Divider = __webpack_require__(192);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	var _SideContainer = __webpack_require__(193);
	
	var _SideContainer2 = _interopRequireDefault(_SideContainer);
	
	var _MenuToggle = __webpack_require__(194);
	
	var _MenuToggle2 = _interopRequireDefault(_MenuToggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.SubMenu = _SubMenu2["default"];
	exports.Item = _MenuItem2["default"];
	exports.MenuItem = _MenuItem2["default"];
	exports.MenuItemGroup = _MenuItemGroup2["default"];
	exports.ItemGroup = _MenuItemGroup2["default"];
	exports.Divider = _Divider2["default"];
	exports.SideContainer = _SideContainer2["default"];
	exports.MenuToggle = _MenuToggle2["default"]; /**
	                                           * This source code is quoted from rc-menu.
	                                           * homepage: https://github.com/react-component/menu
	                                           */
	
	exports["default"] = _Menu2["default"];

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
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _miniStore = __webpack_require__(89);
	
	var _SubPopupMenu = __webpack_require__(97);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _util = __webpack_require__(99);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-menu.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/menu
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var Menu = function (_React$Component) {
	  _inherits(Menu, _React$Component);
	
	  function Menu(props) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
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
	        selectedKeys: this.props.selectedKeys || [],
	        keyboard: this.props.keyboard || false
	      });
	    }
	    if ('openKeys' in this.props) {
	      this.store.setState({
	        openKeys: this.props.openKeys || [],
	        keyboard: this.props.keyboard || false
	      });
	    }
	  };
	
	  Menu.prototype.render = function render() {
	    var _this2 = this;
	
	    var props = _objectWithoutProperties(this.props, []);
	
	    props.className += ' ' + props.prefixCls + '-root';
	    props = _extends({}, props, {
	      onClick: this.onClick,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onSelect: this.onSelect,
	      openTransitionName: this.getOpenTransitionName(),
	      parentMenu: this
	    });
	    return _react2["default"].createElement(
	      _miniStore.Provider,
	      { store: this.store },
	      _react2["default"].createElement(
	        _SubPopupMenu2["default"],
	        _extends({}, props, { onFocus: this.focus, ref: function ref(c) {
	            return _this2.innerMenu = c;
	          } }),
	        this.props.children
	      )
	    );
	  };
	
	  return Menu;
	}(_react2["default"].Component);
	
	Menu.propTypes = {
	  defaultSelectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  defaultActiveFirst: _propTypes2["default"].bool,
	  selectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  defaultOpenKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  openKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  mode: _propTypes2["default"].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
	  getPopupContainer: _propTypes2["default"].func,
	  onClick: _propTypes2["default"].func,
	  onSelect: _propTypes2["default"].func,
	  onDeselect: _propTypes2["default"].func,
	  onDestroy: _propTypes2["default"].func,
	  openTransitionName: _propTypes2["default"].string,
	  openAnimation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  subMenuOpenDelay: _propTypes2["default"].number,
	  subMenuCloseDelay: _propTypes2["default"].number,
	  forceSubMenuRender: _propTypes2["default"].bool,
	  triggerSubMenuAction: _propTypes2["default"].string,
	  level: _propTypes2["default"].number,
	  selectable: _propTypes2["default"].bool,
	  multiple: _propTypes2["default"].bool,
	  children: _propTypes2["default"].any,
	  className: _propTypes2["default"].string,
	  style: _propTypes2["default"].object,
	  activeKey: _propTypes2["default"].string,
	  prefixCls: _propTypes2["default"].string,
	  builtinPlacements: _propTypes2["default"].object,
	  itemIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node]),
	  expandIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node]),
	  overflowedIndicator: _propTypes2["default"].node,
	  keyboard: _propTypes2["default"].bool
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
	  overflowedIndicator: _react2["default"].createElement(
	    'span',
	    null,
	    '\xB7\xB7\xB7'
	  ),
	  keyboard: false,
	  tabIndex: '0'
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
	      props.onSelect(_extends({}, selectInfo, {
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
	      props.onDeselect(_extends({}, selectInfo, {
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
	
	  this.focus = function () {
	    (0, _util.fireKeyEvent)(_reactDom2["default"].findDOMNode(_this3.innerMenu), 'keydown', 40);
	    _this3.props.onFocus && _this3.props.onFocus();
	  };
	};
	
	exports["default"] = Menu;
	module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.create = exports.connect = exports.Provider = undefined;
	
	var _Provider2 = __webpack_require__(90);
	
	var _Provider3 = _interopRequireDefault(_Provider2);
	
	var _connect2 = __webpack_require__(92);
	
	var _connect3 = _interopRequireDefault(_connect2);
	
	var _create2 = __webpack_require__(96);
	
	var _create3 = _interopRequireDefault(_create2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Provider = _Provider3.default;
	exports.connect = _connect3.default;
	exports.create = _create3.default;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PropTypes = __webpack_require__(91);
	
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
/* 91 */
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
/* 92 */
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
	
	var _shallowequal = __webpack_require__(93);
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	var _hoistNonReactStatics = __webpack_require__(94);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _reactLifecyclesCompat = __webpack_require__(95);
	
	var _PropTypes = __webpack_require__(91);
	
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
/* 93 */
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
/* 94 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
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
	
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
	
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	
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
	
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
	                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	                try { // Avoid failures from read-only properties
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
/* 95 */
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
/* 96 */
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SubPopupMenu = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                  * This source code is quoted from rc-menu.
	                                                                                                                                                                                                                                                                  * homepage: https://github.com/react-component/menu
	                                                                                                                                                                                                                                                                  */
	
	
	exports.getActiveKey = getActiveKey;
	exports.saveRef = saveRef;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _miniStore = __webpack_require__(89);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _createChainedFunction = __webpack_require__(98);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _util = __webpack_require__(99);
	
	var _DOMWrap = __webpack_require__(100);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}
	
	function updateActiveKey(store, menuId, activeKey) {
	  var state = store.getState();
	  store.setState({
	    activeKey: _extends({}, state.activeKey, _defineProperty({}, menuId, activeKey))
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
	  _inherits(SubPopupMenu, _React$Component);
	
	  function SubPopupMenu(props) {
	    _classCallCheck(this, SubPopupMenu);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    props.store.setState({
	      activeKey: _extends({}, props.store.getState().activeKey, _defineProperty({}, props.eventKey, getActiveKey(props, props.activeKey)))
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
	
	    var props = _objectWithoutProperties(this.props, []);
	
	    this.instanceArray = [];
	    var className = (0, _classnames2["default"])(props.prefixCls, props.className, props.prefixCls + '-' + props.mode);
	    var domProps = {
	      className: className,
	      // role could be 'select' and by default set to menu
	      role: props.role || 'menu'
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = this.props.tabIndex;
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
	    delete props.keyboard;
	
	    return (
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2["default"].createElement(
	        _DOMWrap2["default"],
	        _extends({}, props, {
	          prefixCls: prefixCls,
	          mode: mode,
	          tag: 'ul',
	          level: level,
	          theme: theme,
	          hiddenClassName: prefixCls + '-hidden',
	          visible: visible,
	          overflowedIndicator: overflowedIndicator
	        }, domProps),
	        _react2["default"].Children.map(props.children, function (c, i) {
	          return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
	        })
	      )
	      /*eslint-enable */
	
	    );
	  };
	
	  return SubPopupMenu;
	}(_react2["default"].Component);
	
	SubPopupMenu.propTypes = {
	  onSelect: _propTypes2["default"].func,
	  onClick: _propTypes2["default"].func,
	  onDeselect: _propTypes2["default"].func,
	  onOpenChange: _propTypes2["default"].func,
	  onDestroy: _propTypes2["default"].func,
	  openTransitionName: _propTypes2["default"].string,
	  openAnimation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  openKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  visible: _propTypes2["default"].bool,
	  children: _propTypes2["default"].any,
	  parentMenu: _propTypes2["default"].object,
	  eventKey: _propTypes2["default"].string,
	  store: _propTypes2["default"].shape({
	    getState: _propTypes2["default"].func,
	    setState: _propTypes2["default"].func
	  }),
	
	  // adding in refactor
	  focusable: _propTypes2["default"].bool,
	  multiple: _propTypes2["default"].bool,
	  style: _propTypes2["default"].object,
	  defaultActiveFirst: _propTypes2["default"].bool,
	  activeKey: _propTypes2["default"].string,
	  selectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  defaultSelectedKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  defaultOpenKeys: _propTypes2["default"].arrayOf(_propTypes2["default"].string),
	  level: _propTypes2["default"].number,
	  mode: _propTypes2["default"].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
	  triggerSubMenuAction: _propTypes2["default"].oneOf(['click', 'hover']),
	  inlineIndent: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
	  manualRef: _propTypes2["default"].func,
	  itemIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node]),
	  expandIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node])
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
	    if (keyCode === _tinperBeeCore.KeyCode.UP || keyCode === _tinperBeeCore.KeyCode.DOWN) {
	      if (_this3.props.store.getState().keyboard) {
	        //是否启用键盘操作
	        activeItem = _this3.step(keyCode === _tinperBeeCore.KeyCode.UP ? -2 : 2);
	      }
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
	    var newChildProps = _extends({
	      mode: childProps.mode || props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: _this3.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: props.parentMenu,
	      // customized ref function, need to be invoked manually in child's componentDidMount
	      manualRef: childProps.disabled ? undefined : (0, _createChainedFunction2["default"])(child.ref, saveRef.bind(_this3)),
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
	    if (props.mode === 'inline') {
	      newChildProps.triggerSubMenuAction = 'click';
	    }
	    return _react2["default"].cloneElement(child, newChildProps);
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
	
	exports["default"] = connected;

/***/ }),
/* 98 */
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setStyle = exports.getWidth = exports.menuAllProps = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                              * This source code is quoted from rc-menu.
	                                                                                                                                                                                                                                                                              * homepage: https://github.com/react-component/menu
	                                                                                                                                                                                                                                                                              */
	
	
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.getMenuIdFromSubMenuEventKey = getMenuIdFromSubMenuEventKey;
	exports.loopMenuItem = loopMenuItem;
	exports.loopMenuItemRecursively = loopMenuItemRecursively;
	exports.fireKeyEvent = fireKeyEvent;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
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
	  _react2["default"].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type && c.type.isMenuItemGroup) {
	      _react2["default"].Children.forEach(c.props.children, function (c2) {
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
	  _react2["default"].Children.forEach(children, function (c) {
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
	
	var getWidth = exports.getWidth = function getWidth(elem) {
	  return elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width || 0;
	};
	
	var setStyle = exports.setStyle = function setStyle(elem, styleProperty, value) {
	  if (elem && _typeof(elem.style) === 'object') {
	    elem.style[styleProperty] = value;
	  }
	};
	
	function fireKeyEvent(el, evtType, keyCode) {
	  var evtObj;
	  if (document.createEvent) {
	    if (window.KeyEvent) {
	      //firefox 浏览器下模拟事件
	      evtObj = document.createEvent('KeyEvents');
	      evtObj.initKeyEvent(evtType, true, true, window, true, false, false, false, keyCode, 0);
	    } else {
	      //chrome 浏览器下模拟事件
	      evtObj = document.createEvent('UIEvents');
	      evtObj.initUIEvent(evtType, true, true, window, 1);
	
	      delete evtObj.keyCode;
	      if (typeof evtObj.keyCode === "undefined") {
	        //为了模拟keycode
	        Object.defineProperty(evtObj, "keyCode", { value: keyCode });
	      } else {
	        evtObj.key = String.fromCharCode(keyCode);
	      }
	
	      if (typeof evtObj.ctrlKey === 'undefined') {
	        //为了模拟ctrl键
	        Object.defineProperty(evtObj, "ctrlKey", { value: true });
	      } else {
	        evtObj.ctrlKey = true;
	      }
	    }
	    el.dispatchEvent(evtObj);
	  } else if (document.createEventObject) {
	    //IE 浏览器下模拟事件
	    evtObj = document.createEventObject();
	    evtObj.keyCode = keyCode;
	    el.fireEvent('on' + evtType, evtObj);
	  }
	}

/***/ }),
/* 100 */
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
	
	var _resizeObserverPolyfill = __webpack_require__(101);
	
	var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);
	
	var _SubMenu = __webpack_require__(102);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _util = __webpack_require__(99);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-menu.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/menu
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
	
	// Fix ssr
	if (canUseDOM) {
	  __webpack_require__(186);
	}
	
	var DOMWrap = function (_React$Component) {
	  _inherits(DOMWrap, _React$Component);
	
	  function DOMWrap() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DOMWrap);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      lastVisibleIndex: undefined
	    }, _this.getMenuItemNodes = function () {
	      var prefixCls = _this.props.prefixCls;
	
	      var ul = _reactDom2["default"].findDOMNode(_this);
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
	          rest = _objectWithoutProperties(_copy$props, ['children', 'title', 'eventKey']);
	
	      var style = _extends({}, propStyle);
	      var key = keyPrefix + '-overflowed-indicator';
	
	      if (overflowedItems.length === 0 && renderPlaceholder !== true) {
	        style = _extends({}, style, {
	          display: 'none'
	        });
	      } else if (renderPlaceholder) {
	        style = _extends({}, style, {
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
	
	      return _react2["default"].createElement(
	        _SubMenu2["default"],
	        _extends({
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
	      var ul = _reactDom2["default"].findDOMNode(_this);
	
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
	
	      var ul = _reactDom2["default"].findDOMNode(_this);
	      if (!ul) {
	        return;
	      }
	      var width = (0, _util.getWidth)(ul);
	
	      _this.overflowedItems = [];
	      var currentSumWidth = 0;
	
	      // index for last visible child in horizontal mode
	      var lastVisibleIndex = undefined;
	
	      if (_this.originalTotalWidth > width) {
	        lastVisibleIndex = -1;
	
	        _this.menuItemSizes.forEach(function (liWidth) {
	          currentSumWidth += liWidth;
	          if (currentSumWidth + _this.overflowedIndicatorWidth <= width) {
	            lastVisibleIndex++;
	          }
	        });
	      }
	
	      _this.setState({ lastVisibleIndex: lastVisibleIndex });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  DOMWrap.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.setChildrenWidthAndResize();
	    if (this.props.level === 1 && this.props.mode === 'horizontal') {
	      var menuUl = _reactDom2["default"].findDOMNode(this);
	      if (!menuUl) {
	        return;
	      }
	      this.resizeObserver = new _resizeObserverPolyfill2["default"](function (entries) {
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
	            item = _react2["default"].cloneElement(childNode,
	            // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
	            {
	              style: { display: 'none' },
	              eventKey: childNode.props.eventKey + '-hidden',
	              className: childNode.className + ' ' + MENUITEM_OVERFLOWED_CLASSNAME
	            });
	          }
	          if (index === lastVisibleIndex + 1) {
	            _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
	              return _react2["default"].cloneElement(c,
	              // children[index].key will become '.$key' in clone by default,
	              // we have to overwrite with the correct key explicitly
	              { key: c.props.eventKey, mode: 'vertical-left' });
	            });
	
	            overflowed = _this3.getOverflowedSubMenuItem(childNode.props.eventKey, _this3.overflowedItems);
	          }
	        }
	
	        // const ret = [...acc, overflowed, item];//更改
	        var ret = [].concat(_toConsumableArray(acc), [item]);
	
	        if (index === children.length - 1) {
	          // need a placeholder for calculating overflowed indicator width
	          ret.push(_this3.getOverflowedSubMenuItem(childNode.props.eventKey, [], true));
	        }
	        return ret;
	      }
	      return [].concat(_toConsumableArray(acc), [item]);
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
	        rest = _objectWithoutProperties(_props, ['hiddenClassName', 'visible', 'prefixCls', 'overflowedIndicator', 'mode', 'level', 'tag', 'children', 'theme']);
	
	    if (!visible) {
	      rest.className += ' ' + hiddenClassName;
	    }
	
	    return _react2["default"].createElement(
	      Tag,
	      rest,
	      this.renderChildren(this.props.children)
	    );
	  };
	
	  return DOMWrap;
	}(_react2["default"].Component);
	
	DOMWrap.propTypes = {
	  className: _propTypes2["default"].string,
	  children: _propTypes2["default"].node,
	  mode: _propTypes2["default"].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
	  prefixCls: _propTypes2["default"].string,
	  level: _propTypes2["default"].number,
	  theme: _propTypes2["default"].string,
	  overflowedIndicator: _propTypes2["default"].node,
	  visible: _propTypes2["default"].bool,
	  hiddenClassName: _propTypes2["default"].string,
	  tag: _propTypes2["default"].string,
	  style: _propTypes2["default"].object
	};
	
	DOMWrap.defaultProps = {
	  tag: 'div',
	  className: ''
	};
	
	exports["default"] = DOMWrap;
	module.exports = exports['default'];

/***/ }),
/* 101 */
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SubMenu = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                  * This source code is quoted from rc-menu.
	                                                                                                                                                                                                                                                                  * homepage: https://github.com/react-component/menu
	                                                                                                                                                                                                                                                                  */
	
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _rcTrigger = __webpack_require__(103);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _miniStore = __webpack_require__(89);
	
	var _SubPopupMenu = __webpack_require__(97);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _placements = __webpack_require__(185);
	
	var _placements2 = _interopRequireDefault(_placements);
	
	var _rcAnimate = __webpack_require__(175);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _util = __webpack_require__(99);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var guid = 0;
	
	var popupPlacementMap = {
	  horizontal: 'bottomLeft',
	  vertical: 'rightTop',
	  'vertical-left': 'rightTop',
	  'vertical-right': 'leftTop'
	};
	
	var updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
	  var menuId = (0, _util.getMenuIdFromSubMenuEventKey)(eventKey);
	  var state = store.getState();
	  store.setState({
	    defaultActiveFirst: _extends({}, state.defaultActiveFirst, _defineProperty({}, menuId, defaultActiveFirst))
	  });
	};
	
	var SubMenu = exports.SubMenu = function (_React$Component) {
	  _inherits(SubMenu, _React$Component);
	
	  function SubMenu(props) {
	    _classCallCheck(this, SubMenu);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
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
	      return _react2["default"].createElement('div', null);
	    }
	
	    // don't show transition on first rendering (no animation for opened menu)
	    // show appear transition if it's not visible (not sure why)
	    // show appear transition if it's not inline mode
	    var transitionAppear = haveRendered || !baseProps.visible || !baseProps.mode === 'inline';
	
	    baseProps.className = ' ' + baseProps.prefixCls + '-sub';
	    var animProps = {};
	
	    if (baseProps.openTransitionName) {
	      animProps.transitionName = baseProps.openTransitionName;
	    } else if (_typeof(baseProps.openAnimation) === 'object') {
	      animProps.animation = _extends({}, baseProps.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	
	    return _react2["default"].createElement(
	      _rcAnimate2["default"],
	      _extends({}, animProps, {
	        showProp: 'visible',
	        component: '',
	        transitionAppear: transitionAppear
	      }),
	      _react2["default"].createElement(
	        _SubPopupMenu2["default"],
	        _extends({}, baseProps, { id: this._menuId }),
	        children
	      )
	    );
	  };
	
	  SubMenu.prototype.render = function render() {
	    var _classNames;
	
	    var props = _extends({}, this.props);
	    var isOpen = props.isOpen;
	    var prefixCls = this.getPrefixCls();
	    var isInlineMode = props.mode === 'inline';
	    var className = (0, _classnames2["default"])(prefixCls, prefixCls + '-' + props.mode, (_classNames = {}, _defineProperty(_classNames, props.className, !!props.className), _defineProperty(_classNames, this.getOpenClassName(), isOpen), _defineProperty(_classNames, this.getActiveClassName(), props.active || isOpen && !isInlineMode), _defineProperty(_classNames, this.getDisabledClassName(), props.disabled), _defineProperty(_classNames, this.getSelectedClassName(), this.isChildrenSelected()), _classNames));
	
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
	        icon = _react2["default"].createElement(this.props.expandIcon, _extends({}, this.props));
	      }
	    }
	
	    var title = _react2["default"].createElement(
	      'div',
	      _extends({
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
	      icon || _react2["default"].createElement('i', { className: prefixCls + '-arrow' })
	    );
	    var children = this.renderChildren(props.children);
	
	    var getPopupContainer = function getPopupContainer(triggerNode) {
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
	    return _react2["default"].createElement(
	      'li',
	      _extends({}, props, mouseEvents, {
	        className: className,
	        role: 'menuitem'
	      }),
	      isInlineMode && title,
	      isInlineMode && children,
	      !isInlineMode && _react2["default"].createElement(
	        _rcTrigger2["default"],
	        {
	          prefixCls: prefixCls,
	          popupClassName: prefixCls + '-popup ' + popupClassName,
	          getPopupContainer: getPopupContainer,
	          builtinPlacements: _extends({}, _placements2["default"], builtinPlacements),
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
	}(_react2["default"].Component);
	
	SubMenu.propTypes = {
	  parentMenu: _propTypes2["default"].object,
	  title: _propTypes2["default"].node,
	  children: _propTypes2["default"].any,
	  selectedKeys: _propTypes2["default"].array,
	  openKeys: _propTypes2["default"].array,
	  onClick: _propTypes2["default"].func,
	  onOpenChange: _propTypes2["default"].func,
	  rootPrefixCls: _propTypes2["default"].string,
	  eventKey: _propTypes2["default"].string,
	  multiple: _propTypes2["default"].bool,
	  active: _propTypes2["default"].bool, // TODO: remove
	  onItemHover: _propTypes2["default"].func,
	  onSelect: _propTypes2["default"].func,
	  triggerSubMenuAction: _propTypes2["default"].string,
	  onDeselect: _propTypes2["default"].func,
	  onDestroy: _propTypes2["default"].func,
	  onMouseEnter: _propTypes2["default"].func,
	  onMouseLeave: _propTypes2["default"].func,
	  onTitleMouseEnter: _propTypes2["default"].func,
	  onTitleMouseLeave: _propTypes2["default"].func,
	  onTitleClick: _propTypes2["default"].func,
	  popupOffset: _propTypes2["default"].array,
	  isOpen: _propTypes2["default"].bool,
	  store: _propTypes2["default"].object,
	  mode: _propTypes2["default"].oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
	  manualRef: _propTypes2["default"].func,
	  itemIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node]),
	  expandIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node])
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
	
	    if (_this3.props.store.getState().keyboard) {
	      //是否启用键盘操作
	      if (keyCode === _tinperBeeCore.KeyCode.ENTER) {
	        // this.onTitleClick(e);
	        menu && menu.onKeyDown && menu.onKeyDown(e);
	        updateDefaultActiveFirst(store, _this3.props.eventKey, true);
	        return true;
	      }
	
	      if (keyCode === _tinperBeeCore.KeyCode.RIGHT) {
	        if (isOpen) {
	          menu.onKeyDown(e);
	        } else {
	          _this3.triggerOpenChange(true);
	          // need to update current menu's defaultActiveFirst value
	          updateDefaultActiveFirst(store, _this3.props.eventKey, true);
	        }
	        return true;
	      }
	      if (keyCode === _tinperBeeCore.KeyCode.LEFT) {
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
	      if (isOpen && (keyCode === _tinperBeeCore.KeyCode.UP || keyCode === _tinperBeeCore.KeyCode.DOWN)) {
	        return menu.onKeyDown(e);
	      }
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
	    return _extends({}, info, {
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
	    var popupMenu = _reactDom2["default"].findDOMNode(_this3.menuInstance);
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
	
	exports["default"] = connected;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(104);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _contains = __webpack_require__(163);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _addEventListener = __webpack_require__(164);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _ContainerRender = __webpack_require__(165);
	
	var _ContainerRender2 = _interopRequireDefault(_ContainerRender);
	
	var _Portal = __webpack_require__(169);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(170);
	
	var _Popup = __webpack_require__(171);
	
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(105);
	
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(107);
	module.exports = __webpack_require__(110).Object.assign;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(108);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(113)});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(109)
	  , core      = __webpack_require__(110)
	  , ctx       = __webpack_require__(111)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(112);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(114)
	  , toObject = __webpack_require__(115)
	  , IObject  = __webpack_require__(117);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(119)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(116);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(118);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(122);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(123);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(146);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(125);
	__webpack_require__(141);
	module.exports = __webpack_require__(138)('iterator');

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(126)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(128)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(127)
	  , defined   = __webpack_require__(116);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(129)
	  , $export        = __webpack_require__(108)
	  , redefine       = __webpack_require__(130)
	  , hide           = __webpack_require__(131)
	  , has            = __webpack_require__(134)
	  , Iterators      = __webpack_require__(135)
	  , $iterCreate    = __webpack_require__(136)
	  , setToStringTag = __webpack_require__(137)
	  , getProto       = __webpack_require__(114).getProto
	  , ITERATOR       = __webpack_require__(138)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = true;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(131);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(114)
	  , createDesc = __webpack_require__(132);
	module.exports = __webpack_require__(133) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(119)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(114)
	  , descriptor     = __webpack_require__(132)
	  , setToStringTag = __webpack_require__(137)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(131)(IteratorPrototype, __webpack_require__(138)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(114).setDesc
	  , has = __webpack_require__(134)
	  , TAG = __webpack_require__(138)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(139)('wks')
	  , uid    = __webpack_require__(140)
	  , Symbol = __webpack_require__(109).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(109)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	var Iterators = __webpack_require__(135);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(143)
	  , step             = __webpack_require__(144)
	  , Iterators        = __webpack_require__(135)
	  , toIObject        = __webpack_require__(145);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(128)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(117)
	  , defined = __webpack_require__(116);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(148);
	__webpack_require__(155);
	module.exports = __webpack_require__(110).Symbol;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(114)
	  , global         = __webpack_require__(109)
	  , has            = __webpack_require__(134)
	  , DESCRIPTORS    = __webpack_require__(133)
	  , $export        = __webpack_require__(108)
	  , redefine       = __webpack_require__(130)
	  , $fails         = __webpack_require__(119)
	  , shared         = __webpack_require__(139)
	  , setToStringTag = __webpack_require__(137)
	  , uid            = __webpack_require__(140)
	  , wks            = __webpack_require__(138)
	  , keyOf          = __webpack_require__(149)
	  , $names         = __webpack_require__(150)
	  , enumKeys       = __webpack_require__(151)
	  , isArray        = __webpack_require__(152)
	  , anObject       = __webpack_require__(153)
	  , toIObject      = __webpack_require__(145)
	  , createDesc     = __webpack_require__(132)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(129)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
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
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(114)
	  , toIObject = __webpack_require__(145);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(145)
	  , getNames  = __webpack_require__(114).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(114);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(118);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(154);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 155 */
/***/ (function(module, exports) {



/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(157);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(161);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(122);
	
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(159);
	module.exports = __webpack_require__(110).Object.setPrototypeOf;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(108);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(160).set});

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(114).getDesc
	  , isObject = __webpack_require__(154)
	  , anObject = __webpack_require__(153);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(111)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(114);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ }),
/* 163 */
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
/* 164 */
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(166);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(167);
	
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(168), __esModule: true };

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(114);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(166);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(104);
	
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(104);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAlign = __webpack_require__(172);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(175);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _PopupInner = __webpack_require__(182);
	
	var _PopupInner2 = _interopRequireDefault(_PopupInner);
	
	var _LazyRenderBox = __webpack_require__(183);
	
	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);
	
	var _utils = __webpack_require__(170);
	
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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Align = __webpack_require__(173);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _Align2['default']; // export this package's api
	
	module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(166);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(51);
	
	var _addEventListener = __webpack_require__(164);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _util = __webpack_require__(174);
	
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
/* 174 */
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
	
	var _contains = __webpack_require__(163);
	
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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(104);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _defineProperty2 = __webpack_require__(176);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(166);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(177);
	
	var _AnimateChild = __webpack_require__(178);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _animate = __webpack_require__(181);
	
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
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(167);
	
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
/* 177 */
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
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(166);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _cssAnimation = __webpack_require__(179);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _animate = __webpack_require__(181);
	
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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isCssAnimationSupported = undefined;
	
	var _typeof2 = __webpack_require__(122);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _Event = __webpack_require__(180);
	
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
/* 180 */
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
/* 181 */
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
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _LazyRenderBox = __webpack_require__(183);
	
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
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectWithoutProperties2 = __webpack_require__(184);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(121);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(156);
	
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
/* 184 */
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
/* 185 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	* This source code is quoted from rc-menu.
	* homepage: https://github.com/react-component/menu
	*/
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
	
	exports["default"] = placements;

/***/ }),
/* 186 */
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
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MenuItem = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domScrollIntoView = __webpack_require__(188);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _miniStore = __webpack_require__(89);
	
	var _util = __webpack_require__(99);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-menu.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/menu
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	/* eslint react/no-is-mounted:0 */
	
	var MenuItem = exports.MenuItem = function (_React$Component) {
	  _inherits(MenuItem, _React$Component);
	
	  function MenuItem(props) {
	    _classCallCheck(this, MenuItem);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.onKeyDown = function (e) {
	      var keyCode = e.keyCode;
	      if (keyCode === _tinperBeeCore.KeyCode.ENTER) {
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
	      (0, _domScrollIntoView2["default"])(_reactDom2["default"].findDOMNode(this), _reactDom2["default"].findDOMNode(this.props.parentMenu), {
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
	
	    var props = _extends({}, this.props);
	    var className = (0, _classnames2["default"])(this.getPrefixCls(), props.className, (_classNames = {}, _defineProperty(_classNames, this.getActiveClassName(), !props.disabled && props.active), _defineProperty(_classNames, this.getSelectedClassName(), props.isSelected), _defineProperty(_classNames, this.getDisabledClassName(), props.disabled), _classNames));
	    var attrs = _extends({}, props.attribute, {
	      title: props.title,
	      className: className,
	      // set to menuitem by default
	      role: props.role || 'menuitem',
	      'aria-disabled': props.disabled
	    });
	
	    if (props.role === 'option') {
	      // overwrite to option
	      attrs = _extends({}, attrs, {
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
	    var style = _extends({}, props.style);
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    _util.menuAllProps.forEach(function (key) {
	      return delete props[key];
	    });
	    var icon = this.props.itemIcon;
	    if (typeof this.props.itemIcon === 'function') {
	      icon = _react2["default"].createElement(this.props.itemIcon, this.props);
	    }
	    return _react2["default"].createElement(
	      'li',
	      _extends({}, props, attrs, mouseEvent, {
	        style: style
	      }),
	      props.children,
	      icon
	    );
	  };
	
	  return MenuItem;
	}(_react2["default"].Component);
	
	MenuItem.propTypes = {
	  attribute: _propTypes2["default"].object,
	  rootPrefixCls: _propTypes2["default"].string,
	  eventKey: _propTypes2["default"].string,
	  active: _propTypes2["default"].bool,
	  children: _propTypes2["default"].any,
	  selectedKeys: _propTypes2["default"].array,
	  disabled: _propTypes2["default"].bool,
	  title: _propTypes2["default"].string,
	  onItemHover: _propTypes2["default"].func,
	  onSelect: _propTypes2["default"].func,
	  onClick: _propTypes2["default"].func,
	  onDeselect: _propTypes2["default"].func,
	  parentMenu: _propTypes2["default"].object,
	  onDestroy: _propTypes2["default"].func,
	  onMouseEnter: _propTypes2["default"].func,
	  onMouseLeave: _propTypes2["default"].func,
	  multiple: _propTypes2["default"].bool,
	  isSelected: _propTypes2["default"].bool,
	  manualRef: _propTypes2["default"].func,
	  itemIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].node])
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
	
	exports["default"] = connected;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(189);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(190);
	
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
/* 190 */
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
/* 191 */
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
	
	var _util = __webpack_require__(99);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-menu.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/menu
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var MenuItemGroup = function (_React$Component) {
	  _inherits(MenuItemGroup, _React$Component);
	
	  function MenuItemGroup() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MenuItemGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.renderInnerMenuItem = function (item) {
	      var _this$props = _this.props,
	          renderMenuItem = _this$props.renderMenuItem,
	          index = _this$props.index;
	
	      return renderMenuItem(item, index, _this.props.subMenuKey);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  MenuItemGroup.prototype.render = function render() {
	    var props = _objectWithoutProperties(this.props, []);
	
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
	
	    return _react2["default"].createElement(
	      'li',
	      _extends({}, props, { className: className + ' ' + rootPrefixCls + '-item-group' }),
	      _react2["default"].createElement(
	        'div',
	        {
	          className: titleClassName,
	          title: typeof title === 'string' ? title : undefined
	        },
	        title
	      ),
	      _react2["default"].createElement(
	        'ul',
	        { className: listClassName },
	        _react2["default"].Children.map(children, this.renderInnerMenuItem)
	      )
	    );
	  };
	
	  return MenuItemGroup;
	}(_react2["default"].Component);
	
	MenuItemGroup.propTypes = {
	  renderMenuItem: _propTypes2["default"].func,
	  index: _propTypes2["default"].number,
	  className: _propTypes2["default"].string,
	  subMenuKey: _propTypes2["default"].string,
	  rootPrefixCls: _propTypes2["default"].string
	};
	MenuItemGroup.defaultProps = {
	  disabled: true
	};
	
	
	MenuItemGroup.isMenuItemGroup = true;
	
	exports["default"] = MenuItemGroup;
	module.exports = exports['default'];

/***/ }),
/* 192 */
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-menu.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/menu
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var Divider = function (_React$Component) {
	  _inherits(Divider, _React$Component);
	
	  function Divider() {
	    _classCallCheck(this, Divider);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Divider.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        rootPrefixCls = _props.rootPrefixCls,
	        style = _props.style;
	
	    return _react2["default"].createElement('li', {
	      className: className + ' ' + rootPrefixCls + '-item-divider',
	      style: style
	    });
	  };
	
	  return Divider;
	}(_react2["default"].Component);
	
	Divider.propTypes = {
	  className: _propTypes2["default"].string,
	  rootPrefixCls: _propTypes2["default"].string,
	  style: _propTypes2["default"].object
	};
	Divider.defaultProps = {
	  // To fix keyboard UX.
	  disabled: true,
	  className: '',
	  style: {}
	};
	exports["default"] = Divider;
	module.exports = exports['default'];

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var defaultProps = {
	  clsPrefix: "u-navbar-side-container",
	  sideActive: false
	};
	
	var NavSideContainer = function (_React$Component) {
	  _inherits(NavSideContainer, _React$Component);
	
	  function NavSideContainer() {
	    _classCallCheck(this, NavSideContainer);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  NavSideContainer.prototype.render = function render() {
	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        clsPrefix = _props.clsPrefix,
	        sideActive = _props.sideActive,
	        expanded = _props.expanded,
	        props = _objectWithoutProperties(_props, ['className', 'children', 'clsPrefix', 'sideActive', 'expanded']);
	
	    //const navbarProps = this.context.u_navbar;
	
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className, clsPrefix, expanded && 'expanded') },
	      children
	    );
	  };
	
	  return NavSideContainer;
	}(_react2["default"].Component);
	
	NavSideContainer.defaultProps = defaultProps;
	
	exports["default"] = NavSideContainer;
	module.exports = exports['default'];

/***/ }),
/* 194 */
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
	
	var _createChainedFunction = __webpack_require__(37);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  onClick: _propTypes2["default"].func,
	  /**
	   * The toggle content, if left empty it will render the default toggle (seen above).
	   */
	  show: _propTypes2["default"].bool,
	  children: _propTypes2["default"].node
	};
	
	var contextTypes = {
	  u_navbar: _propTypes2["default"].shape({
	    expanded: _propTypes2["default"].bool,
	    onToggle: _propTypes2["default"].func
	  })
	};
	
	var defaultProps = {
	  clsPrefix: 'u-navbar-toggle',
	  show: false
	};
	
	var MenuToggle = function (_React$Component) {
	  _inherits(MenuToggle, _React$Component);
	
	  function MenuToggle(props) {
	    _classCallCheck(this, MenuToggle);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      toggleState: false
	      //this.handleRender = this.handleRender.bind(this);
	    };return _this;
	  }
	
	  MenuToggle.prototype.handleClick = function handleClick() {
	    var _context$u_navbar = this.context.u_navbar,
	        expanded = _context$u_navbar.expanded,
	        onToggle = _context$u_navbar.onToggle;
	
	    this.setState({ toggleState: !this.state.toggleState });
	    if (onToggle) {
	      onToggle(!expanded);
	    }
	  };
	
	  MenuToggle.prototype.render = function render() {
	    var _props = this.props,
	        onClick = _props.onClick,
	        className = _props.className,
	        children = _props.children,
	        clsPrefix = _props.clsPrefix,
	        show = _props.show,
	        props = _objectWithoutProperties(_props, ['onClick', 'className', 'children', 'clsPrefix', 'show']);
	    //const navbarProps = this.context.u_navbar || { bsClass: 'navbar' };
	    //console.log(navbarProps.onToggle, navbarProps.expanded);
	
	    var buttonProps = _extends({
	      type: 'button'
	    }, props, {
	      onClick: (0, _createChainedFunction2["default"])(onClick, this.handleClick.bind(this)),
	      className: (0, _classnames2["default"])(className, clsPrefix, show && 'show')
	      //!this.context.u_navbar.expanded && 'collapsed',
	    });
	
	    if (children) {
	      return _react2["default"].createElement(
	        'button',
	        buttonProps,
	        children
	      );
	    }
	    //当show存在时，渲染左侧静态面包按钮
	    return _react2["default"].createElement(
	      'div',
	      null,
	      show && this.state.toggleState && _react2["default"].createElement(
	        'button',
	        buttonProps,
	        _react2["default"].createElement(
	          'span',
	          { className: 'sr-only' },
	          'Toggle navigation'
	        ),
	        _react2["default"].createElement('span', { className: 'icon-bar' }),
	        _react2["default"].createElement('span', { className: 'icon-bar' }),
	        _react2["default"].createElement('span', { className: 'icon-bar' })
	      ),
	      show && !this.state.toggleState && _react2["default"].createElement(
	        'button',
	        buttonProps,
	        _react2["default"].createElement('span', { className: 'uf uf-arrow-left' })
	      ),
	      !show && !this.state.toggleState && _react2["default"].createElement(
	        'button',
	        buttonProps,
	        _react2["default"].createElement(
	          'span',
	          { className: 'sr-only' },
	          'Toggle navigation'
	        ),
	        _react2["default"].createElement('span', { className: 'icon-bar' }),
	        _react2["default"].createElement('span', { className: 'icon-bar' }),
	        _react2["default"].createElement('span', { className: 'icon-bar' })
	      )
	    );
	  };
	
	  return MenuToggle;
	}(_react2["default"].Component);
	
	MenuToggle.propTypes = propTypes;
	MenuToggle.defaultProps = defaultProps;
	MenuToggle.contextTypes = contextTypes;
	
	exports["default"] = MenuToggle;
	module.exports = exports['default'];

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tinperBeeCore = __webpack_require__(27);
	
	function animate(node, show, done) {
	  var height = void 0;
	  return (0, _tinperBeeCore.cssAnimation)(node, 'u-motion-collapse', {
	    start: function start() {
	      if (!show) {
	        node.style.height = node.offsetHeight + 'px';
	      } else {
	        height = node.offsetHeight;
	        node.style.height = 0;
	      }
	    },
	    active: function active() {
	      node.style.height = (show ? height : 0) + 'px';
	    },
	    end: function end() {
	      node.style.height = '';
	      done();
	    }
	  });
	}
	
	var animation = {
	  enter: function enter(node, done) {
	    return animate(node, true, done);
	  },
	  leave: function leave(node, done) {
	    return animate(node, false, done);
	  },
	  appear: function appear(node, done) {
	    return animate(node, true, done);
	  }
	};
	
	exports["default"] = animation;
	module.exports = exports['default'];

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _warning = __webpack_require__(32);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var warned = {};
	
	exports["default"] = function (valid, message) {
	  if (!valid && !warned[message]) {
	    (0, _warning2["default"])(false, message);
	    warned[message] = true;
	  }
	};
	
	module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(198);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Icon2["default"];
	module.exports = exports['default'];

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
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
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(200);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _Dropdown2['default'];
	module.exports = exports['default'];

/***/ }),
/* 200 */
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
	
	var _trigger = __webpack_require__(201);
	
	var _trigger2 = _interopRequireDefault(_trigger);
	
	var _placement = __webpack_require__(208);
	
	var _placement2 = _interopRequireDefault(_placement);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * This source code is quoted from rc-dropdown.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/dropdown
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	
	var propTypes = {
	  minOverlayWidthMatchTrigger: _propTypes2['default'].bool,
	  onVisibleChange: _propTypes2['default'].func,
	  clsPrefix: _propTypes2['default'].string,
	  children: _propTypes2['default'].any,
	  transitionName: _propTypes2['default'].string,
	  overlayClassName: _propTypes2['default'].string,
	  animation: _propTypes2['default'].any,
	  align: _propTypes2['default'].object,
	  overlayStyle: _propTypes2['default'].object,
	  placement: _propTypes2['default'].string,
	  trigger: _propTypes2['default'].array,
	  showAction: _propTypes2['default'].array,
	  hideAction: _propTypes2['default'].array,
	  getPopupContainer: _propTypes2['default'].func
	};
	
	var defaultProps = {
	  minOverlayWidthMatchTrigger: true,
	  clsPrefix: 'u-dropdown',
	  trigger: ['hover'],
	  showAction: [],
	  hideAction: [],
	  overlayClassName: '',
	  overlayStyle: {},
	  defaultVisible: false,
	  onVisibleChange: function onVisibleChange() {},
	
	  placement: 'bottomLeft'
	};
	
	var jadgeState = function jadgeState(props) {
	  if ('visible' in props) {
	    return props.visible;
	  }
	  return props.defaultVisible;
	};
	
	var Dropdown = function (_React$Component) {
	  _inherits(Dropdown, _React$Component);
	
	  function Dropdown(props) {
	    _classCallCheck(this, Dropdown);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      visible: jadgeState(_this.props),
	      dropdownWidth: ''
	    };
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onVisibleChange = _this.onVisibleChange.bind(_this);
	    _this.getMenuElement = _this.getMenuElement.bind(_this);
	    _this.getPopupDomNode = _this.getPopupDomNode.bind(_this);
	    _this.afterVisibleChange = _this.afterVisibleChange.bind(_this);
	
	    return _this;
	  }
	
	  Dropdown.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
	    var visible = _ref.visible;
	
	    if (visible !== undefined) {
	      this.setState({
	        visible: visible
	      });
	    }
	  };
	
	  Dropdown.prototype.onClick = function onClick(e) {
	    var props = this.props;
	    var overlayProps = props.overlay.props;
	    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
	    if (!('visible' in props)) {
	      this.setState({
	        visible: false
	      });
	    }
	    if (overlayProps.onClick) {
	      overlayProps.onClick(e);
	    }
	  };
	
	  Dropdown.prototype.onVisibleChange = function onVisibleChange(visible) {
	    var props = this.props;
	    if (!('visible' in props)) {
	      this.setState({
	        visible: visible
	      });
	    }
	    props.onVisibleChange(visible);
	  };
	
	  Dropdown.prototype.getMenuElement = function getMenuElement() {
	    var _props = this.props,
	        overlay = _props.overlay,
	        clsPrefix = _props.clsPrefix;
	
	
	    return _react2['default'].cloneElement(overlay, {
	      prefixCls: clsPrefix + '-menu',
	      clsPrefix: clsPrefix + '-menu',
	      onClick: this.onClick
	    });
	  };
	
	  Dropdown.prototype.getPopupDomNode = function getPopupDomNode() {
	    return this.refs.trigger.getPopupDomNode();
	  };
	
	  Dropdown.prototype.afterVisibleChange = function afterVisibleChange(visible) {
	    if (visible && this.props.minOverlayWidthMatchTrigger) {
	      var overlayNode = this.getPopupDomNode();
	      var rootNode = _reactDom2['default'].findDOMNode(this);
	      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
	        overlayNode.style['min-width'] = rootNode.offsetWidth + 'px';
	      }
	    }
	  };
	
	  Dropdown.prototype.render = function render() {
	    var _props2 = this.props,
	        clsPrefix = _props2.clsPrefix,
	        children = _props2.children,
	        transitionName = _props2.transitionName,
	        animation = _props2.animation,
	        align = _props2.align,
	        placement = _props2.placement,
	        getPopupContainer = _props2.getPopupContainer,
	        showAction = _props2.showAction,
	        hideAction = _props2.hideAction,
	        overlayClassName = _props2.overlayClassName,
	        overlayStyle = _props2.overlayStyle,
	        trigger = _props2.trigger,
	        getDocument = _props2.getDocument,
	        props = _objectWithoutProperties(_props2, ['clsPrefix', 'children', 'transitionName', 'animation', 'align', 'placement', 'getPopupContainer', 'showAction', 'hideAction', 'overlayClassName', 'overlayStyle', 'trigger', 'getDocument']);
	
	    return _react2['default'].createElement(
	      _trigger2['default'],
	      _extends({}, props, {
	        clsPrefix: clsPrefix,
	        ref: 'trigger',
	        popupClassName: overlayClassName,
	        popupStyle: overlayStyle,
	        builtinPlacements: _placement2['default'],
	        action: trigger,
	        showAction: showAction,
	        hideAction: hideAction,
	        popupPlacement: placement,
	        popupAlign: align,
	        popupTransitionName: transitionName,
	        popupAnimation: animation,
	        popupVisible: this.state.visible,
	        afterPopupVisibleChange: this.afterVisibleChange,
	        popup: this.getMenuElement(),
	        onPopupVisibleChange: this.onVisibleChange,
	        getPopupContainer: getPopupContainer,
	        getDocument: getDocument
	      }),
	      children
	    );
	  };
	
	  return Dropdown;
	}(_react2['default'].Component);
	
	;
	
	Dropdown.propTypes = propTypes;
	Dropdown.defaultProps = defaultProps;
	
	exports['default'] = Dropdown;
	module.exports = exports['default'];

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(202);

/***/ }),
/* 202 */
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
	
	var _contains = __webpack_require__(203);
	
	var _contains2 = _interopRequireDefault(_contains);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	var _Popup = __webpack_require__(204);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _utils = __webpack_require__(207);
	
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
/* 203 */
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
/* 204 */
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
	
	var _PopupInner = __webpack_require__(205);
	
	var _PopupInner2 = _interopRequireDefault(_PopupInner);
	
	var _LazyRenderBox = __webpack_require__(206);
	
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
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _LazyRenderBox = __webpack_require__(206);
	
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
/* 206 */
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
/* 207 */
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
/* 208 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var autoAdjustOverflow = {
	  adjustX: 1,
	  adjustY: 1
	};
	
	var targetOffset = [0, 0];
	
	var placements = exports.placements = {
	  topLeft: {
	    points: ['bl', 'tl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  topCenter: {
	    points: ['bc', 'tc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    overflow: autoAdjustOverflow,
	    offset: [0, -4],
	    targetOffset: targetOffset
	  },
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  bottomCenter: {
	    points: ['tc', 'bc'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    overflow: autoAdjustOverflow,
	    offset: [0, 4],
	    targetOffset: targetOffset
	  }
	};
	
	exports['default'] = placements;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _beeMenus = __webpack_require__(85);
	
	var _beeMenus2 = _interopRequireDefault(_beeMenus);
	
	var _src = __webpack_require__(199);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 不同样子的下拉菜单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 通过不同的子组件搭配，组成不同形式的菜单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Item = _beeMenus2['default'].Item,
	    Divider = _beeMenus2['default'].Divider,
	    SubMenu = _beeMenus2['default'].SubMenu,
	    ItemGroup = _beeMenus2['default'].ItemGroup;
	
	
	function onSelect(_ref) {
	  var key = _ref.key;
	
	  console.log(key + ' selected');
	}
	
	function onVisibleChange(visible) {
	  console.log(visible);
	}
	
	var menu1 = _react2['default'].createElement(
	  _beeMenus2['default'],
	  {
	    multiple: true,
	    onSelect: onSelect },
	  _react2['default'].createElement(
	    Item,
	    { key: '1' },
	    '\u501F\u6B3E\u5408\u540C'
	  ),
	  _react2['default'].createElement(
	    Item,
	    { key: '2' },
	    '\u62B5/\u8D28\u62BC\u5408\u540C'
	  ),
	  _react2['default'].createElement(
	    Item,
	    { key: '3' },
	    '\u62C5\u4FDD\u5408\u540C'
	  ),
	  _react2['default'].createElement(
	    Item,
	    { key: '4' },
	    '\u8054\u4FDD\u5408\u540C'
	  ),
	  _react2['default'].createElement(Divider, null),
	  _react2['default'].createElement(
	    Item,
	    { key: '5' },
	    '\u5408\u540C\u5BA1\u6279'
	  ),
	  _react2['default'].createElement(
	    Item,
	    { key: '6' },
	    '\u62B5/\u8D28\u62BC\u5408\u540C\u8DDF\u8E2A'
	  )
	);
	
	var menu2 = _react2['default'].createElement(
	  _beeMenus2['default'],
	  {
	    multiple: true,
	    onSelect: onSelect },
	  _react2['default'].createElement(
	    ItemGroup,
	    { title: '\u5408\u540C\u7C7B\u522B' },
	    _react2['default'].createElement(
	      Item,
	      { key: '1' },
	      '\u501F\u6B3E\u5408\u540C'
	    ),
	    _react2['default'].createElement(
	      Item,
	      { key: '2' },
	      '\u62B5/\u8D28\u62BC\u5408\u540C'
	    ),
	    _react2['default'].createElement(
	      Item,
	      { key: '3' },
	      '\u62C5\u4FDD\u5408\u540C'
	    ),
	    _react2['default'].createElement(
	      Item,
	      { key: '4' },
	      '\u8054\u4FDD\u5408\u540C'
	    )
	  ),
	  _react2['default'].createElement(
	    ItemGroup,
	    { title: '\u5408\u540C\u64CD\u4F5C' },
	    _react2['default'].createElement(
	      Item,
	      { key: '5' },
	      '\u5408\u540C\u5BA1\u6279'
	    ),
	    _react2['default'].createElement(
	      Item,
	      { key: '6' },
	      '\u62B5/\u8D28\u62BC\u5408\u540C\u8DDF\u8E2A'
	    )
	  )
	);
	var menu3 = _react2['default'].createElement(
	  _beeMenus2['default'],
	  {
	    vertical: true,
	    onSelect: onSelect },
	  _react2['default'].createElement(
	    SubMenu,
	    { key: 'sub1', title: '\u5408\u540C\u7C7B\u522B' },
	    _react2['default'].createElement(
	      Item,
	      { key: '1' },
	      '\u501F\u6B3E\u5408\u540C'
	    ),
	    _react2['default'].createElement(
	      Item,
	      { key: '2' },
	      '\u62B5/\u8D28\u62BC\u5408\u540C'
	    ),
	    _react2['default'].createElement(
	      Item,
	      { key: '3' },
	      '\u62C5\u4FDD\u5408\u540C'
	    ),
	    _react2['default'].createElement(
	      Item,
	      { key: '4' },
	      '\u8054\u4FDD\u5408\u540C'
	    )
	  ),
	  _react2['default'].createElement(
	    SubMenu,
	    { key: 'sub2', title: '\u5408\u540C\u64CD\u4F5C' },
	    _react2['default'].createElement(
	      Item,
	      { key: '5' },
	      '\u62B5/\u8D28\u62BC\u5408\u540C\u8DDF\u8E2A'
	    ),
	    _react2['default'].createElement(
	      SubMenu,
	      { key: 'sub3', title: '\u5408\u540C\u5BA1\u6279' },
	      _react2['default'].createElement(
	        Item,
	        { key: '6' },
	        '\u5F85\u5BA1\u6279\u5408\u540C'
	      ),
	      _react2['default'].createElement(
	        Item,
	        { key: '7' },
	        '\u5DF2\u5BA1\u6279\u5408\u540C'
	      )
	    )
	  )
	);
	
	var Demo2 = function (_Component) {
	  _inherits(Demo2, _Component);
	
	  function Demo2() {
	    _classCallCheck(this, Demo2);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Demo2.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'demoPadding' },
	      _react2['default'].createElement(
	        _src2['default'],
	        {
	          trigger: ['click'],
	          overlay: menu1,
	          animation: 'slide-up',
	          onVisibleChange: onVisibleChange
	        },
	        _react2['default'].createElement(
	          _beeButton2['default'],
	          { colors: 'primary' },
	          '\u5E26\u6709\u5206\u5272\u7EBF\u7684\u4E0B\u62C9'
	        )
	      ),
	      _react2['default'].createElement(
	        _src2['default'],
	        {
	          trigger: ['click'],
	          overlay: menu2,
	          animation: 'slide-up',
	          onVisibleChange: onVisibleChange
	        },
	        _react2['default'].createElement(
	          _beeButton2['default'],
	          { colors: 'primary' },
	          '\u5E26\u6709\u5C0F\u6807\u9898\u7684\u4E0B\u62C9'
	        )
	      ),
	      _react2['default'].createElement(
	        _src2['default'],
	        {
	          trigger: ['click'],
	          overlay: menu3,
	          animation: 'slide-up',
	          onVisibleChange: onVisibleChange
	        },
	        _react2['default'].createElement(
	          _beeButton2['default'],
	          { colors: 'primary', style: { width: 150 } },
	          '\u591A\u7EA7\u4E0B\u62C9'
	        )
	      )
	    );
	  };
	
	  return Demo2;
	}(_react.Component);
	
	exports['default'] = Demo2;
	module.exports = exports['default'];

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _beeMenus = __webpack_require__(85);
	
	var _beeMenus2 = _interopRequireDefault(_beeMenus);
	
	var _src = __webpack_require__(199);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 控制显示隐藏的下拉菜单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Item = _beeMenus2['default'].Item;
	
	
	function onVisibleChange(visible) {
	    console.log(visible);
	}
	
	var Demo3 = function (_Component) {
	    _inherits(Demo3, _Component);
	
	    function Demo3() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo3);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	            visible: false
	        }, _this.handleSelect = function () {
	            _this.setState({
	                visible: false
	            });
	        }, _this.handleShow = function () {
	            _this.setState({
	                visible: true
	            });
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo3.prototype.render = function render() {
	
	        var menu1 = _react2['default'].createElement(
	            _beeMenus2['default'],
	            {
	                onSelect: this.handleSelect },
	            _react2['default'].createElement(
	                Item,
	                { key: '1' },
	                '\u501F\u6B3E\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '2' },
	                '\u62B5/\u8D28\u62BC\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '3' },
	                '\u62C5\u4FDD\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '4' },
	                '\u8054\u4FDD\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '5' },
	                '\u5408\u540C\u5BA1\u6279'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '6' },
	                '\u62B5/\u8D28\u62BC\u5408\u540C\u8DDF\u8E2A'
	            )
	        );
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                _src2['default'],
	                {
	                    trigger: ['click'],
	                    overlay: menu1,
	                    animation: 'slide-up',
	                    visible: this.state.visible,
	                    onVisibleChange: onVisibleChange
	                },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    {
	                        onClick: this.handleShow,
	                        colors: 'primary' },
	                    '\u53D7\u63A7\u5236\u7684\u4E0B\u62C9'
	                )
	            )
	        );
	    };
	
	    return Demo3;
	}(_react.Component);
	
	exports['default'] = Demo3;
	module.exports = exports['default'];

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _beeMenus = __webpack_require__(85);
	
	var _beeMenus2 = _interopRequireDefault(_beeMenus);
	
	var _beeIcon = __webpack_require__(197);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	var _src = __webpack_require__(199);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 基础下拉菜单
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 如何获取选中对象自定义对象和数据
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Item = _beeMenus2['default'].Item;
	
	
	var dataList = [{ "key": "1", value: "借款合同", id: "a" }, { "key": "2", value: "抵/质押合同", id: "v" }, { "key": "3", value: "担保合同", id: "c" }, { "key": "4", value: "联保合同", id: "d" }];
	
	function onVisibleChange(visible) {
	    console.log(visible);
	}
	
	var Demo4 = function (_Component) {
	    _inherits(Demo4, _Component);
	
	    function Demo4() {
	        _classCallCheck(this, Demo4);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    /**
	     * 获取当前选中行的item对象。
	     * @param {*} value 
	     */
	    Demo4.prototype.onSelect = function onSelect(_ref) {
	        var key = _ref.key,
	            item = _ref.item;
	
	        console.log(key + ' selected'); //获取key
	        var currentObject = item.props.data; //获取选中对象的数据
	        console.log(currentObject);
	    };
	
	    Demo4.prototype.render = function render() {
	        var menu1 = _react2['default'].createElement(
	            _beeMenus2['default'],
	            { onSelect: this.onSelect },
	            dataList.map(function (da) {
	                return _react2['default'].createElement(
	                    Item,
	                    { key: da.key, data: da },
	                    da.value
	                );
	            })
	        );
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                _src2['default'],
	                {
	                    trigger: ['click'],
	                    overlay: menu1,
	                    animation: 'slide-up',
	                    onVisibleChange: onVisibleChange },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { colors: 'primary' },
	                    '\u70B9\u51FB\u663E\u793A'
	                )
	            )
	        );
	    };
	
	    return Demo4;
	}(_react.Component);
	
	exports['default'] = Demo4;
	module.exports = exports['default'];

/***/ }),
/* 212 */
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
	
	var _beeMenus = __webpack_require__(85);
	
	var _beeMenus2 = _interopRequireDefault(_beeMenus);
	
	var _beeIcon = __webpack_require__(197);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	var _src = __webpack_require__(199);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 使用键盘操作示例
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Item = _beeMenus2['default'].Item;
	
	var Demo5 = function (_Component) {
	    _inherits(Demo5, _Component);
	
	    function Demo5() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Demo5);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onVisibleChange = function (visible) {
	            console.log(visible);
	            if (visible) {
	                window.setTimeout(function () {
	                    _reactDom2['default'].findDOMNode(_this.refs.menurefs).focus();
	                });
	            }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    Demo5.prototype.onSelect = function onSelect(_ref) {
	        var key = _ref.key;
	
	        console.log(key + ' selected');
	    };
	
	    Demo5.prototype.render = function render() {
	
	        var menu1 = _react2['default'].createElement(
	            _beeMenus2['default'],
	            { ref: 'menurefs',
	                onSelect: this.onSelect },
	            _react2['default'].createElement(
	                Item,
	                { key: '1' },
	                '\u501F\u6B3E\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '2' },
	                '\u62B5/\u8D28\u62BC\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '3' },
	                '\u62C5\u4FDD\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '4' },
	                '\u8054\u4FDD\u5408\u540C'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '5' },
	                '\u5408\u540C\u5BA1\u6279'
	            ),
	            _react2['default'].createElement(
	                Item,
	                { key: '6' },
	                '\u62B5/\u8D28\u62BC\u5408\u540C\u8DDF\u8E2A'
	            )
	        );
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                _src2['default'],
	                {
	                    trigger: ['click'],
	                    overlay: menu1,
	                    animation: 'slide-up',
	                    onVisibleChange: this.onVisibleChange },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { colors: 'primary' },
	                    '\u70B9\u51FB\u663E\u793A'
	                )
	            )
	        );
	    };
	
	    return Demo5;
	}(_react.Component);
	
	exports['default'] = Demo5;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map