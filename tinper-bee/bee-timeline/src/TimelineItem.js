import React from 'react';
import classNames from 'classnames';
import splitObject from './splitObject';
import PropTypes from 'prop-types';

// Timeline
const propTypes = {
  /** 指定圆圈颜色 */
  color: PropTypes.string,
  dot: PropTypes.node,
  pending: PropTypes.bool
}
const defaultProps = {
    prefixCls: 'u-timeline',
    color: 'primary',
    last: false,
    pending: false,
};

class TimelineItem extends React.Component{
  render() {
    const [{
      prefixCls, color, last, children, pending, className, dot,
    }, restProps] = splitObject(this.props,
      ['prefixCls', 'color', 'last', 'children', 'pending', 'className', 'dot']);

    const itemClassName = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: last,
      [`${prefixCls}-item-pending`]: pending,
    }, className);

    const dotClassName = classNames({
      [`${prefixCls}-item-head`]: true,
      [`${prefixCls}-item-head-custom`]: dot,
      [`${prefixCls}-item-head-${color}`]: true,
    });

    return (
      <li {...restProps} className={itemClassName}>
        <div className={`${prefixCls}-item-tail`} />
        <div
          className={dotClassName}
          style={{ borderColor: /blue|red|green/.test(color) ? null : color }}
        >
          {dot}
        </div>
        <div className={`${prefixCls}-item-content`}>
          {children}
        </div>
      </li>
    );
  }
}
TimelineItem.propTypes = propTypes;
TimelineItem.defaultProps = defaultProps;
export default TimelineItem;