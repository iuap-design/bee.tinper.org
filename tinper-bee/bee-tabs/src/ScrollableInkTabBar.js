/**
* This source code is quoted from rc-tabs.
* homepage: https://github.com/react-component/tabs
*/
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import InkTabBarNode from './InkTabBarNode';
import TabBarTabsNode from './TabBarTabsNode';
import TabBarRootNode from './TabBarRootNode';
import ScrollableTabBarNode from './ScrollableTabBarNode';
import SaveRef from './SaveRef';

export default class ScrollableInkTabBar extends React.Component {
  componentDidMount(){
    ReactDOM.findDOMNode(this).addEventListener('DNDclick', (e) => {
      if(e && e.detail && e.detail.key){
        this.onTabClick.call(this, e.detail.key)
      }
    });
  }
  componentWillUnmount(){
    ReactDOM.findDOMNode(this).removeEventListener('DNDclick',(e) => {
      if(e && e.detail && e.detail.key){
        this.onTabClick.call(this, e.detail.key)
      }
    });
  }
  render() {
    const { children: renderTabBarNode, ...restProps } = this.props;
    return (
      <SaveRef>
        {(saveRef, getRef) => (
          <TabBarRootNode saveRef={saveRef} {...restProps}>
            <ScrollableTabBarNode saveRef={saveRef} getRef={getRef} {...restProps}>
              <TabBarTabsNode saveRef={saveRef} renderTabBarNode={renderTabBarNode} {...restProps} />
              <InkTabBarNode saveRef={saveRef} getRef={getRef} {...restProps} />
            </ScrollableTabBarNode>
          </TabBarRootNode>
        )}
      </SaveRef>
    );
  }
}

ScrollableInkTabBar.propTypes = {
  children: PropTypes.func,
};
