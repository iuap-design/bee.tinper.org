'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

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

/**
 * Moves an item from one list to another list.
 */
var move = function move(source, destination, droppableSource, droppableDestination) {
    var sourceClone = Array.from(source);
    var destClone = Array.from(destination);

    var _sourceClone$splice = sourceClone.splice(droppableSource.index, 1),
        _sourceClone$splice2 = _slicedToArray(_sourceClone$splice, 1),
        removed = _sourceClone$splice2[0];

    destClone.splice(droppableDestination.index, 0, removed);

    var result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

var Between = function (_Component) {
    _inherits(Between, _Component);

    function Between(props) {
        _classCallCheck(this, Between);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.id2List = {
            droppable: 'items',
            droppable2: 'selected'
        };

        _this.getList = function (id) {
            return _this.state[_this.id2List[id]];
        };

        _this.onDragEnd = function (result) {
            console.log(result);
            var source = result.source,
                destination = result.destination;

            // dropped outside the list

            if (!destination) {
                return;
            }
            var list = _this.state.items;
            var otherList = _this.state.selected;

            if (source.droppableId === destination.droppableId) {
                var items = reorder(_this.getList(source.droppableId), source.index, destination.index);

                var state = { items: items };
                list = items;

                if (source.droppableId === 'droppable2') {
                    state = { selected: items };
                    otherList = items;
                    list = _this.state.items;
                }
                _this.setState(state);
            } else {
                var _result = move(_this.getList(source.droppableId), _this.getList(destination.droppableId), source, destination);

                _this.setState({
                    items: _result.droppable,
                    selected: _result.droppable2
                });
                list = _result.droppable;
                otherList = _result.droppable2;
            }
            _this.props.onStop(result, {
                list: list,
                otherList: otherList
            });
        };

        _this.onDragStart = function (result) {
            _this.props.onStart(result, {
                list: _this.state.list,
                otherList: _this.state.selected
            });
        };

        _this.state = {
            items: _this.props.list,
            selected: _this.props.otherList
        };
        return _this;
    }

    Between.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!(0, _lodash2["default"])(this.state.items, nextProps.list)) {
            this.setState({
                items: nextProps.list
            });
        }
        if (!(0, _lodash2["default"])(this.state.selected, nextProps.otherList)) {
            this.setState({
                selected: nextProps.otherList
            });
        }
    };

    Between.prototype.render = function render() {
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
            'div',
            { className: (0, _classnames2["default"])({
                    'u-drag-between': type == 'betweenVertical',
                    'u-drag-between u-drag-between-horizontal': type == 'betweenHorizontal'

                }) },
            _react2["default"].createElement(
                _reactBeautifulDnd.DragDropContext,
                { onDragEnd: this.onDragEnd, onDragStart: this.onDragStart, onDragUpdate: onDragUpdate },
                _react2["default"].createElement(
                    _reactBeautifulDnd.Droppable,
                    { droppableId: 'droppable', direction: type == 'betweenVertical' ? 'vertical' : 'horizontal' },
                    function (provided, snapshot) {
                        return _react2["default"].createElement(
                            'div',
                            {
                                ref: provided.innerRef,
                                className: (0, _classnames2["default"])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDraggingOver).drop)) },
                            _this2.state.items.map(function (item, index) {
                                return _react2["default"].createElement(
                                    _reactBeautifulDnd.Draggable,
                                    {
                                        key: '1' + index,
                                        draggableId: '1' + index,
                                        index: index },
                                    function (provided, snapshot) {
                                        return _react2["default"].createElement(
                                            'div',
                                            _extends({
                                                ref: provided.innerRef
                                            }, provided.draggableProps, provided.dragHandleProps, {
                                                className: (0, _classnames2["default"])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDragging).drag)),
                                                style: _extends({}, provided.draggableProps.style) }),
                                            showKey ? item[showKey] : item
                                        );
                                    }
                                );
                            }),
                            provided.placeholder
                        );
                    }
                ),
                _react2["default"].createElement(
                    _reactBeautifulDnd.Droppable,
                    { droppableId: 'droppable2', direction: type == 'betweenVertical' ? 'vertical' : 'horizontal' },
                    function (provided, snapshot) {
                        return _react2["default"].createElement(
                            'div',
                            {
                                ref: provided.innerRef,
                                className: (0, _classnames2["default"])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDraggingOver).drop)) },
                            _this2.state.selected.map(function (item, index) {
                                return _react2["default"].createElement(
                                    _reactBeautifulDnd.Draggable,
                                    {
                                        key: '2' + index,
                                        draggableId: '2' + index,
                                        index: index },
                                    function (provided, snapshot) {
                                        return _react2["default"].createElement(
                                            'div',
                                            _extends({
                                                ref: provided.innerRef
                                            }, provided.draggableProps, provided.dragHandleProps, {
                                                className: (0, _classnames2["default"])(_extends({}, (0, _util.getClass)(_this2.props, snapshot.isDragging).drag)),
                                                style: _extends({}, provided.draggableProps.style) }),
                                            showKey ? item[showKey] : item
                                        );
                                    }
                                );
                            }),
                            provided.placeholder
                        );
                    }
                )
            )
        );
    };

    return Between;
}(_react.Component);

exports["default"] = Between;
module.exports = exports['default'];