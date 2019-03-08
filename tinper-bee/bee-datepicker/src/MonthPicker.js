/**
 * Created by chief on 17/4/6.
 */

import MonthCalendar from "./rc-calendar/MonthCalendar";
import React, { Component } from "react";
import Picker from "./rc-calendar/Picker";
import FormControl from "bee-form-control";
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';
import zhCN from "./locale/zh_CN";

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
    this.setState({
      value
    });
    let { onChange,onClear,onSelect,format } = this.props;
    onChange&&onChange(value,value?value.format(format):'');
  };

  onOpenChange = open => {
    this.setState({
      open
    });
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
    return (
      <div>
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
