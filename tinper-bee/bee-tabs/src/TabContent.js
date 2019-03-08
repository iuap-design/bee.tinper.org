/**
* This source code is quoted from rc-tabs.
* homepage: https://github.com/react-component/tabs
*/
import React from 'react';
import classnames from 'classnames';
import {
  getTransformByIndex,
  getActiveIndex,
  getTransformPropValue,
  getMarginStyle,
} from './utils';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';

const TabContent = createClass({
  propTypes: {
    animated: PropTypes.bool,
    animatedWithMargin: PropTypes.bool,
    clsPrefix: PropTypes.string,
    children: PropTypes.any,
    activeKey: PropTypes.string,
    style: PropTypes.any,
    tabBarPosition: PropTypes.string,
  },
  getDefaultProps() {
    return {
      animated: true,
    };
  },
  getTabPanes() {
    const props = this.props;
    const activeKey = props.activeKey;
    const children = props.children;
    const newChildren = [];

    React.Children.forEach(children, (child) => {
      if (!child) {
        return;
      }
      const key = child.key;
      const active = activeKey === key;
      newChildren.push(React.cloneElement(child, {
        active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootclsPrefix: props.clsPrefix,
      }));
    });

    return newChildren;
  },
  render() {
    const { props } = this;
    const {
      clsPrefix, children, activeKey,
      tabBarPosition, animated, animatedWithMargin,
    } = props;
    let { style } = props;
    const classes = classnames({
      [`${clsPrefix}-content`]: true,
      [animated ?
        `${clsPrefix}-content-animated` :
        `${clsPrefix}-content-no-animated`]: true,
    });
    if (animated) {
      const activeIndex = getActiveIndex(children, activeKey);
      if (activeIndex !== -1) {
        const animatedStyle = animatedWithMargin ?
                getMarginStyle(activeIndex, tabBarPosition) :
                getTransformPropValue(getTransformByIndex(activeIndex, tabBarPosition));
        style = {
          ...style,
          ...animatedStyle,
        };
      } else {
        style = {
          ...style,
          display: 'none',
        };
      }
    }
    return (
      <div
        className={classes}
        style={style}
      >
        {this.getTabPanes()}
      </div>
    );
  },
});

export default TabContent;
