'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getClass = exports.getClass = function getClass(props, doing) {
    var dropClass = props.dropClass,
        dropOverClass = props.dropOverClass,
        dragClass = props.dragClass,
        dragingClass = props.dragingClass,
        type = props.type;


    var verticalObj = {
        drop: {}, drag: {}
    };
    verticalObj.drop['u-drop ' + dropClass] = true;
    verticalObj.drop['u-droping ' + dropOverClass] = doing;
    verticalObj.drag['u-drag ' + dragClass] = true;
    verticalObj.drag['u-draging ' + dragingClass] = doing;

    var horizontalObj = {
        drop: {}, drag: {}
    };
    horizontalObj.drop['u-drop u-drop-horizontal ' + dropClass] = true;
    horizontalObj.drop['u-droping u-droping-horizontal ' + dropOverClass] = doing;
    horizontalObj.drag['u-drag u-drag-horizontal ' + dragClass] = true;
    horizontalObj.drag['u-draging u-draging-horizontal ' + dragingClass] = doing;

    switch (type) {
        case 'vertical':
            return verticalObj;
            break;
        case 'horizontal':
            return horizontalObj;
            break;
        case 'betweenVertical':
            return verticalObj;
            break;
        case 'betweenHorizontal':
            return horizontalObj;
            break;
    }
};