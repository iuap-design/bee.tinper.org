import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Gumshoe from 'gumshoejs';

const propTypes = {
    selector:PropTypes.string.isRequired,//选择器
    offset:PropTypes.any,//偏移量
    navClass:PropTypes.string,//当前被激活锚点新增的类名
    contentClass:PropTypes.string,//当前被激活的区域
    nested:PropTypes.bool,
    nestedClass:PropTypes.string,
    reflow:PropTypes.bool,
    event:PropTypes.bool,//是否添加监听事件
    activeHandle:PropTypes.func,//被激活的回调
    deactiveHandle:PropTypes.func,//激活后的回调
};
const defaultProps = {
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content
 
    // Nested navigation
    nested: false, // if true, add classes to parents of active link
    nestedClass: 'active', // applied to the parent items
 
    // Offset & reflow
    offset: 0, // how far from the top of the page to activate a content area
    reflow: false, // if true, listen for reflows
 
    // Event support
    events: true, // if true, emit custom events
    activeHandle:()=>{},
    deactiveHandle:()=>{}
};
class Anchor extends Component {

    componentDidMount(){
        let props = this.props;
        this.anchor = new Gumshoe(props.selector,{
            ...props
        })
        this.anchorDOM.addEventListener('gumshoeActivate',(event)=>{
            // The list item
            let li = event.target;//列表
            
            // The link
            let link = event.detail.link;//a标签

            // The content
            let content = event.detail.content;//内容区域

            props.activeHandle(li,link,content)
        })
        this.anchorDOM.addEventListener('gumshoeDeactivate',(event)=>{
            let li = event.target;//列表
            
            // The link
            let link = event.detail.link;//a标签

            // The content
            let content = event.detail.content;//内容区域

            props.deactiveHandle(li,link,content)
        })
    }
    componentDidUpdate(){
        this.anchor.setup()
        this.anchor.detect()
    }
    componentWillUnmount(){
        this.anchor.destroy()
    }
    render(){
        const {
            navClass,
            contentClass,
            nested, 
            nestedClass, 
            offset, 
            reflow, 
            events, 
            activeHandle,
            deactiveHandle,
            ...others
        } = this.props;
        return (
            <div className='u-anchor' ref={ref=>{this.anchorDOM=ref}} {...others}>
                {this.props.children}    
            </div>
        )
    }
};

Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;
export default Anchor;