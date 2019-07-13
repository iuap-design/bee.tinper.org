/**
 *
 * @title 可拖拽Header的模态框
 * @description 通过`draggable`参数设置是否可拖拽。注意：模态框 header 内，若有绑定事件的元素，需要添加一个 className="dnd-cancel"，才能正常触发相应事件。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Checkbox from 'bee-checkbox'
import Modal from '../../src';

class Demo11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            checked: false,
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

    changeCheck=()=> {
        this.setState({checked:!this.state.checked});
    }

    render () {
        return (
            <div className='demo12'>
                <Button
                    bordered
                    className="demo-margin"
                    onClick={this.open}>
                    打开模态框
                </Button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.close}
                    size="lg"
                    ref={ref => this.modal = ref}
                    className="demo10-modal"
                    backdrop={false}
                    draggable={true}
                    bounds={'body'}//可拖拽范围为当前可见区域
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                        <Checkbox 
                            className="dnd-cancel"
                            checked={this.state.checked}  
                            onChange={this.changeCheck}
                        >
                            可勾选的标题
                        </Checkbox>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close} colors="secondary" style={{ marginRight: 8 }}>取消</Button>
                        <Button onClick={this.close} bordered>确认</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Demo11;
