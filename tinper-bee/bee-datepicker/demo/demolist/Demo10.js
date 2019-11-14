/**
 *
 * @title 使用normal格式化
 * @description 配合form 使用normal格式化，已 MothPicker 为例
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import DatePicker from "../../src/index";
import Form from 'bee-form';

const { MonthPicker } = DatePicker;


class Demo4 extends Component {
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
                <Row style={{'marginBottom':'10px'}}>
                    <Col md={6} style={{'marginBottom':'10px'}}>
                        <MonthPicker
                            format="YYYY-MM"
                            {...getFieldProps('date', {
                                validateTrigger: 'onBlur',
                                initialValue:null,
                                normalize:(value)=>{
                                    if(value&&value.format){
                                        return value.format('YYYY-MM')
                                    }else{
                                        return value
                                    }
                                },
                                rules: [{
                                    required: true, message: '请输入日期',
                                }],
                            }) }
                        />
                    </Col>
                    <button className="u-button" onClick={this.submit}>获得值</button>
                </Row>
            </div>
        );
    }
}

export default Form.createForm()(Demo4);
