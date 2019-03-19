/**
 *
 * @title 受控制的气泡卡片
 * @description 通过设置show，来控制气泡卡片的显示和隐藏
 */

import {Component} from 'react';
import Popover from '../../src';
import Button from 'bee-button';


class Demo2 extends Component {
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
                    content={content}
                    show={this.state.show}
                    id="demo2"
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
export default Demo2;

