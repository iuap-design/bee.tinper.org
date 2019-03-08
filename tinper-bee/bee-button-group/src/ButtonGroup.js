import React, {Component} from 'react'
import classNames from 'classnames';
import Button from 'bee-button';
import PropTypes from 'prop-types';

const propTypes = {
    /**
     * 是否垂直排列
     */
    vertical: PropTypes.bool,
    /**
     * 是否对齐
     */
    justified: PropTypes.bool,

    /**
     * 垂直时是否为块状元素
     */
    block: PropTypes.bool,
    /**
     * 传入数组替代button
     */
    list: PropTypes.array
};

const defaultProps = {
    block: false,
    justified: false,
    vertical: false,
    list: []
};

const clsPrefix = "u-button-group";

class ButtonGroup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeKey: ''
        }
    }

    handleItemClick = (key, onClick) => (e) => {
        this.setState({
            activeKey: key
        })
        onClick && onClick(e);
    }
    render() {
        const {block, justified, vertical, className, list, ...others} = this.props;
        const tbClass = {
            [`${clsPrefix}`]: vertical ? false : true,
            [`${clsPrefix}-block`]: vertical ? block : false,
            [`${clsPrefix}-vertical`]: vertical,
            [`${clsPrefix}-justified`]: justified
        };
        if(list.length === 0){
            return (
                <div
                    {...others}
                    className={classNames(tbClass, className)}
                >
                    { this.props.children }
                </div>
            );
        }

        return (
            <div
                {...others}
                className={classNames(tbClass, className)}
            >
                {
                    list.map((item) => {
                        let { title, onClick, className,...otherProps } = item;
                        return (
                            <Button
                                className={ classNames(className, {'active': this.state.activeKey === item.key})}
                                onClick={ this.handleItemClick(item.key, onClick) }
                                {...otherProps}>
                                { title }
                            </Button>
                        )
                    })
                }
            </div>
        )

    }
}

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
