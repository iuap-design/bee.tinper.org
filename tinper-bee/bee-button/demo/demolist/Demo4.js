/**
 *
 * @title 按钮尺寸
 * @description 按钮有小、中、大、巨大四种尺寸。通过设置 size 为 sm、lg、xg 分别把按钮设为小、大、巨大尺寸。若不设置 size，则尺寸为中。
 *
 */

import React, { Component } from 'react';
import Button from '../../src';

class Demo4 extends Component {
    render () {
        return (
            <div className="demoPadding">
                <Button size="sm" colors="primary">小按钮</Button>
                <Button colors="primary">默认</Button>
                <Button size="lg" colors="primary">大按钮</Button>
                <Button size="xg" colors="primary">巨大按钮</Button>
            </div>
        )
    }
}

export default Demo4;