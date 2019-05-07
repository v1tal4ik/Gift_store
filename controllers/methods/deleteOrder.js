const db = require('../../models/Order/order_DB');


module.exports = async (req, res, next) => {
    const data = JSON.parse(req.body);
    let result = data.every((id)=>{
        return db.deleteOrder(id)
        .then(response=>(response===id) ? true:false)
    });

   if(result){
    db.getAllOrder().then((result)=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(404).json(`Not found :(`);
    })
   }
}