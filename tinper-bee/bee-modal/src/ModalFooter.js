import classNames from 'classnames';
import React from 'react';
import { elementType } from 'tinper-bee-core';


const propTypes = {
  componentClass: elementType,
};

const defaultProps = {
  componentClass: 'div',
  clsPrefix: 'u-modal-footer',
};

class ModalFooter extends React.Component {
  render() {
    const { componentClass: Component, clsPrefix, className, ...props } = this.props;

    const classes = {};
    classes[`${clsPrefix}`] = true;

    return (
      <Component
        {...props}
        className={classNames(className, classes)}
      />
    );
  }
}

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
