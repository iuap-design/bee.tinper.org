/**
 *
 * @title 默认的模态框
 * @description
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';


class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({
            showModal: false
        });
    }
    open() {
        this.setState({
            showModal: true
        });
    }
    render () {
        return (
        <div>
            <Button
            colors = "primary"
            className="demo-margin"
            onClick = { this.open }>
                打开模态框
            </Button>​
            <Modal
            show = { this.state.showModal }
            onHide = { this.close } >
                <Modal.Header closeButton>
                    <Modal.Title>标题</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={ this.close } colors="secondary" style={{marginRight: 8}}>取消</Button>
                    <Button onClick={ this.close } colors="primary">确认</Button>
                </Modal.Footer>
           </Modal>
        </div>
        )
    }
}

export default Demo1;
