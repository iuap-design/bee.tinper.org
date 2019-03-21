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
                                <Col lg={3} md={3} xs={12}>
                                    <FormItem>
                                        <Col md={4} xs={2}>
                                            <Label>名称</Label>
                                        </Col>
                                        <Col md={8} xs={10}>
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

                                <Col  lg={3} md={3} xs={12}>
                                    <FormItem>
                                        <Col md={4} xs={2}>
                                            <Label>供应商</Label>
                                        </Col>
                                        <Col md={8} xs={10}>
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


                                <Col  lg={3} md={3} xs={12}>
                                    <FormItem>
                                        <Col md={4} xs={2}>
                                            <Label>收货人</Label>
                                        </Col>
                                        <Col md={8} xs={10}>
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

                                <Col  lg={3} md={3} xs={12}>
                                    <FormItem>
                                        <Col md={4} xs={2}>
                                            <Label>供应商</Label>
                                        </Col>
                                        <Col md={8} xs={10}>
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
                                    <Col md={1} xs={2} className="radio">
                                        <Label >状态</Label>
                                    </Col>
                                    <Col md={11} xs={10}>
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
                            <Col lg={3} md={3} xs={12}>
                                <FormItem>
                                    <Col md={4} xs={2}>
                                        <Label>联系人</Label>
                                    </Col>
                                    <Col md={8} xs={10}>
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

                            <Col lg={3} md={3} xs={12}>
                                <FormItem>
                                    <Col md={4} xs={2}>
                                        <Label>电话</Label>
                                    </Col>
                                    <Col md={8} xs={10}>
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
                        </Row>
                    </Form>
                </div>
            </SearchPanel>
        )
    }
}
export default Form.createForm()(Demo1);