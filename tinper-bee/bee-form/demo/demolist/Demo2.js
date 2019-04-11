/**
 *
 * @title 基本form校验
 * @description 登录示例
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src';
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import Button from 'bee-button';
import Icon from 'bee-icon';
const FormItem = Form.FormItem;

const Demo2 = Form.createForm()(class Demo2 extends Component {
    submit = (e) => {
        e.preventDefault();
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
        return (
            <div className="demo2">
                <Form >
                    <FormItem>
                        <Label>用户名</Label>
                        <FormControl placeholder="请输入用户名"
                            {...getFieldProps('username', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入用户名</span></span>,
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('username')}
                        </span>
                    </FormItem>
                    <FormItem>
                        <Label>密码</Label>
                        <FormControl placeholder="请输入密码" type='password'
                            {...getFieldProps('password', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入密码</span></span>,
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('password')}
                        </span>
                    </FormItem>
                    <FormItem style={{'paddingLeft':'106px'}}>
                        <Button shape="border" className="reset" style={{"marginRight":"8px"}}>取消</Button>
                        <Button colors="primary" className="login" onClick={this.submit}>登录</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
})
export default Demo2;