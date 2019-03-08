import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';


const defaultProps = {
   clsPrefix : "u-navbar-side-container",
   sideActive: false
}

class NavSideContainer extends React.Component {
  render() {
    const { className, children,clsPrefix,sideActive,expanded, ...props } = this.props;

    //const navbarProps = this.context.u_navbar;

    return (
      <div  className={classnames(className, clsPrefix,expanded && 'expanded')}>
        {children}
      </div>
    );
  }
}



NavSideContainer.defaultProps = defaultProps;

export default NavSideContainer;
