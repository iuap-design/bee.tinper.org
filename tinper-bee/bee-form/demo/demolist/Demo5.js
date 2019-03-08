/**
 *
 * @title 多种表单元素示例
 * @description 查询面板
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src';
import FormControl from 'bee-form-control';
import { Col , Row } from 'bee-layout';
import Select from 'bee-select';
import Radio from 'bee-radio';
import DatePicker from 'bee-datepicker';
import Checkbox from 'bee-checkbox';
import Switch from 'bee-switch';
import Label from 'bee-label';
import Button from 'bee-button';
import moment from "moment/moment";
const FormItem = Form.FormItem;
const Option = Select.Option;
const { RangePicker } = DatePicker;

const Demo5 = Form.createForm()(class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            approvalState: '',
            closeState: '',
            confirmState: '',
            voucherDate: [],
            orderTypes:[
                {
                    'code':'001',
                    'name':'类型1'
                },
                {
                    'code':'002',
                    'name':'类型2'
                },
                {
                    'code':'003',
                    'name':'类型3'
                },
            ]
        };
    }
    submit = (e) => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values)
            }
        });
    }
    reset = () =>{
        this.props.form.resetFields();
        //部分表单元素无法通过this.props.form.resetFields重置，需要手动重置，如下
        this.setState({
            approvalState: '',
            closeState: '',
            confirmState: '',
            voucherDate: []
        })
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const self = this;
        return (
            <div>
                <Form className='demo5'>
                <Row>
                        <Col lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>订单编号：</Label>
                                <FormControl
                                    {
                                    ...getFieldProps('orderCode', {
                                        initialValue: '',
                                    })
                                    }
                                />
                            </FormItem>
                        </Col>
                        <Col  lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>供应商名称：</Label>
                                <FormControl
                                    {
                                    ...getFieldProps('supplierName', {
                                        initialValue: '',
                                    })
                                    }
                                />
                            </FormItem>
                        </Col>
                        <Col lg={4} md={6} xs={4}>
                            <FormItem>
                                <Label className='time'>凭证日期：</Label>
                                <RangePicker
                                    defaultValue={this.state.voucherDate}
                                    placeholder={'开始 ~ 结束'}
                                    dateInputPlaceholder={['开始', '结束']}
                                    {
                                    ...getFieldProps('voucherDate', {
                                        onChange: function (v) {
                                            self.setState({
                                                voucherDate: v
                                            })
                                        }
                                    })
                                    }
                                />
                            </FormItem>
                        </Col>
                        <Col  lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>订单类型：</Label>
                                <Select {
                                    ...getFieldProps('type', {
                                        initialValue: '',
                                    }
                                    )}>
                                    <Option value="">请选择</Option>
                                    {
                                        self.state.orderTypes.map((item, index) => {
                                            return (
                                                <Option key={index} value={item.code}>{item.name}</Option>
                                            )
                                        })
                                    }
                                </Select>
                            </FormItem>
                        </Col>
                        <Col  lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>采购组：</Label>
                                <FormControl
                                    {
                                    ...getFieldProps('purchasingGroup', {
                                        initialValue: '',
                                    })
                                    }
                                />
                            </FormItem>
                        </Col>
                        <Col  lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>审批状态：</Label>
                                <Radio.RadioGroup
                                    selectedValue={this.state.approvalState}
                                    {
                                    ...getFieldProps('approvalState', {
                                        initialValue: '1',
                                        onChange(value) {
                                            self.setState({ approvalState: value });
                                        },
                                    }
                                    )}
                                >
                                    <Radio value="0" >未审批</Radio>
                                    <Radio value="1" >已审批</Radio>
                                </Radio.RadioGroup>
                            </FormItem>
                        </Col>
                        <Col  lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>关闭状态：</Label>
                                <Radio.RadioGroup
                                    selectedValue={this.state.closeState}
                                    {
                                    ...getFieldProps('closeState', {
                                        initialValue: '1',
                                        onChange(value) {
                                            self.setState({ closeState: value });
                                        },
                                    }
                                    )}
                                >
                                    <Radio value="0" >未关闭</Radio>
                                    <Radio value="1" >已关闭</Radio>
                                </Radio.RadioGroup>
                            </FormItem>
                        </Col>
                        <Col  lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>确认状态：</Label>
                                <Radio.RadioGroup
                                    selectedValue={this.state.confirmState}
                                    {
                                    ...getFieldProps('confirmState', {
                                        initialValue: '1',
                                        onChange(value) {
                                            self.setState({ confirmState: value });
                                        },
                                    }
                                    )}
                                >
                                    <Radio value="0" >未确认</Radio>
                                    <Radio value="1" >已确认</Radio>
                                </Radio.RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                    <div className='submit'>
                        <Button colors="primary" className="login" onClick={this.submit}>查询</Button>
                        <Button shape="border" className="reset" onClick={this.reset}>重置</Button>
                    </div>
                </Form>
            </div>
        )
    }
})
export default Demo5;