import React from 'react';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';
import splitObject from './splitObject';
import PropTypes from 'prop-types';

const  propTypes = {
  /** 指定最后一个幽灵节点是否存在或内容 */
  pending: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.node
  ])
}

const defaultProps = {
    prefixCls: 'u-timeline'
}
//static Item: React.ReactNode;  TimelineProps
class Timeline extends React.Component{
  
  render() {
    const [{
      prefixCls, children, pending, className,
    }, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'pending', 'className']);
    const pendingNode = typeof pending === 'boolean' ? null : pending;
    const classString = classNames(prefixCls, {
      [`${prefixCls}-pending`]: !!pending,
    }, className);
    const items = React.Children.map(children, (ele,idx) =>
      React.cloneElement(ele, {
        last: idx === children.length - 1,
      })
    );
    const pendingItem = (!!pending) ? (
      <TimelineItem pending={!!pending}>{pendingNode}</TimelineItem>
    ) : null;
    return (
      <ul {...restProps} className={classString}>
        {items}
        {pendingItem}
      </ul>
    );
  }
}

Timeline.defaultProps = defaultProps;
Timeline.propTypes = propTypes;

export default Timeline;
