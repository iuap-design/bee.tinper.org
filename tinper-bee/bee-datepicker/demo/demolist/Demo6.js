/**
 *
 * @title 自定义日期渲染父级容器	
 * @description getCalendarContainer自定义浮层渲染的父容器。该属性常用来将组件渲染到滚动区域内。
 */

import React, { Component } from "react";
import DatePicker from "../../src";
import Table from "bee-table";

const dataSource = [
    { a: "ASVAL_20190328", b: "小张", c: "", key: "1" },
    { a: "ASVAL_20190320", b: "小明", c: "", key: "2" },
    { a: "ASVAL_20190312", b: "小红", c: "", key: "3" },
    { a: "ASVAL_20190328", b: "小张", c: "", key: "4" },
    { a: "ASVAL_20190320", b: "小明", c: "", key: "5" },
    { a: "ASVAL_20190312", b: "小红", c: "", key: "6" },
    { a: "ASVAL_20190328", b: "小张", c: "", key: "7" },
    { a: "ASVAL_20190320", b: "小明", c: "", key: "8" },
    { a: "ASVAL_20190312", b: "小红", c: "", key: "9" },
    { a: "ASVAL_20190328", b: "小张", c: "", key: "10" },
    { a: "ASVAL_20190320", b: "小明", c: "", key: "11" },
    { a: "ASVAL_20190312", b: "小红", c: "", key: "12" }
];

class Demo6 extends Component {
    constructor(props) {
        super(props);
    }
    columns = [
        { title: "员工编号", dataIndex: "a", key: "a", width: 150 },
        { title: "员工姓名", dataIndex: "b", key: "b", width:100},
        { title: "出生日期", dataIndex: "c", key: "c", render: () => {
            return (
                <DatePicker 
                placeholder="选择日期"
                showToday={false}
                getCalendarContainer={trigger => trigger.parentNode.parentNode} 
                />
            )
        }},
        { title: "", dataIndex: "", key: ""}
    ];
    render() {
        return (
            <Table data={dataSource} columns={this.columns} scroll={{ y: 300 }} height={40}/>
        );
    }
}

export default Demo6;
