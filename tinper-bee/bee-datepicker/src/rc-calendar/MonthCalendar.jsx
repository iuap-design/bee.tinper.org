import React from 'react';
import PropTypes from 'prop-types';
import KeyCode from 'rc-util/lib/KeyCode';
import CalendarHeader from './calendar/CalendarHeader';
import CalendarFooter from './calendar/CalendarFooter';
import {
  calendarMixinWrapper,
  calendarMixinPropTypes,
  calendarMixinDefaultProps,
} from './mixin/CalendarMixin';
import { commonMixinWrapper, propType, defaultProp } from './mixin/CommonMixin';
import DateInput from './date/DateInput';
import moment from 'moment';

class MonthCalendar extends React.Component {
  static propTypes = {
    ...calendarMixinPropTypes,
    ...propType,
    monthCellRender: PropTypes.func,
    dateCellRender: PropTypes.func,
    value: PropTypes.object,
    defaultValue: PropTypes.object,
    selectedValue: PropTypes.object,
    defaultSelectedValue: PropTypes.object,
    disabledDate: PropTypes.func,
  }

  static defaultProps = Object.assign({
    showDateInput:false,
  }, defaultProp, calendarMixinDefaultProps);

  constructor(props) {
    super(props);

    this.state = {
      mode: 'month',
      value: props.value || props.defaultValue || moment(),
      selectedValue: props.selectedValue || props.defaultSelectedValue,
    };
  }

  onKeyDown = (event) => {
    const keyCode = event.keyCode;
    const ctrlKey = event.ctrlKey || event.metaKey;
    const stateValue = this.state.value;
    const { disabledDate } = this.props;
    let value = stateValue;
    switch (keyCode) {
      case KeyCode.DOWN:
        value = stateValue.clone();
        value.add(3, 'months');
        break;
      case KeyCode.UP:
        value = stateValue.clone();
        value.add(-3, 'months');
        break;
      case KeyCode.LEFT:
        value = stateValue.clone();
        if (ctrlKey) {
          value.add(-1, 'years');
        } else {
          value.add(-1, 'months');
        }
        break;
      case KeyCode.RIGHT:
        value = stateValue.clone();
        if (ctrlKey) {
          value.add(1, 'years');
        } else {
          value.add(1, 'months');
        }
        break;
      case KeyCode.ENTER:
        if (!disabledDate || !disabledDate(stateValue)) {
          this.onSelect(stateValue);
        }
        event.preventDefault();
        return 1;
      default:
        return undefined;
    }
    if (value !== stateValue) {
      this.setValue(value);
      event.preventDefault();
      return 1;
    }
  }

  handlePanelChange = (_, mode) => {
    if (mode !== 'date') {
      this.setState({ mode });
    }
  }

  onInputChange=value=>{
    let { onChange,format } = this.props;
      this.setState({
        value:value ? value : moment()
      })
      this.setValue(value);
      onChange&&onChange(value);
  }
  onClear = () =>{
    let { onChange,format,onClear } = this.props;
    this.setState({
      value:moment()
    })
    this.setValue(moment());
    onChange&&onChange('','');
    onClear&&onClear('','');
  }

  render() {
    const { props, state } = this;
    let { mode, value } = state;
    value = value?value:moment()
    const { prefixCls,locale,format,showDateInput,onChange,onSelect,
      onClear,showMonthInput } = props;
    const children = (
      <div className={`${props.prefixCls}-month-calendar-content`}>
        <div className={`${props.prefixCls}-month-header-wrap`}>
        {
          showDateInput&&showMonthInput?<DateInput 
            value={value}
            prefixCls={prefixCls}
            showClear={true}
            locale={locale}
            format={format}
            onChange={this.onInputChange}
            selectedValue={value}
            onClear={this.onClear}
          />:''
        }
          <CalendarHeader
            prefixCls={props.prefixCls}
            mode={mode}
            value={value}
            locale={props.locale}
            disabledMonth={props.disabledDate}
            monthCellRender={props.monthCellRender}
            monthCellContentRender={props.monthCellContentRender}
            onMonthSelect={this.onSelect}
            onValueChange={this.setValue}
            onPanelChange={this.handlePanelChange}
            // onChange={onChange}
            onClear={onClear}
          />
        </div>
        <CalendarFooter
          prefixCls={props.prefixCls}
          renderFooter={props.renderFooter}
        />
      </div>
    );
    return this.renderRoot({
      className: `${props.prefixCls}-month-calendar`,
      children,
    });
  }
}

export default calendarMixinWrapper(commonMixinWrapper(MonthCalendar));
