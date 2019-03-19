import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  componentClass: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
  ]),

  /**
   * xs显示列数
   */
  xs: PropTypes.number,
  /**
   * sm显示列数
   */
  sm: PropTypes.number,
  /**
   * md显示列数
   */
  md: PropTypes.number,
  /**
   * lg显示列数
   */
  lg: PropTypes.number,
  /**
   * xs偏移列数
   */
  xsOffset: PropTypes.number,
  /**
   * sm偏移列数
   */
  smOffset: PropTypes.number,
  /**
   * md偏移列数
   */
  mdOffset: PropTypes.number,
  /**
   * lg偏移列数
   */
  lgOffset: PropTypes.number,
  /**
   * xs右偏移列数
   */
  xsPush: PropTypes.number,
  /**
   * sm右偏移列数
   */
  smPush: PropTypes.number,
  /**
   * md右偏移列数
   */
  mdPush: PropTypes.number,
  /**
   * lg右偏移列数
   */
  lgPush: PropTypes.number,
  /**
   * xs左偏移列数
   */
  xsPull: PropTypes.number,
  /**
   * sm左偏移列数
   */
  smPull: PropTypes.number,
  /**
   * md左偏移列数
   */
  mdPull: PropTypes.number,
  /**
   * lg左偏移列数
   */
  lgPull: PropTypes.number,
};

const defaultProps = {
  componentClass: 'div',
  clsPrefix: 'u-col'
};


const DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

class Col extends Component {
  render() {
    const { componentClass: Component, className, clsPrefix, ...others } = this.props;

    const tbClass = [];
/**
 * 对传入props做样式转化
 * @type {[type]}
 */
    DEVICE_SIZES.forEach(size => {
      function popProp(propSuffix, modifier) {
        const propName = `${size}${propSuffix}`;
        const propValue = others[propName];

        if (propValue != undefined && propValue != null) {
          tbClass.push( `${clsPrefix}-${size}${modifier}-${propValue}`);
        }

        delete others[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');

    });

    return (
      <Component
        className={classNames(tbClass, className)}
      { ...others }>
      { this.props.children }
      </Component>
    );
  }
}

Col.defaultProps = defaultProps;
Col.propTypes = propTypes;


export default Col;
