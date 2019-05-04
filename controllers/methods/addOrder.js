const db = require('../../models/Order/order_DB');


module.exports = async (req, res, next) => {
   const {name,img,price,day,month,year} = JSON.parse(req.body);
   
   let result = await db.saveNewOrder(name,img,price,day,month,year);
   if(result._id){
      res.status(201).json(`Your order (${result.name}) has been successful :)`);
   }else{
      res.status(204).json(`Your order (${result.name}) has been failed :)`);
   }
}