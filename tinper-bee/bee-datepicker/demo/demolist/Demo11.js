/**
 *
 * @title 配合form使用
 * @description 各类型组件配合form使用，注意事项
 */

import React, { Component } from "react";
import { Row } from "bee-layout";
import DatePicker from "../../src/index";
import Form from 'bee-form';
import Button from 'bee-button';

const { YearPicker,MonthPicker,WeekPicker,RangePicker } = DatePicker;

class Demo11 extends Component {
    constructor(props){
        super(props);
        this.state={
          initialValues:{
            
          }  
        }
    }

    componentWillMount(){
        //如果初始值需要接口返回，则需要在组件初始化之前，获得初始值。 这里模拟设置初始值
        this.setState({
            initialValues:{
                date:'2019-02-03',
                dateTime:'2009-10-11 12:13:14',
                month:'2019-12',
                year:'2019',
                week:'2019-45',
                range:['2019-11-12','2019-12-13']
            }
        })
    }


    submit = (e) => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values);
            }
        });
    }

    change=()=>{
        this.setState({
            initialValues:{
                date:'2020-10-10',
                dateTime:'2020-10-10 10:10:10',
                month:'2020-10',
                year:'2020',
                week:'2020-20',
                range:['2020-10-10','2020-12-12']
            }
        })
    }
    reset=()=>{
        //此方法将所有元素还原到初始值。即还原到 componentWillMount 设置的值。
        // 注意：this.props.form.resetFields() 并不是清空值，而是还原到 initialValue 的值
        this.props.form.resetFields()
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className='demo11'>
                <Row className='demo11-item'>
                    <DatePicker
                        format='YYYY-MM-DD'
                        {
                            ...getFieldProps('date',{
                                initialValue:this.state.initialValues.date,
                                normalize:(value)=>{
                                    if(value&&value.format){
                                        return value.format('YYYY-MM-DD')
                                    }else{
                                        return value
                                    }
                                },
                            })
                        }
                    />
                </Row>
                <Row className='demo11-item'>
                    <DatePicker
                        format='YYYY-MM-DD hh:mm:ss'
                        showTime={true}
                        {
                            ...getFieldProps('dateTime',{
                                initialValue:this.state.initialValues.dateTime,
                                normalize:(value)=>{
                                    if(value&&value.format){
                                        return value.format('YYYY-MM-DD hh:mm:ss')
                                    }else{
                                        return value
                                    }
                                },
                            })
                        }
                    />
                </Row>
                <Row className='demo11-item'>
                    <MonthPicker
                        format='YYYY-MM'
                        {
                            ...getFieldProps('month',{
                                initialValue:this.state.initialValues.month,
                                normalize:(value)=>{
                                    if(value&&value.format){
                                        return value.format('YYYY-MM')
                                    }else{
                                        return value
                                    }
                                },
                            })
                        }
                    />
                </Row>
                <Row className='demo11-item'>
                    <YearPicker
                        format='YYYY'
                        {
                            ...getFieldProps('year',{
                                initialValue:this.state.initialValues.year,
                                normalize:(value)=>{
                                    if(value&&value.format){
                                        return value.format('YYYY')
                                    }else{
                                        return value
                                    }
                                },
                            })
                        }
                    />
                </Row>
                <Row className='demo11-item'>
                    <WeekPicker
                        format='YYYY-WW'
                        {
                            ...getFieldProps('week',{
                                initialValue:this.state.initialValues.week,
                                normalize:(value)=>{
                                    if(value&&value.format){
                                        return value.format('YYYY-WW')
                                    }else{
                                        return value
                                    }
                                },
                            })
                        }
                    />
                </Row>
                <Row className='demo11-item'>
                    <RangePicker
                        format='YYYY-MM-DD'
                        {
                            ...getFieldProps('range',{
                                initialValue:this.state.initialValues.range,
                                normalize:(value)=>{
                                    let values = [];
                                    if(value[0]&&value[0].format){
                                        values.push(value[0].format('YYYY-MM-DD')||'')
                                    }else{
                                        values.push(value[0]||'')
                                    }
                                    if(value[1]&&value[1].format){
                                        values.push(value[1].format('YYYY-MM-DD')||'')
                                    }else{
                                        values.push(value[1]||'')
                                    }
                                    return values;
                                },
                            })
                        }
                    />
                </Row>
                <Row className='demo11-item'>
                    <Button className='options-btns' colors='primary' onClick={this.change}>改变初始值</Button>
                    <Button className='options-btns' colors='primary' onClick={this.submit}>获得所有值</Button>
                    <Button className='options-btns' colors='primary' onClick={this.reset}>还原所有值</Button>
                </Row>
                
            </div>
        );
    }
}

export default Form.createForm()(Demo11);
