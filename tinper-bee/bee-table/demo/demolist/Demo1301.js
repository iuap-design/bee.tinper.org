/**
*
* @title 多选功能
* @parent 行操作-选择
* @description 支持多选、全选和禁止选择。getSelectedDataFunc方法是选中行的回调函数，返回当前选中的数据数组。给data数据添加_checked参数可设置当前数据是否选中，添加_disabled参数可禁止选择当前数据。
* demo1301
*/


import React, { Component } from 'react';
import {Checkbox} from "tinper-bee";

import Table from '../../src';
import multiSelect from "../../src/lib/multiSelect.js";

const columns = [
  { title: "员工编号", dataIndex: "a", key: "a", width: 300, className: "rowClassName"},
  { title: "员工姓名", dataIndex: "b", key: "b", width: 500 },
  { title: "性别", dataIndex: "c", key: "c", width: 500 },
  { title: "部门", dataIndex: "d", key: "d", width: 200 }
];

const data = [
  { a: "ASVAL_201903280005", b: "小张", c: "男", d: "财务二科", key: "1",_checked:true },
  { a: "ASVAL_201903200004", b: "小明", c: "男", d: "财务一科", key: "2",_checked:false },
  { a: "ASVAL_201903120002", b: "小红", c: "女", d: "财务一科", key: "3",_checked:false },
  { a: "ASVAL_201903280010", b: "小王", c: "女", d: "财务二科", key: "4",_disabled:true },
  { a: "ASVAL_201903200021", b: "小李", c: "男", d: "财务一科", key: "5",_checked:false}
];
//拼接成复杂功能的table组件不能在render中定义，需要像此例子声明在组件的外侧，不然操作state会导致功能出现异常
let MultiSelectTable  = multiSelect(Table, Checkbox);

class Demo12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }
  /**
   *@param selectedList:当前选中的行数据
   *@param record 当前操作行数据
   *@param index 当前操作行索引
   *@param newData 进行多选操作之后的新数据 data
   * @memberof Demo12
   */
  getSelectedDataFunc = (selectedList,record,index,newData) => {
    console.log("selectedList", selectedList,"index",index);
    // 注意：需要用回调中提供的参数 newData，去更新 state 或 store 中的 data 属性值，否则当表格重新render的时候，已选数据会被冲刷掉。
  };
  
  render() {
    let multiObj = {
      inverse: true, //设置选中为红色填充
    };
    return (
      <MultiSelectTable 
        bordered
        columns={columns} 
        data={data} 
        // multiSelectConfig={multiObj} //可以自定义 Checkbox 属性
        getSelectedDataFunc={this.getSelectedDataFunc}/>
    );
  }
}

export default Demo12;