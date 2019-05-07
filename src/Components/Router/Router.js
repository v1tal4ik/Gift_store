import React ,{ Component }from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Shop from '../Shop';
import TopMenu from '../TopMenu';
import Statistic from '../Statistic';



class Router extends Component{
    render(){
        return (
            <BrowserRouter>
            <TopMenu />
            <Switch>
                <Route path='/' component={Shop} exact/>
                <Route path='/statistic' component={Statistic} exact/>
                
                <Redirect to='/' />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;