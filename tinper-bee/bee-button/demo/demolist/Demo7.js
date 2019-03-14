/**
 *
 * @title 按钮和模态框组合使用
 * @description 点击按钮打开模态框
 *
 */

import React, { Component } from 'react';
import Modal from 'bee-modal';
import Button from '../../src';

 class Demo7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
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

    render() {
        return (
            <div>
                <Button colors="primary" onClick={ this.open }>事件按钮</Button>
                <Modal
                    show = { this.state.showModal }
                    onHide = { this.close } >
                        <Modal.Header closeButton>
                            <Modal.Title>这是题目</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            这是一些描述。。。
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={ this.close } shape="border" style={{marginRight: 8}}>关闭</Button>
                            <Button onClick={ this.close } colors="primary">确认</Button>
                        </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Demo7;