/**
* This source code is quoted from rc-tabs.
* homepage: https://github.com/react-component/tabs
*/
import React from 'react';
import InkTabBarMixin from './InkTabBarMixin';
import SwipeableTabBarMixin from './SwipeableTabBarMixin';
import TabBarMixin from './TabBarMixin';
import createClass from 'create-react-class';

const SwipeableInkTabBar = createClass({
  mixins: [TabBarMixin, InkTabBarMixin, SwipeableTabBarMixin],

  getSwipeableTabs() {
    const props = this.props;
    const children = props.panels;
    const activeKey = props.activeKey;
    const rst = [];
    const clsPrefix = props.clsPrefix;

    const tabStyle = {
      display: 'flex',
      flex: `0 0 ${1 / props.pageSize * 100}%`,
    };

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
        style={tabStyle}
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

  render() {
    const inkBarNode = this.getInkBarNode();
    const tabs = this.getSwipeableTabs();
    const scrollbarNode = this.getSwipeBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  },
});

export default SwipeableInkTabBar;
