import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * 如果设置成true渲染`span` 而不是 `a`
   */
  active: PropTypes.bool,
  /**
   * `href` a标签href
   */
  href: PropTypes.string,
  /**
   * `title`  a标签title
   */
  title: PropTypes.node,
};

const defaultProps = {
  active: false,
};

class BreadcrumbItem extends React.Component {
  render() {
    const { active, href, title, target, className, ...props } = this.props;

    const linkProps = { href, title };

    return (
      <li className={classNames(className, { active })}>
        {href ?
          
          <a {...props} {...linkProps} />:
          <span {...props} />
        }
      </li>
    );
  }
}

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
