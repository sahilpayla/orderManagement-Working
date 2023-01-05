const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    customerId: {
        type: ObjectId,
        ref: 'customer',
        required: true
    },

    productId: {
        type: ObjectId,
        ref: 'Product',
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        default: 1
    },

    totalPrice: {
        type: Number,
        required: true
    },
    totalOrder:{
        type:Number
    },
    discount:{
        type:Number,
        default:0
    }

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)