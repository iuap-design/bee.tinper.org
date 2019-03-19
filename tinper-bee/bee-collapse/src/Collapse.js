import classNames from 'classnames';
import css from 'dom-helpers/style';
import React from 'react';
import PropTypes from 'prop-types';
import {
	Transition
} from 'bee-transition';
import capitalize from './util/capitalize'
import {
	createChainedFunction
} from 'tinper-bee-core';

const MARGINS = {
	height: ['marginTop', 'marginBottom'],
	width: ['marginLeft', 'marginRight'],
};

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
	node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
	let value = elem[`offset${capitalize(dimension)}`];
	let margins = MARGINS[dimension];

	return (value +
		parseInt(css(elem, margins[0]), 10) +
		parseInt(css(elem, margins[1]), 10)
	);
}

const propTypes = {
	/**
	 * 是否显示折叠内容
	 */
	in : PropTypes.bool,

	/**
	 * 当折叠时，是否从DOM元素删除该组件
	 */
	unmountOnExit: PropTypes.bool,

	/**
	 * 当折叠内容初始化显示时，是否添加动态效果，默认不添加
	 */
	transitionAppear: PropTypes.bool,

	/**
	 * 设置超时时间，防止出现问题，可设置为>=动画时间
	 */
	timeout: PropTypes.number,

	/**
	 * 组件内容扩展之前调用的函数
	 */
	onEnter: PropTypes.func,
	/**
	 * 组件内容扩展时调用的函数
	 */
	onEntering: PropTypes.func,
	/**
	 * 组件内容扩展完成时调用的函数
	 */
	onEntered: PropTypes.func,
	/**
	 * 组件内容隐藏前调用的函数
	 * Callback fired before the component collapses
	 */
	onExit: PropTypes.func,
	/**
	 * 组件内容隐藏时调用的函数
	 */
	onExiting: PropTypes.func,
	/**
	 *组件内容隐藏后调用的函数
	 */
	onExited: PropTypes.func,

	/**
	 * 折叠区展开效果是纵向的还是横向的（ height或者width改变）
	 */
	dimension: PropTypes.oneOfType([
		PropTypes.oneOf(['height', 'width']),
		PropTypes.func,
	]),

	/**
	 * 返回当前组件元素动态显示的高度或者宽度，用户也可以自定义显示的区域大小
	 */
	getDimensionValue: PropTypes.func,

	/**
	 * ARIA role of collapsible element
	 */
	role: PropTypes.string,
};

const defaultProps = { in : false,
	timeout: 300,
	unmountOnExit: false,
	transitionAppear: false,

	dimension: 'height',
	getDimensionValue,
};

class Collapse extends React.Component {
		constructor(props, context) {
			super(props, context);

			this.handleEnter = this.handleEnter.bind(this);
			this.handleEntering = this.handleEntering.bind(this);
			this.handleEntered = this.handleEntered.bind(this);
			this.handleExit = this.handleExit.bind(this);
			this.handleExiting = this.handleExiting.bind(this);
		}

		/* -- Expanding -- */
		handleEnter(elem) {
			const dimension = this._dimension();
			elem.style[dimension] = '0';
		}

		handleEntering(elem) {
			const dimension = this._dimension();
			elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
		}

		handleEntered(elem) {
			const dimension = this._dimension();
			elem.style[dimension] = null;
		}

		/* -- Collapsing -- */
		handleExit(elem) {
			const dimension = this._dimension();
			elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
			triggerBrowserReflow(elem);
		}

		handleExiting(elem) {
			const dimension = this._dimension();
			elem.style[dimension] = '0';
		}

		_dimension() {
			return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
		}

		// for testing
		_getScrollDimensionValue(elem, dimension) {
				return `${elem[`scroll${capitalize(dimension)}`]}px`;
  }

  render() {
    const {
      onEnter, onEntering, onEntered, onExit, onExiting, className, ...props
    } = this.props;

    delete props.dimension;
    delete props.getDimensionValue;

    const handleEnter =
      createChainedFunction(this.handleEnter, onEnter);
    const handleEntering =
      createChainedFunction(this.handleEntering, onEntering);
    const handleEntered =
      createChainedFunction(this.handleEntered, onEntered);
    const handleExit =
      createChainedFunction(this.handleExit, onExit);
    const handleExiting =
      createChainedFunction(this.handleExiting, onExiting);

    const classes = {
      width: this._dimension() === 'width',
    };

    return (
      <Transition
        {...props}
        aria-expanded={props.role ? props.in : null}
        className={classNames(className, classes)}
        exitedClassName="collapse"
        exitingClassName="collapsing"
        enteredClassName="collapse in"
        enteringClassName="collapsing"
        onEnter={handleEnter}
        onEntering={handleEntering}
        onEntered={handleEntered}
        onExit={handleExit}
        onExiting={handleExiting}
      />
    );
  }
}

Collapse.propTypes = propTypes;
Collapse.defaultProps = defaultProps;

export default Collapse;