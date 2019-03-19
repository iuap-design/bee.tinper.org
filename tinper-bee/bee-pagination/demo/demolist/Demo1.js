/**
 * @title 少页数Pagination
 * @description 所有页数均显示。默认无确认按钮。
 */

import React, { Component } from 'react';
import Pagination from '../../src';

class Demo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }
    handleSelect(eventKey) {
        console.log(eventKey);
        this.setState({
            activePage: eventKey
        });
    }

    dataNumSelect = (index, value) => {
        console.log(index, value);

    }

    render() {
        return (
            <div>
                <Pagination
                    first
                    last
                    prev
                    next
                    maxButtons={5}
                    boundaryLinks
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect.bind(this)}
                    onDataNumSelect={this.dataNumSelect}
                    showJump={true}
                    total={100}
                    dataNum={2}
                />

            </div>
        );
    }
}

export default Demo1;