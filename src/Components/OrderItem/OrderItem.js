import React,{Component} from 'react';
import Rodal from 'rodal';
import { connect } from 'react-redux';
import {getCurrentDate} from '../../modules/date/reducer';
import {setBuy} from '../../api';
import './OrderItem.css';
import 'rodal/lib/rodal.css';

class OrderItem extends Component {
  
  render(){
      const {id,name,img,price,date,currencyValue,currencySymbol} = this.props;
    return (
      <div className='statistic-list-item'>
        <span className='table-item'>{id}</span>
        <span className='table-item'>
        <img src={img} className='img-table' alt={name} />
        </span>
        <span className='table-item'>{name}</span>
        <span className='table-item'>{(price*currencyValue)} {currencySymbol}</span>
        <span className='table-item'>{date}</span>
      </div>
    );
  }
}

export default OrderItem;
