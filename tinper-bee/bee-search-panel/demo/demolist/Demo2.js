/**
 *
 * @title 提取所有输入信息
 * @description 针对表头中的搜索内容，进行提取键入的信息数据。【查看console的输出】
 *
 */
import React, {Component} from 'react';
import SearchPanel from '../../src';
import { Form, Label,Checkbox,Switch,Button,
     Radio, Select,  Col , Row , FormControl } from 'tinper-bee';
import DatePicker from 'bee-datepicker';
import moment from "moment/moment";
const FormItem = Form.FormItem;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const CheckboxGroup = Checkbox.CheckboxGroup;

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            approvalState: '1',
            purchasingGroup:'2',
            closeState: '',
            confirmState: '',
            voucherDate: [moment(),moment('2019-07-20')],
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

    search =()=>{
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values)
            }
        });
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        let self = this;
        return (
            <SearchPanel
                title='条件筛选'
                onSearch={this.search}
                onReset={this.clear}
                expanded={this.state.expanded}
                onChange={this.onChange}
                onPanelChangeStart={status => {
                    console.log(status, "start")
                }}
                onPanelChangeIng={status => {
                    console.log(status, "ing")
                }}
                onPanelChangeEnd={status => {
                    console.log(status, "end")
                }}
                resident={
                    <div className='demo'>
                        <Form>
                            <Row>
                                <Col xs={12} sm={6} md={4} lg={6}>
                                    <FormItem>
                                        <Col xs={4} sm={4} md={4}  lg={4}>
                                            <Label>订单编号</Label>
                                        </Col>
                                        <Col xs={8} sm={8} md={8}  lg={8}>
                                            <FormControl size="sm"
                                                {
                                                ...getFieldProps('orderCode', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4} lg={6}>
                                    <FormItem>
                                        <Col xs={4} sm={4} md={4}  lg={4}>
                                            <Label>供应商名称</Label>
                                        </Col>
                                        <Col xs={8} sm={8} md={8}  lg={8}>
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

                                <Col xs={12} sm={6} md={4} lg={6}>
                                    <FormItem>
                                        <Col xs={4} sm={4} md={4}  lg={4}>
                                            <Label>凭证日期</Label>
                                        </Col>
                                        <Col xs={8} sm={8} md={8}  lg={8}>
                                            <RangePicker
                                                placeholder={'开始 ~ 结束'}
                                                dateInputPlaceholder={['开始', '结束']}
                                                showClear={true}
                                                defaultValue={this.state.value}
                                                {...getFieldProps('voucherDate', {
                                                    initialValue:self.state.voucherDate,
                                                    onChange:(v)=>{
                                                        self.setState({
                                                            voucherDate: v
                                                        })
                                                    },
                                                    rules: [{
                                                        required: true, message: '请输入日期',
                                                    }],
                                                }) }
                                            />
                                        </Col>
                                    </FormItem>
                                </Col>

                            </Row>
                        </Form>
                    </div>
                }
            >
                <div className="demo">
                    <Form>
                        <Row>
                            <Col xs={12} sm={6} md={4} lg={6}>
                                <FormItem>
                                    <Col xs={4} sm={4} md={4}  lg={4} className="radio">
                                        <Label>订单类型</Label>
                                    </Col>
                                    <Col xs={8} sm={8} md={8}  lg={8}>
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

                            <Col xs={12} sm={6} md={4} lg={6}>
                                <FormItem>
                                    <Col xs={4} sm={4} md={4}  lg={4}>
                                        <Label>采购组</Label>
                                    </Col>
                                    <Col xs={8} sm={8} md={8}  lg={8}>
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

                            {/* <Col xs={12} sm={6} md={4} lg={6}>
                                <FormItem>
                                    <Col xs={4} sm={4} md={4}  lg={4}>
                                        <Label>审批</Label>
                                    </Col>
                                    <Col xs={8} sm={8} md={8}  lg={8} >
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
                            </Col> */}
                        </Row>
                    </Form>
                </div>
            </SearchPanel>
        )
    }
}

export default Form.createForm()(Demo2);