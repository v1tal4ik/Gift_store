import React,{Component} from 'react';
import { connect } from 'react-redux';
import {changeInputValue} from '../../../modules/input/actions';
import './Search.css';



class Search extends Component {

  handleSearch=(e)=>{
    const {changeInputValue}= this.props;
    changeInputValue(e.target.value);
  }

  render(){
    return (
          <>
          <input type='text' className='search-inp' placeholder='name...' onChange={this.handleSearch}/>
          </>
    );
  }
}

export default connect(null,{changeInputValue})(Search);
