/**
 *
 * @title 多种布局示例
 * @description 
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

const Demo6 = Form.createForm()(class Demo extends Component {
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
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const self = this;
        const orderTypes= [{
            "code":"D001",
            "name":"D001"
          },{
            "code":"D002",
            "name":"D002"
          },{
            "code":"D003",
            "name":"D003"
          },{
            "code":"D004",
            "name":"D004"
          }];
        return (
            <div>
                <Form className='demo6'>
                    {/* 普通栅格布局 */}
                    <h4>
                        普通栅格布局
                    </h4>
                    <Row className = 'edit-panel'>
                        <Col lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>订单编号
                                    <span className='mast'>*</span>
                                </Label>
                                <FormControl
                                    {
                                    ...getFieldProps('orderCode1', {
                                        initialValue: '',
                                        rules: [{
                                            required: true, message: '请输入订单编号',
                                        }],
                                    })
                                    }
                                />
                                <span className='error'>
                                    {
                                        getFieldError('orderCode1')
                                    }
                                </span>
                            </FormItem>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label>供应商名称
                                    <span className='mast'>*</span>
                                </Label>
                                <FormControl
                                    {
                                        ...getFieldProps('supplierName1', {
                                            initialValue: '',
                                            rules: [{
                                                required: true, message: '请输入供应商名称',
                                            }],
                                        })
                                    }
                                />
                                <span className='error'>
                                    {
                                        getFieldError('supplierName1')
                                    }
                                </span>
                            </FormItem>
                            
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <FormItem>
                                <Label className='time'>凭证日期</Label>
                                <RangePicker
                                    defaultValue={this.state.voucherDate}
                                    placeholder={'开始 ~ 结束'}
                                    dateInputPlaceholder={['开始', '结束']}
                                    {
                                    ...getFieldProps('voucherDate1', {
                                        onChange: function (v) {
                                            self.setState({
                                                voucherDate1: v
                                            })
                                        }
                                    })
                                    }
                                />
                            </FormItem>
                        </Col>
                    </Row>

                    <div className='split'></div>
                    
                    
                     {/* 单列铺满 */}
                     <h4>
                        单列铺满
                     </h4>
                     <Row className = 'edit-panel edit-panel-all'>
                        <FormItem>
                            <Col md={2}>
                                <Label>订单编号
                                    <span className='mast'>*</span>
                                </Label>
                            </Col>
                            <Col md={10}>
                                <FormControl
                                    {
                                    ...getFieldProps('orderCode2', {
                                        initialValue: '',
                                        rules: [{
                                            required: true, message: '请输入订单编号',
                                        }],
                                    })
                                    }
                                />
                                <span className='error'>
                                    {
                                        getFieldError('orderCode2')
                                    }
                                </span>
                            </Col>
                        </FormItem>

                        <FormItem>
                            <Col md={2}>
                                <Label>供应商名称
                                    <span className='mast'>*</span>
                                </Label>
                            </Col>
                            <Col md={10}>
                                <FormControl
                                    {
                                        ...getFieldProps('supplierName2', {
                                            initialValue: '',
                                            rules: [{
                                                required: true, message: '请输入供应商名称',
                                            }],
                                        })
                                    }
                                />
                                <span className='error'>
                                    {
                                        getFieldError('supplierName2')
                                    }
                                </span>
                            </Col>
                        </FormItem>

                        <FormItem>
                            <Col md={2}>
                                <Label>凭证日期</Label>
                            </Col>
                            <Col md={10}>
                                <RangePicker
                                    defaultValue={this.state.voucherDate}
                                    placeholder={'开始 ~ 结束'}
                                    dateInputPlaceholder={['开始', '结束']}
                                    {
                                    ...getFieldProps('voucherDate2', {
                                        onChange: function (v) {
                                            self.setState({
                                                voucherDate2: v
                                            })
                                        }
                                    })
                                    }
                                />
                            </Col>
                        </FormItem>
                        <FormItem>
                            <Col md={2}>
                                <Label>订单类型</Label>
                            </Col>
                            <Col md={10}>
                                <Select {
                                    ...getFieldProps('type', {
                                        initialValue: '',
                                    }
                                    )}>
                                    <Option value="">请选择</Option>
                                    {
                                        orderTypes.map((item, index) => {
                                            return (
                                                <Option key={index} value={item.code}>{item.name}</Option>
                                            )
                                        })
                                    }
                                </Select>
                            </Col>
                        </FormItem>
                        
                    </Row>

                    <div className='split'></div>

                    {/* 单列居中 */}
                    <h4>
                        单列居中
                     </h4>
                    <Row className = 'edit-panel edit-panel-center'>
                        <Col md={12} >
                            <FormItem>
                                <Label>订单编号
                                    <span className='mast'>*</span>
                                </Label>
                                <FormControl
                                    {
                                    ...getFieldProps('orderCode3', {
                                        initialValue: '',
                                        rules: [{
                                            required: true, message: '请输入订单编号',
                                        }],
                                    })
                                    }
                                />
                                <span className='error'>
                                    {
                                        getFieldError('orderCode3')
                                    }
                                </span>
                            </FormItem>
                        </Col>
                        <Col md={12}  >
                            <FormItem>
                                <Label>供应商名称
                                    <span className='mast'>*</span>
                                </Label>
                                <FormControl
                                    {
                                        ...getFieldProps('supplierName3', {
                                            initialValue: '',
                                            rules: [{
                                                required: true, message: '请输入供应商名称',
                                            }],
                                        })
                                    }
                                />
                                <span className='error'>
                                    {
                                        getFieldError('supplierName3')
                                    }
                                </span>
                            </FormItem>
                            
                        </Col>
                        <Col md={12}  >
                            <FormItem>
                                <Label className='time'>凭证日期</Label>
                                <RangePicker
                                    defaultValue={this.state.voucherDate}
                                    placeholder={'开始 ~ 结束'}
                                    dateInputPlaceholder={['开始', '结束']}
                                    {
                                    ...getFieldProps('voucherDate3', {
                                        onChange: function (v) {
                                            self.setState({
                                                voucherDate3: v
                                            })
                                        }
                                    })
                                    }
                                />
                            </FormItem>
                        </Col>
                        
                    </Row>

                     <div className='split'></div>

                    {/* 三列带textarea */}
                    <h4>
                    三列带textarea
                     </h4>
                    <Row className = 'edit-panel edit-panel-textarea'>
                            <Col md={1}>
                                <Label>订单编号
                                    <span className='mast'>*</span>
                                </Label>
                            </Col>
                            <Col md={3}>
                                <FormControl
                                    {
                                    ...getFieldProps('orderCode4', {
                                        initialValue: '',
                                        rules: [{
                                            required: true, message: '请输入订单编号',
                                        }],
                                    })
                                    }
                                />
                                <span className='error'>
                                    {
                                        getFieldError('orderCode4')
                                    }
                                </span>
                            </Col>
                            <Col md={1}>
                                <Label>供应商
                                    <span className='mast'>*</span>
                                </Label>
                            </Col>
                            <Col md={3}>
                            <FormControl
                                {
                                    ...getFieldProps('supplierName4', {
                                        initialValue: '',
                                        rules: [{
                                            required: true, message: '请输入供应商名称',
                                        }],
                                    })
                                }
                                />
                                <span className='error'>
                                    {
                                        getFieldError('supplierName4')
                                    }
                                </span>
                            </Col>
                            <Col md={1}>
                                <Label className='time'>凭证日期</Label>
                            </Col>
                            <Col md={3}>
                            <RangePicker
                                    defaultValue={this.state.voucherDate}
                                    placeholder={'开始 ~ 结束'}
                                    dateInputPlaceholder={['开始', '结束']}
                                    {
                                    ...getFieldProps('voucherDate4', {
                                        onChange: function (v) {
                                            self.setState({
                                                voucherDate3: v
                                            })
                                        }
                                    })
                                    }
                                />
                            </Col>
                            <Col md={1}>
                                <Label className='time'>备注</Label>
                            </Col>
                            <Col md={11}>
                            <textarea className='u-form-control'
                                {
                                    ...getFieldProps('mark', {
                                        initialValue: '',
                                    })
                                }
                                />
                            </Col>

                       
                    </Row>
                    
                </Form>
            </div>
        )
    }
})
export default Demo6;