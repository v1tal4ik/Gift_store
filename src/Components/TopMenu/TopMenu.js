import React,{Component} from 'react';
import Selects from '../Select';
import { connect } from 'react-redux';
import {changeCurrentDate} from '../../modules/date/actions';
import {changeInputValue} from '../../modules/input/actions';
import {getCurrentDate} from '../../modules/date/reducer';
import './TopMenu.css';



class TopMenu extends Component {
  handleChangeDate=(e)=>{
    const {changeCurrentDate} = this.props;
    changeCurrentDate(e.target.value);
  }

  handleSearch=(e)=>{
    const {changeInputValue}= this.props;
    changeInputValue(e.target.value);
  }

  render(){
    return (
      <div className="top-menu">
          <div className='option-block'>
              <label>Current date:</label>
              <input  type='date' className='date-inp' value={this.props.currentDate} onChange={this.handleChangeDate}/>
              <Selects />
          </div>
          <div className='search-block'>
            <input type='text' className='serch-inp' placeholder='name...' onChange={this.handleSearch}/>
            <button className='top-btn' >Search</button>
          </div>
          <button className='top-btn' >View statistic</button>
      </div>
    );
  }
}

export default connect(state=>({
  currentDate:getCurrentDate(state)
}),{changeCurrentDate,changeInputValue})(TopMenu);
