/**
 *  @title 基础Tab
 *  @description 通过Tabs和TabPane配合完成Tab功能
 *
 */

import React, {Component} from 'react';
import Tabs from '../../src';

const {TabPane} = Tabs;

class Demo1 extends Component {
    state = {
        activeKey: "1"
    }

    onChange = (activeKey) => {
        console.log(`onChange ${activeKey} o-^-o`);
        this.setState({
            activeKey,
        });
    }

    render() {
        return (
            <Tabs
                defaultActiveKey="1"
                onChange={this.onChange}
                className="demo1-tabs"
            >
                <TabPane tab='Tab 1' key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab='Tab 2' key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab='Tab 3' key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }
}

export default Demo1;