import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'bee-icon';

const defaultIcon = (<Icon type="uf-close-bold"/>);

const propTypes = {
    onDismiss: PropTypes.func,
    closeLabel: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    dark: PropTypes.bool
};

const defaultProps = {
    clsPrefix: "u-alert",
    closeLabel: defaultIcon,
    dark: false
};

class Alert extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * 渲染右上角关闭alert按钮
     */
    renderDismissButton = (onDismiss) => {
        return (
            <div
                className="close"
                onClick={onDismiss}
            >
                { this.props.closeLabel }
            </div>
        );
    }

    render() {
        const {
            onDismiss,
            colors,
            className,
            closeLabel,
            children,
            clsPrefix,
            dark,
            ...others
        } =
            this.props;

        let clsObj = {};

        clsObj[`${clsPrefix}`] = true;

        if (colors) {
            clsObj[`${clsPrefix}-${colors}`] = true;
        } else {
            clsObj[`${clsPrefix}-warning`] = true;
        }

        if(dark){
            clsObj[`dark`] = true;
        }

        return (
            <div
                {...others}
                role="alert"
                className={classNames(className, clsObj)}
            >

                {children}
                {
                    this.renderDismissButton(onDismiss)
                }
            </div>
        );
    }
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default  Alert