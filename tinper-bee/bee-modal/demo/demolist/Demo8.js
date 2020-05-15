/**
 *
 * @title 两个模态框
 * @description 当两个模态框同时出现的时候，后面出现的那个层级在上面
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';

class Demo8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModal2: false
        };
    }

    close = () => {
        this.setState({
            showModal: false
        });
    }

    open = () => {
        this.setState({
            showModal: true
        });
    }

    close2 = () => {
        this.setState({
            showModal2: false
        });
    }

    open2 = () => {
        this.setState({
            showModal2: true
        });
    }

    render() {

        return (
            <div className="demo-margin">
                <Button
                    bordered
                    onClick={this.open}>
                    打开模态框
                </Button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.close}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>第一个模态框</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                       这是第一个模态框
                        <Button
                            bordered
                            size="sm"
                            onClick={this.open2}
                        >
                            打开第二个模态框~
                        </Button>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button colors="secondary" style={{ marginRight: 8 }} onClick={this.close}>
                            取消
                        </Button>
                        <Button bordered onClick={this.close}>
                            确认
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={this.state.showModal2}
                    onHide={this.close2}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>第二个模态框</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        这是第二个模态框~
                    </Modal.Body>

                    <Modal.Footer>
                        <Button colors="secondary" style={{ marginRight: 8 }} onClick={this.close2}>
                            取消
                        </Button>
                        <Button bordered onClick={this.close2}>
                            确认
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default Demo8;