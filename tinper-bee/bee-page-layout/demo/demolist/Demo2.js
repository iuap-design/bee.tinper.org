/**
 *
 * @title 树表/卡
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

class Demo2 extends Component {
    render() {
        return (
            <div className="demo2">
                <PageLayout>
                    <Header>
                        我是Header区域
                    </Header>
                    <Content>
                        <LeftContent>
                            我是树区域
                        </LeftContent>
                        <RightContent>
                            <SearchArea>
                                我是查询区域
                            </SearchArea>
                            <TableContent>
                                我是表格区域
                            </TableContent>
                        </RightContent>
                    </Content>
                </PageLayout>
            </div>
        )
    }
}
export default Demo2