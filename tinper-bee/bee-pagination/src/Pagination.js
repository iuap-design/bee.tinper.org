import classnames from "classnames";
import React from "react";
import PaginationButton from "./PaginationButton";
import Button from 'bee-button';
import Select from 'bee-select';
import Icon from 'bee-icon';
import assign from 'object-assign';

import PropTypes from "prop-types";
import i18n from './i18n';
import { getComponentLocale } from 'bee-locale/build/tool';


const Option = Select.Option;

const propTypes = {
    /**
     * 当前激活状态页
     */
    activePage: PropTypes.number,
    /**
     * 总页数
     */
    items: PropTypes.number,
    /**
     * 显示按钮从1到maxButton的按钮数
     */
    maxButtons: PropTypes.number,

    /**
     * 当为true,不管切换到多少页都显示第一页和最后一页的按钮
     */
    boundaryLinks: PropTypes.bool,

    /**
     * 当为true,显示省略号，否则
     *
     */
    ellipsis: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /**
     *  当为true,显示点击到第一页的按钮
     */
    first: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /**
     *  当为true,显示点击到最后一页的按钮
     */
    last: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /**
     * 当为true,显示前一页按钮
     */
    prev: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /**
     * 当为true,显示下一页按钮
     */
    next: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /**
     * 暴露给用户的切换页的方法
     */
    onSelect: PropTypes.func,

    /**
     * You can use a custom element for the buttons
     */
    buttonComponentClass: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    /**
     * 每页多少条的选择
     */
    dataNumSelect: PropTypes.array,
    /**
     * 每页多少条选择哪一个
     */
    dataNum: PropTypes.number,
    /**
     * 显示跳页
     */
    showJump: PropTypes.bool,
    /**
     * 显示总共条数
     */
    total: PropTypes.number,
    /** 
     *  pagiantion不可点
     */
    disabled: PropTypes.bool,
    /**
     *  确认按钮的样式集合
     */
    btnType: PropTypes.object,
    /**
     *  渲染确认按钮的dom
     */
    confirmBtn: PropTypes.func,
};


const defaultProps = {
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
    dataNumSelect: [
        '5',
        '10',
        '15',
        '20'
    ],
    dataNum: 1,
    showJump: false,
    locale: {},
    disabled: false,
    btnType: { shape: 'border' },
    confirmBtn: () => {}
};


class Pagination extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activePage: this.props.activePage,//当前的页码
            dataNum: props.dataNum,
            items: props.items ? props.items : props.total ? Math.ceil(props.total / props.dataNumSelect[props.dataNum]) : 1,
            jumpPageState: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.activePage !== nextProps.activePage) {
            this.setState({
                activePage: nextProps.activePage,
            })
        }
        if ((nextProps.dataNum === 0 || nextProps.dataNum) && this.props.dataNum !== nextProps.dataNum) {
            this.setState({
                dataNum: nextProps.dataNum,
                // 20181210因为dataNumSelect的某项不是数字或者数字字符串
                items: Number.isNaN(parseInt(nextProps.dataNumSelect[nextProps.dataNum])) ? 1:Math.ceil(nextProps.total / nextProps.dataNumSelect[nextProps.dataNum])
            })
        }
        if ('items' in nextProps && this.props.items !== nextProps.items) {
            let newItems = nextProps.items === 0 ? 1 : nextProps.items;
            this.setState({
                items: newItems,
            })
        }
    }

    onKeyup = (e) => {
        e.keyCode === 13 && this.handleEnsurePageJump()
    }

    setPageJump = (e) => {
        let value = e.target.value;
        // 20181129跳转内容可以清空
        if (value !== '' && (isNaN(Number(value)) || value > this.state.items || value <= 0)) {
            return false;
        } else {
            this.setState({
                jumpPageState: value
            })
        }

    }

    /**
     * 确认跳页
     */
    handleEnsurePageJump = () => {
        const { jumpPageState } = this.state;
        const { onSelect } = this.props;
        if (jumpPageState === '') {
            return;
        }
        this.setState({
            activePage: jumpPageState * 1,
            jumpPageState: ''
        });
        if (typeof onSelect === 'function') {
            onSelect(jumpPageState * 1)
        }
    }

    /**
     * 每页多少条的选择
     * @param e
     */
    dataNumSelect = (value) => {
        // console.log(value);
        const { onDataNumSelect, total } = this.props;
        let dataNumValue = this.props.dataNumSelect[value];
        // console.log("dataNumValue", dataNumValue);
        if (total) {
            this.setState({
                // 20181210因为dataNumSelect的某项不是数字或者数字字符串
                items: Number.isNaN(parseInt(dataNumValue))?1:Math.ceil(total / dataNumValue)
            })
        }
        this.setState({
            dataNum: value
        })
        if (typeof onDataNumSelect === 'function') {
            onDataNumSelect(value, dataNumValue)
        }
    }

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
    renderPageButtons(activePage, items, maxButtons, boundaryLinks, ellipsis, buttonProps) {
        let pageButtons = [];

        let startPage;
        let endPage;
        let hasHiddenPagesAfter;

        if (maxButtons) {
            //根据max很当前activepage计算出应隐藏activeButton之前的页数
            let hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
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
        for (let pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
            pageButtons.push(
                <PaginationButton
                    {...buttonProps}
                    key={pagenumber}
                    eventKey={pagenumber}
                    active={pagenumber === activePage}
                >
                    {pagenumber}
                </PaginationButton>
            );
        }
        //如果boundaryLinks和eclipsis且startPage!=1 需要加上before More Button
        if (boundaryLinks && ellipsis && startPage !== 1) {
            if (startPage > 2) {
                pageButtons.unshift(
                    <PaginationButton
                        key="ellipsisFirst"
                        disabled
                        componentClass={buttonProps.componentClass}
                    >
                        <span aria-label="More">
                            {ellipsis === true ? "\u2026" : ellipsis}
                        </span>
                    </PaginationButton>
                );
            }
            //加上最小边界 Button
            pageButtons.unshift(
                <PaginationButton {...buttonProps} key={1} eventKey={1} active={false}>
                    1
                </PaginationButton>
            );
        }
        //如果maxButtons和eclipsis且hasHiddenPagesAfter 需加上after More Button
        if (maxButtons && hasHiddenPagesAfter && ellipsis) {
            if (!boundaryLinks || (boundaryLinks && (items > 1 + endPage))) {
                pageButtons.push(
                    <PaginationButton
                        key="ellipsis"
                        disabled
                        componentClass={buttonProps.componentClass}
                    >
                        <span aria-label="More">
                            {ellipsis === true ? "\u2026" : ellipsis}
                        </span>
                    </PaginationButton>
                );
            }
            //如果最后一个页数按钮不等于总页数 且 边界为true 需加上最大边界按钮
            if (boundaryLinks && endPage !== items) {
                pageButtons.push(
                    <PaginationButton
                        {...buttonProps}
                        key={items}
                        eventKey={items}
                        active={false}
                    >
                        {items}
                    </PaginationButton>
                );
            }
        }

        return pageButtons;
    }

    render() {
        const local = getComponentLocale(this.props, this.context, 'Pagination', () => i18n);

        const {
            items,
            maxButtons,
            boundaryLinks,
            ellipsis,
            first,
            last,
            prev,
            next,
            onSelect,
            buttonComponentClass,
            noBorder,
            className,
            clsPrefix,
            size,
            gap,
            onDataNumSelect,
            dataNumSelect,
            dataNum,
            activePage,
            showJump,
            total,
            disabled,
            btnType,
            confirmBtn,
            ...others
        } = this.props;

        const activePageState = this.state.activePage;
        const jumpPageState = this.state.jumpPageState;

        const btnDom = confirmBtn(assign({}, this.props));
 
        const classes = {};
        if (noBorder) {
            classes[`${clsPrefix}-no-border`] = true;
        }
        if (size) {
            classes[`${clsPrefix}-${size}`] = true;
        }
        if (gap) {
            classes[`${clsPrefix}-gap`] = true;
        }
        if (!!btnDom) {
            classes[`${clsPrefix}-with-jumpbtn`] = true;
        }


        let classNames = classnames(`${clsPrefix}-list`, classes);
        const wrapperClass = classnames(clsPrefix, {
            [`${clsPrefix}-disabled`]: disabled,
        })
        /**
         *  页按钮属性
         *  onSelect:暴露在外层交互动作，也是与父组件Pagination的交流接口
         *  componentClass: 用户定义的按钮dom元素类型
         */
        const buttonProps = {
            onSelect,
            componentClass: buttonComponentClass
        };
        const jumpBtn = btnDom ? (
            <div className="page_jump_btn" onClick={this.handleEnsurePageJump}>
              {btnDom}
            </div>
        ) : null;
        return (

            <div className={classnames(wrapperClass,className)}>
                {
                    disabled && <div className={`${clsPrefix}-disabled-mask`}>
                    </div>
                }
                <ul {...others} className={classNames}>
                    {first && (
                        <PaginationButton
                            {...buttonProps}
                            eventKey={1}
                            disabled={activePageState === 1}
                            iconBtn={true}

                        >
                            <Icon type="uf-2arrow-left"></Icon>
                            {/* <span aria-label="First">{first === true ? "\u00ab" : first}</span> */}
                        </PaginationButton>
                    )}
                    {prev && (
                        <PaginationButton
                            {...buttonProps}
                            eventKey={activePageState - 1}
                            disabled={activePageState === 1}
                            iconBtn={true}

                        >
                            <Icon type="uf-arrow-left"></Icon>
                            {/* <span aria-label="Previous">{prev === true ? "\u2039" : prev}</span> */}
                        </PaginationButton>
                    )}

                    {this.renderPageButtons(
                        activePageState,
                        this.state.items,
                        maxButtons,
                        boundaryLinks,
                        ellipsis,
                        buttonProps
                    )}

                    {next && (
                        <PaginationButton
                            {...buttonProps}
                            eventKey={activePageState + 1}
                            disabled={activePageState >= this.state.items}
                            iconBtn={true}
                            >
                            <Icon type="uf-arrow-right"></Icon>
                            {/* <span aria-label="Next">{next === true ? "\u203a" : next}</span> */}
                        </PaginationButton>
                    )}
                    {last && (
                        <PaginationButton
                            {...buttonProps}
                            eventKey={this.state.items}
                            disabled={activePageState >= this.state.items}
                            iconBtn={true}
                            >
                            <Icon type="uf-2arrow-right"></Icon>
                            {/* <span aria-label="Last">{last === true ? "\u00bb" : last}</span> */}
                        </PaginationButton>
                    )}
                </ul>
                {
                    total != null ? (
                        <div className={`${clsPrefix}-total`}>
                            {local['total']}
                            <span>{total}</span>
                            {local['items']}
                        </div>
                    ) : null
                }

                {
                    showJump ? (
                        <div className="data_per_select">
                            <span>{local['show']}</span>
                            {/* <select
                                    name="data-select"
                                    className="data_select"
                                    value={this.state.dataNum}
                                    onChange={this.dataNumSelect}>
                                    {dataNumSelect.length > 0 &&
                                    dataNumSelect.map((item, i) => {
                                        return <option key={i} value={i}>{item}</option>
                                    })}
                                </select> */}
                            <Select
                                // className="data_select"
                                value={this.state.dataNum}
                                onChange={this.dataNumSelect}>
                                {dataNumSelect.length > 0 &&
                                    dataNumSelect.map((item, i) => {
                                        return <Option key={i} value={i}>{item}</Option>
                                    })}
                            </Select>
                            <span>{local['items']}</span>
                        </div>
                    ) : null
                }
                {
                    showJump ? (
                        <div className="page_jump">
                            <span>{local['goto']}</span>
                            <input
                                className="page_jump_value"
                                value={jumpPageState}
                                onKeyDown={this.onKeyup}
                                onChange={this.setPageJump}
                            />
                            <span>{local['page']}</span>
                            {jumpBtn}
                            {/* <Button
                                className="page_jump_btn"
                                onClick={this.handleEnsurePageJump}
                                // shape="border"
                                {...btnType}
                            >
                            <span>{local['ok']}</span>
                            </Button> */}
                        </div>
                    ) : null
                }

            </div>

        );
    }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
Pagination.contextTypes = {
    beeLocale: PropTypes.object
};
export default Pagination;