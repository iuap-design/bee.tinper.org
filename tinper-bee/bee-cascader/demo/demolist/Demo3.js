/**
 *
 * @title 移入展开
 * @description 鼠标hover时展开菜单子选项
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

class Demo3 extends Component {

    onChange = (value) => {
        console.log(value)
    }

    render(){
        return (
            <Row>
                <Col md={4}>
                    <div className="height-150">
                        <Cascader expandTrigger="hover" options={options} onChange={this.onChange} placeholder="请选择地址"/>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Demo3;