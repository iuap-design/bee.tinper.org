/**
 *
 * @title 使用键盘操作示例
 * @description 
 *
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Menu from 'bee-menus';
import Icon from 'bee-icon';
import Dropdown from '../../src';

const { Item } = Menu;



 class Demo5 extends Component {

    onSelect({ key }) {
        console.log(`${key} selected`);
    }
    onVisibleChange=(visible)=> {
        console.log(visible);
         if(visible){
             window.setTimeout(()=>{
                ReactDOM.findDOMNode(this.refs.menurefs).focus();
             })
         }
      }

    render () {

        const menu1 = (
            <Menu ref='menurefs'
                keyboard={true}
                onSelect={this.onSelect}>
                <Item key="1">借款合同</Item>
                <Item key="2">抵/质押合同</Item>
                <Item key="3">担保合同</Item>
                <Item key="4">联保合同</Item>
                <Item key="5">合同审批</Item>
                <Item key="6">抵/质押合同跟踪</Item>
            </Menu>
          );
        return (
            <div className="demoPadding">
                <Dropdown
                    trigger={['click']}
                    overlay={menu1}
                    animation="slide-up"
                    onVisibleChange={this.onVisibleChange}>
                    <Button colors='primary'>点击显示</Button>
                </Dropdown>
            </div>
        )
    }
}

export default Demo5;