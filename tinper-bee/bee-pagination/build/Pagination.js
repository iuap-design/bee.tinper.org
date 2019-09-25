"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _PaginationButton = require("./PaginationButton");

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var _beeButton = require("bee-button");

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeSelect = require("bee-select");

var _beeSelect2 = _interopRequireDefault(_beeSelect);

var _beeIcon = require("bee-icon");

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _reactCookies = require("react-cookies");

var _reactCookies2 = _interopRequireDefault(_reactCookies);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18n = require("./i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _tool = require("bee-locale/build/tool");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Option = _beeSelect2["default"].Option;

var propTypes = {
    /**
     * 当前激活状态页
     */
    activePage: _propTypes2["default"].number,
    /**
     * 总页数
     */
    items: _propTypes2["default"].number,
    /**
     * 显示按钮从1到maxButton的按钮数
     */
    maxButtons: _propTypes2["default"].number,

    /**
     * 当为true,不管切换到多少页都显示第一页和最后一页的按钮
     */
    boundaryLinks: _propTypes2["default"].bool,

    /**
     * 当为true,显示省略号，否则
     *
     */
    ellipsis: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].node]),

    /**
     *  当为true,显示点击到第一页的按钮
     */
    first: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].node]),

    /**
     *  当为true,显示点击到最后一页的按钮
     */
    last: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].node]),

    /**
     * 当为true,显示前一页按钮
     */
    prev: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].node]),

    /**
     * 当为true,显示下一页按钮
     */
    next: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].node]),

    /**
     * 暴露给用户的切换页的方法
     */
    onSelect: _propTypes2["default"].func,

    /**
     * You can use a custom element for the buttons
     */
    buttonComponentClass: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].string]),
    /**
     * 每页多少条的选择
     */
    dataNumSelect: _propTypes2["default"].array,
    /**
     * 每页多少条选择哪一个
     */
    dataNum: _propTypes2["default"].number,
    /**
     * 显示跳页
     */
    showJump: _propTypes2["default"].bool,
    /**
     * 显示总共条数
     */
    total: _propTypes2["default"].number,
    /** 
     *  pagiantion不可点
     */
    disabled: _propTypes2["default"].bool,
    /**
     *  确认按钮的样式集合
     */
    btnType: _propTypes2["default"].object,
    /**
     *  渲染确认按钮的dom
     */
    confirmBtn: _propTypes2["default"].func,

    /**
     * 通过cookie来确定分页的size,需设定唯一的key值
     */
    sizeWithCookie: _propTypes2["default"].string
};

var defaultProps = {
    activePage: 1,
    maxButtons: 0,
    first: false,
    last: false,
    prev: false,
    next: false,
    ellipsis: true,
    boundaryLinks: false,
    clsPrefix: "u-pagination",
    gap: false,
    noBorder: false,
    dataNumSelect: ['5', '10', '15', '20'],
    dataNum: 1,
    showJump: false,
    locale: {},
    disabled: false,
    btnType: { shape: 'border' },
    confirmBtn: function confirmBtn() {},
    sizeWithCookie: ''
};

var Pagination = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props, context) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

        _this.onKeyup = function (e) {
            e.keyCode === 13 && _this.handleEnsurePageJump();
        };

        _this.setPageJump = function (e) {
            var value = e.target.value;
            // 20181129跳转内容可以清空
            if (value !== '' && (isNaN(Number(value)) || value > _this.state.items || value <= 0)) {
                return false;
            } else {
                _this.setState({
                    jumpPageState: value
                });
            }
        };

        _this.handleEnsurePageJump = function () {
            var jumpPageState = _this.state.jumpPageState;
            var onSelect = _this.props.onSelect;

            if (jumpPageState === '') {
                return;
            }
            _this.setState({
                activePage: jumpPageState * 1,
                jumpPageState: ''
            });
            if (typeof onSelect === 'function') {
                onSelect(jumpPageState * 1);
            }
        };

        _this.dataNumSelect = function (value) {
            // console.log(value);
            var _this$props = _this.props,
                onDataNumSelect = _this$props.onDataNumSelect,
                total = _this$props.total,
                sizeWithCookie = _this$props.sizeWithCookie;

            var dataNumValue = _this.props.dataNumSelect[value];
            // console.log("dataNumValue", dataNumValue);
            if (total) {
                _this.setState({
                    // 20181210因为dataNumSelect的某项不是数字或者数字字符串
                    items: Number.isNaN(parseInt(dataNumValue)) ? 1 : Math.ceil(total / dataNumValue)
                });
            }
            _this.setState({
                dataNum: value
            });
            // 塞cookie
            if (sizeWithCookie) {
                _reactCookies2["default"].save(sizeWithCookie, dataNumValue, { maxAge: 60 * 60 * 24 * 7 });
            }
            if (typeof onDataNumSelect === 'function') {
                onDataNumSelect(value, dataNumValue);
            }
        };

        var size = props.dataNumSelect.findIndex(function (item) {
            return String(item) === String(_reactCookies2["default"].load(props.sizeWithCookie));
        });
        var dataNum = size === -1 ? props.dataNum : size;
        _this.state = {
            activePage: _this.props.activePage, //当前的页码
            dataNum: dataNum,
            items: props.items ? props.items : props.total ? Math.ceil(props.total / props.dataNumSelect[dataNum]) : 1,
            jumpPageState: ''
        };
        return _this;
    }

    Pagination.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var activePage = nextProps.activePage,
            dataNum = nextProps.dataNum,
            sizeWithCookie = nextProps.sizeWithCookie,
            dataNumSelect = nextProps.dataNumSelect,
            total = nextProps.total,
            items = nextProps.items;

        if (this.state.activePage !== activePage) {
            this.setState({
                activePage: activePage
            });
        }
        // 判断条件从 this.props.dataNum !== dataNum  改为 this.state.dataNum !== dataNum; Hua
        if ((dataNum === 0 || dataNum) && this.state.dataNum !== dataNum) {
            if (sizeWithCookie) {
                _reactCookies2["default"].save(sizeWithCookie, dataNumSelect[dataNum], { maxAge: 60 * 60 * 24 * 7 });
            }
            this.setState({
                dataNum: dataNum,
                // 20181210因为dataNumSelect的某项不是数字或者数字字符串
                items: Number.isNaN(parseInt(dataNumSelect[dataNum])) ? 1 : Math.ceil(total / dataNumSelect[dataNum])
            });
        }
        if ('items' in nextProps && this.props.items !== items) {
            var newItems = items === 0 ? 1 : items;
            this.setState({
                items: newItems
            });
        }
    };

    /**
     * 确认跳页
     */


    /**
     * 每页多少条的选择
     * @param e
     */


    /**
     * 渲染page的按钮
     * @param activePage
     * @param items
     * @param maxButtons
     * @param boundaryLinks
     * @param ellipsis
     * @param buttonProps
     * @returns {Array}
     */
    Pagination.prototype.renderPageButtons = function renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps) {
        var pageButtons = [];

        var startPage = void 0;
        var endPage = void 0;
        var hasHiddenPagesAfter = void 0;

        if (maxButtons) {
            //根据max很当前activepage计算出应隐藏activeButton之前的页数
            var hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
            startPage = hiddenPagesBefore > 2 ? hiddenPagesBefore : 1;
            //计算出是否存在隐藏activeButton之后的页数
            hasHiddenPagesAfter = startPage + maxButtons < items + 1;

            if (!hasHiddenPagesAfter) {
                endPage = items;
                startPage = items - maxButtons + 1;
                if (startPage < 1) {
                    startPage = 1;
                }
            } else {
                endPage = startPage + maxButtons - 1;
            }
        } else {
            startPage = 1;
            endPage = items;
        }
        //将所有的button循环渲染出来
        for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
            pageButtons.push(_react2["default"].createElement(
                _PaginationButton2["default"],
                _extends({}, buttonProps, {
                    key: pagenumber,
                    eventKey: pagenumber,
                    active: pagenumber === activePage
                }),
                pagenumber
            ));
        }
        //如果boundaryLinks和eclipsis且startPage!=1 需要加上before More Button
        if (boundaryLinks && ellipsis && startPage !== 1) {
            if (startPage > 2) {
                pageButtons.unshift(_react2["default"].createElement(
                    _PaginationButton2["default"],
                    {
                        key: "ellipsisFirst",
                        disabled: true,
                        componentClass: buttonProps.componentClass,
                        className: this.props.clsPrefix + "-item-ellipsis"
                    },
                    _react2["default"].createElement(
                        "span",
                        { "aria-label": "More" },
                        ellipsis === true ? "\u2026" : ellipsis
                    )
                ));
            }
            //加上最小边界 Button
            pageButtons.unshift(_react2["default"].createElement(
                _PaginationButton2["default"],
                _extends({}, buttonProps, { key: 1, eventKey: 1, active: false }),
                "1"
            ));
        }
        //如果maxButtons和eclipsis且hasHiddenPagesAfter 需加上after More Button
        if (maxButtons && hasHiddenPagesAfter && ellipsis) {
            if (!boundaryLinks || boundaryLinks && items > 1 + endPage) {
                pageButtons.push(_react2["default"].createElement(
                    _PaginationButton2["default"],
                    {
                        key: "ellipsis",
                        disabled: true,
                        componentClass: buttonProps.componentClass,
                        className: this.props.clsPrefix + "-item-ellipsis"
                    },
                    _react2["default"].createElement(
                        "span",
                        { "aria-label": "More" },
                        ellipsis === true ? "\u2026" : ellipsis
                    )
                ));
            }
            //如果最后一个页数按钮不等于总页数 且 边界为true 需加上最大边界按钮
            if (boundaryLinks && endPage !== items) {
                pageButtons.push(_react2["default"].createElement(
                    _PaginationButton2["default"],
                    _extends({}, buttonProps, {
                        key: items,
                        eventKey: items,
                        active: false
                    }),
                    items
                ));
            }
        }

        return pageButtons;
    };

    Pagination.prototype.render = function render() {
        var local = (0, _tool.getComponentLocale)(this.props, this.context, 'Pagination', function () {
            return _i18n2["default"];
        });

        var _props = this.props,
            items = _props.items,
            maxButtons = _props.maxButtons,
            boundaryLinks = _props.boundaryLinks,
            ellipsis = _props.ellipsis,
            first = _props.first,
            last = _props.last,
            prev = _props.prev,
            next = _props.next,
            onSelect = _props.onSelect,
            buttonComponentClass = _props.buttonComponentClass,
            noBorder = _props.noBorder,
            className = _props.className,
            clsPrefix = _props.clsPrefix,
            size = _props.size,
            gap = _props.gap,
            onDataNumSelect = _props.onDataNumSelect,
            dataNumSelect = _props.dataNumSelect,
            dataNum = _props.dataNum,
            activePage = _props.activePage,
            showJump = _props.showJump,
            total = _props.total,
            disabled = _props.disabled,
            btnType = _props.btnType,
            confirmBtn = _props.confirmBtn,
            others = _objectWithoutProperties(_props, ["items", "maxButtons", "boundaryLinks", "ellipsis", "first", "last", "prev", "next", "onSelect", "buttonComponentClass", "noBorder", "className", "clsPrefix", "size", "gap", "onDataNumSelect", "dataNumSelect", "dataNum", "activePage", "showJump", "total", "disabled", "btnType", "confirmBtn"]);

        var activePageState = this.state.activePage;
        var jumpPageState = this.state.jumpPageState;

        var btnDom = confirmBtn((0, _objectAssign2["default"])({}, this.props));

        var classes = {};
        if (noBorder) {
            classes[clsPrefix + "-no-border"] = true;
        }
        if (size) {
            classes[clsPrefix + "-" + size] = true;
        }
        if (gap) {
            classes[clsPrefix + "-gap"] = true;
        }
        if (!!btnDom) {
            classes[clsPrefix + "-with-jumpbtn"] = true;
        }

        var classNames = (0, _classnames3["default"])(clsPrefix + "-list", classes);
        var wrapperClass = (0, _classnames3["default"])(clsPrefix, _defineProperty({}, clsPrefix + "-disabled", disabled));
        /**
         *  页按钮属性
         *  onSelect:暴露在外层交互动作，也是与父组件Pagination的交流接口
         *  componentClass: 用户定义的按钮dom元素类型
         */
        var buttonProps = {
            onSelect: onSelect,
            componentClass: buttonComponentClass
        };
        var jumpBtn = btnDom ? _react2["default"].createElement(
            "div",
            { className: "page_jump_btn", onClick: this.handleEnsurePageJump },
            btnDom
        ) : null;
        return _react2["default"].createElement(
            "div",
            { className: (0, _classnames3["default"])(wrapperClass, className) },
            disabled && _react2["default"].createElement("div", { className: clsPrefix + "-disabled-mask" }),
            _react2["default"].createElement(
                "ul",
                _extends({}, others, { className: classNames }),
                first && _react2["default"].createElement(
                    _PaginationButton2["default"],
                    _extends({}, buttonProps, {
                        eventKey: 1,
                        disabled: activePageState === 1,
                        iconBtn: true,
                        className: clsPrefix + "-first"
                    }),
                    _react2["default"].createElement(_beeIcon2["default"], { type: "uf-2arrow-left" })
                ),
                prev && _react2["default"].createElement(
                    _PaginationButton2["default"],
                    _extends({}, buttonProps, {
                        eventKey: activePageState - 1,
                        disabled: activePageState === 1,
                        iconBtn: true,
                        className: clsPrefix + "-prev"
                    }),
                    _react2["default"].createElement(_beeIcon2["default"], { type: "uf-arrow-left" })
                ),
                this.renderPageButtons(activePageState, this.state.items, maxButtons, boundaryLinks, ellipsis, buttonProps),
                next && _react2["default"].createElement(
                    _PaginationButton2["default"],
                    _extends({}, buttonProps, {
                        eventKey: activePageState + 1,
                        disabled: activePageState >= this.state.items,
                        iconBtn: true,
                        className: clsPrefix + "-next"
                    }),
                    _react2["default"].createElement(_beeIcon2["default"], { type: "uf-arrow-right" })
                ),
                last && _react2["default"].createElement(
                    _PaginationButton2["default"],
                    _extends({}, buttonProps, {
                        eventKey: this.state.items,
                        disabled: activePageState >= this.state.items,
                        iconBtn: true,
                        className: clsPrefix + "-last"
                    }),
                    _react2["default"].createElement(_beeIcon2["default"], { type: "uf-2arrow-right" })
                )
            ),
            total != null ? _react2["default"].createElement(
                "div",
                { className: clsPrefix + "-total" },
                local['total'],
                _react2["default"].createElement(
                    "span",
                    null,
                    total
                ),
                local['items']
            ) : null,
            showJump ? _react2["default"].createElement(
                "div",
                { className: "data_per_select" },
                _react2["default"].createElement(
                    "span",
                    null,
                    local['show']
                ),
                _react2["default"].createElement(
                    _beeSelect2["default"]
                    // className="data_select"
                    ,
                    { value: this.state.dataNum,
                        onChange: this.dataNumSelect },
                    dataNumSelect.length > 0 && dataNumSelect.map(function (item, i) {
                        return _react2["default"].createElement(
                            Option,
                            { key: i, value: i },
                            item
                        );
                    })
                ),
                _react2["default"].createElement(
                    "span",
                    null,
                    local['items']
                )
            ) : null,
            showJump ? _react2["default"].createElement(
                "div",
                { className: "page_jump" },
                _react2["default"].createElement(
                    "span",
                    null,
                    local['goto']
                ),
                _react2["default"].createElement("input", {
                    className: "page_jump_value",
                    value: jumpPageState,
                    onKeyDown: this.onKeyup,
                    onChange: this.setPageJump
                }),
                _react2["default"].createElement(
                    "span",
                    null,
                    local['page']
                ),
                jumpBtn
            ) : null
        );
    };

    return Pagination;
}(_react2["default"].Component);

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
Pagination.contextTypes = {
    beeLocale: _propTypes2["default"].object
};
exports["default"] = Pagination;
module.exports = exports["default"];