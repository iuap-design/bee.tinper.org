/**
 * @title 使用前后缀
 * @description 设置 prefix、suffix
 */

import React, {Component} from 'react';
import Icon from 'bee-icon';
import FormControl from '../../src';

export default class Demo1 extends Component {


    render() {
        return (
            <div className="demo9">
                <FormControl
                    size="sm"
                    prefix='￥'
                    suffix='S'
                />
                <FormControl
                    size="sm"
                    prefix={<Icon type='uf-notification'/>}
                    suffix={<Icon type='uf-flag'/>}
                />
                <FormControl
                    size='md'
                    prefix='￥'
                    suffix='尾'
                />
                <FormControl
                    size="md"
                    prefix={<Icon type='uf-notification'/>}
                    suffix={<Icon type='uf-flag'/>}
                />
                <FormControl
                    size="lg"
                    prefix='￥'
                    suffix='end'
                />
                <FormControl
                    size="lg"
                    prefix={<Icon type='uf-notification'/>}
                    suffix={<Icon type='uf-flag'/>}
                />
            </div>

        )
    }
}