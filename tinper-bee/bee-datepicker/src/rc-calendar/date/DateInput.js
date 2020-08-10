import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { KeyCode } from 'tinper-bee-core';
import { polyfill } from 'react-lifecycles-compat';
import moment from 'moment';
import { formatDate } from '../util';

let cachedSelectionStart;
let cachedSelectionEnd;
let dateInputInstance;

class DateInput extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    timePicker: PropTypes.object,
    value: PropTypes.object,
    disabledTime: PropTypes.any,
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    locale: PropTypes.object,
    disabledDate: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    placeholder: PropTypes.string,
    onSelect: PropTypes.func,
    selectedValue: PropTypes.object,
    clearIcon: PropTypes.node,
  }

  constructor(props) {
    super(props);
    const selectedValue = props.selectedValue;

    this.state = {
      str: formatDate(selectedValue, this.props.format),
      invalid: false,
      hasFocus: false,
    };
  }

  componentDidUpdate() {
    if (dateInputInstance && this.state.hasFocus && !this.state.invalid &&
      !(cachedSelectionStart === 0 && cachedSelectionEnd === 0)) {
      dateInputInstance.setSelectionRange(cachedSelectionStart, cachedSelectionEnd);
    }
  }

  onClear = () => {
    this.setState({
      str: '',
    });
    this.props.onClear(null);
  }

  onInputChange = (event) => {
    const str = event.target.value;
    const { disabledDate, format, onChange, selectedValue,validatorFunc } = this.props;

    // 没有内容，合法并直接退出
    if (!str) {
      onChange(null);
      this.setState({
        // invalid: false,
        str,
      });
      return;
    }

    // 不合法直接退出
    const parsed = moment(str,format,true);
    if (!parsed.isValid()) {
      this.setState({
        // invalid: true,
        str,
      });
      return;
    }
    if(!this.props.validatorFunc(str)){
      this.setState({
        str,
      });
      return;
    };

    const value = this.props.value.clone();
    value
      .year(parsed.year())
      .month(parsed.month())
      .date(parsed.date())
      .hour(parsed.hour())
      .minute(parsed.minute())
      .second(parsed.second());

    if (!value || (disabledDate && disabledDate(value))) {
      this.setState({
        // invalid: true,
        str,
      });
      return;
    }

    if (selectedValue !== value || (
      selectedValue && value && !selectedValue.isSame(value)
    )) {
      this.setState({
        // invalid: false,
        str,
      });
      onChange(value);
    }
  }

  onFocus = () => {
    this.setState({ hasFocus: true });
  }

  onBlur = (e) => {
    const str = e.target.value;
    const { disabledDate, format, onChange, selectedValue } = this.props;

    // 没有内容，合法并直接退出
    if (!str) {
      this.setState({
        invalid: false
      });
      return;
    }

    // 不合法直接退出
    const parsed = moment(str,format,true);
    if (!parsed.isValid()) {
      this.setState({
        invalid: true
      });
      return;
    }
    if(!this.props.validatorFunc(str)){
      this.setState({
        invalid: true
      });
      return;
    };

    const value = this.props.value.clone();
    value
      .year(parsed.year())
      .month(parsed.month())
      .date(parsed.date())
      .hour(parsed.hour())
      .minute(parsed.minute())
      .second(parsed.second());

    if (!value || (disabledDate && disabledDate(value))) {
      this.setState({
        invalid: true
      });
      return;
    }

    if (selectedValue !== value || (
      selectedValue && value && !selectedValue.isSame(value)
    )) {
      this.setState({
        invalid: false
      });
    }

    this.setState((prevState, prevProps) => ({
      hasFocus: false,
      str: formatDate(prevProps.value, prevProps.format),
    }));
    this.props.onBlur && this.props.onBlur(e);
  }

  onKeyDown = (e) => {
    const { onSelect, value,onKeyDown,format, isRange,validatorFunc, disabledDate } = this.props;
    const str = e.target.value;
    const parsed = moment(str,format,true);
    if (e.keyCode === KeyCode.ENTER){
      if(parsed.isValid()&& onSelect){
        isRange?onSelect(parsed.clone()):onSelect(value.clone());//FIX https://github.com/iuap-design/tinper-bee/issues/183
      }
      // 没有内容，回填默认值，并关闭面板
      if (!str) {
        this.setState({
          invalid: false
        });
        onSelect && onSelect(moment());
        return;
      }
      // 有内容，判断是否合法
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
      }
      if(!validatorFunc(str)){
        this.setState({
          invalid: true
        });
      }
      value
        .year(parsed.year())
        .month(parsed.month())
        .date(parsed.date())
        .hour(parsed.hour())
        .minute(parsed.minute())
        .second(parsed.second());

      if (!value || (disabledDate && disabledDate(value))) {
        this.setState({
          invalid: true
        });
      }
    }
    // if (e.keyCode === KeyCode.ENTER && onSelect) {
    //   onSelect(value.clone());
    // }
    onKeyDown&&onKeyDown(e)
  };

  static getDerivedStateFromProps(nextProps, state) {
    let newState = {};

    if (dateInputInstance) {
      cachedSelectionStart = dateInputInstance.selectionStart;
      cachedSelectionEnd = dateInputInstance.selectionEnd;
    }
    // when popup show, click body will call this, bug!
    const selectedValue = nextProps.selectedValue;
    if (!state.hasFocus) {
      newState = {
        str: formatDate(selectedValue, nextProps.format),
        invalid: false,
      };
    }

    return newState;
  }

  static getInstance() {
    return dateInputInstance;
  }

  getRootDOMNode = () => {
    return ReactDOM.findDOMNode(this);
  }

  focus = () => {
    if (dateInputInstance) {
      dateInputInstance.focus();
    }
  }

  saveDateInput = (dateInput) => {
    dateInputInstance = dateInput;
  }

  render() {
    const props = this.props;
    const { invalid, str } = this.state;
    const { locale, prefixCls, placeholder, clearIcon, renderError,inputTabIndex } = props;
    const invalidClass = invalid ? `${prefixCls}-input-invalid` : '';
    return (
      <div className={`${prefixCls}-input-wrap`}>
        <div className={`${prefixCls}-date-input-wrap`}>
          <input
            ref={this.saveDateInput}
            className={`${prefixCls}-input ${invalidClass}`}
            value={str ? str : formatDate(props.selectedValue, props.format)}
            disabled={props.disabled}
            placeholder={placeholder}
            onChange={this.onInputChange}
            onKeyDown={this.onKeyDown}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            tabIndex={inputTabIndex}
          />
          {invalid&&renderError?renderError():''}
        </div>
        {props.showClear ? (
          <a
            role="button"
            title={locale.clear}
            onClick={this.onClear}
          >
            {clearIcon || <span className={`${prefixCls}-clear-btn uf uf-close-c`} />}
          </a>
        ) : null}
      </div>
    );
  }
}

polyfill(DateInput);

export default DateInput;
