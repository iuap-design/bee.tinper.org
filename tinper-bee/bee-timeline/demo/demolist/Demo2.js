/**
*
* @title 定制化颜色Timeline
* @description 设置圆环的颜色[success,info,danger,warning,news]
*
*/
import React, { Component } from 'react';
import Timeline from '../../src';
import Icon from 'bee-icon';

class Demo2 extends Component {
    render () {
        return (
            <Timeline>
                <Timeline.Item color="success">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="info">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="danger">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
            </Timeline>
        )
    }
}


export default Demo2;
