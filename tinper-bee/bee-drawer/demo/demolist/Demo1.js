/**
 *
 * @title Drawer基本示例
 * @description 弹出文字
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Drawer from '../../src/index';

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: 'Basic Drawer'
        };
        this.fPopDrawer = this.fPopDrawer.bind(this);
        this.fCloseDrawer = this.fCloseDrawer.bind(this);
    }
    fPopDrawer(){
        this.setState({
            showDrawer: true
        })
    }
    fCloseDrawer(){
        this.setState({
            showDrawer: false
        })
    }
    render () {
        let {placement,showDrawer,title} = this.state;

        return (
            <div className="demoPadding">
                <div className="btnc">  
                    <Button className="btn" onClick={this.fPopDrawer}>打开</Button>
                </div>
                <Drawer className={'demo1'} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <div className="con">
                        <p>这是第一行文字</p>
                        <p>这是第二行文字</p>
                        <p>这是第三行文字，啦啦啦~</p>                                                 
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default Demo1;
