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

module.exports.getFilterOrder = function (days,months,years) {
    let option={};
    if(days){option.day=days};
    if(months){option.month=months}
    if(years){option.year=years}
    return Order.find(option);
};

module.exports.deleteOrder = function (number) {
    return Order.findOneAndDelete({id:number});
};

