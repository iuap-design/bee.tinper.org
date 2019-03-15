/**
 *
 * @title 选择即改变
 * @description 设置属性 `changeOnSelect` 点任何一级都可以选择。
 *
 */

import React, { Component } from 'react';
import { Row, Col } from 'bee-layout';
import Cascader from '../../src';

const options = [{
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

class Demo5 extends Component {  
    render(){
        return (
            <Row>
                <Col md={4}>
                    <div className="height-150">
                        <Cascader changeOnSelect options={options} placeholder="请选择地址"/>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Demo5;