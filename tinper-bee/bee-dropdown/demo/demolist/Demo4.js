/**
 *
 * @title 基础下拉菜单
 * @description 如何获取选中对象自定义对象和数据
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Menu from 'bee-menus';
import Icon from 'bee-icon';
import Dropdown from '../../src';

const { Item } = Menu;
  
 const dataList = [
     {"key":"1",value:"借款合同",id:"a"},
     {"key":"2",value:"抵/质押合同",id:"v"},
     {"key":"3",value:"担保合同",id:"c"},
     {"key":"4",value:"联保合同",id:"d"},
 ]

function onVisibleChange(visible) {
    console.log(visible);
}

 class Demo4 extends Component {
 
    /**
     * 获取当前选中行的item对象。
     * @param {*} value 
     */
    onSelect({key,item}){ 
      console.log(`${key} selected`); //获取key
      let currentObject = item.props.data; //获取选中对象的数据
      console.log(currentObject); 
    }
 
    render () {
        const menu1 = (
            <Menu onSelect={this.onSelect} >{
                dataList.map(da=><Item key={da.key} data={da} >{da.value}</Item> )}
            </Menu>)

        return (
            <div className="demoPadding">
                <Dropdown
                    trigger={['click']} 
                    overlay={menu1}
                    animation="slide-up"
                    onVisibleChange={onVisibleChange}>
                    <Button colors='primary'>点击显示</Button>
                  </Dropdown> 
            </div>
        )
    }
}

export default Demo4;