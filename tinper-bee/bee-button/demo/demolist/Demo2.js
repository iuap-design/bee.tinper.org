/**
 *
 * @title 按钮属性、状态
 * @description 按钮属性、状态 [isSubmit 是否作为form的提交按钮]
 * 
 */

import React, { Component } from 'react';
import Button from '../../src';

 class Demo2 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button colors="primary" isSubmit={true}>Default</Button>
                <Button disabled>disabled</Button>
                <Button bordered>border</Button>
                <Button colors="primary" shape="round">round</Button> 
            </div>
        )
    }
}

export default Demo2;
