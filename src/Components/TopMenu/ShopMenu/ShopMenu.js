import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Selects from '../Select';
import Search from '../Search';
import { connect } from 'react-redux';
import {changeCurrentDate} from '../../../modules/date/actions';
import {getCurrentDate} from '../../../modules/date/reducer';
import './ShopMenu.css';



class ShopMenu extends Component {
  handleChangeDate=(e)=>{
    const {changeCurrentDate} = this.props;
    changeCurrentDate(e.target.value);
  }

  render(){
    return (
      <div className="top-menu">
          <div className='option-block'>
              <label>Current date:</label>
              <input  type='date' className='date-inp' value={this.props.currentDate} onChange={this.handleChangeDate}/>
              <Selects />
          </div>
          <Search />
          <Link to='/statistic'><button className='top-btn' onClick={this.props.changeMod}>View statistic</button></Link>
         
      </div>
    );
  }
}

export default connect(state=>({
  currentDate:getCurrentDate(state)
}),{changeCurrentDate})(ShopMenu);
