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
	
	var Demo1 = __webpack_require__(84);var Demo10 = __webpack_require__(92);var Demo2 = __webpack_require__(93);var Demo3 = __webpack_require__(94);var Demo4 = __webpack_require__(95);var Demo5 = __webpack_require__(98);var Demo6 = __webpack_require__(99);var Demo7 = __webpack_require__(100);var Demo8 = __webpack_require__(101);var Demo9 = __webpack_require__(102);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " Tree基本使用示例", "code": "/**\n *\n * @title Tree基本使用示例\n * @description 示例涵盖 checkbox如何选择，disable状态和部分选择状态。checkStrictly为true时，子节点与父节点的选择情况都不会影响到对方\n *\n */\n\n\nimport React, {\n\tComponent\n} from 'react';\nimport { Tree, Icon } from 'tinper-bee';\nconst TreeNode = Tree.TreeNode;\n\nconst defaultProps = {\n\tkeys: ['0-0-0', '0-0-1']\n}\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tconst keys = this.props.keys;\n\t\tthis.state = {\n\t\t\tdefaultExpandedKeys: keys,\n\t\t\tdefaultSelectedKeys: keys,\n\t\t\tdefaultCheckedKeys:keys,\n\t\t\tcheckedKeys: {checked:keys},\n\t\t};\n\t}\n\tonSelect(info) {\n\t\tconsole.log('selected', info);\n\t}\n\tonCheck = (checkedKeys,newst) => {\n\t\t//用户可以自定义当前选中和半选中的节点。\n\t\tconsole.log('onCheck', checkedKeys);\n\t\tconst cks = {\n\t\t\tchecked: checkedKeys.checked || checkedKeys,\n\t\t\thalfChecked:checkedKeys.halfChecked\n\t\t};\n\t\tthis.setState({checkedKeys:cks});\n\t}\n\n\tonDoubleClick=(key,treeNode)=>{\n\t\tconsole.log('---onDblClick---'+key+'--treeNode--'+treeNode);\n\t}\n\trender() {\n\t\n\t\treturn (\n\t\t\t<Tree className=\"myCls\" showLine checkable\n\t        defaultExpandedKeys={this.state.defaultExpandedKeys}\n\t\t\t\t\tdefaultSelectedKeys={this.state.defaultSelectedKeys}\n\t\t\t\t\tdefaultCheckedKeys = {this.state.defaultCheckedKeys}\n\t\t\t\t\tcheckStrictly\n\t\t\t\t\tshowIcon\n\t\t\t\t\tcancelUnSelect={true}\n\t\t\t\t\tonSelect={this.onSelect} onCheck={this.onCheck}\n\t\t\t\t\tonDoubleClick={this.onDoubleClick}\n\t      >\n\t        <TreeNode title=\"parent 1\" key=\"0-0\"  icon={<Icon type=\"uf-treefolder\" />}>\n\t          <TreeNode title=\"parent 1-0\" key=\"0-0-0\" disabled  icon={<Icon type=\"uf-treefolder\" />}>\n\t            <TreeNode title=\"leaf\" key=\"0-0-0-0\" disableCheckbox icon={<Icon type=\"uf-list-s-o\" />}/>\n\t            <TreeNode title=\"leaf\" key=\"0-0-0-1\" icon={<Icon type=\"uf-list-s-o\" />}/>\n\t          </TreeNode>\n\t          <TreeNode title=\"parent 1-1\" key=\"0-0-1\" icon={<Icon type=\"uf-treefolder\" />}>\n\t            <TreeNode title={<span>sss</span>} key=\"0-0-1-0\" icon={<Icon type=\"uf-list-s-o\" />}/>\n\t          </TreeNode>\n\t        </TreeNode>\n\t      </Tree>\n\t\t);\n\t}\n}\n\nDemo1.defaultProps = defaultProps;\n\n\n", "desc": " 示例涵盖 checkbox如何选择，disable状态和部分选择状态。checkStrictly为true时，子节点与父节点的选择情况都不会影响到对方" }, { "example": _react2['default'].createElement(Demo10, null), "title": " Tree基本使用示例", "code": "/**\n *\n * @title Tree基本使用示例\n * @description 如何获取选中对象自定义对象和数据\n *\n */\n\n\nimport React, {\n\tComponent\n} from 'react';\nimport { Tree } from 'tinper-bee';\n\nconst TreeNode = Tree.TreeNode;\n\nconst defaultProps = {\n\tkeys: ['0-0-0', '0-0-1']\n}\nclass Demo10 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tconst keys = this.props.keys;\n\t\tthis.state = {\n\t\t\tdefaultExpandedKeys: keys,\n\t\t\tdefaultSelectedKeys: keys,\n\t\t\tdefaultCheckedKeys:keys\n\t\t\t// checkedKeys: {checked:keys},\n\t\t};\n    }\n    /**\n     * 获取当前选中行的item对象。\n     * @param {*} value \n     */\n\tonSelect(selectedKeys, e) {\n        console.log(`${selectedKeys} selected`);//获取key\n        let currentObject = {};\n        currentObject.title = e.node.props.title; //获取选中对象的数据\n        currentObject.key = e.node.props.eventKey;\n        console.log(currentObject); \n\t}\n\tonCheck = (checkedKeys) => {\n\t\tlet self = this;\n\t\tconsole.log('onCheck', checkedKeys);\n\t\tconst cks = {\n\t\t\tchecked: checkedKeys.checked || checkedKeys,\n\t\t};\n\t\t// this.setState({checkedKeys:cks});\n\t}\n\n\tonDoubleClick=(key,treeNode)=>{\n\t\tconsole.log('---onDblClick---'+key+'--treeNode--'+treeNode);\n\t}\n\trender() {\n\t\n\t\treturn (\n\t\t\t<Tree className=\"myCls\" showLine checkable\n                defaultExpandedKeys={this.state.defaultExpandedKeys}\n                defaultSelectedKeys={this.state.defaultSelectedKeys}\n                defaultCheckedKeys = {this.state.defaultCheckedKeys}\n                checkStrictly\n                onSelect={this.onSelect} onCheck={this.onCheck}\n                onDoubleClick={this.onDoubleClick}\n            >\n                <TreeNode title=\"parent 1\" key=\"0-0\" >\n                <TreeNode title=\"parent 1-0\" key=\"0-0-0\" disabled>\n                    <TreeNode title=\"leaf\" key=\"0-0-0-0\" disableCheckbox />\n                    <TreeNode title=\"leaf\" key=\"0-0-0-1\" />\n                </TreeNode>\n                <TreeNode title=\"parent 1-1\" key=\"0-0-1\">\n                    <TreeNode title={<span>sss</span>} key=\"0-0-1-0\" />\n                </TreeNode>\n                <TreeNode title=\"parent 1-2\" key=\"0-0-2\" >\n                    <TreeNode title=\"leaf\" key=\"0-0-2-0\" />\n                    <TreeNode title=\"leaf\" key=\"0-0-2-1\" />\n                </TreeNode>\n                </TreeNode>\n\t      </Tree>\n\t\t);\n\t}\n}\n\nDemo10.defaultProps = defaultProps;\n\n\n", "desc": " 如何获取选中对象自定义对象和数据" }, { "example": _react2['default'].createElement(Demo2, null), "title": " Tree数据可控示例", "code": "/**\n*\n* @title Tree数据可控示例\n* @description\n* \b\n*/\n\nimport React, { Component } from 'react';\nimport { Tree } from 'tinper-bee';\n\nconst x = 6;\nconst y = 5;\nconst z = 2;\nconst gData = [];\n\nconst generateData = (_level, _preKey, _tns) => {\n    const preKey = _preKey || '0';\n    const tns = _tns || gData;\n\n    const children = [];\n    for (let i = 0; i < x; i++) {\n        const key = `${preKey}-${i}`;\n        tns.push({ title: key, key });\n        if (i < y) {\n            children.push(key);\n        }\n    }\n    if (_level < 0) {\n        return tns;\n    }\n    const level = _level - 1;\n    children.forEach((key, index) => {\n        tns[index].children = [];\n        return generateData(level, key, tns[index].children);\n    });\n};\ngenerateData(z);\n\nconst TreeNode = Tree.TreeNode;\n\n\nclass Demo2 extends Component{\n  constructor(props) {\n  \tsuper(props);\n    this.state = {\n      expandedKeys: [],\n      autoExpandParent: true,\n      checkedKeys: ['0-0-0'],\n      selectedKeys: [],\n    };\n    this.onExpand = this.onExpand.bind(this);\n    this.onCheck = this.onCheck.bind(this);\n    this.onSelect = this.onSelect.bind(this);\n  }\n  onExpand(expandedKeys) {\n    console.log('onExpand', arguments);\n    // if not set autoExpandParent to false, if children expanded, parent can not collapse.\n    // or, you can remove all expanded children keys.\n    this.setState({\n      expandedKeys,\n      autoExpandParent: false,\n    });\n  }\n  onCheck(checkedKeys) {\n    this.setState({\n      checkedKeys,\n      selectedKeys: ['0-3', '0-4'],\n    });\n  }\n  onSelect(selectedKeys, info) {\n    console.log('onSelect', info);\n    this.setState({ selectedKeys });\n  }\n  render() {\n    const loop = data => data.map((item) => {\n      if (item.children) {\n        return (\n          <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>\n            {loop(item.children)}\n          </TreeNode>\n        );\n      }\n      return <TreeNode key={item.key} title={item.key} isLeaf={true}/>;\n    });\n    return (\n      <Tree\n        checkable\n        focusable\n        className=\"demo2 myCls\"\n        onExpand={this.onExpand} expandedKeys={this.state.expandedKeys}\n        autoExpandParent={this.state.autoExpandParent}\n        onCheck={this.onCheck} \n        onSelect={this.onSelect} \n      >\n        {loop(gData)}\n      </Tree>\n    );\n  }\n};\n\n\n", "desc": "", "scss_code": "// .demo2.u-tree {\n//   li a.u-tree-node-content-wrapper:hover::before {\n//     background: rgb(235, 236, 240);\n//   }\n//   li a.u-tree-node-content-wrapper.u-tree-node-selected {\n//     color: rgb(245, 60, 50);\n//     .u-tree-title{\n//         color: rgb(245, 60, 50);\n//     }\n//     background: transparent;\n//     &::before {\n//       background: rgb(235, 236, 240);\n//     }\n//   }\n\n//   li a.u-tree-node-content-wrapper::before {\n//     position: absolute;\n//     right: 0;\n//     left: 0;\n//     height: 20px;\n//     -webkit-transition: all 0.3s;\n//     transition: all 0.3s;\n//     content: \"\";\n//   }\n\n//   li  span {\n//     position: relative;\n//     z-index: 1;\n//   }\n// }\n" }, { "example": _react2['default'].createElement(Demo3, null), "title": " Tree 拖拽使用示例", "code": "/**\n*\n* @title Tree 拖拽使用示例\n* @description 拖动结点插入到另一个结点后面或者其他的父节点里面。\n*\n*/\n\n\n\nimport React, { Component } from 'react';\nimport { Tree } from 'tinper-bee';\n\nconst x = 3;\nconst y = 2;\nconst z = 1;\nconst gData = [];\n\nconst generateData = (_level, _preKey, _tns) => {\n    const preKey = _preKey || '0';\n    const tns = _tns || gData;\n\n    const children = [];\n    for (let i = 0; i < x; i++) {\n        const key = `${preKey}-${i}`;\n        tns.push({ title: key, key });\n        if (i < y) {\n            children.push(key);\n        }\n    }\n    if (_level < 0) {\n        return tns;\n    }\n    const level = _level - 1;\n    children.forEach((key, index) => {\n        tns[index].children = [];\n        return generateData(level, key, tns[index].children);\n    });\n};\ngenerateData(z);\n\nconst TreeNode = Tree.TreeNode;\n\nclass Demo3 extends Component{\n  constructor(props) {\n    super(props);\n    this.state = {\n      gData,\n      expandedKeys: ['0-0', '0-0-0', '0-0-0-0'],\n    };\n    this.onDragEnter = this.onDragEnter.bind(this);\n    this.onDrop = this.onDrop.bind(this);\n  }\n  onDragEnter(info) {\n    console.log(info);\n    // expandedKeys 需要受控时设置\n    // this.setState({\n    //   expandedKeys: info.expandedKeys,\n    // });\n  }\n  onDrop(info) {\n    console.log(info);\n    const dropKey = info.node.props.eventKey;\n    const dragKey = info.dragNode.props.eventKey;\n    // const dragNodesKeys = info.dragNodesKeys;\n    const loop = (data, key, callback) => {\n      data.forEach((item, index, arr) => {\n        if (item.key === key) {\n          return callback(item, index, arr);\n        }\n        if (item.children) {\n          return loop(item.children, key, callback);\n        }\n      });\n    };\n    const data = [...this.state.gData];\n    let dragObj;\n    loop(data, dragKey, (item, index, arr) => {\n      arr.splice(index, 1);\n      dragObj = item;\n    });\n    if (info.dropToGap) {\n      let ar;\n      let i;\n      loop(data, dropKey, (item, index, arr) => {\n        ar = arr;\n        i = index;\n      });\n      ar.splice(i, 0, dragObj);\n    } else {\n      loop(data, dropKey, (item) => {\n        item.children = item.children || [];\n        // where to insert 示例添加到尾部，可以是随意位置\n        item.children.push(dragObj);\n      });\n    }\n    this.setState({\n      gData: data,\n    });\n  }\n  render() {\n    const loop = data => data.map((item) => {\n      if (item.children && item.children.length) {\n        return <TreeNode key={item.key} title={item.key}>{loop(item.children)}</TreeNode>;\n      }\n      return <TreeNode key={item.key} title={item.key} />;\n    });\n    return (\n      <Tree\n        className=\"myCls\"\n        defaultExpandedKeys={this.state.expandedKeys}\n        draggable\n        onDragEnter={this.onDragEnter}\n        onDrop={this.onDrop}\n      >\n        {loop(this.state.gData)}\n      </Tree>\n    );\n  }\n};\n\n", "desc": " 拖动结点插入到另一个结点后面或者其他的父节点里面。" }, { "example": _react2['default'].createElement(Demo4, null), "title": " Tree可搜索示例", "code": "/**\n *\n * @title Tree可搜索示例\n * @description\n *\n */\n\n\nimport React, {\n  Component\n} from 'react';\nimport { Tree, FormControl } from 'tinper-bee';\n\nconst x = 3;\nconst y = 2;\nconst z = 1;\nconst gData = [];\n\nconst generateData = (_level, _preKey, _tns) => {\n  const preKey = _preKey || '0';\n  const tns = _tns || gData;\n\n  const children = [];\n  for (let i = 0; i < x; i++) {\n    const key = `${preKey}-${i}`;\n    tns.push({\n      title: key,\n      key\n    });\n    if (i < y) {\n      children.push(key);\n    }\n  }\n  if (_level < 0) {\n    return tns;\n  }\n  const level = _level - 1;\n  children.forEach((key, index) => {\n    tns[index].children = [];\n    return generateData(level, key, tns[index].children);\n  });\n};\ngenerateData(z);\n\nconst TreeNode = Tree.TreeNode;\n\nconst dataList = [];\nconst generateList = (data) => {\n  for (let i = 0; i < data.length; i++) {\n    const node = data[i];\n    const key = node.key;\n    dataList.push({\n      key,\n      title: key\n    });\n    if (node.children) {\n      generateList(node.children, node.key);\n    }\n  }\n};\ngenerateList(gData);\n\nconst getParentKey = (key, tree) => {\n  let parentKey;\n  for (let i = 0; i < tree.length; i++) {\n    const node = tree[i];\n    if (node.children) {\n      if (node.children.some(item => item.key === key)) {\n        parentKey = node.key;\n      } else if (getParentKey(key, node.children)) {\n        parentKey = getParentKey(key, node.children);\n      }\n    }\n  }\n  return parentKey;\n};\n\n\nclass Demo4 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      expandedKeys: [],\n      searchValue: '',\n      autoExpandParent: true,\n    }\n  }\n  onExpand = (expandedKeys) => {\n    this.setState({\n      expandedKeys,\n      autoExpandParent: false,\n    });\n  }\n  onChange = (value) => {\n\n    const expandedKeys = [];\n    dataList.forEach((item) => {\n      if (item.key.indexOf(value) > -1) {\n        expandedKeys.push(getParentKey(item.key, gData));\n      }\n    });\n    const uniqueExpandedKeys = [];\n    expandedKeys.forEach((item) => {\n      if (item && uniqueExpandedKeys.indexOf(item) === -1) {\n        uniqueExpandedKeys.push(item);\n      }\n    });\n    this.setState({\n      expandedKeys: uniqueExpandedKeys,\n      searchValue: value,\n      autoExpandParent: true,\n    });\n  }\n  render() {\n    const {\n      searchValue,\n      expandedKeys,\n      autoExpandParent\n    } = this.state;\n    const loop = data => data.map((item) => {\n      const index = item.key.search(searchValue);\n      const beforeStr = item.key.substr(0, index);\n      const afterStr = item.key.substr(index + searchValue.length);\n      const title = index > -1 ? (\n        <span>\n          {beforeStr}\n          <span className=\"u-tree-searchable-filter\">{searchValue}</span>\n          {afterStr}\n        </span>\n      ) : <span>{item.key}</span>;\n      if (item.children) {\n        return (\n          <TreeNode key={item.key} title={title}>\n            {loop(item.children)}\n          </TreeNode>\n        );\n      }\n      return <TreeNode key={item.key} title={title} />;\n    });\n    return (\n      <div>\n        <FormControl\n          style={{ width: 200 }}\n          placeholder=\"Search\"\n          onChange={this.onChange}\n        />\n        <Tree\n          className=\"myCls\"\n          onExpand={this.onExpand}\n          expandedKeys={expandedKeys}\n          autoExpandParent={autoExpandParent}\n        >\n          {loop(gData)}\n        </Tree>\n      </div>\n    );\n  }\n}\n\n", "desc": "", "scss_code": ".u-tree-searchable-filter {\n  color: #f50;\n  transition: all .3s ease;\n}" }, { "example": _react2['default'].createElement(Demo5, null), "title": " Tree异步数据加载", "code": "/**\n *\n * @title Tree异步数据加载\n * @description 当点击展开，异步获取子节点数据\n *\n */\n\n\nimport React, {\n  Component\n} from 'react';\nimport { Tree } from 'tinper-bee';\n\nconst x = 3;\nconst y = 2;\nconst z = 1;\nconst gData = [];\n\nconst generateData = (_level, _preKey, _tns) => {\n  const preKey = _preKey || '0';\n  const tns = _tns || gData;\n\n  const children = [];\n  for (let i = 0; i < x; i++) {\n    const key = `${preKey}-${i}`;\n    tns.push({\n      title: key,\n      key\n    });\n    if (i < y) {\n      children.push(key);\n    }\n  }\n  if (_level < 0) {\n    return tns;\n  }\n  const level = _level - 1;\n  children.forEach((key, index) => {\n    tns[index].children = [];\n    return generateData(level, key, tns[index].children);\n  });\n};\ngenerateData(z);\n\nconst TreeNode = Tree.TreeNode;\n\nfunction generateTreeNodes(treeNode) {\n  const arr = [];\n  const key = treeNode.props.eventKey;\n  for (let i = 0; i < 3; i++) {\n    arr.push({\n      name: `leaf ${key}-${i}`,\n      key: `${key}-${i}`\n    });\n  }\n  return arr;\n}\n\nfunction setLeaf(treeData, curKey, level) {\n  const loopLeaf = (data, lev) => {\n    const l = lev - 1;\n    data.forEach((item) => {\n      if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :\n        curKey.indexOf(item.key) !== 0) {\n        return;\n      }\n      if (item.children) {\n        loopLeaf(item.children, l);\n      } else if (l < 1) {\n        item.isLeaf = true;\n      }\n    });\n  };\n  loopLeaf(treeData, level + 1);\n}\n\nfunction getNewTreeData(treeData, curKey, child, level) {\n  const loop = (data) => {\n    if (level < 1 || curKey.length - 3 > level * 2) return;\n    data.forEach((item) => {\n      if (curKey.indexOf(item.key) === 0) {\n        if (item.children) {\n          loop(item.children);\n        } else {\n          item.children = child;\n        }\n      }\n    });\n  };\n  loop(treeData);\n  setLeaf(treeData, curKey, level);\n}\n\nclass Demo5 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      treeData: [],\n    };\n    this.onSelect = this.onSelect.bind(this);\n    this.onLoadData = this.onLoadData.bind(this);\n  }\n  componentDidMount() {\n    setTimeout(() => {\n      this.setState({\n        treeData: [{\n          name: 'pNode 01',\n          key: '0-0'\n        }, {\n          name: 'pNode 02',\n          key: '0-1'\n        }, {\n          name: 'pNode 03',\n          key: '0-2',\n          isLeaf: true\n        }, ],\n      });\n    }, 100);\n  }\n  onSelect(info) {\n    console.log('selected', info);\n  }\n  onLoadData(treeNode) {\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        const treeData = [...this.state.treeData];\n        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);\n        this.setState({\n          treeData\n        });\n        resolve();\n      }, 1000);\n    });\n  }\n  render() {\n    const loop = data => data.map((item) => {\n      if (item.children) {\n        return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;\n      }\n      return <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;\n    });\n    const treeNodes = loop(this.state.treeData);\n    return (\n      <Tree className=\"myCls\" onSelect={this.onSelect} loadData={this.onLoadData} >\n        {treeNodes}\n      </Tree>\n    );\n  }\n};\n\n", "desc": " 当点击展开，异步获取子节点数据" }, { "example": _react2['default'].createElement(Demo6, null), "title": " Tree基本使用示例自定义图标", "code": "/**\n *\n * @title Tree基本使用示例自定义图标\n * @description 添加openIcon、closeIcon属性\n *\n */\n\n\nimport React, {\n\tComponent\n} from 'react';\nimport { Tree, Icon } from 'tinper-bee';\nconst TreeNode = Tree.TreeNode;\n\nconst defaultProps = {\n\tkeys: ['0-0-0', '0-0-1']\n}\nconsole.log(Tree);\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tconst keys = this.props.keys;\n\t\tthis.state = {\n\t\t\tdefaultExpandedKeys: keys,\n\t\t\tdefaultSelectedKeys: keys,\n\t\t\tdefaultCheckedKeys: keys,\n\t\t};\n\t}\n\tonSelect(info) {\n\t\tconsole.log('selected', info);\n\t}\n\tonCheck(info) {\n\t\tconsole.log('onCheck', info);\n\t}\n\trender() {\n\t\treturn (\n\n\t\t\t<Tree className=\"myCls\"  checkable openIcon={<Icon type=\"uf-minus\" />} closeIcon={<Icon type=\"uf-plus\" />}\n\t        defaultExpandedKeys={this.state.defaultExpandedKeys}\n\t        defaultSelectedKeys={this.state.defaultSelectedKeys}\n\t        defaultCheckedKeys={this.state.defaultCheckedKeys}\n\t        onSelect={this.onSelect} onCheck={this.onCheck}\n\t      >\n\t        <TreeNode title=\"parent 1\" key=\"0-0\">\n\t          <TreeNode title=\"parent 1-0\" key=\"0-0-0\" disabled>\n\t            <TreeNode title=\"leaf\" key=\"0-0-0-0\" disableCheckbox />\n\t            <TreeNode title=\"leaf\" key=\"0-0-0-1\" />\n\t          </TreeNode>\n\t          <TreeNode title=\"parent 1-1\" key=\"0-0-1\">\n\t            <TreeNode title={<span>sss</span>} key=\"0-0-1-0\" />\n\t          </TreeNode>\n\t        </TreeNode>\n\t      </Tree>\n\t\t);\n\t}\n}\n\nDemo1.defaultProps = defaultProps;\n\n\n", "desc": " 添加openIcon、closeIcon属性" }, { "example": _react2['default'].createElement(Demo7, null), "title": " Tree增加节点", "code": "/**\n *\n * @title Tree增加节点\n * @description \n *\n */\n\n\nimport React, {\n  Component\n} from 'react';\nimport { Tree, Button } from 'tinper-bee';\n\nconst TreeNode = Tree.TreeNode;\n\n\nclass Demo7 extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      treeData: [],\n      defaultExpandedKeys: ['0-0', '0-1', '0-2'],\n      parentNode: {}\n    };\n    this.onSelect = this.onSelect.bind(this);\n    this.addNode = this.addNode.bind(this);\n    this.clickFun = this.clickFun.bind(this);\n    this.getNodeByKey = this.getNodeByKey.bind(this);\n    this.parentNode = null\n  }\n  componentDidMount() {\n      setTimeout(() => {\n        this.setState({\n          treeData: [{\n            name: 'pNode 01',\n            key: '0-0',\n            children: [{\n              name: 'leaf 0-0-0',\n              key: '0-0-0'\n            }, {\n              name: 'leaf 0-0-1',\n              key: '0-0-1'\n            }]\n          }, {\n            name: 'pNode 02',\n            key: '0-1',\n            children: [{\n              name: 'leaf 0-1-0',\n              key: '0-1-0'\n            }, {\n              name: 'leaf 0-1-1',\n              key: '0-1-1'\n            }]\n          }, {\n            name: 'pNode 03',\n            key: '0-2',\n            isLeaf: true\n          }, ],\n        });\n      }, 100);\n    }\n    /**\n     * 增加节点\n     * @param string prKey    [父节点key]\n     * @param object nodeItem [子节点信息]\n     */\n  addNode(prKey, nodeItem) {\n    const data = this.state.treeData;\n    let parNode;\n    if (prKey) {\n      // 如果prKey存在则搜索父节点进行添加\n      parNode = this.getNodeByKey(data, prKey);\n      //如果父节点存在的话，添加到父节点上\n      if (parNode) {\n        if (!parNode.children) {\n          parNode.children = [];\n        }\n        // 如果key不存在就动态生成一个\n        if (!nodeItem.key) {\n          nodeItem.key = prKey + parNode.children.length + 1;\n        }\n        parNode.children.push(nodeItem);\n      }\n    } else {\n      // 没有穿prKey添加到根下成为一级节点\n      if (!nodeItem.key) {\n        nodeItem.key = \"0-\" + data.length + 1;\n      }\n      data.push(nodeItem);\n    }\n\n    this.setState({\n      data\n    });\n  }\n\n  getNodeByKey(data, key) {\n    if (!this.parentNode) {\n      data.find(item => {\n        if (item.key === key) {\n          console.log('item.name---' + item.name)\n          this.parentNode = item;\n          return (true);\n        } else if (item.children) {\n          return this.getNodeByKey(item.children, key);\n\n        }\n      })\n    }\n    return this.parentNode;\n  }\n\n\n\n  onSelect(info) {\n      console.log('selected', info);\n    }\n    /**\n     * 点击button事件\n     */\n  clickFun() {\n    let prKey, nodeItem;\n    prKey = '0-1';\n    nodeItem = {\n      name: 'leaf 0-0-4'\n    }\n    this.addNode(prKey, nodeItem);\n  }\n\n  render() {\n    const loop = data => data.map((item) => {\n      if (item.children) {\n        return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;\n      }\n      return <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;\n    });\n    const treeNodes = loop(this.state.treeData);\n    console.log('defaultKeys--' + this.state.defaultExpandedKeys);\n    return (\n      <div>\n        <Tree onSelect={this.onSelect} defaultExpandedKeys={this.state.defaultExpandedKeys} className=\"myCls\">\n          {treeNodes}\n        </Tree>\n        <Button colors=\"primary\" onClick={this.clickFun}>\n        增加节点\n        </Button>\n      </div>\n    );\n  }\n};\n\n", "desc": " " }, { "example": _react2['default'].createElement(Demo8, null), "title": " Tree 节点可编辑", "code": "/**\n *\n * @title Tree 节点可编辑\n * @description 鼠标移动到节点上点击编辑图标进行编辑。e.node.props.eventKey代表当前节点key值。editKey指当前操作的节点key\n */\n\n\nimport React, {\n\tComponent\n} from 'react';\nimport { Tree, Icon, Button } from 'tinper-bee';\n\nconst TreeNode = Tree.TreeNode;\n\nclass Demo8 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.state = {\n\t\t\ttreeData: [],\n\t\t\tisHover: \"\",\n\t\t\teditKey: \"\"\n\t\t};\n\n\t}\n\n\n\tonMouseEnter = (e) => {\n\t\tthis.setState({\n\t\t\tisHover: e.node.props.eventKey\n\t\t})\n\t}\n\tonMouseLeave = (e, treenode) => {\n\t\tthis.setState({\n\t\t\tisHover: \"\",\n\t\t\teditKey: \"\"\n\t\t})\n\n\t}\n\n\teditRender = (item) => {\n\t\tthis.setState({\n\t\t\teditKey: item.key\n\t\t});\n\t}\n\tnodechange = (item, value) => {\n\t\titem.name = value;\n\t}\n\trenderTreeTitle = (item) => {\n\t\tlet titleIcon, titleInfo;\n\t\t//编辑时input框\n\t\tif (this.state.editKey == item.key) {\n\t\t\ttitleInfo = <input type=\"text\" id=\"itemKey\" defaultValue={item.name} onChange={(e) => this.nodechange(item, e.target.value)} />\n\t\t} else {\n\t\t\ttitleInfo = <span className=\"title-middle\">{item.name}</span>\n\t\t}\n\t\t//编辑图标\n\t\tif (this.state.isHover == item.key) {\n\t\t\ttitleIcon = <Icon className=\"title-middle edit-icon\" type=\"uf-pencil\" onClick={(e) => this.editRender(item)}></Icon>;\n\t\t}\n\t\treturn (<div className=\"title-con\">\n\n\t\t\t{titleInfo}\n\t\t\t{titleIcon}\n\t\t</div>);\n\t}\n\n\tcomponentDidMount = () => {\n\t\tsetTimeout(() => {\n\t\t\tthis.setState({\n\t\t\t\ttreeData: [{\n\t\t\t\t\tname: 'pNode 01',\n\t\t\t\t\tkey: '0-0',\n\t\t\t\t\tchildren: [{\n\t\t\t\t\t\tname: 'leaf 0-0-0',\n\t\t\t\t\t\tkey: '0-0-0'\n\t\t\t\t\t}, {\n\t\t\t\t\t\tname: 'leaf 0-0-1',\n\t\t\t\t\t\tkey: '0-0-1'\n\t\t\t\t\t}]\n\t\t\t\t}, {\n\t\t\t\t\tname: 'pNode 02',\n\t\t\t\t\tkey: '0-1',\n\t\t\t\t\tchildren: [{\n\t\t\t\t\t\tname: 'leaf 0-1-0',\n\t\t\t\t\t\tkey: '0-1-0'\n\t\t\t\t\t}, {\n\t\t\t\t\t\tname: 'leaf 0-1-1',\n\t\t\t\t\t\tkey: '0-1-1'\n\t\t\t\t\t}]\n\t\t\t\t}, {\n\t\t\t\t\tname: 'pNode 03',\n\t\t\t\t\tkey: '0-2',\n\t\t\t\t\tisLeaf: true\n\t\t\t\t}, ],\n\t\t\t});\n\t\t\n\t\t}, 100);\n\t}\n\trender() {\n\t\tconst loop = data => data.map((item) => {\n\t\t\tif (item.children) {\n\t\t\t\treturn <TreeNode title={this.renderTreeTitle(item)} key={item.key}>{loop(item.children)}</TreeNode>;\n\t\t\t}\n\t\t\treturn <TreeNode title={this.renderTreeTitle(item)} key={item.key} isLeaf={item.isLeaf} disabled={item.key === '0-0-0'} />;\n\t\t});\n\t\tconst treeNodes = loop(this.state.treeData);\n\t\treturn (\n\t\t\t<Tree onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className=\"myCls\">\n\t\t\t\t{treeNodes}\n\t\t\t</Tree>\n\n\t\t);\n\t}\n}\n\n\n\n", "desc": " 鼠标移动到节点上点击编辑图标进行编辑。e.node.props.eventKey代表当前节点key值。editKey指当前操作的节点key", "scss_code": ".title-middle {\n  display: inline-block;\n  vertical-align: middle;\n}\n.edit-icon {\n  float:right;\n  font-size: 14px;\n}\n.title-con {\n  min-width: 150px;\n}" }, { "example": _react2['default'].createElement(Demo9, null), "title": " 连接线Tree", "code": "/**\n *\n * @title 连接线Tree\n * @description \n *\n */\n\n\nimport React, {\n\tComponent\n} from 'react';\nimport { Tree } from 'tinper-bee';\n\nconst TreeNode = Tree.TreeNode;\nclass Demo9 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tconst keys = this.props.keys;\n\t\tthis.state = {\n\t\t\tdefaultExpandedKeys: keys\n\t\t};\n\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<Tree className=\"myCls\" showLine checkable  defaultExpandAll={true}>\n\t        <TreeNode title=\"parent 1\" key=\"0-0\">\n\t          <TreeNode title=\"parent 1-0\" key=\"0-0-0\" >\n\t            <TreeNode title=\"leaf\" key=\"0-0-0-0\"  />\n\t            <TreeNode title=\"leaf\" key=\"0-0-0-1\" />\n\t          </TreeNode>\n\t          <TreeNode title=\"parent 1-1\" key=\"0-0-1\">\n\t            <TreeNode title={<span>sss</span>} key=\"0-0-1-0\" />\n\t          </TreeNode>\n\t        </TreeNode>\n\t      </Tree>\n\t\t);\n\t}\n}\n\n", "desc": " " }];
	
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
	                { collapsible: true, headerContent: true, expanded: this.state.open, colors: 'bordered', header: header,
	                    footerStyle: { padding: 0 } },
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
	
	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, scss_code: child.scss_code,
	                    desc: child.desc, key: index });
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
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	var _beeIcon = __webpack_require__(90);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title Tree基本使用示例
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 示例涵盖 checkbox如何选择，disable状态和部分选择状态。checkStrictly为true时，子节点与父节点的选择情况都不会影响到对方
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TreeNode = _src2['default'].TreeNode;
	
	var defaultProps = {
		keys: ['0-0-0', '0-0-1']
	};
	
	var Demo1 = function (_Component) {
		_inherits(Demo1, _Component);
	
		function Demo1(props) {
			_classCallCheck(this, Demo1);
	
			var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
			_this.onCheck = function (checkedKeys, newst) {
				//用户可以自定义当前选中和半选中的节点。
				console.log('onCheck', checkedKeys);
				var cks = {
					checked: checkedKeys.checked || checkedKeys,
					halfChecked: checkedKeys.halfChecked
				};
				_this.setState({ checkedKeys: cks });
			};
	
			_this.onDoubleClick = function (key, treeNode) {
				console.log('---onDblClick---' + key + '--treeNode--' + treeNode);
			};
	
			var keys = _this.props.keys;
			_this.state = {
				defaultExpandedKeys: keys,
				defaultSelectedKeys: keys,
				defaultCheckedKeys: keys,
				checkedKeys: { checked: keys }
			};
			return _this;
		}
	
		Demo1.prototype.onSelect = function onSelect(info) {
			console.log('selected', info);
		};
	
		Demo1.prototype.render = function render() {
	
			return _react2['default'].createElement(
				_src2['default'],
				{ className: 'myCls', showLine: true, checkable: true,
					defaultExpandedKeys: this.state.defaultExpandedKeys,
					defaultSelectedKeys: this.state.defaultSelectedKeys,
					defaultCheckedKeys: this.state.defaultCheckedKeys,
					checkStrictly: true,
					showIcon: true,
					cancelUnSelect: true,
					onSelect: this.onSelect, onCheck: this.onCheck,
					onDoubleClick: this.onDoubleClick
				},
				_react2['default'].createElement(
					TreeNode,
					{ title: 'parent 1', key: '0-0', icon: _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-treefolder' }) },
					_react2['default'].createElement(
						TreeNode,
						{ title: 'parent 1-0', key: '0-0-0', disabled: true, icon: _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-treefolder' }) },
						_react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-0-0', disableCheckbox: true, icon: _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-list-s-o' }) }),
						_react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-0-1', icon: _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-list-s-o' }) })
					),
					_react2['default'].createElement(
						TreeNode,
						{ title: 'parent 1-1', key: '0-0-1', icon: _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-treefolder' }) },
						_react2['default'].createElement(TreeNode, { title: _react2['default'].createElement(
								'span',
								null,
								'sss'
							), key: '0-0-1-0', icon: _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-list-s-o' }) })
					)
				)
			);
		};
	
		return Demo1;
	}(_react.Component);
	
	Demo1.defaultProps = defaultProps;
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tree = __webpack_require__(86);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _TreeNode = __webpack_require__(88);
	
	var _TreeNode2 = _interopRequireDefault(_TreeNode);
	
	var _openAnimation = __webpack_require__(89);
	
	var _openAnimation2 = _interopRequireDefault(_openAnimation);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var TreeProps = {
	  showLine: _propTypes2['default'].bool,
	  className: _propTypes2['default'].string,
	  /** 是否支持多选 */
	  multiple: _propTypes2['default'].bool,
	  /** 是否自动展开父节点 */
	  autoExpandParent: _propTypes2['default'].bool,
	  /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
	  checkStrictly: _propTypes2['default'].bool,
	  /** 是否支持选中 */
	  checkable: _propTypes2['default'].bool,
	  /** 默认展开所有树节点 */
	  defaultExpandAll: _propTypes2['default'].bool,
	  /** 默认展开指定的树节点 */
	  defaultExpandedKeys: _propTypes2['default'].array,
	  /** （受控）展开指定的树节点 */
	  expandedKeys: _propTypes2['default'].array,
	  /** （受控）选中复选框的树节点 */
	  checkedKeys: _propTypes2['default'].oneOfType([_propTypes2['default'].array, _propTypes2['default'].object]),
	  /** 默认选中复选框的树节点 */
	  defaultCheckedKeys: _propTypes2['default'].array,
	  /** （受控）设置选中的树节点 */
	  selectedKeys: _propTypes2['default'].array,
	  /** 默认选中的树节点 */
	  defaultSelectedKeys: _propTypes2['default'].array,
	  /** 展开/收起节点时触发 */
	  onExpand: _propTypes2['default'].func,
	  /** 点击复选框触发 */
	  onCheck: _propTypes2['default'].func,
	  /** 点击树节点触发 */
	  onSelect: _propTypes2['default'].func,
	  /** filter some AntTreeNodes as you need. it should return true */
	  filterAntTreeNode: _propTypes2['default'].func,
	  /** 异步加载数据 */
	  loadData: _propTypes2['default'].func,
	  /** 响应右键点击 */
	  onRightClick: _propTypes2['default'].func,
	  /** 设置节点可拖拽（IE>8）*/
	  draggable: _propTypes2['default'].bool,
	  /** 开始拖拽时调用 */
	  onDragStart: _propTypes2['default'].func,
	  /** dragenter 触发时调用 */
	  onDragEnter: _propTypes2['default'].func,
	  /** dragover 触发时调用 */
	  onDragOver: _propTypes2['default'].func,
	  /** dragleave 触发时调用 */
	  onDragLeave: _propTypes2['default'].func,
	  /** drop 触发时调用 */
	  onDrop: _propTypes2['default'].func,
	  style: _react2['default'].CSSProperties,
	  prefixCls: _propTypes2['default'].string,
	  filterTreeNode: _propTypes2['default'].func
	};
	
	var defaultProps = {
	  prefixCls: 'u-tree',
	  checkable: false,
	  showIcon: false,
	  openAnimation: _openAnimation2['default']
	};
	
	var Tree = function (_Component) {
	  _inherits(Tree, _Component);
	
	  function Tree() {
	    _classCallCheck(this, Tree);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Tree.prototype.render = function render() {
	    var props = this.props;
	    var checkable = props.checkable;
	    return _react2['default'].createElement(
	      _Tree2['default'],
	      _extends({}, props, {
	        checkable: checkable ? _react2['default'].createElement('span', { className: props.prefixCls + '-checkbox-inner' }) : checkable
	      }),
	      this.props.children
	    );
	  };
	
	  return Tree;
	}(_react.Component);
	
	Tree.TreeNode = _TreeNode2['default'];
	Tree.TreeProps = TreeProps;
	Tree.defaultProps = defaultProps;
	exports['default'] = Tree;
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
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _util = __webpack_require__(87);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint no-console:0 */
	
	
	function noop() {}
	
	var Tree = function (_React$Component) {
	  _inherits(Tree, _React$Component);
	
	  function Tree(props) {
	    _classCallCheck(this, Tree);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    ['onKeyDown', 'onCheck', "onUlFocus", "_focusDom", "onUlMouseEnter", "onUlMouseLeave"].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    _this.contextmenuKeys = [];
	    _this.checkedKeysChange = true;
	    _this.selectKeyDomPos = '0-0';
	    _this.state = {
	      expandedKeys: _this.getDefaultExpandedKeys(props),
	      checkedKeys: _this.getDefaultCheckedKeys(props),
	      selectedKeys: _this.getDefaultSelectedKeys(props),
	      dragNodesKeys: '',
	      dragOverNodeKey: '',
	      dropNodeKey: ''
	    };
	    return _this;
	  }
	
	  Tree.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var expandedKeys = this.getDefaultExpandedKeys(nextProps, true);
	    var checkedKeys = this.getDefaultCheckedKeys(nextProps, true);
	    var selectedKeys = this.getDefaultSelectedKeys(nextProps, true);
	    var st = {};
	    // 用于记录这次data内容有没有变化
	    this.dataChange = false;
	    if (expandedKeys) {
	      st.expandedKeys = expandedKeys;
	    }
	    if (checkedKeys) {
	      if (nextProps.checkedKeys === this.props.checkedKeys) {
	        this.checkedKeysChange = false;
	      } else {
	        this.checkedKeysChange = true;
	      }
	      st.checkedKeys = checkedKeys;
	    }
	    if (selectedKeys) {
	      st.selectedKeys = selectedKeys;
	    }
	    if (nextProps.children !== this.props.children) {
	      this.dataChange = true;
	    }
	    this.setState(st);
	  };
	
	  Tree.prototype.onDragStart = function onDragStart(e, treeNode) {
	    this.dragNode = treeNode;
	    this.dragNodesKeys = this.getDragNodes(treeNode);
	    var st = {
	      dragNodesKeys: this.dragNodesKeys
	    };
	    var expandedKeys = this.getExpandedKeys(treeNode, false);
	    if (expandedKeys) {
	      // Controlled expand, save and then reset
	      this.getRawExpandedKeys();
	      st.expandedKeys = expandedKeys;
	    }
	    this.setState(st);
	    this.props.onDragStart({
	      event: e,
	      node: treeNode
	    });
	    this._dropTrigger = false;
	  };
	
	  Tree.prototype.onDragEnterGap = function onDragEnterGap(e, treeNode) {
	    var offsetTop = (0, _util.getOffset)(treeNode.refs.selectHandle).top;
	    var offsetHeight = treeNode.refs.selectHandle.offsetHeight;
	    var pageY = e.pageY;
	    var gapHeight = 2;
	    if (pageY > offsetTop + offsetHeight - gapHeight) {
	      this.dropPosition = 1;
	      return 1;
	    }
	    if (pageY < offsetTop + gapHeight) {
	      this.dropPosition = -1;
	      return -1;
	    }
	    this.dropPosition = 0;
	    return 0;
	  };
	
	  Tree.prototype.onDragEnter = function onDragEnter(e, treeNode) {
	    var enterGap = this.onDragEnterGap(e, treeNode);
	    if (this.dragNode.props.eventKey === treeNode.props.eventKey && enterGap === 0) {
	      this.setState({
	        dragOverNodeKey: ''
	      });
	      return;
	    }
	    var st = {
	      dragOverNodeKey: treeNode.props.eventKey
	    };
	    var expandedKeys = this.getExpandedKeys(treeNode, true);
	    if (expandedKeys) {
	      this.getRawExpandedKeys();
	      st.expandedKeys = expandedKeys;
	    }
	    this.setState(st);
	    this.props.onDragEnter({
	      event: e,
	      node: treeNode,
	      expandedKeys: expandedKeys && [].concat(_toConsumableArray(expandedKeys)) || [].concat(_toConsumableArray(this.state.expandedKeys))
	    });
	  };
	
	  Tree.prototype.onDragOver = function onDragOver(e, treeNode) {
	    this.props.onDragOver({
	      event: e,
	      node: treeNode
	    });
	  };
	
	  Tree.prototype.onDragLeave = function onDragLeave(e, treeNode) {
	    this.props.onDragLeave({
	      event: e,
	      node: treeNode
	    });
	  };
	
	  Tree.prototype.onDrop = function onDrop(e, treeNode) {
	    var key = treeNode.props.eventKey;
	    this.setState({
	      dragOverNodeKey: '',
	      dropNodeKey: key
	    });
	    if (this.dragNodesKeys.indexOf(key) > -1) {
	      if (console.warn) {
	        console.warn('can not drop to dragNode(include it\'s children node)');
	      }
	      return false;
	    }
	
	    var posArr = treeNode.props.pos.split('-');
	    var res = {
	      event: e,
	      node: treeNode,
	      dragNode: this.dragNode,
	      dragNodesKeys: [].concat(_toConsumableArray(this.dragNodesKeys)),
	      dropPosition: this.dropPosition + Number(posArr[posArr.length - 1])
	    };
	    if (this.dropPosition !== 0) {
	      res.dropToGap = true;
	    }
	    if ('expandedKeys' in this.props) {
	      res.rawExpandedKeys = [].concat(_toConsumableArray(this._rawExpandedKeys)) || [].concat(_toConsumableArray(this.state.expandedKeys));
	    }
	    this.props.onDrop(res);
	    this._dropTrigger = true;
	  };
	
	  Tree.prototype.onDragEnd = function onDragEnd(e, treeNode) {
	    this.setState({
	      dragOverNodeKey: ''
	    });
	    this.props.onDragEnd({
	      event: e,
	      node: treeNode
	    });
	  };
	  /**
	   *
	   *
	   * @param {*} treeNode 当前操作的节点
	   * @param {*} keyType 键盘事件通用的key类型 left 为收起，right为展开
	   * @returns
	   * @memberof Tree
	   */
	
	
	  Tree.prototype.onExpand = function onExpand(treeNode, keyType) {
	    var _this2 = this;
	
	    var expanded = !treeNode.props.expanded;
	    var controlled = 'expandedKeys' in this.props;
	    var expandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
	    var index = expandedKeys.indexOf(treeNode.props.eventKey);
	
	    if (keyType == 'left') {
	      expanded = false;
	    } else if (keyType == 'right') {
	      expanded = true;
	    }
	
	    if (expanded && index === -1) {
	      expandedKeys.push(treeNode.props.eventKey);
	    } else if (!expanded && index > -1) {
	      expandedKeys.splice(index, 1);
	    }
	    if (!controlled) {
	      this.setState({
	        expandedKeys: expandedKeys
	      });
	    }
	    this.props.onExpand(expandedKeys, {
	      node: treeNode,
	      expanded: expanded
	    });
	
	    // after data loaded, need set new expandedKeys
	    if (expanded && this.props.loadData) {
	      return this.props.loadData(treeNode).then(function () {
	        if (!controlled) {
	          _this2.setState({
	            expandedKeys: expandedKeys
	          });
	        }
	      });
	    }
	  };
	
	  Tree.prototype.onCheck = function onCheck(treeNode) {
	    var _this3 = this;
	
	    var checked = !treeNode.props.checked;
	    if (treeNode.props.halfChecked) {
	      checked = true;
	    }
	    var key = treeNode.props.eventKey;
	    var checkedKeys = [].concat(_toConsumableArray(this.state.checkedKeys));
	    var index = checkedKeys.indexOf(key);
	
	    var newSt = {
	      event: 'check',
	      node: treeNode,
	      checked: checked
	    };
	
	    if (this.props.checkStrictly) {
	      if (checked && index === -1) {
	        checkedKeys.push(key);
	      }
	      if (!checked && index > -1) {
	        checkedKeys.splice(index, 1);
	      }
	      this.treeNodesStates[treeNode.props.pos].checked = checked;
	      newSt.checkedNodes = [];
	      (0, _util.loopAllChildren)(this.props.children, function (item, ind, pos, keyOrPos) {
	        if (checkedKeys.indexOf(keyOrPos) !== -1) {
	          newSt.checkedNodes.push(item);
	        }
	      });
	      if (!('checkedKeys' in this.props)) {
	        this.setState({
	          checkedKeys: checkedKeys
	        });
	      }
	      var halfChecked = this.props.checkedKeys ? this.props.checkedKeys.halfChecked : [];
	      this.props.onCheck((0, _util.getStrictlyValue)(checkedKeys, halfChecked), newSt);
	    } else {
	      if (checked && index === -1) {
	        this.treeNodesStates[treeNode.props.pos].checked = true;
	        var checkedPositions = [];
	        Object.keys(this.treeNodesStates).forEach(function (i) {
	          if (_this3.treeNodesStates[i].checked) {
	            checkedPositions.push(i);
	          }
	        });
	        (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
	      }
	      if (!checked) {
	        this.treeNodesStates[treeNode.props.pos].checked = false;
	        this.treeNodesStates[treeNode.props.pos].halfChecked = false;
	        (0, _util.handleCheckState)(this.treeNodesStates, [treeNode.props.pos], false);
	      }
	      var checkKeys = (0, _util.getCheck)(this.treeNodesStates);
	      newSt.checkedNodes = checkKeys.checkedNodes;
	      newSt.checkedNodesPositions = checkKeys.checkedNodesPositions;
	      newSt.halfCheckedKeys = checkKeys.halfCheckedKeys;
	      this.checkKeys = checkKeys;
	
	      this._checkedKeys = checkedKeys = checkKeys.checkedKeys;
	      if (!('checkedKeys' in this.props)) {
	        this.setState({
	          checkedKeys: checkedKeys
	        });
	      }
	      this.props.onCheck(checkedKeys, newSt);
	    }
	  };
	
	  Tree.prototype.onSelect = function onSelect(treeNode) {
	    var props = this.props;
	    var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
	    var eventKey = treeNode.props.eventKey || treeNode.key;
	    var index = selectedKeys.indexOf(eventKey);
	    var selected = void 0;
	    //cancelUnSelect为true时第二次点击时不取消选中
	    if (props.cancelUnSelect) {
	      if (index == -1) {
	        selected = true;
	        if (!props.multiple) {
	          selectedKeys.length = 0;
	        }
	        selectedKeys.push(eventKey);
	      }
	    } else {
	      if (index !== -1) {
	        selected = false;
	        selectedKeys.splice(index, 1);
	      } else {
	        selected = true;
	        if (!props.multiple) {
	          selectedKeys.length = 0;
	        }
	        selectedKeys.push(eventKey);
	      }
	    }
	
	    var selectedNodes = [];
	    if (selectedKeys.length) {
	      (0, _util.loopAllChildren)(this.props.children, function (item) {
	        if (selectedKeys.indexOf(item.key) !== -1) {
	          selectedNodes.push(item);
	        }
	      });
	    }
	    var newSt = {
	      event: 'select',
	      node: treeNode,
	      selected: selected,
	      selectedNodes: selectedNodes
	    };
	    if (!('selectedKeys' in this.props)) {
	      this.setState({
	        selectedKeys: selectedKeys
	      });
	    }
	    props.onSelect(selectedKeys, newSt);
	  };
	
	  Tree.prototype.onDoubleClick = function onDoubleClick(treeNode) {
	    var props = this.props;
	    var eventKey = treeNode.props.eventKey;
	    var newSt = {
	      event: 'dblclick',
	      node: treeNode
	    };
	    props.onDoubleClick(eventKey, newSt);
	  };
	
	  Tree.prototype.onMouseEnter = function onMouseEnter(e, treeNode) {
	    this.props.onMouseEnter({
	      event: e,
	      node: treeNode
	    });
	  };
	
	  Tree.prototype.onMouseLeave = function onMouseLeave(e, treeNode) {
	    this.props.onMouseLeave({
	      event: e,
	      node: treeNode
	    });
	  };
	
	  Tree.prototype.onContextMenu = function onContextMenu(e, treeNode) {
	    var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
	    var eventKey = treeNode.props.eventKey;
	    if (this.contextmenuKeys.indexOf(eventKey) === -1) {
	      this.contextmenuKeys.push(eventKey);
	    }
	    this.contextmenuKeys.forEach(function (key) {
	      var index = selectedKeys.indexOf(key);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	    });
	    if (selectedKeys.indexOf(eventKey) === -1) {
	      selectedKeys.push(eventKey);
	    }
	    this.setState({
	      selectedKeys: selectedKeys
	    });
	    this.props.onRightClick({
	      event: e,
	      node: treeNode
	    });
	  };
	
	  Tree.prototype.getTreeNode = function getTreeNode() {
	    var props = this.props;
	  };
	
	  Tree.prototype.goDown = function goDown(currentPos, currentIndex, e, treeNode) {
	    var props = this.props;
	    var nextIndex = parseInt(currentIndex) + 1;
	
	    var nextPos = void 0,
	        backNextPos = void 0;
	    var nextTreeNode = void 0,
	        backNextTreeNode = void 0;
	    var backNextPosArr = [],
	        backNextTreeNodeArr = [],
	        tempBackNextPosArr = [];
	    //是否为展开的节点，如果展开获取第一个子节点的信息，如果没有取相邻节点，若也没有相邻节点则获取父节点的下一个节点
	    if (props.expandedKeys.indexOf(treeNode.props.eventKey) > -1) {
	      nextPos = currentPos + '-0';
	    } else {
	      nextPos = currentPos.substr(0, currentPos.lastIndexOf('-') + 1) + nextIndex;
	    }
	    //若向下的节点没有了，找到父级相邻节点
	    var tempPosArr = currentPos.split('-');
	    var tempPosArrLength = tempPosArr.length;
	    //将可能是下一个节点的的位置都备份一遍
	    while (tempPosArrLength > 1) {
	      backNextPos = tempPosArrLength > 1 && tempPosArr.slice(0, tempPosArrLength - 1).join('-') + '-' + (parseInt(tempPosArr[tempPosArrLength - 1]) + 1);
	      tempBackNextPosArr.push(backNextPos);
	      tempPosArr = tempPosArr.slice(0, tempPosArrLength - 1);
	      tempPosArrLength = tempPosArr.length;
	    }
	    //选中下一个相邻的节点
	    (0, _util.loopAllChildren)(props.children, function (itemNode, index, pos, newKey) {
	      if (pos == nextPos) {
	        nextTreeNode = itemNode;
	      }
	      tempBackNextPosArr.forEach(function (item) {
	        if (item && item == pos) {
	          // backNextTreeNode = item;
	          backNextTreeNodeArr.push(itemNode);
	          backNextPosArr.push(pos);
	        }
	      });
	    });
	    //如果没有下一个节点，则获取父节点的下一个节点
	    if (!nextTreeNode) {
	      for (var i = 0; i < backNextTreeNodeArr.length; i++) {
	        if (backNextTreeNodeArr[i]) {
	          nextTreeNode = backNextTreeNodeArr[i];
	          nextPos = backNextPosArr[i];
	          break;
	        }
	      }
	    }
	
	    //查询的下一个节点不为空的话，则选中
	    if (nextTreeNode) {
	      var queryInfo = 'a[pos="' + nextPos + '"]';
	      var parentEle = (0, _util.closest)(e.target, ".u-tree");
	      var focusEle = parentEle ? parentEle.querySelector(queryInfo) : null;
	      focusEle && focusEle.focus();
	      this.onSelect(nextTreeNode);
	    }
	  };
	
	  Tree.prototype.goUp = function goUp(currentPos, currentIndex, e, treeNode) {
	    var props = this.props;
	    if (currentIndex == 0 && currentPos.length === 3) {
	      return;
	    }
	    // 向上键Up
	    var preIndex = parseInt(currentIndex) - 1;
	    var prePos = void 0;
	    if (preIndex >= 0) {
	      prePos = currentPos.substr(0, currentPos.lastIndexOf('-') + 1) + preIndex;
	    } else {
	      prePos = currentPos.substr(0, currentPos.lastIndexOf('-'));
	    }
	
	    var prevTreeNode = void 0,
	        preElement = void 0;
	    //选中上一个相邻的节点
	    (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
	      if (pos == prePos) {
	        prevTreeNode = item;
	      }
	    });
	    //查询的上一个节点不为空的话，则选中
	    if (prevTreeNode) {
	      if (preIndex >= 0) {
	        //如果上面的节点展开则默认选择最后一个子节点
	        if (props.expandedKeys.indexOf(prevTreeNode.key) > -1) {
	          var preElementArr = e.target.parentElement.previousElementSibling.querySelectorAll('a');
	          preElement = preElementArr[preElementArr.length - 1];
	          prePos = preElement.getAttribute('pos');
	          (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
	            if (pos == prePos) {
	              prevTreeNode = item;
	            }
	          });
	        } else {
	          //上一个节点没有展开
	          preElement = e.target.parentElement.previousElementSibling.querySelector('a');
	        }
	      } else {
	        // 不存在上一个节点时，选中它的父节点
	        preElement = e.target.parentElement.parentElement.parentElement.querySelector('a');
	      }
	    }
	    preElement && preElement.focus();
	    this.onSelect(prevTreeNode);
	  };
	  // all keyboard events callbacks run from here at first
	
	
	  Tree.prototype.onKeyDown = function onKeyDown(e, treeNode) {
	    e.stopPropagation();
	    var props = this.props;
	    var currentPos = treeNode.props.pos;
	    var currentIndex = currentPos.substr(currentPos.lastIndexOf('-') + 1);
	    //向下键down
	    if (e.keyCode == _tinperBeeCore.KeyCode.DOWN) {
	      this.goDown(currentPos, currentIndex, e, treeNode);
	    } else if (e.keyCode == _tinperBeeCore.KeyCode.UP) {
	      this.goUp(currentPos, currentIndex, e, treeNode);
	    } else if (e.keyCode == _tinperBeeCore.KeyCode.LEFT && !treeNode.props.isLeaf) {
	      // 收起树节点
	      this.onExpand(treeNode, 'left');
	    } else if (e.keyCode == _tinperBeeCore.KeyCode.RIGHT && !treeNode.props.isLeaf) {
	      // 展开树节点
	      this.onExpand(treeNode, 'right');
	    } else if (e.keyCode == _tinperBeeCore.KeyCode.SPACE && props.checkable) {
	      // 如果是多选tree则进行选中或者反选该节点
	      this.onCheck(treeNode);
	    } else if (e.keyCode == _tinperBeeCore.KeyCode.ENTER) {
	      this.onDoubleClick(treeNode);
	    }
	    // e.preventDefault();
	  };
	
	  Tree.prototype._focusDom = function _focusDom(selectKeyDomPos, targetDom) {
	    var queryInfo = 'a[pos="' + selectKeyDomPos + '"]';
	    var parentEle = (0, _util.closest)(targetDom, ".u-tree");
	    var focusEle = parentEle ? parentEle.querySelector(queryInfo) : null;
	    focusEle && focusEle.focus();
	  };
	
	  Tree.prototype.onUlFocus = function onUlFocus(e) {
	    var _this4 = this;
	
	    var targetDom = e.target;
	    if (this.refs.tree == targetDom && !this.isIn) {
	      var onFocus = this.props.onFocus;
	      var _state$selectedKeys = this.state.selectedKeys,
	          selectedKeys = _state$selectedKeys === undefined ? [] : _state$selectedKeys;
	
	      var tabIndexKey = selectedKeys[0];
	      var isExist = false;
	      if (this.selectKeyDomExist && tabIndexKey || !tabIndexKey) {
	        isExist = true;
	        var queryInfo = 'a[pos="' + this.selectKeyDomPos + '"]';
	        var parentEle = (0, _util.closest)(e.target, ".u-tree");
	        var focusEle = parentEle ? parentEle.querySelector(queryInfo) : null;
	        focusEle && focusEle.focus();
	      }
	      var onFocusRes = onFocus && onFocus(isExist);
	      if (onFocusRes instanceof Promise) {
	        onFocusRes.then(function () {
	          _this4._focusDom(_this4.selectKeyDomPos, targetDom);
	        });
	      } else {
	        this._focusDom(this.selectKeyDomPos, targetDom);
	      }
	    }
	  };
	
	  Tree.prototype.onUlMouseEnter = function onUlMouseEnter(e) {
	    this.isIn = true;
	  };
	
	  Tree.prototype.onUlMouseLeave = function onUlMouseLeave(e) {
	    this.isIn = false;
	  };
	
	  Tree.prototype.getFilterExpandedKeys = function getFilterExpandedKeys(props, expandKeyProp, expandAll) {
	    var keys = props[expandKeyProp];
	    if (!expandAll && !props.autoExpandParent) {
	      return keys || [];
	    }
	    var expandedPositionArr = [];
	    if (props.autoExpandParent) {
	      (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
	        if (keys.indexOf(newKey) > -1) {
	          expandedPositionArr.push(pos);
	        }
	      });
	    }
	    var filterExpandedKeys = [];
	    (0, _util.loopAllChildren)(props.children, function (item, index, pos, newKey) {
	      if (expandAll) {
	        filterExpandedKeys.push(newKey);
	      } else if (props.autoExpandParent) {
	        expandedPositionArr.forEach(function (p) {
	          if ((p.split('-').length > pos.split('-').length && (0, _util.isInclude)(pos.split('-'), p.split('-')) || pos === p) && filterExpandedKeys.indexOf(newKey) === -1) {
	            filterExpandedKeys.push(newKey);
	          }
	        });
	      }
	    });
	    return filterExpandedKeys.length ? filterExpandedKeys : keys;
	  };
	
	  Tree.prototype.getDefaultExpandedKeys = function getDefaultExpandedKeys(props, willReceiveProps) {
	    var expandedKeys = willReceiveProps ? undefined : this.getFilterExpandedKeys(props, 'defaultExpandedKeys', props.defaultExpandedKeys.length ? false : props.defaultExpandAll);
	    if ('expandedKeys' in props) {
	      expandedKeys = (props.autoExpandParent ? this.getFilterExpandedKeys(props, 'expandedKeys', false) : props.expandedKeys) || [];
	    }
	    return expandedKeys;
	  };
	
	  Tree.prototype.getDefaultCheckedKeys = function getDefaultCheckedKeys(props, willReceiveProps) {
	    var checkedKeys = willReceiveProps ? undefined : props.defaultCheckedKeys;
	    if ('checkedKeys' in props) {
	      checkedKeys = props.checkedKeys || [];
	      if (props.checkStrictly) {
	        if (props.checkedKeys.checked) {
	          checkedKeys = props.checkedKeys.checked;
	        } else if (!Array.isArray(props.checkedKeys)) {
	          checkedKeys = [];
	        }
	      }
	    }
	    return checkedKeys;
	  };
	
	  Tree.prototype.getDefaultSelectedKeys = function getDefaultSelectedKeys(props, willReceiveProps) {
	    var getKeys = function getKeys(keys) {
	      if (props.multiple) {
	        return [].concat(_toConsumableArray(keys));
	      }
	      if (keys.length) {
	        return [keys[0]];
	      }
	      return keys;
	    };
	    var selectedKeys = willReceiveProps ? undefined : getKeys(props.defaultSelectedKeys);
	    if ('selectedKeys' in props) {
	      selectedKeys = getKeys(props.selectedKeys);
	    }
	    return selectedKeys;
	  };
	
	  Tree.prototype.getRawExpandedKeys = function getRawExpandedKeys() {
	    if (!this._rawExpandedKeys && 'expandedKeys' in this.props) {
	      this._rawExpandedKeys = [].concat(_toConsumableArray(this.state.expandedKeys));
	    }
	  };
	
	  Tree.prototype.getOpenTransitionName = function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  };
	
	  Tree.prototype.getDragNodes = function getDragNodes(treeNode) {
	    var dragNodesKeys = [];
	    var tPArr = treeNode.props.pos.split('-');
	    (0, _util.loopAllChildren)(this.props.children, function (item, index, pos, newKey) {
	      var pArr = pos.split('-');
	      if (treeNode.props.pos === pos || tPArr.length < pArr.length && (0, _util.isInclude)(tPArr, pArr)) {
	        dragNodesKeys.push(newKey);
	      }
	    });
	    return dragNodesKeys;
	  };
	
	  Tree.prototype.getExpandedKeys = function getExpandedKeys(treeNode, expand) {
	    var key = treeNode.props.eventKey;
	    var expandedKeys = this.state.expandedKeys;
	    var expandedIndex = expandedKeys.indexOf(key);
	    var exKeys = void 0;
	    if (expandedIndex > -1 && !expand) {
	      exKeys = [].concat(_toConsumableArray(expandedKeys));
	      exKeys.splice(expandedIndex, 1);
	      return exKeys;
	    }
	    if (expand && expandedKeys.indexOf(key) === -1) {
	      return expandedKeys.concat([key]);
	    }
	  };
	
	  Tree.prototype.filterTreeNode = function filterTreeNode(treeNode) {
	    var filterTreeNode = this.props.filterTreeNode;
	    if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
	      return false;
	    }
	    return filterTreeNode.call(this, treeNode);
	  };
	
	  Tree.prototype.renderTreeNode = function renderTreeNode(child, index) {
	    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	    var pos = level + '-' + index;
	    var key = child.key || pos;
	
	    var state = this.state;
	    var props = this.props;
	    var _state$selectedKeys2 = this.state.selectedKeys,
	        selectedKeys = _state$selectedKeys2 === undefined ? [] : _state$selectedKeys2;
	
	    var tabIndexKey = selectedKeys[0];
	    if (tabIndexKey && key == tabIndexKey) {
	      this.selectKeyDomExist = true;
	      this.selectKeyDomPos = pos;
	    }
	    // prefer to child's own selectable property if passed
	    var selectable = props.selectable;
	    if (child.props.hasOwnProperty('selectable')) {
	      selectable = child.props.selectable;
	    }
	    var draggable = props.draggable;
	    if (child.props.hasOwnProperty('draggable')) {
	      draggable = child.props.draggable;
	    }
	
	    var cloneProps = {
	      ref: 'treeNode-' + key,
	      root: this,
	      eventKey: key,
	      pos: pos,
	      selectable: selectable,
	      loadData: props.loadData,
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      onRightClick: props.onRightClick,
	      onDoubleClick: props.onDoubleClick,
	      onKeyDown: props.onKeyDown,
	      prefixCls: props.prefixCls,
	      showLine: props.showLine,
	      showIcon: props.showIcon,
	      draggable: draggable,
	      dragOver: state.dragOverNodeKey === key && this.dropPosition === 0,
	      dragOverGapTop: state.dragOverNodeKey === key && this.dropPosition === -1,
	      dragOverGapBottom: state.dragOverNodeKey === key && this.dropPosition === 1,
	      _dropTrigger: this._dropTrigger,
	      expanded: state.expandedKeys.indexOf(key) !== -1,
	      selected: state.selectedKeys.indexOf(key) !== -1,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      filterTreeNode: this.filterTreeNode.bind(this),
	      openIcon: props.openIcon,
	      closeIcon: props.closeIcon,
	      focusable: props.focusable,
	      tabIndexKey: state.selectedKeys[0],
	      tabIndexValue: props.tabIndexValue
	    };
	    if (props.checkable) {
	      cloneProps.checkable = props.checkable;
	      if (props.checkStrictly) {
	        if (state.checkedKeys) {
	          cloneProps.checked = state.checkedKeys.indexOf(key) !== -1 || false;
	        }
	        if (props.checkedKeys && props.checkedKeys.halfChecked) {
	          cloneProps.halfChecked = props.checkedKeys.halfChecked.indexOf(key) !== -1 || false;
	        } else {
	          cloneProps.halfChecked = false;
	        }
	      } else {
	        if (this.checkedKeys) {
	          cloneProps.checked = this.checkedKeys.indexOf(key) !== -1 || false;
	        }
	        cloneProps.halfChecked = this.halfCheckedKeys.indexOf(key) !== -1;
	      }
	    }
	    if (this.treeNodesStates && this.treeNodesStates[pos]) {
	      _extends(cloneProps, this.treeNodesStates[pos].siblingPosition);
	    }
	    return _react2['default'].cloneElement(child, cloneProps);
	  };
	
	  Tree.prototype.render = function render() {
	    var _this5 = this;
	
	    var props = this.props;
	    var showLineCls = "";
	    if (props.showLine) {
	      showLineCls = props.prefixCls + '-show-line';
	    }
	    var domProps = {
	      className: (0, _classnames2['default'])(props.className, props.prefixCls, showLineCls),
	      role: 'tree-node'
	    };
	
	    domProps.onFocus = this.onUlFocus;
	    domProps.onMouseEnter = this.onUlMouseEnter;
	    domProps.onMouseLeave = this.onUlMouseLeave;
	    // if (props.focusable) {
	    //   // domProps.tabIndex = '0';//需求改成了默认选择第一个节点或者选中的节点
	    //   // domProps.onKeyDown = this.onKeyDown;//添加到具体的treeNode上了
	    // }
	    var getTreeNodesStates = function getTreeNodesStates() {
	      _this5.treeNodesStates = {};
	      (0, _util.loopAllChildren)(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
	        _this5.treeNodesStates[pos] = {
	          siblingPosition: siblingPosition
	        };
	      });
	    };
	    if (props.showLine && !props.checkable) {
	      getTreeNodesStates();
	    }
	    if (props.checkable && (this.checkedKeysChange || props.loadData || this.dataChange)) {
	      if (props.checkStrictly) {
	        getTreeNodesStates();
	      } else if (props._treeNodesStates) {
	        this.treeNodesStates = props._treeNodesStates.treeNodesStates;
	        this.halfCheckedKeys = props._treeNodesStates.halfCheckedKeys;
	        this.checkedKeys = props._treeNodesStates.checkedKeys;
	      } else {
	        var checkedKeys = this.state.checkedKeys;
	        var checkKeys = void 0;
	        if (!props.loadData && this.checkKeys && this._checkedKeys && (0, _util.arraysEqual)(this._checkedKeys, checkedKeys)) {
	          // if checkedKeys the same as _checkedKeys from onCheck, use _checkedKeys.
	          checkKeys = this.checkKeys;
	        } else {
	          var checkedPositions = [];
	          this.treeNodesStates = {};
	          (0, _util.loopAllChildren)(props.children, function (item, index, pos, keyOrPos, siblingPosition) {
	            _this5.treeNodesStates[pos] = {
	              node: item,
	              key: keyOrPos,
	              checked: false,
	              halfChecked: false,
	              siblingPosition: siblingPosition
	            };
	            if (checkedKeys.indexOf(keyOrPos) !== -1) {
	              _this5.treeNodesStates[pos].checked = true;
	              checkedPositions.push(pos);
	            }
	          });
	          // if the parent node's key exists, it all children node will be checked
	          (0, _util.handleCheckState)(this.treeNodesStates, (0, _util.filterParentPosition)(checkedPositions), true);
	          checkKeys = (0, _util.getCheck)(this.treeNodesStates);
	        }
	        this.halfCheckedKeys = checkKeys.halfCheckedKeys;
	        this.checkedKeys = checkKeys.checkedKeys;
	      }
	    }
	    this.selectKeyDomExist = false;
	    return _react2['default'].createElement(
	      'ul',
	      _extends({}, domProps, { unselectable: 'true', ref: 'tree', tabIndex: props.focusable && props.tabIndexValue }),
	      _react2['default'].Children.map(props.children, this.renderTreeNode, this)
	    );
	  };
	
	  return Tree;
	}(_react2['default'].Component);
	
	Tree.propTypes = {
	  prefixCls: _propTypes2['default'].string,
	  children: _propTypes2['default'].any,
	  showLine: _propTypes2['default'].bool,
	  showIcon: _propTypes2['default'].bool,
	  selectable: _propTypes2['default'].bool,
	  multiple: _propTypes2['default'].bool,
	  checkable: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
	  _treeNodesStates: _propTypes2['default'].object,
	  checkStrictly: _propTypes2['default'].bool,
	  draggable: _propTypes2['default'].bool,
	  autoExpandParent: _propTypes2['default'].bool,
	  defaultExpandAll: _propTypes2['default'].bool,
	  defaultExpandedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  expandedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  defaultCheckedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  checkedKeys: _propTypes2['default'].oneOfType([_propTypes2['default'].arrayOf(_propTypes2['default'].string), _propTypes2['default'].object]),
	  defaultSelectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  selectedKeys: _propTypes2['default'].arrayOf(_propTypes2['default'].string),
	  onExpand: _propTypes2['default'].func,
	  onCheck: _propTypes2['default'].func,
	  onSelect: _propTypes2['default'].func,
	  loadData: _propTypes2['default'].func,
	  onMouseEnter: _propTypes2['default'].func,
	  onMouseLeave: _propTypes2['default'].func,
	  onRightClick: _propTypes2['default'].func,
	  onDragStart: _propTypes2['default'].func,
	  onDragEnter: _propTypes2['default'].func,
	  onDragOver: _propTypes2['default'].func,
	  onDragLeave: _propTypes2['default'].func,
	  onDrop: _propTypes2['default'].func,
	  onDragEnd: _propTypes2['default'].func,
	  filterTreeNode: _propTypes2['default'].func,
	  openTransitionName: _propTypes2['default'].string,
	  focusable: _propTypes2['default'].bool,
	  openAnimation: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object])
	};
	
	Tree.defaultProps = {
	  prefixCls: 'rc-tree',
	  showLine: false,
	  showIcon: true,
	  selectable: true,
	  multiple: false,
	  checkable: false,
	  checkStrictly: false,
	  draggable: false,
	  autoExpandParent: true,
	  defaultExpandAll: false,
	  defaultExpandedKeys: [],
	  defaultCheckedKeys: [],
	  defaultSelectedKeys: [],
	  onExpand: noop,
	  onCheck: noop,
	  onSelect: noop,
	  onDragStart: noop,
	  onDragEnter: noop,
	  onDragOver: noop,
	  onDragLeave: noop,
	  onDrop: noop,
	  onDragEnd: noop,
	  tabIndexValue: 0
	};
	
	exports['default'] = Tree;
	module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.browser = browser;
	exports.getOffset = getOffset;
	exports.loopAllChildren = loopAllChildren;
	exports.isInclude = isInclude;
	exports.filterParentPosition = filterParentPosition;
	exports.handleCheckState = handleCheckState;
	exports.getCheck = getCheck;
	exports.getStrictlyValue = getStrictlyValue;
	exports.arraysEqual = arraysEqual;
	exports.closest = closest;
	exports.isTreeNode = isTreeNode;
	exports.toArray = toArray;
	exports.getNodeChildren = getNodeChildren;
	exports.warnOnlyTreeNode = warnOnlyTreeNode;
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function browser(navigator) {
	  var tem = void 0;
	  var ua = navigator.userAgent;
	  var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	  if (/trident/i.test(M[1])) {
	    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
	    return 'IE ' + (tem[1] || '');
	  }
	  if (M[1] === 'Chrome') {
	    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
	    if (tem) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	  }
	  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	  tem = ua.match(/version\/(\d+)/i);
	  if (tem) {
	    M.splice(1, 1, tem[1]);
	  }
	  return M.join(' ');
	}
	
	// export function getOffset(el) {
	//   const obj = el.getBoundingClientRect();
	//   return {
	//     left: obj.left + document.body.scrollLeft,
	//     top: obj.top + document.body.scrollTop,
	//     width: obj.width,
	//     height: obj.height
	//   };
	// }
	
	// // iscroll offset
	// offset = function (el) {
	//   var left = -el.offsetLeft,
	//     top = -el.offsetTop;
	
	//   // jshint -W084
	//   while (el = el.offsetParent) {
	//     left -= el.offsetLeft;
	//     top -= el.offsetTop;
	//   }
	//   // jshint +W084
	
	//   return {
	//     left: left,
	//     top: top
	//   };
	// }
	
	/* eslint-disable */
	/* eslint no-loop-func: 0*/
	
	function getOffset(ele) {
	  var doc = void 0,
	      win = void 0,
	      docElem = void 0,
	      rect = void 0;
	
	  if (!ele.getClientRects().length) {
	    return { top: 0, left: 0 };
	  }
	
	  rect = ele.getBoundingClientRect();
	
	  if (rect.width || rect.height) {
	    doc = ele.ownerDocument;
	    win = doc.defaultView;
	    docElem = doc.documentElement;
	
	    return {
	      top: rect.top + win.pageYOffset - docElem.clientTop,
	      left: rect.left + win.pageXOffset - docElem.clientLeft
	    };
	  }
	
	  return rect;
	}
	/* eslint-enable */
	
	function getChildrenlength(children) {
	  var len = 1;
	  if (Array.isArray(children)) {
	    len = children.length;
	  }
	  return len;
	}
	
	function getSiblingPosition(index, len, siblingPosition) {
	  if (len === 1) {
	    siblingPosition.first = true;
	    siblingPosition.last = true;
	  } else {
	    siblingPosition.first = index === 0;
	    siblingPosition.last = index === len - 1;
	  }
	  return siblingPosition;
	}
	
	function loopAllChildren(childs, callback, parent) {
	  var loop = function loop(children, level, _parent) {
	    var len = getChildrenlength(children);
	    _react2['default'].Children.forEach(children, function (item, index) {
	      var pos = level + '-' + index;
	      if (item.props.children && item.type && item.type.isTreeNode) {
	        loop(item.props.children, pos, { node: item, pos: pos });
	      }
	      callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
	    });
	  };
	  loop(childs, 0, parent);
	}
	
	function isInclude(smallArray, bigArray) {
	  return smallArray.every(function (ii, i) {
	    return ii === bigArray[i];
	  });
	}
	// console.log(isInclude(['0', '1'], ['0', '10', '1']));
	
	
	// arr.length === 628, use time: ~20ms
	function filterParentPosition(arr) {
	  var levelObj = {};
	  arr.forEach(function (item) {
	    var posLen = item.split('-').length;
	    if (!levelObj[posLen]) {
	      levelObj[posLen] = [];
	    }
	    levelObj[posLen].push(item);
	  });
	  var levelArr = Object.keys(levelObj).sort();
	
	  var _loop = function _loop(i) {
	    if (levelArr[i + 1]) {
	      levelObj[levelArr[i]].forEach(function (ii) {
	        var _loop2 = function _loop2(j) {
	          levelObj[levelArr[j]].forEach(function (_i, index) {
	            if (isInclude(ii.split('-'), _i.split('-'))) {
	              levelObj[levelArr[j]][index] = null;
	            }
	          });
	          levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(function (p) {
	            return p;
	          });
	        };
	
	        for (var j = i + 1; j < levelArr.length; j++) {
	          _loop2(j);
	        }
	      });
	    }
	  };
	
	  for (var i = 0; i < levelArr.length; i++) {
	    _loop(i);
	  }
	  var nArr = [];
	  levelArr.forEach(function (i) {
	    nArr = nArr.concat(levelObj[i]);
	  });
	  return nArr;
	}
	// console.log(filterParentPosition(
	//   ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
	// ));
	
	
	function stripTail(str) {
	  var arr = str.match(/(.+)(-[^-]+)$/);
	  var st = '';
	  if (arr && arr.length === 3) {
	    st = arr[1];
	  }
	  return st;
	}
	function splitPosition(pos) {
	  return pos.split('-');
	}
	
	function handleCheckState(obj, checkedPositionArr, checkIt) {
	  // console.log(stripTail('0-101-000'));
	  var objKeys = Object.keys(obj);
	  // let s = Date.now();
	  objKeys.forEach(function (i, index) {
	    var iArr = splitPosition(i);
	    var saved = false;
	    checkedPositionArr.forEach(function (_pos) {
	      // 设置子节点，全选或全不选
	      var _posArr = splitPosition(_pos);
	      if (iArr.length > _posArr.length && isInclude(_posArr, iArr)) {
	        obj[i].halfChecked = false;
	        obj[i].checked = checkIt;
	        objKeys[index] = null;
	      }
	      if (iArr[0] === _posArr[0] && iArr[1] === _posArr[1]) {
	        // 如果
	        saved = true;
	      }
	    });
	    if (!saved) {
	      objKeys[index] = null;
	    }
	  });
	  // TODO: 循环 2470000 次耗时约 1400 ms。 性能瓶颈！
	  // console.log(Date.now()-s, checkedPositionArr.length * objKeys.length);
	  objKeys = objKeys.filter(function (i) {
	    return i;
	  }); // filter non null;
	
	  var _loop3 = function _loop3(_pIndex) {
	    // 循环设置父节点的 选中 或 半选状态
	    var loop = function loop(__pos) {
	      var _posLen = splitPosition(__pos).length;
	      if (_posLen <= 2) {
	        // e.g. '0-0', '0-1'
	        return;
	      }
	      var sibling = 0;
	      var siblingChecked = 0;
	      var parentPosition = stripTail(__pos);
	      objKeys.forEach(function (i /* , index*/) {
	        var iArr = splitPosition(i);
	        if (iArr.length === _posLen && isInclude(splitPosition(parentPosition), iArr)) {
	          sibling++;
	          if (obj[i].checked) {
	            siblingChecked++;
	            var _i = checkedPositionArr.indexOf(i);
	            if (_i > -1) {
	              checkedPositionArr.splice(_i, 1);
	              if (_i <= _pIndex) {
	                _pIndex--;
	              }
	            }
	          } else if (obj[i].halfChecked) {
	            siblingChecked += 0.5;
	          }
	          // objKeys[index] = null;
	        }
	      });
	      // objKeys = objKeys.filter(i => i); // filter non null;
	      var parent = obj[parentPosition];
	      // sibling 不会等于0
	      // 全不选 - 全选 - 半选
	      if (siblingChecked === 0) {
	        parent.checked = false;
	        parent.halfChecked = false;
	      } else if (siblingChecked === sibling) {
	        parent.checked = true;
	        parent.halfChecked = false;
	      } else {
	        parent.halfChecked = true;
	        parent.checked = false;
	      }
	      loop(parentPosition);
	    };
	    loop(checkedPositionArr[_pIndex], _pIndex);
	    pIndex = _pIndex;
	  };
	
	  for (var pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
	    _loop3(pIndex);
	  }
	  // console.log(Date.now()-s, objKeys.length, checkIt);
	}
	
	function getCheck(treeNodesStates) {
	  var halfCheckedKeys = [];
	  var checkedKeys = [];
	  var checkedNodes = [];
	  var checkedNodesPositions = [];
	  Object.keys(treeNodesStates).forEach(function (item) {
	    var itemObj = treeNodesStates[item];
	    if (itemObj.checked) {
	      checkedKeys.push(itemObj.key);
	      checkedNodes.push(itemObj.node);
	      checkedNodesPositions.push({ node: itemObj.node, pos: item });
	    } else if (itemObj.halfChecked) {
	      halfCheckedKeys.push(itemObj.key);
	    }
	  });
	  return {
	    halfCheckedKeys: halfCheckedKeys, checkedKeys: checkedKeys, checkedNodes: checkedNodes, checkedNodesPositions: checkedNodesPositions, treeNodesStates: treeNodesStates
	  };
	}
	
	function getStrictlyValue(checkedKeys, halfChecked) {
	  if (halfChecked) {
	    return { checked: checkedKeys, halfChecked: halfChecked };
	  }
	  return checkedKeys;
	}
	
	function arraysEqual(a, b) {
	  if (a === b) return true;
	  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
	    return false;
	  }
	  if (a.length !== b.length) return false;
	
	  // If you don't care about the order of the elements inside
	  // the array, you should sort both arrays here.
	
	  for (var i = 0; i < a.length; ++i) {
	    if (a[i] !== b[i]) return false;
	  }
	  return true;
	}
	
	function closest(el, selector) {
	  var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
	
	  while (el) {
	    if (matchesSelector.call(el, selector)) {
	      return el;
	    } else {
	      el = el.parentElement;
	    }
	  }
	  return null;
	}
	
	function isTreeNode(node) {
	  return node && node.type && node.type.isTreeNode;
	}
	
	function toArray(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}
	
	function getNodeChildren(children) {
	  return toArray(children).filter(isTreeNode);
	}
	
	var onlyTreeNodeWarned = false;
	
	function warnOnlyTreeNode() {
	  if (onlyTreeNodeWarned) return;
	  onlyTreeNodeWarned = true;
	  console.warn('Tree only accept TreeNode as children.');
	}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _beeAnimate = __webpack_require__(69);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _util = __webpack_require__(87);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(27);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var browserUa = typeof window !== 'undefined' ? (0, _util.browser)(window.navigator) : '';
	var ieOrEdge = /.*(IE|Edge).+/.test(browserUa);
	// const uaArray = browserUa.split(' ');
	// const gtIE8 = uaArray.length !== 2 || uaArray[0].indexOf('IE') === -1 || Number(uaArray[1]) > 8;
	
	var defaultTitle = '---';
	
	var TreeNode = function (_React$Component) {
	  _inherits(TreeNode, _React$Component);
	
	  function TreeNode(props) {
	    _classCallCheck(this, TreeNode);
	
	    var _this2 = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this2.getNodeChildren = function () {
	      var children = _this2.props.children;
	
	      var originList = (0, _util.toArray)(children).filter(function (node) {
	        return node;
	      });
	      var targetList = (0, _util.getNodeChildren)(originList);
	
	      if (originList.length !== targetList.length) {
	        (0, _util.warnOnlyTreeNode)();
	      }
	
	      return targetList;
	    };
	
	    ['onExpand', 'onCheck', 'onContextMenu', 'onMouseEnter', 'onMouseLeave', 'onDragStart', 'onDragEnter', 'onDragOver', 'onDragLeave', 'onDrop', 'onDragEnd', 'onDoubleClick', 'onKeyDown'].forEach(function (m) {
	      _this2[m] = _this2[m].bind(_this2);
	    });
	    _this2.state = {
	      dataLoading: false,
	      dragNodeHighlight: false
	    };
	    return _this2;
	  }
	
	  TreeNode.prototype.componentDidMount = function componentDidMount() {
	    if (!this.props.root._treeNodeInstances) {
	      this.props.root._treeNodeInstances = [];
	    }
	    this.props.root._treeNodeInstances.push(this);
	  };
	  // shouldComponentUpdate(nextProps) {
	  //   if (!nextProps.expanded) {
	  //     return false;
	  //   }
	  //   return true;
	  // }
	
	  TreeNode.prototype.onCheck = function onCheck() {
	
	    this.props.root.onCheck(this);
	  };
	
	  TreeNode.prototype.onSelect = function onSelect() {
	    clearTimeout(this.doubleClickFlag);
	    var _this = this;
	    if (this.props.onDoubleClick) {
	      //执行延时
	      this.doubleClickFlag = setTimeout(function () {
	        //do function在此处写单击事件要执行的代码
	        _this.props.root.onSelect(_this);
	      }, 300);
	    } else {
	      _this.props.root.onSelect(_this);
	    }
	  };
	
	  TreeNode.prototype.onDoubleClick = function onDoubleClick() {
	    clearTimeout(this.doubleClickFlag);
	    this.props.root.onDoubleClick(this);
	  };
	
	  TreeNode.prototype.onMouseEnter = function onMouseEnter(e) {
	    e.preventDefault();
	    this.props.root.onMouseEnter(e, this);
	  };
	
	  TreeNode.prototype.onMouseLeave = function onMouseLeave(e) {
	    e.preventDefault();
	    this.props.root.onMouseLeave(e, this);
	  };
	
	  TreeNode.prototype.onContextMenu = function onContextMenu(e) {
	    e.preventDefault();
	    this.props.root.onContextMenu(e, this);
	  };
	
	  TreeNode.prototype.onDragStart = function onDragStart(e) {
	    // console.log('dragstart', this.props.eventKey, e);
	    // e.preventDefault();
	    e.stopPropagation();
	    this.setState({
	      dragNodeHighlight: true
	    });
	    this.props.root.onDragStart(e, this);
	    try {
	      // ie throw error
	      // firefox-need-it
	      e.dataTransfer.setData('text/plain', '');
	    } finally {
	      // empty
	    }
	  };
	
	  TreeNode.prototype.onDragEnter = function onDragEnter(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.props.root.onDragEnter(e, this);
	  };
	
	  TreeNode.prototype.onDragOver = function onDragOver(e) {
	    // todo disabled
	    e.preventDefault();
	    e.stopPropagation();
	    this.props.root.onDragOver(e, this);
	    return false;
	  };
	
	  TreeNode.prototype.onDragLeave = function onDragLeave(e) {
	    e.stopPropagation();
	    this.props.root.onDragLeave(e, this);
	  };
	
	  TreeNode.prototype.onDrop = function onDrop(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.setState({
	      dragNodeHighlight: false
	    });
	    this.props.root.onDrop(e, this);
	  };
	
	  TreeNode.prototype.onDragEnd = function onDragEnd(e) {
	    e.stopPropagation();
	    this.setState({
	      dragNodeHighlight: false
	    });
	    this.props.root.onDragEnd(e, this);
	  };
	
	  TreeNode.prototype.onExpand = function onExpand() {
	    var _this3 = this;
	
	    var callbackPromise = this.props.root.onExpand(this);
	    if (callbackPromise && (typeof callbackPromise === 'undefined' ? 'undefined' : _typeof(callbackPromise)) === 'object') {
	      var setLoading = function setLoading(dataLoading) {
	        _this3.setState({
	          dataLoading: dataLoading
	        });
	      };
	      setLoading(true);
	      callbackPromise.then(function () {
	        setLoading(false);
	      }, function () {
	        setLoading(false);
	      });
	    }
	  };
	
	  // keyboard event support
	
	
	  TreeNode.prototype.onKeyDown = function onKeyDown(e) {
	    this.props.root.onKeyDown(e, this);
	    if (e.keyCode == _tinperBeeCore.KeyCode.SPACE || e.keyCode == _tinperBeeCore.KeyCode.DOWN || e.keyCode == _tinperBeeCore.KeyCode.LEFT || e.keyCode == _tinperBeeCore.KeyCode.RIGHT || e.keyCode == _tinperBeeCore.KeyCode.UP) {
	      e.preventDefault();
	    }
	  };
	
	  TreeNode.prototype.renderSwitcher = function renderSwitcher(props, expandedState) {
	    var stateIcon = void 0;
	    var prefixCls = props.prefixCls;
	    var switcherCls = _defineProperty({}, prefixCls + '-switcher', true);
	    if (!props.showLine) {
	      switcherCls[prefixCls + '-noline_' + expandedState] = true;
	    } else if (props.pos === '0-0') {
	      switcherCls[prefixCls + '-roots_' + expandedState] = true;
	    } else {
	      switcherCls[prefixCls + '-center_' + expandedState] = !props.last;
	      switcherCls[prefixCls + '-bottom_' + expandedState] = props.last;
	    }
	
	    if (expandedState === 'open' && props.openIcon) {
	      stateIcon = props.openIcon;
	      switcherCls['icon-none'] = true;
	    }
	    if (expandedState === 'close' && props.closeIcon) {
	      stateIcon = props.closeIcon;
	      switcherCls['icon-none'] = true;
	    }
	    //switcherCls[stateIcon] = stateIcon;
	    props.switcherClass ? switcherCls['' + props.switcherClass] = true : '';
	    if (props.disabled) {
	      switcherCls[prefixCls + '-switcher-disabled'] = true;
	      return _react2['default'].createElement(
	        'span',
	        { className: (0, _classnames2['default'])(switcherCls), style: props.switcherStyle },
	        stateIcon
	      );
	    }
	    return _react2['default'].createElement(
	      'span',
	      { className: (0, _classnames2['default'])(switcherCls), style: props.switcherStyle, onClick: this.onExpand },
	      stateIcon
	    );
	  };
	
	  TreeNode.prototype.renderCheckbox = function renderCheckbox(props) {
	    var prefixCls = props.prefixCls;
	    var checkboxCls = _defineProperty({}, prefixCls + '-checkbox', true);
	    if (props.checked) {
	      checkboxCls[prefixCls + '-checkbox-checked'] = true;
	    } else if (props.halfChecked) {
	      checkboxCls[prefixCls + '-checkbox-indeterminate'] = true;
	    }
	    var customEle = null;
	    if (typeof props.checkable !== 'boolean') {
	      customEle = props.checkable;
	    }
	    if (props.disabled || props.disableCheckbox) {
	      checkboxCls[prefixCls + '-checkbox-disabled'] = true;
	      return _react2['default'].createElement(
	        'span',
	        { ref: 'checkbox', className: (0, _classnames2['default'])(checkboxCls) },
	        customEle
	      );
	    }
	    return _react2['default'].createElement(
	      'span',
	      { ref: 'checkbox',
	        className: (0, _classnames2['default'])(checkboxCls),
	        onClick: this.onCheck
	      },
	      customEle
	    );
	  };
	
	  TreeNode.prototype.renderChildren = function renderChildren(props) {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    var transitionAppear = true;
	    if (!renderFirst && props.expanded) {
	      transitionAppear = false;
	    }
	    var children = props.children;
	    var newChildren = children;
	    // 确定所有子节点是否是TreeNode
	    var allTreeNode = false;
	    if (Array.isArray(children)) {
	      for (var index = 0; index < children.length; index++) {
	        var item = children[index];
	        allTreeNode = item.type.isTreeNode == 1;
	        if (!allTreeNode) {
	          //当检查到子节点中有不是 TreeNode 的，则直接结束检查。同时不会渲染所有子节点
	          break;
	        }
	      }
	    } else if (children && children.type && children.type.isTreeNode == 1) {
	      allTreeNode = true;
	    }
	    //  如果props.children的长度大于0才可以生成子对象
	    if (allTreeNode && _react2['default'].Children.count(children)) {
	      var _cls;
	
	      var cls = (_cls = {}, _defineProperty(_cls, props.prefixCls + '-child-tree', true), _defineProperty(_cls, props.prefixCls + '-child-tree-open', props.expanded), _cls);
	      if (props.showLine) {
	        cls[props.prefixCls + '-line'] = !props.last;
	      }
	      var animProps = {};
	      if (props.openTransitionName) {
	        animProps.transitionName = props.openTransitionName;
	      } else if (_typeof(props.openAnimation) === 'object') {
	        animProps.animation = _extends({}, props.openAnimation);
	        if (!transitionAppear) {
	          delete animProps.animation.appear;
	        }
	      }
	      newChildren = _react2['default'].createElement(
	        _beeAnimate2['default'],
	        _extends({}, animProps, {
	          showProp: 'data-expanded',
	          transitionAppear: transitionAppear,
	          component: ''
	        }),
	        !props.expanded ? null : _react2['default'].createElement(
	          'ul',
	          { className: (0, _classnames2['default'])(cls), 'data-expanded': props.expanded },
	          _react2['default'].Children.map(children, function (item, index) {
	            return props.root.renderTreeNode(item, index, props.pos);
	          }, props.root)
	        )
	      );
	    }
	    return newChildren;
	  };
	
	  /**
	   *判断是否为叶子节点，isLeaf的优先级>props.children。如果是异步加载是根据isLeaf的值进行判断的
	   *
	   * @returns
	   * @memberof TreeNode
	   */
	  TreeNode.prototype.checkIsLeaf = function checkIsLeaf() {
	    var _props = this.props,
	        isLeaf = _props.isLeaf,
	        loadData = _props.loadData;
	
	
	    var hasChildren = this.getNodeChildren().length !== 0;
	
	    if (isLeaf === false) {
	      return false;
	    }
	
	    return isLeaf || !loadData && !hasChildren;
	  };
	
	  TreeNode.prototype.render = function render() {
	    var _iconEleCls,
	        _this4 = this;
	
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var expandedState = props.expanded ? 'open' : 'close';
	    var iconState = expandedState;
	
	    var canRenderSwitcher = true;
	    var content = props.title;
	    var newChildren = this.renderChildren(props);
	    var openIconCls = false,
	        closeIconCls = false;
	
	    //以下变量控制是否鼠标单机双击方法中的变量
	    var timer = 0;
	    var delay = 500;
	    var prevent = false;
	
	    // if (!newChildren || newChildren === props.children) {
	    //   // content = newChildren;
	    //   newChildren = null;
	    //   if (!props.loadData || props.isLeaf) {
	    //     canRenderSwitcher = false;
	    //     iconState = 'docu';
	    //   }
	    // }
	    if (this.checkIsLeaf()) {
	      canRenderSwitcher = false;
	      iconState = 'docu';
	    }
	    // For performance, does't render children into dom when `!props.expanded` (move to Animate)
	    // if (!props.expanded) {
	    //   newChildren = null;
	    // }
	
	    var iconEleCls = (_iconEleCls = {}, _defineProperty(_iconEleCls, prefixCls + '-iconEle', true), _defineProperty(_iconEleCls, prefixCls + '-icon_loading', this.state.dataLoading), _defineProperty(_iconEleCls, prefixCls + '-icon__' + iconState, true), _iconEleCls);
	    var selectHandle = function selectHandle() {
	      var titleClass = props.titleClass ? prefixCls + '-title' + ' ' + props.className : prefixCls + '-title';
	      // const icon = (props.showIcon || props.loadData && this.state.dataLoading) ?
	      //   <span className={classNames(iconEleCls)}></span> : null;
	      var icon = void 0;
	      if (props.showIcon && props.icon) {
	        icon = _react2['default'].createElement(
	          'span',
	          {
	            className: (0, _classnames2['default'])(prefixCls + '-iconEle', prefixCls + '-icon__customize')
	          },
	          typeof currentIcon === 'function' ? _react2['default'].createElement(props.icon, _extends({}, _this4.props)) : props.icon
	        );
	      } else if (props.showIcon || props.loadData && _this4.state.dataLoading) {
	        icon = _react2['default'].createElement('span', { className: (0, _classnames2['default'])(iconEleCls) });
	      }
	      var title = _react2['default'].createElement(
	        'span',
	        { className: titleClass, style: props.titleStyle },
	        content
	      );
	      var wrap = prefixCls + '-node-content-wrapper';
	      var domProps = {
	        className: wrap + ' ' + wrap + '-' + (iconState === expandedState ? iconState : 'normal')
	      };
	      if (!props.disabled) {
	        if (props.selected || !props._dropTrigger && _this4.state.dragNodeHighlight) {
	          domProps.className += ' ' + prefixCls + '-node-selected';
	        }
	        domProps.onClick = function (e) {
	          var _this = _this4;
	          e.preventDefault();
	          if (props.selectable) {
	            _this.onSelect();
	          }
	
	          // not fire check event
	          // if (props.checkable) {
	          //   this.onCheck();
	          // }
	        };
	
	        if (props.onDoubleClick) {
	          domProps.onDoubleClick = _this4.onDoubleClick;
	        }
	
	        if (props.onRightClick) {
	          domProps.onContextMenu = _this4.onContextMenu;
	        }
	        if (props.onMouseEnter) {
	          domProps.onMouseEnter = _this4.onMouseEnter;
	        }
	        if (props.onMouseLeave) {
	          domProps.onMouseLeave = _this4.onMouseLeave;
	        }
	
	        if (props.draggable) {
	          domProps.className += ' draggable';
	          if (ieOrEdge) {
	            // ie bug!
	            domProps.href = '#';
	          }
	          domProps.draggable = true;
	          domProps['aria-grabbed'] = true;
	          domProps.onDragStart = _this4.onDragStart;
	        }
	      }
	      //设置tabIndex
	      if (props.focusable) {
	        domProps.onKeyDown = _this4.onKeyDown;
	        domProps.tabIndex = -1;
	        if (props.tabIndexKey) {
	          if (props.eventKey == props.tabIndexKey) {
	            domProps.tabIndex = props.tabIndexValue;
	          }
	        } else if (props.pos == '0-0') {
	          domProps.tabIndex = props.tabIndexValue;
	        }
	      }
	
	      return _react2['default'].createElement(
	        'a',
	        _extends({ ref: 'selectHandle', pos: props.pos, title: typeof content === 'string' ? content : '' }, domProps),
	        icon,
	        title
	      );
	    };
	
	    var liProps = {};
	    if (props.draggable) {
	      liProps.onDragEnter = this.onDragEnter;
	      liProps.onDragOver = this.onDragOver;
	      liProps.onDragLeave = this.onDragLeave;
	      liProps.onDrop = this.onDrop;
	      liProps.onDragEnd = this.onDragEnd;
	    }
	    var disabledCls = '';
	    var dragOverCls = '';
	    if (props.disabled) {
	      disabledCls = prefixCls + '-treenode-disabled';
	    } else if (props.dragOver) {
	      dragOverCls = 'drag-over';
	    } else if (props.dragOverGapTop) {
	      dragOverCls = 'drag-over-gap-top';
	    } else if (props.dragOverGapBottom) {
	      dragOverCls = 'drag-over-gap-bottom';
	    }
	
	    var filterCls = props.filterTreeNode(this) ? 'filter-node' : '';
	
	    var noopSwitcher = function noopSwitcher() {
	      var _cls2;
	
	      var cls = (_cls2 = {}, _defineProperty(_cls2, prefixCls + '-switcher', true), _defineProperty(_cls2, prefixCls + '-switcher-noop', true), _cls2);
	      if (props.showLine) {
	        // console.log('line---------');
	        cls[prefixCls + '-center_docu'] = !props.last;
	        cls[prefixCls + '-bottom_docu'] = props.last;
	      } else {
	        cls[prefixCls + '-noline_docu'] = true;
	      }
	      return _react2['default'].createElement('span', { className: (0, _classnames2['default'])(cls) });
	    };
	    var selectedCls = props.selected ? prefixCls + '-treenode-selected' : '';
	    return _react2['default'].createElement(
	      'li',
	      _extends({}, liProps, { ref: 'li', style: props.style,
	        className: (0, _classnames2['default'])(props.className, disabledCls, dragOverCls, filterCls, selectedCls)
	      }),
	      canRenderSwitcher ? this.renderSwitcher(props, expandedState) : noopSwitcher(),
	      props.checkable ? this.renderCheckbox(props) : null,
	      selectHandle(),
	      newChildren
	    );
	  };
	
	  return TreeNode;
	}(_react2['default'].Component);
	
	TreeNode.isTreeNode = 1;
	
	TreeNode.propTypes = {
	  prefixCls: _propTypes2['default'].string,
	  disabled: _propTypes2['default'].bool,
	  disableCheckbox: _propTypes2['default'].bool,
	  expanded: _propTypes2['default'].bool,
	  isLeaf: _propTypes2['default'].bool,
	  root: _propTypes2['default'].object,
	  onSelect: _propTypes2['default'].func,
	  openIcon: _propTypes2['default'].element,
	  closeIcon: _propTypes2['default'].element,
	  style: _propTypes2['default'].object,
	  className: _propTypes2['default'].string,
	  titleClass: _propTypes2['default'].string,
	  titleStyle: _propTypes2['default'].object,
	  switcherClass: _propTypes2['default'].string,
	  switcherStyle: _propTypes2['default'].object
	};
	
	TreeNode.defaultProps = {
	  title: defaultTitle,
	  tabIndexValue: 0
	};
	
	exports['default'] = TreeNode;
	module.exports = exports['default'];

/***/ }),
/* 89 */
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
	
	exports['default'] = animation;
	module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(91);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Icon2["default"];
	module.exports = exports['default'];

/***/ }),
/* 91 */
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title Tree基本使用示例
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 如何获取选中对象自定义对象和数据
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TreeNode = _src2['default'].TreeNode;
	
	var defaultProps = {
	  keys: ['0-0-0', '0-0-1']
	};
	
	var Demo10 = function (_Component) {
	  _inherits(Demo10, _Component);
	
	  function Demo10(props) {
	    _classCallCheck(this, Demo10);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.onCheck = function (checkedKeys) {
	      var self = _this;
	      console.log('onCheck', checkedKeys);
	      var cks = {
	        checked: checkedKeys.checked || checkedKeys
	      };
	      // this.setState({checkedKeys:cks});
	    };
	
	    _this.onDoubleClick = function (key, treeNode) {
	      console.log('---onDblClick---' + key + '--treeNode--' + treeNode);
	    };
	
	    var keys = _this.props.keys;
	    _this.state = {
	      defaultExpandedKeys: keys,
	      defaultSelectedKeys: keys,
	      defaultCheckedKeys: keys
	      // checkedKeys: {checked:keys},
	    };
	    return _this;
	  }
	  /**
	   * 获取当前选中行的item对象。
	   * @param {*} value 
	   */
	
	
	  Demo10.prototype.onSelect = function onSelect(selectedKeys, e) {
	    console.log(selectedKeys + ' selected'); //获取key
	    var currentObject = {};
	    currentObject.title = e.node.props.title; //获取选中对象的数据
	    currentObject.key = e.node.props.eventKey;
	    console.log(currentObject);
	  };
	
	  Demo10.prototype.render = function render() {
	
	    return _react2['default'].createElement(
	      _src2['default'],
	      { className: 'myCls', showLine: true, checkable: true,
	        defaultExpandedKeys: this.state.defaultExpandedKeys,
	        defaultSelectedKeys: this.state.defaultSelectedKeys,
	        defaultCheckedKeys: this.state.defaultCheckedKeys,
	        checkStrictly: true,
	        onSelect: this.onSelect, onCheck: this.onCheck,
	        onDoubleClick: this.onDoubleClick
	      },
	      _react2['default'].createElement(
	        TreeNode,
	        { title: 'parent 1', key: '0-0' },
	        _react2['default'].createElement(
	          TreeNode,
	          { title: 'parent 1-0', key: '0-0-0', disabled: true },
	          _react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-0-0', disableCheckbox: true }),
	          _react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-0-1' })
	        ),
	        _react2['default'].createElement(
	          TreeNode,
	          { title: 'parent 1-1', key: '0-0-1' },
	          _react2['default'].createElement(TreeNode, { title: _react2['default'].createElement(
	              'span',
	              null,
	              'sss'
	            ), key: '0-0-1-0' })
	        ),
	        _react2['default'].createElement(
	          TreeNode,
	          { title: 'parent 1-2', key: '0-0-2' },
	          _react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-2-0' }),
	          _react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-2-1' })
	        )
	      )
	    );
	  };
	
	  return Demo10;
	}(_react.Component);
	
	Demo10.defaultProps = defaultProps;
	
	exports['default'] = Demo10;
	module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @title Tree数据可控示例
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	var x = 6;
	var y = 5;
	var z = 2;
	var gData = [];
	
	var generateData = function generateData(_level, _preKey, _tns) {
	  var preKey = _preKey || '0';
	  var tns = _tns || gData;
	
	  var children = [];
	  for (var i = 0; i < x; i++) {
	    var key = preKey + '-' + i;
	    tns.push({ title: key, key: key });
	    if (i < y) {
	      children.push(key);
	    }
	  }
	  if (_level < 0) {
	    return tns;
	  }
	  var level = _level - 1;
	  children.forEach(function (key, index) {
	    tns[index].children = [];
	    return generateData(level, key, tns[index].children);
	  });
	};
	generateData(z);
	
	var TreeNode = _src2['default'].TreeNode;
	
	var Demo2 = function (_Component) {
	  _inherits(Demo2, _Component);
	
	  function Demo2(props) {
	    _classCallCheck(this, Demo2);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      expandedKeys: [],
	      autoExpandParent: true,
	      checkedKeys: ['0-0-0'],
	      selectedKeys: []
	    };
	    _this.onExpand = _this.onExpand.bind(_this);
	    _this.onCheck = _this.onCheck.bind(_this);
	    _this.onSelect = _this.onSelect.bind(_this);
	    return _this;
	  }
	
	  Demo2.prototype.onExpand = function onExpand(expandedKeys) {
	    console.log('onExpand', arguments);
	    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
	    // or, you can remove all expanded children keys.
	    this.setState({
	      expandedKeys: expandedKeys,
	      autoExpandParent: false
	    });
	  };
	
	  Demo2.prototype.onCheck = function onCheck(checkedKeys) {
	    this.setState({
	      checkedKeys: checkedKeys,
	      selectedKeys: ['0-3', '0-4']
	    });
	  };
	
	  Demo2.prototype.onSelect = function onSelect(selectedKeys, info) {
	    console.log('onSelect', info);
	    this.setState({ selectedKeys: selectedKeys });
	  };
	
	  Demo2.prototype.render = function render() {
	    var loop = function loop(data) {
	      return data.map(function (item) {
	        if (item.children) {
	          return _react2['default'].createElement(
	            TreeNode,
	            { key: item.key, title: item.key, disableCheckbox: item.key === '0-0-0' },
	            loop(item.children)
	          );
	        }
	        return _react2['default'].createElement(TreeNode, { key: item.key, title: item.key, isLeaf: true });
	      });
	    };
	    return _react2['default'].createElement(
	      _src2['default'],
	      {
	        checkable: true,
	        focusable: true,
	        className: 'demo2 myCls',
	        onExpand: this.onExpand, expandedKeys: this.state.expandedKeys,
	        autoExpandParent: this.state.autoExpandParent,
	        onCheck: this.onCheck,
	        onSelect: this.onSelect
	      },
	      loop(gData)
	    );
	  };
	
	  return Demo2;
	}(_react.Component);
	
	;
	
	exports['default'] = Demo2;
	module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @title Tree 拖拽使用示例
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @description 拖动结点插入到另一个结点后面或者其他的父节点里面。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
	
	var x = 3;
	var y = 2;
	var z = 1;
	var gData = [];
	
	var generateData = function generateData(_level, _preKey, _tns) {
	  var preKey = _preKey || '0';
	  var tns = _tns || gData;
	
	  var children = [];
	  for (var i = 0; i < x; i++) {
	    var key = preKey + '-' + i;
	    tns.push({ title: key, key: key });
	    if (i < y) {
	      children.push(key);
	    }
	  }
	  if (_level < 0) {
	    return tns;
	  }
	  var level = _level - 1;
	  children.forEach(function (key, index) {
	    tns[index].children = [];
	    return generateData(level, key, tns[index].children);
	  });
	};
	generateData(z);
	
	var TreeNode = _src2['default'].TreeNode;
	
	var Demo3 = function (_Component) {
	  _inherits(Demo3, _Component);
	
	  function Demo3(props) {
	    _classCallCheck(this, Demo3);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      gData: gData,
	      expandedKeys: ['0-0', '0-0-0', '0-0-0-0']
	    };
	    _this.onDragEnter = _this.onDragEnter.bind(_this);
	    _this.onDrop = _this.onDrop.bind(_this);
	    return _this;
	  }
	
	  Demo3.prototype.onDragEnter = function onDragEnter(info) {
	    console.log(info);
	    // expandedKeys 需要受控时设置
	    // this.setState({
	    //   expandedKeys: info.expandedKeys,
	    // });
	  };
	
	  Demo3.prototype.onDrop = function onDrop(info) {
	    console.log(info);
	    var dropKey = info.node.props.eventKey;
	    var dragKey = info.dragNode.props.eventKey;
	    // const dragNodesKeys = info.dragNodesKeys;
	    var loop = function loop(data, key, callback) {
	      data.forEach(function (item, index, arr) {
	        if (item.key === key) {
	          return callback(item, index, arr);
	        }
	        if (item.children) {
	          return loop(item.children, key, callback);
	        }
	      });
	    };
	    var data = [].concat(_toConsumableArray(this.state.gData));
	    var dragObj = void 0;
	    loop(data, dragKey, function (item, index, arr) {
	      arr.splice(index, 1);
	      dragObj = item;
	    });
	    if (info.dropToGap) {
	      var ar = void 0;
	      var i = void 0;
	      loop(data, dropKey, function (item, index, arr) {
	        ar = arr;
	        i = index;
	      });
	      ar.splice(i, 0, dragObj);
	    } else {
	      loop(data, dropKey, function (item) {
	        item.children = item.children || [];
	        // where to insert 示例添加到尾部，可以是随意位置
	        item.children.push(dragObj);
	      });
	    }
	    this.setState({
	      gData: data
	    });
	  };
	
	  Demo3.prototype.render = function render() {
	    var loop = function loop(data) {
	      return data.map(function (item) {
	        if (item.children && item.children.length) {
	          return _react2['default'].createElement(
	            TreeNode,
	            { key: item.key, title: item.key },
	            loop(item.children)
	          );
	        }
	        return _react2['default'].createElement(TreeNode, { key: item.key, title: item.key });
	      });
	    };
	    return _react2['default'].createElement(
	      _src2['default'],
	      {
	        className: 'myCls',
	        defaultExpandedKeys: this.state.expandedKeys,
	        draggable: true,
	        onDragEnter: this.onDragEnter,
	        onDrop: this.onDrop
	      },
	      loop(this.state.gData)
	    );
	  };
	
	  return Demo3;
	}(_react.Component);
	
	;
	
	exports['default'] = Demo3;
	module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeFormControl = __webpack_require__(96);
	
	var _beeFormControl2 = _interopRequireDefault(_beeFormControl);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title Tree可搜索示例
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var x = 3;
	var y = 2;
	var z = 1;
	var gData = [];
	
	var generateData = function generateData(_level, _preKey, _tns) {
	  var preKey = _preKey || '0';
	  var tns = _tns || gData;
	
	  var children = [];
	  for (var i = 0; i < x; i++) {
	    var key = preKey + '-' + i;
	    tns.push({
	      title: key,
	      key: key
	    });
	    if (i < y) {
	      children.push(key);
	    }
	  }
	  if (_level < 0) {
	    return tns;
	  }
	  var level = _level - 1;
	  children.forEach(function (key, index) {
	    tns[index].children = [];
	    return generateData(level, key, tns[index].children);
	  });
	};
	generateData(z);
	
	var TreeNode = _src2['default'].TreeNode;
	
	var dataList = [];
	var generateList = function generateList(data) {
	  for (var i = 0; i < data.length; i++) {
	    var node = data[i];
	    var key = node.key;
	    dataList.push({
	      key: key,
	      title: key
	    });
	    if (node.children) {
	      generateList(node.children, node.key);
	    }
	  }
	};
	generateList(gData);
	
	var getParentKey = function getParentKey(key, tree) {
	  var parentKey = void 0;
	  for (var i = 0; i < tree.length; i++) {
	    var node = tree[i];
	    if (node.children) {
	      if (node.children.some(function (item) {
	        return item.key === key;
	      })) {
	        parentKey = node.key;
	      } else if (getParentKey(key, node.children)) {
	        parentKey = getParentKey(key, node.children);
	      }
	    }
	  }
	  return parentKey;
	};
	
	var Demo4 = function (_Component) {
	  _inherits(Demo4, _Component);
	
	  function Demo4(props) {
	    _classCallCheck(this, Demo4);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.onExpand = function (expandedKeys) {
	      _this.setState({
	        expandedKeys: expandedKeys,
	        autoExpandParent: false
	      });
	    };
	
	    _this.onChange = function (value) {
	
	      var expandedKeys = [];
	      dataList.forEach(function (item) {
	        if (item.key.indexOf(value) > -1) {
	          expandedKeys.push(getParentKey(item.key, gData));
	        }
	      });
	      var uniqueExpandedKeys = [];
	      expandedKeys.forEach(function (item) {
	        if (item && uniqueExpandedKeys.indexOf(item) === -1) {
	          uniqueExpandedKeys.push(item);
	        }
	      });
	      _this.setState({
	        expandedKeys: uniqueExpandedKeys,
	        searchValue: value,
	        autoExpandParent: true
	      });
	    };
	
	    _this.state = {
	      expandedKeys: [],
	      searchValue: '',
	      autoExpandParent: true
	    };
	    return _this;
	  }
	
	  Demo4.prototype.render = function render() {
	    var _state = this.state,
	        searchValue = _state.searchValue,
	        expandedKeys = _state.expandedKeys,
	        autoExpandParent = _state.autoExpandParent;
	
	    var loop = function loop(data) {
	      return data.map(function (item) {
	        var index = item.key.search(searchValue);
	        var beforeStr = item.key.substr(0, index);
	        var afterStr = item.key.substr(index + searchValue.length);
	        var title = index > -1 ? _react2['default'].createElement(
	          'span',
	          null,
	          beforeStr,
	          _react2['default'].createElement(
	            'span',
	            { className: 'u-tree-searchable-filter' },
	            searchValue
	          ),
	          afterStr
	        ) : _react2['default'].createElement(
	          'span',
	          null,
	          item.key
	        );
	        if (item.children) {
	          return _react2['default'].createElement(
	            TreeNode,
	            { key: item.key, title: title },
	            loop(item.children)
	          );
	        }
	        return _react2['default'].createElement(TreeNode, { key: item.key, title: title });
	      });
	    };
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(_beeFormControl2['default'], {
	        style: { width: 200 },
	        placeholder: 'Search',
	        onChange: this.onChange
	      }),
	      _react2['default'].createElement(
	        _src2['default'],
	        {
	          className: 'myCls',
	          onExpand: this.onExpand,
	          expandedKeys: expandedKeys,
	          autoExpandParent: autoExpandParent
	        },
	        loop(gData)
	      )
	    );
	  };
	
	  return Demo4;
	}(_react.Component);
	
	exports['default'] = Demo4;
	module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FormControl = __webpack_require__(97);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _FormControl2["default"];
	module.exports = exports['default'];

/***/ }),
/* 97 */
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
	
	var _beeIcon = __webpack_require__(90);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title Tree异步数据加载
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 当点击展开，异步获取子节点数据
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var x = 3;
	var y = 2;
	var z = 1;
	var gData = [];
	
	var generateData = function generateData(_level, _preKey, _tns) {
	  var preKey = _preKey || '0';
	  var tns = _tns || gData;
	
	  var children = [];
	  for (var i = 0; i < x; i++) {
	    var key = preKey + '-' + i;
	    tns.push({
	      title: key,
	      key: key
	    });
	    if (i < y) {
	      children.push(key);
	    }
	  }
	  if (_level < 0) {
	    return tns;
	  }
	  var level = _level - 1;
	  children.forEach(function (key, index) {
	    tns[index].children = [];
	    return generateData(level, key, tns[index].children);
	  });
	};
	generateData(z);
	
	var TreeNode = _src2['default'].TreeNode;
	
	function generateTreeNodes(treeNode) {
	  var arr = [];
	  var key = treeNode.props.eventKey;
	  for (var i = 0; i < 3; i++) {
	    arr.push({
	      name: 'leaf ' + key + '-' + i,
	      key: key + '-' + i
	    });
	  }
	  return arr;
	}
	
	function setLeaf(treeData, curKey, level) {
	  var loopLeaf = function loopLeaf(data, lev) {
	    var l = lev - 1;
	    data.forEach(function (item) {
	      if (item.key.length > curKey.length ? item.key.indexOf(curKey) !== 0 : curKey.indexOf(item.key) !== 0) {
	        return;
	      }
	      if (item.children) {
	        loopLeaf(item.children, l);
	      } else if (l < 1) {
	        item.isLeaf = true;
	      }
	    });
	  };
	  loopLeaf(treeData, level + 1);
	}
	
	function getNewTreeData(treeData, curKey, child, level) {
	  var loop = function loop(data) {
	    if (level < 1 || curKey.length - 3 > level * 2) return;
	    data.forEach(function (item) {
	      if (curKey.indexOf(item.key) === 0) {
	        if (item.children) {
	          loop(item.children);
	        } else {
	          item.children = child;
	        }
	      }
	    });
	  };
	  loop(treeData);
	  setLeaf(treeData, curKey, level);
	}
	
	var Demo5 = function (_Component) {
	  _inherits(Demo5, _Component);
	
	  function Demo5(props) {
	    _classCallCheck(this, Demo5);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      treeData: []
	    };
	    _this.onSelect = _this.onSelect.bind(_this);
	    _this.onLoadData = _this.onLoadData.bind(_this);
	    return _this;
	  }
	
	  Demo5.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    setTimeout(function () {
	      _this2.setState({
	        treeData: [{
	          name: 'pNode 01',
	          key: '0-0'
	        }, {
	          name: 'pNode 02',
	          key: '0-1'
	        }, {
	          name: 'pNode 03',
	          key: '0-2',
	          isLeaf: true
	        }]
	      });
	    }, 100);
	  };
	
	  Demo5.prototype.onSelect = function onSelect(info) {
	    console.log('selected', info);
	  };
	
	  Demo5.prototype.onLoadData = function onLoadData(treeNode) {
	    var _this3 = this;
	
	    return new Promise(function (resolve) {
	      setTimeout(function () {
	        var treeData = [].concat(_toConsumableArray(_this3.state.treeData));
	        getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
	        _this3.setState({
	          treeData: treeData
	        });
	        resolve();
	      }, 1000);
	    });
	  };
	
	  Demo5.prototype.render = function render() {
	    var loop = function loop(data) {
	      return data.map(function (item) {
	        if (item.children) {
	          return _react2['default'].createElement(
	            TreeNode,
	            { title: item.name, key: item.key },
	            loop(item.children)
	          );
	        }
	        return _react2['default'].createElement(TreeNode, { title: item.name, key: item.key, isLeaf: item.isLeaf, disabled: item.key === '0-0-0' });
	      });
	    };
	    var treeNodes = loop(this.state.treeData);
	    return _react2['default'].createElement(
	      _src2['default'],
	      { className: 'myCls', onSelect: this.onSelect, loadData: this.onLoadData },
	      treeNodes
	    );
	  };
	
	  return Demo5;
	}(_react.Component);
	
	;
	
	exports['default'] = Demo5;
	module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	var _beeIcon = __webpack_require__(90);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title Tree基本使用示例自定义图标
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 添加openIcon、closeIcon属性
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TreeNode = _src2['default'].TreeNode;
	
	var defaultProps = {
		keys: ['0-0-0', '0-0-1']
	};
	console.log(_src2['default']);
	
	var Demo1 = function (_Component) {
		_inherits(Demo1, _Component);
	
		function Demo1(props) {
			_classCallCheck(this, Demo1);
	
			var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
			var keys = _this.props.keys;
			_this.state = {
				defaultExpandedKeys: keys,
				defaultSelectedKeys: keys,
				defaultCheckedKeys: keys
			};
			return _this;
		}
	
		Demo1.prototype.onSelect = function onSelect(info) {
			console.log('selected', info);
		};
	
		Demo1.prototype.onCheck = function onCheck(info) {
			console.log('onCheck', info);
		};
	
		Demo1.prototype.render = function render() {
			return _react2['default'].createElement(
				_src2['default'],
				{ className: 'myCls', checkable: true, openIcon: _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-minus' }), closeIcon: _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-plus' }),
					defaultExpandedKeys: this.state.defaultExpandedKeys,
					defaultSelectedKeys: this.state.defaultSelectedKeys,
					defaultCheckedKeys: this.state.defaultCheckedKeys,
					onSelect: this.onSelect, onCheck: this.onCheck
				},
				_react2['default'].createElement(
					TreeNode,
					{ title: 'parent 1', key: '0-0' },
					_react2['default'].createElement(
						TreeNode,
						{ title: 'parent 1-0', key: '0-0-0', disabled: true },
						_react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-0-0', disableCheckbox: true }),
						_react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-0-1' })
					),
					_react2['default'].createElement(
						TreeNode,
						{ title: 'parent 1-1', key: '0-0-1' },
						_react2['default'].createElement(TreeNode, { title: _react2['default'].createElement(
								'span',
								null,
								'sss'
							), key: '0-0-1-0' })
					)
				)
			);
		};
	
		return Demo1;
	}(_react.Component);
	
	Demo1.defaultProps = defaultProps;
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title Tree增加节点
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TreeNode = _src2['default'].TreeNode;
	
	var Demo7 = function (_Component) {
	  _inherits(Demo7, _Component);
	
	  function Demo7(props) {
	    _classCallCheck(this, Demo7);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      treeData: [],
	      defaultExpandedKeys: ['0-0', '0-1', '0-2'],
	      parentNode: {}
	    };
	    _this.onSelect = _this.onSelect.bind(_this);
	    _this.addNode = _this.addNode.bind(_this);
	    _this.clickFun = _this.clickFun.bind(_this);
	    _this.getNodeByKey = _this.getNodeByKey.bind(_this);
	    _this.parentNode = null;
	    return _this;
	  }
	
	  Demo7.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    setTimeout(function () {
	      _this2.setState({
	        treeData: [{
	          name: 'pNode 01',
	          key: '0-0',
	          children: [{
	            name: 'leaf 0-0-0',
	            key: '0-0-0'
	          }, {
	            name: 'leaf 0-0-1',
	            key: '0-0-1'
	          }]
	        }, {
	          name: 'pNode 02',
	          key: '0-1',
	          children: [{
	            name: 'leaf 0-1-0',
	            key: '0-1-0'
	          }, {
	            name: 'leaf 0-1-1',
	            key: '0-1-1'
	          }]
	        }, {
	          name: 'pNode 03',
	          key: '0-2',
	          isLeaf: true
	        }]
	      });
	    }, 100);
	  };
	  /**
	   * 增加节点
	   * @param string prKey    [父节点key]
	   * @param object nodeItem [子节点信息]
	   */
	
	
	  Demo7.prototype.addNode = function addNode(prKey, nodeItem) {
	    var data = this.state.treeData;
	    var parNode = void 0;
	    if (prKey) {
	      // 如果prKey存在则搜索父节点进行添加
	      parNode = this.getNodeByKey(data, prKey);
	      //如果父节点存在的话，添加到父节点上
	      if (parNode) {
	        if (!parNode.children) {
	          parNode.children = [];
	        }
	        // 如果key不存在就动态生成一个
	        if (!nodeItem.key) {
	          nodeItem.key = prKey + parNode.children.length + 1;
	        }
	        parNode.children.push(nodeItem);
	      }
	    } else {
	      // 没有穿prKey添加到根下成为一级节点
	      if (!nodeItem.key) {
	        nodeItem.key = "0-" + data.length + 1;
	      }
	      data.push(nodeItem);
	    }
	
	    this.setState({
	      data: data
	    });
	  };
	
	  Demo7.prototype.getNodeByKey = function getNodeByKey(data, key) {
	    var _this3 = this;
	
	    if (!this.parentNode) {
	      data.find(function (item) {
	        if (item.key === key) {
	          console.log('item.name---' + item.name);
	          _this3.parentNode = item;
	          return true;
	        } else if (item.children) {
	          return _this3.getNodeByKey(item.children, key);
	        }
	      });
	    }
	    return this.parentNode;
	  };
	
	  Demo7.prototype.onSelect = function onSelect(info) {
	    console.log('selected', info);
	  };
	  /**
	   * 点击button事件
	   */
	
	
	  Demo7.prototype.clickFun = function clickFun() {
	    var prKey = void 0,
	        nodeItem = void 0;
	    prKey = '0-1';
	    nodeItem = {
	      name: 'leaf 0-0-4'
	    };
	    this.addNode(prKey, nodeItem);
	  };
	
	  Demo7.prototype.render = function render() {
	    var loop = function loop(data) {
	      return data.map(function (item) {
	        if (item.children) {
	          return _react2['default'].createElement(
	            TreeNode,
	            { title: item.name, key: item.key },
	            loop(item.children)
	          );
	        }
	        return _react2['default'].createElement(TreeNode, { title: item.name, key: item.key, isLeaf: item.isLeaf, disabled: item.key === '0-0-0' });
	      });
	    };
	    var treeNodes = loop(this.state.treeData);
	    console.log('defaultKeys--' + this.state.defaultExpandedKeys);
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        _src2['default'],
	        { onSelect: this.onSelect, defaultExpandedKeys: this.state.defaultExpandedKeys, className: 'myCls' },
	        treeNodes
	      ),
	      _react2['default'].createElement(
	        _beeButton2['default'],
	        { colors: 'primary', onClick: this.clickFun },
	        '\u589E\u52A0\u8282\u70B9'
	      )
	    );
	  };
	
	  return Demo7;
	}(_react.Component);
	
	;
	
	exports['default'] = Demo7;
	module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	var _beeButton = __webpack_require__(82);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _beeIcon = __webpack_require__(90);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title Tree 节点可编辑
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 鼠标移动到节点上点击编辑图标进行编辑。e.node.props.eventKey代表当前节点key值。editKey指当前操作的节点key
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TreeNode = _src2['default'].TreeNode;
	
	var Demo8 = function (_Component) {
		_inherits(Demo8, _Component);
	
		function Demo8(props) {
			_classCallCheck(this, Demo8);
	
			var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
			_this.onMouseEnter = function (e) {
				_this.setState({
					isHover: e.node.props.eventKey
				});
			};
	
			_this.onMouseLeave = function (e, treenode) {
				_this.setState({
					isHover: "",
					editKey: ""
				});
			};
	
			_this.editRender = function (item) {
				_this.setState({
					editKey: item.key
				});
			};
	
			_this.nodechange = function (item, value) {
				item.name = value;
			};
	
			_this.renderTreeTitle = function (item) {
				var titleIcon = void 0,
				    titleInfo = void 0;
				//编辑时input框
				if (_this.state.editKey == item.key) {
					titleInfo = _react2['default'].createElement('input', { type: 'text', id: 'itemKey', defaultValue: item.name, onChange: function onChange(e) {
							return _this.nodechange(item, e.target.value);
						} });
				} else {
					titleInfo = _react2['default'].createElement(
						'span',
						{ className: 'title-middle' },
						item.name
					);
				}
				//编辑图标
				if (_this.state.isHover == item.key) {
					titleIcon = _react2['default'].createElement(_beeIcon2['default'], { className: 'title-middle edit-icon', type: 'uf-pencil', onClick: function onClick(e) {
							return _this.editRender(item);
						} });
				}
				return _react2['default'].createElement(
					'div',
					{ className: 'title-con' },
					titleInfo,
					titleIcon
				);
			};
	
			_this.componentDidMount = function () {
				setTimeout(function () {
					_this.setState({
						treeData: [{
							name: 'pNode 01',
							key: '0-0',
							children: [{
								name: 'leaf 0-0-0',
								key: '0-0-0'
							}, {
								name: 'leaf 0-0-1',
								key: '0-0-1'
							}]
						}, {
							name: 'pNode 02',
							key: '0-1',
							children: [{
								name: 'leaf 0-1-0',
								key: '0-1-0'
							}, {
								name: 'leaf 0-1-1',
								key: '0-1-1'
							}]
						}, {
							name: 'pNode 03',
							key: '0-2',
							isLeaf: true
						}]
					});
				}, 100);
			};
	
			_this.state = {
				treeData: [],
				isHover: "",
				editKey: ""
			};
	
			return _this;
		}
	
		Demo8.prototype.render = function render() {
			var _this2 = this;
	
			var loop = function loop(data) {
				return data.map(function (item) {
					if (item.children) {
						return _react2['default'].createElement(
							TreeNode,
							{ title: _this2.renderTreeTitle(item), key: item.key },
							loop(item.children)
						);
					}
					return _react2['default'].createElement(TreeNode, { title: _this2.renderTreeTitle(item), key: item.key, isLeaf: item.isLeaf, disabled: item.key === '0-0-0' });
				});
			};
			var treeNodes = loop(this.state.treeData);
			return _react2['default'].createElement(
				_src2['default'],
				{ onMouseLeave: this.onMouseLeave, onMouseEnter: this.onMouseEnter, className: 'myCls' },
				treeNodes
			);
		};
	
		return Demo8;
	}(_react.Component);
	
	exports['default'] = Demo8;
	module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(85);
	
	var _src2 = _interopRequireDefault(_src);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 连接线Tree
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TreeNode = _src2['default'].TreeNode;
	
	var Demo9 = function (_Component) {
		_inherits(Demo9, _Component);
	
		function Demo9(props) {
			_classCallCheck(this, Demo9);
	
			var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
			var keys = _this.props.keys;
			_this.state = {
				defaultExpandedKeys: keys
			};
	
			return _this;
		}
	
		Demo9.prototype.render = function render() {
			return _react2['default'].createElement(
				_src2['default'],
				{ className: 'myCls', showLine: true, checkable: true, defaultExpandAll: true },
				_react2['default'].createElement(
					TreeNode,
					{ title: 'parent 1', key: '0-0' },
					_react2['default'].createElement(
						TreeNode,
						{ title: 'parent 1-0', key: '0-0-0' },
						_react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-0-0' }),
						_react2['default'].createElement(TreeNode, { title: 'leaf', key: '0-0-0-1' })
					),
					_react2['default'].createElement(
						TreeNode,
						{ title: 'parent 1-1', key: '0-0-1' },
						_react2['default'].createElement(TreeNode, { title: _react2['default'].createElement(
								'span',
								null,
								'sss'
							), key: '0-0-1-0' })
					)
				)
			);
		};
	
		return Demo9;
	}(_react.Component);
	
	exports['default'] = Demo9;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map