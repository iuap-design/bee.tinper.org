import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  role: PropTypes.string,
  href: PropTypes.string,
  skey: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number
  ]),
  onClick: PropTypes.func,
  eventKey: PropTypes.any,
  children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.node
  ]),
};

const defaultProps = {
  active: false,
  disabled: false,
};

const contextTypes = {
    u_nav: PropTypes.object
};


class NavItem extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick(e) {
    const { onSelect,selectedkey } = this.context.u_nav;

    if (this.props.disabled) {
      return;
    }

    if (onSelect) {
      onSelect(this.props.eventKey);
    }
  }

  
  render() {
    const { active,eventKey, disabled, skey, className, style,children, ...props } =
      this.props;
    const { selectedkey } = this.context.u_nav;

    let activeItem = (this.props.eventKey === selectedkey);

    let classes = {'active':activeItem,'disabled':disabled};

    let dom = props.href? (
      <li
        role="presentation"
        className={classNames(className, classes)}
        style={style}
        onClick = {this.handleClick}
      >
        <a
          {...props}
          disabled={disabled}
        >{children}</a>
        
      </li>):(<li
        role="presentation"
        className={classNames(className,classes)}
        style={style}
        key= {skey}
         onClick = {this.handleClick}
      >
        {children}
      </li>)
    return (
      dom
    );
  }
}


NavItem.contextTypes = contextTypes;
NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
