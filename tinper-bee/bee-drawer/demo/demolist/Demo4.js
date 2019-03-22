/**
 *
 * @title Drawer多层抽屉示例
 * @description 弹出多层抽屉
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';
import Button from 'bee-button';

class Demo4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: 'Basic Drawer',
            secondTitle: 'Second Drawer',
            showSecondDrawer: false,
            secondPlacement: 'right'
        };
        this.fPopDrawer = this.fPopDrawer.bind(this);
        this.fCloseDrawer = this.fCloseDrawer.bind(this);
        this.fPopSecondDrawer = this.fPopSecondDrawer.bind(this);
        this.fCloseSecondDrawer = this.fCloseSecondDrawer.bind(this);
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
    fPopSecondDrawer(){
        this.setState({
            showSecondDrawer: true
        })
    }
    fCloseSecondDrawer(){
        this.setState({
            showSecondDrawer: false
        })
    }
    render () {
        let {placement,showDrawer,title,secondTitle,showSecondDrawer,secondPlacement} = this.state;

        return (
            <div className="demoPadding">
                <div className="btnc">  
                    <Button className="btn" onClick={this.fPopDrawer}>打开</Button>
                </div>
                <Drawer className={'demo4'} width={500} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <div className="con">
                        <Button onClick={this.fPopSecondDrawer} className="btn">二级抽屉</Button>
                    </div>
                    <Drawer className={'demo4'} width={'320px'} zIndex={1000001} title={secondTitle} show={showSecondDrawer} placement={secondPlacement} onClose={this.fCloseSecondDrawer}>
                        <div className="con">
                            <p>这是第一行文字</p>
                            <p>这是第二行文字</p>
                            <p>这是第三行文字，啦啦啦~</p>  
                            <p>这是第四行文字，啦啦啦~</p>  
                        </div>
                    </Drawer>  
                </Drawer>
            </div>
        )
    }
}

export default Demo4;
