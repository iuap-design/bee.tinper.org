import React from 'react';
import Button from 'bee-button';

export default function OkButton({ prefixCls, locale, okDisabled, onOk }) {
  let className = `${prefixCls}-btn-ok`;
  // if (okDisabled) {
  //   className += ` ${prefixCls}-ok-btn-disabled`;
  // }
  return (<Button
    className={className}
    size="sm" colors="primary"
    disabled={!!okDisabled}
    onClick={okDisabled ? null : onOk}
  >
    {locale.ok}
  </Button>);
}
