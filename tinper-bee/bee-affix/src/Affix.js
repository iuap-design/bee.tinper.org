import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {addEventListener,removeEventListener} from './utils';
const propTypes = {
    container: PropTypes.object,
    offsetTop: PropTypes.number,
    horizontal: PropTypes.bool,
    target: PropTypes.func,//不对外开放，获取滚动scroll以及resize功能
    onChange: PropTypes.func,//状态fixed或infixed时候调用
    onTargetChange: PropTypes.func,//功能只有一个，时时刻刻输出state的状态
    zIndex: PropTypes.number,
    canHidden:PropTypes.bool,
    childrenRef:PropTypes.object,
};

const defaultProps = {
    offsetTop: 0,
    horizontal: false,
    // container: document.body,
    target: () => window,
    onChange: (affixed) => ({}),
    onTargetChange: (state) => ({}),
    zIndex: 2,
    canHidden:false,
    childrenRef:null,
};

class Affix extends Component {
	constructor(props) {
        super(props);
        this.state = {
            affixed: false,
            initTop: 0,
            initLeft: 0,
            top:0,//affix距离顶部的距离
            left:0,//affix距离左边的距离
            marginTop: 0,//top - containerTop
            marginLeft: 0,//left - containerLeft
            height: 0,//affix的高度
            width: 0,//affix的宽度
            containerHeight: 0,//container的高度
            containerWidth: 0,//container的宽度
            containerId:"u-affix-container"+Math.random().toString(26).substring(2,10),
        }
        this.calculate = this.calculate.bind(this);
        this.getInitPosition = this.getInitPosition.bind(this);
        this.getContainerDOM = this.getContainerDOM.bind(this);
        this.handleTargetChange = this.handleTargetChange.bind(this);
    }
 

    componentDidMount() {
        this.getInitPosition(undefined,true);
        const listenTarget = this.props.target();
        if (listenTarget) {
            addEventListener(listenTarget,'resize',this.handleTargetChange);
            addEventListener(listenTarget,'scroll',this.handleTargetChange);
            // listenTarget.addEventListener('resize', e=>this.handleTargetChange(e,'resize'))
            // listenTarget.addEventListener('scroll', e=>this.handleTargetChange(e,'scroll'))
        }
    }

    componentWillUnmount() {
        const listenTarget = this.props.target();
        if (listenTarget) {
            removeEventListener(listenTarget,'resize',this.handleTargetChange);
            removeEventListener(listenTarget,'scroll',this.handleTargetChange);
            // listenTarget.addEventListener('resize', e=>this.handleTargetChange(e,'resize'))
            // listenTarget.addEventListener('scroll', e=>this.handleTargetChange(e,'scroll'))
        }
    }

    /**
     * 获取container
     * @return {[type]} [description]
     */
    getContainerDOM =(nextProps)=> {
        const container = nextProps?nextProps.container:this.props.container;
        if(!container){
            return document.body
        }
        if (container != document.body) {
            return ReactDOM.findDOMNode(container);
        }
        return container;
    }

    /**
     * 第一次 和 每次srcoll和resize也会执行该方法
     * initTop,initLeft，marginTop,marginLeft都是不变的
     * @return {[type]} [description]
     */
    getInitPosition =(nextProps,flag)=> {
        const container = this.getContainerDOM(nextProps);
        // 20180927children是个变化，所以在nextprops要传入childrenRef，否则直接使用后面的语句
        const thisElm = nextProps && nextProps.childrenRef && ReactDOM.findDOMNode(nextProps.childrenRef) || ReactDOM.findDOMNode(this);
        this.setState({
            height: thisElm.offsetHeight,
            width: thisElm.offsetWidth,
            containerHeight: container.offsetHeight,
            containerWidth: container.offsetWidth,
        })
        const containerRect = container.getBoundingClientRect();
        const thisElemRect = thisElm.getBoundingClientRect();

        let { top, left } = thisElemRect;
        const marginTop = top - containerRect.top;
        const marginLeft = left - containerRect.left;
        this.setState({
            top: top,
            left: left,
            initTop: flag ? top :this.state.initTop,
            initLeft: flag ? left :this.state.initLeft,
            marginTop: marginTop,
            marginLeft: marginLeft
        });
    }

    /**
     * [description]主要用于处理scroll以及reseize事件重新计算布局
     * @param  {[object]} evt [scroll或者resize事件]
     * 有两个函数：onChange 和 onTargetChange;
     */
    handleTargetChange =(evt,type)=> {
        const container = this.getContainerDOM();//是body
        const { top, left } = container.getBoundingClientRect()

        this.setState({
            top: top + this.state.marginTop,//=0是临界值，滚动条使得屏幕顶端正好在affix上面，前者一直变化后者为不变
            left: left + this.state.marginLeft,//原理同上
            containerHeight: container.offsetHeight,
            containerWidth: container.offsetWidth,
        });

        if (this.state.top <= this.props.offsetTop) {
            if ( this.state.affixed === false) {
                this.props.onChange({ affixed: true, event: evt});
            }
            this.setState({ affixed: true });//=true,calculate起作用
        }

        if (this.state.top > this.props.offsetTop) {
            if ( this.state.affixed === true) {
                this.props.onChange({ affixed: false, event: evt});
                //新增还原样式
                
            }
            this.setState({ affixed: false })
        }
 
        this.props.onTargetChange(this.state);
        this.getInitPosition(undefined,false);
    }
    
    /**
     * 只有上面的方法handleTargetChange使得affixed=ture才会执行
     * @return {[type]} [description]
     */
    calculate =()=> {
        let fixStyle = {};
        let boxStyle = {};
        //20171102修改，添加(this.state.top - this.state.marginTop == 0)的判断，谨防height+offsetTop >= containerHeight, handleTargetChange中的
        //this.state.top <= this.props.offsetTop 恒成立，一直有position:affixed
        if(!this.state.affixed || (this.state.top - this.state.marginTop == 0)) return {fixStyle, boxStyle}
        let h = (this.state.top - this.state.marginTop + this.state.containerHeight) - this.state.height;
        if (this.state.top < this.props.offsetTop) {
            fixStyle = {
                position: "fixed",
                //修改20171102 去掉展示Affix全部内容，若是Affix内容高度大于container可展示，那么Affix只可展示部分
                // top: this.props.canHidden ? ( h < 0 ? h : Math.min(h, this.props.offsetTop)) : ( h < 0 ? 0 : Math.min(h, this.props.offsetTop)),
                top: this.props.canHidden ? ( h < 0 ? h : Math.min(h, this.props.offsetTop)) : this.props.offsetTop,
                left: this.props.horizontal ? this.state.initLeft : this.state.left,
                height: this.state.height,
                width: this.state.width,
                zIndex: this.props.zIndex,
            }
            boxStyle = {height: this.state.height}
        }
        return {fixStyle, boxStyle}
    }

    render() {
        const { fixStyle, boxStyle }= this.calculate();
        const {
            offsetTop,
            horizontal,
            container,
            target,
            onChange,
            onTargetChange,
            zIndex,
            canHidden,
            childrenRef,
            ...others
        } = this.props;
        return (
            <div {...others} className={classnames("u-affix-container",this.props.className)} id={this.state.containerId} style={boxStyle}>
                <div className="u-affix-content" style={fixStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
Affix.propTypes = propTypes;

Affix.defaultProps = defaultProps;
export default Affix;