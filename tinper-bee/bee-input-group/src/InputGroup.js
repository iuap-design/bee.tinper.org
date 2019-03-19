import classnames from 'classnames';
import React from 'react';
import InputGroupAddon from 'bee-input-group-addon';
import InputGroupButton from './InputGroupButton';

const defaultProps = {
  clsPrefix: 'u-input-group',
  simple: false
}

class InputGroup extends React.Component {
  render() {
    const { className,clsPrefix, simple,...others } = this.props;

    return (
      <span
        {...others}
        className={classnames(className, clsPrefix, simple&&'simple')}
      />
    );
  }
}

/**
  * 将InputGroupAddon与InputGroupButton组件作为InputGroup的附属组件
  */
InputGroup.Addon = InputGroupAddon;
InputGroup.Button = InputGroupButton;
InputGroup.defaultProps = defaultProps;
export default InputGroup;