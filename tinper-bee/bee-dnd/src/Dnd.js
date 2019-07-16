import React, {Component} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Drag from 'react-draggable'
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import SortList from './SortList';
import Between from './Between';
import GridLayout from './GridLayout';


const propTypes = {
    onStart: PropTypes.func,
    onDrag: PropTypes.func,
    onStop: PropTypes.func,
    onDragUpdate: PropTypes.func,
    dropClass: PropTypes.string,
    dropOverClass: PropTypes.string,
    dragClass: PropTypes.string,
    dragingClass: PropTypes.string,
    draggedClass:PropTypes.string,
    className:PropTypes.string,
    style:PropTypes.object,
    list: PropTypes.array,
    otherList: PropTypes.array,
    type:PropTypes.oneOf(['vertical','horizontal','betweenVertical','betweenHorizontal']),
    showKey:PropTypes.string

};
const defaultProps = {
    onStart: () => {

    },
    onDrag:()=>{

    },
    onStop: () => {

    },
    onDragUpdate: () => {

    },
    list: false,
    otherList:[],
    dropClass:'',
    dropOverClass:'',
    dragClass:'',
    dragingClass:'',
    draggedClass:'',
    type:'vertical'
};


class Dnd extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:this.props.list||[]
        }
    }
    componentWillReceiveProps(nextProps){
        if(!isEqual(this.state.items,nextProps.list)){
            this.setState({
                items:nextProps.list
            })
        }
    }

    render() {
        let self = this;
        let DndType = () => {
            switch(this.props.type){
                case 'vertical':
                    return <SortList {...this.props}/>;
                    break;
                case 'horizontal':
                    return <SortList {...this.props}/>;
                    break;
                case 'betweenVertical':
                    return <Between {...this.props}/>;
                    break;
                case 'betweenHorizontal':
                    return <Between {...this.props}/>;
                    break;
                default :
                    return <SortList {...this.props}/>;
                    break;
            }
        }
        return (
            <div>
                {
                    self.state.items.length ? 
                        DndType(): (
                        <Drag defaultClassName={this.props.dragClass}
                              defaultClassNameDragging={this.props.dragingClass}
                              defaultClassNameDragged={this.props.draggedClass}
                              {...this.props}>
                            {self.props.children}
                        </Drag>
                    )
                }
            </div>


        );
    }
}
Dnd.propTypes = propTypes;
Dnd.defaultProps = defaultProps;
Dnd.Drag = Drag;
Dnd.DragDropContext = DragDropContext;
Dnd.Droppable = Droppable;
Dnd.Draggable = Draggable;
Dnd.GridLayout = GridLayout;
export default Dnd;