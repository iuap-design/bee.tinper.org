import React, { Component } from "react";
import PropTypes from 'prop-types';

// const propTypes = {
//     rowsInView: PropTypes.number.isRequired,
// }
// const defaultProps = {
//     data: undefined,
//     height: 40,//默认行高
//     rowsInView:25
// }

export default function keyDownMenu(Menus) {
  return class KeyDownMenu extends Component {
    constructor(props) {
      super(props);

      this.dataMap = {};
      this.getChildToMap(this.props.children);
      this.state = {
        openKeys:this.getOpenKeys()
      };
    }

    getOpenKeys=(key='')=>{
      let defaultKeys = this.props.defaultOpenKeys?[...this.props.defaultOpenKeys]:[]; 
      let keys = this.props.openKeys?[...this.props.openKeys,...defaultKeys]:[...defaultKeys];
      if(key != ''){
        keys.push(keys)
      }
      return keys;
    }

    getChildToMap(childrens){
      childrens.forEach(element => {
        this.dataMap[element.key] = element;
        let itemChildren = element.props.children;
        if(itemChildren && Array.isArray(itemChildren) && itemChildren.length > 0){
          return this.getChildToMap(itemChildren);
        }
      });
      return this.dataMap;
    }


    onKeyDown = (e,item) =>{
      let {_key} = item;
      const keyCode = e.keyCode;
      this.setState({
        openKeys:this.getOpenKeys()
      })
      // openKeys={['demo3sub1','demo3sub4']}

      console.log("----gaojie---onKeyDown -- lib ---- ");
      console.log(e.target);
      console.log(item);
    }

    onSelect = ({item,key,selectedKeys}) => { 
      console.log(`${key} selected`); //获取key
      // let currentObject = {};
      // currentObject.value = item.props.children; //获取选中对象的数据
      // currentObject.key = item.props.eventKey;
      // console.log(currentObject);
      this.setState({
        openKeys:this.getOpenKeys(key)
      })
  }

    render(){
        let {openKeys} = this.props;
        let _openKeys = openKeys?openKeys:[];
        console.log("----openKeys---- ",openKeys);
        return <Menus {...this.props} onKeyDown={this.onKeyDown} 
        openKeys={['demo3sub1','demo3sub4']}
        onClick={this.onSelect}
        // openKeys={_openKeys} 
        />
    }
  };
  // KeyDownMenu.defaultProps = defaultProps;
  // KeyDownMenu.propTypes = propTypes;
}
