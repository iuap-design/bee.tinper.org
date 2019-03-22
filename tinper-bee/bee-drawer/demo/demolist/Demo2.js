/**
 *
 * @title Drawer位置示例
 * @description 从上下左右弹出抽屉
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src/index';
import Radio from 'bee-radio';
import Button from 'bee-button';

class Demo2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: 'Drawer'
        };
        this.fPositionChange = this.fPositionChange.bind(this);
        this.fPopDrawer = this.fPopDrawer.bind(this);
        this.fCloseDrawer = this.fCloseDrawer.bind(this);
    }
    fPopDrawer(){
        this.setState({
            showDrawer: true
        })
    }
    fPositionChange(value){
        this.setState({
            placement: value
        })
    }
    fCloseDrawer(){
        this.setState({
            showDrawer: false
        })
    }
    render () {
        let {placement,showDrawer,title} = this.state;
        title = placement[0].toUpperCase() + placement.slice(1) + ' ' + title;

        return (
            <div className="demoPadding demo2">
                <div className="placementc">
                    <Radio.RadioGroup
                        name="placement"
                        selectedValue={placement}
                        onChange={this.fPositionChange}>
                        <Radio value="left" >left</Radio>
                        <Radio value="right" >right</Radio>
                        <Radio value="top" >top</Radio>
                        <Radio value="bottom" >bottom</Radio>
                    </Radio.RadioGroup>
                </div>
                <div className="btnc">  
                    <Button className="btn" onClick={this.fPopDrawer}>打开</Button>
                </div>
                <Drawer className={'demo2'} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
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

export default Demo2;
