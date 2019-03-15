/**
 *
 * @title unmountOnExit使用
 * @description collapse中使用unmountOnExit，默认值为false，unmountOnExit为true时每次隐藏折叠区时，组件会从dom中删除；为false时，不会删除
 */

import React, {Component} from 'react';

import Button from 'bee-button';

import Collapse from '../../src';


class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div>
                <Button
                    colors="primary"
                    onClick={() => this.setState({open: !this.state.open})}>
                    unmountOnExit为true的Demo
                </Button>

                <Collapse
                    in={this.state.open}
                    unmountOnExit={true}>
                    <div>
                        我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。unmountOnExit为true隐藏时我这个dom将被移除。
                    </div>
                </Collapse>


            </div>
        )

    }
}

export default Demo1;