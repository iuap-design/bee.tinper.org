'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _SortList = require('./SortList');

var _SortList2 = _interopRequireDefault(_SortList);

var _Between = require('./Between');

var _Between2 = _interopRequireDefault(_Between);

var _GridLayout = require('./GridLayout');

var _GridLayout2 = _interopRequireDefault(_GridLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    onStart: _propTypes2["default"].func,
    onDrag: _propTypes2["default"].func,
    onStop: _propTypes2["default"].func,
    onDragUpdate: _propTypes2["default"].func,
    dropClass: _propTypes2["default"].string,
    dropOverClass: _propTypes2["default"].string,
    dragClass: _propTypes2["default"].string,
    dragingClass: _propTypes2["default"].string,
    draggedClass: _propTypes2["default"].string,
    className: _propTypes2["default"].string,
    style: _propTypes2["default"].object,
    list: _propTypes2["default"].array,
    otherList: _propTypes2["default"].array,
    type: _propTypes2["default"].oneOf(['vertical', 'horizontal', 'betweenVertical', 'betweenHorizontal']),
    showKey: _propTypes2["default"].string

};
var defaultProps = {
    onStart: function onStart() {},
    onDrag: function onDrag() {},
    onStop: function onStop() {},
    onDragUpdate: function onDragUpdate() {},
    list: false,
    otherList: [],
    dropClass: '',
    dropOverClass: '',
    dragClass: '',
    dragingClass: '',
    draggedClass: '',
    type: 'vertical'
};

var Dnd = function (_Component) {
    _inherits(Dnd, _Component);

    function Dnd(props) {
        _classCallCheck(this, Dnd);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            items: _this.props.list || []
        };
        return _this;
    }

    Dnd.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (!(0, _lodash2["default"])(this.state.items, nextProps.list)) {
            this.setState({
                items: nextProps.list
            });
        }
    };

    Dnd.prototype.render = function render() {
        var _this2 = this;

        var self = this;
        var DndType = function DndType() {
            switch (_this2.props.type) {
                case 'vertical':
                    return _react2["default"].createElement(_SortList2["default"], _this2.props);
                    break;
                case 'horizontal':
                    return _react2["default"].createElement(_SortList2["default"], _this2.props);
                    break;
                case 'betweenVertical':
                    return _react2["default"].createElement(_Between2["default"], _this2.props);
                    break;
                case 'betweenHorizontal':
                    return _react2["default"].createElement(_Between2["default"], _this2.props);
                    break;
                default:
                    return _react2["default"].createElement(_SortList2["default"], _this2.props);
                    break;
            }
        };
        return _react2["default"].createElement(
            'div',
            null,
            self.state.items.length ? DndType() : _react2["default"].createElement(
                _reactDraggable2["default"],
                _extends({ defaultClassName: this.props.dragClass,
                    defaultClassNameDragging: this.props.dragingClass,
                    defaultClassNameDragged: this.props.draggedClass
                }, this.props),
                self.props.children
            )
        );
    };

    return Dnd;
}(_react.Component);

Dnd.propTypes = propTypes;
Dnd.defaultProps = defaultProps;
Dnd.Drag = _reactDraggable2["default"];
Dnd.DragDropContext = _reactBeautifulDnd.DragDropContext;
Dnd.Droppable = _reactBeautifulDnd.Droppable;
Dnd.Draggable = _reactBeautifulDnd.Draggable;
Dnd.GridLayout = _GridLayout2["default"];
exports["default"] = Dnd;
module.exports = exports['default'];