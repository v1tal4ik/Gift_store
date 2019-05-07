const db = require('../../models/Order/order_DB');


module.exports = async (req, res, next) => {
    let {day,month,year} = JSON.parse(req.body);
    if(day==='day'){day=''}
    if(month==='month'){month=''}
    if(year==='year'){year=''}

    if(!day&& !month &&!year){
        //getAllOrders
        let result = await db.getAllOrder();
        res.status(200).json(result);
    }else{
        //filterOrders
        let strYear = year.toString();
        let result = await db.getFilterOrder(day,month,strYear)
        res.status(200).json(result);
    }
}