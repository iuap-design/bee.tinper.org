import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const propTypes = {
  name: PropTypes.string,
  /**
   * 默认选中的值
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
   * 选中的值
   */
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
   * 选中的值,作用与selectedValue一致，添加value属性是为了配合form表单校验初始化等一起使用
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
  * 暴露给用户，且与子Radio通信的方法
  */
  onChange: PropTypes.func,
  /**
    * radio 大小
    */
  size: PropTypes.oneOf(['lg','sm']),

  children: PropTypes.node.isRequired,

  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ]),
  disabled: PropTypes.bool
};

const defaultProps = {
  Component: 'div',
  clsPrefix: 'u-radio-group',
  defaultValue: ''
};

/**
 * 与子Radio通信
 */
const childContextTypes = {
  radioGroup: PropTypes.object
}

class RadioGroup extends React.Component {

  constructor(props, context) {
    super(props, context);
    let initValue = 'value' in props ? props.value : ( 'selectedValue' in props ? props.selectedValue : props.defaultValue);
    this.state={
      focusvalue:'',
      selectedValue: initValue
    }
  }
  
  getValues = ()=>{
    let array = []
    let children = this.props.children;
    if(!children){
      console.error('RadioGroup must have child nodes');
      return array;
    }
    if(children.length>1){
      children.map((item)=>{
        array.push(item.props.value)
      })
    }else if(children.length === 1){
      array.push(children[0].props.value)
    }else{
      array.push(children.props.value);
    }
    return array;
  }
  componentDidMount(){
    let array = this.getValues();
    if(array.indexOf(this.props.selectedValue)==-1){
        this.setState({
          focusvalue:array[0]
        })
    }
  }

  componentWillReceiveProps(nextProps){
    let array = this.getValues();
    if(array.indexOf(this.props.selectedValue)==-1 || array.indexOf(this.props.value)==-1){
        this.setState({
          focusvalue:array[0]
        })
    }else{
      this.setState({
        focusvalue:''
      })
    }
    if('selectedValue' in nextProps || 'value' in nextProps) {
      this.setState({
        selectedValue: nextProps.selectedValue !== undefined ? nextProps.selectedValue : nextProps.value
      })
    }
  } 

  handleChange = (value) => {
    let { onChange } = this.props;
    if(!('selectedValue' in this.props)){
      this.setState({
        selectedValue: value
      })
    }
    onChange && onChange(value);
  }

  /**
    * 一旦外层change方法触发本身props发生改变，则调用getChildContext更新与子Radio的通信信息（radioGroup）
    */

  getChildContext() {
    const {name, size} = this.props;
    let { selectedValue } = this.state;
    let onChange = this.handleChange;
    return {
      radioGroup: {
        name, selectedValue, onChange,size,focusvalue:this.state.focusvalue
      }
    }
  }

  render () {
    const {Component, name, selectedValue, onChange, children,size, clsPrefix, className, focusvalue, disabled, ...others} = this.props;

    return (
      <Component className={classnames(clsPrefix,className)} {...others} focusvalue={this.state.focusvalue}>
        {
          React.Children.map(children,child=>React.cloneElement(child,
            {
              disabled: child.props.disabled || disabled
            }
          ))
        }
      </Component>
    );
  }
}

RadioGroup.childContextTypes = childContextTypes;
RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
export default RadioGroup;