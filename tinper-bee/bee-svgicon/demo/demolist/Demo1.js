/**
*
* @title 基本用法
* @description 使用 <SvgIcon /> 标签声明组件，指定图标对应的 type 属性。
*
*/
import React, { Component } from 'react';
import Message from 'bee-message';
import Clipboard from 'bee-clipboard';
import SvgIcon from '../../src';

function success (content) {
    Message.create({ content: content, color: "successlight" });
}

function SvgIconItem (props) {
    let { type, classString } = props;
    let content = <code>{`<SvgIcon type=${type} />  copied `}</code>;
    return (
        <li>
            <SvgIcon type={type} />
            <div className="name">{type}</div>
            <div className="usage" id={classString}>{`<SvgIcon type="${type}" />`}</div>
            <Clipboard action="copy" target={`#${classString}`} success={() => success(content)} />
        </li>
    )
}

class Demo1 extends Component {
    render () {
        return (
            <div className="tinper-icon-demo">
                <ul className="icon_lists">
                    <SvgIconItem type="audio" classString="uftype-audio" />
                    <SvgIconItem type="excel" classString="uftype-excel" />
                    <SvgIconItem type="ai" classString="uftype-ai" />
                    <SvgIconItem type="gdoc" classString="uftype-gdoc" />
                    <SvgIconItem type="flash" classString="uftype-flash" />
                    <SvgIconItem type="gform" classString="uftype-gform" />
                    <SvgIconItem type="html" classString="uftype-html" />
                    <SvgIconItem type="csv" classString="uftype-csv" />
                    <SvgIconItem type="slide" classString="uftype-slide" />
                    <SvgIconItem type="box_notes" classString="uftype-box_notes" />
                    <SvgIconItem type="webex" classString="uftype-webex" />
                    <SvgIconItem type="eps" classString="uftype-eps" />
                    <SvgIconItem type="psd" classString="uftype-psd" />
                    <SvgIconItem type="pack" classString="uftype-pack" />
                    <SvgIconItem type="gpres" classString="uftype-gpres" />
                    <SvgIconItem type="exe" classString="uftype-exe" />
                    <SvgIconItem type="txt" classString="uftype-txt" />
                    <SvgIconItem type="unknown" classString="uftype-unknown" />
                    <SvgIconItem type="attachment" classString="uftype-attachment" />
                    <SvgIconItem type="pages" classString="uftype-pages" />
                    <SvgIconItem type="video" classString="uftype-video" />
                    <SvgIconItem type="gdocs" classString="uftype-gdocs" />
                    <SvgIconItem type="ppt" classString="uftype-ppt" />
                    <SvgIconItem type="word" classString="uftype-word" />
                    <SvgIconItem type="pdf" classString="uftype-pdf" />
                    <SvgIconItem type="image" classString="uftype-image" />
                    <SvgIconItem type="stypi" classString="uftype-stypi" />
                    <SvgIconItem type="keynote" classString="uftype-keynote" />
                    <SvgIconItem type="gsheet" classString="uftype-gsheet" />
                    <SvgIconItem type="visio" classString="uftype-visio" />
                    <SvgIconItem type="zip" classString="uftype-zip" />
                    <SvgIconItem type="xml" classString="uftype-xml" />
                    <SvgIconItem type="rtf" classString="uftype-rtf" />
                </ul>
            </div >
        )
    }
}
export default Demo1