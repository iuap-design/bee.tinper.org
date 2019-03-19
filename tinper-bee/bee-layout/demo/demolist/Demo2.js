/**
 *
 * @title 偏移的栅格
 * @description 使用mdOffset lgOffset smOffset xsOffset来设置栅格偏移的量
 *
 */

import React, {Component} from 'react';
import {Col, Row} from '../../src';

class Demo2 extends Component {
    render() {
        return (
            <Row>
                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}>
                    <div className='grayDeep'>3 offset-3</div>
                </Col>
                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}>
                    <div className='gray'>3 offset-3</div>
                </Col>
                <Col md={6} mdOffset={6} xs={6} xsOffset={6} sm={6} smOffset={6}>
                    <div className='grayLight'>6 offset-6</div>
                </Col>
                <Col md={4} mdOffset={2} xs={4} xsOffset={2} sm={4} smOffset={2}>
                    <div className='gray'>4 offset-2</div>
                </Col>
                <Col md={2} mdOffset={3} xs={2} xsOffset={3} sm={2} smOffset={3}>
                    <div className='grayLight'>2 offset-3</div>
                </Col>
                <Col md={6} mdOffset={3} xs={6} xsOffset={3} sm={6} smOffset={3}>
                    <div className='grayDeep'>6 offset-3</div>
                </Col>
            </Row>
        )
    }
}

export default Demo2;
