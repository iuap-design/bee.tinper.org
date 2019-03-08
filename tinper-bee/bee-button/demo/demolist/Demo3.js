/**
 *
 * @title 图标按钮
 * @description 当需要在 Button 内嵌入图标时，可以在 Button 内使用 Icon 组件。
 *
 */

import React, { Component } from 'react';
import Button from '../../src';
import Icon from 'bee-icon';

class Demo4 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button colors="primary" shape="icon"><Icon type='uf-search' /></Button>
                <Button colors="primary"><Icon type='uf-search' />Search</Button>
                <Button colors="secondary" shape="icon"><Icon type='uf-del' /></Button>
                <Button colors="secondary"><Icon type='uf-del' />Delete</Button>
                <Button colors="info" shape="icon"><Icon type='uf-cloud-up' /></Button>
                <Button colors="info"><Icon type='uf-cloud-up' />Upload</Button>
                <Button shape="icon" bordered><Icon type='uf-pencil' /></Button>
                <Button bordered><Icon type='uf-pencil' />Edit</Button>
            </div>
        )
    }
}

export default Demo4;