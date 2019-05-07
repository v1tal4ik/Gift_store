import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getOrder} from '../../modules/products/reducer';
import {getValue, getSymbol} from '../../modules/currency/reducer';
import './Profit.css';



class Profit extends Component {
  state={
      profit:0
  }
  componentDidMount(){
      const {orders} = this.props;
      let sum = 0;
      orders.forEach((item)=>{sum+=item.price});
      this.setState({profit:sum})
  }
  render(){
      const {currencyValue,currencySymbol} = this.props;
      return <div className='profit-block'>
                <p className='profit-text'>Profit: {(this.state.profit * currencyValue)} {currencySymbol} </p>
            </div>
  }
}

export default connect(state => ({
    currencyValue:getValue(state),
    currencySymbol:getSymbol(state),
    orders:getOrder(state)
  }))(Profit);

