import React, {Component} from 'react';
import {Panel} from 'bee-panel';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import AdvancedContainer from './AdvancedContainer';
import HeadContainer from './HeadContainer';
import i18n from './i18n';
import { getComponentLocale } from 'bee-locale/build/tool';


const emFun = () => {}

const propTypes =  {
    isExpandedBtn: PropTypes.bool,//是否显示展开按钮
    defaultExpanded: PropTypes.bool,//展开和收起的默认状态
    expanded: PropTypes.bool,//是否默认展开，false默认关闭
    onSearch: PropTypes.func,//点击查询的回调
    onReset: PropTypes.func,//点击重置的回调
    resetName: PropTypes.string,//重置的文字
    searchName: PropTypes.string,//查询的文字
    title: PropTypes.string,
    onPanelChangeStart: PropTypes.func,//显示或隐藏开始回调
    onPanelChangeIng: PropTypes.func,//显示或隐藏进行中回调
    onPanelChangeEnd: PropTypes.func,//显示或隐藏结束回调
    onChange: PropTypes.func,//点击显示或隐藏回调
    showOperation: PropTypes.bool//是否显示 查询，清空
    // resident: PropTypes.node //常驻面板内容，不会隐藏
};

const defaultProps = {
    isExpandedBtn:true,
    className: "",
    clsPrefix: 'u-search',
    defaultExpanded: false,
    bgColor: "#F7F9FB",
    showOperation: true
};


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: props.expanded || props.defaultExpanded
        };
        this._HeadContainer = null;
        this._AdvancedContainer = null;
    }

    componentWillReceiveProps(nextProps) {
        if ('expanded' in nextProps) {
            this.setState({expanded: nextProps.expanded})
        }
    }

    changeExpanded = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }


    _onChange = () => {
        const { onChange } = this.props;
        if ('expanded' in this.props) {
            this.setState({expanded: this.props.expanded})
        } else {
            this.setState({expanded: !this.state.expanded})
        }
        onChange && onChange()
    }

    search = () => {
        const { onSearch } = this.props;
        onSearch && onSearch();
    }
    reset = () => {
        const { onReset } = this.props;
        onReset && onReset();
    }

    _onPanelChange = (type, func) => {
        if (func) {
            let status = "";
            if (type === 0) {
                status = "hide"
            } else if (type === 1) {
                status = 'visible'
            }
            func(status)
        }
    }

    _onPanelChangeStart = (type) => {
        const { onPanelChangeStart } = this.props;
        onPanelChangeStart && this._onPanelChange(type, onPanelChangeStart)
    }
    _onPanelChangeIng = (type) => {
        const { onPanelChangeIng } = this.props;
        onPanelChangeIng && this._onPanelChange(type, onPanelChangeIng)
    }
    _onPanelChangeEnd = (type) => {
        const { onPanelChangeEnd } = this.props;
        onPanelChangeEnd && this._onPanelChange(type, onPanelChangeEnd)
    }
    _getChildren = (element) => {
        if(element.type.name === "HeadContainer" || element.type.prototype === HeadContainer.prototype){
        // if(element.type.name === "HeadContainer"){
            this._HeadContainer = element;
        }else if(element.type.name === "AdvancedContainer" || element.type.prototype === AdvancedContainer.prototype){
        // }else if(element.type.name === "AdvancedContainer"){
            this._AdvancedContainer = element;
        }
    }


    render() {
        const local = getComponentLocale(this.props, this.context, 'SearchPanel', () => i18n);
        let { children, clsPrefix, className, resetName, searchName, title, bgColor, style, showOperation } = this.props;
        if(!resetName)resetName=local['resetName'];
        if(!searchName)searchName=local['searchName'];
        if(!title)title=local['title'];

        const { expanded } = this.state;
        const _stype = style || {};
        if(children instanceof  Array){
            children.forEach(element => {
                this._getChildren(element);
            });
        }else{
            this._getChildren(children);
        }

        return (
            <div className={clsPrefix + ' ' + className}
                 style={{background: bgColor, ..._stype}}>
                <div className={clsPrefix + "-header"}>
                    <div className={clsPrefix + "-header-title"}>
                        <span>{title}</span>
                        {/*<Icon type="uf-arrow-c-o-down"/>*/}
                    </div>

                    <div className={clsPrefix + "-header-oper"}>
                        {((this._HeadContainer||expanded)&&showOperation) ? <span className="header-oper-btn" role="button" onClick={this.reset}>{resetName}</span> : null}
                        {((this._HeadContainer||expanded)&&showOperation) ? <span className="header-oper-btn primary" role="button" onClick={this.search}>{searchName}</span> : null}
                        {this.props.isExpandedBtn&&<span
                            className="header-oper-btn"
                            role="button"
                            onClick={this._onChange}
                        >
                        {(expanded ? local['up'] : local['down'])}
                            <i className={classnames({
                                'uf': true,
                                'uf-arrow-down': !expanded,
                                'uf-arrow-up': expanded
                            })} />
                    </span>}
                    </div>
                </div>


                <div className={clsPrefix + '-resident'}>
                    {this._HeadContainer}
                </div>

                <Panel
                    collapsible
                    expanded={this.state.expanded}
                    onExit={this._onPanelChangeStart.bind(this, 0)}//隐藏开始回调
                    onEnter={this._onPanelChangeStart.bind(this, 1)}//显示开始回调
                    onExiting={this._onPanelChangeIng.bind(this, 0)}//隐藏进行中回调
                    onEntering={this._onPanelChangeIng.bind(this, 1)}//显示进行中回调
                    onExited={this._onPanelChangeEnd.bind(this, 0)}//隐藏完成回调
                    onEntered={this._onPanelChangeEnd.bind(this, 1)}//显示后回调
                >
                    {this._AdvancedContainer}
                </Panel>
            </div>

        )
    }
}
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
SearchPanel.contextTypes = {
    beeLocale: PropTypes.object
};

export default SearchPanel;