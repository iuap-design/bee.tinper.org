/**
 *
 * @title 设置延迟显示/隐藏
 * @description 提供三个参数控制延迟时间：delay、delayShow、delayHide。单位：毫秒。如 `delay={800}` 表示延迟时间为 0.8 秒。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Menu from 'bee-menus';
import Dropdown from '../../src';

const { Item } = Menu;

 function onSelect({ key }) {
   console.log(`${key} selected`);

 }

 function onVisibleChange(visible) {
   console.log(visible);
 }

 class Demo1 extends Component {

    render () {
        const menu = (
              <Menu
                onSelect={onSelect}>
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
                    trigger={['hover']}
                    delayShow={800}
                    overlay={menu}
                    animation="slide-up"
                    onVisibleChange={onVisibleChange}>
                    <Button colors='primary'>鼠标移入0.8秒后显示</Button>
                </Dropdown>
            </div>
        )
    }
}

export default Demo1;