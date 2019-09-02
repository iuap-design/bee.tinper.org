import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Dnd from 'bee-dnd';
import Resizable from 're-resizable'

const propTypes = {
  /**
   * 传给dialog的classname
   */
  dialogClassName: PropTypes.string,
  contentStyle: PropTypes.object,

};

const defaultProps = {
    minHeight: 150,
    minWidth: 200,
    clsPrefix: 'u-modal',
    bounds:null
};

class ModalDialog extends React.Component {
  state = {
    draging:false,
    draged:false,
    original: {
      x: 0,
      y: 0
    },
    maxWidth: Number.MAX_SAFE_INTEGER,
    maxHeight: Number.MAX_SAFE_INTEGER
  };

  componentDidUpdate(){
    if(this.props.resizable){
      let { maxWidth, maxHeight } = this.getMaxSizesFromProps();
      if (maxWidth != this.state.maxWidth) {
        this.setState({
          maxWidth,
          maxHeight
        })
      }
    }
    
  }

  onStart = () => {
    let { draggable } = this.props;
    this.setState({
      draging:true
    })
    return draggable;
  }
  // 当ModalDialog留在可视区的宽度 < 50px 时，拖拽不生效
  onStop = (e, delta) => {
    let dialogWidth = this.modalDialog && this.modalDialog.offsetWidth;
    let clientWidth = e && e.target && e.target.clientWidth;
    if(delta.x > 0 && clientWidth - delta.x < 50){
      return
    }
    if(delta.x < 0 && dialogWidth + delta.x < 50){
      return
    }
    if(delta.y < 0 ){
      return
    }
    this.setState({
      draged:true,
      draging:false,
      original: {
        x: delta.x,
        y: delta.y
      }
    })
  }

  /* 开始resize */
  onResizeStart = (e, dir, elementRef) => {
    let { onResizeStart } = this.props;
    typeof onResizeStart === "function" && onResizeStart(e, dir, elementRef);
    this.props.clearCenteredCls && this.props.clearCenteredCls();
  };

  /* resizing */
  onResize = (e,direction,elementRef,delta ) => {
    let { onResize } = this.props;
    let { original } = this.state;
    /* resize 之前的值 */
    let originX = original.x;
    let originY = original.y;

    /* 移动的位移 */
    let moveW = delta.width;
    let moveH = delta.height;

    /* 移动的位移 */
    let x = null, y = null;

    /* 处理上边缘 */
    if (/left/i.test(direction)) {
      x = originX - moveW;
      y = originY;
      this.position = {x, y}

      /* 处理左边缘 */
    } else if (/top/i.test(direction)) {
      x = originX;
      y = originY - moveH;
      this.position = {x, y}
      
    } else {
      this.position = null;
    }

    if (x || y) {
      elementRef.style.transform = `translate(${x}px, ${y}px)`;
    }
    if (delta.height) {
      this.updateBodyH()
    }

    typeof onResize === "function" && onResize(e,direction,elementRef,delta);
  }


  /* resize 结束 */
  onResizeStop = (e, direction, elementRef, delta) => {
    let { onResizeStop } = this.props;

    if (this.position) {
      this.setState({
        original: this.position
      })
    }

    typeof onResizeStop === "function" && onResizeStop(e, direction, elementRef, delta);

  }

  /**
   * 更新Modal.Body的高度
   */
  updateBodyH = () => {
    let $resizable = ReactDOM.findDOMNode(this.resizable)
    let $header = $resizable.querySelector(".u-modal-header")
    let $body = $resizable.querySelector(".u-modal-body")
    let $footer = $resizable.querySelector(".u-modal-footer")
    
    let totalH = $resizable.style.height;
    totalH = Number(totalH.replace("px", ""))
    if ($header) {
      totalH -= $header.offsetHeight;
    }
    if ($footer) {
      totalH -= $footer.offsetHeight;
    }

    $body.style.height = `${totalH}px`

  }

  /**
   * 获取最大宽度和高度
   */
  getMaxSizesFromProps = () => {
    let backDropW = this.backdrop && this.backdrop.offsetWidth ? this.backdrop.offsetWidth : Number.MAX_SAFE_INTEGER;
    let backDropH = this.backdrop && this.backdrop.offsetHeight ? this.backdrop.offsetHeight : Number.MAX_SAFE_INTEGER;

    const maxWidth = typeof this.props.maxWidth === "undefined" ? backDropW : this.props.maxWidth;
    const maxHeight = typeof this.props.maxHeight === "undefined" ? backDropH : this.props.maxHeight;
    return { maxWidth, maxHeight };
  }

  handleWH = (value) => {
    let size = value;
    if (typeof value === "string" && value.endsWith("px")) {
      size = Number(value.replace("px", ""));
    } else if (typeof Number(value) === "number" && !Number.isNaN(Number(value))) {
      size = Number(value)
    }
    return size;
  }

  renderModalContent = () => {
    let { clsPrefix,children,resizable,contentStyle,minHeight,minWidth,resizeClassName } = this.props;
    let {  maxWidth,maxHeight } = this.state;
    if(!resizable){
      return (
        <div style={contentStyle} className={classNames([`${clsPrefix}-content`])} role="document" ref={ref => this.resize = ref}>
          {children}
        </div>
      )
    }
    return (
      <Resizable
        className={resizeClassName}
        ref={c => {
          if (c) {
            this.resizable = c;
          }
        }}
        onResizeStart={this.onResizeStart}
        onResize={this.onResize}
        onResizeStop={this.onResizeStop}
        minWidth={this.handleWH(minWidth)}
        minHeight={this.handleWH(minHeight)}
        maxWidth={this.handleWH(maxWidth)}
        maxHeight={this.handleWH(maxHeight)}
      >
        <div style={{...contentStyle, height: "100%"}} className={classNames([`${clsPrefix}-content`])} role="document" ref={ref => this.resize = ref}>
          {children}
        </div>
      </Resizable>
    )
  }

  render() {
    const {
      dialogClassName,
      className,
      clsPrefix,
      size,
      style,
      contentStyle,
      children,
      draggable,
      resizable,
      resizeClassName,
      minHeight,
      minWidth,
      bounds,
      ...props
    } = this.props;
    
    let {
      original,
      maxWidth,
      maxHeight,
      draging,
      draged
    } = this.state; 

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
    if(draging)dialogClasses[`${clsPrefix}-draging`]=true;

    if(draged)dialogClasses[`${clsPrefix}-draged`]=true;

    return (
      <div
        {...props}
        tabIndex="-1"
        role="dialog"
        style={modalStyle}
        ref={ref => this.backdrop = ref }
        className={classNames(className, uClassName)}
      >
        <div className={classNames(dialogClassName, dialogClasses)} style={ style } ref={ref => this.modalDialog = ref }>
          {
            draggable ? (
              <Dnd 
                handle=".dnd-handle" 
                cancel=".dnd-cancel" 
                bounds={bounds} //防止拖拽时，Header 被导航栏覆盖
                onStart={this.onStart} 
                onStop={this.onStop}
                position={original}
                list={[]}
              >
                {this.renderModalContent()}
              </Dnd>
            ) : this.renderModalContent()
          }
        </div>
      </div>
    );
  }
}

ModalDialog.propTypes = propTypes;
ModalDialog.defaultProps = defaultProps;

export default ModalDialog;
