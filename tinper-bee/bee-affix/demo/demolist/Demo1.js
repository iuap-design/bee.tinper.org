/**
*
* @title 基本的Affix,带有container
* @description 基本的Affix,带有container
*
*/

import React, { Component } from 'react';
import Button from 'bee-button';
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
      <div className="demo1">
        <div>某个div内的affix，container canHidden={true} zIndex={2001}</div>
        <div className="outer-box checkered stripes" id="outer-box">
          <Affix container={this.state.container} canHidden={true} zIndex={2001}>
            <Button colors="primary">affix in container</Button>
          </Affix>
        </div>
      </div>
    )
  }
}


export default Demo1;