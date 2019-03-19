
/**
* This source code is quoted from rc-slider.
* homepage: https://github.com/react-component/slider
*/
import React from 'react';


const Track = (props) => {
  //处于激活状态的track
  const { className, included, vertical, offset, length, style } = props;

  const positonStyle = vertical ? {
    bottom: `${offset}%`,
    height: `${length}%`,
  } : {
    left: `${offset}%`,
    width: `${length}%`,
  };

  const elStyle = {
    visibility: included ? 'visible' : 'hidden',
    ...style,
    ...positonStyle,
  };
  return <div className={className} style={elStyle} />;
};

export default Track;
