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
import Icon from 'bee-icon';

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
      "trapezoid",
      "editable-card"
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
    this.props.onTabClick && this.props.onTabClick(activeKey);
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
  onPrevClick(e){
    this.props.onPrevClick && this.props.onPrevClick(e)
  },
  onNextClick(e){
    this.props.onNextClick && this.props.onNextClick(e)
  },
  createNewTab(targetKey){
    const { onEdit } = this.props;
    if (onEdit) {
      onEdit(targetKey, 'add');
    }
  },
  removeTab(targetKey, e){
    e.stopPropagation();
    if (!targetKey) {
      return;
    }

    const { onEdit } = this.props;
    if (onEdit) {
      onEdit(targetKey, 'remove');
    }
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
      children,
      hideAdd,
    } = props;

    const cls = classnames({
      [clsPrefix]: true,
      [`${clsPrefix}-${tabBarPosition}`]: true,
      [className]: !!className,
      [`${clsPrefix}-${tabBarStyle}`]: true
    });

    this.tabBar = renderTabBar();

    // only card type tabs can be added and closed
    let childrenWithClose = [],
        tabBarExtraContent = extraContent;
    if (tabBarStyle === 'editable-card') {
      childrenWithClose = [];
      React.Children.forEach(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        let { closable } = child.props;
        closable = typeof closable === 'undefined' ? true : closable;
        const closeIcon = closable ? (
          <Icon
            type="uf-close"
            className={`${clsPrefix}-close-x`}
            onClick={e => this.removeTab(child.key, e)}
          />
        ) : null;
        childrenWithClose.push(
          React.cloneElement(child, {
            tab: (
              <div className={closable ? undefined : `${clsPrefix}-tab-unclosable`}>
                {child.props.tab}
                {closeIcon}
              </div>
            ),
            key: child.key || index,
          }),
        );
      });
      // Add new tab handler
      if (!hideAdd) {
        tabBarExtraContent = (
          <span>
            <Icon type="uf-add-s-o" className={`${clsPrefix}-new-tab`} onClick={this.createNewTab} />
            {extraContent}
          </span>
        );
      }
    }

    const contents = [
      React.cloneElement(this.tabBar, {
        clsPrefix,
        key: "tabBar",
        onKeyDown: this.onNavKeyDown,
        tabBarPosition,
        extraContent: tabBarExtraContent,
        onTabClick: this.onTabClick,
        panels: childrenWithClose.length > 0 ? childrenWithClose : children,
        activeKey: this.state.activeKey,
        tabIndex,
        onPrevClick: this.onPrevClick,
        onNextClick: this.onNextClick,
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
