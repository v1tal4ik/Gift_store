import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import { connect } from 'react-redux';
import {fetchProductRequest} from '../../modules/products/actions';
import {fetchCurrencyRequest} from '../../modules/currency/actions';
import {getProduct, getIsLoading} from '../../modules/products/reducer';
import {getValue, getSymbol} from '../../modules/currency/reducer';
import {getInputValue} from '../../modules/input/reducer';
import Preloader from '../Preloader/Preloader';
import './Shop.css';
import './Preloader.css';

class Shop extends Component {
  componentDidMount(){
    const{fetchProductRequest,fetchCurrencyRequest}= this.props;
    fetchProductRequest();
    fetchCurrencyRequest();
  }
  
  render(){
    const {products,isLoading,currencyValue,currencySymbol,inputValue} = this.props;
    if(isLoading){return <Preloader />}
    if(products.length>0){
       return <div id='shop' className='shop'>
        {
          products.map((item)=>{
            if(inputValue){
                if(item.name.indexOf(inputValue)!==-1){
                  return <Product key={item.id} name={item.name} img={item.img} price={item.price} currencyValue={currencyValue} currencySymbol={currencySymbol}/>
                }
            }else{
              return <Product key={item.id} name={item.name} img={item.img} price={item.price} currencyValue={currencyValue} currencySymbol={currencySymbol}/>
            }
            return null
          })
        }
      </div>
    }
    return null;
  }
}

Shop.propTypes ={
  products:PropTypes.array.isRequired,
  isLoading:PropTypes.bool.isRequired,
  currencyValue:PropTypes.number.isRequired,
  currencySymbol:PropTypes.string.isRequired,
  inputValue:PropTypes.string.isRequired
};

export default connect(state => ({
  isLoading: getIsLoading(state),
  products: getProduct(state),
  currencyValue:getValue(state),
  currencySymbol:getSymbol(state),
  inputValue:getInputValue(state)
}),{fetchProductRequest,fetchCurrencyRequest})(Shop);
