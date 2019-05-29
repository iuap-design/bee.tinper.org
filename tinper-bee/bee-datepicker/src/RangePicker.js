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

const cn = location.search.indexOf("cn") !== -1;

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
        open:false,
    };
  }
    componentWillReceiveProps(nextProps){
        if ("value" in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
        this.setState({
            renderIcon: nextProps.renderIcon
        });
    }

    onChange = (value) => {
        const props = this.props;
        let formatStr = props.format || 'YYYY-MM-DD';
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
        e.stopPropagation();
        this.setState({
            value: ''
        })
        this.props.onChange && this.props.onChange('', '');
    }
    onOpenChange=(open)=>{
        this.setState({
            open
        },()=>{
            setTimeout(() => {
                if(open)this.inputFocus()
            }, 0);
        })
    }
    inputFocus=()=>{
        let inputs = document.querySelectorAll('.rc-calendar-input');
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
        }
        if(e.keyCode == KeyCode.LEFT||e.keyCode == KeyCode.RIGHT){
            inputs[0].focus()
        }
    }
    render() {
    const props = this.props;
    const { showClose } = props;
    const {value} = this.state;
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
        />
    );

      return (
          <Picker
              value = {this.state.value}
              animation={'animation' in props ? props.animation : "slide-up"}
              calendar={calendar}
              disabled={props.disabled}
              dropdownClassName={props.dropdownClassName}
              onOpenChange={this.onOpenChange}
              open={this.state.open}
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
                        />
                        {
                            showClose&&(this.state.value.length>0)&&this.state.showClose&&(!props.disabled)?(
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
          </Picker>);
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
