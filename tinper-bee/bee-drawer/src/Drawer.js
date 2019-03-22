import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {bindAll,isNumber} from './common';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const propTypes = {
	placement: PropTypes.oneOf(['left','right','top','bottom']),
	hasHeader: PropTypes.bool,
	show: PropTypes.bool,
	title: PropTypes.string,
	className: PropTypes.string,
	showMask: PropTypes.bool,
	maskClosable: PropTypes.bool,
	zIndex: PropTypes.number,
	showClose: PropTypes.bool,
	width: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
	destroyOnClose: PropTypes.bool,
	container: PropTypes.string
}

const defaultProps = {
	placement: 'left',
	hasHeader: true,
	show: false,
	showMask: true,
	maskClosable: true,
	zIndex: 100000,
	showClose: false,
	width: 'auto',
	height: 'auto',
	destroyOnClose: false,
	container: 'body'
}

const DrawerContext = React.createContext(null);

class Drawer extends Component{
    constructor(props){
		super(props);
		this.state = {
			showDrawer: true,
			width: '0',
			push: false
		};
		this.drawer = null;
		this.parentDrawer = null;
		bindAll(this,['fMaskClick','fDrawerTransitionEnd','renderMask','renderClose','fCloseClick','renderBody','renderAll']);
	}
	componentDidUpdate(preProps){
		//在有父级抽屉时候，子级触发父级向外移动一段距离
		if(preProps.show != this.props.show && this.parentDrawer){
			if(this.props.show){
				this.parentDrawer.push();
			}
			else{
				this.parentDrawer.pull();
			}
		}
	}
	push(){
		this.setState({
			push: true
		})
	}
	pull(){
		this.setState({
			push: false
		})
	}
	fMaskClick(){
		const {maskClosable} = this.props;
		if(maskClosable){
			const {onClose} = this.props;
			onClose && onClose();
		}
	}
	fCloseClick(){
		const {onClose} = this.props;
		onClose && onClose();
	}
	fDrawerTransitionEnd(e){
		
	}
	renderMask(){
		const {show,showMask,fMaskClick} = this.props;
		//mask样式
		let maskStyle;
		if(show){
			maskStyle = {
				opacity: 1,
				width: '100%'
			}
		}
		else{
			maskStyle = {
				opacity: 0,
				width: 0
			}
		}
		return (
			showMask ? <div className="drawer-mask" style={maskStyle} onClick={this.fMaskClick}></div> : null
		)
	}
	renderClose(){
		const {showClose} = this.props;
		return (
			showClose ? <i className="drawer-close" onClick={this.fCloseClick}>×</i> : null
		)
	}
	renderBody(){
		const {destroyOnClose,show} = this.props;
		if(destroyOnClose && !show){
			return null;
		}
		let {hasHeader,title,children,width,height,placement} = this.props;
		let {push} = this.state;
		//抽屉类
		const drawerClass = classNames('drawer',`drawer-${placement}`);
		//根据位置获取抽屉样式
		const translateHideMap = {
			left: 'translateX(-100%)',
			right: 'translateX(100%)',
			top: 'translateY(-100%)',
			bottom: 'translateY(100%)'
		}; 
		let translateShow = 'translate(0,0)';
		if(push){
			const pushNum = 50;
			const translateShowMap = {
				left: `translate(${pushNum}px,0)`,
				right: `translate(-${pushNum}px,0)`,
				top: `translate(0,${pushNum}px)`,
				bottom: `translate(0,-${pushNum}px)`
			}
			translateShow = translateShowMap[placement];
		}
		const translate = show ? translateShow : translateHideMap[placement];
		//抽屉面板样式
		if(isNumber(width)){
			width = width + 'px';
		}
		if(isNumber(height)){
			height = height + 'px';
		}
		if(placement == 'top' || placement == 'bottom'){
			if(width == 'auto'){
				width = '100%';
			}
		}
		if(placement == 'left' || placement == 'right'){
			if(height == 'auto'){
				height = '100%';
			}
		}
		const drawerStyle = {
			transform: translate,
			WebkitTransform: translate,
			width: width,
			height: height
		}
		const closer = this.renderClose();
		const header = (
			hasHeader ? (<div className="drawer-header"><div className="drawer-header-title">{title}</div></div>) : ''
		)
		return (
			<DrawerContext.Provider value={this}>
				<div ref={(drawer) => {this.drawer = drawer}} onTransitionEnd={this.fDrawerTransitionEnd} className={drawerClass} style={drawerStyle}>
					{closer}
					{header}
					<div className="drawer-body">
						{children}
					</div>
				</div>
			</DrawerContext.Provider>
		)
	}
	renderAll(value){
		let {show,className,zIndex} = this.props;
		//容器类
		const drawercClass = classNames('drawerc',className);
		//容器样式
		let drawercStyle = {zIndex:zIndex}
		if(show){
			drawercStyle.width = '100%';
		}
		else{
			drawercStyle.width = 0;
		}
		//获取父级抽屉
		this.parentDrawer = value;

		return (
			<div className={drawercClass} style={drawercStyle}>
				{this.renderMask()}
				{this.renderBody()}
			</div>
		)
	}
	render(){
		const {container} = this.props;
		const conDom = document.querySelector(container);

		return (
			ReactDOM.createPortal(<DrawerContext.Consumer>{this.renderAll}</DrawerContext.Consumer>,conDom)
		)
	}
}

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;


export default Drawer;
