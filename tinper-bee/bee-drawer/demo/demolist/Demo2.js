/**
 *
 * @title Drawer位置示例
 * @description 从上下左右弹出抽屉
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src';
import Button from 'bee-button';

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            left:false,
            right:false,
            top:false,
            down:false
        };
    }
    open=(placement)=>{
        switch(placement){
            case 'left':
                this.setState({
                    left:true
                })
            break;
            case 'right':
                this.setState({
                    right:true
                })
            break;
            case 'top':
                this.setState({
                    top:true
                })
            break;
            case 'down':
                this.setState({
                    down:true
                })
            break;
        }
    }
    close=(placement)=>{
        switch(placement){
            case 'left':
                this.setState({
                    left:false
                })
            break;
            case 'right':
                this.setState({
                    right:false
                })
            break;
            case 'top':
                this.setState({
                    top:false
                })
            break;
            case 'down':
                this.setState({
                    down:false
                })
            break;
        }
    }
    render () {
        let { left,right,top,down } = this.state;
        return (
            <div className="demoPadding demo2">
                <div className="btnc">  
                    <Button colors="primary" onClick={()=>{this.open('left')}}>左边</Button>
                    <Button colors="primary" onClick={()=>{this.open('right')}}>右边</Button>
                    <Button colors="primary" onClick={()=>{this.open('top')}}>上边</Button>
                    <Button colors="primary" onClick={()=>{this.open('down')}}>下边</Button>
                </div>
                <Drawer className={'demo2'} placement='left' title="我从左边来" show={left} onClose={()=>{this.close('left')}}>
                    <div className="con">
                        <p>我从左边来</p>
                        <p>这是第一行文字</p>
                        <p>这是第二行文字</p>
                        <p>这是第三行文字，啦啦啦~</p>                                                  
                    </div>
                </Drawer>
                <Drawer className={'demo2'} placement='right' title="我从右边来" show={right} onClose={()=>{this.close('right')}}>
                    <div className="con">
                        <p>我从右边来</p>
                        <p>这是第一行文字</p>
                        <p>这是第二行文字</p>
                        <p>这是第三行文字，啦啦啦~</p>                                                  
                    </div>
                </Drawer>
                <Drawer className={'demo2'} placement='top' title="我从上边来" show={top} onClose={()=>{this.close('top')}}>
                    <div className="con">
                        <p>我从上边来</p>
                        <p>这是第一行文字</p>
                        <p>这是第二行文字</p>
                        <p>这是第三行文字，啦啦啦~</p>                                                  
                    </div>
                </Drawer>
                <Drawer className={'demo2'} placement='bottom' title="我从下边来" show={down} onClose={()=>{this.close('down')}}>
                    <div className="con">
                        <p>我从下边来</p>
                        <p>这是第一行文字</p>
                        <p>这是第二行文字</p>
                        <p>这是第三行文字，啦啦啦~</p>                                                  
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default Demo2;
