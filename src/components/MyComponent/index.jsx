import React, { Component } from 'react';
import { Row,
        Col,
        Button,
        Badge,
        ButtonGroup,
        ProgressBar,
        Loadingstate,
        Breadcrumb,
        Panel,
        Pagination,
        Dropdown,
        Modal,
        Notification,
        Alert,
        TabPanel,
        Icon,
        Tabs,
        Popconfirm,
        Tooltip,
        Loading,
        Checkbox,
        FormControl,
        InputGroupButton,
        InputGroupAddon,
        InputGroup,
        FormGroup,
        Switch,
        Select,
        Cascader,

         } from 'tinper-bee';

import './index.css';
import Upload from 'bee-upload';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
console.log(Upload);
const notification = Notification.newInstance({position: 'bottomRight'});
const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
  },
};

const demo3props = {
  action: '/upload.do',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file);
      console.log(info.fileList);
    }
  },
  defaultFileList: [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }],
};
const options = [
    {
      value: '浙江',
      children: [
          {
            value: '杭州',
            children: [
                {
                  value: '西湖',
                  children: [
                    {
                      value: '白娘子'
                    },
                    {
                      value: '许仙'
                    }]
                }]
          }
      ]
    },
    {
      value: '江苏',
      children: [
          {
            value: '南京',
            children: [
                {
                  value: '中华门'
                }]
          }
      ]
    },
    {
      value: '山东'
    }
 ];

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage:1
        }
    }
    handleSelect(eventKey) {
        this.setState({
          activePage: eventKey
        });
    }

    simpleFnsuccess() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'success'
      });
    }
 simpleFndark() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'dark'
      });
    }
simpleFnwarning() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'warning'
      });
    }
 simpleFninfo() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'info'
      });
    }
 simpleFndanger() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
        color: 'danger'
      });
    }
    simpleFn() {
      notification.notice({
        content: <span>simple show</span>,
        onClose() {
          console.log('simple close');
        },
      });
    }

  render() {
    return (
      <Row>
        <Col md={12}>
                <Button colors="success">success</Button>
               <Button colors="info">info</Button>
               <Button colors="warning">warning</Button>
               <Button colors="danger">danger</Button>
               <Button colors="primary">primary</Button>
               <Button colors="accent">accent</Button>
               <Button shape="border" colors="success">success</Button>
               <Button shape="border" colors="warning">info</Button>
               <Button shape="border" colors="info">warning</Button>
               <Button shape="border" colors="danger">danger</Button>
        </Col>
        <Col md={12}>
                <Badge colors="primary">13</Badge>
                <Badge colors="primary">
                            <i className="uf uf-bellmusicaltool"></i>
                </Badge>
        </Col>
        <Col md={12}>
            <Loadingstate>confirm</Loadingstate>
            <Loadingstate colors="info" loadingText="waiting..." loadingTime="4000">confirm</Loadingstate>
        </Col>
        <Col md={12}>
            <ProgressBar now = {30} />
            <ProgressBar active now = {40}/>
            <ProgressBar size="sm">
                <ProgressBar colors="danger" now = {10} />
                <ProgressBar colors="success" now = {20} />
                <ProgressBar colors="warning" now = {30} />
            </ProgressBar>
        </Col>
        <Col md={12}>
            <ButtonGroup vertical>
                <Button size="lg" colors="primary">按钮一</Button>
                <Button size="lg" colors="warning">按钮二</Button>
                <Button size="lg" colors="info">按钮三</Button>
            </ButtonGroup>
            <ButtonGroup>
               <Button colors="primary">按钮一</Button>
               <Button colors="primary">按钮二</Button>
               <Button colors="primary">按钮三</Button>
           </ButtonGroup>
        </Col>

        <Col md={12}>
        <Panel header="Panel header" footer='Panel footer'>
                  Panel content
                </Panel>
        </Col>
        <Col md={12}>
        <Breadcrumb>
            <Breadcrumb.Item href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href='http://getbootstrap.com/components/#breadcrumbs'>
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Data
            </Breadcrumb.Item>
        </Breadcrumb>
        </Col>
        <Col md={12}>
            <Pagination
                boundaryLinks
                items={10}
                activePage={this.state.activePage}
                onSelect={this.handleSelect.bind(this)} />
            <Pagination
                first
                last
                prev
                next
                boundaryLinks
                items={20}
                maxButtons={5}
                activePage={this.state.activePage}
                onSelect={this.handleSelect.bind(this)} />
        </Col>
        <Col md={12}>
        <Tabs navtype="simple" contenttype="" defaultActiveKey="2">
               <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
               <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
               <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
               <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
               <TabPanel tab="Tab 5" key="5">测试测试 5</TabPanel>
               <TabPanel tab="Tab 6" key="6">测试测试 6</TabPanel>
               <TabPanel tab="Tab 7" key="7">测试测试 7</TabPanel>
           </Tabs>
           <Tabs navtype="fill" contenttype="" defaultActiveKey="2">
               <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
               <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
               <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
               <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
               <TabPanel tab="Tab 5" key="5">测试测试 5</TabPanel>
               <TabPanel tab="Tab 6" key="6">测试测试 6</TabPanel>
               <TabPanel tab="Tab 7" key="7">测试测试 7</TabPanel>
           </Tabs>
        </Col>
        <Col md={12}>
            <Dropdown title="默认下拉" activeKey="B">
               <Dropdown.Item eventKey="A">下拉一</Dropdown.Item>
               <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
               <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
               <Dropdown.Item eventKey="D">下拉4</Dropdown.Item>
               <Dropdown.Item divider>分割线</Dropdown.Item>
               <Dropdown.Item eventKey="A" disabled>不可点击</Dropdown.Item>
               <Dropdown.Item eventKey="B">活跃的</Dropdown.Item>
               <Dropdown.Item href="https://www.tinper.org">锚点</Dropdown.Item>
           </Dropdown>
        </Col>
        <Col md={12}>
        <div className='static-modal'>
            <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>这是题目</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        这是一些描述。。。
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>关闭</Button>
                        <Button colors="primary">确认</Button>
                    </Modal.Footer>
                </Modal.Dialog>
        </div>

        </Col>
        <Col md={12}>
            <Button onClick={this.simpleFn}>simple show</Button>
            <Button onClick={this.simpleFnsuccess} colors="success">success show</Button>
            <Button onClick={this.simpleFninfo} colors="info">info show</Button>
            <Button onClick={this.simpleFndark} style={{ background: "rgb(97,97,97)", color: "#fff"}}>dark show</Button>
            <Button onClick={this.simpleFndanger} colors="danger">danger show</Button>
            <Button onClick={this.simpleFnwarning} colors="warning">warning show</Button>
        </Col>
        <Col md={12}>
            <Alert colors="news">
                <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
            </Alert>
            <Alert colors="news" className ="dark">
                <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
            </Alert>
        </Col>
        <Col md={12} style={{height:100}}>
            <Popconfirm
                id="popover-basic"
                placement="right"
                positionLeft={200}
                title="提醒"
              >
                您喜欢使用tinper-bee组件库吗？

              </Popconfirm>
        </Col>
        <Col md={12} className='demo-tooltip'>
                <Tooltip id="tooltip1"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
                <Tooltip id="tooltip2" placement="top"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
                <Tooltip id="tooltip3" placement="right"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
                <Tooltip id="tooltip4" placement="bottom"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
            </Col>
            <Col md={12}>
            <Col sm={2} xs={4}>
                   <Loading  colors="primary"/>
               </Col>
               <Col sm={2} xs={4}>
                   <Loading  colors="success"/>
               </Col>
               <Col sm={2} xs={4}>
                   <Loading  colors="warning"/>
               </Col>
               <Col sm={2} xs={4}>
                   <Loading  loadingType="line" colors="primary"/>
               </Col>
               <Col sm={2} xs={4}>
                   <Loading  loadingType="line" colors="success"/>
               </Col>
               <Col sm={2} xs={4}>
                   <Loading  loadingType="line" colors="warning"/>
               </Col>
               </Col>
               <Col md={12}>
               <Col sm={2} xs={4}>
                   <Loading size="sm"/>
               </Col>
               <Col sm={2}>
                   <Loading />
               </Col>
               <Col sm={2}>
                   <Loading size="lg"/>
               </Col>
               <Col sm={2}>
                   <Loading loadingType="line" size="sm"/>
               </Col>
               <Col sm={2}>
                   <Loading loadingType="line" />
               </Col>
               <Col sm={2}>
                   <Loading loadingType="line" size="lg"/>
               </Col>
                </Col>
                <Col md={12} className='demo-checkbox'>
                    <Checkbox disabled> checkbox</Checkbox>
                    <Checkbox checked> checkbox</Checkbox>
                 </Col>
                 <Col md={12}>
                    <FormControl placeholder="Enter text"/>
                  </Col>
                  <Col md={12}>
                  <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon>.00</InputGroup.Addon>
                                        <FormControl type="text" />
                                        <InputGroup.Addon>.00</InputGroup.Addon>
                                    </InputGroup>

                                    <InputGroup>
                                        <InputGroup.Addon>.00</InputGroup.Addon>
                                        <FormControl type="text" />
                                    </InputGroup>

                                    <InputGroup>
                                        <FormControl type="text" />
                                        <InputGroup.Addon>.00</InputGroup.Addon>
                                    </InputGroup>
                    </FormGroup>
                   </Col>
                   <Col md={12}>
                   <Col sm={2}>
                                      <Switch checked={true} size='sm' />
                                  </Col>
                                  <Col sm={2}>
                                      <Switch checked={true} />
                                  </Col>
                                  <Col sm={2}>
                                      <Switch checked={true} size='lg' />
                                  </Col>
                    </Col>
                    <Col md={12} className="height-150">
                    <Select size="lg" defaultValue="lucy" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>
                                      <Option value="jack">Jack</Option>
                                      <Option value="lucy">Lucy</Option>
                                      <Option value="disabled" disabled>Disabled</Option>
                                      <Option value="yiminghe">Yiminghe</Option>
                                    </Select>
                                    <Select defaultValue="lucy" style={{ width: 200,marginRight: 6 }} onChange={this.handleChange}>
                                      <Option value="jack">Jack</Option>
                                      <Option value="lucy">Lucy</Option>
                                      <Option value="disabled" disabled>Disabled</Option>
                                      <Option value="yiminghe">Yiminghe</Option>
                                    </Select>
                                    <Select size="sm" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
                                      <Option value="jack">Jack</Option>
                                      <Option value="lucy">Lucy</Option>
                                      <Option value="disabled" disabled>Disabled</Option>
                                      <Option value="yiminghe">Yiminghe</Option>
                                    </Select>
                     </Col>
                     <Col md={12}>
                     <div className="height-150">
                                            <Cascader options = {options} />
                                         </div>
                      </Col>
                      <Col md={12}>
                            <Upload {...props}>
                                <Button type="primary" shape="border">
                                  <Icon type="upload" /> Click to Upload
                                </Button>
                            </Upload>
                            <Upload {...demo3props}>
                                <Button type="primary" shape="border">
                                  <Icon type="upload" /> Click to Upload
                                </Button>
                            </Upload>
                       </Col>
                       <Col md={12}>

                        </Col>


      </Row>
    );
  }
}



export default MyComponent;