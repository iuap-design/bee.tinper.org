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
  inverse: PropTypes.bool
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
    
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(event) {
    const {onChange } = this.context.radioGroup;
    if (this.props.disabled) {
      return;
    }
    if (onChange) {
      onChange(this.props.value);
    }
  }
 
  render() {
      const {name, selectedValue,size,focusvalue} = this.context.radioGroup;
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
          ...others
        } = this.props;

      let optional = {};
      /**
       * 若父级selectedValue与本身的value值相同，则改radio被选中
       */
      if(selectedValue !== undefined) {
        optional.checked = (this.props.value === selectedValue);
      }

      let classes = {
        'is-checked':optional.checked,
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
          {...others}
          type="radio"
          name={name}
          disabled={this.props.disabled}
          tabIndex={tabIndex}
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
