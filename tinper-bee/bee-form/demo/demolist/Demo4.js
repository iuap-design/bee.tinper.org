/**
 *
 * @title 表单校验
 * @description 用户信息录入实例
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src';
import FormControl from 'bee-form-control';
import Select from 'bee-select';
import Radio from 'bee-radio';
import DatePicker from 'bee-datepicker';
import Checkbox from 'bee-checkbox';
import Switch from 'bee-switch';
import Slider from 'bee-slider';
import InputNumber from 'bee-input-number';
import Rate from 'bee-rate';
import CitySelect from 'bee-city-select';
import Label from 'bee-label';
import Button from 'bee-button';
const FormItem = Form.FormItem;
const Option = Select.Option;

const Demo4 = Form.createForm()(class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 'man',
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
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        const self = this;
        return (
            <div>
                <Form className='demo4'>
                    <FormItem>
                        <Label>姓名：</Label>
                        <FormControl placeholder="请输入姓名"
                            {...getFieldProps('name', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: '请输入姓名',
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('name')}
                        </span>
                    </FormItem>
                    <FormItem>
                        <Label>身份证号：</Label>
                        <FormControl placeholder="请输入身份证号"
                            {...getFieldProps('id', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: '请输入身份证号',
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('id')}
                        </span>
                    </FormItem>
                    <FormItem className='time'>
                        <Label>出生日期：</Label>
                        <DatePicker
                            {
                            ...getFieldProps('time', {

                            }
                            ) }
                            placeholder={'请选择出生日期'}
                        />
                    </FormItem>
                    <FormItem>
                        <Label>年龄：</Label>
                        <FormControl placeholder="请输入年龄"
                            {...getFieldProps('age', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: '请输入年龄',
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('age')}
                        </span>
                    </FormItem>
                     <FormItem>
                        <Label>性别：</Label>
                        <Radio.RadioGroup
                            selectedValue={this.state.selectedValue}
                            {
                            ...getFieldProps('sex', {
                                initialValue: 'man',
                                onChange(value) {
                                    self.setState({ selectedValue: value });
                                },
                                rules: [{ required: true }]
                            }
                            ) }
                        >
                            <Radio value="man" >男</Radio>
                            <Radio value="woman" >女</Radio>
                        </Radio.RadioGroup>
                    </FormItem>
                    <FormItem>
                        <Label>学历：</Label>
                        <Select
                            {
                            ...getFieldProps('education', {
                                initialValue: '',
                                rules: [{ required: true }]
                            }
                            ) }
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
                    </FormItem>
                    <FormItem>
                        <Label>保密等级：</Label>
                        <Rate
                            {
                            ...getFieldProps('rate', {
                                initialValue: 0,
                                rules: [{ required: true }]
                            }
                            ) }
                        />
                    </FormItem>
                    <FormItem >
                        <Label>备注：</Label>
                        <FormControl componentClass='textarea'
                            {
                            ...getFieldProps('remark', {}
                            ) }
                        />
                    </FormItem>  
                    


                    <div className='submit'>
                        <Button colors="primary" className="login" onClick={this.submit}>提交</Button>
                        <Button shape="border" className="reset">取消</Button>
                    </div>
                </Form>
            </div>
        )
    }
})
export default Demo4;