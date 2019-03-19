import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import RadioGroup from '../src'


const App = React.createClass({
  getInitialState() {
    return {selectedValue: 'apple'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>

          <RadioGroup.Radio colors="warning" value="apple" >apple</RadioGroup.Radio>

          <RadioGroup.Radio value="orange" >Orange</RadioGroup.Radio>

          <RadioGroup.Radio value="watermelon" >Watermelon</RadioGroup.Radio>

      </RadioGroup>
    );
  }
});

export default App;