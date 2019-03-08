import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'bee-transition/build/Collapse';

const contextTypes = {
  u_navbar: PropTypes.shape({
    expanded: PropTypes.bool,
  }),
};

const defaultProps = {
    clsPrefix : 'u-navbar-collapse'
}
class NavbarCollapse extends React.Component {
  render() {
    const { children,clsPrefix, ...props } = this.props;
    const navbarProps = this.context.u_navbar;

    return (
      <Collapse in={navbarProps.expanded} {...props}>
        <div className={clsPrefix}>
          {children}
        </div>
      </Collapse>
    );
  }
}

NavbarCollapse.contextTypes = contextTypes;
NavbarCollapse.defaultProps = defaultProps;

export default NavbarCollapse;
