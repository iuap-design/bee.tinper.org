/**
*
* @title 纯色图标
* @description 可以通过设置 theme 属性为 pure 来渲染纯色图标。
*
*/
import React, { Component } from 'react';
import SvgIcon from '../../src';

class Demo2 extends Component {
    render () {
        return (
            <div className="icons-list">
                <SvgIcon type="audio" theme="pure" />
                <SvgIcon type="excel" theme="pure" />
            </div>
        )
    }
}
export default Demo2;