'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeAnimate = require('bee-animate');

var _beeAnimate2 = _interopRequireDefault(_beeAnimate);

var _PureRenderMixin = require('./PureRenderMixin');

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _index = require('./index');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _beeCheckbox = require('bee-checkbox');

var _beeCheckbox2 = _interopRequireDefault(_beeCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false,
  render: noop
};
function isRenderResultPlainObject(result) {
  return result && !_react2["default"].isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

var TransferList = function (_React$Component) {
  _inherits(TransferList, _React$Component);

  function TransferList(props) {
    _classCallCheck(this, TransferList);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.matchFilter = function (text, item) {
      var _this$props = _this.props,
          filter = _this$props.filter,
          filterOption = _this$props.filterOption;

      if (filterOption) {
        return filterOption(filter, item);
      }
      return text.indexOf(filter) >= 0;
    };

    _this.handleSelect = function (selectedItem) {
      var checkedKeys = _this.props.checkedKeys;

      var result = checkedKeys.some(function (key) {
        return key === selectedItem.key;
      });
      _this.props.handleSelect(selectedItem, !result);
    };

    _this.handleFilter = function (e) {
      _this.props.handleFilter(e);
    };

    _this.handleClear = function () {
      _this.props.handleClear();
    };

    _this.renderItem = function (item) {
      var _this$props$render = _this.props.render,
          render = _this$props$render === undefined ? noop : _this$props$render;

      var renderResult = render(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult
      };
    };

    _this.state = {
      mounted: false
    };
    return _this;
  }

  TransferList.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timer = setTimeout(function () {
      _this2.setState({
        mounted: true
      });
    }, 0);
  };

  TransferList.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  TransferList.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _PureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
  };

  TransferList.prototype.getCheckStatus = function getCheckStatus(filteredDataSource) {
    var checkedKeys = this.props.checkedKeys;

    if (checkedKeys.length === 0) {
      return 'none';
    } else if (filteredDataSource.every(function (item) {
      return checkedKeys.indexOf(item.key) >= 0;
    })) {
      return 'all';
    }
    return 'part';
  };

  TransferList.prototype.renderCheckbox = function renderCheckbox(_ref) {
    var _classNames,
        _this3 = this;

    var prefixCls = _ref.prefixCls,
        filteredDataSource = _ref.filteredDataSource,
        checked = _ref.checked,
        checkPart = _ref.checkPart,
        disabled = _ref.disabled,
        checkable = _ref.checkable;

    var checkAll = !checkPart && checked;
    prefixCls = "u";
    var checkboxCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-checkbox-indeterminate', checkPart), _defineProperty(_classNames, prefixCls + '-checkbox-disabled', disabled), _classNames));
    return _react2["default"].createElement(
      'span',
      {
        className: 'u-checkbox-wrapper'
      },
      _react2["default"].createElement(_beeCheckbox2["default"], {
        onChange: function onChange() {
          return _this3.props.handleSelectAll(filteredDataSource, checkAll);
        },
        className: checkboxCls,
        checked: checkAll
      })
    );
  };

  TransferList.prototype.render = function render() {
    var _this4 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        dataSource = _props.dataSource,
        titleText = _props.titleText,
        filter = _props.filter,
        checkedKeys = _props.checkedKeys,
        lazy = _props.lazy,
        filterOption = _props.filterOption,
        _props$body = _props.body,
        body = _props$body === undefined ? noop : _props$body,
        _props$footer = _props.footer,
        footer = _props$footer === undefined ? noop : _props$footer,
        showSearch = _props.showSearch,
        _props$render = _props.render,
        render = _props$render === undefined ? noop : _props$render,
        style = _props.style;
    var _props2 = this.props,
        searchPlaceholder = _props2.searchPlaceholder,
        notFoundContent = _props2.notFoundContent;

    // Custom Layout

    var footerDom = footer((0, _objectAssign2["default"])({}, this.props));
    var bodyDom = body((0, _objectAssign2["default"])({}, this.props));

    var listCls = (0, _classnames2["default"])(prefixCls, _defineProperty({}, prefixCls + '-with-footer', !!footerDom));

    var filteredDataSource = [];
    var totalDataSource = [];
    var showItems = dataSource.map(function (item) {
      var _renderItem = _this4.renderItem(item),
          renderedText = _renderItem.renderedText,
          renderedEl = _renderItem.renderedEl;

      if (filter && filter.trim() && !_this4.matchFilter(renderedText, item)) {
        return null;
      }

      // all show items
      totalDataSource.push(item);

      if (!item.disabled) {
        filteredDataSource.push(item);
      }

      var checked = checkedKeys.indexOf(item.key) >= 0;
      return _react2["default"].createElement(_item2["default"], {
        key: item.key,
        item: item,
        lazy: lazy,
        render: render,
        renderedText: renderedText,
        renderedEl: renderedEl,
        filter: filter,
        filterOption: filterOption,
        checked: checked,
        prefixCls: prefixCls,
        onClick: _this4.handleSelect
      });
    });

    var unit = '';
    var antLocale = this.context.antLocale;
    if (antLocale && antLocale.Transfer) {
      var transferLocale = antLocale.Transfer;
      unit = dataSource.length > 1 ? transferLocale.itemsUnit : transferLocale.itemUnit;
      searchPlaceholder = searchPlaceholder || transferLocale.searchPlaceholder;
      notFoundContent = notFoundContent || transferLocale.notFoundContent;
    }

    var checkStatus = this.getCheckStatus(filteredDataSource);
    var outerPrefixCls = prefixCls.replace('-list', '');
    var search = showSearch ? _react2["default"].createElement(
      'div',
      { className: prefixCls + '-body-search-wrapper' },
      _react2["default"].createElement(_search2["default"], {
        prefixCls: prefixCls + '-search',
        onChange: this.handleFilter,
        handleClear: this.handleClear,
        placeholder: searchPlaceholder || 'Search',
        value: filter
      })
    ) : null;

    var listBody = bodyDom || _react2["default"].createElement(
      'div',
      { className: showSearch ? prefixCls + '-body ' + prefixCls + '-body-with-search' : prefixCls + '-body' },
      search,
      _react2["default"].createElement(
        _beeAnimate2["default"],
        {
          component: 'ul',
          className: prefixCls + '-content',
          transitionName: this.state.mounted ? prefixCls + '-content-item-highlight' : '',
          transitionLeave: false
        },
        showItems
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-body-not-found' },
        notFoundContent || 'Not Found'
      )
    );

    var listFooter = footerDom ? _react2["default"].createElement(
      'div',
      { className: prefixCls + '-footer' },
      footerDom
    ) : null;

    var renderedCheckbox = this.renderCheckbox({
      prefixCls: outerPrefixCls,
      checked: checkStatus === 'all',
      checkPart: checkStatus === 'part',
      checkable: _react2["default"].createElement('span', { className: outerPrefixCls + '-checkbox-inner' }),
      filteredDataSource: filteredDataSource,
      disabled: false
    });

    return _react2["default"].createElement(
      'div',
      { className: listCls, style: style },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-header' },
        renderedCheckbox,
        _react2["default"].createElement(
          'span',
          { className: prefixCls + '-header-selected' },
          _react2["default"].createElement(
            'span',
            null,
            (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') + totalDataSource.length,
            ' ',
            unit
          ),
          _react2["default"].createElement(
            'span',
            { className: prefixCls + '-header-title' },
            titleText
          )
        )
      ),
      listBody,
      listFooter
    );
  };

  return TransferList;
}(_react2["default"].Component);

TransferList.defaultProps = defaultProps;
exports["default"] = TransferList;
module.exports = exports['default'];