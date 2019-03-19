import classnames from 'classnames';
import React from 'react';

import BreadcrumbItem from './BreadcrumbItem';

const defaultProps = {
	clsPrefix: 'u-breadcrumb'
}
class Breadcrumb extends React.Component {
  render() {
    const { className,clsPrefix, ...others } = this.props;

    return (
      <ol
        {...others}
        className={classnames(className, clsPrefix)}
      />
    );
  }
}

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.defaultProps = defaultProps;
export default Breadcrumb;
