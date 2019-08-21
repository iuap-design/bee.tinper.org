/**
 * Created by chief on 17/4/6.
 */

import Calendar from "./rc-calendar";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Picker from "./rc-calendar/Picker";
import FormControl from "bee-form-control";
import zhCN from "./locale/zh_CN";
import enUS from "./locale/en_US";
import Icon from "bee-icon";
import InputGroup from 'bee-input-group';
import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";

const cn = location.search.indexOf("cn") !== -1;

const now = moment();
if (cn) {
  now.locale("zh-cn").utcOffset(8);
} else {
  now.locale("en-gb").utcOffset(0);
}

const format = "YYYY-Wo";

const style = `
.week-calendar .rc-calendar-tbody > tr:hover
.rc-calendar-date {
  background: #ebfaff;
}

.week-calendar .rc-calendar-tbody > tr:hover
.rc-calendar-selected-day .rc-calendar-date {
    background: #3fc7fa;
}
.week-calendar .week-calendar-footer {
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  width:100%;
  border-right: 1px solid #ccc;
}
`;

class WeekPicker extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value || props.defaultValue,
      open: false,
      showClose: false
    };
  }

  onChange = value => {
    this.setState({
      value
    });
  };

  onOpenChange = open => {
    this.setState({
      open
    });
  };

  dateRender = current => {
    const selectedValue = this.state.value;
    if (
      selectedValue &&
      current.year() === selectedValue.year() &&
      current.week() === selectedValue.week()
    ) {
      return (
        <div className="rc-calendar-selected-day">
          <div className="rc-calendar-date">{current.date()}</div>
        </div>
      );
    }
    return <div className="rc-calendar-date">{current.date()}</div>;
  };

  lastWeek = () => {
    const value = this.props.value || now;
    value.add(-1, "weeks");
    this.setState({
      value,
      open: false
    });
  };
  nextWeek = () => {
      const value = this.props.value || now;
      value.add(+1, "weeks");
      this.setState({
          value,
          open: false
      });
  };
  nowWeek = () => {
      const value =  now;
      this.setState({
          value,
          open: false
      });
  };

  renderFooter = () => {
    return (
      <div className="week-calendar-footer" key="footer">
        <span
          className="week-calendar-footer-button"
          onClick={this.lastWeek.bind(this)}
          style={{'float':'left'}}
        >
          {this.props.locale.lastWeek}
        </span>
        <span
          className="week-calendar-footer-button"
          onClick={this.nowWeek.bind(this)}
        >
          {this.props.locale.nowWeek}
        </span>
          <span
              className="week-calendar-footer-button"
              onClick={this.nextWeek.bind(this)}
              style={{'float':'right'}}
          >
              {this.props.locale.nextWeek}
          </span>
      </div>
    );
  };

  onTypeChange = type => {
    this.setState({
      type
    });
  };

  handleCalendarChange = (value) => {
    this.setState({ 
      value: value && Object.assign(value, {_type:'week'}) || value
    });
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
  onClear = (e) => { 
    e&&e.stopPropagation&&e.stopPropagation();
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
    const state = this.state;
    const props = this.props;
    const { showClose } = props;
    const value = state.value;
    const calendar = (
      <Calendar
        className="week-calendar"
        showWeekNumber
        showMonthInput={false}
        renderFooter={this.renderFooter}
        dateRender={this.dateRender}
        locale={cn ? zhCN : enUS}
        format={format}
        dateInputPlaceholder={this.props.placeholder}
        defaultValue={now}
        showDateInput
        onChange={this.handleCalendarChange}
        showToday={false}
        onClear={this.onClear}
      />
    );
    let classes = classnames(props.className, "datepicker-container");
    return (
      <div className={classes} onClick={this.stopPropagation} onMouseOver={this.stopPropagation}>
        {/* <style dangerouslySetInnerHTML={{ __html: style }} /> */}
        <Picker
          animation="slide-up"
          {...props}
          onOpenChange={this.onOpenChange}
          open={this.state.open}
          calendar={calendar}
          value={state.value}
        >
          {({ }) => {
            return (
                <InputGroup simple className="datepicker-input-group" 
                  onMouseEnter={this.onMouseEnter}
                  onMouseLeave={this.onMouseLeave}
                >
                  <FormControl
                    placeholder={this.props.placeholder}
                    disabled={props.disabled}
                    readOnly
                    tabIndex="-1"
                    className={this.props.className}
                    value={(value && value.format(format)) || ""}
                  />
                    {
                        showClose&&this.state.value&&this.state.showClose&&(!props.disabled)?(
                        <InputGroup.Button shape="border" 
                            onClick={this.onClear}>
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

WeekPicker.defaultProps = {
    closeIcon:()=><Icon type="uf-close-c"/>,
    renderIcon: () => <Icon type="uf-calendar" />,
    locale:zhCN,
    showClose:true
}

export default WeekPicker;
