/**
*
* @title pending Timeline
* @description 当Timeline还未完成或者正在进行,将幽灵节点放到最后。通过设置 pending={true} 或者 pending={a React Element}。
*
*/
import React, { Component } from 'react';
import Timeline from '../../src';

class Demo3 extends Component {
    render () {
        return (
            <Timeline pending={<a href="#">See more</a>}>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}

export default Demo3;


