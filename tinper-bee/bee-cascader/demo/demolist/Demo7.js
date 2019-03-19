/**
 *
 * @title 不同尺寸的Cascader
 * @description 通过设置`size`属性为 "lg" 和 "sm" 将输入框设置为大和小尺寸，不设置为默认（中）尺寸。
 *
 */

import React, { Component } from 'react';
import { Row, Col } from 'bee-layout';
import Button from 'bee-button';
import Cascader from '../../src';

const options = [{
    label: '基础组件',
    value: 'jczj',
    children: [{
        label: '导航',
        value: 'dh',
        children: [{
            label: '面包屑',
            value: 'mbx'
        },{
            label: '分页',
            value: 'fy'
        },{
            label: '标签',
            value: 'bq'
        },{
            label: '菜单',
            value: 'cd'
        }]
    },{
        label: '反馈',
        value: 'fk',
        children: [{
            label: '模态框',
            value: 'mtk'
        },{
            label: '通知',
            value: 'tz'
        }]
        },
        {
        label: '表单',
            value: 'bd'
        }]
    },{
        label: '应用组件',
        value: 'yyzj',
        children: [{
            label: '参照',
            value: 'ref',
            children: [{
                label: '树参照',
                value: 'reftree'
            },{
                label: '表参照',
                value: 'reftable'
            },{
                label: '穿梭参照',
                value: 'reftransfer'
            }]
        }]
    }
];

class Demo7 extends Component {  

    render(){
        return (
            <Row>
                <Col md={4}>
                    <div className="height-150 demo7">
                        <Cascader size="sm" options={options} placeholder="请选择"/>
                        <Cascader options={options} placeholder="请选择"/>
                        <Cascader size="lg" options={options} placeholder="请选择"/>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Demo7;