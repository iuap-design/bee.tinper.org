/**
 *
 * @title 通过拖拽调整弹框大小
 * @description 通过 `resizable` 参数控制弹框是否可被 `resize`。通过 `centered` 参数设置弹框垂直居中展示。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';


class Demo13 extends Component {
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
    onResizeStart = (e, dir, elementRef) => {
        console.log("onResizeStart", e, dir, elementRef)
    }
    onResize = (e, dir, elementRef, delta) => {
        console.log("onResize", e, dir, elementRef, delta)
    }
    onResizeStop = (e, dir, elementRef, delta) => {
        console.log("onResizeStop", e, dir, elementRef, delta)
    }

    render () {
        return (
        <div>
            <Button
            bordered
            className="demo-margin"
            onClick = { this.open }>
                打开模态框
            </Button>​
            <Modal
            centered
            show = { this.state.showModal }
            backdropClosable={false}
            resizable={true}
            resizeClassName="resize-box"
            maxWidth={"1000"}
            maxHeight={"500px"}
            minWidth={300}
            minHeight={150}
            onResizeStart={this.onResizeStart}
            onResize={this.onResize}
            onResizeStop={this.onResizeStop}
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
                    <Button onClick={ this.close } bordered>确认</Button>
                </Modal.Footer>
           </Modal>
        </div>
        )
    }
}

export default Demo13;
