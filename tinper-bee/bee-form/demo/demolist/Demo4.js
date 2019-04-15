/**
 *
 * @title 表单校验
 * @description 用户信息录入实例
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src';
import FormControl from 'bee-form-control';
import { Col,Row } from 'bee-layout';
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
import Icon from 'bee-icon';
import Upload from 'bee-upload';
const FormItem = Form.FormItem;
const Option = Select.Option;
const CheckboxGroup = Checkbox.CheckboxGroup;

const uploadProps = {
    name: 'file',
    action: '/upload.do',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
};

const Demo4 = Form.createForm()(class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
            selectedValue2: 'headquarters'
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
                        <Label><Icon type="uf-mi" className='mast'></Icon>申请人</Label>
                        <FormControl placeholder="请输入姓名"
                            {...getFieldProps('name', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入姓名</span></span>,
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('name')}
                        </span>
                    </FormItem>
                    <FormItem>
                        <Label><Icon type="uf-mi" className='mast'></Icon>联系方式</Label>
                        <FormControl placeholder="请输入联系方式"
                            {...getFieldProps('phone', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入联系方式</span></span>,
                                }, {
                                    pattern: /^\d{11}$/, message: <span><Icon type="uf-exc-t"></Icon><span>手机号格式不正确</span></span>
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('phone')}
                        </span>
                    </FormItem>
                    <FormItem>
                        <Label>供应商名称</Label>
                        <FormControl placeholder="请输入供应商名称"
                            {
                            ...getFieldProps('supplierName', {
                                initialValue: '',
                            })
                            }
                        />
                    </FormItem>
                    <FormItem>
                        <Label><Icon type="uf-mi" className='mast'></Icon>供货产品</Label>
                        <FormControl placeholder="请输入供货产品"
                            {
                            ...getFieldProps('supplyProducts', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入供货产品</span></span>,
                                }],
                                initialValue: '',
                            })
                            }
                        />
                        <span className='error line-height-32'>
                            {getFieldError('supplyProducts')}
                        </span>
                    </FormItem>
                    <FormItem className='time flex'>
                        <Label className="line-height-32">需求日期</Label>
                        <DatePicker
                            {
                            ...getFieldProps('time', {
                            }
                            ) }
                            placeholder={'请选择需求日期'}
                        />
                    </FormItem>
                    <FormItem>
                        <Label><Icon type="uf-mi" className='mast'></Icon>物料关重程度</Label>
                        <Radio.RadioGroup
                            selectedValue={this.state.selectedValue}
                            {
                            ...getFieldProps('importance', {
                                initialValue: '',
                                onChange(value) {
                                    self.setState({ selectedValue: value });
                                },
                                rules: [{ required: true }]
                            }
                            ) }
                        >
                            <Radio value="A" >A（关键）</Radio>
                            <Radio value="B" >B（重要）</Radio>
                            <Radio value="C" >C（一般）</Radio>
                        </Radio.RadioGroup>
                    </FormItem>
                    <FormItem>
                        <Label><Icon type="uf-mi" className='mast'></Icon>归属部门</Label>
                        <Radio.RadioGroup
                            selectedValue={this.state.selectedValue2}
                            {
                            ...getFieldProps('department', {
                                initialValue: 'headquarters',
                                onChange(value) {
                                    self.setState({ selectedValue2: value });
                                },
                                rules: [{ required: true }]
                            }
                            ) }
                        >
                            <Radio value="headquarters">总部</Radio>
                            <Radio value="businessUnit">事业部</Radio>
                        </Radio.RadioGroup>
                    </FormItem>
                    <FormItem>
                        <Label><Icon type="uf-mi" className='mast'></Icon>采购组</Label>
                        <CheckboxGroup 
                                {
                                    ...getFieldProps('purchasingGroup',{
                                        initialValue:['2'],
                                        rules: [{ required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请选择采购组</span></span> }]
                                    })
                                }
                            >
                                <Checkbox value='1'>人力</Checkbox>
                                <Checkbox value='2'>财务</Checkbox>
                        </CheckboxGroup>
                        <span className='error'>
                            {getFieldError('purchasingGroup')}
                        </span>
                    </FormItem>
                    <FormItem>
                        <Label>保密等级</Label>
                        <Rate
                            {
                            ...getFieldProps('rate', {
                                initialValue: 0,
                                rules: [{ required: true }]
                            }
                            ) }
                        />
                    </FormItem>
                    <FormItem className="flex">
                        <Label className="line-height-32">备注</Label>
                        <FormControl componentClass='textarea'
                            {
                            ...getFieldProps('remark', {}
                            ) }
                        />
                    </FormItem>  
                    <FormItem >
                        <Label>文件</Label>
                        <Upload {...uploadProps}>
                            <Button shape="border">
                            <Icon type="uf-upload" /> Click to Upload
                            </Button>
                        </Upload>
                    </FormItem>  
                    <FormItem style={{'paddingLeft':'106px'}}>
                        <Button shape="border" className="reset" style={{"marginRight":"8px"}}>取消</Button>
                        <Button colors="primary" className="login" onClick={this.submit}>提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
})
export default Demo4;