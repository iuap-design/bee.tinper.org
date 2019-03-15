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

const addressOptions = [{
    label: '浙江',
    value: 'zj',
    children: [{
            label: '杭州',
            value: 'hz',
            children: [{
                label: '西湖',
                value: 'xh',
                children: [{
                    label: '白娘子',
                    value: 'bnz'
                },{
                    label: '许仙',
                    value: 'xx'
                }]
            }]
        }]
    },
    {
        label: '江苏',
        value: 'js',
        children: [{
            label: '南京',
            value: 'nj',
            children: [{
                label: '中华门',
                value: 'zhm'
            }]
        }]
    },
    {
        label: '山东',
        value: 'sd'
    }
];

class Demo7 extends Component {  

    render(){
        return (
            <Row>
                <Col md={4}>
                    <div className="height-150 demo7">
                        <Cascader size="sm" options={addressOptions} placeholder="请选择地址"/>
                        <Cascader options={addressOptions} placeholder="请选择地址"/>
                        <Cascader size="lg" options={addressOptions} placeholder="请选择地址"/>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Demo7;