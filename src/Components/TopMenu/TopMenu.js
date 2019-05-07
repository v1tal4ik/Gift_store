import React ,{ Component }from 'react';
import ShopMenu from './ShopMenu';
import StatisticMenu from './StatisticMenu';


class TopMenu extends Component{
    state={
        mode:'shop'
    }

    handleChangeMod=()=>{
        this.state.mode==='shop'? this.setState({mode:'statistic'}):this.setState({mode:'shop'});
    }


    render(){
        const {mode} = this.state;
        if(mode === 'shop'){
            return (
                <ShopMenu changeMod={this.handleChangeMod}/>
            )
        }
        if(mode === 'statistic'){
            return (
                <StatisticMenu changeMod={this.handleChangeMod}/>
            )
        }
    }
}

export default TopMenu;