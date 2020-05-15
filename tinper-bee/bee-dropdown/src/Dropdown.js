/**
* This source code is quoted from rc-dropdown.
* homepage: https://github.com/react-component/dropdown
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Trigger from 'bee-overlay/build/trigger';
import placements from './placement';
import PropTypes from 'prop-types';


const propTypes = {
  minOverlayWidthMatchTrigger: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  clsPrefix: PropTypes.string,
  children: PropTypes.any,
  transitionName: PropTypes.string,
  overlayClassName: PropTypes.string,
  animation: PropTypes.any,
  align: PropTypes.object,
  overlayStyle: PropTypes.object,
  placement: PropTypes.string,
  trigger: PropTypes.array,
  showAction: PropTypes.array,
  hideAction: PropTypes.array,
  getPopupContainer: PropTypes.func,
};

const defaultProps = {
    minOverlayWidthMatchTrigger: true,
    clsPrefix: 'u-dropdown',
    trigger: ['hover'],
    showAction: [],
    hideAction: [],
    overlayClassName: '',
    overlayStyle: {},
    defaultVisible: false,
    onVisibleChange() {
    },
    placement: 'bottomLeft',
};

const jadgeState = function (props) {
    if ('visible' in props) {
      return  props.visible;
    }
    return props.defaultVisible;
}

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            visible:jadgeState(this.props)
        };
        this.onClick = this.onClick.bind(this);
        this.onVisibleChange = this.onVisibleChange.bind(this);
        this.getMenuElement = this.getMenuElement.bind(this);
        this.getPopupDomNode = this.getPopupDomNode.bind(this);
        this.afterVisibleChange = this.afterVisibleChange.bind(this);

    }
    
  componentWillReceiveProps({ visible }) {
    if (visible !== undefined) {
      this.setState({
        visible,
      });
    }
  }

  onClick(e) {
    const props = this.props;
    const overlayProps = props.overlay.props;
    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
    if (!('visible' in props)) {
      this.setState({
        visible: false,
      });
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  }

  onVisibleChange(visible) {
    const props = this.props;
    if (!('visible' in props)) {
      this.setState({
        visible,
      });
    }
    props.onVisibleChange(visible);
  }

  getMenuElement() {
    const { overlay, clsPrefix } = this.props;

    return React.cloneElement(overlay, {
      prefixCls: `${clsPrefix}-menu`, 
      onClick: this.onClick,
    });
  }

  getPopupDomNode() {
    return this.refs.trigger.getPopupDomNode();
  }

  afterVisibleChange(visible) {
    if (visible && this.props.minOverlayWidthMatchTrigger) {
      const overlayNode = this.getPopupDomNode();
      const rootNode = ReactDOM.findDOMNode(this);
      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style['min-width'] = `${rootNode.offsetWidth}px`;
      }
    }
  }

  render() {
    const {
      clsPrefix,
      children,
      transitionName,
      animation,
      align,
      placement,
      getPopupContainer,
      showAction,
      hideAction,
      overlayClassName,
      overlayStyle,
      trigger,
      getDocument,
      disabled,
      delay,
      delayShow,
      delayHide,
      ...props,
    } = this.props;
    return (<Trigger
      {...props}
      clsPrefix={clsPrefix}
      ref="trigger"
      popupClassName={overlayClassName}
      popupStyle={overlayStyle}
      builtinPlacements={placements}
      action={trigger}
      showAction={showAction}
      hideAction={hideAction}
      popupPlacement={placement}
      popupAlign={align}
      popupTransitionName={transitionName}
      popupAnimation={animation}
      popupVisible={disabled?false:this.state.visible}
      afterPopupVisibleChange={this.afterVisibleChange}
      popup={this.getMenuElement()}
      onPopupVisibleChange={this.onVisibleChange}
      getPopupContainer={getPopupContainer}
      getDocument={getDocument}
      mouseEnterDelay={(delayShow && delayShow/1000) || (delay && delay/1000)}
      mouseLeaveDelay={(delayHide && delayHide/1000) || (delay && delay/1000)}
    >{children}</Trigger>);
  }
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
