/**
 *
 * @title 附加操作
 * @description `extraContent`参数可以在页签右边自定义附加操作。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Tabs from '../../src';

const {TabPane} = Tabs;
class Demo6 extends Component {

    add = () => {
        alert("在这里添加操作 ^_^")
    }

    render() {
        return (
            <div className="Demo6">
                <Tabs
                    className="Demo6-tabs"
                    defaultActiveKey="1"
                    tabBarStyle="upborder"
                    extraContent={
                        <Button className="add-button" size="sm" colors="primary" onClick={this.add}>一些操作</Button>
                    }
                >
                    <TabPane tab='Tab 1' key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab='Tab 2' key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab='Tab 3' key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Demo6;