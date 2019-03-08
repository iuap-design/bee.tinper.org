import { Con, Col, Row } from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {
    render(){
        return(
            <Con>
            <Row>
            <Col mdOffset={3} md={6} >
            <div className='gray'></div>
            </Col>
            </Row>
            <Row>
            <Col md={6} xs={12} >
            <div className='gray'></div>
            </Col>
            <Col md={3} xs={6} >
            <div className='gray'></div>
            </Col>
            <Col md={12} xs={6} >
            <div className='gray'></div>
            </Col>
            </Row>
            <Row>
            <Col md={8} mdPush={4} >
            <div className='gray'></div>
            </Col>
            <Col md={4} mdPull={8} >
            <div className='gray'></div>
            </Col>
            </Row>
            </Con>
        )
    }
}

export default Demo;
