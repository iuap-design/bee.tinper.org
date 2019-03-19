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

    onHide = () => {
        console.log('onHide')
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
        )
        return (
            <div style={{position: 'relative', height: 320, marginTop: 100, marginLeft: 250}}>
                <Popover
                    placement="leftTop"
                    content={content}
                    onHide={this.onHide}
                    trigger="hover"
                    id="leftTop"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 5,
                            left: 0
                        }}>左上</Button>
                </Popover>
                <Popover
                    placement="left"
                    content={content}
                    trigger="hover"
                    id="left"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 55,
                            left: 0
                        }}>左
                    </Button>
                </Popover>
                <Popover
                    placement="leftBottom"
                    content={content}
                    trigger="hover"
                    id="leftBottom"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 110,
                            left: 0
                        }}>左下</Button>
                </Popover>
                <Popover
                    placement="topLeft"
                    content={content}
                    trigger="hover"
                    id="topLeft"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 100
                        }}>上左
                    </Button>
                </Popover>
                <Popover
                    placement="top"
                    content={content}
                    trigger="hover"
                    id="top"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 200
                        }}>上
                    </Button>
                </Popover>
                <Popover
                    placement="topRight"
                    content={content}
                    trigger="hover"
                    id="topRight"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 300
                        }}>
                        上右
                    </Button>
                </Popover>
                <Popover
                    placement="rightTop"
                    content={content}
                    trigger="hover"
                    id="rightTop"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 5,
                            left: 400
                        }}>右上
                    </Button>
                </Popover>
                <Popover
                    placement="right"
                    content={content}
                    trigger="hover"
                    id="right"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 55,
                            left: 400
                        }}>右</Button>
                </Popover>
                <Popover
                    placement="rightBottom"
                    content={content}
                    trigger="hover"
                    id="rightBottom"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 110,
                            left: 400
                        }}>右下</Button>
                </Popover>
                <Popover
                    placement="bottomLeft"
                    content={content}
                    trigger="hover"
                    id="bottomLeft"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 115,
                            left: 100
                        }}>下左</Button>
                </Popover>
                <Popover
                    placement="bottom"
                    content={content}
                    trigger="hover"
                    id="bottom"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 115,
                            left: 200
                        }}>下</Button>
                </Popover>
                <Popover
                    placement="bottomRight"
                    content={content}
                    trigger="hover"
                    id="bottomRight"
                >
                    <Button
                        colors="primary"
                        style={{
                            position: 'absolute',
                            top: 115,
                            left: 300
                        }}>下右</Button>
                </Popover>
            </div>
        )
    }
}

export default Demo1;