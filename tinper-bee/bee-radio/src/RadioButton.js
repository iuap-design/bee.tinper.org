import React,{Component} from 'react';
import Radio from './Radio';
import PropTypes from 'prop-types';


const propTypes = {
  value:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]),
  style: PropTypes.object
}
const defaultProps = {
  clsPrefix : "u-radio-button"
}

class RadioButton extends Component{

  render() {
    return (
      <Radio {...this.props} />
    );
  }
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
export default RadioButton;