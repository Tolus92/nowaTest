// model pour infos DB
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    order_number: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Order', orderSchema);