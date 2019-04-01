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
const HeadContainer = SearchPanel.HeadContainer;
const AdvancedContainer = SearchPanel.AdvancedContainer;

class Demo3 extends Component {
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
        return (<div className="demo">
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
                }}>
                <HeadContainer>
                    <div className='demo-head'>
                        <Form>
                            <Row>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem>
                                            <Label>订单编号:</Label>
                                            <FormControl size="sm"
                                                {
                                                ...getFieldProps('orderCode', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                            <Label>供应商名称:</Label>
                                            <FormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </HeadContainer>
            

                <AdvancedContainer>
                    <div className='demo-body'>
                        <Form>
                            <Row>
                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                            <Label>订单类型:</Label>
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
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                            <Label>采购组</Label>
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
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                        {/* <Col xs={12} sm={12} md={12}  lg={12} className="col"> */}
                                            <Label>审批</Label>
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
                                        {/* </Col> */}
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </AdvancedContainer>
            </SearchPanel>
            </div>
        )
    }
}

export default Form.createForm()(Demo3);