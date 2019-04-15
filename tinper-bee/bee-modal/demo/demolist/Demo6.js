/**
 *
 * @title 被loading遮住的模态框
 * @description 当Modal组件和Loading组件同时出现的时候，Loading会把Modal遮住
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Loading from 'bee-loading'
import Modal from '../../src';



class Demo6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showLoading: false
        };
    }

    close = () => {
        this.setState({
            showModal: false,
            showLoading: false
        });
    }
    open = () => {
        this.setState({
            showModal: true,
            showLoading: true
        });
        setTimeout(() => {
            this.setState({
                showLoading: false
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <Button
                    colors="primary"
                    className="demo-margin"
                    onClick={this.open}>
                    打开模态框
                </Button>
                <Loading
                    showBackDrop={true}
                    // loadingType="line"
                    fullScreen
                    show={this.state.showLoading}
                >
                </Loading>
                <Modal
                    show={this.state.showModal}
                    onHide={this.close} >
                    <Modal.Header closeButton>
                        <Modal.Title>标题</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        我是模态框，我的被loading遮住了~
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close} colors="secondary" style={{ marginRight: 8 }}>取消</Button>
                        <Button onClick={this.close} colors="primary">确认</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Demo6;
