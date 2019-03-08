import classNames from 'classnames';
import React from 'react';
import { elementType } from 'tinper-bee-core';


const propTypes = {
  componentClass: elementType,
};

const defaultProps = {
  componentClass: 'div',
  clsPrefix: 'u-modal-body'
};

class ModalBody extends React.Component {
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

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
