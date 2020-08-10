import React, {Component} from 'react';
import clipboard from 'clipboard';
import classnames from 'classnames';
import Icon from 'bee-icon';
import ReactDOM from 'react-dom';
import Tooltip from 'bee-tooltip';
import PropTypes from 'prop-types';
import { getComponentLocale } from 'bee-locale/build/tool';
import i18n from './i18n.js';
import Modal from 'bee-modal';
import FormControl from 'bee-form-control';
import Button from 'bee-button';

//text和target都写的时候，target无效。 text的cut改为copy。
// target可以传css3选择器
const propTypes = {
    action: PropTypes.oneOf(['copy', 'cut',null]),
    text: PropTypes.string,
    success: PropTypes.func,
    error: PropTypes.func,
    locale: PropTypes.object
};
const defaultProps = {
    action: 'copy',
    text: '',
    target: '',
    success: () => {
    },
    error: () => {
    },
    locale: {}
};

class Clipboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currect: false,
            html: '',
            ready: false,
            id: 'id' + Math.round((Math.random() * 1000) + 1) + new Date().getTime(),
            modalShow:false
        };
    }

    componentWillMount() {
        let self = this;
        let { success, error} = this.props;

        let id = this.state.id;
        let cb = new clipboard('#' + id);
        cb.on('success', function (e) {
            self.setState({
                currect: true,
                ready: true
            });
            e.clearSelection();
            if (success instanceof Function) success();
        });
        cb.on('error', function (e) {
            self.setState({
                modalShow:true,
                html: e.text
            });
            ReactDOM.findDOMNode(self.refs.text).select();
            if (error instanceof Function) error();
        });
    }

    blur = () => {
        this.setState({
            currect: false,
            ready: false
        });
    }
    close=()=>{
        this.setState({
            modalShow:false
        });
    }
    render() {
        let {action, text, target} = this.props;
        if (text) action = 'copy';

        let locale = getComponentLocale(this.props, this.context, 'Clipboard', () => i18n);
        let tootipContent = locale[action];
        if(this.state.ready){
            tootipContent = locale[`${action}Ready`]
        }

        return (
            <Tooltip className='u-clipboard-tooltip'
                overlay={tootipContent}
                placement="top">
            <span
                onMouseOut={this.blur}
                className="u-clipboard"
                id={this.state.id}
                data-clipboard-action={action}
                data-clipboard-target={target}
                data-clipboard-text={text}>
                        {
                            this.props.children ?
                                this.props.children :
                                (
                                    <Icon
                                        className={classnames({
                                            'uf-correct': this.state.currect,
                                            'uf-copy': !this.state.currect
                                        })}
                                    />
                                )
                        }
                <Modal show={ this.state.modalShow } onHide={ this.close }>
                    <Modal.Header closeButton>
                        <Modal.Title > Ctrl+C {locale['copyToClipboard']} </Modal.Title>
                    </Modal.Header >
                    <Modal.Body >
                        <FormControl  ref="text" type="text" readOnly value={this.state.html}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={ this.close }> {locale['close']} </Button>
                    </Modal.Footer>
                </Modal>
            </span>
            </Tooltip>

        )
    }
};
Clipboard.propTypes = propTypes;
Clipboard.defaultProps = defaultProps;
export default Clipboard;