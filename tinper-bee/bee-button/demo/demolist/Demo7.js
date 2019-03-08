/**
 *
 * @title 不可用状态
 * @description 通过添加disabled属性可将按钮设置为不可用状态。
 *
 */

import React, { Component } from 'react';
import Button from '../../src';
import Icon from 'bee-icon';

class Demo4 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button colors="primary">primary</Button>
                <Button colors="primary" disabled>primary(disabled)</Button>
                <div className="divider"></div>
                <Button colors="success">success</Button>
                <Button colors="success" disabled>success(disabled)</Button>
                <div className="divider"></div>
                <Button colors="info">info</Button>
                <Button colors="info" disabled>info(disabled)</Button>
                <div className="divider"></div>
                <Button colors="warning">warning</Button>
                <Button colors="warning" disabled>warning(disabled)</Button>
                <div className="divider"></div>
                <Button colors="dark">dark</Button>
                <Button colors="dark" disabled>dark(disabled)</Button>
                <div className="divider"></div>
                <Button bordered>border</Button>
                <Button bordered disabled>border(disabled)</Button> 
                <div className="divider"></div>
            </div>
        )
    }
}

export default Demo4;