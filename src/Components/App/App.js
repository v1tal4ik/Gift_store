import React,{Component} from 'react';
import TopMenu from '../TopMenu';
import Shop from '../Shop';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render(){
    return (
      <>
      <TopMenu />
      <Shop />
      </>
    );
  }
}

export default connect()(App);
