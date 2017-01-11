import React, { Component } from 'react';
import { Con, Row, Col } from 'tinper-bee';

import { Header, Menus, MyComponent } from '../../components';


import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <Header />
        <Row>
            <Col sm={3}>
                <Menus />
            </Col>
            <Col sm={9}>
                <MyComponent />
            </Col>
        </Row>
    </div>

    );
  }
}

export default App;
