/**
 * @title 图标Badge
 * @description 在子元素里自定义内容
 */

import React, {Component} from 'react';
import Icon from 'bee-icon';
import Badge from '../../src';

class Demo2 extends Component {
    render() {
        return (
            <div>
                <Badge dataBadge={4} dataBadgePlacement="bottom">
                    <Icon type="uf-bell"/>
                </Badge>
                <Badge dataBadge={4} colors="warning" dataBadgePlacement="up">
                    <Icon type="uf-bell"/>
                </Badge>
            </div>
        )
    }
}

export default Demo2;