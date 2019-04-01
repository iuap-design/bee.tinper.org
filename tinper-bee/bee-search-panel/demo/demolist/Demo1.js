/**
 *
 * @title 普通搜索面板
 * @description 一般用于页面中有搜索功能的内容区。
 *
 */
import React, {Component} from 'react';
import SearchPanel from '../../src';
import {FormControl,Row, Col,Label,Form,Radio} from 'tinper-bee';
let HeadContainer = SearchPanel.HeadContainer;
let AdvancedContainer = SearchPanel.AdvancedContainer;

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
                                            <Label>名 称:</Label>
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
                                            <Label>电话:</Label>
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
                            {/* <Row>
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
                            </Row> */}
                            <Row>

                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <FormItem>
                                            <Label>联系人:</Label>
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
                                            <Label>供应商:</Label>
                                            <FormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col> 

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                            <Label>地址:</Label>
                                            <FormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col> 


                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                            <Label>车牌:</Label>
                                            <FormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                            <Label>备注:</Label>
                                            <FormControl size="sm"
                                                {
                                                ...getFieldProps('supplierName', {
                                                    initialValue: '',
                                                })
                                                }
                                            />
                                    </FormItem>
                                </Col>

                                <Col xs={12} sm={6} md={4}  lg={3}>
                                    <FormItem>
                                            <Label>编号:</Label>
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
                </AdvancedContainer>
            </SearchPanel>
            </div>
        )
    }
}
export default Form.createForm()(Demo1);