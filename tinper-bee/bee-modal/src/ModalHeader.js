import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { createChainedFunction } from 'tinper-bee-core';



const propTypes = {

  /**
   * 是否显示关闭按钮
   */
  closeButton: PropTypes.bool,

  /**
   * 关闭时的钩子函数
   */
  onHide: PropTypes.func,
  /**
   * 自定义关闭按钮的钩子函数
   */
  renderCloseButton: PropTypes.func,
  /**
   * 自定义关闭按钮的 props
   */
  closeButtonProps: PropTypes.object
};

const defaultProps = {
  'aria-label': 'Close',
  closeButton: false,
  clsPrefix: 'u-modal-header'
};

const contextTypes = {
  $u_modal: PropTypes.shape({
    onHide: PropTypes.func,
  }),
};

class ModalHeader extends React.Component {
  render() {
    const {
      'aria-label': label,
      closeButton,
      onHide,
      className,
      clsPrefix,
      children,
      renderCloseButton,
      closeButtonProps,
      ...props
    } = this.props;

    const modal = this.context.$u_modal;
    const classes = {};
    classes[`${clsPrefix}`] = true;
    classes['dnd-handle'] = true;

    let closeBtnDom = (
      <button
        {...closeButtonProps}
        type="button"
        className="u-close dnd-cancel"
        aria-label={label}
        onClick={createChainedFunction(modal.onHide, onHide)}
      >
        {renderCloseButton ? renderCloseButton() : 
          <span aria-hidden="true">
            <i className='uf uf-close'/>
          </span>
        }
      </button>
    )
    return (
      <div
        {...props}
        className={classNames(className, classes)}
      >
        {closeButton && closeBtnDom}

        {children}
      </div>
    );
  }
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;
ModalHeader.contextTypes = contextTypes;

export default ModalHeader;
