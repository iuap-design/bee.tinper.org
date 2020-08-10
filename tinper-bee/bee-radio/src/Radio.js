import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  /**
    * radio 颜色 样式
    */
  colors: PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger','primary']),
  /**
    * radio 大小
    */
  size: PropTypes.oneOf(['lg','sm']),
  /**
    * radio 是否可用
    */
  disabled: PropTypes.bool,
  /**
    * radio 样式 是否使用红色填充
    */
  inverse: PropTypes.bool,
  checked:PropTypes.bool,
  onChange:PropTypes.func
};

const defaultProps = {
  inverse: false,
  disabled: false,
  clsPrefix: 'u-radio'
};

/**
 * 建立与RadioGroup通信
 */
const contextTypes = {
    radioGroup: PropTypes.object
}


class Radio extends React.Component {
  constructor(props, context) {
    super(props, context);
    let initChecked = typeof props.checked !== 'undefined' ? props.checked : props.defaultChecked;
    this.state = {
      checked: initChecked,
      focused: false
    }    
  }
  componentWillReceiveProps(nextProps){
    if('checked' in nextProps){
      this.setState({
        checked:nextProps.checked
      })
    }
  }

  handleClick=(event)=> {
    if (this.props.disabled) {
      return;
    }
    if (this.context.radioGroup && this.context.radioGroup.onChange) {
      this.context.radioGroup.onChange(this.props.value);
    }else {
      if (!('checked' in this.props)) {
        this.setState({
          checked: !this.state.checked
        })
      }
      event.target.checked = !this.state.checked;
      this.props.onChange&&this.props.onChange(event,!this.state.checked)
    }
  }

  handleFocus = (e) => {
    if(e.target && e.target.type == 'radio'){
      this.setState({
        focused: true
      });
    }
  }

  handleBlur = (e) => {
    if(e.target && e.target.type == 'radio'){
      this.setState({
        focused: false
      });
    }
  }
 
  render() {
    const { state, props, context } = this;
    let { checked } = state;
      /**
       * 自身的属性
       */
      const {
          inverse,
          disabled,
          colors,
          className,
          children,
          clsPrefix,
          style,
          onChange,
          ...others
        } = props;
      const { radioGroup } = context;
      const radioProps = { ...others };
      // 包裹 radioGroup
      if (radioGroup) {
        radioProps.name = radioGroup.name;
        radioProps.selectedvalue = radioGroup.selectedValue;
        radioProps.size = radioGroup.size;
        radioProps.focusvalue = radioGroup.focusvalue;
      } 
      const {name, selectedvalue,size,focusvalue} = radioProps;

      let optional = {};
      /**
       * 若父级selectedValue与本身的value值相同，则改radio被选中
       */
      if(selectedvalue !== undefined) {
        optional.checked = (this.props.value === selectedvalue);
      }

      let classes = {
        [`${clsPrefix}-focused`]: this.state.focused,
        'is-checked': typeof optional.checked !== 'undefined' ? optional.checked : checked,
        disabled
      };

      if (colors) {
          classes[`${clsPrefix}-${colors}`] = true;
      }
      if (size) {
          classes[`${clsPrefix}-${size}`] = true;
      }
      if (inverse) {
        classes[`${clsPrefix}-inverse`] = true;
      }
      if (children == null) {
        classes[`${clsPrefix}-noContent`] = true;
      }
      let classNames = classnames(clsPrefix,classes);
      let  tabIndex=optional.checked?0:-1;
      if(focusvalue&&focusvalue==this.props.value){
        tabIndex = 0 ;
      }
      const input = (
          <input
          {...radioProps}
          type="radio"
          name={name}
          disabled={this.props.disabled}
          tabIndex={tabIndex}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          />
      );
       return (
          <label style={style} onClick = {this.handleClick} className={classnames(className, classNames)}>
            {input}
            <label className={clsPrefix+'-label'}>{children}</label>
          </label>
      );

  }
}

Radio.contextTypes = contextTypes;
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
