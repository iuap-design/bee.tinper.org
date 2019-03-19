import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import { Panel, PanelGroup } from '../src/index';


describe('verifiy default panel', function () {
  it('Panel should be exist', function () {
      const title = (
        <h3>Panel title</h3>
    );
    let panel = shallow(<Panel header={title} footer='Panel footer'>
      Panel content
    </Panel>);

    expect(panel.hasClass('u-panel')).to.equal(true);
    expect(panel.find('.u-panel-heading')).to.have.length(1);
    expect(panel.find('.u-panel-title')).to.have.length(1);
    expect(panel.find('.u-panel-body')).to.have.length(1);
    expect(panel.find('.u-panel-footer')).to.have.length(1);
    expect(panel.find('h3').text()).to.equal('Panel title');

  });

});
describe('verifiy Collapsible panel', function () {
  it('Panel collapsible', function () {

      class CollapsibleDemo extends React.Component {
        constructor(...args) {
          super(...args);
          this.state = {
            open: true
          };
        }

    render() {
      const content = "some description";

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
            </div>
          );
        }
      }
    let collapsibleDemo = shallow(<CollapsibleDemo />);

    //expect(collapsibleDemo.find(Panel).shallow().find('.in')).to.have.length(1);
    collapsibleDemo.find('button').simulate('click');

    expect(collapsibleDemo.state('open')).to.equal(false);
    expect(collapsibleDemo.find(Panel).at(0).props().expanded).to.equal(false);
    expect(collapsibleDemo.find(Panel).shallow().find('.in')).to.have.length(0);
  });

});
describe('verifiy panelGroup', function () {
  it('panelGroup click', function () {
      class PanelGroupDemo extends React.Component {
        constructor(...args) {
          super(...args);
          this.state = {
            activeKey: '1'
          };
          this.handleSelect = this.handleSelect.bind(this);
        }
        handleSelect(activeKey) {
          this.setState({ activeKey });
        }

        render() {
          return (
              <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
                <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
                <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
              </PanelGroup>
          );
        }
      }


    let panelGroupDemo = mount(<PanelGroupDemo />);
        // panelGroupDemo.find('a').at(1).simulate('click');
        // expect(panelGroupDemo.state('activeKey')).to.equal(2);
        // console.log(panelGroupDemo.find(Panel).at(1).props());
        // expect(panelGroupDemo.find(Panel).at(1).props().expanded).to.equal(true);

  });

});
