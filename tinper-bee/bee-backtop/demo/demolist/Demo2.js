/**
 *
 * @title 指定dom的backtop
 * @description 使用target属性传递指定dom
 *
 */

import React, {Component} from 'react';
import BackTop from '../../src';

class Demo2 extends Component {
    render() {
        return (
            <div id="text" className="demo-two">
                <p>和我在成都的街头走一走</p>
                <p>直到所有的灯都熄灭了也不停留</p>
                <p>你会挽着我的衣袖 </p>
                <p>我会把手揣进裤兜</p>
                <p>走到玉林路的尽头</p>
                <p>坐在小酒馆的门口</p>
                <p>分别总是在九月</p>
                <p>回忆是思念的愁</p>
                <p>深秋嫩绿的垂柳</p>
                <p>亲吻着我额头</p>
                <p>在那座阴雨的小城里</p>
                <p>我从未忘记你</p>
                <p>成都 带不走的 只有你</p>
                <p>和我在成都的街头走一走</p>
                <p>直到所有的灯都熄灭了也不停留</p>
                <p>你会挽着我的衣袖 </p>
                <p>我会把手揣进裤兜</p>
                <p>走到玉林路的尽头</p>
                <p>坐在小酒馆的门口</p>
                <p>分别总是在九月</p>
                <p>回忆是思念的愁</p>
                <p>深秋嫩绿的垂柳</p>
                <p>亲吻着我额头</p>
                <p>在那座阴雨的小城里</p>
                <p>我从未忘记你</p>
                <p>成都 带不走的 只有你</p>
                <p>和我在成都的街头走一走</p>
                <p>直到所有的灯都熄灭了也不停留</p>
                <p>你会挽着我的衣袖 </p>
                <p>我会把手揣进裤兜</p>
                <p>走到玉林路的尽头</p>
                <BackTop target={() => document.getElementById('text')} character="UP"/>
            </div>
        )
    }
}

export  default Demo2;