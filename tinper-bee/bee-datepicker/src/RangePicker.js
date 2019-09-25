/**
 * Created by chief on 17/4/6.
 */
import React, { Component } from "react";
import RangeCalendar from "./rc-calendar/RangeCalendar";
import TimePickerPanel from "rc-time-picker/lib/Panel";
import FormControl from "bee-form-control";
import Picker from "./rc-calendar/Picker";
import InputGroup from 'bee-input-group';
import Icon from "bee-icon";
import classNames from 'classnames';
import { KeyCode } from 'tinper-bee-core';
import { formatDate } from './rc-calendar/util';
import zhCN from "./locale/zh_CN";
import omit from 'omit.js';

import moment from "moment";
import "moment/locale/zh-cn";

// function formatDate(value,format) {
//     if (!value) {
//         return '';
//       }
    
//       if (Array.isArray(format)) {
//         format = format[0];
//       }
    
//       return value.formatDate(format);
// }

const fullFormat = "YYYY-MM-DD";

const cn = typeof window !== 'undefined' ? location.search.indexOf("cn") !== -1 : true;

const now = moment();



function isValidRange(v) {
    return v && v[0] && v[1];
}

if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

const timePickerElement = (
    <TimePickerPanel defaultValue={moment(moment().format("HH:mm:ss"), "HH:mm:ss")} />
  );
  

class RangePicker extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hoverValue: [],
            value: props.value || props.defaultValue || [],
            open: props.open||false
        };
    }
    componentWillReceiveProps(nextProps){
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
        this.setState({
            renderIcon: nextProps.renderIcon
        });
    }

    clearHoverValue = () => this.setState({ hoverValue: [] });

    onChange = (value) => {
        const props = this.props;
        let formatStr = props.format || 'YYYY-MM-DD';
        if(value.length < 2){ return }
        this.setState({
            value:value
        });

        //传入value和dateString
        if(props.onChange&&isValidRange(value)||value.length==0){
            if(value.length>0){
                props.onChange(value,`["${formatDate(value[0],formatStr)}" , "${formatDate(value[1],formatStr)}"]`);
            }
            else {
                props.onChange(null)
            }

        }else{
            props.onPanelChange&&props.onPanelChange(value);
        }
    }

    onHoverChange = (hoverValue) => {
        this.setState({ hoverValue });
        this.props.onHoverChange&&this.props.onHoverChange(hoverValue)
    }

    remove = (e) => {
        this.setState({ value:''});
    }
    handleCalendarChange = (value) => {

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
        e&&e.stopPropagation&&e.stopPropagation();
        this.setState({
            value: []
        })
        this.props.onChange && this.props.onChange([], []);
        this.props.onFormControlClear&&this.props.onFormControlClear();
    }
    onOpenChange = open => {
        const props = this.props;
        const self = this;
        // let {value} = this.state;
        // if(!isValidRange(value)){
        //     debugger
        // }
        if (open === false) {
            this.clearHoverValue();
        }
        
        this.setState({
          open
        },function(){
          if(open){
            setTimeout(() => {
              self.inputFocus()
            }, 0);
          }
        }); 
        props.onOpenChange && props.onOpenChange(open);
        if(open){
            setTimeout(()=>{
              self.inputFocus()
            },200);
        }
    };

    outInputFocus = (e)=>{
        if(this.props.hasOwnProperty('open'))e.stopPropagation();
        this.props.outInputFocus&&this.props.outInputFocus(e);
    }

    inputFocus=()=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        if(!inputs){ return }
        if(inputs[0].value){
            inputs[0].select()
        }else{
            inputs[0].focus()
        }
        inputs[0].onkeydown=this.keydownLeft;
        inputs[1].onkeydown=this.keydownRight;
    }

    keydownLeft=(e)=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        if(e.keyCode == KeyCode.ESC){
            this.setState({
                open:false
            });
            this.props.onOpenChange(false,v, (v && this.getValue(v)) || '');
        }
        if(e.keyCode == KeyCode.RIGHT||e.keyCode == KeyCode.LEFT){
            inputs[1].focus()
        }
    }
    keydownRight=(e)=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        if(e.keyCode == KeyCode.ESC){
            this.setState({
                open:false
            });
            this.props.onOpenChange(false,v, (v && this.getValue(v)) || '');
        }
        if(e.keyCode == KeyCode.LEFT||e.keyCode == KeyCode.RIGHT){
            inputs[0].focus()
        }
    }
    //日期面板中输入框的失焦事件
    onStartInputBlur=(e)=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        let startValue,endValue;
        if(inputs) {
            startValue = inputs[0].value ? inputs[0].value : '';
            endValue = inputs[1].value ? inputs[1].value : '';
        }
        this.props.onStartInputBlur && this.props.onStartInputBlur(e, startValue, `["${startValue}" , "${endValue}"]`);
    }
    onEndInputBlur=(e)=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
        let startValue,endValue;
        if(inputs) {
            startValue = inputs[0].value ? inputs[0].value : '';
            endValue = inputs[1].value ? inputs[1].value : '';
        }
        this.props.onEndInputBlur && this.props.onEndInputBlur(e, endValue, `["${startValue}" , "${endValue}"]`);
    }
    //阻止组件内部事件冒泡到组件外部容器
    stopPropagation = (e) => {
        e.stopPropagation();
    }
    onOk = (value) => {
        this.props.onOk && this.props.onOk(value);
    }
    render() {
    const props = this.props;
    const { showClose , ...others } = props;
    const {value,open} = this.state;
    let formatStr = props.format || 'YYYY-MM-DD';

    const calendar = (
        <RangeCalendar
            hoverValue={this.state.hoverValue}
            onHoverChange={this.onHoverChange}
            showWeekNumber={false}
            format={formatStr}
            dateInputPlaceholder={props.dateInputPlaceholder||['start', 'end']}
            locale={props.locale || zhCN }
            onChange={this.onChange}
            disabledDate={props.disabledDate}
            showClear={ props.showClear }
            showOk={props.showOk}
            showToday={props.showToday}
            renderFooter={props.renderFooter}
            timePicker={props.showTime ? timePickerElement : null}
            renderError={props.renderError}
            onStartInputBlur={this.onStartInputBlur}
            onEndInputBlur={this.onEndInputBlur}
            onClear={this.clear}
            onOk={this.onOk}
        />
    );

      return (
          <div onClick={this.stopPropagation} onMouseOver={this.stopPropagation} 
          {...omit(others, [
            'closeIcon',
            'renderIcon',
            'showClear',
            'showToday',
            'locale',
            'placeholder',
            'showOk',
            'dateInputPlaceholder',
            'onPanelChange',
            'onStartInputBlur',
            'onEndInputBlur',
            'renderFooter',
            'showTime'
          ])}
          >
          <Picker
              value = {value}
              animation={'animation' in props ? props.animation : "slide-up"}
              calendar={calendar}
              disabled={props.disabled}
              dropdownClassName={props.dropdownClassName}
              onOpenChange={this.onOpenChange}
              open={open}
          >
              {
                  ({}) => {
                      return (
                    <div className={classNames('calendar-picker','u-input-group','simple',props.className)}
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                    >
                        <FormControl
                            placeholder={this.props.placeholder?this.props.placeholder:'start ~ end'}
                            value={isValidRange(value) && `${formatDate(value[0],formatStr)} ~ ${formatDate(value[1],formatStr)}` || ''}
                            disabled={props.disabled}
                            onFocus={(v,e)=>{this.outInputFocus(e)}}
                        />
                        {
                            showClose&&(this.state.value&&this.state.value.length>0)&&this.state.showClose&&(!props.disabled)?(
                            <InputGroup.Button shape="border" 
                                onClick={this.clear}>
                                { props.closeIcon() }
                            </InputGroup.Button>
                            ):<InputGroup.Button shape="border">
                                { props.renderIcon() }
                            </InputGroup.Button>
                        }
                    </div>
                );
                  }
              }
          </Picker>
        </div>);
  }
}

RangePicker.defaultProps = {
    closeIcon:()=><Icon type="uf-close-c"/>,
    renderIcon: () => <Icon type="uf-calendar" />,
    locale:zhCN,
    showClear:true,
    showToday:true,
    showOk:true,
    showClose:true
}

export default RangePicker;
