import Popconfirm from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';
import Button from 'bee-button';

const popoverLeft = (
  <Popconfirm id="popover-positioned-left" title="Popover left">
    <strong>Holy guacamole!</strong> Check this info.
  </Popconfirm>
);

const popoverTop = (
  <Popconfirm id="popover-positioned-top" title="Popover top">
    <strong>Holy guacamole!</strong> Check this info.
  </Popconfirm>
);

const popoverBottom = (
  <Popconfirm id="popover-positioned-bottom" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popconfirm>
);

const popoverRight = (
  <Popconfirm id="popover-positioned-right" title="Popover right">
    <strong>Holy guacamole!</strong> Check this info.
  </Popconfirm>
);


const popoverClick = (
  <Popconfirm id="popover-trigger-click" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popconfirm>
);

const popoverHoverFocus = (
  <Popconfirm id="popover-trigger-hover-focus" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popconfirm>
);

const popoverFocus = (
  <Popconfirm id="popover-trigger-focus" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popconfirm>
);

const popoverClickRootClose = (
  <Popconfirm id="popover-trigger-click-root-close" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popconfirm>
);




class Demo extends Component {
    render(){
        return(
            <div>
          <div style={{ height: 120 }}>
            <Popconfirm
              id="popover-basic"
              placement="right"
              positionLeft={200}
              positionTop={50}
              title="Popover right"
            >
              And here's some <strong>amazing</strong> content. It's very engaging. right?
            </Popconfirm>
          </div>
          <div style={{ marginTop: 200, marginLeft: 200 }}>
            <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
              <Button>Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
              <Button>Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
              <Button>Holy guacamole!</Button>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
              <Button>Holy guacamole!</Button>
            </OverlayTrigger>
          </div>
          <div style={{ marginTop: 300, marginLeft: 200 }}>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
            <Button>Click</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
            <Button>Hover + Focus</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
            <Button>Focus</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
            <Button>Click w/rootClose</Button>
          </OverlayTrigger>
          </div>
          </div>
        )
    }
}
export default Demo;
