/**
*
* @title affix下面的dom是可变化的时候
* @description affix下面的dom是可变化的时候
*
*/

import React, { Component } from 'react';
import Affix from '../../src';


class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dom: null,
      childrenRef: null,
    }
  }

  componentDidMount() {
    if (document.getElementById('outer-box')) {
      this.setState({
        dom: <div style={{ backgroundColor: 'green', opacity: 0.2 }} ref={(ref) => { this.setState({ childrenRef: ref }) }} ><h1>affix</h1><h1>affix</h1></div>
      });
    }
    setTimeout(() => {
      this.setState({
        dom: <div style={{ backgroundColor: 'green', opacity: 0.2 }} ref={(ref) => { this.setState({ childrenRef: ref }) }} ><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1><h1>affix</h1></div>
      });
    }, 16000);

  }
  onChange = () => {
    console.log('hahah变化');
  }
  render() {
    return (
      <div className="outer-box" id="outer-box">
        <label>affix下面的dom是可变化的时候</label>
        <Affix  zIndex={2001} onChange={this.onChange} childrenRef={this.state.childrenRef}>
              {this.state.dom}
          </Affix>

        <div className="button">1222</div>

      </div>
    );
  }

}


export default Demo4;