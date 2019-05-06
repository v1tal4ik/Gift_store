const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'Id is undefined'],
    },
    name: {
        type: String,
        required: [true, 'Name is undefined'],
    },
    img: {
        type: String,
        required: [true, 'Img is undefined'],
    },
    price: {
        type: Number,
        required: [true, 'Price is undefined'],
    },
    day: {
        type: String,
        required: [true, 'Day is undefined'],
    },
    month: {
        type: String,
        required: [true, 'Month is undefined'],
    },
    year: {
        type: String,
        required: [true, 'Year is undefined'],
    }
}, {
    versionKey: false
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;