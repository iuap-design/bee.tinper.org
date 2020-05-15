import classNames from 'classnames';
import React from 'react';
import { elementType } from 'tinper-bee-core';


const propTypes = {
  componentClass: elementType,
};

const defaultProps = {
  componentClass: 'h4',
  clsPrefix: 'u-modal-title'
};

class ModalTitle extends React.Component {
  render() {
    const {
            componentClass: Component,
            className,
            clsPrefix,
            ...props } = this.props;


    const classes = {};
    classes[`${clsPrefix}`] = true;
    classes['clearfix'] = true;

    return (
      <Component
        {...props}
        className={classNames(className, classes)}
      />
    );
  }
}

ModalTitle.propTypes = propTypes;
ModalTitle.defaultProps = defaultProps;

export default ModalTitle;
