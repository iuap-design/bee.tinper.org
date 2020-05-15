import classnames from 'classnames';
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';

const ROUND_PRECISION = 1000;

/**
 * 自定义验证children是<ProgressBar>的实例.
 * @props 实例后的propTypes
 * @propName 本身propTypes的属性名 即 children
 * @componentName 实例后的children名 期望是ProgressBar
 */
function onlyProgressBar(props, propName, componentName) {
  const children = props[propName];
  if (!children) {
    return null;
  }

  let error = null;

  React.Children.forEach(children, child => {
    if (error) {
      return;
    }

    if (child.type === ProgressBar) { // eslint-disable-line no-use-before-define
      return;
    }

    const childIdentifier = React.isValidElement(child) ?
      child.type.displayName || child.type.name || child.type :
      child;
    error = new Error(
      `Children of ${componentName} can contain only ProgressBar ` +
      `components. Found ${childIdentifier}.`
    );
  });

  return error;
}

const propTypes = {
    /**
     *  最小数值
     */
    min: PropTypes.number,
    /**
     *  有效数值
     */
    now: PropTypes.number,
    /**
     *  最大数值
     */
    max: PropTypes.number,
    /**
     *  文字描述标签
     */
    label: PropTypes.node,
    /**
     *  文字描述标签显示
     */
    srOnly: PropTypes.bool,
    /**
     *  条纹样式
     */
    striped: PropTypes.bool,
    /**
     *  激活状态
     */
    active: PropTypes.bool,
    /**
     *  大小
     */
    size: PropTypes.oneOf(['xs','sm']),
    /**
     *  labelPosition
     */
    labelPosition: PropTypes.oneOf(['right','left','center']),
    /**
     *  子组件 必须是ProgressBar
     */
    children: onlyProgressBar,
    /**
     *  子组件 必须是ProgressBar
     */
    style: PropTypes.object,

  /**
   * @private
   */
  isChild: PropTypes.bool,
};

const defaultProps = {
    min: 0,
    max: 100,
    active: false,
    isChild: false,
    srOnly: false,
    striped: false,
    labelPosition: 'center',
    clsPrefix: 'u-progress'
};

/**
 * 计算实际显示比例 
 * @now 显示的总数值
 * @min 最小数值
 * @max 最大数值
 */
function getPercentage(now, min, max) {
    const percentage = (now - min) / (max - min) * 100;
    return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}


class ProgressBar extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        now:this.props.now,
        max:this.props.max,
        min:this.props.min,
        active:this.props.active
     }

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
        now:nextProps.now,
        max:nextProps.max,
        min:nextProps.min,
        active:nextProps.active
     })
  }

  renderProgressBar({
    min, now, max, label, srOnly, striped, active, colors,labelPosition, className, style,clsPrefix, ...others
  }) {
    let childClsPrefix  = clsPrefix+'-bar';
    let classes = {
      active
    };
    if(active || striped) {
        classes[`${childClsPrefix}-striped`] = true;
    }
    if(colors) {
        classes[`${childClsPrefix}-${colors}`] = true;
    }
    
    let classNames = classnames(childClsPrefix,classes);

    //返回不敢wrapper的progressbar
    return (
      <div
        {...others}
        role="progressbar"
        className={classnames(className, classNames)}
        style={{ width: `${getPercentage(now, min, max)}%`, ...style }}
      >
        <span className="u-progress-label">{srOnly ? <span className="sr-only">{label}</span> : label}</span>
      </div>
    );
  }

  render() {
    //先处理以组ProgressBar形式使用情况
    const { isChild, ...props } = this.props;

    // 判断isChild是否为true,如果是true,直接渲染成bar
    if (isChild) {
      return this.renderProgressBar(props);
    }

    const {
      label,
      srOnly,
      striped,
      colors,
      className,
      style,
      min,
      max,
      now,
      active,
      size,
      labelPosition,
      children,
      clsPrefix,
      ...wrapperProps
    } = props;

    /**
     * 如果是单独直接用<ProgressBar /> 走children判断为false语句。
     * 如果以组的形式使用<ProgressBar><ProgressBar now={10} /><ProgressBar now={20}/></ProgressBar> 走判断语句为true，
     * 将children分别加上isChild=true的属性
     */
    return (
      <div
        {...wrapperProps}
        className={classnames(className, clsPrefix, size)}
      >
        {children ?
          React.Children.map(children, child => (
            cloneElement(child, { isChild: true }
          ))) :
          this.renderProgressBar({
            min, now, max, label, srOnly, striped, active, colors,labelPosition, className, style, clsPrefix, ...wrapperProps
          })
        }
      </div>
    );
  }
}

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
Object.assign(ProgressBar, NProgress);

export default  ProgressBar;
