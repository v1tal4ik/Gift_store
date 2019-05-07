const db = require('../../models/Order/order_DB');


module.exports = async (req, res, next) => {
    let result = await db.getAllOrder();
    if(result.length){
        res.status(200).json(result);
    }else{
        res.status(404).json(`Your orders not found :(`);
    }
}