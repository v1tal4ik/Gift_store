import React,{Component} from 'react';
import Product from '../Product';
import { connect } from 'react-redux';
import {fetchProductRequest} from '../../modules/products/actions';
import {fetchCurrencyRequest} from '../../modules/currency/actions';
import {getProduct, getIsLoading} from '../../modules/products/reducer';
import {getValue, getSymbol} from '../../modules/currency/reducer';
import {getInputValue} from '../../modules/input/reducer';
import './Shop.css';

class Store extends Component {
  componentDidMount(){
    const{fetchProductRequest,fetchCurrencyRequest}= this.props;
    fetchProductRequest();
    fetchCurrencyRequest();
  }
  
  render(){
    const {products,isLoading,currencyValue,currencySymbol,inputValue} = this.props;
    if(isLoading){
      return (
        <div id='loader-page' className='loader-page'>
          <div id="fountainTextG">
              <div id="fountainTextG_1" className="fountainTextG">l</div>
              <div id="fountainTextG_2" className="fountainTextG">o</div>
              <div id="fountainTextG_3" className="fountainTextG">a</div>
              <div id="fountainTextG_4" className="fountainTextG">d</div>
              <div id="fountainTextG_5" className="fountainTextG">i</div>
              <div id="fountainTextG_6" className="fountainTextG">n</div>
              <div id="fountainTextG_7" className="fountainTextG">g</div>
              <div id="fountainTextG_8" className="fountainTextG">.</div>
              <div id="fountainTextG_9" className="fountainTextG">.</div>
              <div id="fountainTextG_10" className="fountainTextG">.</div>
          </div>
        </div>
      )
    }
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
            return null;
          })
        }
      </div>
    }
    return null;
  }
}

export default connect(state => ({
  isLoading: getIsLoading(state),
  products: getProduct(state),
  currencyValue:getValue(state),
  currencySymbol:getSymbol(state),
  inputValue:getInputValue(state)
}),{fetchProductRequest,fetchCurrencyRequest})(Store);
