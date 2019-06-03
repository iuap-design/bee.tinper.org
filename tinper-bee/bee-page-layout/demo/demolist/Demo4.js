/**
 *
 * @title 主子表(左右)
 * @description 
 *
 */
import React, { Component } from 'react';
import PageLayout from '../../src';

const Header = PageLayout.Header;
const SearchArea = PageLayout.SearchArea;
const Content = PageLayout.Content;
const TableContent = PageLayout.TableContent;
const LeftContent = PageLayout.LeftContent;
const RightContent = PageLayout.RightContent;

class Demo4 extends Component {
    render() {
        return (
            <div className="demo4">
                <PageLayout>
                    <Header>
                        我是Header区域
                    </Header>
                    <SearchArea>
                        我是查询区域
                    </SearchArea>
                    <Content>
                        <LeftContent md={6}>
                            <TableContent>
                                我是表格区域主表
                            </TableContent>
                        </LeftContent>
                        <RightContent md={6}>
                            <TableContent>
                                我是表格区域子表
                            </TableContent>
                        </RightContent>
                    </Content>
                </PageLayout>
            </div>
        )
    }
}
export default Demo4