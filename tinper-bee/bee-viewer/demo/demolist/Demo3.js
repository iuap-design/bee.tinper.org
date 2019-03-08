/**
*
* @title 异步加载图片
* @description 设置  asyncLoad={true} 
*
*/
import React, { Component } from 'react';
import Viewer from '../../src';
import Button from 'bee-button'

class Demo3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            pictureSrc: [],
        }
    }

    loadPic=()=>{
        window.setTimeout(()=>{
            this.setState({
                pictureSrc: [
                    'http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-1-min.jpg'
                ]
            })
        },100)
    }

    componentWillMount(){
        this.loadPic();
    }
    addPicture=()=>{
        let pictureSrc = this.state.pictureSrc;
        pictureSrc.push('http://design.yonyoucloud.com/static/bee.tinper.org-demo/swiper-demo-2-min.jpg');
        this.setState({
            pictureSrc
        })
    }

    render () {
        return (
            <div className='demo'>
                <Button onClick={this.addPicture} style={{'marginBottom':'10px'}}>点击新增图片</Button>
                <Viewer asyncLoad={true} >
                    <div>
                        {this.state.pictureSrc?
                            this.state.pictureSrc.map((item,index) => {
                                return (<img  key={index} src={item} alt="Picture"/>)
                            }) :null
                        }
                    </div>
                </Viewer>
            </div>
            
        )
    }
}
export default Demo3;