const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productName: { 
        type: String, 
        required: true, 
        trim: true 
    },

    brand: { 
        type: String, 
        required: true, 
        trim: true 
    },

    price: { 
        type: Number, 
        required: true, 
        trim: true 
    },


}, { timestamps: true })

module.exports=mongoose.model('product',productSchema)