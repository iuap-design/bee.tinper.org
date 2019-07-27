/**
 *
 * @title 自定义展示日期面板，外层输入框可输入，配合form使用
 * @description open设置面板展开收起，keyboardInput外层input是否可输入，showDateInput是否显示内层input
 */

import React, {Component} from "react";
import {Row, Col} from "bee-layout";
import DatePicker from "../../src/index";
import zhCN from "../../src/locale/zh_CN";
import enUS from "../../src/locale/en_US";
import moment from "moment";
import 'moment/locale/zh-cn';
import Form from 'bee-form';

moment.locale('zh-cn');

const format = "YYYY-MM-DD";

const dateInputPlaceholder = "选择日期";


class Demo8 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false
        };
    }
    onOpenChange = open => {
        console.log(open)
    }
    open = d => {
        this.setState({
            open: !this.state.open
        })
    }
    onClick = (e,d,str) => {
        console.log(d);
    }
    onSelect(d) {
        console.log("select:"+d);
    }
    outInputKeydown = ()=>{
        console.log('keydown')
    }
    submit = (e) => {
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values, moment(values.date).format('YYYY-MM-DD'));
            }
        });
    }
    render() {
        var self = this; 
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <DatePicker
                            format={format}
                            onSelect={this.onSelect}
                            onChange={this.onChange}
                            locale={zhCN}
                            open={this.state.open}
                            onOpenChange={this.onOpenChange.bind(this)}
                            placeholder={dateInputPlaceholder}
                            className={"demo11"}
                            onClick={this.onClick}
                            keyboardInput={true}
                            showDateInput={false}
                            iconClick={this.open}
                            outInputKeydown={this.outInputKeydown}
                            {...getFieldProps('date', {
                                validateTrigger: 'onBlur',
                                initialValue:moment('2018-01-01'),
                                rules: [{
                                    required: true, message: '请输入日期',
                                }],
                            }) }
                        />
                    </Col>
                    <Col md={3}>
                        <button className="u-button" onClick={this.open}>展开/收起面板</button>
                        <button className="u-button" onClick={this.submit}>获得值</button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Form.createForm()(Demo8);
