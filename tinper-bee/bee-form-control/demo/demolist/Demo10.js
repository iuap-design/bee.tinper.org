/**
 * @title 自适应文本高度的文本域
 * @description
 */

import React, {Component} from 'react';
import FormControl from '../../src';

export default class Demo10 extends Component {
    onPressEnter = (e) => {
        console.log('按下回车', e)
    }
    onResize = ({ width, height }) => {
        console.log('onResize', width, height)
    }
    render() {
        return (
            <div className="demo1">
                <FormControl
                    componentClass="textarea"
                    defaultValue={1}
                    autoSize
                />
                <div style={{ margin: '24px 0' }} />
                <FormControl
                    componentClass="textarea"
                    placeholder="Controlled autosize"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    onPressEnter={this.onPressEnter}
                    onResize={this.onResize}
                />
            </div>
        )
    }
}