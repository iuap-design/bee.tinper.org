/**
*
* @title 语意色标签
* @description 表示提示信息的标签
* 
*/
import React, { Component } from 'react';
import Tag from '../../src';
class Demo2 extends Component {
    render () { 
        return (
            <div className="demoPadding">
                <Tag colors="success">success</Tag>
                <Tag colors="warning">warning</Tag>
                <Tag colors="danger">danger</Tag>
                <Tag colors="info">info</Tag>
             </div>
        )
    }
}

export default Demo2;