/**
*
* @title 基本常用Timeline
*
*/

import React, { Component } from 'react';
import Timeline from '../../src';

class Demo1 extends Component {
    render () {
        return (
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
        )
    }
}


export default Demo1;
