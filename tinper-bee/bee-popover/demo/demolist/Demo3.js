/**
 * @title 提示类组件支持出现在可配置的container中
 * @description "container"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置定位
 */

import React, { Component } from 'react';
import Popover from '../../src';

class Demo3 extends Component {
    state = {
        show: false
    }

    content = (
        <div>
            <p>我会跟着移动！</p>
        </div>
    )

    show = () => {
        this.setState({
            show: true
        })
    }

    handleVisibleChange = visible => {
        console.log('onVisibleChange：',visible)
    };

    handleHide = (visible) => {
        this.setState({
            show: visible
        })
    }

    render () {
        let { show } = this.state;

        return (
            <div className="demo-popover">
                <div className="demo-popover-box">
                    <div className="demo-popover-wrapper" ref={ref => this.container = ref}>
                        <Popover
                            id="demo3"
                            trigger="click"
                            content={this.content}
                            container={this.container ? this.container : null}
                            show={show}
                            onVisibleChange={this.handleVisibleChange}
                            onHide={this.handleHide}
                        >
                            <span className="demo-popover-text" onClick={this.show}>点击我，popover会跟随我移动</span>
                        </Popover>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demo3;