/**
* This source code is quoted from rc-select.
* homepage: https://github.com/react-component/select
*/
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import RcSelect from "./RcSelect";
import Option from "./Option";
import OptGroup from "./OptGroup";
import classNames from "classnames";

const SelectContext = {
  antLocale: {
    Select: PropTypes.any
  }
};

const defaultProps = {
  clsPrefix: "u-select",
  showSearch: false,
  transitionName: "slide-up",
  choiceTransitionName: "zoom",
  enterKeyDown:true,
  onDeselect:()=>{},
  onSelect:()=>{}
};

const propTypes = {
  clsPrefix: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.any
  ]),
  size: PropTypes.oneOf(["default", "lg", "sm"]),
  combobox: PropTypes.bool,
  notFoundContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.any
  ]),
  showSearch: PropTypes.bool,
  open:PropTypes.bool,
  transitionName: PropTypes.string,
  choiceTransitionName: PropTypes.string,
  multiple: PropTypes.bool,
  allowClear: PropTypes.bool,
  filterOption: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  tags: PropTypes.bool,
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  dropdownMatchSelectWidth: PropTypes.bool,
  optionFilterProp: PropTypes.string,
  optionLabelProp: PropTypes.string,
  disabled: PropTypes.bool,
  defaultActiveFirstOption: PropTypes.bool,
  labelInValue: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  style: PropTypes.object,
  dropdownStyle: PropTypes.object,
  dropdownMenuStyle: PropTypes.object,
  onChange: PropTypes.func,
  scrollToEnd: PropTypes.func,
  onKeyDown: PropTypes.func,
  enterKeyDown: PropTypes.bool//是否启用 enter 和 space 键
};

class Select extends Component {
  constructor(props) {
    super(props);
    this.state={
      maxTagCount:props.maxTagCount
    }
  }
  componentDidMount(){
    if(this.props.noWarp){
      this.selectDom = ReactDOM.findDOMNode(this.select);
      let selectDomWidth  = this.selectDom.clientWidth - 40;
      this.setState({
        selectDomWidth
      })
    }
    
  }

  calculationWidth=()=>{
    let lis = this.selectDom.querySelectorAll('.u-select-selection-rendered ul li');
    let trueWidth = 0;
    [].forEach.call(lis,li=>{
      trueWidth += li.clientWidth;
    })
    if(trueWidth>=this.state.selectDomWidth&&lis.length>0){
      this.setState({
        maxTagCount:lis.length-3 // 去掉一个选项、去掉...区域、去掉光标区域
      })
    }
    
  }

  onSelect=(value,option)=>{
    let { noWarp, multiple,onSelect,maxTagCount} = this.props;
    if(noWarp&&multiple&&(!maxTagCount)){
      this.noWarpTimer&&clearTimeout(this.noWarpTimer);
      this.noWarpTimer = setTimeout(()=>{
        this.calculationWidth()
      })
    }
    onSelect(value,option)
  }
  onDeselect=(value,option)=>{
    let { noWarp, multiple,onDeselect,maxTagCount} = this.props;
    if(noWarp&&multiple&&(!maxTagCount)){
      this.noWarpTimer&&clearTimeout(this.noWarpTimer);
      this.noWarpTimer = setTimeout(()=>{
        this.calculationWidth()
      })
    }
    onDeselect(value,option)
  }


  render() {
    const {
      clsPrefix,
      className = "",
      size,
      data,
      showSearch,
      combobox,
      noWarp,
      style={}
    } = this.props;

    let { notFoundContent = "Not Found", optionLabelProp } = this.props;

    const cls = classNames(
      {
        [`${clsPrefix}-lg`]: size === "lg",
        [`${clsPrefix}-sm`]: size === "sm",
        [`${clsPrefix}-show-search`]: showSearch,
        [`${clsPrefix}-nowarp`]: noWarp
      },
      className
    );

    const { antLocale } = this.context;
    if (antLocale && antLocale.Select) {
      notFoundContent =
        "notFoundContent" in this.props
          ? notFoundContent
          : antLocale.Select.notFoundContent;
    }

    if (combobox) {
      notFoundContent = null;
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || "value";
    }
    if(data){
      data.map(item => {
        return <Option value={item.value}>{item.key}</Option>;
      })
    }
    let styles = { ...style }
    if(noWarp&&this.state.selectDomWidth){
      styles['width'] = this.state.selectDomWidth + 40 ;
    }
    return data ? (
      <RcSelect
        {...this.props}
        style={styles}
        className={cls}
        optionLabelProp={optionLabelProp || "children"}
        notFoundContent={notFoundContent}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
        ref = {ref=>this.select=ref}
        maxTagCount={this.state.maxTagCount}
      >
        {data.map(item => {
          return <Option key={item.value} value={item.value} disabled={item.disabled?true:false}>{item.key}</Option>;
        })}
      </RcSelect>
    ) : (
      <RcSelect
        {...this.props}
        style={styles}
        className={cls}
        optionLabelProp={optionLabelProp || "children"}
        notFoundContent={notFoundContent}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
        ref = {ref=>this.select=ref}
        maxTagCount={this.state.maxTagCount}
      />
    );
  }
}
Select.context = SelectContext;
Select.propTypes = propTypes;
Select.defaultProps = defaultProps;
Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;