'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

var _TreeNode = require('./TreeNode');

var _TreeNode2 = _interopRequireDefault(_TreeNode);

var _openAnimation = require('./openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TreeProps = {
  showLine: _propTypes2["default"].bool,
  className: _propTypes2["default"].string,
  /** 是否支持多选 */
  multiple: _propTypes2["default"].bool,
  /** 是否自动展开父节点 */
  autoExpandParent: _propTypes2["default"].bool,
  /** checkable状态下节点选择完全受控（父子节点选中状态不再关联）*/
  checkStrictly: _propTypes2["default"].bool,
  /** 是否支持选中 */
  checkable: _propTypes2["default"].bool,
  /** 默认展开所有树节点 */
  defaultExpandAll: _propTypes2["default"].bool,
  /** 默认展开指定的树节点 */
  defaultExpandedKeys: _propTypes2["default"].array,
  /** （受控）展开指定的树节点 */
  expandedKeys: _propTypes2["default"].array,
  /** （受控）选中复选框的树节点 */
  checkedKeys: _propTypes2["default"].oneOfType([_propTypes2["default"].array, _propTypes2["default"].object]),
  /** 默认选中复选框的树节点 */
  defaultCheckedKeys: _propTypes2["default"].array,
  /** （受控）设置选中的树节点 */
  selectedKeys: _propTypes2["default"].array,
  /** 默认选中的树节点 */
  defaultSelectedKeys: _propTypes2["default"].array,
  /** 展开/收起节点时触发 */
  onExpand: _propTypes2["default"].func,
  /** 点击复选框触发 */
  onCheck: _propTypes2["default"].func,
  /** 点击树节点触发 */
  onSelect: _propTypes2["default"].func,
  /** filter some AntTreeNodes as you need. it should return true */
  filterAntTreeNode: _propTypes2["default"].func,
  /** 异步加载数据 */
  loadData: _propTypes2["default"].func,
  /** 响应右键点击 */
  onRightClick: _propTypes2["default"].func,
  /** 设置节点可拖拽（IE>8）*/
  draggable: _propTypes2["default"].bool,
  /** 开始拖拽时调用 */
  onDragStart: _propTypes2["default"].func,
  /** dragenter 触发时调用 */
  onDragEnter: _propTypes2["default"].func,
  /** dragover 触发时调用 */
  onDragOver: _propTypes2["default"].func,
  /** dragleave 触发时调用 */
  onDragLeave: _propTypes2["default"].func,
  /** drop 触发时调用 */
  onDrop: _propTypes2["default"].func,
  style: _react2["default"].CSSProperties,
  prefixCls: _propTypes2["default"].string,
  filterTreeNode: _propTypes2["default"].func
};

var defaultProps = {
  prefixCls: 'u-tree',
  checkable: false,
  showIcon: false,
  openAnimation: _openAnimation2["default"]
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
    return _react2["default"].createElement(
      _Tree2["default"],
      _extends({}, props, {
        checkable: checkable ? _react2["default"].createElement('span', { className: props.prefixCls + '-checkbox-inner' }) : checkable
      }),
      this.props.children
    );
  };

  return Tree;
}(_react.Component);

Tree.TreeNode = _TreeNode2["default"];
Tree.TreeProps = TreeProps;
Tree.defaultProps = defaultProps;
exports["default"] = Tree;
module.exports = exports['default'];