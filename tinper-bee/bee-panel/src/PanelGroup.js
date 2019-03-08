import classNames from 'classnames';
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { createChainedFunction } from 'tinper-bee-core';


const propTypes = {
    //是否是手风琴效果
  accordion: PropTypes.bool,
  //激活的项
  activeKey: PropTypes.any,
  //默认的激活的项
  defaultActiveKey: PropTypes.any,
  //选中函数
  onSelect: PropTypes.func,
  role: PropTypes.string,
};

const defaultProps = {
  accordion: false,
  clsPrefix: 'u-panel-group'
};

// TODO: Use uncontrollable.

class PanelGroup extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: props.defaultActiveKey,
    };
  }

  handleSelect(key, e) {
    e.preventDefault();

    if (this.props.onSelect) {
      this.props.onSelect(key, e);
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({ activeKey: key });
  }

  render() {
    const {
      accordion,
      activeKey: propsActiveKey,
      className,
      children,
      defaultActiveKey,
      onSelect,
      style,
      clsPrefix,
      ...others
    } = this.props;


    let activeKey;
    if (accordion) {
      activeKey = propsActiveKey != null ?
        propsActiveKey : this.state.activeKey;
      others.role = others.role || 'tablist';
    }

    const classes = {};
    classes[`${clsPrefix}`] = true;

    return (
      <div
        {...others}
        className={classNames(className, classes)}
      >
        {React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
            return child;
            }
          const childProps = {
            style: child.props.style,
          };

          if (accordion) {
            Object.assign(childProps, {
              headerRole: 'tab',
              panelRole: 'tabpanel',
              collapsible: true,
              expanded: child.props.eventKey === activeKey,
              onSelect: createChainedFunction(
                this.handleSelect, child.props.onSelect
              )
            });
          }

          return cloneElement(child, childProps);
        })}
      </div>
    );
  }
}

PanelGroup.propTypes = propTypes;
PanelGroup.defaultProps = defaultProps;

export default PanelGroup;
