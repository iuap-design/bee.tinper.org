/**
* This source code is quoted from rc-tabs.
* homepage: https://github.com/react-component/tabs
*/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import InkTabBarMixin from './InkTabBarMixin';
import ScrollableTabBarMixin from './ScrollableTabBarMixin';
import TabBarMixin from './TabBarMixin';
import createClass from 'create-react-class';

const ScrollableInkTabBar = createClass({
  mixins: [TabBarMixin, InkTabBarMixin, ScrollableTabBarMixin],
  componentDidMount(){
    ReactDOM.findDOMNode(this).addEventListener('DNDclick', (e) => {
      if(e && e.detail && e.detail.key){
        this.onTabClick.call(this, e.detail.key)
      }
    });
  },
  componentWillUnmount(){
    ReactDOM.findDOMNode(this).removeEventListener('DNDclick',(e) => {
      if(e && e.detail && e.detail.key){
        this.onTabClick.call(this, e.detail.key)
      }
    });
  },
  render() {
    const inkBarNode = this.getInkBarNode();
    const tabs = this.getTabs();
    const scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }

});

export default ScrollableInkTabBar;
