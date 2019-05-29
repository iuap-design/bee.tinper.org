'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeDnd = require('bee-dnd');

var _beeDnd2 = _interopRequireDefault(_beeDnd);

var _reResizable = require('re-resizable');

var _reResizable2 = _interopRequireDefault(_reResizable);

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
  minHeight: 150,
  minWidth: 200,
  clsPrefix: 'u-modal'
};

var ModalDialog = function (_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog() {
    var _temp, _this, _ret;

    _classCallCheck(this, ModalDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      original: {
        x: 0,
        y: 0
      },
      maxWidth: Number.MAX_SAFE_INTEGER,
      maxHeight: Number.MAX_SAFE_INTEGER
    }, _this.onStart = function () {
      var draggable = _this.props.draggable;

      return draggable;
    }, _this.onStop = function (e, delta) {
      _this.setState({
        original: {
          x: delta.x,
          y: delta.y
        }
      });
    }, _this.onResizeStart = function (e, dir, elementRef) {
      var onResizeStart = _this.props.onResizeStart;

      typeof onResizeStart === "function" && onResizeStart(e, dir, elementRef);
    }, _this.onResize = function (e, direction, elementRef, delta) {
      var onResize = _this.props.onResize;
      var original = _this.state.original;
      /* resize 之前的值 */

      var originX = original.x;
      var originY = original.y;

      /* 移动的位移 */
      var moveW = delta.width;
      var moveH = delta.height;

      /* 移动的位移 */
      var x = null,
          y = null;

      /* 处理上边缘 */
      if (/left/i.test(direction)) {
        x = originX - moveW;
        y = originY;
        _this.position = { x: x, y: y

          /* 处理左边缘 */
        };
      } else if (/top/i.test(direction)) {
        x = originX;
        y = originY - moveH;
        _this.position = { x: x, y: y };
      } else {
        _this.position = null;
      }

      if (x || y) {
        elementRef.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
      }
      if (delta.height) {
        _this.updateBodyH();
      }

      typeof onResize === "function" && onResize(e, direction, elementRef, delta);
    }, _this.onResizeStop = function (e, direction, elementRef, delta) {
      var onResizeStop = _this.props.onResizeStop;


      if (_this.position) {
        _this.setState({
          original: _this.position
        });
      }

      typeof onResizeStop === "function" && onResizeStop(e, direction, elementRef, delta);
    }, _this.updateBodyH = function () {
      var $resizable = _reactDom2["default"].findDOMNode(_this.resizable);
      var $header = $resizable.querySelector(".u-modal-header");
      var $body = $resizable.querySelector(".u-modal-body");
      var $footer = $resizable.querySelector(".u-modal-footer");

      var totalH = $resizable.style.height;
      totalH = Number(totalH.replace("px", ""));
      if ($header) {
        totalH -= $header.offsetHeight;
      }
      if ($footer) {
        totalH -= $footer.offsetHeight;
      }

      $body.style.height = totalH + 'px';
    }, _this.getMaxSizesFromProps = function () {
      var backDropW = _this.backdrop && _this.backdrop.offsetWidth ? _this.backdrop.offsetWidth : Number.MAX_SAFE_INTEGER;
      var backDropH = _this.backdrop && _this.backdrop.offsetHeight ? _this.backdrop.offsetHeight : Number.MAX_SAFE_INTEGER;

      var maxWidth = typeof _this.props.maxWidth === "undefined" ? backDropW : _this.props.maxWidth;
      var maxHeight = typeof _this.props.maxHeight === "undefined" ? backDropH : _this.props.maxHeight;
      return { maxWidth: maxWidth, maxHeight: maxHeight };
    }, _this.handleWH = function (value) {
      var size = value;
      if (typeof value === "string" && value.endsWith("px")) {
        size = Number(value.replace("px", ""));
      } else if (typeof Number(value) === "number" && !Number.isNaN(Number(value))) {
        size = Number(value);
      }
      return size;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ModalDialog.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.resizable) {
      var _getMaxSizesFromProps = this.getMaxSizesFromProps(),
          maxWidth = _getMaxSizesFromProps.maxWidth,
          maxHeight = _getMaxSizesFromProps.maxHeight;

      if (maxWidth != this.state.maxWidth) {
        this.setState({
          maxWidth: maxWidth,
          maxHeight: maxHeight
        });
      }
    }
  };

  /* 开始resize */


  /* resizing */


  /* resize 结束 */


  /**
   * 更新Modal.Body的高度
   */


  /**
   * 获取最大宽度和高度
   */


  ModalDialog.prototype.render = function render() {
    var _dialogClasses,
        _this2 = this;

    var _props = this.props,
        dialogClassName = _props.dialogClassName,
        className = _props.className,
        clsPrefix = _props.clsPrefix,
        size = _props.size,
        style = _props.style,
        contentStyle = _props.contentStyle,
        children = _props.children,
        draggable = _props.draggable,
        resizable = _props.resizable,
        resizeClassName = _props.resizeClassName,
        minHeight = _props.minHeight,
        minWidth = _props.minWidth,
        props = _objectWithoutProperties(_props, ['dialogClassName', 'className', 'clsPrefix', 'size', 'style', 'contentStyle', 'children', 'draggable', 'resizable', 'resizeClassName', 'minHeight', 'minWidth']);

    var _state = this.state,
        original = _state.original,
        maxWidth = _state.maxWidth,
        maxHeight = _state.maxHeight;


    var uClassName = _defineProperty({}, '' + clsPrefix, true);

    var modalStyle = { display: 'block' };

    var dialogClasses = (_dialogClasses = {}, _defineProperty(_dialogClasses, uClassName, false), _defineProperty(_dialogClasses, clsPrefix + '-dialog', true), _dialogClasses);
    if (size) {
      dialogClasses[clsPrefix + '-' + size] = true;
    }
    if (draggable) {
      dialogClasses[clsPrefix + '-draggable'] = true;
    }

    return _react2["default"].createElement(
      'div',
      _extends({}, props, {
        tabIndex: '-1',
        role: 'dialog',
        style: modalStyle,
        ref: function ref(_ref3) {
          return _this2.backdrop = _ref3;
        },
        className: (0, _classnames2["default"])(className, uClassName)
      }),
      _react2["default"].createElement(
        'div',
        { className: (0, _classnames2["default"])(dialogClassName, dialogClasses), style: style },
        _react2["default"].createElement(
          _beeDnd2["default"],
          {
            handle: '.dnd-handle',
            cancel: '.dnd-cancel',
            bounds: { top: -20 } //防止拖拽时，Header 被导航栏覆盖
            , onStart: this.onStart,
            onStop: this.onStop,
            position: original,
            list: []
          },
          resizable ? _react2["default"].createElement(
            _reResizable2["default"],
            {
              className: resizeClassName,
              ref: function ref(c) {
                if (c) {
                  _this2.resizable = c;
                }
              },
              onResizeStart: this.onResizeStart,
              onResize: this.onResize,
              onResizeStop: this.onResizeStop,
              minWidth: this.handleWH(minWidth),
              minHeight: this.handleWH(minHeight),
              maxWidth: this.handleWH(maxWidth),
              maxHeight: this.handleWH(maxHeight)
            },
            _react2["default"].createElement(
              'div',
              { style: _extends({}, contentStyle, { height: "100%" }), className: (0, _classnames2["default"])([clsPrefix + '-content']), role: 'document', ref: function ref(_ref) {
                  return _this2.resize = _ref;
                } },
              children
            )
          ) : _react2["default"].createElement(
            'div',
            { style: contentStyle, className: (0, _classnames2["default"])([clsPrefix + '-content']), role: 'document', ref: function ref(_ref2) {
                return _this2.resize = _ref2;
              } },
            children
          )
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