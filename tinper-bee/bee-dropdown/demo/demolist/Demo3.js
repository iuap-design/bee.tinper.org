/**
 *
 * @title 控制显示隐藏的下拉菜单
 * @description 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Menu from 'bee-menus';
import Dropdown from '../../src';

const { Item } = Menu;


function onVisibleChange(visible) {
    console.log(visible);
}

class Demo3 extends Component {
    state = {
        visible: false
    }
    handleSelect = () => {
        this.setState({
            visible: false
        })
    }

    handleShow = () => {
        this.setState({
            visible: true
        })
    }

    render () {

        const menu1 = (
            <Menu
                onSelect={this.handleSelect}>
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
                    visible={ this.state.visible }
                    onVisibleChange={onVisibleChange}
                >
                    <Button
                        onClick={this.handleShow}
                        colors='primary'>
                        受控制的下拉
                    </Button>
                </Dropdown>

            </div>
        )
    }
}

export default Demo3;
