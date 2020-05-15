import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import SearchArea from './SearchArea';
import TableContent from './TableContent';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};


class PageLayout extends Component {
    render() {
        let { className, children, ...other } = this.props;
        let classes = 'bee-page-layout';
        if(className)classes+=' '+className;
        return ( 
            <div className={classes} {...other} >
                {this.props.children}
            </div>
        )
    }
}


PageLayout.propTypes = propTypes; 
PageLayout.defaultProps = defaultProps;
PageLayout.Header = Header;
PageLayout.Content = Content;
PageLayout.LeftContent = LeftContent;
PageLayout.RightContent = RightContent;
PageLayout.SearchArea = SearchArea;
PageLayout.TableContent = TableContent;

export default PageLayout;