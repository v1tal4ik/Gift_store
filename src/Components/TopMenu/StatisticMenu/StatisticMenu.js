import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Selects from '../Select';
import Search from '../Search';
import FilterDate from './FilterDate';
import { connect } from 'react-redux';
import {fetchFilterOrderRequest,fetchDeleteOrderRequest} from '../../../modules/products/actions';
import {getOrder} from '../../../modules/products/reducer';
import './StatisticMenu.css';



class StatisticMenu extends Component {
 state={
   day:'',
   month:'',
   year:''
 }

 handleChangeDate=(e,name)=>{
  this.setState({[name]:e});
 }

 handleFilter=()=>{
   const {fetchFilterOrderRequest}= this.props;
   fetchFilterOrderRequest(this.state);
 }

 handleClear=()=>{
   const {orders,fetchDeleteOrderRequest} =this.props;
   let removeOrderId = orders.map(item=>item.id);
   console.log(removeOrderId);
   fetchDeleteOrderRequest(removeOrderId);
 }

  render(){
      const{changeMod,orders} = this.props;
    return (
      <div className="top-menu">
          <div className='option-block'>
          <FilterDate changeDate={this.handleChangeDate.bind(this)}/>
          <button className='top-btn' onClick={this.handleFilter}>Filter</button>
          </div>
          <Selects />
          <button className='top-btn clear' onClick={this.handleClear}>Clear All({orders.length})</button>
          <Link to='/'><button className='top-btn' onClick={changeMod}>Shop</button></Link>
      </div>
    );
  }
}

export default connect(state=>({
  orders:getOrder(state)
}),{fetchFilterOrderRequest,fetchDeleteOrderRequest})(StatisticMenu);
