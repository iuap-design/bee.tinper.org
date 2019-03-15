/**
 *
 * @title 动态改变options
 * @description 通过动态设置`options`参数，即可灵活改变数据源。
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

class Demo6 extends Component {  
    state = {
        options: addressOptions
    }
    
    changeOptions = () => {
        this.setState({
            options: [{
                label: '北京',
                value: 'bj',
                children: [{
                        label: '故宫',
                        value: 'gg',
                    },{
                        label: '天坛',
                        value: 'tt',
                    },{
                        label: '王府井',
                        value: 'wfj',
                    }]
                },
                {
                    label: '江苏1',
                    value: 'js1',
                    children: [{
                            label: '南京1',
                            value: 'nj1',
                            children: [{
                                label: '中华门1',
                                value: 'zhm1'
                            }]
                        }]
                    },
                    {
                        label: '山东1',
                    value: 'sd1'
                }
            ]
        })
    }

    render(){
        return (
            <Row>
                <Col md={4}>
                    <div className="height-150">
                        <Button colors="primary" onClick={this.changeOptions} style={{marginBottom:8+'px'}}>点击改变选项数组</Button>
                        <Cascader options={this.state.options} placeholder="请选择地址"/>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Demo6;