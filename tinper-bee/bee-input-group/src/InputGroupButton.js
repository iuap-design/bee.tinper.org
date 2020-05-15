import classNames from 'classnames';
import React from 'react';

const defaultProps = {
  clsPrefix: 'u-input-group-btn'
}
class InputGroupButton extends React.Component {
  render() {
    const { className,clsPrefix, ...others } = this.props;

    return (
      <span
        {...others}
        className={classNames(className, clsPrefix)}
      />
    );
  }
}
InputGroupButton.defaultProps = defaultProps;
export default InputGroupButton;
