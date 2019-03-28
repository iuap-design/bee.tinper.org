/**
 *
 * @title 基本示例
 * @description 基本示例
 *
 */
import React, { Component } from 'react';
import Anchor from '../../src'

class Demo1 extends Component {
    constructor(props){
        super(props);
        this.state={
            anthors:[
                {
                    href:"one",
                    name:"RISE",
                    content:" Welcome to the war we've only begun so \n "
                    + "Pick up your weapon and face it \n "
                    + "There's blood on the crown go and take it \n "
                    + "You get one shot to make it out alive so \n "
                    + "Higher and higher you chase it \n "
                    + "It's deep in your bones go and take it \n "
                    + "This is your moment now is your time so \n "
                    + "Prove yourself and \n "
                    + "RISE RISE",
                },
                {
                    href:"two",
                    name:"Legends",
                    content:" Legends never die when the world is calling you \n "
                    + "Can you hear them screaming out your name \n "
                    + "Legends never die they become a part of you \n "
                    + "Every time you bleed for reaching greatness \n "
                    + "Relentless you survive \n "
                    + "They never lose hope when everything's cold and the fighting's near \n "
                    + "It's deep in their bones they'll run into smoke when the fire is fierce \n "
                    + "Oh pick yourself up 'cause"
                },
                {
                    href:"three",
                    name:"Ignite",
                    content:" There's a fire that burns inside \n "
                    + "It's an instinct that never lies \n "
                    + "The target's tattooed between our eyes \n "
                    + "Stand and fight \n Under the lights on the high stage \n "
                    + "A part of your life it can take away \n "
                    + "Just like the blood running through your veins \n "
                    + "Everyone's watching through your eyes"
                },
                {
                    href:"four",
                    name:"Worlds Collide",
                    content:" Do we fight to hold our heads up high \n "
                    + "And beat the drum to what we love \n "
                    + "Risk the fall, oh we have felt it all \n "
                    + "Come crashing down from far above \n "
                    + "Stars arising, countless worlds colliding \n "
                    + "Only one will take it all \n "
                    + "Can we bring to fall the giants \n "
                    + "Can we make the final call"
                },
                {
                    href:"five",
                    name:"Warriors",
                    content:" As a child, you would wait \n "
                    + "And watch from far away. \n "
                    + "But you always knew that you'll be the one \n "
                    + "that work while they all play. \n "
                    + "And you, you lay, awake at night and scheme \n "
                    + "of all the things that you would change \n "
                    + "but it was just a dream! \n "
                    + "Here we are, don't turn away now \n "
                    + "we are the warriors that built this town."
                }
            ]
        }
    }
    render() {
        return ( 
            <div className="demo1">  
                <div className="content">
                    {
                        this.state.anthors.map(item=>{
                            return (
                                <p id={item.href}>
                                    <pre>
                                        {item.content}
                                    </pre>
                                </p>
                            )
                        })
                    }
                </div>
                <Anchor selector="#my-awesome-nav a">
                    <ul id="my-awesome-nav" >
                    {
                        this.state.anthors.map(item=>{
                            return (
                                <li><a href={`#${item.href}`}>{item.name}</a></li>
                            )
                        })
                    }
                    </ul>
                </Anchor>
            </div>
           
        )
    }
}
export default Demo1