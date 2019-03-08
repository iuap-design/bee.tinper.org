import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
	placeholder:PropTypes.string,
	options:PropTypes.any,
	onClick:PropTypes.func
};
const defaultProps = {
	placeholder:'请输入信息',
	options:null
};
let tem = [];//用于临时存储点击的节点
let textStr=[];//存储选择的节点
let parentVal ;//存储parent的value
let listArr = [];
let restoreClick;//记录点击的名字
class Cascader extends Component {
	constructor(props) {
		super(props);
		let options = this.props.options;
		for (let i = options.length - 1; i >= 0; i--) {
			options[i]['parent'] = true
		}
		this.state = {
			option : options,
			origin:null,//用于存储点击的第一级节点
			ulArr:null,
			textStr:[]
		}
		this.formatData = this.formatData.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		this.focusHandler = this.focusHandler.bind(this);
		this.clear = this.clear.bind(this);
		this.uniqueID = this.uniqueID.bind(this);
	}
	uniqueID() {
	    function s4(){
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	            s4() + '-' + s4() + s4() + s4();
	}
	formatData(data = this.state.option){
		let option = data;
		let liArr = [],
			ulArr = [];
		for (let i = option.length - 1; i >= 0; i--) {
			if('children' in option[i]){
				liArr.push(<li data-parent = {option[i]['parent']} onClick = {this.clickHandler} key={this.uniqueID()} data-id = {i}>{option[i]['value']}<i className="icon uf">&#xe611;</i></li>)
			}else{
				liArr.push(<li data-parent = {option[i]['parent']} onClick = {this.clickHandler} key={this.uniqueID()} data-id = {i}>{option[i]['value']}</li>)
			}
		}
		let ulStr = (
			<ul key={this.uniqueID()}>
				{liArr}
			</ul>
		);
		listArr.push(ulStr);
		this.setState({
			ulArr : listArr
		});
	}
	focusHandler(e){
		e.stopPropagation();
		e.preventDefault();
		textStr = [];

		if(this.state.ulArr){
			let firstUl = this.state.ulArr[0];
			listArr = [];
			listArr.push(firstUl)
			this.setState({
				ulArr : listArr
			});
		}
		tem = [];
		listArr = [];
		this.setState({
			textStr:textStr
		})
		if(!this.state.ulArr){
			this.formatData();
		}
	}
	clickHandler(e){
		e.stopPropagation();
		e.preventDefault();
		let i = e.currentTarget.dataset.id;
		if(!parentVal)parentVal = this.state.option[i].value;
		let data = (tem[i])||(this.state.option[i].parent&&this.state.option[i]);
		if(e.currentTarget.dataset.parent){
			parentVal = e.currentTarget.innerText;
			let urlArr = this.state.ulArr[0];
			data = this.state.option[i];
			textStr = [];
			tem = [];
			listArr = [];
			listArr.push(urlArr)
			this.setState({
				ulArr : listArr
			});
		}
		if(restoreClick!=e.currentTarget.innerText){
			restoreClick = e.currentTarget.innerText;
			textStr.push(data.value);
			this.setState({
				textStr:textStr
			})
			if(data.children){
				tem = data.children;
				this.formatData(data.children);
			}else{
				this.clear();
			}
		}
		if(this.props.onClick){
			this.props.onClick(textStr);
		}
	}
	clear(){
		tem = [];
		listArr = [];
		this.setState({
			ulArr:null
		})
	}
	componentWillReceiveProps(nextProps){
		if('options' in nextProps){
			let options = nextProps.options;
			for (let i = options.length - 1; i >= 0; i--) {
				options[i]['parent'] = true
			}
			this.setState({
				option:options,
				textStr:[]
			})
			if(this.props.onClick){
				this.props.onClick([]);
			}
		}
	}
	render(){
		let va = this.state.textStr.join('/');
		return(
			<div className={classnames("cascader-container",this.props.className)}>
				<div className="cascader-header">
					<input onFocus = {this.focusHandler} type="text" placeholder = {this.props.placeholder} value={va}  />
				</div>
				<div className="cascader-content" >
					{this.state.ulArr}
				</div>
			</div>
		)
	}
};
Cascader.propTypes = propTypes;
Cascader.defaultProps = defaultProps;
export default Cascader;
