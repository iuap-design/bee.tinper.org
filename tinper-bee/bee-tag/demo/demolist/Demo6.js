/**
 *
 * @title  多彩标签
 * @description 包含多种预设色彩的标签样式，可以在不同场景使用，通过`colors`属性控制标签的颜色
 * 
 */

import React, { Component } from 'react';
import Tag from '../../src';

 class Demo6 extends Component {

    render () {
        return (
            <div className="demoPadding">
                <div>
                    <Tag colors="dark">dark</Tag>
                    <Tag colors="primary">primary</Tag>
                    <Tag colors="success">success</Tag>
                    <Tag colors="warning">warning</Tag>
                    <Tag colors="danger">danger</Tag>
                    <Tag colors="info">info</Tag>
                </div>  
                <div className="divider"></div>
                <div>
                    <Tag bordered colors="dark">dark</Tag>
                    <Tag bordered colors="primary">primary</Tag>
                    <Tag bordered colors="success">success</Tag>
                    <Tag bordered colors="warning">warning</Tag>
                    <Tag bordered colors="danger">danger</Tag>
                    <Tag bordered colors="info">info</Tag>
                </div>       
            </div>
        )
    }
}

export default Demo6;