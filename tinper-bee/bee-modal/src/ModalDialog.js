import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Dnd from 'bee-dnd';

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
  onStart = () => {
    let { draggable } = this.props;
    return draggable;
  }
  render() {
    const { dialogClassName, className, clsPrefix, size, style, contentStyle, children,draggable, ...props } =
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
    if(draggable){
      dialogClasses[`${clsPrefix}-draggable`] = true;
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
          <Dnd handle=".dnd-handle" cancel=".dnd-cancel" onStart={this.onStart} onStop={this.onStop}>
            <div style={contentStyle} className={classNames([`${clsPrefix}-content`])} role="document">
              {children}
            </div>
          </Dnd>
        </div>
      </div>
    );
  }
}

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

export default ModalDialog;
