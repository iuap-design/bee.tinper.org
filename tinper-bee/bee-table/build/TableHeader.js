"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _throttleDebounce = require("throttle-debounce");

var _utils = require("./utils");

var _FilterType = require("./FilterType");

var _FilterType2 = _interopRequireDefault(_FilterType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  clsPrefix: _propTypes2["default"].string,
  rowStyle: _propTypes2["default"].object,
  rows: _propTypes2["default"].array
};

function getDiv(id) {
  var div = document.createElement("div");
  div.className = "u-table-drag-hidden-cont";
  div.id = id;
  return div;
}

var TableHeader = function (_Component) {
  _inherits(TableHeader, _Component);

  function TableHeader(props) {
    _classCallCheck(this, TableHeader);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.getOnLineObject = function (_element) {
      var type = _element.getAttribute('data-type'),
          elementObj = null;
      if (!type) {
        var element = _element.parentElement || parentNode; //兼容写法。
        if (element.getAttribute('data-type')) {
          elementObj = element;
        }
      } else {
        elementObj = _element;
      }
      return elementObj;
    };

    _this.onTrMouseDown = function (e) {
      _utils.Event.stopPropagation(e);
      var event = _utils.Event.getEvent(e),
          targetEvent = _utils.Event.getTarget(event);
      var _this$props = _this.props,
          clsPrefix = _this$props.clsPrefix,
          contentTable = _this$props.contentTable;

      var currentElement = _this.getOnLineObject(targetEvent);
      if (!currentElement) return;
      var type = currentElement.getAttribute('data-type');
      if (!_this.props.dragborder && !_this.props.draggable) return;
      if (type == 'online' && _this.props.dragborder) {
        if (!_this.props.dragborder) return;
        targetEvent.setAttribute('draggable', false); //添加交换列效果
        var currentIndex = parseInt(currentElement.getAttribute("data-line-index"));
        var defaultWidth = currentElement.getAttribute("data-th-width");
        var currentObj = _this.table.cols[currentIndex];
        _this.drag.option = "border"; //拖拽操作
        _this.drag.currIndex = currentIndex;
        _this.drag.oldLeft = event.x;
        _this.drag.oldWidth = parseInt(currentObj.style.width);
        _this.drag.minWidth = currentObj.style.minWidth != "" ? parseInt(currentObj.style.minWidth) : defaultWidth;
        _this.drag.tableWidth = parseInt(_this.table.table.style.width ? _this.table.table.style.width : _this.table.table.scrollWidth);
      } else if (type != 'online' && _this.props.draggable) {
        if (!_this.props.draggable || targetEvent.nodeName.toUpperCase() != "TH") return;
        targetEvent.setAttribute('draggable', true); //添加交换列效果
        _this.drag.option = 'dragAble';
        _this.currentDome = event.target;
        var _currentIndex = parseInt(currentElement.getAttribute("data-line-index"));
        _this.drag.currIndex = _currentIndex;
      } else {
        // console.log("onTrMouseDown dragborder or draggable is all false !");
        return;
      }
    };

    _this.onTrMouseMove = function (e) {
      if (!_this.props.dragborder && !_this.props.draggable) return;
      var _this$props2 = _this.props,
          clsPrefix = _this$props2.clsPrefix,
          dragborder = _this$props2.dragborder,
          contentDomWidth = _this$props2.contentDomWidth,
          scrollbarWidth = _this$props2.scrollbarWidth,
          contentTable = _this$props2.contentTable,
          headerScroll = _this$props2.headerScroll;

      _utils.Event.stopPropagation(e);
      var event = _utils.Event.getEvent(e);
      if (_this.props.dragborder && _this.drag.option == "border") {
        //移动改变宽度
        var currentCols = _this.table.cols[_this.drag.currIndex];
        var diff = event.x - _this.drag.oldLeft;
        var newWidth = _this.drag.oldWidth + diff;
        _this.drag.newWidth = newWidth;

        // if(newWidth > this.drag.minWidth){
        if (newWidth > _this.minWidth) {
          currentCols.style.width = newWidth + 'px';
          //hao 支持固定表头拖拽 修改表体的width
          if (_this.fixedTable.cols) {
            _this.fixedTable.cols[_this.drag.currIndex].style.width = newWidth + "px";
          }
          var newTableWidth = _this.drag.tableWidth + diff + 'px';
          _this.table.table.style.width = newTableWidth; //改变table的width
          if (_this.table.innerTableBody) {
            //TODO 后续需要处理此处
            _this.table.innerTableBody.style.width = newTableWidth;
          }
          var showScroll = contentDomWidth - (_this.drag.tableWidth + diff) - scrollbarWidth;

          //表头滚动条处理
          if (headerScroll) {
            if (showScroll < 0) {
              //找到固定列表格，设置表头的marginBottom值为scrollbarWidth;
              _this.table.contentTableHeader.style.overflowX = 'scroll';
              _this.optTableMargin(_this.table.fixedLeftHeaderTable, scrollbarWidth);
              _this.optTableMargin(_this.table.fixedRighHeadertTable, scrollbarWidth);
              // fixedLeftHeaderTable && (fixedLeftHeaderTable.style.marginBottom = scrollbarWidth + "px");
              // fixedRighHeadertTable && (fixedRighHeadertTable.style.marginBottom = scrollbarWidth + "px");
              //todo inner scroll-x去掉；outer marginbottom 设置成-15px】
            } else {
              _this.table.contentTableHeader.style.overflowX = 'hidden';
              _this.optTableMargin(_this.table.fixedLeftHeaderTable, 0);
              _this.optTableMargin(_this.table.fixedRighHeadertTable, 0);
            }
          } else {
            if (showScroll < 0) {
              _this.optTableMargin(_this.table.fixedLeftBodyTable, '-' + scrollbarWidth);
              _this.optTableMargin(_this.table.fixedRightBodyTable, '-' + scrollbarWidth);
              _this.optTableScroll(_this.table.fixedLeftBodyTable, { x: 'scroll' });
              _this.optTableScroll(_this.table.fixedRightBodyTable, { x: 'scroll' });
            } else {
              _this.optTableMargin(_this.table.fixedLeftBodyTable, 0);
              _this.optTableMargin(_this.table.fixedRightBodyTable, 0);
              _this.optTableScroll(_this.table.fixedLeftBodyTable, { x: 'auto' });
              _this.optTableScroll(_this.table.fixedRightBodyTable, { x: 'auto' });
            }
          }
        }
      } else if (_this.props.draggable && _this.drag.option == "draggable") {
        // console.log(" --onTrMouseMove--draggable- ",this.drag.option);
      } else {
          // console.log("onTrMouseMove dragborder or draggable is all false !");
        }
    };

    _this.onTrMouseUp = function (e) {
      var event = _utils.Event.getEvent(e);
      var width = _this.drag.newWidth;
      _this.mouseClear();
      _this.props.onDropBorder && _this.props.onDropBorder(event, width);
    };

    _this.clearThsDr = function () {
      var ths = _this.table.ths;
      for (var index = 0; index < ths.length; index++) {
        ths[index].setAttribute('draggable', false); //去掉交换列效果
      }
    };

    _this.bodyonLineMouseUp = function (events, type) {
      if (!_this.drag || !_this.drag.option) return;
      _this.mouseClear();
    };

    _this.optTableMargin = function (table, scrollbarWidth) {
      if (table) {
        table.style.marginBottom = scrollbarWidth + "px";
      }
    };

    _this.optTableScroll = function (table) {
      var overflow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (table) {
        var innerTable = table.querySelector('.u-table-body-inner');
        if (innerTable) {
          overflow.x && (innerTable.style.overflowX = overflow.x);
          overflow.y && (innerTable.style.overflowY = overflow.y);
        }
      }
    };

    _this.onDragStart = function (e) {
      if (!_this.props.draggable) return;
      if (_this.drag && _this.drag.option != 'dragAble') {
        return;
      }
      var event = _utils.Event.getEvent(e),
          target = _utils.Event.getTarget(event);

      var currentIndex = parseInt(target.getAttribute("data-line-index"));
      var currentKey = target.getAttribute('data-line-key');

      if (event.dataTransfer.setDragImage) {
        var crt = target.cloneNode(true);
        crt.style.backgroundColor = "#ebecf0";
        crt.style.width = _this.table.cols[currentIndex].style.width; //拖动后再交换列的时候，阴影效果可同步
        crt.style.height = "40px";
        // crt.style['line-height'] = "40px";
        // document.body.appendChild(crt);
        document.getElementById(_this._table_none_cont_id).appendChild(crt);
        event.dataTransfer.setDragImage(crt, 0, 0);
      }

      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("Text", currentKey);
      _this.currentObj = _this.props.rows[0][currentIndex];
    };

    _this.onDragOver = function (e) {
      var event = _utils.Event.getEvent(e);
      event.preventDefault();
    };

    _this.onDrop = function (e) {
      if (!_this.props.draggable) return;
      if (_this.drag && _this.drag.option != 'dragAble') {
        return;
      }
      var event = _utils.Event.getEvent(e),
          target = _utils.Event.getTarget(event);
      _this.currentDome.setAttribute('draggable', false); //添加交换列效果
    };

    _this.onDragEnter = function (e) {
      var event = _utils.Event.getEvent(e),
          target = _utils.Event.getTarget(event);
      _this._dragCurrent = target;
      var currentIndex = target.getAttribute("data-line-index");
      if (!currentIndex || parseInt(currentIndex) === _this.drag.currIndex) return;
      if (target.nodeName.toUpperCase() === "TH") {
        // target.style.border = "2px dashed rgba(5,0,0,0.25)";
        target.setAttribute("style", "border:2px dashed rgba(5,0,0,0.25)");
        // target.style.backgroundColor = 'rgb(235, 236, 240)';
      }
    };

    _this.onDragEnd = function (e) {
      var event = _utils.Event.getEvent(e),
          target = _utils.Event.getTarget(event);
      _this._dragCurrent.setAttribute("style", "");
      // this._dragCurrent.style = "";
      document.getElementById(_this._table_none_cont_id).innerHTML = "";

      var data = _this.getCurrentEventData(_this._dragCurrent);
      if (!data) return;
      if (!_this.currentObj || _this.currentObj.key == data.key) return;
      if (!_this.props.onDrop) return;
      _this.props.onDrop(event, { dragSource: _this.currentObj, dragTarg: data });
    };

    _this.onDragLeave = function (e) {
      var event = _utils.Event.getEvent(e),
          target = _utils.Event.getTarget(event);
      var currentIndex = target.getAttribute("data-line-index");
      if (!currentIndex || parseInt(currentIndex) === _this.drag.currIndex) return;
      if (target.nodeName.toUpperCase() === "TH") {
        target.setAttribute("style", "");
        // this._dragCurrent.style = "";
      }
    };

    _this.handlerFilterChange = function (key, value, condition) {
      var onFilterChange = _this.props.onFilterChange;

      if (onFilterChange) {
        onFilterChange(key, value, condition);
      }
    };

    _this.handlerFilterClear = function (field) {
      var onFilterClear = _this.props.onFilterClear;

      if (onFilterClear) {
        onFilterClear(field);
      }
    };

    _this.filterRenderType = function (type, dataIndex, index) {
      var _this$props3 = _this.props,
          clsPrefix = _this$props3.clsPrefix,
          rows = _this$props3.rows,
          filterDelay = _this$props3.filterDelay,
          locale = _this$props3.locale;

      switch (type) {
        //文本输入
        case "text":
          return _react2["default"].createElement(_FilterType2["default"], {
            locale: locale //多语
            , rendertype: type //渲染类型
            , clsPrefix: clsPrefix //css前缀
            , className: clsPrefix + " filter-text",
            dataIndex: dataIndex //字段
            , onFilterChange: _this.handlerFilterChange //输入框回调
            , onFilterClear: _this.handlerFilterClear //清除回调
            , filterDropdown: rows[1][index]["filterdropdown"] //是否显示下拉条件
            , filterDropdownType: rows[1][index]["filterdropdowntype"] //下拉的条件类型为string,number
            , filterDropdownIncludeKeys: rows[1][index]["filterdropdownincludekeys"] //下拉条件按照指定的keys去显示
          });
        //数值输入
        case "number":
          return _react2["default"].createElement(_FilterType2["default"], {
            locale: locale,
            rendertype: type,
            clsPrefix: clsPrefix,
            className: clsPrefix + " filter-text",
            dataIndex: dataIndex //字段
            , onFilterChange: (0, _throttleDebounce.debounce)(filterDelay || 300, _this.handlerFilterChange) //输入框回调并且函数防抖动
            , onFilterClear: _this.handlerFilterClear //清除回调
            , filterDropdown: rows[1][index]["filterdropdown"],
            filterDropdownType: rows[1][index]["filterdropdowntype"] //下拉的条件类型为string,number
            , filterDropdownIncludeKeys: rows[1][index]["filterdropdownincludekeys"] //下拉条件按照指定的keys去显示
            , filterInputNumberOptions: rows[1][index]["filterinputnumberoptions"] //设置数值框内的详细属性
          });
        //下拉框选择
        case "dropdown":
          var selectDataSource = [];
          //处理没有输入数据源的时候，系统自动查找自带的数据筛选后注入
          if (rows.length > 0 && (rows[1][index]["filterdropdownauto"] || "auto") == "auto") {
            var hash = {};
            //处理下拉重复对象组装dropdown
            selectDataSource = Array.from(rows[1][0].datasource, function (x) {
              return {
                key: x[dataIndex],
                value: x[dataIndex]
              };
            });
            selectDataSource = selectDataSource.reduceRight(function (item, next) {
              hash[next.key] ? "" : hash[next.key] = true && item.push(next);
              return item;
            }, []);
          } else {
            //从外部数据源加载系统数据
            selectDataSource = rows[1][index]["filterdropdowndata"];
          }
          return _react2["default"].createElement(_FilterType2["default"], {
            locale: locale,
            rendertype: type,
            className: clsPrefix + " filter-dropdown",
            data: selectDataSource,
            notFoundContent: "Loading" //没有数据显示的默认字
            , dataIndex: dataIndex //字段
            , onFilterChange: _this.handlerFilterChange //输入框回调
            , onFilterClear: _this.handlerFilterClear //清除回调
            , filterDropdown: rows[1][index]["filterdropdown"],
            onFocus: rows[1][index]["filterdropdownfocus"],
            filterDropdownType: rows[1][index]["filterdropdowntype"] //下拉的条件类型为string,number
            , filterDropdownIncludeKeys: rows[1][index]["filterdropdownincludekeys"] //下拉条件按照指定的keys去显示
          });
        //日期
        case "date":
          return _react2["default"].createElement(_FilterType2["default"], {
            locale: locale,
            rendertype: type,
            className: "filter-date",
            onClick: function onClick() {},
            format: rows[1][index]["format"] || "YYYY-MM-DD",
            dataIndex: dataIndex //字段
            , onFilterChange: _this.handlerFilterChange //输入框回调
            , onFilterClear: _this.handlerFilterClear //清除回调
            , filterDropdown: rows[1][index]["filterdropdown"],
            filterDropdownType: rows[1][index]["filterdropdowntype"] //下拉的条件类型为string,number
            , filterDropdownIncludeKeys: rows[1][index]["filterdropdownincludekeys"] //下拉条件按照指定的keys去显示
          });
        //日期范围
        case "daterange":
          return _react2["default"].createElement(_FilterType2["default"], {
            locale: locale,
            rendertype: type,
            className: "filter-date",
            onClick: function onClick() {},
            format: rows[1][index]["format"] || "YYYY-MM-DD",
            dataIndex: dataIndex //字段
            , onFilterChange: _this.handlerFilterChange //输入框回调
            , onFilterClear: _this.handlerFilterClear //清除回调
            , filterDropdown: rows[1][index]["filterdropdown"],
            filterDropdownType: rows[1][index]["filterdropdowntype"] //下拉的条件类型为string,number
            , filterDropdownIncludeKeys: rows[1][index]["filterdropdownincludekeys"] //下拉条件按照指定的keys去显示
          });
        default:
          //不匹配类型默认文本输入
          return _react2["default"].createElement("div", null);
      }
    };

    _this.currentObj = null;
    _this.theadKey = new Date().getTime();
    _this.drag = {
      option: ''
    };
    _this.minWidth = 80; //确定最小宽度就是80
    _this.table = null;
    _this._thead = null; //当前对象
    _this.event = false; //避免多次绑定问题
    return _this;
  }

  TableHeader.prototype.componentDidUpdate = function componentDidUpdate() {
    this.initTable();
    this.initEvent();
  };

  TableHeader.prototype.componentDidMount = function componentDidMount() {
    var uid = "_table_uid_" + new Date().getTime();
    this._table_none_cont_id = uid;
    var div = getDiv(uid);
    document.querySelector("body").appendChild(div);
  };

  TableHeader.prototype.componentWillUnmount = function componentWillUnmount() {
    if (!this.table) return;
    if (this.props.draggable) {
      this.removeDragAbleEvent();
    }
    if (this.props.dragborder) {
      this.removeDragBorderEvent();
    }
    this.eventListen([{ key: 'mousedown', fun: this.onTrMouseDown }], 'remove', this.table.tr[0]);
  };

  /**
   * 获取table的属性存放在this.table 中。(公用方法)
   * @returns
   * @memberof TableHeader
   */


  TableHeader.prototype.initTable = function initTable() {
    var contentTable = this.props.contentTable;

    if (!this.props.dragborder && !this.props.draggable) return;
    var tableDome = this._thead.parentNode;
    var table = {};
    if (tableDome && tableDome.nodeName && tableDome.nodeName.toUpperCase() == "TABLE") {
      table.table = tableDome;
      table.cols = tableDome.getElementsByTagName("col");
      table.ths = tableDome.getElementsByTagName("th");
      table.tr = tableDome.getElementsByTagName("tr");
    }

    table.fixedLeftHeaderTable = contentTable.querySelector('.u-table-fixed-left .u-table-header');
    table.fixedRighHeadertTable = contentTable.querySelector('.u-table-fixed-right .u-table-header');
    table.contentTableHeader = contentTable.querySelector('.u-table-scroll .u-table-header');
    table.fixedLeftBodyTable = contentTable.querySelector('.u-table-fixed-left .u-table-body-outer');
    table.fixedRightBodyTable = contentTable.querySelector('.u-table-fixed-right .u-table-body-outer');
    table.innerTableBody = contentTable.querySelector('.u-table-scroll .u-table-body table');

    this.table = table;

    if (!this.props.dragborder) return;
    if (document.getElementById("u-table-drag-thead-" + this.theadKey)) {
      this.fixedTable = {};
      var _fixedParentContext = document.getElementById("u-table-drag-thead-" + this.theadKey).parentNode;
      var siblingDom = _fixedParentContext.parentNode.nextElementSibling;
      if (siblingDom) {
        var fixedTable = siblingDom.querySelector("table");
        this.fixedTable.table = fixedTable;
        this.fixedTable.cols = fixedTable.getElementsByTagName("col");
        // this.fixedTable.ths = fixedTable.tableDome.getElementsByTagName("th");
      }
    }
  };

  /**
   * 事件初始化
   */


  TableHeader.prototype.initEvent = function initEvent() {
    var _props = this.props,
        dragborder = _props.dragborder,
        draggable = _props.draggable;

    if (!this.event) {
      //避免多次绑定问题。
      this.event = true;
      if (dragborder) {
        this.dragBorderEventInit(); //列宽
      }
      if (dragborder) {
        this.dragAbleEventInit(); //交换列
      }
      if (this.table && this.table.tr) {
        this.eventListen([{ key: 'mousedown', fun: this.onTrMouseDown }], '', this.table.tr[0]); //body mouseup
      }
      this.eventListen([{ key: 'mouseup', fun: this.bodyonLineMouseUp }], '', document.body); //body mouseup
    }
  };

  /**
   * 拖拽列宽事件的监听
   */


  TableHeader.prototype.dragBorderEventInit = function dragBorderEventInit() {
    if (!this.props.dragborder) return;
    var events = [{ key: 'mouseup', fun: this.onTrMouseUp }, { key: 'mousemove', fun: this.onTrMouseMove }];
    this.eventListen(events, '', this.table.tr[0]); //表示把事件添加到th元素上
  };

  /**
   * 删除拖动改变列宽的事件监听
   */


  TableHeader.prototype.removeDragBorderEvent = function removeDragBorderEvent() {
    var events = [{ key: 'mouseup', fun: this.onTrMouseUp }, { key: 'mousemove', fun: this.onTrMouseMove }];
    this.eventListen(events, 'remove', this.table.tr[0]);
  };

  TableHeader.prototype.eventListen = function eventListen(events, type, eventSource) {
    if (!this.table) return;
    var tr = this.table.tr;

    for (var i = 0; i < events.length; i++) {
      var _event = events[i];
      if (type === "remove") {
        _utils.EventUtil.removeHandler(eventSource, _event.key, _event.fun);
      } else {
        _utils.EventUtil.addHandler(eventSource, _event.key, _event.fun);
      }
    }
  };

  /**
   *
   *根据 data-type 来获取当前拖拽的对象的Object，如果为null表示拖动的对象并非是online
   * @memberof TableHeader
   */


  /**
  * 调整列宽的down事件
  * @memberof TableHeader
  */


  /**
   * 调整列宽的move事件
   * @memberof TableHeader
   */


  /**
  * 调整列宽的up事件
  * @memberof TableHeader
  */


  TableHeader.prototype.mouseClear = function mouseClear() {
    if (!this.drag || !this.drag.option) return;
    var rows = this.props.rows;

    var data = { rows: rows[0], cols: this.table.cols, currIndex: this.drag.currIndex };
    this.props.afterDragColWidth && this.props.afterDragColWidth(data);
    this.drag = {
      option: ""
    };
    this.clearThsDr();
  };

  /**
  * 当前对象上绑定全局事件，用于拖拽区域以外时的事件处理
  * @param {*} events
  * @param {*} type
  * @memberof TableHeader
  */


  /**
   *相关滚动条联动操作
   *
   * @memberof TableHeader
   */


  //---拖拽交换列代码----start-----
  /**
   * 添加换列的事件监听
   */
  TableHeader.prototype.dragAbleEventInit = function dragAbleEventInit() {
    if (!this.props.draggable) return;
    var events = [{ key: 'dragstart', fun: this.onDragStart }, //用户开始拖动元素时触发
    { key: 'dragover', fun: this.onDragOver }, //当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    { key: 'drop', fun: this.onDrop }, //在一个拖动过程中，释放鼠标键时触发此事件 

    { key: 'dragenter', fun: this.onDragEnter }, { key: 'dragend', fun: this.onDragEnd }, { key: 'dragleave', fun: this.onDragLeave }];
    this.eventListen(events, '', this.table.tr[0]); //表示把事件添加到th元素上
  };

  /**
   * 删除换列的事件监听
   */


  TableHeader.prototype.removeDragAbleEvent = function removeDragAbleEvent() {
    var events = [{ key: 'dragstart', fun: this.onDragStart }, { key: 'dragover', fun: this.onDragOver }, { key: 'drop', fun: this.onDrop }, { key: 'dragenter', fun: this.onDragEnter }, { key: 'dragend', fun: this.onDragEnd }, { key: 'dragleave', fun: this.onDragLeave }];
    this.eventListen(events, 'remove', this.table.tr[0]);
  };

  /**
   * 开始调整交换列的事件
   */


  /**
  * 在一个拖动过程中，释放鼠标键时触发此事件。【目标事件】
  * @memberof TableHeader
  */


  /**
   * 获取当前th上的对象数据
   * @param {*} e
   * @returns
   * @memberof TableHeader
   */
  TableHeader.prototype.getCurrentEventData = function getCurrentEventData(th) {
    if (!th) {
      console.log(" event target is not th ! ");
      return null;
    }
    var key = th.getAttribute('data-line-key');
    var data = this.props.rows[0].find(function (da) {
      return da.key == key;
    });
    if (data) {
      return data;
    } else {
      console.log(" getCurrentEventData data is null ");
      return null;
    }
  };
  //---拖拽列交换----end----- 

  /**
   * 过滤输入后或下拉条件的回调函数
   */


  /**
   * 过滤行清除回调
   */


  /**
   * 过滤渲染的组件类型
   */


  TableHeader.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        clsPrefix = _props2.clsPrefix,
        rowStyle = _props2.rowStyle,
        draggable = _props2.draggable,
        dragborder = _props2.dragborder,
        rows = _props2.rows,
        filterable = _props2.filterable,
        fixed = _props2.fixed,
        lastShowIndex = _props2.lastShowIndex;


    var attr = dragborder ? { id: "u-table-drag-thead-" + this.theadKey } : {};
    return _react2["default"].createElement(
      "thead",
      _extends({ className: clsPrefix + "-thead" }, attr, { "data-theader-fixed": "scroll", ref: function ref(_thead) {
          return _this2._thead = _thead;
        } }),
      rows.map(function (row, index) {
        var _rowLeng = row.length - 1;
        return _react2["default"].createElement(
          "tr",
          { key: index, style: rowStyle, className: filterable && index == rows.length - 1 ? 'filterable' : '' },
          row.map(function (da, columIndex, arr) {
            var thHover = da.drgHover ? " " + clsPrefix + "-thead th-drag-hover" : "";
            delete da.drgHover;
            var fixedStyle = "";
            var canDotDrag = "";
            //主表格下、固定列或者是过滤行中含有固定列时添加该属性
            if (!fixed && (da.fixed || filterable && index == rows.length - 1 && rows[0][columIndex].fixed)) {
              fixedStyle = " " + clsPrefix + "-row-fixed-columns-in-body";
            }

            if (lastShowIndex == columIndex) {
              canDotDrag = "th-can-not-drag";
            }
            var thClassName = "" + da.className ? "" + da.className : '';
            if (da.textAlign) {
              thClassName += " text-" + da.textAlign + " ";
            }
            delete da.textAlign;
            var keyTemp = {};
            //避免key为undefined
            // if(da.dataindex && da.key ===undefined ){
            keyTemp.key = da.key || da.dataindex || index + '-' + columIndex;

            // } 
            if (filterable && index == rows.length - 1) {
              da.children = _this2.filterRenderType(da["filtertype"], da.dataindex, columIndex);
              if (da.key === undefined) {
                keyTemp.key = keyTemp.key + '-filterable';
              }
              delete da.filterdropdownfocus;
            }

            var thDefaultObj = {};

            if (draggable) {
              thClassName += " " + clsPrefix + "-thead th-drag " + thHover + " ";
            }
            if (dragborder) {
              thClassName += " " + clsPrefix + "-thead-th " + canDotDrag;
            }
            thClassName += " " + fixedStyle;
            if (!da.fixed) {
              return _react2["default"].createElement(
                "th",
                _extends({}, da, keyTemp, { className: thClassName, "data-th-fixed": da.fixed, "data-line-key": da.key,
                  "data-line-index": columIndex, "data-th-width": da.width, "data-type": "draggable" }),
                da.children,
                dragborder && columIndex != _rowLeng ? _react2["default"].createElement(
                  "div",
                  { ref: function ref(el) {
                      return _this2.gap = el;
                    }, "data-line-key": da.key,
                    "data-line-index": columIndex, "data-th-width": da.width,
                    "data-type": "online", className: clsPrefix + "-thead-th-drag-gap" },
                  _react2["default"].createElement("div", { className: "online" })
                ) : ""
              );
            } else {
              thDefaultObj = _extends({}, da, {
                className: thClassName + " " + fixedStyle
              });
              da.onClick ? thDefaultObj.onClick = function (e) {
                da.onClick(da, e);
              } : "";
              return _react2["default"].createElement("th", _extends({}, thDefaultObj, keyTemp, { "data-th-fixed": da.fixed }));
            }
          })
        );
      })
    );
  };

  return TableHeader;
}(_react.Component);

TableHeader.defaultProps = {
  contentWidthDiff: 0
};


TableHeader.propTypes = propTypes;
exports["default"] = TableHeader;
module.exports = exports["default"];