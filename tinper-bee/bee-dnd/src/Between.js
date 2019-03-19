import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getClass } from './util';
import classnames from 'classnames';
import isEqual from 'lodash.isequal';


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};


class Between extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.list,
            selected: this.props.otherList
        };
    }

    componentWillReceiveProps(nextProps){
        if(!isEqual(this.state.items,nextProps.list)){
            this.setState({
                items:nextProps.list
            })
        }
        if(!isEqual(this.state.selected,nextProps.otherList)){
            this.setState({
                selected:nextProps.otherList
            })
        }
    }

    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        console.log(result);
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        let list=this.state.items;
        let otherList=this.state.selected;

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };
            list=items;

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
                otherList=items;
                list=this.state.items;
            }
            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
            list=result.droppable;
            otherList=result.droppable2;
        }
        this.props.onStop(result,{
            list:list,
            otherList:otherList
        })
        
    };

    onDragStart = result =>{
        this.props.onStart(result,{
            list:this.state.list,
            otherList:this.state.selected
        })
    }

    render() {
        const { onStart,onDrag,onStop,onDragUpdate,dropClass,dropOverClass,
            dragClass,dragingClass,showKey,type } = this.props;

        return (
            <div  className={classnames({
                'u-drag-between':type=='betweenVertical',
                'u-drag-between u-drag-between-horizontal':type=='betweenHorizontal',
                
            })}>
                <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart} onDragUpdate={onDragUpdate}>
                    <Droppable droppableId="droppable" direction={type=='betweenVertical'?'vertical':'horizontal'}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                className={classnames({
                                    ...getClass(this.props,snapshot.isDraggingOver).drop
                                  })}>
                                {this.state.items.map((item, index) => (
                                    <Draggable
                                        key={'1'+index}
                                        draggableId={'1'+index}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={classnames({
                                                    ...getClass(this.props,snapshot.isDragging).drag
                                                  })}
                                                  style={{...provided.draggableProps.style}}>
                                                {showKey?item[showKey]:item}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="droppable2" direction={type=='betweenVertical'?'vertical':'horizontal'}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                className={classnames({
                                    ...getClass(this.props,snapshot.isDraggingOver).drop
                                  })}>
                                {this.state.selected.map((item, index) => (
                                    <Draggable
                                        key={'2'+index}
                                        draggableId={'2'+index}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={classnames({
                                                    ...getClass(this.props,snapshot.isDragging).drag
                                                  })}
                                                  style={{...provided.draggableProps.style}}>
                                                {showKey?item[showKey]:item}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
           
        );
    }
}


export default Between;