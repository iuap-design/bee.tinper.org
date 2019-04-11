/**
*
* @title 可选标签
* @description 可以表示选中和未选中两种状态的标签
*
*/
import React, { Component } from 'react';
import Tag from '../../src';
class Demo5 extends Component {
    render () { 
        return (
            <div className="demoPadding">
                <Tag select={true}>部门</Tag>
                <Tag select={true}>职级</Tag>
                <Tag select={true}>年份</Tag>
                <Tag select={true}>月份</Tag> 
            </div>
        )
    }
}

export default Demo5;