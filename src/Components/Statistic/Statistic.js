import React,{Component} from 'react';
import Preloader from '../Preloader/Preloader';
import OrderItem from '../OrderItem';
import Profit from '../Profit';
import { connect } from 'react-redux';
import {fetchOrderRequest} from '../../modules/products/actions';
import {getOrder, getIsLoading} from '../../modules/products/reducer';
import {getValue, getSymbol} from '../../modules/currency/reducer';
import {getInputValue} from '../../modules/input/reducer';
import './Statistic.css';



class Statistic extends Component {
 
  async componentDidMount(){
   this.callOrderRequest();
   
  }

  callOrderRequest=()=>{
    const {fetchOrderRequest} = this.props;
    fetchOrderRequest();
  }

  render(){
      const {isLoading,orders,currencyValue,currencySymbol} = this.props;
    if(isLoading){return <Preloader />}
    if(orders.length > 0){
        return (
          <>
          <div id='statistic-list' className='statistic-list'>
              <div className='statistic-list-title'>
                      <span className='table-title'>id</span>
                      <span className='table-title'>Fhoto</span>
                      <span className='table-title'>Name</span>
                      <span className='table-title'>Price</span>
                      <span className='table-title'>Date</span>
              </div>
              {orders.map((item)=>{
                const {id,img,name,price,day,month,year} = item;
                let fullDate = [day,month,year].join('-');
                return <OrderItem  
                            key ={id}
                            id={id}
                            img={img} 
                            name={name}
                            price={price}
                            currencyValue={currencyValue}
                            currencySymbol={currencySymbol}
                            date={fullDate}
                            />
              })}
        
          </div>
          <Profit />
          </>
        )
       
     }
     return <div className='not-found'>Not found :(</div>
  }
}

export default connect(state => ({
    isLoading: getIsLoading(state),
    currencyValue:getValue(state),
    currencySymbol:getSymbol(state),
    inputValue:getInputValue(state),
    orders:getOrder(state)
  }),{fetchOrderRequest})(Statistic);

