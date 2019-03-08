/**
 *
 * @title 不同方向的气泡确认框
 *
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import Popconfirm from '../../src';

class Demo1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = '您喜欢使用tinper-bee组件库吗？';
        return (
            <div className="demoPadding">
                <Popconfirm trigger="click" placement="right" content={content}>
                    <Button colors="primary">向右!</Button>
                </Popconfirm>
                <Popconfirm trigger="click" placement="top" content={content}>
                    <Button colors="primary">向上!</Button>
                </Popconfirm>
                <Popconfirm trigger="click" placement="bottom" content={content}>
                    <Button colors="primary">向下!</Button>
                </Popconfirm>
                <Popconfirm trigger="click" placement="left" content={content} animation={false}>
                    <Button colors="primary">向左!</Button>
                </Popconfirm>
            </div>
        )
    }
}

export default Demo1;
