import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * @title 尺寸
   */
  size: PropTypes.oneOf(['sm', 'md', 'xg', 'lg']),
  /**
   * @title 样式
   */
  style: PropTypes.object,
  /**
   * @title 形状
   */
  shape: PropTypes.oneOf(['block', 'round','border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),

  bordered:  PropTypes.bool,
   /**
   * @title 类型
   */
  colors: PropTypes.oneOf(['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'danger', 'dark', 'light' , 'default']),
  /**
   * @title 是否禁用
   * @veIgnore
   */
  disabled: PropTypes.bool,
  /**
   * @title 类名
   * @veIgnore
   */
  className: PropTypes.string,

  /**
   * @title <button> 的 type
   * @veIgnore
   */
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  isSubmit:PropTypes.bool//是否作为form的提交按钮
}

const defaultProps = {
  disabled: false,
  htmlType: 'button',
  clsPrefix: 'u-button',
  bordered: false,
  isSubmit:false
}

const sizeMap = {
        sm: 'sm',
        md: 'md',
        xg: 'xg',
        lg: 'lg'
    },
    colorsMap = {
        primary: 'primary',
        secondary: 'secondary',
        accent: 'accent',
        success: 'success',
        info: 'info',
        warning: 'warning',
        danger: 'danger',
        dark: 'dark',
        light: 'light'
    },
    shapeMap = {
        block: 'block',
        round: 'round',
        border: 'border',
        squared: 'squared',
        floating: 'floating',
        pillRight: 'pill-right',
        pillLeft: 'pill-left',
        icon: 'icon'
    };


class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {colors,
            shape,
            disabled,
            className,
            size,
            bordered,
            children,
            htmlType,
            clsPrefix,
            isSubmit,
            ...others} = this.props;
        let clsObj = {};
        if (className) {
            clsObj[className] = true;
        }
        if (sizeMap[size]) {
            clsObj[`${clsPrefix}-${sizeMap[size]}`] = true;
        }

        if (shapeMap[shape]) {
            clsObj[`${clsPrefix}-${shapeMap[shape]}`] = true;
        }
        if (colorsMap[colors]) {
            clsObj[`${clsPrefix}-${colorsMap[colors]}`] = true;
        }
        if(bordered){
            clsObj[`${clsPrefix}-border`] = bordered;
        }
        let classes = classnames(clsPrefix, clsObj);
        return (
            <button
                type={htmlType}
                className={classes}
                disabled={disabled}
                {...others}>
              {this.props.children}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
