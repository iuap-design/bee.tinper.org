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
import moment from "moment";
import { formatDate } from './rc-calendar/util';

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

  componentDidMount(){
    let value = this.props.value || this.props.defaultValue;
    if(value){
      if(typeof value == 'string'){
        if(moment(value).isValid()){
          value = moment(value);
        }else{
          console.error('value is not in the correct format');
          value = ''
        }
      }else if(value.format&&value.isValid()){
        value = value;
      }else{
        console.error('value is not in the correct format');
        value = ''
      }
    }
    this.setState({
      value
    })
  }

  componentWillReceiveProps(nextProps){
    if('value' in nextProps){
        let value = nextProps.value;
        if(value){
            if(value.format&&value.isValid()){
                
            }else{
                value = moment(value)
            }
        }else{
            value='';
        }
        this.setState({
            value
        })
    }
}
  handleCalendarChange = (value) => {
    this.setState({
      value: value && Object.assign(value, {_type:'month'}) || value
    });
  }
  onChange = (value) => {
    let { onChange,onClear,onSelect,format } = this.props;

    this.setState({
      value: value && Object.assign(value, {_type:'month'}) || value
    });
    onChange&&onChange(value,value?formatDate(value,format):'');
  };
  inputFocus=()=>{
    const self = this;
    const { format } = self.props;
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
          self.props.onOpenChange&&self.props.onOpenChange(false,v, (v && formatDate(v,self.props.format)) || '');
          ReactDOM.findDOMNode(self.outInput).focus();// 按esc时候焦点回到input输入框
        }else if(e.keyCode == KeyCode.ENTER){
          let parsed = moment(input.value, format, true);
          if(parsed.isValid()){
              self.setState({
                open:false
              });
              let v = self.state.value;
              self.props.onOpenChange&&self.props.onOpenChange(false,v, (v && formatDate(v,format)) || '');
              ReactDOM.findDOMNode(self.outInput).focus();
          }
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
    props.onOpenChange && props.onOpenChange(open,value, (value && formatDate(value,self.props.format)) || '');
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

  render() {
    let state = this.state;
    let props = this.props;
    const { showClose,value, ...others } = props;
    const monthCalendar = <MonthCalendar {...props}
      value = {state.value}
      onChange={this.handleCalendarChange} 
    />;
    let classes = classnames(props.className, "datepicker-container");
    return (
      <div className={classes}
      {...omit(others, [
        'closeIcon',
        'renderIcon',
        'format',
        'showDateInput',
        'showMonthInput',
        'locale',
        'placeholder',
        'onClear',
        'renderFooter',
        'renderError',
        'disabledDate',
        'disabledTime',
      ])}
      >
        <Picker
          {...props}
          onOpenChange={this.onOpenChange}
          animation={'animation' in props ? props.animation : "slide-up"}
          calendar={monthCalendar}
          open={this.state.open}
          value={state.value}
          onChange={this.onChange} 
          dropdownClassName={props.dropdownClassName}
          selectedValue={state.value}
          renderError={props.renderError}
        >
          {({ value }) => {
            if(value&&value.format)value=formatDate(value,props.format);
            return (
                <InputGroup simple className="datepicker-input-group"
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  <FormControl
                    ref = { ref => this.outInput = ref }
                    placeholder={this.props.placeholder}
                    className={this.props.className}
                    value={value}
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
    renderError:()=>{},
    showDateInput:true,
    showMonthInput:true,
    locale:zhCN,
    showClose:true,
    validatorFunc:()=>{
      return true;
    }
}

export default MonthPicker;
