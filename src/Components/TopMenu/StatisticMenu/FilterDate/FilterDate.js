import React,{Component} from 'react';
import {Select } from 'antd';
import { connect } from 'react-redux';
import {changeCurrencyValue,changeCurrencySymbol} from '../../../../modules/currency/actions';
import {getEuro, getUSD,getUA} from '../../../../modules/currency/reducer';
import './antd-select.css';
import './FilterDate.css';


const Option = Select.Option;

const day = [];
const month =[];
const year = [];

for(let d=1;d<32;d++){
  day[d]=d;
}
for(let m=1; m<13 ;m++){
    (m<10) ? (month[m]='0'+ m): (month[m]= m);
  
}

for(let i=1, y=2015;i<10; i++ , y++ ){
  year[i]=y;
}

class FilterDate extends Component {
  render(){
    return (
      <>
      <Select 
                optionFilterProp="children"
                className = 'date-select-block'
                defaultValue = 'day'
                maxTagCount={2}
                onChange={this.handleChange}
                >
                {day.map(index=><Option key={index} value={index} >{index}</Option>)}
      </Select>
      <Select 
                optionFilterProp="children"
                className = 'date-select-block'
                defaultValue = 'month'
                onChange={this.handleChange}
                >
                {month.map(index=><Option key={index} value={index} >{index}</Option>)}
      </Select>
      <Select 
                optionFilterProp="children"
                className = 'date-select-block-year'
                defaultValue = 'year'
                onChange={this.handleChange}
                >
                {year.map(index=><Option key={index} value={index} >{index}</Option>)}
      </Select>
      </>
    );
  }
}

export default connect(state => ({
    euro:getEuro(state),
    usd:getUSD(state),
    ua:getUA(state)
  }),{changeCurrencyValue,changeCurrencySymbol})(FilterDate);
