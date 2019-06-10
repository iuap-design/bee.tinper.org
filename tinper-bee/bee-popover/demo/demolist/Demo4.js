/**
 *
 * @title 自定义弹出框向上/向左偏移量
 * @description 通过设置 `positionTop` 和 `positionLeft`，可自定义弹出框向上/向左偏移量。指定的数值分别代表弹出框距离浏览器窗口上侧和左侧的距离。
 */

import {Component} from 'react';
import Popover from '../../src';
import Button from 'bee-button';

class Demo4 extends Component {
    render() {
        let content = (
            <p>
                请确认您的包裹已签收！
            </p>
        )
        return (
            <div>
                <Popover
                    id="demo4"
                    placement="right"
                    trigger="click"
                    // positionTop={1050}
                    // positionLeft={106}
                    title={<p>消息</p>}
                    content={content}
                >
                    <Button colors="primary">确认按钮</Button>
                </Popover>
            </div>
        )
    }
}
export default Demo4;

