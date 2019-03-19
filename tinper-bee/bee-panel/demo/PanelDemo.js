import { Panel, PanelGroup } from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Demo extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true,
      activeKey: '1'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
const content = "class Demo extends Component { \
    render(){ const title = (   \
          <h3>Panel title</h3>    \
      )\
        return(\
            <div>\
              <Panel header='Panel heading without title'>\
                Panel content\
              </Panel>\
              <Panel header={title}>\
                Panel content\
              </Panel>\
            </div>\
        )\
    }\
}";

const title = (
  <h3>Panel title</h3>
)
    return (
      <div>
        <button onClick={ ()=> this.setState({ open: !this.state.open })}>
          click
        </button>
        <Panel collapsible expanded={this.state.open}>
            { content }
        </Panel>
        <Panel header="Panel heading without title">
          Panel content
        </Panel>
        <Panel header={title} footer='Panel footer'>
          Panel content
        </Panel>
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
          <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
          <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
        </PanelGroup>
      </div>
    );
  }
}


export default Demo;
