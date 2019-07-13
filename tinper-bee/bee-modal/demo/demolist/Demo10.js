/**
 *
 * @title 嵌套表格的模态框
 * @description 嵌套表格
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Checkbox from 'bee-checkbox'
import Table from 'bee-table'
import multiSelect from "bee-table/build/lib/multiSelect";


import Modal from '../../src';

let MultiSelectTable = multiSelect(Table, Checkbox);


class Demo10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            data: [
                { a: "杨过", b: "男", c: 30, d: '内行', key: "2", _checked: true },
                { a: "令狐冲", b: "男", c: 41, d: '大侠', key: "1", _checked: true },
                { a: "郭靖", b: "男", c: 25, d: '大侠', key: "3", _checked: true }
            ]
        };

    }

    columns = [
        {
            title: "名字",
            dataIndex: "a",
            key: "a",
            width: "25%"
        },
        {
            title: "性别",
            dataIndex: "b",
            key: "b",
            width: "25%"
        },
        {
            title: "年龄",
            dataIndex: "c",
            key: "c",
            width: "20%",
            sorter: (a, b) => a.c - b.c
        },
        {
            title: "武功级别",
            dataIndex: "d",
            key: "25%"
        }
    ];

    close = () => {
        this.setState({
            showModal: false
        });
    }
    open = () => {
        this.setState({
            showModal: true
        });
    }

    getSelectedDataFunc = data => {
        console.log(data);
    };

    clear = () => {
        let { data } = this.state;
        data.forEach(item => item._checked = false)
        this.setState({
            data:JSON.parse(JSON.stringify(data))
        })
    }

    render () {
        let multiObj = {
            type: "checkbox"
        };
        return (
            <div>
                <Button
                    bordered
                    className="demo-margin"
                    onClick={this.open}>
                    打开模态框
                </Button>
                <Modal
                    show={this.state.showModal}
                    onHide={this.close}
                    size="lg"
                    ref={ref => this.modal = ref}
                    className="demo10-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>标题</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <MultiSelectTable
                            columns={this.columns}
                            data={this.state.data}
                            multiSelect={multiObj}
                            getSelectedDataFunc={this.getSelectedDataFunc} 
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.clear} colors="secondary" className="clear-btn">清空所选</Button>
                        <Button onClick={this.close} colors="secondary" style={{ marginRight: 8 }}>取消</Button>
                        <Button onClick={this.close} bordered>确认</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Demo10;
