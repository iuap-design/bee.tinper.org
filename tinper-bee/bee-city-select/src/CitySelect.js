
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'bee-select';
import findIndex from 'lodash.findindex';	
import { zh, en, tw } from './provinceData';
const Option = Select.Option;

const propTypes={
    defaultValue:PropTypes.object,
    value:PropTypes.object,
    onChange:PropTypes.func,
    provinceData:PropTypes.array,
    lang:PropTypes.string
}
const defaultProps={
    defaultValue:zh.defaultValue,
    value:null,
    onChange:()=>{},
    provinceData:zh.provinceData,
    lang:'zh_CN'
}
class CitySelect extends Component {
	constructor(props) {
        super(props);
        let provinceData = props.provinceData;
        if(props.lang == 'zh_TW'){
            provinceData = tw.provinceData;
        }else if(props.lang == 'en_US'){
            provinceData = en.provinceData
        }
		this.state = {
            province:'北京',
			provinceIndex: 0,
            cityIndex: 0,
            provinceData:provinceData,
			cities: provinceData[0].city,
      		secondCity: provinceData[0].city[0].name,
      		areas: provinceData[0].city[0].area,
      		secondArea: provinceData[0].city[0].area[0],
		}
    }
    componentDidMount(){
        let {defaultValue:_defaultValue,value,lang} = this.props;
        let provinceData = this.state.provinceData;
        if(lang == 'zh_TW'){
            provinceData = tw.provinceData;
            _defaultValue = tw.defaultValue;
        }else if(lang == 'en_US'){
            provinceData = en.provinceData
            _defaultValue = en.defaultValue;
        }
        let defaultValue=value?value:_defaultValue;
        let province=defaultValue.province;
        let provinceIndex=this.getIndex('province',defaultValue.province);
        let cityIndex=this.getIndex('city',defaultValue.city,provinceIndex);
        let cities=provinceData[provinceIndex].city;
        let secondCity=defaultValue.city;
        let areas=cities[cityIndex].area;
        let secondArea=defaultValue.area;
        this.setState({
            province,
            provinceIndex,
            cityIndex,
            cities,
            secondCity:secondCity,
            areas,
            secondArea,
            provinceData
        })
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.value)return;
        const {province,city,area} = nextProps.value;
        this.setState({
            province,
            secondCity:city,
            secondArea:area
        })
        this.handleProvinceChange(province);
    }

    getIndex=(type,name,provinceIndex)=>{
        let provinceData = this.state.provinceData;
        let provinceI=provinceIndex||this.state.provinceIndex;
        switch (type){
            case 'province':
            return findIndex(provinceData, function(province) {
                return province.name == name;
            });
            break;
            case 'city':
            return findIndex(provinceData[provinceI].city, function(city) {
                return city.name == name;
            });
            break;
        }
    }
	handleProvinceChange=(value)=> {
        let provinceData = this.state.provinceData;
        let index=this.getIndex('province',value);
        let city=provinceData[index].city[0].name;
        let area=provinceData[index].city[0].area[0];
	    this.setState({
          province:value,
	      cities: provinceData[index].city,
	      secondCity: city,
      	  provinceIndex : index,
      	  areas: provinceData[index].city[0].area,
      	  secondArea: area,
        });
        this.onChange(value,city,area)
	}
	handleCityChange=(value)=> {
        let provinceData = this.state.provinceData;
        let index=this.getIndex('city',value);
        let provinceIndex = this.state.provinceIndex;
        let area=provinceData[provinceIndex].city[index].area[0];
	    this.setState({
	      secondCity: provinceData[provinceIndex].city[index].name,
	      areas: provinceData[provinceIndex].city[index].area,
      	  secondArea: area,
      	  cityIndex : value
        });
        this.onChange(undefined,value,area);
	}
	onSecondAreaChange=(value)=> {
	    this.setState({
	      secondArea: value,
        });
        this.onChange(undefined,undefined,value);
    }
    onChange=(province,city,area)=>{
        this.props.onChange({
            province:province||this.state.province,
            city:city||this.state.secondCity,
            area:area
        })
    }
    
	render() {
	    const provinceOptions = this.state.provinceData.map((province,index) => <Option key={province.name}>{province.name}</Option>);
	    const cityOptions = this.state.cities.map((city,index) => <Option key={city.name}>{city.name}</Option>);
	    const areaOptions = this.state.areas.map((area,index) => <Option key={area}>{area}</Option>);
	    return (
	      <div className={classNames("u-city-select",this.props.className)}>
	        <Select 
                value={this.state.province} 
                className="province" 
                onChange={this.handleProvinceChange}>
	          {provinceOptions}
	        </Select>
	        <Select 
                value={this.state.secondCity} 
                className="city" 
                onChange={this.handleCityChange}>
	          {cityOptions}
	        </Select>
	        <Select 
                value={this.state.secondArea} 
                className="area" 
                onChange={this.onSecondAreaChange}>
	          {areaOptions}
	        </Select>
	    	
	      </div>
	    );
	}
}
CitySelect.propTypes = propTypes;
CitySelect.defaultProps = defaultProps;
export default CitySelect;