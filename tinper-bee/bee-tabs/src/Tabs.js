/**
* This source code is quoted from rc-tabs.
* homepage: https://github.com/react-component/tabs
*/
import React from "react";
import KeyCode from "./KeyCode";
import TabPane from "./TabPane";
import classnames from "classnames";
import TabContent from "./TabContent";
import ScrollableInkTabBar from "./ScrollableInkTabBar";
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

function noop() {}

function getDefaultActiveKey(props) {
  let activeKey;
  React.Children.forEach(props.children, child => {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

const Tabs = createClass({
  propTypes: {
    destroyInactiveTabPane: PropTypes.bool,
    renderTabBar: PropTypes.func.isRequired,
    renderTabContent: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    children: PropTypes.any,
    clsPrefix: PropTypes.string,
    className: PropTypes.string,
    tabBarPosition: PropTypes.string,
    style: PropTypes.object,
    tabBarStyle: PropTypes.oneOf([
      "simple",
      "fill",
      "primary",
      "upborder",
      "fade",
      "downborder",
      "trapezoid"
    ])
  },

  getDefaultProps() {
    return {
      clsPrefix: "u-tabs",
      destroyInactiveTabPane: false,
      onChange: noop,
      tabBarPosition: "top",
      style: {},
      renderTabContent: () => <TabContent />,
      renderTabBar: () => <ScrollableInkTabBar />,
      tabBarStyle: "simple",
        animated: true
    };
  },

  getInitialState() {
    const props = this.props;
    let activeKey;
    if ("activeKey" in props) {
      activeKey = props.activeKey;
    } else if ("defaultActiveKey" in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }
    return {
      activeKey
    };
  },

  componentWillReceiveProps(nextProps) {
    if ("activeKey" in nextProps) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }
  },

  onTabClick(activeKey) {
    if (this.tabBar.props.onTabClick) {
      this.tabBar.props.onTabClick(activeKey);
    }
    this.setActiveKey(activeKey);
  },

  onNavKeyDown(e) {
    const eventKeyCode = e.keyCode;
    if (eventKeyCode === KeyCode.RIGHT || eventKeyCode === KeyCode.DOWN) {
      e.preventDefault();
      const nextKey = this.getNextActiveKey(true);
      this.onTabClick(nextKey);
    } else if (eventKeyCode === KeyCode.LEFT || eventKeyCode === KeyCode.UP) {
      e.preventDefault();
      const previousKey = this.getNextActiveKey(false);
      this.onTabClick(previousKey);
    }
  },

  setActiveKey(activeKey) {
    if (this.state.activeKey !== activeKey) {
      if (!("activeKey" in this.props)) {
        this.setState({
          activeKey
        });
      }
      this.props.onChange(activeKey);
    }
  },

  getNextActiveKey(next) {
    const activeKey = this.state.activeKey;
    const children = [];
    React.Children.forEach(this.props.children, c => {
      if (c && !c.props.disabled) {
        if (next) {
          children.push(c);
        } else {
          children.unshift(c);
        }
      }
    });
    const length = children.length;
    let ret = length && children[0].key;
    children.forEach((child, i) => {
      if (child.key === activeKey) {
        if (i === length - 1) {
          ret = children[0].key;
        } else {
          ret = children[i + 1].key;
        }
      }
    });
    return ret;
  },

  render() {
    const props = this.props;
    const {
      clsPrefix,
      tabBarPosition,
      className,
      renderTabContent,
      renderTabBar,
      tabBarStyle,
        extraContent,
        animated,
        tabIndex,
    } = props;

    const cls = classnames({
      [clsPrefix]: true,
      [`${clsPrefix}-${tabBarPosition}`]: true,
      [className]: !!className,
      [`${clsPrefix}-${tabBarStyle}`]: true
    });

    this.tabBar = renderTabBar();
    const contents = [
      React.cloneElement(this.tabBar, {
        clsPrefix,
        key: "tabBar",
        onKeyDown: this.onNavKeyDown,
        tabBarPosition,
          extraContent,
        onTabClick: this.onTabClick,
        panels: props.children,
        activeKey: this.state.activeKey,
        tabIndex
      }),
      React.cloneElement(renderTabContent(), {
        clsPrefix,
        tabBarPosition,
          animated,
        activeKey: this.state.activeKey,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        children: props.children,
          // style: { height: '100%' },
        onChange: this.setActiveKey,
        key: "tabContent"
      })
    ];
    if (tabBarPosition === "bottom") {
      contents.reverse();
    }
    return (
      <div className={cls} style={props.style} >
        {contents}
      </div>
    );
  }
});

Tabs.TabPane = TabPane;

export  {Tabs};
