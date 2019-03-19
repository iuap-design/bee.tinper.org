import React from 'react';
import Icon from 'bee-icon';
import FormControl from 'bee-form-control';
import PropTypes from 'prop-types';

const propTypes = {
  prefixCls: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  handleClear: PropTypes.func
}

const defaultProps = {
  placeholder: '',
};

class Search extends React.Component {
  handleChange = (e) => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(e);
    }
  }

  handleClear = (e) => {
    e.preventDefault();

    const handleClear = this.props.handleClear;
    if (handleClear) {
      handleClear(e);
    }
  }

  render() {
    const { placeholder, value, prefixCls } = this.props;
    const icon = (value && value.length > 0) ? (
      <a href="#" className={`${prefixCls}-action`} onClick={this.handleClear}>
        <Icon type="uf-close-c" />
      </a>
    ) : (
      <span className={`${prefixCls}-action`}><Icon type="uf-search" /></span>
    );

    return (
      <div>
        <FormControl
          placeholder={placeholder}
          className={prefixCls}
          value={value}
          ref="input"
          onChange={this.handleChange}
        />
        {icon}
      </div>
    );
  }
}
Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
