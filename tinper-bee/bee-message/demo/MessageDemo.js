import Message from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';

const info = function () {
  Message.info('This is a info message');
};
const danger = function () {
  Message.error('This is a error message');
};
const success = function () {
  Message.success('This is a success message');
};
const warning = function () {
  Message.warning('This is a warning message');
};
const loading = function () {
  Message.loading('This is a loading message');
};

class Demo extends Component {
    render(){
        return(
            <div>
            <Button
                colors="info"
                onClick={info}>
                Display normal message
            </Button>
            <Button
                colors="danger"
                onClick={danger}>
                Display normal message
            </Button>
            <Button
                colors="warning"
                onClick={warning}>
                Display normal message
            </Button>
            <Button
                colors="success"
                onClick={success}>
                Display normal message
            </Button>
            <Button
                colors="primary"
                onClick={loading}>
                Display normal message
            </Button>
            </div>
        )
    }
}
export default Demo;
