import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from 'bee-icon';

const propTypes = {
    duration: PropTypes.number,
    onClose: PropTypes.func,
    children: PropTypes.any,
    color: PropTypes.oneOf(['info', 'success', 'danger', 'warning', 'light', 'dark', 'news', 'infolight', 'successlight', 'dangerlight', 'warninglight']),
    title: PropTypes.any
};

function noop() {}

const defaultProps = {
    onEnd: noop,
    onClose: noop,
    duration: 4.5,
    closable: true
}

class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.clearCloseTimer = this.clearCloseTimer.bind(this);
        this.close = this.close.bind(this);
    }

  componentDidMount() {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  close() {
    this.clearCloseTimer();
    this.props.onClose();
  }

  render() {
    const { closable, clsPrefix, className, style, children, color, title } = this.props;
    const componentClass = `${clsPrefix}-notice`;
    const classes = {
      [`${componentClass}`]: 1,
      [`${componentClass}-closable`]: closable,
      [className]: !!className,
    };
    if(color) {
        classes[`${componentClass}-${color}`] = true;
    }
    return (
      <div className={classNames(classes)} style={style} onClick={ this.close }>
        <div className={`${componentClass}-content`}>
            {title && (<div className={`${componentClass}-title`}>{title}</div>)}
            <div className={`${componentClass}-description`}>
                {children}
            </div>
        </div>
        {closable ?
          <a tabIndex="0" onClick={this.close} className={`${componentClass}-close`}>
            <span className={`${componentClass}-close-x`}><Icon type="uf-close"/></span>
          </a> : null
        }
      </div>
    );
  }
};

Notice.propTypes = propTypes;
Notice.defaultProps = defaultProps;

export default Notice;
