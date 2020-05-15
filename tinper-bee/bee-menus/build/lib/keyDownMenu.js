'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = keyDownMenu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// const propTypes = {
//     rowsInView: PropTypes.number.isRequired,
// }
// const defaultProps = {
//     data: undefined,
//     height: 40,//默认行高
//     rowsInView:25
// }

function keyDownMenu(Menus) {
  return function (_Component) {
    _inherits(KeyDownMenu, _Component);

    function KeyDownMenu(props) {
      _classCallCheck(this, KeyDownMenu);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props));

      _this.getOpenKeys = function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var defaultKeys = _this.props.defaultOpenKeys ? [].concat(_toConsumableArray(_this.props.defaultOpenKeys)) : [];
        var keys = _this.props.openKeys ? [].concat(_toConsumableArray(_this.props.openKeys), _toConsumableArray(defaultKeys)) : [].concat(_toConsumableArray(defaultKeys));
        if (key != '') {
          keys.push(keys);
        }
        return keys;
      };

      _this.onKeyDown = function (e, item) {
        var _key = item._key;

        var keyCode = e.keyCode;
        _this.setState({
          openKeys: _this.getOpenKeys()
        });
        // openKeys={['demo3sub1','demo3sub4']}

        console.log("----gaojie---onKeyDown -- lib ---- ");
        console.log(e.target);
        console.log(item);
      };

      _this.onSelect = function (_ref) {
        var item = _ref.item,
            key = _ref.key,
            selectedKeys = _ref.selectedKeys;

        console.log(key + ' selected'); //获取key
        // let currentObject = {};
        // currentObject.value = item.props.children; //获取选中对象的数据
        // currentObject.key = item.props.eventKey;
        // console.log(currentObject);
        _this.setState({
          openKeys: _this.getOpenKeys(key)
        });
      };

      _this.dataMap = {};
      _this.getChildToMap(_this.props.children);
      _this.state = {
        openKeys: _this.getOpenKeys()
      };
      return _this;
    }

    KeyDownMenu.prototype.getChildToMap = function getChildToMap(childrens) {
      var _this2 = this;

      childrens.forEach(function (element) {
        _this2.dataMap[element.key] = element;
        var itemChildren = element.props.children;
        if (itemChildren && Array.isArray(itemChildren) && itemChildren.length > 0) {
          return _this2.getChildToMap(itemChildren);
        }
      });
      return this.dataMap;
    };

    KeyDownMenu.prototype.render = function render() {
      var openKeys = this.props.openKeys;

      var _openKeys = openKeys ? openKeys : [];
      console.log("----openKeys---- ", openKeys);
      return _react2["default"].createElement(Menus, _extends({}, this.props, { onKeyDown: this.onKeyDown,
        openKeys: ['demo3sub1', 'demo3sub4'],
        onClick: this.onSelect
        // openKeys={_openKeys} 
      }));
    };

    return KeyDownMenu;
  }(_react.Component);
  // KeyDownMenu.defaultProps = defaultProps;
  // KeyDownMenu.propTypes = propTypes;
}
module.exports = exports['default'];