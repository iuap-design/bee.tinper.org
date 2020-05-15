import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';

const propTypes = {
  onClick: PropTypes.func,
  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  show: PropTypes.bool,
  children: PropTypes.node,
};

const contextTypes = {
  u_navbar: PropTypes.shape({
    expanded: PropTypes.bool,
    onToggle: PropTypes.func,
  }),
};

const defaultProps = {
    clsPrefix: 'u-navbar-toggle',
    show:false
}

class NavbarToggle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggleState:false
    }
    //this.handleRender = this.handleRender.bind(this);
  }

  handleClick() {
      const {expanded,onToggle } = this.context.u_navbar;
      this.setState({toggleState:!this.state.toggleState});
      if (onToggle) {
        onToggle(!expanded);
      }
  }

  render() {
    const { onClick, className, children,clsPrefix, show,...props } = this.props;
    //const navbarProps = this.context.u_navbar || { bsClass: 'navbar' };
    //console.log(navbarProps.onToggle, navbarProps.expanded);

    const buttonProps = {
      type: 'button',
      ...props,
      onClick: createChainedFunction(onClick, this.handleClick.bind(this)),
      className: classNames(
        className,
        clsPrefix,
        show && 'show',
      )
    };

    if (children) {
      return (
        <button {...buttonProps}>
          {children}
        </button>
      );
    }
    //当show存在时，渲染左侧静态面包按钮
    return (
      <div>

          {!show && (
            <button {...buttonProps} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          )}
      </div>
    )
    
      
  }
}

NavbarToggle.propTypes = propTypes;
NavbarToggle.defaultProps = defaultProps;
NavbarToggle.contextTypes = contextTypes;

export default NavbarToggle;
