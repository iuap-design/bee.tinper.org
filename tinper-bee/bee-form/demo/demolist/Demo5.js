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
import Icon from 'bee-icon';
import SearchPanel from 'bee-search-panel';
import moment from "moment/moment";
const FormItem = Form.FormItem;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.CheckboxGroup;

const Demo5 = Form.createForm()(class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
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
    onChange = () => {
        this.setState({expanded: !this.state.expanded})
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const self = this;
        return (
            <div>
                <SearchPanel
                title='基础示例'
                onSearch={this.submit}
                onReset={this.reset}
                expanded={this.state.expanded}
                onChange={this.onChange}
                >
                    <Form className='demo5'>
                        <Row>
                            <Col lg={4} md={6} xs={12}>
                                <FormItem>
                                    <Col lg={4} md={4} xs={4}>
                                        <Label><Icon type="uf-mi" className='mast'></Icon>订单编号</Label>
                                    </Col>
                                    <Col lg={8} md={8} xs={8}>
                                        <FormControl size="sm"
                                            {
                                            ...getFieldProps('orderCode', {
                                                initialValue: '',
                                                validateTrigger: 'onBlur',
                                                rules: [{
                                                    required: true, message: '请输入订单编号',
                                                }],
                                            })
                                            }
                                        />
                                    </Col>
                                </FormItem>
                            </Col>
                            <Col  lg={4} md={6} xs={12}>
                                <FormItem>
                                    <Col lg={4} md={4} xs={4}>
                                        <Label><Icon type="uf-mi" className='mast'></Icon>供应商名称</Label>
                                    </Col>
                                    <Col lg={8} md={8} xs={8}>
                                        <FormControl size="sm"
                                            {
                                            ...getFieldProps('supplierName', {
                                                initialValue: '',
                                            })
                                            }
                                        />
                                    </Col>
                                </FormItem>
                            </Col>
                            <Col  lg={4} md={6} xs={12}>
                                <FormItem>
                                    <Col lg={4} md={4} xs={4}>
                                        <Label><Icon type="uf-mi" className='mast'></Icon>凭证名称</Label>
                                    </Col>
                                    <Col lg={8} md={8} xs={8}>
                                        <FormControl size="sm"
                                            {
                                            ...getFieldProps('voucherName1', {
                                                initialValue: '',
                                            })
                                            }
                                        />
                                    </Col>
                                </FormItem>
                            </Col>
                            
                            <Col  lg={4} md={6} xs={12}>
                                <FormItem>
                                    <Col lg={4} md={4} xs={4}>
                                        <Label><Icon type="uf-mi" className='mast'></Icon>订单类型</Label>
                                    </Col>
                                    <Col lg={8} md={8} xs={8}>
                                        <Select size="sm"
                                            {
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
                                    </Col>
                                </FormItem>
                            </Col>
                            <Col  lg={4} md={6} xs={12}>
                                <FormItem>
                                    <Col lg={4} md={4} xs={4}>
                                        <Label><Icon type="uf-mi" className='mast'></Icon>采购组</Label>
                                    </Col>
                                    <Col lg={8} md={8} xs={8}>
                                        <CheckboxGroup 
                                            {
                                                ...getFieldProps('purchasingGroup',{
                                                    initialValue:['2']
                                                })
                                            }
                                        >
                                            <Checkbox value='1'>人力</Checkbox>
                                            <Checkbox value='2'>财务</Checkbox>
                                        </CheckboxGroup>
                                    </Col>
                                </FormItem>
                            </Col>
                            <Col  lg={4} md={6} xs={12}>
                                <FormItem>
                                    <Col lg={4} md={4} xs={4}>
                                        <Label><Icon type="uf-mi" className='mast'></Icon>审批状态</Label>
                                    </Col>
                                    <Col lg={8} md={8} xs={8}>
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
                                    </Col>
                                </FormItem>
                            </Col>
                            <Col  lg={4} md={6} xs={12}>
                                <FormItem>
                                    <Col lg={4} md={4} xs={4}>
                                        <Label><Icon type="uf-mi" className='mast'></Icon>关闭状态</Label>
                                    </Col>
                                    <Col lg={8} md={8} xs={8}>
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
                                    </Col>
                                </FormItem>
                            </Col>
                            <Col  lg={4} md={6} xs={12}>
                                <FormItem>
                                    <Col lg={4} md={4} xs={4}>
                                        <Label><Icon type="uf-mi" className='mast'></Icon>确认状态</Label>
                                    </Col>
                                    <Col lg={8} md={8} xs={8}>
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
                                    </Col>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </SearchPanel>
            </div>
        )
    }
})
export default Demo5;