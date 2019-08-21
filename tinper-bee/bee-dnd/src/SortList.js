import React, { Component } from 'react';
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

class Vertical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.list||[],
    };
  }
  componentWillReceiveProps(nextProps){
    if(!isEqual(this.state.items,nextProps.list)){
        this.setState({
            items:nextProps.list
        })
    }
  }

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
    this.props.onStop(result,items);
  }

  onDragStart = result =>{
    this.props.onStart(result,this.state.items);
  }


  render() {
    const { onStart,onDrag,onStop,onDragUpdate,dropClass,dropOverClass,
      dragClass,dragingClass,showKey,type } = this.props;
      
    return (
      <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart} onDragUpdate={onDragUpdate}>
        <Droppable droppableId="droppable" direction={type}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={classnames({
                ...getClass(this.props,snapshot.isDraggingOver).drop
              })}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={index} draggableId={`${index}`} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={classnames({
                        ...getClass(this.props,snapshot.isDragging).drag
                      })}
                      style={{...provided.draggableProps.style}}
                    >
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
    );
  }
}

export default Vertical;