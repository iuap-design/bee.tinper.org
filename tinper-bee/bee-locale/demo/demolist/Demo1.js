/**
 *
 * @title 多语组件设置组件的语言
 * @description 按照固定的格式传入语言对象，会自动改变组件内默认文字的语言。
 *
 */

import React, {Component} from 'react';
import Locale from '../../src'
import Popconfirm from 'bee-popconfirm';
import Button from 'bee-button';
import En from '../../src/en_US';

class Demo1 extends Component {
    render() {
        let content = 'Do yon like me?';
        return (
            <Locale locale={En}>
                <Popconfirm
                    trigger="click"
                    placement="right"
                    content={content}>
                    <Button colors="primary">see right!</Button>
                </Popconfirm>
            </Locale>
        )
    }
}

export default Demo1;