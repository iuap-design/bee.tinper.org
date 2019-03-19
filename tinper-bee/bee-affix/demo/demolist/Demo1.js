/**
*
* @title 基本的Affix,带有container
* @description 基本的Affix,带有container
*
*/

import React, { Component } from 'react';
import Affix from '../../src';


class Demo1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      container:null,
    }
  }

  componentDidMount(){
    if(document.getElementById('outer-box')){
      this.setState({container:document.getElementById('outer-box')})
    }
  }
  render () {
  
    return (
      <div className="outer-box" id="outer-box">
        <label>某个div内的affix，container canHidden={true} zIndex={2001}</label>
          <Affix container={this.state.container} canHidden={true} zIndex={2001}>
            <div className='content'>
              <span>affix</span>
            </div>
          </Affix>
       
      </div>
    )
  }
}


export default Demo1;