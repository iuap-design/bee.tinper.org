
/**
 *
 * @title 网格排序
 * @description 
 *
 */

import React, { Component } from 'react';
import Dnd from '../../src/Dnd';

const GridLayout = Dnd.GridLayout;

class Demo93 extends Component {
    render() {
        let layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2},
            {i: 'b', x: 1, y: 0, w: 3, h: 2},
            {i: 'c', x: 4, y: 0, w: 1, h: 2, static: true},
            {i: 'd', x: 0, y: 1, w: 1, h: 1},
            {i: 'e', x: 2, y: 2, w: 1, h: 2},
            {i: 'f', x: 3, y: 3, w: 1, h: 2}
        ];
        return (
            <GridLayout className="layout" layout={layout} cols={6} rowHeight={30} width={500}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">static</div>
                <div key="d">d</div>
                <div key="e">e</div>
                <div key="f">f</div>
            </GridLayout>
        );
    }
}

export default Demo93;