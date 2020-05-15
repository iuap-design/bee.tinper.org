/**
 *
 * @title 主子表(上下)
 * @description 
 *
 */
import React, { Component } from 'react';
import PageLayout from '../../src';

const Header = PageLayout.Header;
const SearchArea = PageLayout.SearchArea;
const TableContent = PageLayout.TableContent;

class Demo3 extends Component {
    render() {
        return (
            <div className="demo3">
                <PageLayout>
                    <Header>
                        我是Header区域
                    </Header>
                    <SearchArea>
                        我是查询区域
                    </SearchArea>
                    <TableContent>
                        我是表格区域主表
                    </TableContent>
                    <TableContent>
                        我是表格区域子表
                    </TableContent>
                </PageLayout>
            </div>
        )
    }
}
export default Demo3