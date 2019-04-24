import React from 'react';
import Button from 'bee-button';
import Icon from 'bee-icon';
import PropTypes from 'prop-types';

function noop() {
}

const propTypes = {
  className: PropTypes.string,
  leftArrowText: PropTypes.string,
  rightArrowText: PropTypes.string,
  moveToLeft: PropTypes.func,
  moveToRight: PropTypes.func,
  leftActive: PropTypes.boolean,
  rightActive: PropTypes.boolean,
}

const defaultProps = {
  leftArrowText: '',
  rightArrowText: '',
  moveToLeft: noop,
  moveToRight: noop,
};

class TransferOperation extends React.Component{

  render() {
    const {
      moveToLeft,
      moveToRight,
      leftArrowText,
      rightArrowText,
      leftActive,
      rightActive,
      className,
    } = this.props;

    const moveToLeftButton = (
      <Button size="sm" disabled={!leftActive} onClick={moveToLeft}>
        {<span><Icon type="uf-arrow-left" />{leftArrowText}</span>}
      </Button>
    );
    const moveToRightButton = (
      <Button size="sm" disabled={!rightActive} onClick={moveToRight}>
        {<span>{rightArrowText}<Icon type="uf-arrow-right" /></span>}
      </Button>
    );
    return (
      <div className={className}>
        {moveToLeftButton}
        {moveToRightButton}
      </div>
    );
  }
}

TransferOperation.propsType = propTypes;
TransferOperation.defaultProps = defaultProps;
export default TransferOperation;