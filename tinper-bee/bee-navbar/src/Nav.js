import classNames from 'classnames';
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import all from 'tinper-bee-core/lib/all';


// TODO: Should we expose `<NavItem>` as `<Nav.Item>`?

// TODO: This `bsStyle` is very unlike the others. Should we rename it?

// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
// Consider renaming or replacing them.

const propTypes = {
  /**
   * Marks the NavItem with a matching `eventKey` as active. Has a
   * higher precedence over `activeHref`.
   */
  activeKey: PropTypes.any,

  /**
   * Marks the child NavItem with a matching `href` prop as active.
   */
  activeHref: PropTypes.string,

  /**
   * NavItems are be positioned vertically.
   */
  stacked: PropTypes.bool,

  justified: all(
    PropTypes.bool,
    ({ justified, navbar }) => (
      justified && navbar ?
        Error('justified navbar `Nav`s are not supported') : null
    )
  ),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   * 	Any eventKey,
   * 	SyntheticEvent event?
   * )
   * ```
   */
  onSelect: PropTypes.func,


  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: PropTypes.bool,

  /**
   * Float the Nav to the right. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullRight: PropTypes.bool,

  /**
   * Float the Nav to the left. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullLeft: PropTypes.bool,
};

const defaultProps = {
  pullRight: false,
  pullLeft: false,
  clsPrefix: 'u-navbar',
};

const childContextTypes = {
  u_nav: PropTypes.object
};

class Nav extends React.Component {

  getChildContext() {
    const {selectedkey, onSelect} = this.props;
    return {
      u_nav: {
        selectedkey, onSelect
      }
    }
  }

  render() {
    const {
      onSelect,
      selectedkey,
      role: propsRole,
      pullRight,
      pullLeft,
      className,
      children,
      clsPrefix,
      ...props
    } = this.props;

    //const tabContainer = this.context.$bs_tabContainer;
    //const role = propsRole || (tabContainer ? 'tablist' : null);

    //const { activeKey, activeHref } = this.getActiveProps();
    delete props.activeKey; // Accessed via this.getActiveProps().
    delete props.activeHref; // Accessed via this.getActiveProps().


    const classes = {'u-nav':true,'u-navbar-nav':true};

    if(pullRight) {
        classes[`${clsPrefix}-right`] = true;
    }
    if(pullLeft) {
        classes[`${clsPrefix}-left`] = true;
    }

    //classes[prefix(navbarProps, 'nav')] = true;

    return (
      <ul
        {...props}
        className={classNames(className, classes)}
      >
       {children} 
      </ul>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.childContextTypes = childContextTypes;

export default Nav;
