import React from 'react';
import PropTypes from 'prop-types';
import './OrderItem.css';


const OrderItem =({id,name,img,price,date,currencyValue,currencySymbol})=>(
  <div className='statistic-list-item'>
      <span id='id' className='table-item'>{id}</span>
      <span className='table-item'>
      <img src={img} className='img-table' alt={name} />
      </span>
      <span id='name' className='table-item'>{name}</span>
      <span id='price' className='table-item'>{(price*currencyValue)} {currencySymbol}</span>
      <span id='date' className='table-item'>{date}</span>
  </div>
)

OrderItem.propTypes ={
  id:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  img:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  date:PropTypes.string.isRequired,
  currencyValue:PropTypes.number.isRequired,
  currencySymbol:PropTypes.string.isRequired
};

export default OrderItem;

