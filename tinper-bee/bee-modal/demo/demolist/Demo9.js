/**
 *
 * @title enforceFocus
 * @description 打开模态框时控制焦点的聚焦和离开
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';

import FormGroup from 'bee-form-group';
import Label from 'bee-label';
import FormControl from 'bee-form-control';
import Popconfirm from 'bee-popconfirm'
// import { Popconfirm } from 'tinper-bee';


class Demo9 extends Component {
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

    handleChange = (state) => (value) => {
      this.setState({
          [state]: value
      })
    }

    render() {
      let content = (
            <FormGroup>
                <Label>用户名</Label>
                <FormControl
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                />
            </FormGroup>
      );
        return (
            <div className="demo-margin">
                <Button
                    bordered
                    onClick={this.open}
                >
                    打开模态框
                </Button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.close}
                    enforceFocus={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>标题</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                       <span>
                          在模态框中打开气泡组件，如果气泡组件中有文本框，文本框光标不会聚焦。需在modal中设置enforceFocus为false。
                       </span>
                      <div className="demoPadding">
                        <Popconfirm trigger="click" placement="right" content={content}>
                            <Button bordered>打开气泡组件</Button>
                        </Popconfirm>
                      </div>
                    </Modal.Body>

                    <Modal.Footer className="text-center">
                        <Button colors="secondary" style={{ marginRight: 8 }} onClick={this.close}>
                            取消
                        </Button>
                        <Button bordered onClick={this.close}>
                            确认
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


export default Demo9;