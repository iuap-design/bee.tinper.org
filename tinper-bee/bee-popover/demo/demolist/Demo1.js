/**
 *
 * @title 气泡卡片默认样式
 * @description 支持12个位置
 */

import {Component} from 'react';
import Popover from '../../src';
import Button from 'bee-button';


 class Demo1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let content = (
            <div>
                <h3>消息</h3>
                <ul>
                    <li>您的服务器已宕机，请处理。</li>
                    <li>您的手机已停机，请续费。</li>
                    <li>你的工资已到账，请查收。</li>
                </ul>
            </div>
        );
        const buttonWidth = 72;
        return (
            <div className="demo1">
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Popover placement="topLeft" content={content}>
                        <Button colors="primary">左上</Button>
                    </Popover>
                    <Popover placement="top" content={content}>
                        <Button colors="primary">上</Button>
                    </Popover>
                    <Popover placement="topRight" content={content}>
                        <Button colors="primary">上右</Button>
                    </Popover>
                    </div>
                    <div style={{ width: buttonWidth, float: 'left' }}>
                    <Popover placement="leftTop" content={content}>
                        <Button colors="primary">左上</Button>
                    </Popover>
                    <Popover placement="left" content={content}>
                        <Button colors="primary">左</Button>
                    </Popover>
                    <Popover placement="leftBottom" content={content}>
                        <Button colors="primary">左下</Button>
                    </Popover>
                    </div>
                    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
                    <Popover placement="rightTop" content={content}>
                        <Button colors="primary">右上</Button>
                    </Popover>
                    <Popover placement="right" content={content}>
                        <Button colors="primary">右</Button>
                    </Popover>
                    <Popover placement="rightBottom" content={content}>
                        <Button colors="primary">右下</Button>
                    </Popover>
                    </div>
                    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popover placement="bottomLeft" content={content}>
                        <Button colors="primary">下左</Button>
                    </Popover>
                    <Popover placement="bottom" content={content}>
                        <Button colors="primary">下</Button>
                    </Popover>
                    <Popover placement="bottomRight" content={content}>
                        <Button colors="primary">下右</Button>
                    </Popover>
                </div>
            </div>
        )
    }
}

export default Demo1;