
import Notification from '../src';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
const notification = Notification.newInstance({position: 'bottomRight'});

function simpleFn() {
  notification.notice({
    content: <span>simple show</span>,
    onClose() {
      console.log('simple close');
    },
  });
}
function simpleFnsuccess() {
  notification.notice({
    content: <span>simple show</span>,
    onClose() {
      console.log('simple close');
    },
    color: 'success'
  });
}
function simpleFndark() {
  notification.notice({
    content: <span>simple show</span>,
    onClose() {
      console.log('simple close');
    },
    color: 'dark'
  });
}
function simpleFnwarning() {
  notification.notice({
    content: <span>simple show</span>,
    onClose() {
      console.log('simple close');
    },
    color: 'warning'
  });
}
function simpleFninfo() {
  notification.notice({
    content: <span>simple show</span>,
    onClose() {
      console.log('simple close');
    },
    color: 'info'
  });
}
function simpleFndanger() {
  notification.notice({
    content: <span><i className="uf uf-exclamationsign"></i>simple show</span>,
    onClose() {
      console.log('simple close');
    },
    color: 'danger'
  });
}

function durationFn() {
  notification.notice({
    content: <span>can not close...</span>,
    duration: null,
    closable: false
  });
}

function closableFn() {
  notification.notice({
    content: <span>closdisable but autoclose</span>,
    duration: null,
    onClose() {
      console.log('closable close');
    },
    duration: 6,
    closable: false
  });
}

function close(key) {
  notification.removeNotice(key);
}

function manualClose() {
  const key = Date.now();
  notification.notice({
    content: <div>
      <p>click below button to close</p>
      <Button onClick={close.bind(null, key)}>close</Button>
    </div>,
    key,
    duration: null,
  });
}

function demo () {
    return (
        <div>
          <Button onClick={simpleFn}>simple show</Button>
          <Button onClick={simpleFnsuccess}>simpleFnsuccess show</Button>
          <Button onClick={simpleFninfo}>simpleFninfo show</Button>
          <Button onClick={simpleFndark}>simpleFndark show</Button>
          <Button onClick={simpleFndanger}>simpleFndanger show</Button>
          <Button onClick={simpleFnwarning}>simpleFnwarning show</Button>
          <Button onClick={durationFn}>duration=0</Button>
          <Button onClick={closableFn}>closdisable but autoclose</Button>
          <Button onClick={manualClose}>controlled close</Button>
        </div>
    )
};

 export default demo;
