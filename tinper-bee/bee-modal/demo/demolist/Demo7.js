/**
 *
 * @title 添加的模态框
 * @description 当Select组件和DatePicker组件渲染在模态框上时，模态框的层级在最下方
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from '../../src';
import FormGroup from 'bee-form-group';
import Label from 'bee-label';
import Select from 'bee-select';
import DatePicker from 'bee-datepicker'
import FormControl from 'bee-form-control'

class Demo7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: '',
            education: '',
            birthDate: ''

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

    handleChange = (state) => (value) => {
        this.setState({
            [state]: value
        })
    }

    render() {

        return (
            <div className="demo-margin">
                <Button
                    colors="primary"
                    size="lg"
                    onClick={this.open}>
                    添加模态框
                </Button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.close}
                >
                    <Modal.Header className="text-center">
                        <Modal.Title>添加</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div style={{ width: 300, margin: '0 auto' }}>
                            <FormGroup>
                                <Label>姓名</Label>
                                <FormControl
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>学历</Label>
                                <Select
                                    value={this.state.education}
                                    onChange={this.handleChange('education')}
                                >
                                    <Option value="">请选择</Option>
                                    <Option value="nothing">无</Option>
                                    <Option value="middle">初中</Option>
                                    <Option value="senior">高中</Option>
                                    <Option value="college1">专科</Option>
                                    <Option value="college2">本科</Option>
                                    <Option value="graduate">研究生及以上</Option>
                                    <Option value="other">其它</Option>
                                </Select>
                            </FormGroup>
                            <FormGroup>
                                <Label>出生日期</Label>
                                <DatePicker
                                    format='YYYY-MM-DD'
                                    onChange={this.handleChange('birthDate')}
                                    value={this.state.birthDate}
                                    placeholder='请选择出生日期'
                                />
                            </FormGroup>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="text-center">
                        <Button shape="border" style={{ marginRight: 8 }} onClick={this.close}>
                            取消
                        </Button>
                        <Button colors="primary" onClick={this.close}>
                            确认
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}


export default Demo7;