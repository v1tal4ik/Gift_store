import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Selects from '../Select';
import Search from '../Search';
import FilterDate from './FilterDate';
import { connect } from 'react-redux';
import './StatisticMenu.css';



class StatisticMenu extends Component {
 
  render(){
      const{changeMod} = this.props;
    return (
      <div className="top-menu">
          <div className='option-block'>
          <FilterDate />
          <button className='top-btn' onClick={changeMod}>Filter</button>
          </div>
          <Selects />
          <Search />
          <button className='top-btn clear' onClick={changeMod}>Clear All</button>
          <Link to='/'><button className='top-btn' onClick={changeMod}>Shop</button></Link>
      </div>
    );
  }
}

export default connect(state=>({
  
}),{})(StatisticMenu);
