/**
* @title 后端列排序
* @parent 列操作-排序 Sort
* @description 可在控制台中查看序列化后的参数字符串，将参数传递给后端即可进行列排序
* demo0902
*/


import React, { Component } from 'react';
import {Icon} from "tinper-bee";
import Table from '../../src';
import sort from "../../src/lib/sort.js";
let ComplexTable = sort(Table, Icon);

// const columns11 = [
//   {
//     title: "名字",
//     dataIndex: "a",
//     key: "a",
//     width: 100
//   },
//   {
//     title: "性别",
//     dataIndex: "b",
//     key: "b",
//     width: 100
//   },
//   {
//     title: "年龄",
//     dataIndex: "c",
//     key: "c",
//     width: 200,
//     sorter: (a, b) => a.c - b.c
//   },
//   {
//     title: "武功级别",
//     dataIndex: "d",
//     key: "d"
//   },
//   {
//     title: "分数",
//     dataIndex: "e",
//     key: "e",
//     sorter: (a, b) => a.c - b.c
//   },
// ];

// const data11 = [
//   { a: "杨过", b: "男", c: 30,d:'内行', e:139,key: "2" },
//   { a: "令狐冲", b: "男", c: 41,d:'大侠', e:109, key: "1" },
//   { a: "郭靖", b: "男", c: 25,d:'大侠', e:159, key: "3" }
// ];
const columns11 = [
  {
    title: "单据编号",
    dataIndex: "num",
    key: "num",
    width: 120,
    fixed: "left"
  },
  {
    title: "单据日期",
    dataIndex: "date",
    key: "date",
    width: 200,
  },
  {
    title: "供应商",
    dataIndex: "supplier",
    key: "supplier",
    width: 100
  },
  {
    title: "联系人",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "整单数量",
    dataIndex: "total",
    key: "total",
    width: 150,
    sorter: (a, b) => a.total - b.total
  },
  {
    title: "金额",
    dataIndex: "money",
    key: "money",
    width: 100,
    sorter: (a, b) => a.money - b.money
  }
];

const data11 = [
  { num: "NU0391001", date: "2019-03-01", supplier: 'xx供应商',contact:'Tom', total:30 ,money: 100,key: "1" },
  { num: "NU0391002", date: "2018-11-02", supplier: 'yy供应商',contact:'Jack', total:41 ,money: 50,key: "2" },
  { num: "NU0391003", date: "2019-05-03", supplier: 'zz供应商',contact:'Jane', total:25 ,money: 200,key: "3" }
];

const defaultProps = {
  prefixCls: "bee-table"
};
class Demo28 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortOrder: "",
      data: data11
    };
  }
  /**
   * 后端获取数据
   */
  sortFun = (sortParam)=>{
    console.info(sortParam);
    //将参数传递给后端排序
  }
  render() {
    let sortObj = {
      mode:'multiple',
      backSource:true,
      sortFun:this.sortFun
    }
    return <ComplexTable columns={columns11} data={this.state.data} sort={sortObj}/>;
  }
}
Demo28.defaultProps = defaultProps;


export default Demo28;