/**
 *
 * @title 垂直排列的按钮组
 * @description 通过`vertical`属性设置按钮组垂直排列
 *
 */

import React, { Component } from 'react';
import ButtonGroup from '../../src';
import Button from 'bee-button';
import Icon from 'bee-icon';

class Demo2 extends Component {
    render () {
        return (
            <ButtonGroup vertical>
                <Button colors="primary"><Icon type='uf-navmenu' /></Button>
                <Button colors="info"><Icon type='uf-file' /></Button>
                <Button colors="warning"><Icon type='uf-del' /></Button>
            </ButtonGroup>
        )
    }
}


export default Demo2;
