/**
* This source code is quoted from rc-tabs.
* homepage: https://github.com/react-component/tabs
*/
import React,{Component} from 'react';
import InkTabBarMixin from './InkTabBarMixin';
import ScrollableTabBarMixin from './ScrollableTabBarMixin';
import TabBarMixin from './TabBarMixin';
import createClass from 'create-react-class';

const ScrollableInkTabBar = createClass({
  mixins: [TabBarMixin, InkTabBarMixin, ScrollableTabBarMixin],

  render() {
    const inkBarNode = this.getInkBarNode();
    const tabs = this.getTabs();
    const scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }

});

export default ScrollableInkTabBar;
