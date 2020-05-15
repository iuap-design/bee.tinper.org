import React from 'react';
import warning from 'warning';
import PropTypes from 'prop-types';
import { isVertical } from './utils';

export default class TabBarTabsNode extends React.Component {
  constructor(props){
    super(props);
  }
  onTabClick(key) {
    this.props.onTabClick(key);
  }
  render() {
    const {
      panels: children,
      activeKey,
      clsPrefix,
      tabBarGutter,
      saveRef,
      tabBarPosition,
      renderTabBarNode,
      direction,
    } = this.props;
    const rst = [];

    React.Children.forEach(children, (child, index) => {
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
        ref.ref = saveRef('activeTab');
      }

      const gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;

      const marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';
      const style = {
        [isVertical(tabBarPosition) ? 'marginBottom' : marginProperty]: gutter,
      };
      warning('tab' in child.props, 'There must be `tab` property on children of Tabs.');

      let node = (
        <div
          role="tab"
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          aria-selected={activeKey === key ? 'true' : 'false'}
          {...events}
          className={cls}
          key={key}
          style={style}
          {...ref}
          nid={child.props.nid}
          uitype={child.props.uitype}
          nodekey={key}
        >
          {child.props.tab}
        </div>
      );

      if (renderTabBarNode) {
        node = renderTabBarNode(node);
      }

      rst.push(node);
    });

    return (
      <div ref={saveRef('navTabsContainer')}>
        {rst}
      </div>
    );
  }
}

TabBarTabsNode.propTypes = {
  activeKey: PropTypes.string,
  panels: PropTypes.node,
  clsPrefix: PropTypes.string,
  tabBarGutter: PropTypes.number,
  onTabClick: PropTypes.func,
  saveRef: PropTypes.func,
  renderTabBarNode: PropTypes.func,
  tabBarPosition: PropTypes.string,
  direction: PropTypes.string,
};

TabBarTabsNode.defaultProps = {
  panels: [],
  clsPrefix: [],
  tabBarGutter: null,
  onTabClick: () => { },
  saveRef: () => { },
};
