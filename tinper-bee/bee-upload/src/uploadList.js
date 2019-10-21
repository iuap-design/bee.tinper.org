import React,{Component} from 'react';
import Animate from 'bee-animate';
import Icon from 'bee-icon';
import ProgressBar from 'bee-progress-bar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
//import { UploadListProps } from './interface';

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
const previewFile = (file, callback) => {
  const reader = new FileReader();
  reader.onloadend = () => callback(reader.result);
  reader.readAsDataURL(file);
};

const propTypes = {
  listType: PropTypes.oneOf(['text', 'picture', 'picture-card']),
  onPreview: PropTypes.func,
  onRemove: PropTypes.func,
  items: PropTypes.array,
  progressAttr: PropTypes.object,
  clsPrefix: PropTypes.string
}

const defaultProps = {
    listType: 'text',  // or picture
    progressAttr: {
      strokeWidth: 3,
      showInfo: false,
    },
    clsPrefix: 'u-upload',
    showRemoveIcon: true,
    showPreviewIcon: true,
  };

class UploadList extends Component{
  

  handleClose = (file) => {
    const onRemove = this.props.onRemove;
    if (onRemove) {
      onRemove(file);
    }
  }

  handlePreview = (file, e) => {
    const { onPreview } = this.props;
    if (!onPreview) {
      return;
    }
    e.preventDefault();
    return onPreview(file);
  }

  componentDidUpdate() {
    if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
      return;
    }
    (this.props.items || []).forEach(file => {
      if (typeof document === 'undefined' ||
          typeof window === 'undefined' ||
          //!(window as any).FileReader || !(window as any).File ||
          !window.FileReader || !window.File ||
          !(file.originFileObj instanceof File) ||
          file.thumbUrl !== undefined) {
        return;
      }
      /*eslint-disable */
      file.thumbUrl = '';
      /*eslint-enable */
      previewFile(file.originFileObj, (previewDataUrl) => {
        /*eslint-disable */
        file.thumbUrl = previewDataUrl;
        /*eslint-enable */
        this.forceUpdate();
      });
    });
  }

  render() {
    const { clsPrefix, items = [], listType, showRemoveIcon, showPreviewIcon } = this.props;
    const list = items.map(file => {
      let progress;
      let icon = <Icon type="uf-link" />;

      if (listType === 'picture' || listType === 'picture-card') {
        if (file.status === 'uploading' || (!file.thumbUrl && !file.url)) {
          if (listType === 'picture-card') {
            icon = <div className={`${clsPrefix}-list-item-uploading-text`}>文件上传中</div>;
          } else {
            icon = <Icon className={`${clsPrefix}-list-item-thumbnail`} type="picture" />;
          }
        } else {
          icon = (
            <a
              className={`${clsPrefix}-list-item-thumbnail`}
              onClick={e => this.handlePreview(file, e)}
              href={file.url || file.thumbUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={file.url || file.thumbUrl} alt={file.name} />
            </a>
          );
        }
      }

      if (file.status === 'uploading') {
        progress = (
            <ProgressBar colors="success" size="sm" now={file.percent} />
        );
      }
      const infoUploadingClass = classNames({
        [`${clsPrefix}-list-item`]: true,
        [`${clsPrefix}-list-item-${file.status}`]: true,
      });
      const preview = file.url ? (
        <a
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${clsPrefix}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
        >
          {file.name}
        </a>
      ) : (
        <span
          className={`${clsPrefix}-list-item-name`}
          onClick={e => this.handlePreview(file, e)}
        >
          {file.name}
        </span>
      );
      const style = (file.url || file.thumbUrl) ? undefined : {
        pointerEvents: 'none',
        opacity: 0.5,
      };
      const previewIcon = showPreviewIcon ? (
        <a
          href={file.url || file.thumbUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={style}
          onClick={e => this.handlePreview(file, e)}
        >
          <Icon type="uf-eye-o" />
        </a>
      ) : null;
      const removeIcon = showRemoveIcon ? (
        <Icon type="uf-del" title="移除文件" onClick={() => this.handleClose(file)} />
      ) : null;
      const removeIconClose = showRemoveIcon ? (
        <Icon type="uf-close" title="移除文件" onClick={() => this.handleClose(file)} />
      ) : null;
      const actions = (listType === 'picture-card' && file.status !== 'uploading') ? (
        <span className={`${clsPrefix}-list-item-actions`}>
          {previewIcon}
          {removeIcon}
        </span>
      ) : (
        removeIconClose
      );

      return (
        <div className={infoUploadingClass} key={file.uid}>
          <div className={`${clsPrefix}-list-item-info`}>
            {icon}
            {preview}
            {actions}
          </div>
          {progress}
        </div>
      );
    });
    const listClassNames = classNames({
      [`${clsPrefix}-list`]: true,
      [`${clsPrefix}-list-${listType}`]: true,
    });
    return (
      <Animate
        transitionName={`${clsPrefix}-margin-top`}
        component="div"
        className={listClassNames}
      >
        {list}
      </Animate>
    );
  }
}

UploadList.propTypes = propTypes;
UploadList.defaultProps = defaultProps;
export default UploadList;