/**
 *
 * @title 注册的模态框
 * @description
 *
 */

import React, {Component} from 'react';
import Button from 'bee-button';
import Modal from '../../src';
import FormGroup from 'bee-form-group';
import Label from 'bee-label';
import FormControl from 'bee-form-control';

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            password: '',
            name: ''
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

    handleChange = (state) => (value) => {
        this.setState({
            [state]: value
        })
    }

    render() {

        return (
            <div className="demo-margin">
                <Button
                    bordered
                    onClick={this.open}>
                    注册模态框
                </Button>​
                <Modal
                    show={this.state.showModal}
                    onHide={this.close}
                    style={{width: 450}}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>注册</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div style={{ width: 300, margin: '0 auto' }}>
                            <FormGroup>
                                <Label>用户名</Label>
                                <FormControl
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>密码</Label>
                                <FormControl
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                />
                            </FormGroup>
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


export default Demo2;