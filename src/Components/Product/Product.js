import React,{Component} from 'react';
import Rodal from 'rodal';
import { connect } from 'react-redux';
import {getCurrentDate} from '../../modules/date/reducer';
import {setBuy} from '../../api';
import './Product.css';
import 'rodal/lib/rodal.css';

class Product extends Component {
  state={
    visible:false,
    message:''
  }
  async handleBuy(e){
    const {currentDate,name,img,price} = this.props;
    let [year,month,day] = currentDate.split('-')

    this.addClass();
    let result = await setBuy(year,month,day,name,img,price);
    this.removeClass();
    this.setState({visible:true,message:result})
  }

  addClass=()=>{
    let shop = document.getElementById('shop');
    shop.classList.add('wait');
  }

  removeClass=()=>{
    let shop = document.getElementById('shop');
    shop.classList.remove('wait');
  }


    closeModalBuy=()=>{
      this.setState({visible:false});
    }



  render(){
      const {name,img,price,currencyValue,currencySymbol} = this.props;
    return (
      <>
        <div className='shop-item'>
                <img className='shop-item-img' src={img} alt='product' />
                <p className='shop-item-name'>{name}</p>
                <button className='top-btn' onClick={this.handleBuy.bind(this)}>buy</button>
                <span className='price-item'>{price*currencyValue} {currencySymbol}</span>
          </div>
          <Rodal visible={this.state.visible} onClose={this.closeModalBuy.bind(this)}>
            <div className='modal-buy'>{this.state.message}</div>
          </Rodal>
      </>
    );
  }
}

export default connect(state=>({
  currentDate:getCurrentDate(state)
}))(Product);
