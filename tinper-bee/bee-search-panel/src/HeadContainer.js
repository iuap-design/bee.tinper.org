import React from 'react';

class HeadContainer extends React.Component {
   render(){
    let {children,clsPrefix,className:_className} = this.props;
    let ht = children?<div>{children}</div>:null;
    return(ht)
   }
}
export default HeadContainer;