/**
 * Created by chief on 17/4/6.
 */

import Calendar from "./rc-calendar";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { KeyCode } from 'tinper-bee-core';
import Picker from "./rc-calendar/Picker";
import FormControl from "bee-form-control";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import moment from "moment";
import Icon from "bee-icon";
import classnames from 'classnames';
import InputGroup from 'bee-input-group';
import zhCN from "./locale/zh_CN";

const timePickerElement = (
  <TimePickerPanel defaultValue={moment(moment().format("HH:mm:ss"), "HH:mm:ss")} />
);

let timerDatePicker = true;


class DatePicker extends Component {
  constructor(props, context) {
    super(props, context);
    let value = props.value && moment(props.value),
        defaultValue = props.defaultValue && moment(props.defaultValue);
    this.state = {
      type: "month",
      value: value || defaultValue || moment.Moment,
      open: props.open||false,
      inputValue:(props.value&&this.getValue(props.value)) || (props.defaultValue&&this.getValue(props.defaultValue)) || '',
      showClose:false
    };

  }
  
  getValue = value =>{
    let { format } = this.props;
    if(typeof format == 'string'){
      return value.format(format)
    }else{
      return value.format(format[0])
    }
  }

  onChange = value => {
    const props = this.props;

    this.setState({ value:value });
  };

  inputFocus=()=>{
    const { format } = this.props;
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
          this.props.onChange('','');
        }else if(e.keyCode == KeyCode.ESC){
          this.setState({
            open:false
          });
          let v = this.state.value;
          this.props.onOpenChange(false,v, (v && this.getValue(v)) || '');
          ReactDOM.findDOMNode(this.outInput).focus();// 按esc时候焦点回到input输入框
        }else if(e.keyCode == KeyCode.ENTER){
          let parsed = moment(input.value, format, true);
          if(parsed.isValid()){
            this.setState({
              open:false
            });
            let v = this.state.value;
            this.props.onOpenChange(false,v, (v && this.getValue(v)) || '');
            ReactDOM.findDOMNode(this.outInput).focus();
          }
        }
        this.props.onKeyDown&&this.props.onKeyDown(e);
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
      props.onOpenChange(open,value, (value && this.getValue(value)) || '');
      if(open){
        setTimeout(()=>{
          self.inputFocus()
        },200);
      }
  };
  componentWillReceiveProps(nextProps) {
    if ("value" in nextProps) {
      this.setState({
        value: nextProps.value && moment(nextProps.value)
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
  handleCalendarChange = (value) => {
      const props = this.props;
      this.setState({ value: value,inputValue:(value && this.getValue(value)) || '' });
      //props.onChange(value, (value && this.getValue(value)) || '');
  }
  handleChange = value => {
    const props = this.props;
    this.setState({ 
      value: value && Object.assign(value, {_type:'date'}) || value,
      inputValue:(value && this.getValue(value)) || '' 
    });
    if(timerDatePicker){
      clearTimeout(this.timerout);
      props.onChange(value, (value && this.getValue(value)) || '');
      timerDatePicker=false;
      this.timerout = window.setTimeout(()=>{
        timerDatePicker=true
      },300)
    }
  }
  onClick = (e) =>{
    const props = this.props;
    if(props.keyboardInput)e.stopPropagation();
    let value = this.state.value;
    if(props.keyboardInput){
      props.onClick&&props.onClick(e.nativeEvent,value||null,this.state.inputValue);
    }else{
      props.onClick&&props.onClick(e.nativeEvent,value||null,(value && this.getValue(value)) || '');
    }
  }
  inputChange = (value,e) => {
    if(this.props.keyboardInput)e.stopPropagation();
    this.setState({
      inputValue:value
    });
    if(moment(value,this.props.format).isValid()){
      this.setState({
        value:moment(value,this.props.format)
      });
      value = moment(value,this.props.format);
      this.props.onChange(value, (value && this.getValue(value)) || '');
    }else{
      this.props.onChange(null,value);
    }
  }
  outInputFocus = (e)=>{
    if(this.props.hasOwnProperty('open'))e.stopPropagation();
    this.props.outInputFocus&&this.props.outInputFocus(e);
  }
  iconClick=(e)=>{
    this.props.iconClick&&this.props.iconClick(e);
  }
  outInputKeydown=(e)=>{
    if(e.keyCode == KeyCode.DELETE){
      this.setState({
        inputValue:''
      });
      this.props.onChange('','');
    }else if(e.keyCode == KeyCode.ESC){
      this.setState({
        open:false
      });
      let value = this.state.inputValue;
      if(moment(value,this.props.format).isValid()){
        this.setState({
          value:moment(value,this.props.format)
        });
        value = moment(value,this.props.format);
        this.props.onChange(value, (value && this.getValue(value)) || '');
      }else{
        this.props.onChange(null,value);
      }
    }
    this.props.outInputKeydown&&this.props.outInputKeydown(e);
  }
  onMouseLeave=(e)=>{
    this.setState({
      showClose:false
    })
  }
  onMouseEnter=(e)=>{
    this.setState({
      showClose:true
    })
  }
  clear=(e)=>{
    e.stopPropagation();
    this.setState({
      inputValue:'',
      value:''
    })
    this.props.onChange&&this.props.onChange('','');
  }
  handleSelect=(value)=>{
    this.setState({
      value:value
    })
    this.props.onSelect&&this.props.onSelect(value, (value && this.getValue(value)) || '');
    // ReactDOM.findDOMNode(this.outInput).focus()
  }
  //日期面板中输入框的失焦事件
  onDateInputBlur = (e) => {
    let input = document.querySelector('.rc-calendar-input');
    let value;
    if(input) {
      value = input.value ? input.value : '';
    }
    this.props.onDateInputBlur && this.props.onDateInputBlur(e,value);
  }
  //fix:更改系统时区后，日期框需要触发 onChange 事件
  onDateHover = ()=>{
    let {format} = this.props;
    let {value} = this.state,
        newValue = value && this.getValue(value);
      
    let inputValue = this.outInput.state.value;
    inputValue = format ? inputValue : ( inputValue && this.getValue(moment(inputValue)) );
    
    if(newValue && inputValue !== newValue) {
      this.props.onChange && this.props.onChange(value, newValue || '')
    }
  }
  //阻止组件内部事件冒泡到组件外部容器
  stopPropagation = (e) => {
    e.stopPropagation();
  }
  render() {
    let state = this.state;
    let props = this.props;
    const { showClose,defaultPanelShown } = props;
    let value = state.value;
    let pickerChangeHandler = {};
    let calendarHandler = {};
    const autofocus = this.props.autofocus?{autofocus:'autofocus'}:null;

    if (props.showTime) {
      calendarHandler = {
        // fix https://github.com/ant-design/ant-design/issues/1902
        onSelect: this.handleChange
      };
    } else {
      pickerChangeHandler = {
        onChange: this.handleChange
      };
    }

    const calendar = (
      <Calendar
        timePicker={props.showTime ? timePickerElement : null}
        {...props}
        onSelect={this.handleSelect}
        onChange={this.handleCalendarChange}
        value={this.state.value}
        onInputBlur={this.onDateInputBlur}
      />
    );

    let keyboardInputProps = {};
    if(props.keyboardInput){
      keyboardInputProps.readOnly=false;
      keyboardInputProps.onChange=this.inputChange;
      keyboardInputProps.value=state.inputValue;
    }else{
      keyboardInputProps.readOnly=true;
      keyboardInputProps.value=(value && this.getValue(value)) || ""
    }
    let classes = classnames(props.className, "datepicker-container");
    return (
      <div className={classes} onMouseEnter={this.onDateHover} onClick={this.stopPropagation} onMouseOver={this.stopPropagation}>
        <Picker
          animation="slide-up"
          {...props}
          {...pickerChangeHandler}
          onOpenChange={this.onOpenChange}
          calendar={calendar}
          mode = {'year'}
          open={'defaultPanelShown' in props ? defaultPanelShown : this.state.open}
          value={state.value}
        >
          {() => {
            return (
              <InputGroup simple className="datepicker-input-group" 
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
              >
                  <FormControl
                    ref = { ref => this.outInput = ref }
                    disabled={props.disabled}
                    placeholder={this.props.placeholder}
                    onClick={ (event) => {this.onClick(event)}}
                    focusSelect={props.defaultSelected}
                    onFocus={(v,e)=>{this.outInputFocus(e)}}
                    onKeyDown={this.outInputKeydown}
                    {...keyboardInputProps}
                    {...autofocus}
                  />
                  {
                    showClose&&this.state.value&&this.state.showClose&&(!props.disabled)?(
                      <InputGroup.Button shape="border" 
                        onClick={this.clear}>
                        { props.closeIcon() }
                      </InputGroup.Button>
                    ):<InputGroup.Button shape="border" 
                       onClick={(e)=>{props.keyboardInput?this.iconClick(e):''}}>
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

DatePicker.defaultProps = {
  closeIcon:()=><Icon type="uf-close-c"/>,
  renderIcon: () => <Icon type="uf-calendar" />,
  focusOnOpen:true,
  defultSelect:false,
  onOpenChange:()=>{},
  onChange:()=>{},
  locale:zhCN,
  showMonthInput:false,
  onKeyDown:()=>{},
  renderError:()=>{},
  showClose:true
}

export default DatePicker;
