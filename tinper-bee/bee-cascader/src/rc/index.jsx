/**
 * This source code is quoted from rc-cascader.
 * homepage: https://github.com/react-component/cascader
 */
import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Trigger from 'rc-trigger';
import warning from 'warning';
import KeyCode from 'tinper-bee-core';
import arrayTreeFilter from 'array-tree-filter';
import shallowEqualArrays from 'shallow-equal/arrays';
import { polyfill } from 'react-lifecycles-compat';
import Menus from './Menus';
import Icon from 'bee-icon';
import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';

const BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
};
let self
class Rcascader extends Component {
  constructor(props) {
    super(props);
    self = this
    let initialValue = [];      //用于传给后台
    let initInputValue = "";  //用于显示的
    let initOptions = [];
    if ('value' in props) {   //包裹在表单中走value
      var objectValue = this.convertStringToObject(props.options,props,[],0)
      initialValue = objectValue || [];
      initInputValue = objectValue.map(o => o.label).join(props.separator) || ''
    } else if ('defaultValue' in props) {  //单独使用则直接设置defaultValue
      initialValue = props.defaultValue.map(o => o.value) || [];
      initInputValue = props.defaultValue.map(o => o.label).join(props.separator) || ''
    } else if ('options' in props) {
      initOptions = props.options || []
    }

    warning(
      !('filedNames' in props),
      '`filedNames` of Cascader is a typo usage and deprecated, please use `fieldNames` instead.',
    );

    this.state = {
      popupVisible: props.popupVisible,
      activeValue: initialValue,
      value: initialValue,
      prevProps: props,
      showClose:false, //是否显示清空按钮
      inputValue: initInputValue,   //输入框显示的值
    };
    this.defaultFieldNames = { label: 'label', value: 'value', children: 'children' };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { prevProps = {} } = prevState;
    const newState = {
      prevProps: nextProps,
    };

    if ('value' in nextProps && !shallowEqualArrays(prevProps.value, nextProps.value)) {
      newState.value = nextProps.value || [];

      // allow activeValue diff from value
      if (!('loadData' in nextProps)) {
        newState.activeValue = nextProps.value || [];
      }
      newState.inputValue = self.convertStringToObject(self.props.options,nextProps,[],0,).map(o =>o.label).join(nextProps.separator) || ''
    }
    if ('popupVisible' in nextProps) {
      newState.popupVisible = nextProps.popupVisible;
    }
    if ('options' in nextProps) {
			newState.options = nextProps.options || [];
    }
    if ('inputValue' in nextProps) {
      newState.inputValue = nextProps.inputValue;
    }

    return newState;
  }

  getPopupDOMNode() {
    return this.trigger.getPopupDomNode();
  }
  getFieldName(name) {
    const { defaultFieldNames } = this;
    const { fieldNames, filedNames } = this.props;
    if ('filedNames' in this.props) {
      return filedNames[name] || defaultFieldNames[name]; // For old compatibility
    }
    return fieldNames[name] || defaultFieldNames[name];
  }
  getFieldNames() {
    const { fieldNames, filedNames } = this.props;
    if ('filedNames' in this.props) {
      return filedNames; // For old compatibility
    }
    return fieldNames;
  }
  getCurrentLevelOptions() {
    const { options = [] } = this.props;
    const { activeValue = [] } = this.state;
    const result = arrayTreeFilter(
      options,
      (o, level) => o[this.getFieldName('value')] === activeValue[level],
      { childrenKeyName: this.getFieldName('children') },
    );
    if (result[result.length - 2]) {
      return result[result.length - 2][this.getFieldName('children')];
    }
    return [...options].filter(o => !o.disabled);
  }
  getActiveOptions(activeValue) {
    return arrayTreeFilter(
      this.props.options || [],
      (o, level) => o[this.getFieldName('value')] === activeValue[level],
      { childrenKeyName: this.getFieldName('children') },
    );
  }
  setPopupVisible = popupVisible => {
    if (!('popupVisible' in this.props)) {
      this.setState({ popupVisible });
    }
    // sync activeValue with value when panel open
    if (popupVisible && !this.state.popupVisible) {
      this.setState({
        activeValue: this.state.value,
      });
    }
    this.props.onPopupVisibleChange(popupVisible);
  };
  handleChange = (options, setProps, e) => {
    const {onChange, separator} = this.props;
    if (e.type !== 'keydown' || e.keyCode === KeyCode.ENTER) {
      onChange(options.map(o => o[this.getFieldName('value')]), options);
      this.setState({
        inputValue: options.map(o => o[this.getFieldName('label')]).join(separator)
      })
      this.setPopupVisible(setProps.visible);
    }
  };
  handlePopupVisibleChange = popupVisible => {
    this.setPopupVisible(popupVisible);
  };
  handleMenuSelect = (targetOption, menuIndex, e) => {
    // Keep focused state for keyboard support
    const triggerNode = this.trigger.getRootDomNode();
    if (triggerNode && triggerNode.focus) {
      triggerNode.focus();
    }
    const { changeOnSelect, loadData, expandTrigger } = this.props;
    if (!targetOption || targetOption.disabled) {
      return;
    }
    let { activeValue } = this.state;
    activeValue = activeValue.slice(0, menuIndex + 1);
    activeValue[menuIndex] = targetOption[this.getFieldName('value')];
    const activeOptions = this.getActiveOptions(activeValue);
    if (targetOption.isLeaf === false && !targetOption[this.getFieldName('children')] && loadData) {
      if (changeOnSelect) {
        this.handleChange(activeOptions, { visible: true }, e);
      }
      this.setState({ activeValue });
      loadData(activeOptions);
      return;
    }
    const newState = {};
    if (
      !targetOption[this.getFieldName('children')] ||
      !targetOption[this.getFieldName('children')].length
    ) {
      this.handleChange(activeOptions, { visible: false }, e);
      // set value to activeValue when select leaf option
      newState.value = activeValue;
      // add e.type judgement to prevent `onChange` being triggered by mouseEnter
    } else if (changeOnSelect && (e.type === 'click' || e.type === 'keydown')) {
      if (expandTrigger === 'hover') {
        this.handleChange(activeOptions, { visible: false }, e);
      } else {
        this.handleChange(activeOptions, { visible: true }, e);
      }
      // set value to activeValue on every select
      newState.value = activeValue;
    }
    newState.activeValue = activeValue;
    //  not change the value by keyboard
    if ('value' in this.props || (e.type === 'keydown' && e.keyCode !== KeyCode.ENTER)) {
      delete newState.value;
    }
    this.setState(newState);
  };
  handleItemDoubleClick = () => {
    const { changeOnSelect } = this.props;
    if (changeOnSelect) {
      this.setPopupVisible(false);
    }
  };
  handleKeyDown = e => {
    const { children } = this.props;
    // https://github.com/ant-design/ant-design/issues/6717
    // Don't bind keyboard support when children specify the onKeyDown
    if (children && children.props.onKeyDown) {
      children.props.onKeyDown(e);
      return;
    }
    const activeValue = [...this.state.activeValue];
    const currentLevel = activeValue.length - 1 < 0 ? 0 : activeValue.length - 1;
    const currentOptions = this.getCurrentLevelOptions();
    const currentIndex = currentOptions
      .map(o => o[this.getFieldName('value')])
      .indexOf(activeValue[currentLevel]);
    if (
      e.keyCode !== KeyCode.DOWN &&
      e.keyCode !== KeyCode.UP &&
      e.keyCode !== KeyCode.LEFT &&
      e.keyCode !== KeyCode.RIGHT &&
      e.keyCode !== KeyCode.ENTER &&
      e.keyCode !== KeyCode.SPACE &&
      e.keyCode !== KeyCode.BACKSPACE &&
      e.keyCode !== KeyCode.ESC
    ) {
      return;
    }
    // Press any keys above to reopen menu
    if (
      !this.state.popupVisible &&
      e.keyCode !== KeyCode.BACKSPACE &&
      e.keyCode !== KeyCode.LEFT &&
      e.keyCode !== KeyCode.RIGHT &&
      e.keyCode !== KeyCode.ESC
    ) {
      this.setPopupVisible(true);
      return;
    }
    if (e.keyCode === KeyCode.DOWN || e.keyCode === KeyCode.UP) {
      e.preventDefault();
      let nextIndex = currentIndex;
      if (nextIndex !== -1) {
        if (e.keyCode === KeyCode.DOWN) {
          nextIndex += 1;
          nextIndex = nextIndex >= currentOptions.length ? 0 : nextIndex;
        } else {
          nextIndex -= 1;
          nextIndex = nextIndex < 0 ? currentOptions.length - 1 : nextIndex;
        }
      } else {
        nextIndex = 0;
      }
      activeValue[currentLevel] = currentOptions[nextIndex][this.getFieldName('value')];
    } else if (e.keyCode === KeyCode.LEFT || e.keyCode === KeyCode.BACKSPACE) {
      e.preventDefault();
      activeValue.splice(activeValue.length - 1, 1);
    } else if (e.keyCode === KeyCode.RIGHT) {
      e.preventDefault();
      if (
        currentOptions[currentIndex] &&
        currentOptions[currentIndex][this.getFieldName('children')]
      ) {
        activeValue.push(
          currentOptions[currentIndex][this.getFieldName('children')][0][
            this.getFieldName('value')
          ],
        );
      }
    } else if (e.keyCode === KeyCode.ESC) {
      this.setPopupVisible(false);
      return;
    }
    if (!activeValue || activeValue.length === 0) {
      this.setPopupVisible(false);
    }
    const activeOptions = this.getActiveOptions(activeValue);
    const targetOption = activeOptions[activeOptions.length - 1];
    this.handleMenuSelect(targetOption, activeOptions.length - 1, e);

    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  };

  saveTrigger = node => {
    this.trigger = node;
  };

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

  resetValue(e){
    e.stopPropagation();
    e.preventDefault();
    this.handlePopupVisibleChange(false);
    this.setState({
      inputValue: '',
      activeValue: [],
      value: []
    })
    this.props.onChange&&this.props.onChange('');
  }
  convertStringToObject (options,props,objectValue,count) {
    for(var item of options){
      if(item.value === props.value[count]){
        var deepCopyItem = JSON.parse(JSON.stringify(item))
        if(item.children){
          delete deepCopyItem.children
          objectValue.push(deepCopyItem)
          this.convertStringToObject(item.children,props,objectValue,++count)
        }else {
          objectValue.push(deepCopyItem)
          break
        }
      }
    }
    return objectValue
  }
  render() {
    const { showClose, popupVisible, inputValue, options, activeValue, value } = this.state;
    const {
      prefixCls,
      transitionName,
      popupClassName,
      size,
      disabled,
      builtinPlacements,
      popupPlacement,
      children,
      placeholder,
      ...restProps
    } = this.props;
    // Did not show popup when there is no options
    let menus = <div />;
    let emptyMenuClassName = '';
    let iconClass = !popupVisible ? "uf-treearrow-down": "uf-gridcaretarrowup";
    if (options && options.length > 0) {
      menus = (
        <Menus
          {...this.props}
          fieldNames={this.getFieldNames()}
          defaultFieldNames={this.defaultFieldNames}
          activeValue={this.state.activeValue}
          onSelect={this.handleMenuSelect}
          onItemDoubleClick={this.handleItemDoubleClick}
          visible={this.state.popupVisible}
          value={this.state.value}
        />
      );
    } else {
      emptyMenuClassName = ` ${prefixCls}-menus-empty`;
    }
    return (
      <Trigger
        ref={this.saveTrigger}
        {...restProps}
        options={options}
        disabled={disabled}
        popupPlacement={popupPlacement}
        builtinPlacements={builtinPlacements}
        popupTransitionName={transitionName}
        action={disabled ? [] : ['click']}
        popupVisible={disabled ? false : this.state.popupVisible}
        onPopupVisibleChange={this.handlePopupVisibleChange}
        prefixCls={`${prefixCls}-menus`}
        popupClassName={popupClassName + emptyMenuClassName}
        popup={menus}
      >
        <InputGroup simple className={`${prefixCls}-input-group`}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <FormControl
            disabled = {disabled? true : false}
            placeholder = {placeholder}
            value={inputValue}
            size={size}
            type="text"
            readOnly
          />
          {
            inputValue && showClose?(
            <InputGroup.Button shape="border"
              onClick={(e) => this.resetValue(e)}>
              <i className="uf uf-close-c"></i>
            </InputGroup.Button>
            ):<InputGroup.Button shape="border"
              onClick={(e)=>{this.props.keyboardInput?this.iconClick(e):''}}>
              <i className={`uf ${iconClass}`}></i>
            </InputGroup.Button>
          }
        </InputGroup>
      </Trigger>
    );
  }
}

Rcascader.defaultProps = {
  onChange() {},
  onPopupVisibleChange() {},
  size:'md',
  disabled: false,
  transitionName: '',
  prefixCls: 'rc-cascader',
  defaultValue:[],
  popupClassName: '',
  popupPlacement: 'bottomLeft',
  builtinPlacements: BUILT_IN_PLACEMENTS,
  expandTrigger: 'click',
  fieldNames: { label: 'label', value: 'value', children: 'children' },
  expandIcon: <Icon type="uf-arrow-right"></Icon>,
  separator: '/ '
};

Rcascader.propTypes = {
  size: PropTypes.string,
  value: PropTypes.array,
  defaultValue: PropTypes.array,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onPopupVisibleChange: PropTypes.func,
  popupVisible: PropTypes.bool,
  disabled: PropTypes.bool,
  transitionName: PropTypes.string,
  popupClassName: PropTypes.string,
  popupPlacement: PropTypes.string,
  prefixCls: PropTypes.string,
  dropdownMenuColumnStyle: PropTypes.object,
  builtinPlacements: PropTypes.object,
  loadData: PropTypes.func,
  changeOnSelect: PropTypes.bool,
  children: PropTypes.node,
  onKeyDown: PropTypes.func,
  expandTrigger: PropTypes.string,
  fieldNames: PropTypes.object,
  filedNames: PropTypes.object, // typo but for compatibility
  expandIcon: PropTypes.node,
  loadingIcon: PropTypes.node,
  inputValue: PropTypes.string,
  separator: PropTypes.string
};

polyfill(Rcascader);

export default Rcascader;
