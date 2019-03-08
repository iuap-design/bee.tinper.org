/**
 *
 * @title 平移的栅格
 * @description 通过设置mdPull, mdPush来控制平移的量
 *
 */

import React, {Component} from 'react';
import {Col, Row} from '../../src';

class Demo3 extends Component {
    render() {
        return (
            <Row>
                <Col md={8} mdPush={4} xs={8} xsPush={4} sm={8} smPush={4}>
                    <div className='grayDeep'>8 push-4</div>
                </Col>
                <Col md={4} mdPull={8} xs={4} xsPull={8} sm={4} smPull={8}>
                    <div className='gray'>4 pull-8</div>
                </Col>
            </Row>
        )
    }
}

export default Demo3;
