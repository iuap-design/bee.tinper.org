/**
 *
 * @title Drawer列表信息示例
 * @description 弹出列表中一项的信息
 *
 */

import React, { Component } from 'react';
import Drawer from '../../src';

class Demo5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            placement: 'right',
            showDrawer: false,
            title: 'Basic Drawer',
            list: [
                {id:1, name: 'XiaoMing',hometown:'henan', age:23, school: 'MIT', avatar: '//design.yonyoucloud.com/static/tinper-bee/images/xiaoming.png',
                 province:'henan',city:'shangqiu',county:'suiyangqu',country:'chengguanzhen',
                 phone:'138xxxxxxxx',email:'xiaoming@168.com',bio:'xiaoming@weibo.com',weixin:'xiaoming'},
                {id:2, name: 'XiaoZhang',hometown:'hebei', age:25, school: 'MIT', avatar: '//design.yonyoucloud.com/static/tinper-bee/images/xiaozhang.png',
                 province:'beijing',city:'beijing',county:'changping',country:'huilongguan',
                 phone:'139xxxxxxxx',email:'xiaozhang@168.com',bio:'xiaozhang@weibo.com',weixin:'xiaozhang'}
            ],
            curItem: {}
        };
        this.fPopDrawer = this.fPopDrawer.bind(this);
        this.fCloseDrawer = this.fCloseDrawer.bind(this);
        this.fItemClick = this.fItemClick.bind(this);
    }
    fItemClick(ev,item){
        this.setState({
            curItem: item,
            showDrawer: true,
            title: item.name + '\'s Profile' 
        })
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
        let {list,title,placement,showDrawer,curItem} = this.state;

        return (
            <div className="demoPadding demo5">
                <ul className="infos">
                    {
                        list.map(item => {
                            return  (<li key={item.id} className="info-item">
                                        <div className="item-inner">
                                            <div className="item-left">
                                                <img className="item-avatar" src={item.avatar} />
                                            </div>
                                            <div className="item-main">
                                                <div>{item.name}</div>
                                                <div>{item.email}</div>
                                                <div>{item.hometown}</div>
                                            </div>
                                            <div className="item-right">
                                                <a className="item-link" onClick={(ev) => this.fItemClick(ev,item)} href="javascript:;">View</a>
                                            </div>
                                        </div>
                                    </li>)
                        })
                    }
                </ul>
                <Drawer className={'demo5'} width={500} title={title} show={showDrawer} placement={placement} onClose={this.fCloseDrawer}>
                    <div className="con">
                        <div className="section">
                            <div className="sec-title">Avatar</div>
                            <div className="sec-body">
                                <div className="row">
                                    <img className="sec-avatar" src={curItem.avatar} />
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="sec-title">Profile</div>
                            <div className="sec-body">
                                <div className="row">
                                    <div className="col">
                                        <span>Name: </span>
                                        <span>{curItem.name}</span>
                                    </div>
                                    <div className="col">
                                        <span>hometown: </span>
                                        <span>{curItem.hometown}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span>Age: </span>
                                        <span>{curItem.age}</span>
                                    </div>
                                    <div className="col">
                                        <span>School: </span>
                                        <span>{curItem.school}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="sec-title">Address</div>
                            <div className="sec-body">
                                <div className="row">
                                    <div className="col">
                                        <span>Province: </span>
                                        <span>{curItem.province}</span>
                                    </div>
                                    <div className="col">
                                        <span>City: </span>
                                        <span>{curItem.city}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span>County: </span>
                                        <span>{curItem.county}</span>
                                    </div>
                                    <div className="col">
                                        <span>Country: </span>
                                        <span>{curItem.country}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="sec-title">Contract</div>
                            <div className="sec-body">
                                <div className="row">
                                    <div className="col">
                                        <span>Phone: </span>
                                        <span>{curItem.phone}</span>
                                    </div>
                                    <div className="col">
                                        <span>Email: </span>
                                        <span>{curItem.email}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <span>Bio: </span>
                                        <span>{curItem.bio}</span>
                                    </div>
                                    <div className="col">
                                        <span>Weixin: </span>
                                        <span>{curItem.weixin}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    }
}

export default Demo5;
