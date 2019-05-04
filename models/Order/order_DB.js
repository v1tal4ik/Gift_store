const Order = require('./orderSchema');


module.exports.saveNewOrder = function (name,img,price,day,month,year) {
    const one = new Order({
        name:name,
        img:img,
        price:price,
        day:day,
        month:month,
        year:year
    });
    return one.save();
};
