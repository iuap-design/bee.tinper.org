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

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var defaultProps = {
  dataSource: [],
  render: noop,
  showSearch: false,
  searchPlaceholder: 'Search',
  notFoundContent: 'Not Found',
  showCheckbox: true,
  draggable: false
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
  lazy: _propTypes2["default"].object,
  showCheckbox: _propTypes2["default"].bool,
  draggable: _propTypes2["default"].bool
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
      }),
      leftDataSource: [],
      rightDataSource: [],
      droppableId: ''
    };
    _this.cacheTargetKeys = [].concat(_toConsumableArray(targetKeys));
    return _this;
  }

  Transfer.prototype.componentDidMount = function componentDidMount() {
    this.splitDataSource();
  };

  Transfer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _state = this.state,
        sourceSelectedKeys = _state.sourceSelectedKeys,
        targetSelectedKeys = _state.targetSelectedKeys;

    if (nextProps.targetKeys !== this.props.targetKeys || nextProps.dataSource !== this.props.dataSource || nextProps.targetKeys !== this.cacheTargetKeys) {
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
      //异步加载时
      if (this.props.dataSource.length === 0) {
        this.splitDataSource(targetKeys, dataSource);
      }
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
  /**
   * 从dataSource中分离出leftDataSource和rightDataSource
   * @param {*} newTargetKeys 更新后的targetKeys
   * @param {*} newDataSource 异步加载数据源时，从nextProps中获取的dataSource
   */


  Transfer.prototype.splitDataSource = function splitDataSource(newTargetKeys, newDataSource) {
    // targetKeys：展示在右边列表的数据集
    if (this.splitedDataSource) {
      return this.splitedDataSource;
    }

    var rowKey = this.props.rowKey;

    var targetKeys = newTargetKeys || this.props.targetKeys;
    //异步加载数据源时/移除已选时
    var dataSource = newDataSource || this.props.dataSource;
    //TODO:移除已选时，不能自定义顺序
    // let dataSource = isMove ? this.props.dataSource : newDataSource || this.props.dataSource;
    if (rowKey) {
      dataSource.forEach(function (record) {
        record.key = rowKey(record);
      });
    }

    var leftDataSource = dataSource.filter(function (_ref) {
      var key = _ref.key;
      return targetKeys.indexOf(key) === -1;
    });
    var rightDataSource = dataSource.filter(function (_ref2) {
      var key = _ref2.key;
      return targetKeys.indexOf(key) > -1;
    });

    this.splitedDataSource = {
      leftDataSource: leftDataSource,
      rightDataSource: rightDataSource
    };
    this.setState({
      leftDataSource: leftDataSource,
      rightDataSource: rightDataSource
    });

    return this.splitedDataSource;
  };

  /**
   * 从dataSource中分离出leftDataSource和rightDataSource
   * @param {*} newTargetKeys 更新后的targetKeys
   * @param {*} newDataSource 移除已选操作时改变了顺序后的dataSource
   */


  Transfer.prototype.splitDataSource2 = function splitDataSource2(newTargetKeys, newDataSource) {
    // targetKeys：展示在右边列表的数据集
    if (this.splitedDataSource) {
      return this.splitedDataSource;
    }

    var rowKey = this.props.rowKey;

    var targetKeys = newTargetKeys || this.props.targetKeys;
    //异步加载数据源时/移除已选时
    var dataSource = newDataSource || this.props.dataSource;
    //TODO:移除已选时，不能自定义顺序
    // let dataSource = isMove ? this.props.dataSource : newDataSource || this.props.dataSource;
    if (rowKey) {
      newDataSource.forEach(function (record) {
        record.key = rowKey(record);
      });
      this.props.dataSource.forEach(function (record) {
        record.key = rowKey(record);
      });
    }

    var leftDataSource = this.props.dataSource.filter(function (_ref3) {
      var key = _ref3.key;
      return targetKeys.indexOf(key) === -1;
    });
    var rightDataSource = newDataSource.filter(function (_ref4) {
      var key = _ref4.key;
      return targetKeys.indexOf(key) > -1;
    });

    this.splitedDataSource = {
      leftDataSource: leftDataSource,
      rightDataSource: rightDataSource
    };
    this.setState({
      leftDataSource: leftDataSource,
      rightDataSource: rightDataSource
    });

    return this.splitedDataSource;
  };

  /**
   * List中的item选中/未选中状态改变时触发
   * @param {*} direction 'left' or 'right'
   * @param {*} holder 更新后的'sourceSelectedKeys' or 'targetSelectedKeys'
   */
  Transfer.prototype.handleSelectChange = function handleSelectChange(direction, holder) {
    // onSelectChange：当选中的item发生改变时的回调 参数(sourceSelectedKeys, targetSelectedKeys)
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

  /**
   * 左侧列表全选事件
   * @param filteredDataSource dataSource中刨去设置为disabled的部分
   * @param checkAll 是否是全选状态 true：全选
   */


  /**
   * 搜索框值更改事件
   * @param direction 'left' or 'right'
   * @param value 输入的值
   */


  /**
   * 清空搜索框内容
   * @param direction 'left' or 'right'
   */


  /**
   * 点击list item，选中或取消选中
   * @param direction 'left' or 'right'
   * @param selectedItem 选中的item的信息，和dataSource数据源中的item信息一致
   * @param checked 是否已勾选，true：已勾选 false：未勾选
   */


  Transfer.prototype.getSelectedKeysName = function getSelectedKeysName(direction) {
    return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
  };

  /**
   * 拖拽结束时触发
   */


  /**
   * 拖拽开始时触发
   */


  Transfer.prototype.render = function render() {
    var _props = this.props,
        _props$prefixCls = _props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'u-transfer' : _props$prefixCls,
        _props$operations = _props.operations,
        operations = _props$operations === undefined ? [] : _props$operations,
        showSearch = _props.showSearch,
        notFoundContent = _props.notFoundContent,
        searchPlaceholder = _props.searchPlaceholder,
        body = _props.body,
        footer = _props.footer,
        listStyle = _props.listStyle,
        _props$className = _props.className,
        className = _props$className === undefined ? '' : _props$className,
        filterOption = _props.filterOption,
        render = _props.render,
        lazy = _props.lazy,
        showCheckbox = _props.showCheckbox,
        draggable = _props.draggable;
    var _state3 = this.state,
        leftFilter = _state3.leftFilter,
        rightFilter = _state3.rightFilter,
        sourceSelectedKeys = _state3.sourceSelectedKeys,
        targetSelectedKeys = _state3.targetSelectedKeys,
        leftDataSource = _state3.leftDataSource,
        rightDataSource = _state3.rightDataSource,
        droppableId = _state3.droppableId;

    // const { leftDataSource, rightDataSource } = this.splitDataSource(this.props);

    var leftActive = targetSelectedKeys.length > 0;
    var rightActive = sourceSelectedKeys.length > 0;

    var cls = (0, _classnames2["default"])(className, prefixCls);

    var titles = this.getTitles();
    return _react2["default"].createElement(
      'div',
      { className: cls },
      _react2["default"].createElement(
        _reactBeautifulDnd.DragDropContext,
        { onDragEnd: this.onDragEnd, onDragStart: this.onDragStart },
        _react2["default"].createElement(_list2["default"], {
          titleText: titles[0] //左侧标题
          , dataSource: leftDataSource //左侧数据源
          , filter: leftFilter //搜索框中输入的内容
          , filterOption: filterOption //搜索过滤方法 参数(inputValue, option)
          , style: listStyle //自定义的columns的样式表
          , checkedKeys: sourceSelectedKeys //左侧已勾选的item的keys
          , handleFilter: this.handleLeftFilter //左侧搜索框值更改事件
          , handleClear: this.handleLeftClear //清空左侧搜索框内容
          , handleSelect: this.handleLeftSelect //点击左侧列表中的item，改变选中或取消选中状态
          , handleSelectAll: this.handleLeftSelectAll //点击左侧全选
          , render: render,
          showSearch: showSearch //是否显示搜索框
          , searchPlaceholder: searchPlaceholder //搜索框placeholder
          , notFoundContent: notFoundContent //当没有相关内容的显示内容
          , body: body,
          footer: footer,
          prefixCls: prefixCls + '-list',
          lazy: lazy,
          showCheckbox: showCheckbox,
          draggable: draggable,
          id: '1',
          droppableId: droppableId
        }),
        !draggable ? _react2["default"].createElement(_operation2["default"], {
          rightActive: rightActive,
          rightArrowText: operations[0],
          moveToRight: this.moveToRight,
          leftActive: leftActive,
          leftArrowText: operations[1],
          moveToLeft: this.moveToLeft,
          className: prefixCls + '-operation'
        }) : '',
        _react2["default"].createElement(_list2["default"], {
          titleText: titles[1] //右侧标题
          , dataSource: rightDataSource //右侧数据源
          , filter: rightFilter //搜索框中输入的内容
          , filterOption: filterOption //搜索过滤方法 参数(inputValue, option)
          , style: listStyle //自定义的columns的样式表
          , checkedKeys: targetSelectedKeys //右侧已勾选的item的keys
          , handleFilter: this.handleRightFilter //右侧搜索框值更改事件
          , handleClear: this.handleRightClear //清空右侧搜索框内容
          , handleSelect: this.handleRightSelect //点击右侧列表中的item，改变选中或取消选中状态
          , handleSelectAll: this.handleRightSelectAll //点击右侧全选
          , render: render,
          showSearch: showSearch //是否显示搜索框
          , searchPlaceholder: searchPlaceholder //搜索框placeholder
          , notFoundContent: notFoundContent //当没有相关内容的显示内容
          , body: body,
          footer: footer,
          prefixCls: prefixCls + '-list',
          lazy: lazy,
          showCheckbox: showCheckbox,
          draggable: draggable,
          id: '2'
        })
      )
    );
  };

  return Transfer;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.moveTo = function (direction) {
    var _props2 = _this2.props,
        _props2$targetKeys = _props2.targetKeys,
        targetKeys = _props2$targetKeys === undefined ? [] : _props2$targetKeys,
        onChange = _props2.onChange;
    // debugger

    var _state4 = _this2.state,
        sourceSelectedKeys = _state4.sourceSelectedKeys,
        targetSelectedKeys = _state4.targetSelectedKeys,
        leftDataSource = _state4.leftDataSource,
        rightDataSource = _state4.rightDataSource,
        droppableId = _state4.droppableId;

    var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
    // move items to target box
    var newTargetKeys = direction === 'right' ? moveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
      return moveKeys.indexOf(targetKey) === -1;
    });

    // empty checked keys
    var oppositeDirection = direction === 'right' ? 'left' : 'right';
    _this2.setState(_defineProperty({}, _this2.getSelectedKeysName(oppositeDirection), []));
    // debugger
    _this2.handleSelectChange(oppositeDirection, []);

    if (onChange) {
      onChange(newTargetKeys, direction, moveKeys);
    }
    // 区分拖拽穿梭还是点击穿梭
    var newDataSource = leftDataSource.concat(rightDataSource);
    droppableId ? _this2.splitDataSource2(newTargetKeys, newDataSource) : _this2.splitDataSource(newTargetKeys);
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
    _this2.handleSelectAll('left', filteredDataSource, checkAll);
  };

  this.handleRightSelectAll = function (filteredDataSource, checkAll) {
    return _this2.handleSelectAll('right', filteredDataSource, checkAll);
  };

  this.handleFilter = function (direction, value) {
    _this2.setState(_defineProperty({}, direction + 'Filter', value));
  };

  this.handleLeftFilter = function (v) {
    return _this2.handleFilter('left', v);
  };

  this.handleRightFilter = function (v) {
    return _this2.handleFilter('right', v);
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
    if (checked) {
      //已勾选
      holder.splice(index, 1);
    } else if (index === -1) {
      //未勾选
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

  this.id2List = {
    droppable_1: 'leftDataSource',
    droppable_2: 'rightDataSource'
  };

  this.getList = function (id) {
    return _this2.state[_this2.id2List[id]];
  };

  this.onDragEnd = function (result) {
    var source = result.source,
        destination = result.destination,
        draggableId = result.draggableId;
    var _props3 = _this2.props,
        targetKeys = _props3.targetKeys,
        onChange = _props3.onChange;

    var sourceIndex = source ? source.index : ''; //初始位置
    var disIndex = destination ? destination.index : ''; //移动后的位置
    var temp = void 0; //拖拽的元素

    // case1：拖拽到列表之外
    if (!destination) {
      return;
    }

    if (destination.droppableId === 'droppable_1') {
      // case2：在左侧列表中拖拽
      if (source.droppableId === destination.droppableId) return;
      // case3：从右往左拖拽（移除已选）
      _this2.moveToLeft();
      return;
    }

    // case4：在右侧列表中拖拽改变items顺序
    if (source.droppableId === destination.droppableId) {
      var items = (0, _utils.reorder)(_this2.getList(source.droppableId), targetKeys, sourceIndex, disIndex);
      _this2.setState({
        rightDataSource: items.dataArr,
        sourceSelectedKeys: [],
        targetSelectedKeys: []
      });
      if (onChange) {
        onChange(items.targetKeyArr, "", draggableId);
      }
    } else {
      // case5：从左往右拖拽（添加已选）
      var _result = (0, _utils.move)(_this2.getList(source.droppableId), _this2.getList(destination.droppableId), source, destination, targetKeys);
      if (onChange) {
        onChange(_result.newTargetKeys, "", draggableId);
      }
      _this2.setState({
        leftDataSource: _result.droppable_1,
        rightDataSource: _result.droppable_2,
        sourceSelectedKeys: [],
        targetSelectedKeys: []
      });
    }
  };

  this.onDragStart = function (result) {
    var selectedItem = {};
    var source = result.source;

    selectedItem.key = result.draggableId;
    if (source.droppableId === 'droppable_1') {
      // leftMenu
      _this2.handleLeftSelect(selectedItem);
    } else if (source.droppableId === 'droppable_2') {
      // rightMenu
      _this2.handleRightSelect(selectedItem);
    }
    _this2.setState({
      droppableId: source.droppableId
    });
  };
};

Transfer.List = Transfer.List;
Transfer.Operation = Transfer.Operation;
Transfer.Search = Transfer.Search;

Transfer.propTypes = propTypes;
Transfer.defaultProps = defaultProps;

exports["default"] = Transfer;
module.exports = exports['default'];