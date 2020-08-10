'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeDatepicker = require('bee-datepicker');

var _beeDatepicker2 = _interopRequireDefault(_beeDatepicker);

var _zh_CN = require('bee-datepicker/build/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _beeSelect = require('bee-select');

var _beeSelect2 = _interopRequireDefault(_beeSelect);

var _beeInputNumber = require('bee-input-number');

var _beeInputNumber2 = _interopRequireDefault(_beeInputNumber);

var _FilterDropDown = require('./FilterDropDown');

var _FilterDropDown2 = _interopRequireDefault(_FilterDropDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var RangePicker = _beeDatepicker2["default"].RangePicker,
    YearPicker = _beeDatepicker2["default"].YearPicker,
    MonthPicker = _beeDatepicker2["default"].MonthPicker,
    WeekPicker = _beeDatepicker2["default"].WeekPicker;


var propTypes = {
    filterDropdown: _propTypes2["default"].string
};

var FilterType = function (_Component) {
    _inherits(FilterType, _Component);

    function FilterType(props) {
        _classCallCheck(this, FilterType);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.clearFilter = function () {
            var _this$props = _this.props,
                onFilterClear = _this$props.onFilterClear,
                dataIndex = _this$props.dataIndex;

            if (_this.state.value !== "") {
                _this.setState({
                    value: "", //清空值
                    condition: _this.props.filterDropdownType == 'string' ? 'LIKE' : 'EQ' //切回默认查询条件
                }, function () {
                    //调用清除方法参数为当前字段的field
                    onFilterClear && onFilterClear(dataIndex);
                });
            }
        };

        _this.changeText = function (val) {
            var _this$props2 = _this.props,
                onFilterChange = _this$props2.onFilterChange,
                dataIndex = _this$props2.dataIndex;

            _this.setState({
                value: val
            }, function () {
                onFilterChange(dataIndex, val, _this.state.condition);
            });
        };

        _this.changeTextCall = function (e) {
            var _this$props3 = _this.props,
                onFilterChange = _this$props3.onFilterChange,
                dataIndex = _this$props3.dataIndex;

            if (e.keyCode == 13) {
                e.target.value !== "" && onFilterChange(dataIndex, e.target.value, _this.state.condition);
            }
        };

        _this.changeValue = function () {
            _this.setState({
                value: ""
            });
        };

        _this.onSelectDropdown = function (item) {
            var _this$props4 = _this.props,
                onFilterChange = _this$props4.onFilterChange,
                dataIndex = _this$props4.dataIndex;

            _this.setState({
                condition: item.key
            }, function () {
                _this.state.value !== "" && onFilterChange && onFilterChange(dataIndex, _this.state.value, _this.state.condition);
            });
        };

        _this.changeNumber = function (value) {
            var _this$props5 = _this.props,
                onFilterChange = _this$props5.onFilterChange,
                dataIndex = _this$props5.dataIndex;

            _this.setState({
                value: value
            }, function () {
                onFilterChange(dataIndex, value, _this.state.condition);
            });
        };

        _this.clearNumber = function () {
            var onChange = _this.props.onChange;

            onChange && onChange("");
            _this.setState({
                value: ""
            });
        };

        _this.changeTextCallBlur = function (val) {
            var onChange = _this.props.onChange;

            onChange && onChange(val);
        };

        _this.changeSelect = function (value) {
            var _this$props6 = _this.props,
                onFilterChange = _this$props6.onFilterChange,
                dataIndex = _this$props6.dataIndex;

            if (onFilterChange) {
                onFilterChange(dataIndex, value, _this.state.condition);
                _this.setState({
                    value: value
                });
            }
        };

        _this.clearSelectValue = function () {
            _this.setState({
                selectValue: ""
            }, function () {
                _this.changeSelect("");
            });
        };

        _this.clearDateValue = function () {
            _this.setState({
                dateValue: ""
            }, function () {
                _this.changeDate("");
            });
        };

        _this.changeDate = function (value) {
            var _this$props7 = _this.props,
                onFilterChange = _this$props7.onFilterChange,
                dataIndex = _this$props7.dataIndex;

            if (onFilterChange) {
                onFilterChange(dataIndex, value, _this.state.condition);
                _this.setState({
                    value: value,
                    open: false
                });
            }
        };

        _this.renderControl = function (rendertype) {
            var _this$props8 = _this.props,
                filterInputNumberOptions = _this$props8.filterInputNumberOptions,
                filterDropdownIncludeKeys = _this$props8.filterDropdownIncludeKeys,
                dataIndex = _this$props8.dataIndex,
                filterDropdown = _this$props8.filterDropdown,
                filterDropdownType = _this$props8.filterDropdownType,
                format = _this$props8.format,
                className = _this$props8.className,
                onChange = _this$props8.onChange,
                onSelectDropdown = _this$props8.onSelectDropdown,
                clsPrefix = _this$props8.clsPrefix,
                locale = _this$props8.locale;

            switch (rendertype) {
                case 'text':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(_beeFormControl2["default"], {
                            value: _this.state.value,
                            className: className,
                            onChange: _this.changeText,
                            onKeyDown: _this.changeTextCall
                            //onBlur={this.changeTextCallBlur}
                        }),
                        _react2["default"].createElement(_FilterDropDown2["default"], {
                            locale: locale,
                            dataIndex: dataIndex,
                            dataText: _this.state.value,
                            onSelectDropdown: _this.onSelectDropdown,
                            onClickClear: _this.clearFilter,
                            isShowClear: _this.state.value,
                            isShowCondition: filterDropdown,
                            filterDropdownType: filterDropdownType,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                case 'number':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(_beeInputNumber2["default"], _extends({}, filterInputNumberOptions, {
                            className: className,
                            value: _this.state.value,
                            onChange: _this.changeNumber,
                            iconStyle: 'one'
                        })),
                        _react2["default"].createElement(_FilterDropDown2["default"], {
                            locale: locale,
                            dataIndex: dataIndex,
                            dataText: _this.state.value,
                            onSelectDropdown: _this.onSelectDropdown,
                            onClickClear: _this.clearFilter,
                            isShowClear: _this.state.value != 0,
                            isShowCondition: filterDropdown,
                            filterDropdownType: filterDropdownType,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                case 'dropdown':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(_beeSelect2["default"], _extends({}, _this.props, {
                            size: 'sm',
                            value: _this.state.value,
                            onChange: _this.changeSelect
                        })),
                        _react2["default"].createElement(_FilterDropDown2["default"], {
                            locale: locale,
                            dataIndex: dataIndex,
                            dataText: _this.state.value,
                            onSelectDropdown: _this.onSelectDropdown,
                            onClickClear: _this.clearFilter,
                            isShowCondition: filterDropdown,
                            isShowClear: _this.state.value,
                            filterDropdownType: filterDropdownType,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                case 'date':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(_beeDatepicker2["default"], _extends({}, _this.props, {
                            value: _this.state.value,
                            onChange: _this.changeDate,
                            open: _this.state.open,
                            format: format,
                            locale: _zh_CN2["default"]
                        })),
                        _react2["default"].createElement(_FilterDropDown2["default"], {
                            locale: locale,
                            dataIndex: dataIndex,
                            dataText: _this.state.value,
                            onSelectDropdown: _this.onSelectDropdown,
                            onClickClear: _this.clearFilter,
                            isShowCondition: filterDropdown,
                            isShowClear: _this.state.value,
                            filterDropdownType: filterDropdownType,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                case 'dateyear':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(YearPicker, _extends({}, _this.props, {
                            value: _this.state.value,
                            onChange: _this.changeDate,
                            open: _this.state.open,
                            format: format,
                            locale: _zh_CN2["default"]
                        })),
                        _react2["default"].createElement(_FilterDropDown2["default"], {
                            locale: locale,
                            dataIndex: dataIndex,
                            dataText: _this.state.value,
                            onSelectDropdown: _this.onSelectDropdown,
                            onClickClear: _this.clearFilter,
                            isShowCondition: filterDropdown,
                            isShowClear: _this.state.value,
                            filterDropdownType: filterDropdownType,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                case 'datemonth':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(MonthPicker, _extends({}, _this.props, {
                            value: _this.state.value,
                            onChange: _this.changeDate,
                            open: _this.state.open,
                            format: format,
                            locale: _zh_CN2["default"]
                        })),
                        _react2["default"].createElement(_FilterDropDown2["default"], {
                            locale: locale,
                            dataIndex: dataIndex,
                            dataText: _this.state.value,
                            onSelectDropdown: _this.onSelectDropdown,
                            onClickClear: _this.clearFilter,
                            isShowCondition: filterDropdown,
                            isShowClear: _this.state.value,
                            filterDropdownType: filterDropdownType,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                case 'dateweek':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(WeekPicker, _extends({}, _this.props, {
                            value: _this.state.value,
                            onChange: _this.changeDate,
                            open: _this.state.open,
                            format: format,
                            locale: _zh_CN2["default"]
                        })),
                        _react2["default"].createElement(_FilterDropDown2["default"], {
                            locale: locale,
                            dataIndex: dataIndex,
                            dataText: _this.state.value,
                            onSelectDropdown: _this.onSelectDropdown,
                            onClickClear: _this.clearFilter,
                            isShowCondition: filterDropdown,
                            isShowClear: _this.state.value,
                            filterDropdownType: filterDropdownType,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                case 'daterange':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(RangePicker, _extends({}, _this.props, {
                            value: _this.state.value,
                            onChange: _this.changeDate,
                            open: _this.state.open,
                            format: format,
                            showTime: true,
                            locale: _zh_CN2["default"],
                            placeholder: '开始 ~ 结束',
                            dateInputPlaceholder: ['开始', '结束'],
                            showClear: true
                        })),
                        _react2["default"].createElement(_FilterDropDown2["default"], {
                            locale: locale,
                            dataIndex: dataIndex,
                            dataText: _this.state.value,
                            onSelectDropdown: _this.onSelectDropdown,
                            onClickClear: _this.clearFilter,
                            isShowCondition: filterDropdown,
                            isShowClear: _this.state.value,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                case 'bool':
                    return _react2["default"].createElement(
                        'div',
                        { className: clsPrefix + ' filter-wrap' },
                        _react2["default"].createElement(Switch, {
                            className: className,
                            onChange: onChange
                        }),
                        _react2["default"].createElement(_FilterDropDown2["default"], { locale: locale,
                            onSelectDropdown: onSelectDropdown,
                            filterDropdownIncludeKeys: filterDropdownIncludeKeys
                        })
                    );
                default:
                    return _react2["default"].createElement('div', null);
            }
        };

        _this.state = {
            value: "",
            text: "",
            selectValue: "",
            dateValue: "",
            open: false,
            condition: props.filterDropdownType == 'string' ? 'LIKE' : 'EQ',
            number: 0
        };
        return _this;
    }

    /**
     * 清除过滤条件
     *
     */


    /**
     * 设置输入文本的值
     *
     */


    /**
     * 输入框回车执行回调
     *
     */

    /**
     * 更改修改值
     *
     */

    /**
     * 下拉条件的回调
     *
     * @param {*} key 字段
     * @param {*} value 值1,2,3...6
     */


    /**
     * 修改数值型的值
     *
     */

    //清除数值


    //失去焦点后执行函数

    //设置下拉值

    //清除下拉值

    //清除日期值

    //设置日期值

    //组件渲染
    /**
     * 根据不同的类型生成对应的组件类型包含一些参数的适应
     *
     * @param {*} rendertype 参数类型，包括['text','dropdown','date','dateyear','datemonth','dateweek',daterange','number']
     * @returns
     */


    FilterType.prototype.render = function render() {
        var rendertype = this.props.rendertype;

        return _react2["default"].createElement(
            'div',
            { 'data-filter-type': 'filterContext' },
            this.renderControl(rendertype)
        );
    };

    return FilterType;
}(_react.Component);

FilterType.propTypes = propTypes;
FilterType.defaultProps = {
    filterDropdown: 'show'
};
exports["default"] = FilterType;
module.exports = exports['default'];