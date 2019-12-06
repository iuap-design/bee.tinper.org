/**
 *
 * @title 使用Form
 * @description 配合form使用，并使用normal格式化
 *
 */

import React, { Component } from 'react';
import Timepicker from '../../src/index';
import Form from 'bee-form';
import moment from 'moment';

class Demo3 extends Component {

    submit = (e) => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values);
            }
        });
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <Timepicker
                            format={'HH:mm:ss'}
                            {...getFieldProps('date', {
                                validateTrigger: 'onBlur',
                                initialValue:'12:13:14',
                                normalize:(value)=>{
                                    if(value&&value.format){
                                        return value.format('HH:mm:ss')
                                    }else{
                                        return value
                                    }
                                },
                                rules: [{
                                    required: true, message: '请输入日期',
                                }],
                            }) }
                        />
                        <button className="u-button" onClick={this.submit}>获得值</button>
            </div>
        )
    }
}

export default Form.createForm()(Demo3);