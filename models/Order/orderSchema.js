const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name undefined'],
    },
    img: {
        type: String,
        required: [true, 'Img undefined'],
    },
    price: {
        type: Number,
        required: [true, 'Price undefined'],
    },
    day: {
        type: String,
        required: [true, 'Day undefined'],
    },
    month: {
        type: String,
        required: [true, 'Month undefined'],
    },
    year: {
        type: String,
        required: [true, 'Year undefined'],
    }
}, {
    versionKey: false
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;