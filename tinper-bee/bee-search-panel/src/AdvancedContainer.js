import React from 'react';

class AdvancedContainer extends React.Component {
  static show = true;
  render(){return this.props.children}
}

export default AdvancedContainer;
