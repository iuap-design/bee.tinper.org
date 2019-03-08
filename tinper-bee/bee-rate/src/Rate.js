import React, {Component} from 'react';
import Rates from 'rc-rate';
import Icon from 'bee-icon';
import PropTypes from 'prop-types';

const propTypes = {
    count: PropTypes.number,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    onHoverChange: PropTypes.func,
    allowHalf: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,

};

const defaultProps = {
    count: 5,
    defaultValue: 0,
    value:0,
    onChange: () => {

    },
    onHoverChange: () => {

    },
    allowHalf: false,
    disabled: false,
    character: <Icon type="uf-star" />,
    className: '',
    style: {},
    clsPrefix: 'u-rate'
};
class Rate extends Component {
    render() {
        const {count, value, defaultValue, onChange, clsPrefix, onHoverChange, allowHalf, disabled, character, className, style} = this.props;
        return (
                <Rates prefixCls={clsPrefix} count={count} value={value}  defaultValue={defaultValue} onChange={onChange}
                       onHoverChange={onHoverChange} allowHalf={allowHalf} disabled={disabled} character={character}
                       className={className} style={style}/>
        )
    }
};
Rate.propTypes = propTypes;
Rate.defaultProps = defaultProps;
export default Rate;