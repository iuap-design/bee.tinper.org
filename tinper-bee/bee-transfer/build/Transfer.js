'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var defaultProps = {
  dataSource: [],
  render: noop,
  showSearch: false
};

var propTypes = {
  prefixCls: _propTypes2["default"].string,
  dataSource: _propTypes2["default"].array,
  render: _propTypes2["default"].func,
  targetKeys: _propTypes2["default"].array,
  onChange: _propTypes2["default"].func,
  height: _propTypes2["default"].number,
  listStyle: _propTypes2["default"].object,
  className: _propTypes2["default"].string,
  titles: _propTypes2["default"].array,
  operations: _propTypes2["default"].array,
  showSearch: _propTypes2["default"].bool,
  filterOption: _propTypes2["default"].func,
  searchPlaceholder: _propTypes2["default"].string,
  notFoundContent: _propTypes2["default"].node,
  body: _propTypes2["default"].func,
  footer: _propTypes2["default"].func,
  rowKey: _propTypes2["default"].func,
  lazy: _propTypes2["default"].object
};

var defaultTitles = ['', ''];

var Transfer = function (_React$Component) {
  _inherits(Transfer, _React$Component);

  function Transfer(props) {
    _classCallCheck(this, Transfer);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var _props$selectedKeys = props.selectedKeys,
        selectedKeys = _props$selectedKeys === undefined ? [] : _props$selectedKeys,
        _props$targetKeys = props.targetKeys,
        targetKeys = _props$targetKeys === undefined ? [] : _props$targetKeys;

    _this.state = {
      leftFilter: '',
      rightFilter: '',
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) === -1;
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) > -1;
      })
    };
    return _this;
  }

  Transfer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _state = this.state,
        sourceSelectedKeys = _state.sourceSelectedKeys,
        targetSelectedKeys = _state.targetSelectedKeys;

    if (nextProps.targetKeys !== this.props.targetKeys || nextProps.dataSource !== this.props.dataSource) {
      var existInDateSourcekey = function existInDateSourcekey(key) {
        return dataSource.filter(function (item) {
          return item.key === key;
        }).length;
      };
      // clear key nolonger existed
      // clear checkedKeys according to targetKeys


      // clear cached splited dataSource
      this.splitedDataSource = null;

      var dataSource = nextProps.dataSource,
          _nextProps$targetKeys = nextProps.targetKeys,
          targetKeys = _nextProps$targetKeys === undefined ? [] : _nextProps$targetKeys;
      this.setState({
        sourceSelectedKeys: sourceSelectedKeys.filter(existInDateSourcekey).filter(function (data) {
          return targetKeys.filter(function (key) {
            return key === data;
          }).length === 0;
        }),
        targetSelectedKeys: targetSelectedKeys.filter(existInDateSourcekey).filter(function (data) {
          return targetKeys.filter(function (key) {
            return key === data;
          }).length > 0;
        })
      });
    }
    if (nextProps.selectedKeys) {
      var _targetKeys = nextProps.targetKeys;
      this.setState({
        sourceSelectedKeys: nextProps.selectedKeys.filter(function (key) {
          return _targetKeys.indexOf(key) === -1;
        }),
        targetSelectedKeys: nextProps.selectedKeys.filter(function (key) {
          return _targetKeys.indexOf(key) > -1;
        })
      });
    }
  };

  Transfer.prototype.splitDataSource = function splitDataSource() {
    if (this.splitedDataSource) {
      return this.splitedDataSource;
    }

    var _props = this.props,
        rowKey = _props.rowKey,
        dataSource = _props.dataSource,
        _props$targetKeys2 = _props.targetKeys,
        targetKeys = _props$targetKeys2 === undefined ? [] : _props$targetKeys2;

    if (rowKey) {
      dataSource.forEach(function (record) {
        record.key = rowKey(record);
      });
    }

    var leftDataSource = dataSource.filter(function (_ref) {
      var key = _ref.key;
      return targetKeys.indexOf(key) === -1;
    });
    var rightDataSource = [];
    targetKeys.forEach(function (targetKey) {
      var targetItem = dataSource.filter(function (record) {
        return record.key === targetKey;
      })[0];
      if (targetItem) {
        rightDataSource.push(targetItem);
      }
    });

    this.splitedDataSource = {
      leftDataSource: leftDataSource,
      rightDataSource: rightDataSource
    };

    return this.splitedDataSource;
  };

  Transfer.prototype.handleSelectChange = function handleSelectChange(direction, holder) {
    var _state2 = this.state,
        sourceSelectedKeys = _state2.sourceSelectedKeys,
        targetSelectedKeys = _state2.targetSelectedKeys;

    var onSelectChange = this.props.onSelectChange;
    if (!onSelectChange) {
      return;
    }

    if (direction === 'left') {
      onSelectChange(holder, targetSelectedKeys);
    } else {
      onSelectChange(sourceSelectedKeys, holder);
    }
  };

  Transfer.prototype.getSelectedKeysName = function getSelectedKeysName(direction) {
    return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
  };

  Transfer.prototype.render = function render() {
    var _props2 = this.props,
        _props2$prefixCls = _props2.prefixCls,
        prefixCls = _props2$prefixCls === undefined ? 'u-transfer' : _props2$prefixCls,
        _props2$operations = _props2.operations,
        operations = _props2$operations === undefined ? [] : _props2$operations,
        showSearch = _props2.showSearch,
        notFoundContent = _props2.notFoundContent,
        searchPlaceholder = _props2.searchPlaceholder,
        body = _props2.body,
        footer = _props2.footer,
        listStyle = _props2.listStyle,
        _props2$className = _props2.className,
        className = _props2$className === undefined ? '' : _props2$className,
        filterOption = _props2.filterOption,
        render = _props2.render,
        lazy = _props2.lazy;
    var _state3 = this.state,
        leftFilter = _state3.leftFilter,
        rightFilter = _state3.rightFilter,
        sourceSelectedKeys = _state3.sourceSelectedKeys,
        targetSelectedKeys = _state3.targetSelectedKeys;

    var _splitDataSource = this.splitDataSource(this.props),
        leftDataSource = _splitDataSource.leftDataSource,
        rightDataSource = _splitDataSource.rightDataSource;

    var leftActive = targetSelectedKeys.length > 0;
    var rightActive = sourceSelectedKeys.length > 0;

    var cls = (0, _classnames2["default"])(className, prefixCls);

    var titles = this.getTitles();
    return _react2["default"].createElement(
      'div',
      { className: cls },
      _react2["default"].createElement(_list2["default"], {
        titleText: titles[0],
        dataSource: leftDataSource,
        filter: leftFilter,
        filterOption: filterOption,
        style: listStyle,
        checkedKeys: sourceSelectedKeys,
        handleFilter: this.handleLeftFilter,
        handleClear: this.handleLeftClear,
        handleSelect: this.handleLeftSelect,
        handleSelectAll: this.handleLeftSelectAll,
        render: render,
        showSearch: showSearch,
        searchPlaceholder: searchPlaceholder,
        notFoundContent: notFoundContent,
        body: body,
        footer: footer,
        prefixCls: prefixCls + '-list',
        lazy: lazy
      }),
      _react2["default"].createElement(_operation2["default"], {
        rightActive: rightActive,
        rightArrowText: operations[0],
        moveToRight: this.moveToRight,
        leftActive: leftActive,
        leftArrowText: operations[1],
        moveToLeft: this.moveToLeft,
        className: prefixCls + '-operation'
      }),
      _react2["default"].createElement(_list2["default"], {
        titleText: titles[1],
        dataSource: rightDataSource,
        filter: rightFilter,
        filterOption: filterOption,
        style: listStyle,
        checkedKeys: targetSelectedKeys,
        handleFilter: this.handleRightFilter,
        handleClear: this.handleRightClear,
        handleSelect: this.handleRightSelect,
        handleSelectAll: this.handleRightSelectAll,
        render: render,
        showSearch: showSearch,
        searchPlaceholder: searchPlaceholder,
        notFoundContent: notFoundContent,
        body: body,
        footer: footer,
        prefixCls: prefixCls + '-list',
        lazy: lazy
      })
    );
  };

  return Transfer;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.moveTo = function (direction) {
    var _props3 = _this2.props,
        _props3$targetKeys = _props3.targetKeys,
        targetKeys = _props3$targetKeys === undefined ? [] : _props3$targetKeys,
        onChange = _props3.onChange;
    var _state4 = _this2.state,
        sourceSelectedKeys = _state4.sourceSelectedKeys,
        targetSelectedKeys = _state4.targetSelectedKeys;

    var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
    // move items to target box
    var newTargetKeys = direction === 'right' ? moveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
      return moveKeys.indexOf(targetKey) === -1;
    });

    // empty checked keys
    var oppositeDirection = direction === 'right' ? 'left' : 'right';
    _this2.setState(_defineProperty({}, _this2.getSelectedKeysName(oppositeDirection), []));
    _this2.handleSelectChange(oppositeDirection, []);

    if (onChange) {
      onChange(newTargetKeys, direction, moveKeys);
    }
  };

  this.moveToLeft = function () {
    return _this2.moveTo('left');
  };

  this.moveToRight = function () {
    return _this2.moveTo('right');
  };

  this.handleSelectAll = function (direction, filteredDataSource, checkAll) {
    var holder = checkAll ? [] : filteredDataSource.map(function (item) {
      return item.key;
    });
    _this2.handleSelectChange(direction, holder);

    if (!_this2.props.selectedKeys) {
      _this2.setState(_defineProperty({}, _this2.getSelectedKeysName(direction), holder));
    }
  };

  this.handleLeftSelectAll = function (filteredDataSource, checkAll) {
    return _this2.handleSelectAll('left', filteredDataSource, checkAll);
  };

  this.handleRightSelectAll = function (filteredDataSource, checkAll) {
    return _this2.handleSelectAll('right', filteredDataSource, checkAll);
  };

  this.handleFilter = function (direction, e) {
    _this2.setState(_defineProperty({}, direction + 'Filter', e));
  };

  this.handleLeftFilter = function (e) {
    return _this2.handleFilter('left', e);
  };

  this.handleRightFilter = function (e) {
    return _this2.handleFilter('right', e);
  };

  this.handleClear = function (direction) {
    _this2.setState(_defineProperty({}, direction + 'Filter', ''));
  };

  this.handleLeftClear = function () {
    return _this2.handleClear('left');
  };

  this.handleRightClear = function () {
    return _this2.handleClear('right');
  };

  this.handleSelect = function (direction, selectedItem, checked) {
    var _state5 = _this2.state,
        sourceSelectedKeys = _state5.sourceSelectedKeys,
        targetSelectedKeys = _state5.targetSelectedKeys;

    var holder = direction === 'left' ? [].concat(_toConsumableArray(sourceSelectedKeys)) : [].concat(_toConsumableArray(targetSelectedKeys));
    var index = holder.indexOf(selectedItem.key);
    if (index > -1) {
      holder.splice(index, 1);
    }
    if (checked) {
      holder.push(selectedItem.key);
    }
    _this2.handleSelectChange(direction, holder);

    if (!_this2.props.selectedKeys) {
      _this2.setState(_defineProperty({}, _this2.getSelectedKeysName(direction), holder));
    }
  };

  this.handleLeftSelect = function (selectedItem, checked) {
    return _this2.handleSelect('left', selectedItem, checked);
  };

  this.handleRightSelect = function (selectedItem, checked) {
    return _this2.handleSelect('right', selectedItem, checked);
  };

  this.getTitles = function () {
    if (_this2.props.titles) {
      return _this2.props.titles;
    }
    if (_this2.context && _this2.context.antLocale && _this2.context.antLocale.Transfer) {
      return _this2.context.antLocale.Transfer.titles || [];
    }
    return defaultTitles;
  };
};

Transfer.List = Transfer.List;
Transfer.Operation = Transfer.Operation;
Transfer.Search = Transfer.Search;

Transfer.propTypes = propTypes;
Transfer.defaultProps = defaultProps;

exports["default"] = Transfer;
module.exports = exports['default'];