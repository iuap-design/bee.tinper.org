import React, {Component} from 'react';
import RcUpload from './Upload';
import UploadList from './uploadList';
import getFileItem from './getFileItem';
import classNames from 'classnames';
import assign from 'object-assign';
import PropTypes from 'prop-types';
import Modal from 'bee-modal'
//import { UploadProps } from './interface';

function T() {
  return true;
}

// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
  return {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.filename || file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    response: file.response,
    error: file.error,
    percent: 0,
    originFileObj: file,
    status: null,
  };
}

/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */
function genPercentAdd() {
  let k = 0.1;
  const i = 0.01;
  const end = 0.98;
  return function (s) {
    let start = s;
    if (start >= end) {
      return start;
    }

    start += k;
    k = k - i;
    if (k < 0.001) {
      k = 0.001;
    }
    return start * 100;
  };
}


function Dragger(props) {
  return <Upload {...props} type="drag" style={{height: props.height}}/>;
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const File = {
  uid: PropTypes.number,
  size: PropTypes.number,
  name: PropTypes.string,
  lastModifiedDate: PropTypes.date,
  url: PropTypes.string,
  status: PropTypes.oneOf(['error', 'success', 'done', 'uploading', 'removed']),
  percent: PropTypes.number,
  thumbUrl: PropTypes.string,
  originFileObj: File
}

const UploadChangeParam = {
  file: File,
  fileList: PropTypes.array,
  event: PropTypes.object
}

const propTypes = {
  type: PropTypes.oneOf(['drag', 'select']),
  name: PropTypes.string,
  defaultFileList: PropTypes.array,
  fileList: PropTypes.array,
  action: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  headers: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  showUploadList: PropTypes.bool,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  beforeUpload: PropTypes.func,
  onChange: PropTypes.func,
  listType: PropTypes.oneOf(['text', 'picture', 'picture-card']),
  className: PropTypes.string,
  onPreview: PropTypes.func,
  onRemove: PropTypes.func,
  preventDefaultPreview:PropTypes.bool,
  supportServerRender: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  clsPrefix: PropTypes.string,
  enterDragger: PropTypes.func,
  leaveDragger: PropTypes.func
}

const defaultProps = {
  clsPrefix: 'u-upload',
  type: 'select',
  multiple: false,
  action: '',
  data: {},
  accept: '',
  beforeUpload: T,
  showUploadList: true,
  listType: 'text', // or pictrue
  className: '',
  disabled: false,
  supportServerRender: true,
  preventDefaultPreview:false,
  enterDragger: ()=>{},
  leaveDragger: ()=>{}
};

class Upload extends Component {
  // recentUploadStatus: boolean | PromiseLike<any>;
  // progressTimer: any;
  // refs: {
  //   [key: string]: any;
  //   upload: any;
  // };

  constructor(props) {
    super(props);
    this.state = {
      fileList: this.props.fileList || this.props.defaultFileList || [],
      dragState: 'drop',
    };
    this.lastenter = null;
  }
  state = {
    previewVisible: false,
    previewImage: '',
  }

  // beforeUpload=(file,fileList)=>{
  //   this.props.beforeUpload(file,this.state.fileList)
  // }  

  onStart = (file) => {
    let targetItem;
    let nextFileList = this.state.fileList.concat();
    if (file.length > 0) {
      targetItem = file.map(f => {
        const fileObject = fileToObject(f);
        fileObject.status = 'uploading';
        return fileObject;
      });
      nextFileList = nextFileList.concat(targetItem);
    } else {
      targetItem = fileToObject(file);
      targetItem.status = 'uploading';
      nextFileList.push(targetItem);
    }
    this.onChange({
      file: targetItem,
      fileList: nextFileList,
    });
    // fix ie progress
    //if (!(window as any).FormData) {
    if (!window.FormData) {
      this.autoUpdateProgress(0, targetItem);
    }
  }

  autoUpdateProgress(_, file) {
    const getPercent = genPercentAdd();
    let curPercent = 0;
    this.progressTimer = setInterval(() => {
      curPercent = getPercent(curPercent);
      this.onProgress({
        percent: curPercent,
      }, file);
    }, 200);
  }

  removeFile(file) {
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    let index = fileList.indexOf(targetItem);
    if (index !== -1) {
      fileList.splice(index, 1);
      return fileList;
    }
    return null;
  }

  onSuccess = (response, file) => {
    this.clearProgressTimer();
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) { /* do nothing */
    }
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.status = 'done';
    targetItem.response = response;
    this.onChange({
      file: targetItem,
      fileList,
    });
  }

  onProgress = (e, file) => {
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.percent = e.percent;
    this.onChange({
      event: e,
      file: targetItem,
      fileList: this.state.fileList,
    });
  }

  onError = (error, response, file) => {
    this.clearProgressTimer();
    let fileList = this.state.fileList;
    let targetItem = getFileItem(file, fileList);
    // removed
    if (!targetItem) {
      return;
    }
    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    this.handleRemove(targetItem);
  }

  handleRemove(file) {
    const { onRemove } = this.props;
    const { fileList } = this.state;
    const { status } = file;

    file.status = 'removed'; // eslint-disable-line

    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(ret => {
      // Prevent removing file
      if (ret === false) {
        file.status = status;
        return;
      }

      const removedFileList = this.removeFileItem(file, fileList);
      if (removedFileList) {
        this.onChange({
          file,
          fileList: removedFileList,
        });
      }
    });
  }
  
  removeFileItem(file, fileList) {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    const removed = fileList.filter(item => item[matchKey] !== file[matchKey]);
    if (removed.length === fileList.length) {
      return null;
    }
    return removed;
  }

  handleManualRemove = (file) => {
    this.refs.upload.abort(file);
    file.status = 'removed'; // eslint-disable-line
    this.handleRemove(file);
  }

  onChange = (info) => {
    if (!('fileList' in this.props)) {
      this.setState({fileList: info.fileList});
    }

    const onChange = this.props.onChange;
    if (onChange) {
      onChange(info);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('fileList' in nextProps) {
      this.setState({
        fileList: nextProps.fileList || [],
      });
    }
  }

  onDragEnter = (e) => {
    this.lastenter = e.target; // 记录最后进入的元素
    this.setState({
      dragState: 'dragover'
    })
    this.props.enterDragger()
  }

  onDragLeave = (e) => {
    // 如果此时退的元素是最后进入的元素，说明是真正退出了`drag-zone`元素
    if(this.lastenter === e.target){ 
      this.setState({
        dragState: e.type
      })
      e.stopPropagation();
      e.preventDefault();
      this.props.leaveDragger()
    }
  }

  onFileDrop = (e) => {
    this.setState({
      dragState: e.type
    })
    this.props.leaveDragger()
  }

  clearProgressTimer() {
    clearInterval(this.progressTimer);
  }
  handlePreview = file => {
    const { onPreview, preventDefaultPreview } = this.props;
    var displayPreview = ()=>{
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }

    if(preventDefaultPreview === false){
      if (!file.url && !file.thumbUrl) {
        getBase64(file.originFileObj).then(displayPreview)
      }else {
        displayPreview()
      }
    }
    
    if(onPreview &&  Object.prototype.toString.call(onPreview) === "[object Function]"){
      onPreview(file);
    }
    
   
  }
  handleCancel = () => this.setState({ previewVisible: false })
  render() {
    const {
      clsPrefix = '', showUploadList, listType,
      type, disabled, children, className,
    } = this.props;
    const { showRemoveIcon, showPreviewIcon } = showUploadList;
    const { previewVisible, previewImage } = this.state

    const rcUploadProps = assign({}, this.props, {
      onStart: this.onStart,
      onError: this.onError,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      // beforeUpload:this.beforeUpload
    });
    delete rcUploadProps.className;

    const uploadList = showUploadList ? (
      <UploadList
        listType={listType}
        items={this.state.fileList}
        onPreview={this.handlePreview}
        onRemove={this.handleManualRemove}
        showRemoveIcon={!disabled && showRemoveIcon}
        showPreviewIcon={showPreviewIcon}
      />
    ) : null;

    if (type === 'drag') {
      const dragCls = classNames(clsPrefix, {
        [`${clsPrefix}-drag`]: true,
        [`${clsPrefix}-drag-uploading`]: this.state.fileList.some(file => file.status === 'uploading'),
        [`${clsPrefix}-drag-hover`]: this.state.dragState === 'dragover',
        [`${clsPrefix}-disabled`]: disabled,
      });
      return (
        <span className={className}>
          <div
            className={dragCls}
            onDrop={this.onFileDrop}
            // onDragOver={this.onFileDrop}
            onDragLeave={this.onDragLeave}
            onDragEnter={this.onDragEnter}
          >
            <RcUpload {...rcUploadProps} ref="upload" className={`${clsPrefix}-btn`}>
              <div className={`${clsPrefix}-drag-container`}>
                {children}
              </div>
            </RcUpload>
          </div>
          {uploadList}
        </span>
      );
    }

    const uploadButtonCls = classNames(clsPrefix, {
      [`${clsPrefix}-select`]: true,
      [`${clsPrefix}-select-${listType}`]: true,
      [`${clsPrefix}-disabled`]: disabled,
    });

    const uploadButton = (
      <div className={uploadButtonCls} style={{display: children ? '' : 'none'}}>
        <RcUpload {...rcUploadProps} ref="upload"/>
      </div>
    );

    if (listType === 'picture-card') {
      return (
        <div>
          <span className={className}>
          {uploadList}
            {uploadButton}
          </span>
          <Modal show={previewVisible} onHide={this.handleCancel}>
            <Modal.Header closeButton>
              <Modal.Title>大图预览</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal.Body>
          </Modal>
        </div>

      );
    }
    return (
      <span className={className}>
        {uploadButton}
        {uploadList}
      </span>
    );
  }
}

Upload.propTypes = propTypes;
Upload.defaultProps = defaultProps;
Upload.Dragger = Dragger;
export default Upload;
