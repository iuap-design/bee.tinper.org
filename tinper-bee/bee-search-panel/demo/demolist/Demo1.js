/**
 *
 * @title 普通搜索面板
 * @description 一般用于页面中有搜索功能的内容区。
 *
 */
import React, {Component} from 'react';
import SearchPanel from '../../src';
import {FormControl,Row, Col,Label,Form,Radio} from 'tinper-bee';

const FormItem = Form.FormItem;

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state={
            state:'all',
            expanded: true
        }
    }
    stateChange(value){
        this.setState({
            state:value
        })
    }
    typeChange(value){
        this.setState({
            type:value
        })
    }
    degreeChange(value){
        this.setState({
            degree:value
        })
    }
    search(){

    }
    clear(){

    }
    onChange = () => {
        this.setState({expanded: !this.state.expanded})
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
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
                                            <Label>名 称</Label>
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

                                <Col xs={12} sm={6} md={4}  lg={6}>
                                    <FormItem>
                                        <Col xs={4} sm={4} md={4}  lg={4}>
                                            <Label>供应商</Label>
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

                                <Col xs={12} sm={6} md={4}  lg={6}>
                                    <FormItem>
                                        <Col xs={4} sm={4} md={4}  lg={4}>
                                            <Label>收货人</Label>
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

                                <Col xs={12} sm={6} md={4}  lg={6}>
                                    <FormItem>
                                        <Col xs={4} sm={4} md={4}  lg={4}>
                                            <Label>电话</Label>
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

                            </Row>
                        </Form>
                    </div>
                }
            >
                <div className="demo">
                    <Form>
                        <Row>
                            <Col lg={12} md={12} xs={12} >
                                <FormItem>
                                    <Col md={2} xs={2} className="radio">
                                        <Label >状态</Label>
                                    </Col>
                                    <Col md={10} xs={10}>
                                        <Radio.RadioGroup
                                            name="state"
                                            selectedValue={this.state.state}
                                            onChange={this.stateChange.bind(this)}>
                                            <Radio.RadioButton value="all">全部</Radio.RadioButton>
                                            <Radio.RadioButton value="initial">初始化</Radio.RadioButton>
                                            <Radio.RadioButton value="todo">待处理</Radio.RadioButton>
                                            <Radio.RadioButton value="doing">处理中</Radio.RadioButton>
                                            <Radio.RadioButton  value="done">已完成</Radio.RadioButton>
                                            <Radio.RadioButton  value="closed">已完成</Radio.RadioButton>
                                        </Radio.RadioGroup>
                                    </Col>

                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} md={4}  lg={6}>
                                <FormItem>
                                    <Col xs={4} sm={4} md={4}  lg={4} className="radio">
                                        <Label>联系人</Label>
                                    </Col>
                                    <Col xs={8} sm={8} md={8}  lg={8} >
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

                            <Col xs={12} sm={6} md={4}  lg={6}>
                                <FormItem>
                                    <Col xs={4} sm={4} md={4}  lg={4} className="radio">
                                        <Label>姓名</Label>
                                    </Col>
                                    <Col xs={8} sm={8} md={8}  lg={8} >
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

                        </Row>
                    </Form>
                </div>
            </SearchPanel>
        )
    }
}
export default Form.createForm()(Demo1);