'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _util = require('./util');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var reorder = function reorder(list, startIndex, endIndex) {
  var result = Array.from(list);

  var _result$splice = result.splice(startIndex, 1),
      _result$splice2 = _slicedToArray(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(endIndex, 0, removed);

  return result;
};

var Vertical = function (_Component) {
  _inherits(Vertical, _Component);

  function Vertical(props) {
    _classCallCheck(this, Vertical);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onDragEnd = function (result) {
      if (!result.destination) {
        return;
      }
      var items = reorder(_this.state.items, result.source.index, result.destination.index);

      _this.setState({
        items: items
      });
      _this.props.onStop(result, items);
    };

    _this.onDragStart = function (result) {
      _this.props.onStart(result, _this.state.items);
    };

    _this.state = {
      items: _this.props.list || []
    };
    return _this;
  }

  Vertical.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!(0, _lodash2["default"])(this.state.items, nextProps.list)) {
      this.setState({
        items: nextProps.list
      });
    }
  };

  Vertical.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        onStart = _props.onStart,
        onDrag = _props.onDrag,
        onStop = _props.onStop,
        onDragUpdate = _props.onDragUpdate,
        dropClass = _props.dropClass,
        dropOverClass = _props.dropOverClass,
        dragClass = _props.dragClass,
        dragingClass = _props.dragingClass,
        showKey = _props.showKey,
        type = _props.type;


    return _react2["default"].createElement(
      _reactBeautifulDnd.DragDropContext,
      { onDragEnd: this.onDragEnd, onDragStart: this.onDragStart, onDragUpdate: onDragUpdate },
      _react2["default"].createElement(
        _reactBeautifulDnd.Droppable,
        { droppableId: 'droppable', direction: type },
        function (provided, snapshot) {
          return _react2["default"].createElement(
            'div',
            {
              ref: provided.innerRef,
              className: (0, _classnames2["default"])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDraggingOver).drop))
            },
            _this2.state.items.map(function (item, index) {
              return _react2["default"].createElement(
                _reactBeautifulDnd.Draggable,
                { key: index, draggableId: '' + index, index: index },
                function (provided, snapshot) {
                  return _react2["default"].createElement(
                    'div',
                    _extends({
                      ref: provided.innerRef
                    }, provided.draggableProps, provided.dragHandleProps, {
                      className: (0, _classnames2["default"])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDragging).drag)),
                      style: _extends({}, provided.draggableProps.style)
                    }),
                    showKey ? item[showKey] : item
                  );
                }
              );
            }),
            provided.placeholder
          );
        }
      )
    );
  };

  return Vertical;
}(_react.Component);

exports["default"] = Vertical;
module.exports = exports['default'];