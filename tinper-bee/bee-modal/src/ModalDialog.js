import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * 传给dialog的classname
   */
  dialogClassName: PropTypes.string,
  contentStyle: PropTypes.object,

};

const defaultProps = {
    clsPrefix: 'u-modal'
};

class ModalDialog extends React.Component {
  render() {
    const { dialogClassName, className, clsPrefix, size, style, contentStyle, children, ...props } =
      this.props;
    // const [bsProps, elementProps] = splitBsProps(props);
    //
     const uClassName = {
         [`${clsPrefix}`]: true
     };


    const modalStyle = { display: 'block'};


    const dialogClasses = {
      [uClassName]: false,
      [`${clsPrefix}-dialog`]: true
    };
    if(size){
        dialogClasses[`${clsPrefix}-${size}`] = true;
    }

    return (
      <div
        {...props}
        tabIndex="-1"
        role="dialog"
        style={modalStyle}
        className={classNames(className, uClassName)}
      >
        <div className={classNames(dialogClassName, dialogClasses)} style={ style }>
          <div style={contentStyle} className={classNames([`${clsPrefix}-content`])} role="document">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

export default ModalDialog;
