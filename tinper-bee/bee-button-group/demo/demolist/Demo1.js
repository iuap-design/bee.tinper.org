/**
 *
 * @title 默认按钮组
 * @description 基础按钮组
 *
 */

import React, { Component } from 'react';
import ButtonGroup from '../../src';
import Button from 'bee-button';
import Icon from 'bee-icon';

class Demo1 extends Component {
    render () {
        return (
            <div>
            <ButtonGroup style={{ margin: 10 }}>
                <Button shape='border'><Icon type='uf-navmenu' /></Button>
                <Button shape='border'><Icon type='uf-file' /></Button>
                <Button shape='border'><Icon type='uf-pencil' /></Button>
                <Button shape='border'><Icon type='uf-del' /></Button>
            </ButtonGroup>
            <ButtonGroup style={{ margin: 10 }}>
                <Button colors="primary">新增</Button>
                <Button colors="primary">修改</Button>
                <Button colors="primary">删除</Button>
            </ButtonGroup>
            <ButtonGroup style={{ margin: 10 }}>
                <Button colors="primary"><Icon type='uf-navmenu' /></Button>
                <Button colors="primary"><Icon type='uf-file' /></Button>
                <Button colors="primary"><Icon type='uf-pencil' /></Button>
                <Button colors="primary"><Icon type='uf-del' /></Button>
            </ButtonGroup>
            </div>

        )
    }
}

export default Demo1;
