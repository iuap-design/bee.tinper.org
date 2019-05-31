/**
 *
 * @title 表单模态框
 * @description 表单模态框
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
import Form from 'bee-form'
import Rate from "bee-rate"
import Radio from 'bee-radio'


const FormItem = Form.FormItem;
const Option = Select.Option;
class Demo7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "man",
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

    handleClose = () => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values)
                this.close()
            }
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

    getCalendarContainer = () => {

        return document.getElementById('demo7');
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const self = this;

        return (
            <div className="demo-margin" id="demo7">
                <Button
                    colors="primary"
                    onClick={this.open}>
                    添加模态框
                </Button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.close}
                    className="demo7-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>表单实践</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            <Form>
                                <FormItem>
                                    <Label>姓名</Label>
                                    <FormControl placeholder="请输入姓名"
                                        {...getFieldProps('name', {
                                            validateTrigger: 'onBlur',
                                            rules: [{
                                                required: true, message: '请输入姓名',
                                            }],
                                        })}
                                    />
                                    <span className='error'>
                                        {getFieldError('name')}
                                    </span>
                                </FormItem>
                                <FormItem>
                                    <Label>身份证号</Label>
                                    <FormControl placeholder="请输入身份证号"
                                        {...getFieldProps('id', {
                                            validateTrigger: 'onBlur',
                                            rules: [{
                                                required: true, message: '请输入身份证号',
                                            }, {
                                                pattern: /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/, message: '身份证号格式不正确'
                                            }],
                                        })}
                                    />
                                    <span className='error'>
                                        {getFieldError('id')}
                                    </span>
                                </FormItem>
                                <FormItem className='time'>
                                    <Label>出生日期</Label>
                                    <DatePicker
                                        {
                                        ...getFieldProps('time', {
                                            validateTrigger: 'onBlur',
                                            rules: [{
                                                required: true, message: '请选择出生日期',
                                            }, {
                                                type: 'date', message: '日期格式不正确'
                                            }],
                                        }
                                        )}
                                        placeholder={'请选择出生日期'}
                                        getCalendarContainer={this.getCalendarContainer}
                                    />
                                    <span className='error'>
                                        {getFieldError('time')}
                                    </span>
                                </FormItem>
                                <FormItem>
                                    <Label>年龄</Label>
                                    <FormControl placeholder="请输入年龄"
                                        {...getFieldProps('age', {
                                            validateTrigger: 'onBlur',
                                            rules: [{
                                                required: true, message: '请输入年龄',
                                            }],
                                        })}
                                    />
                                    <span className='error'>
                                        {getFieldError('age')}
                                    </span>
                                </FormItem>
                                <FormItem>
                                    <Label>性别</Label>
                                    <Radio.RadioGroup
                                        selectedValue={this.state.selectedValue}
                                        {
                                        ...getFieldProps('sex', {
                                            initialValue: 'man',
                                            onChange (value) {
                                                self.setState({ selectedValue: value });
                                            },
                                            rules: [{ required: true }]
                                        }
                                        )}
                                    >
                                        <Radio value="man" >男</Radio>
                                        <Radio value="woman" >女</Radio>
                                    </Radio.RadioGroup>
                                </FormItem>
                                <FormItem>
                                    <Label>学历</Label>
                                    <Select
                                        {
                                        ...getFieldProps('education', {
                                            initialValue: '',
                                            rules: [{ required: true, message: '请选择学历' }]
                                        }
                                        )}
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
                                    <span className='error'>
                                        {getFieldError('education')}
                                    </span>
                                </FormItem>
                                <FormItem>
                                    <Label>保密等级</Label>
                                    <Rate
                                        {
                                        ...getFieldProps('rate', {
                                            initialValue: 0,
                                            rules: [{ required: true }]
                                        }
                                        )}
                                    />
                                </FormItem>
                                <FormItem className="remarks">
                                    <Label>备注</Label>
                                    <FormControl componentClass='textarea'
                                        {
                                        ...getFieldProps('remark', {}
                                        )}
                                    />
                                </FormItem>
                            </Form>
                        </div>
                    </Modal.Body>

                    <Modal.Footer className="text-center">
                        <Button colors="secondary" style={{ marginRight: 8 }} onClick={this.close}>
                            取消
                        </Button>
                        <Button colors="primary" onClick={this.handleClose}>
                            确认
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}


export default Form.createForm()(Demo7);