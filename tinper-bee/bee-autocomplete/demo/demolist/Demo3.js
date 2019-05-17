/**
 *
 * @title 受控的`AutoComplete`
 * @description `show`参数控制下拉框展开收起，`disabled`参数设置是否禁用
 *
 */
import React, { Component } from "react";
import Button from 'bee-button';
import AutoComplete from "../../src";

class Demo3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            options: ["10000", "10001", "10002", "11000", "12010"],
            placeholder: "查找关键字,请输入1",
            open: true,
            disabled: false
        };
    }

    handleChange = value => {
        this.setState({
            value: value,
        });
    };

    changeOpen = () => {
        this.setState({
            open: !this.state.open,
        });
    }

    changeDisabled = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    render() {
        let { value, options, placeholder, open, disabled } = this.state;
        return (
        <div className="demo" style={{ marginBottom: "110px" }}>
            <div style={{marginBottom:16 + 'px'}}>
                <Button onClick={this.changeOpen} style={{marginRight:16 + 'px'}}>{open ? '隐藏面板' : '显示面板'}</Button>
                <Button onClick={this.changeDisabled}>{disabled ? '启用' : '禁用'}</Button>
            </div>
            <AutoComplete
            show={open}
            disabled={disabled}
            value={value}
            options={options}
            placeholder={placeholder}
            onChange={value => this.handleChange(value)}
            />
        </div>
        );
    }
}

export default Demo3;
