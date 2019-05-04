import React,{Component} from 'react';
import {Select } from 'antd';
import { connect } from 'react-redux';
import {changeCurrencyValue,changeCurrencySymbol} from '../../modules/currency/actions';
import {getEuro, getUSD,getUA} from '../../modules/currency/reducer';
import './antd-select.css';


const Option = Select.Option;

class Selects extends Component {

    handleChange=(e)=>{
        const {changeCurrencyValue,changeCurrencySymbol,euro,usd,ua}= this.props;
        let value,symbol;
        if(e==='euro'){value = euro; symbol='€'}
        if(e==='usd'){value = usd; symbol='$'}
        if(e==='ua'){value = ua; symbol='₴'}
        changeCurrencyValue(value);
        changeCurrencySymbol(symbol);
      }
  render(){
    return (
     <Select 
                optionFilterProp="children"
                className = 'currency-select-block'
                defaultValue = 'EURO'
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
    ua:getUA(state)
  }),{changeCurrencyValue,changeCurrencySymbol})(Selects);
