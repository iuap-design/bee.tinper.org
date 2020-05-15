/**
 *
 * @title 位置
 * @description placement 参数控制显示位置。位置有 12 个方向。
 */

import {Component} from 'react';
import Tooltip from '../../src';
import Button from 'bee-button';


class Demo6 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tip = (
            <div>
                <p>这是一个很强的提醒！</p>
				<p>这是一个很强的提醒！</p>
				<p>这是一个很强的提醒！</p>
            </div>
        );
        const buttonWidth = 72;
        return (
            <div className="demo6">
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Tooltip inverse placement="topLeft" overlay={tip}>
                        <Button colors="primary">左上</Button>
                    </Tooltip>
                    <Tooltip inverse placement="top" overlay={tip}>
                        <Button colors="primary">上</Button>
                    </Tooltip>
                    <Tooltip inverse placement="topRight" overlay={tip}>
                        <Button colors="primary">上右</Button>
                    </Tooltip>
                    </div>
                    <div style={{ width: buttonWidth, float: 'left' }}>
                    <Tooltip inverse placement="leftTop" overlay={tip}>
                        <Button colors="primary">左上</Button>
                    </Tooltip>
                    <Tooltip inverse placement="left" overlay={tip}>
                        <Button colors="primary">左</Button>
                    </Tooltip>
                    <Tooltip inverse placement="leftBottom" overlay={tip}>
                        <Button colors="primary">左下</Button>
                    </Tooltip>
                    </div>
                    <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
                    <Tooltip inverse placement="rightTop" overlay={tip}>
                        <Button colors="primary">右上</Button>
                    </Tooltip>
                    <Tooltip inverse placement="right" overlay={tip}>
                        <Button colors="primary">右</Button>
                    </Tooltip>
                    <Tooltip inverse placement="rightBottom" overlay={tip}>
                        <Button colors="primary">右下</Button>
                    </Tooltip>
                    </div>
                    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Tooltip inverse placement="bottomLeft" overlay={tip}>
                        <Button colors="primary">下左</Button>
                    </Tooltip>
                    <Tooltip inverse placement="bottom" overlay={tip}>
                        <Button colors="primary">下</Button>
                    </Tooltip>
                    <Tooltip inverse placement="bottomRight" overlay={tip}>
                        <Button colors="primary">下右</Button>
                    </Tooltip>
                </div>
            </div>
        )
    }
}

export default Demo6;