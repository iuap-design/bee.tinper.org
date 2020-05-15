/**
 *
 * @title 卡表
 * @description 
 *
 */
import React, { Component } from 'react';
import PageLayout from '../../src';

const Header = PageLayout.Header;
const SearchArea = PageLayout.SearchArea;
const TableContent = PageLayout.TableContent;

class Demo1 extends Component {
    render() {
        return (    
            <div className="demo5">
                <PageLayout>
                    <Header>
                        我是Header区域
                    </Header>
                    <SearchArea>
                        我是表单区域
                    </SearchArea>
                    <TableContent>
                        我是表格区域
                    </TableContent>
                </PageLayout>
            </div>
        )
    }
}
export default Demo1