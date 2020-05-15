/**
 *
 * @title 单个input校验
 * @description 使用FormItem
 */
import React, { Component } from 'react';
import Form from '../../src';
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import Icon from 'bee-icon';
const FormItem = Form.FormItem;


const Demo1 = Form.createForm()(class Demo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const self=this;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
                <FormItem className='demo1'>
                    <Label>姓名</Label>
                    <FormControl placeholder='请输入姓名'
                     {...getFieldProps('name', {
                        validateTrigger: 'onBlur',
                        rules: [{
                            required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入姓名</span></span>
                        },{
                            max:5,message:<span><Icon type="uf-exc-t"></Icon><span>最大长度为10</span></span>
                        },{
                            pattern: /[\u4e00-\u9fa5]/, message: <span><Icon type="uf-exc-t"></Icon><span>请输入中文字符</span></span>,
                        }],
                    }) } />
                    <span className='error'>
                        {getFieldError('name')}
                    </span>   
                </FormItem>
        )
    }
})

export default Demo1;