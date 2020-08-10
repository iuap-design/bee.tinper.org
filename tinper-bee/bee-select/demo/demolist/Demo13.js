/**
 * @title 定制回填内容
 * @description 使用 optionLabelProp 指定回填到选择框的 Option 属性。
 */
import React, { Component } from "react";
import Select from "../../src";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class Demo13 extends Component {
    render () {
        return (
            <Select
                multiple
                style={{ width: 200, marginRight: 6 }}
                placeholder="select one country"
                defaultValue={['china']}
                onChange={handleChange}
                optionLabelProp="label"
            >
                <Option value="china" label="China">
                    China (中国)
                </Option>
                <Option value="russia" label="Russia">
                    Russia (俄罗斯)
                </Option>
                <Option value="australia" label="Australia">
                    Australia (澳大利亚)
                </Option>
                <Option value="korea" label="Korea">
                    Korea (韩国)
                </Option>
            </Select>
        )
    }
}
export default Demo13;