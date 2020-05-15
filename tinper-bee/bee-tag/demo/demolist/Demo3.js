/**
*
* @title disable标签
* @description 禁用的标签，不可以进行编辑。
*
*/
import React, { Component } from 'react';
import Tag from '../../src';
class Demo3 extends Component {
    render () { 
        return (
            <div className="demoPadding">
                <Tag disabled>disabled</Tag> 
            </div>
        )
    }
}

export default Demo3;