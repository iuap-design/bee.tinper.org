/**
 *
 * @title 顶部border
 * @description `tabBarStyle`参数设置不同的tabBar样式，取值可以是'primary'、'simple'或'upborder'。
 *
 */

import React, { Component } from 'react';
import Tabs from '../../src';

const {TabPane} = Tabs;

class Demo5 extends Component {
    render() {

        return (
            <div className="Demo5">
                <Tabs
                    className="Demo5-tabs"
                    defaultActiveKey="1"
                    tabBarStyle="upborder"
                >
                    <TabPane tab='Tab 1' key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab='Tab 2' key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab='Tab 3' key="3">Content of Tab Pane 3</TabPane>
                    <TabPane tab='Tab 4' key="4">Content of Tab Pane 4</TabPane>
                    <TabPane tab='Tab 5' key="5">Content of Tab Pane 5</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Demo5;