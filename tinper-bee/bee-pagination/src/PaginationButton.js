import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  eventKey: PropTypes.any,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  componentClass: 'a',
  active: false,
  disabled: false
};

class PaginationButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { disabled, onSelect, eventKey } = this.props;

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  }

  render() {
    const {
      componentClass: Component,
      active,
      disabled,
      onClick,
      eventKey,
      className,
      style,
      iconBtn,
      ...props,
    } = this.props;

   
    delete props.onSelect;
    return (
      <li
        className={classNames(className, { active, disabled,iconBtn})}
        style={style}
      >
        <Component
          {...props}
          disabled={disabled}
          onClick={ this.handleClick }
        />
      </li>
    );
  }
}

PaginationButton.propTypes = propTypes;
PaginationButton.defaultProps = defaultProps;

export default PaginationButton;
