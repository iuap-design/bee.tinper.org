/**
 * Created by chief on 17/4/6.
 */

import YearPanel from "./rc-calendar/year/YearPanel";
import { KeyCode } from 'tinper-bee-core';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Picker from "./rc-calendar/Picker";
import FormControl from "bee-form-control";
import InputGroup from 'bee-input-group';
import Icon from "bee-icon";
import classnames from 'classnames';
import moment from "moment";
import omit from 'omit.js';

//去掉focus报错
Picker.prototype.componentDidUpdate = ()=>{}

class YearPicker extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            type: "year",
            value: props.value || props.defaultValue || '' ,
            open: props.open||false,
            showClose: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if ("value" in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
        if ("open" in nextProps) {
            this.setState({
              open: nextProps.open 
            });
          }
          if ("renderIcon" in nextProps) {
            this.setState({
              renderIcon: nextProps.renderIcon
            });
          }

    }

    onChange = value => {
        this.setState({
            value
        });
    };

    inputFocus=()=>{
        const self = this;
        let input = document.querySelector('.rc-calendar-input');
        if(input){
          if(input.value){
            input.select()
          }else{
            input.focus()
          }
          input.onkeydown=(e)=>{
            if(e.keyCode == KeyCode.DELETE){
              input.value = '';
              self.props.onChange&&self.props.onChange('','');
            }else if(e.keyCode == KeyCode.ESC){
                self.setState({
                    open:false
                });
              let v = self.state.value;
              self.props.onOpenChange&&self.props.onOpenChange(false,v, (v && v.format(self.props.format)) || '');
              ReactDOM.findDOMNode(self.outInput).focus();// 按esc时候焦点回到input输入框
            }
          }
        }
      }
    onOpenChange = open => {
        const self = this;
        this.setState({
            open
        });
        if(open){
            setTimeout(()=>{
                self.inputFocus()
            },200)
        }
    };

    handleChange = value => {
        const props = this.props;
        this.setState({ 
            value: value && Object.assign(value, {_type:'year'}) || value
        });
        props.onChange&&props.onChange(value, (value && value.format(props.format)) || '');
    }
    onMouseLeave = (e) => {
        this.setState({
            showClose: false
        })
    }
    onMouseEnter = (e) => {
        this.setState({
            showClose: true
        })
    }
    clear = (e) => {
        e.stopPropagation();
        this.setState({
            value: ''
        })
        this.props.onChange && this.props.onChange('', '');
    }

    onSelect=(value)=>{
        let { onSelect,format } = this.props;
        this.setState({
            open:false
        });
        onSelect&&onSelect(value,value?value.format(format):'');
        ReactDOM.findDOMNode(this.outInput).focus();
    }

    //阻止组件内部事件冒泡到组件外部容器
    stopPropagation = (e) => {
        e.stopPropagation();
    }

    render() {
        let state = this.state;
        let props = this.props;
        const { showClose, ...others } = props;
        let value = state.value;

        const Calendar = <YearPanel 
        prefixCls={'rc-calendar-picker'} 
        rootPrefixCls={'rc-calendar'}  
        {...props} focus={()=>{}} 
        onSelect={this.onSelect}
        showDateInput={true}
        />;
        let classes = classnames(props.className, "datepicker-container");
        return (
            <div className={classes} onClick={this.stopPropagation} onMouseOver={this.stopPropagation} 
            {...omit(others, [
                'closeIcon',
                'renderIcon',
                'disabled',
                'format',
                'locale',
                'placeholder'
            ])}
            >
                <Picker
                    animation="slide-up"
                    {...props}
                    onOpenChange={this.onOpenChange}
                    onChange={this.handleChange}
                    calendar={Calendar}
                    prefixCls={'rc-calendar'}
                    value={state.value||moment()}
                    open={this.state.open}
                >
                    {({  }) => {
                        return (
                            <InputGroup simple className="datepicker-input-group" 
                                onMouseEnter={this.onMouseEnter}
                                onMouseLeave={this.onMouseLeave}
                            >
                                <FormControl
                                ref = { ref => this.outInput = ref }
                                    placeholder={this.props.placeholder}
                                    className={this.props.className}
                                    disabled={props.disabled}
                                    readOnly
                                    value={(value && value.format(props.format)) || ""}
                                />
                               {
                                    showClose&&this.state.value&&this.state.showClose&&(!props.disabled)?(
                                    <InputGroup.Button shape="border" 
                                        onClick={this.clear}>
                                        { props.closeIcon() }
                                    </InputGroup.Button>
                                    ):<InputGroup.Button shape="border">
                                        { props.renderIcon() }
                                    </InputGroup.Button>
                                }
                            </InputGroup>
                        );
                    }}
                </Picker>
            </div>
        );
    }
}


YearPicker.defaultProps = {
    closeIcon:()=><Icon type="uf-close-c"/>,
    renderIcon: () => <Icon type="uf-calendar" />,
    disabled:false,
    showClose:true,
    format:'YYYY',
}

export default YearPicker;
