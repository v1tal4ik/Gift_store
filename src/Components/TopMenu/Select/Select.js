import React,{Component} from 'react';
import {Select } from 'antd';
import { connect } from 'react-redux';
import {changeCurrencyValue,changeCurrencySymbol,changeCurrencyName} from '../../../modules/currency/actions';
import {getEuro, getUSD,getUA,getName} from '../../../modules/currency/reducer';
import './antd-select.css';


const Option = Select.Option;

class Selects extends Component {
    handleChange=(e)=>{
        const {changeCurrencyValue,changeCurrencySymbol,changeCurrencyName,euro,usd,ua}= this.props;
        let value,symbol, name;
        if(e==='euro'){value = euro; symbol='€'; name='EURO';}
        if(e==='usd') {value = usd;  symbol='$'; name='USD';}
        if(e==='ua')  {value = ua;   symbol='₴'; name='UAH';}
        changeCurrencyValue(value);
        changeCurrencySymbol(symbol);
        changeCurrencyName(name);
      }
  render(){
    return (
     <Select 
                optionFilterProp="children"
                className = 'currency-select-block'
                defaultValue = {this.props.currencyName}
                onChange={this.handleChange}
                >
                <Option key ='EURO' value='euro'>EURO</Option>
                <Option key ='USD'  value='usd'>USD</Option>
                <Option key ='UA' value='ua'>UA</Option>
            </Select>
    );
  }
}

export default connect(state => ({
    euro:getEuro(state),
    usd:getUSD(state),
    ua:getUA(state),
    currencyName:getName(state)
  }),{changeCurrencyValue,changeCurrencySymbol,changeCurrencyName})(Selects);
