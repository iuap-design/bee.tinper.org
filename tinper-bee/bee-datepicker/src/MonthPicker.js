/**
 * Created by chief on 17/4/6.
 */

import MonthCalendar from "./rc-calendar/MonthCalendar";
import { KeyCode } from 'tinper-bee-core';
import React, { Component } from "react";
import Picker from "./rc-calendar/Picker";
import FormControl from "bee-form-control";
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';
import classnames from 'classnames';
import zhCN from "./locale/zh_CN";
import moment from "moment";

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
      value:value
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
  render() {
    let state = this.state;

    let props = this.props;

    const monthCalendar = <MonthCalendar {...props}
      onChange={this.onChange}
    />;
    let classes = classnames(props.className, "datepicker-container");
    return (
      <div className={classes}>
        <Picker
          onOpenChange={this.onOpenChange}
          animation={'animation' in props ? props.animation : "slide-up"}
          calendar={monthCalendar}
          open={this.state.open}
          value={state.value}
          onChange={this.onChange}
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
                      this.state.value&&this.state.showClose&&(!props.disabled)?(
                      <InputGroup.Button shape="border" 
                          onClick={this.clear}>
                          <i className="uf uf-close-c"></i>
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
    renderIcon: () => <Icon type="uf-calendar" />,
    format:'YYYY-MM',
    showDateInput:true,
    showMonthInput:true,
    locale:zhCN
}

export default MonthPicker;
