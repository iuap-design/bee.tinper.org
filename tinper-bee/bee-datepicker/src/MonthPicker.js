/**
 * Created by chief on 17/4/6.
 */

import MonthCalendar from "./rc-calendar/MonthCalendar";
import { KeyCode } from 'tinper-bee-core';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Picker from "./rc-calendar/Picker";
import FormControl from "bee-form-control";
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';
import classnames from 'classnames';
import zhCN from "./locale/zh_CN";
import omit from 'omit.js';

class MonthPicker extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      type: "month",
      value: props.value || props.defaultValue,
      open: false,
      showClose: false
    };
  }

  onChange = (value) => {
    let { onChange,onClear,onSelect,format } = this.props;
    // if(value){
    //   this.setState({
    //     value:value
    //   });
    // }else{
    //   this.setState({
    //     value:moment()
    //   })
    // }
    this.setState({
      value: value && Object.assign(value, {_type:'month'}) || value
    });
    onChange&&onChange(value,value?value.format(format):'');
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
    const props = this.props;
    const self = this;
    this.setState({
      open
    },function(){
      if(open){
        setTimeout(() => {
          self.inputFocus()
        }, 0);
      }
    }); 
    const value = self.state.value;
    props.onOpenChange && props.onOpenChange(open,value, (value && value.format(self.props.format)) || '');
    if(open){
      setTimeout(()=>{
        self.inputFocus()
      },200);
    }
  };

  onTypeChange = type => {
    this.setState({
      type
    });
  };
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
  //阻止组件内部事件冒泡到组件外部容器
  stopPropagation = (e) => {
    e.stopPropagation();
  }
  render() {
    let state = this.state;

    let props = this.props;
    const { showClose, ...others } = props;
    const monthCalendar = <MonthCalendar {...props}
      onChange={this.onChange} 
    />;
    let classes = classnames(props.className, "datepicker-container");
    return (
      <div className={classes} onClick={this.stopPropagation} onMouseOver={this.stopPropagation} 
      {...omit(others, [
        'closeIcon',
        'renderIcon',
        'format',
        'showDateInput',
        'showMonthInput',
        'locale',
        'placeholder',
        'onClear',
        'renderFooter'
      ])}
      >
        <Picker
          onOpenChange={this.onOpenChange}
          animation={'animation' in props ? props.animation : "slide-up"}
          calendar={monthCalendar}
          open={this.state.open}
          value={state.value}
          onChange={this.onChange} 
          dropdownClassName={props.dropdownClassName}
        >
          {({ value }) => {
            return (
                <InputGroup simple className="datepicker-input-group"
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  <FormControl
                    ref = { ref => this.outInput = ref }
                    placeholder={this.props.placeholder}
                    className={this.props.className}
                    value={(value && value.format(props.format)) || ""}
                    disabled={props.disabled}
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


MonthPicker.defaultProps = {
    closeIcon:()=><Icon type="uf-close-c"/>,
    renderIcon: () => <Icon type="uf-calendar" />,
    format:'YYYY-MM',
    showDateInput:true,
    showMonthInput:true,
    locale:zhCN,
    showClose:true
}

export default MonthPicker;
