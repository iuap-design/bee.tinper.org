/**
 *
 * @title Drawer表单示例
 * @description 弹出表单信息
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';
import Button from 'bee-button';
import Form from 'bee-form';
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import Icon from 'bee-icon';
import Checkbox from 'bee-checkbox';

const FormItem = Form.FormItem;

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: '表单'
        };
        this.fPopDrawer = this.fPopDrawer.bind(this);
        this.fCloseDrawer = this.fCloseDrawer.bind(this);
    }
    fPopDrawer(){
        this.setState({
            showDrawer: true
        })
    }
    fCloseDrawer(){
        this.setState({
            showDrawer: false
        })
    }
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
    handleConfirmPassword = (rule, value, callback) => {
        const { getFieldValue } = this.props.form;
        if (value && value !== getFieldValue('password')) {
            callback(<span><Icon type="uf-exc-t"></Icon><span>两次输入不一致！</span></span>)
        }
        callback();
    }
    render () {
        let {placement,showDrawer,title} = this.state;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="demoPadding">
                <div className="btnc">  
                    <Button className="btn" onClick={this.fPopDrawer}>打开</Button>
                </div>
                <Drawer className='demo3' title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <Form>
                        <FormItem>
                            <Label>用户名</Label>
                            <FormControl placeholder="请输入用户名(包含数字和字母，8-15位)"
                                {...getFieldProps('username', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入用户名</span></span>,
                                    }, {
                                        pattern: /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{8,15}$/, 
                                        message: <span><Icon type="uf-exc-t"></Icon><span>用户名格式错误</span></span>,
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

                        <FormItem>
                            <Label>再次输入密码</Label>
                            <FormControl placeholder="请输入密码" type='password'
                                {...getFieldProps('password2', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入密码</span></span>,
                                    }, {
                                        validator: this.handleConfirmPassword
                                    }],
                                }) }
                            />
                            <span className='error'>
                                {getFieldError('password2')}
                            </span>
                        </FormItem>

                        <FormItem>
                            <Label>邮箱</Label>
                            <FormControl placeholder="请输入邮箱"
                                {...getFieldProps('email', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入邮箱</span></span>,
                                    }, {
                                        type: 'email', message: <span><Icon type="uf-exc-t"></Icon><span>邮箱格式不正确</span></span>
                                    }],
                                }) }
                            />
                            <span className='error'>
                                {getFieldError('email')}
                            </span>
                        </FormItem>
                        <FormItem>
                            <Label>手机号</Label>

                            <FormControl placeholder="请输入手机号"
                                {...getFieldProps('phone', {
                                    validateTrigger: 'onBlur',
                                    rules: [{
                                        required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入手机号</span></span>,
                                    }, {
                                        pattern: /^\d{11}$/, message: <span><Icon type="uf-exc-t"></Icon><span>手机号格式不正确</span></span>
                                    }],
                                }) }
                            />

                            <span className='error'>
                                {getFieldError('phone')}
                            </span>
                        </FormItem>

                        <FormItem style={{'paddingLeft':'106px'}}>
                            <Checkbox
                                defaultChecked={this.state.checkbox}
                                {
                                ...getFieldProps('checkbox', {
                                    initialValue: false,
                                }
                                ) }
                            >
                            我已经阅读并同意相关条款
                            </Checkbox>
                        </FormItem>
                        <FormItem style={{'paddingLeft':'106px'}}>
                            <Button shape="border" className="reset" style={{"marginRight":"8px"}}>取消</Button>
                            <Button colors="primary" className="login" onClick={this.submit}>注册</Button>
                        </FormItem>
                    </Form>
                </Drawer>
            </div>
        )
    }
}

export default Form.createForm()(Demo3);
