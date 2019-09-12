/**
* This source code is quoted from rc-tabs.
* homepage: https://github.com/react-component/tabs
*/
import React from "react";
import classnames from 'classnames';

export default {
  getDefaultProps() {
    return {
      styles: {},
      tabIndex:'0'
    };
  },
  onTabClick(key) {
    // debugger
    this.props.onTabClick(key);
  },
  getTabs() {
    const props = this.props;
    const children = props.panels;
    const activeKey = props.activeKey;
    const rst = [];
    const clsPrefix = props.clsPrefix;

    React.Children.forEach(children, (child) => {
      if (!child) {
        return;
      }
      const key = child.key;
      let cls = activeKey === key ? `${clsPrefix}-tab-active` : '';
      cls += ` ${clsPrefix}-tab`;
      let events = {};
      if (child.props.disabled) {
        cls += ` ${clsPrefix}-tab-disabled`;
      } else {
        events = {
          onClick: this.onTabClick.bind(this, key),
        };
      }
      const ref = {};
      if (activeKey === key) {
        ref.ref = 'activeTab';
      }
      rst.push(<div
        role="tab"
        aria-disabled={child.props.disabled ? 'true' : 'false'}
        aria-selected={activeKey === key ? 'true' : 'false'}
        {...events}
        className={cls}
        key={key}
        {...ref}
      >
        {child.props.tab}
      </div>);
    });

    return rst;
  },
  getRootNode(contents) {
    const { clsPrefix, onKeyDown, className, extraContent, style, tabIndex, tabBarPosition } = this.props;
    const cls = classnames({
      [`${clsPrefix}-bar`]: 1,
      [className]: !!className,
    });
    const topOrBottom = (tabBarPosition === 'top' || tabBarPosition === 'bottom');
    const tabBarExtraContentStyle = topOrBottom ? { float: 'right' } : {};
    let newChildren = contents;
    if (extraContent) {
      newChildren = [
        React.cloneElement(
          <div
            style={tabBarExtraContentStyle}
            key="extra"
            className={`${clsPrefix}-extra-content`}
          >
            {extraContent}
          </div>
        ),
        React.cloneElement(contents)
      ];
      newChildren = topOrBottom ? newChildren : newChildren.reverse();
    }
    return (
      <div
        role="tablist"
        className={cls}
        tabIndex={tabIndex}
        ref="root"
        onKeyDown={onKeyDown}
        style={style}
      >
        {/* {extraContent ?
          (<div
            style={tabBarExtraContentStyle}
            key="extra"
            className={`${clsPrefix}-extra-content`}
          >
            {extraContent}
          </div>) : null} */}
        {newChildren}
      </div>);
  },
};
