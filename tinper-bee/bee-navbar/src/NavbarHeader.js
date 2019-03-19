import classnames from 'classnames';
import React from 'react';


const defaultProps = {
    clsPrefix: 'u-navbar-header'
}

class NavbarHeader extends React.Component {
  render() {
    const { className,clsPrefix, ...props } = this.props;

    return (
      <div {...props} className={classnames(className, clsPrefix)} />
    );
  }
}

NavbarHeader.defaultProps = defaultProps;

export default NavbarHeader;
