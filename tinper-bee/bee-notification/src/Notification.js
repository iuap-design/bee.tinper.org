import React, {  Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Animate from 'bee-animate';
import createChainedFunction from 'tinper-bee-core/lib/createChainedFunction';
import ownerDocument from 'bee-overlay/build/utils/ownerDocument';
import addEventListener from 'bee-overlay/build/utils/addEventListener';
import classnames from 'classnames';
import Notice from './Notice';

let seed = 0;
const now = Date.now();

function getUuid() {
  return `uNotification_${now}_${seed++}`;
}

var propTypes = {
    show: PropTypes.bool,
    clsPrefix: PropTypes.string,
    style: PropTypes.object,
    position: PropTypes.oneOf(['topRight', 'bottomRight', '']),
    transitionName: PropTypes.string,
    keyboard: PropTypes.bool,// 按esc键是否关闭notice
    onEscapeKeyUp: PropTypes.func,// 设置esc键特殊钩子函数
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

var defaultProps = {
    clsPrefix: 'u-notification',
    animation: 'fade',
    keyboard: true,
    position: 'topRight'
}

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
             notices: []
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);

    }

    componentDidMount() {
      // 给document绑定keyup事件
      let doc = ownerDocument(this);
      this._onDocumentKeyupListener =
        addEventListener(doc, 'keyup', this.handleDocumentKeyUp);
    }

    componentWillUnmount() {
      this._onDocumentKeyupListener.remove();
    }

    getTransitionName() {
        const props = this.props;
        let transitionName = props.transitionName;
        if (!transitionName && props.animation) {
          transitionName = `${props.clsPrefix}-${props.animation}`;
        }
        return transitionName;
      }

  add(notice) {
    const key = notice.key = notice.key || getUuid();
    this.setState(previousState => {
      const notices = previousState.notices;
      if (!notices.filter(v => v.key === key).length) {
        return {
          notices: notices.concat(notice),
        };
      }
    });
  }

  remove(key) {
    this.setState(previousState => {
      return {
        notices: previousState.notices.filter(notice => notice.key !== key),
      };
    });
  }

  /**
   * 处理绑定在document上的keyup事件
   */
  handleDocumentKeyUp = (e) => {
    if (this.props.keyboard && e.keyCode === 27 && this.state.notices.length) {
      this.setState(previousState => {
        previousState.notices.shift()
        return {
          notices: previousState.notices,
        };
      });
      if (this.props.onEscapeKeyUp) {
        this.props.onEscapeKeyUp(e);
      }
    }
  }

  render() {
    const {
        clsPrefix,
        className,
        position,
        style,
    } = this.props;
    const noticeNodes = this.state.notices.map((notice) => {
      const onClose = createChainedFunction(this.remove.bind(this, notice.key), notice.onClose);
      return (<Notice
        clsPrefix={clsPrefix}
        {...notice}
        onClose={onClose}
      >
        {notice.content}
      </Notice>);
    });
    const classes = {
      [clsPrefix]: 1,
      [className]: !!className,
    };
    if(position) {
        classes[`${clsPrefix}-${position}`] = !! position;
    }

    return (
        <div className={classnames(className,classes)} style={style}>
          <Animate transitionName={this.getTransitionName()}>{noticeNodes}</Animate>
        </div>
    );
  }
};

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

Notification.newInstance = function newNotificationInstance(properties, callback) {
  if (typeof callback !==  'function') {
    console.error('You must introduce callback as the second parameter of Notification.newInstance().')
    return
  }
  const props = properties || {};
  const div = document.createElement('div');
  document.body.appendChild(div);

  let called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice(key) {
        notification.remove(key);
      },
      component: notification,
      destroy() {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
      },
    });
  }
  ReactDOM.render(<Notification {...props} ref={ref} />, div);

};



export default Notification;
