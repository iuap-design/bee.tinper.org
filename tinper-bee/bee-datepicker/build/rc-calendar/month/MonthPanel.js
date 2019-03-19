'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _MonthTable = require('./MonthTable');

var _MonthTable2 = _interopRequireDefault(_MonthTable);

var _DateInput = require('../date/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function goYear(direction) {
  var next = this.state.value.clone();
  next.add(direction, 'year');
  this.setAndChangeValue(next);
}

function noop() {}

var MonthPanel = function (_React$Component) {
  _inherits(MonthPanel, _React$Component);

  function MonthPanel(props) {
    _classCallCheck(this, MonthPanel);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.setAndChangeValue = function (value) {
      _this.setValue(value);
      _this.props.onChange(value);
    };

    _this.setAndSelectValue = function (value) {
      _this.setValue(value);
      _this.props.onSelect(value);
    };

    _this.setValue = function (value) {
      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }
    };

    _this.nextYear = goYear.bind(_this, 1);
    _this.previousYear = goYear.bind(_this, -1);
    _this.prefixCls = props.rootPrefixCls + '-month-panel';

    _this.state = {
      value: props.value || props.defaultValue
    };
    return _this;
  }

  MonthPanel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    var newState = {};

    if ('value' in nextProps) {
      newState = {
        value: nextProps.value
      };
    }

    return newState;
  };

  MonthPanel.prototype.render = function render() {
    var props = this.props;
    var value = this.state.value;
    var locale = props.locale,
        cellRender = props.cellRender,
        contentRender = props.contentRender,
        renderFooter = props.renderFooter,
        rootPrefixCls = props.rootPrefixCls;

    var year = value.year();
    var prefixCls = this.prefixCls;

    var footer = renderFooter && renderFooter('month');

    return _react2["default"].createElement(
      'div',
      { className: prefixCls, style: props.style },
      _react2["default"].createElement(
        'div',
        null,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2["default"].createElement('a', {
            className: prefixCls + '-prev-year-btn',
            role: 'button',
            onClick: this.previousYear,
            title: locale.previousYear
          }),
          _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-year-select',
              role: 'button',
              onClick: props.onYearPanelShow,
              title: locale.yearSelect
            },
            _react2["default"].createElement(
              'span',
              { className: prefixCls + '-year-select-content' },
              year
            ),
            _react2["default"].createElement(
              'span',
              { className: prefixCls + '-year-select-arrow' },
              'x'
            )
          ),
          _react2["default"].createElement('a', {
            className: prefixCls + '-next-year-btn',
            role: 'button',
            onClick: this.nextYear,
            title: locale.nextYear
          })
        ),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2["default"].createElement(_MonthTable2["default"], {
            disabledDate: props.disabledDate,
            onSelect: this.setAndSelectValue,
            locale: locale,
            value: value,
            cellRender: cellRender,
            contentRender: contentRender,
            prefixCls: prefixCls
          })
        ),
        footer && _react2["default"].createElement(
          'div',
          { className: prefixCls + '-footer' },
          footer
        )
      )
    );
  };

  return MonthPanel;
}(_react2["default"].Component);

MonthPanel.propTypes = {
  onChange: _propTypes2["default"].func,
  disabledDate: _propTypes2["default"].func,
  onSelect: _propTypes2["default"].func,
  renderFooter: _propTypes2["default"].func,
  rootPrefixCls: _propTypes2["default"].string,
  value: _propTypes2["default"].object,
  defaultValue: _propTypes2["default"].object
};
MonthPanel.defaultProps = {
  onChange: noop,
  onSelect: noop
};


(0, _reactLifecyclesCompat.polyfill)(MonthPanel);

exports["default"] = MonthPanel;
module.exports = exports['default'];