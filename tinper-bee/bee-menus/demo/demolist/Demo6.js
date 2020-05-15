/**
 * @title 基础下拉菜单
 * @description 如何获取选中对象自定义对象和数据
 *
 */
import React, { Component } from 'react';
import Menu from '../../src';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Demo6 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            current: 1
        }
    }

    handleClick = (e) => {

        this.setState({
            current: e.key,
        });
    }
    
    /**
     * 获取当前选中行的item对象。
     * @param {*} value 
     */
    onSelect({item,key,selectedKeys}){ 
        console.log(`${key} selected`); //获取key
        let currentObject = {};
        currentObject.value = item.props.children; //获取选中对象的数据
        currentObject.key = item.props.eventKey;
        console.log(currentObject); 
    }

    render() {
        return (
            <Menu theme="dark" onClick={this.handleClick} style={{ width: 240 }} defaultOpenKeys={['demo3sub1']} selectedKeys={[this.state.current]} mode="inline" onSelect={this.onSelect.bind(this)}>
                <SubMenu key="demo3sub1" title={<span><span>组织 1</span></span>}>
                    <MenuItemGroup title="组 1">
                        <Menu.Item key="1">选项 1</Menu.Item>
                        <Menu.Item key="2">选项 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="组 2">
                        <Menu.Item key="3">选项 3</Menu.Item>
                        <Menu.Item key="4">选项 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu key="demo3sub2" title={<span><span>组织 2</span></span>}>
                    <Menu.Item key="5">选项 5</Menu.Item>
                    <Menu.Item key="6">选项 6</Menu.Item>
                    <SubMenu key="demo3sub3" title="子项">
                        <Menu.Item key="7">选项 7</Menu.Item>
                        <Menu.Item key="8">选项 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="demo3sub4" title={<span><span>组织 3</span></span>}>
                    <Menu.Item key="9">选项 9</Menu.Item>
                    <Menu.Item key="10">选项 10</Menu.Item>
                    <Menu.Item key="11">选项 11</Menu.Item>
                    <Menu.Item key="12">选项 12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default Demo6;