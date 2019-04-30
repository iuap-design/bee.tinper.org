/**
 *
 * @title 自定义弹出框向上/向左偏移量
 * @description 通过设置 `positionTop` 和 `positionLeft`，可自定义弹出框向上/向左偏移量。指定的数值分别代表弹出框距离浏览器窗口上侧和左侧的距离。
 */

import {Component} from 'react';
import Popover from '../../src';
import Button from 'bee-button';


class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    show = () => {
        this.setState({
            show: true
        })
    }

    render() {
        let content = (
            <div>
                <p>请确认您的包裹已签收！</p>
                <div>
                    <Button
                        colors="primary"
                        onClick={ this.handleClose }
                        size="sm">
                        关闭
                    </Button>
                </div>
            </div>
        )
        return (
            <div>
                <Popover
                    placement="right"
                    // positionTop={1059}
                    // positionLeft={106}
                    content={content}
                    show={this.state.show}
                    id="demo4"
                >
                    <Button
                        colors="primary"
                        onClick={ this.show }
                        >确认按钮</Button>
                </Popover>
            </div>
        )
    }
}
export default Demo4;

