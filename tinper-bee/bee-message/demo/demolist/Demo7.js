/**
 *
 * @title 单据提示类场景示例
 * @description Message组件常用在网络请求成功、失败、出现警告时使用。对于删除操作等需要强提示的场景可使用Modal组件。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Modal from 'bee-modal';
import Table from 'bee-table';
import Label from 'bee-label';
import Icon from 'bee-icon';
import Form from 'bee-form';
import FormControl from 'bee-form-control';
import Message from '../../src';

const FormItem = Form.FormItem;

const success = function () {
    Message.destroy();
    Message.create({content: '单据提交成功。', color: 'successlight'});
};
const error = function () {
    Message.destroy();
    Message.create({content: '单据状态更新失败，请重新尝试。', color: 'dangerlight'});
};

const columns = [
    { title: "员工编号", dataIndex: "a", key: "a", width: 150 },
    { title: "员工姓名", dataIndex: "b", key: "b", width:100},
    { title: "性别", dataIndex: "c", key: "c", width: 100},
    { title: "部门", dataIndex: "d", key: "d", width: 100 }
];

const data = [
    { a: "ASVAL_20190328", b: "小张", c: "男", d: "财务二科", key: "1" },
    { a: "ASVAL_20190320", b: "小明", c: "男", d: "财务一科", key: "2" },
    { a: "ASVAL_20190312", b: "小红", c: "女", d: "财务一科", key: "3" }
];

class Demo7 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: data,
            showEditModal: false
        }
        this.currentRecord = {}
    }
    confirm = (index) => {
        let self = this;
        Modal.confirm({
            title: '确定要删除这条单据吗？',
            content: '单据删除后将不能恢复。',
            onOk: () => {
                data.splice(index,1);
                self.setState({data});
            }
        })
    };
    
    handleRowHover=(index,record)=>{
        this.currentIndex = index;
        this.currentRecord = record;
    }
    // 删除表格行
    handleDelete = () => {
        this.confirm(this.currentIndex);
    }
    // 新增表格行
    handleAdd = () => {
        let length = data.length;
        data.push({ a: `ASVAL_201903${length}`, b: "", c: "", d: "", e: "", key: length });
        this.setState({data});
    }
    // 编辑表格行
    handleEdit = () => {
        this.setState({
            showEditModal: true
        })
    }
    // 关闭模态框
    close = () => {
        this.setState({
            showEditModal: false
        })
    }
    // 提交修改
    submit = (e) => {
        let self = this,
            flag = false;
        e.preventDefault();
        let { a='' } = this.currentRecord;
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
                error();
            } else {
                console.log('提交成功', values);
                flag = true;
                let newRecord = {
                    a: a,
                    b: values.b,
                    c: values.c,
                    d: values.d
                };
                data.splice(this.currentIndex,1,newRecord);
                self.setState({data});
            }
        });
        if(flag){
            this.close();
        }
    }

    renderRowHover=()=>{
        return <div className="opt-btns">
                <Button size="sm" onClick={this.handleEdit}>编辑</Button> 
                <Button size="sm" onClick={this.handleDelete}>删除</Button>
               </div>
    }
    render () {
        const { getFieldProps, getFieldError } = this.props.form;
        let { a='',b='',c='',d='' } = this.currentRecord;
        return (
            <div className="demo6">
                <Button colors="primary" size="sm" onClick={this.handleAdd}>新增</Button>
                <Button colors="primary" size="sm" onClick={success}>保存</Button>
                <Table
                data={data}
                columns={columns}
                onRowHover={this.handleRowHover}
                hoverContent={this.renderRowHover}
                />
                <Modal
                className="demo3-modal"
                width = {460}
                backdropClosable = {false}
                show = { this.state.showEditModal }
                onHide = { this.close } >
                    <Modal.Header closeButton>
                        <Modal.Title>编辑行</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <FormItem>
                                <Label>员工编号</Label>
                                <FormControl value={a} disabled/>
                            </FormItem>
                            <FormItem>
                                <Label><Icon type="uf-mi" className='mast'></Icon>员工姓名</Label>
                                <FormControl placeholder="请输入员工姓名" 
                                    {...getFieldProps('b', {
                                        initialValue: b,
                                        validateTrigger: 'onBlur',
                                        rules: [{
                                            required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入员工姓名</span></span>,
                                        }],
                                    }) }
                                />
                                <span className='error'>
                                    {getFieldError('b')}
                                </span>
                            </FormItem>
                            <FormItem>
                                <Label><Icon type="uf-mi" className='mast'></Icon>性别</Label>
                                <FormControl placeholder="请选择性别" value={c}
                                    {...getFieldProps('c', {
                                        initialValue: c,
                                        validateTrigger: 'onBlur',
                                        rules: [{
                                            required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请选择性别</span></span>,
                                        }],
                                    }) }
                                />
                                <span className='error'>
                                    {getFieldError('c')}
                                </span>
                            </FormItem>
                            <FormItem>
                                <Label><Icon type="uf-mi" className='mast'></Icon>部门</Label>
                                <FormControl placeholder="请输入部门" value={d}
                                    {...getFieldProps('d', {
                                        initialValue: d,
                                        validateTrigger: 'onBlur',
                                        rules: [{
                                            required: true, message: <span><Icon type="uf-exc-t"></Icon><span>请输入部门</span></span>,
                                        }],
                                    }) }
                                />
                                <span className='error'>
                                    {getFieldError('d')}
                                </span>
                            </FormItem>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={ this.close } bordered style={{marginRight:"8px"}}>取消</Button>
                        <Button onClick={ this.submit } colors="primary">确认</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Form.createForm()(Demo7);
