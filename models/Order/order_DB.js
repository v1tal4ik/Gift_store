const Order = require('./orderSchema');


module.exports.saveNewOrder = function (name,img,price,day,month,year) {
    const id = Math.floor(Math.random() * 1000000);
    const order = new Order({
        id:id,
        name:name,
        img:img,
        price:price,
        day:day,
        month:month,
        year:year
    });
    return order.save();
};

module.exports.getAllOrder = function () {
    return Order.find({});
};

