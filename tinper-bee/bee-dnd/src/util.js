export const getClass = (props,doing) =>{
    let { dropClass,dropOverClass,dragClass,dragingClass,type } = props;
    
    let verticalObj = {
        drop:{},drag:{}
    };
    verticalObj.drop['u-drop '+dropClass]=true;
    verticalObj.drop['u-droping '+dropOverClass]=doing;
    verticalObj.drag['u-drag '+dragClass]=true;
    verticalObj.drag['u-draging '+dragingClass]=doing;

    let horizontalObj = {
        drop:{},drag:{}
    }
    horizontalObj.drop['u-drop u-drop-horizontal '+dropClass]=true;
    horizontalObj.drop['u-droping u-droping-horizontal '+dropOverClass]=doing;
    horizontalObj.drag['u-drag u-drag-horizontal '+dragClass]=true;
    horizontalObj.drag['u-draging u-draging-horizontal '+dragingClass]=doing;

    switch (type){
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
}
