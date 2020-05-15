import  ButtonGroup  from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';

class Demo extends Component {
 constructor (props) {
     super(props);
 }
    render(){
        return(
            <div>
            <h1>默认</h1>
            <ButtonGroup>
                <Button size="sm" type="primary">按钮一</Button>
                <Button size="sm" type="primary">按钮二</Button>
                <Button size="sm" type="primary">按钮三</Button>
            </ButtonGroup>
            <h1>垂直</h1>
            <ButtonGroup vertical>
                <Button size="lg" type="primary">按钮一</Button>
                <Button size="lg" type="primary">按钮二</Button>
                <Button size="lg" type="primary">按钮三</Button>
            </ButtonGroup>
            <h1>垂直</h1>
            <ButtonGroup vertical block>
                <Button size="lg" type="primary">按钮一</Button>
                <Button size="lg" type="primary">按钮二</Button>
                <Button size="lg" type="primary">按钮三</Button>
            </ButtonGroup>
            <h1>对齐</h1>
            <ButtonGroup justified>
                <Button size="lg" type="primary">按钮一</Button>
                <Button size="lg" type="primary">按钮二</Button>
                <Button size="lg" type="primary">按钮三</Button>
            </ButtonGroup>
            </div>
        )
    }
}
export default Demo;
