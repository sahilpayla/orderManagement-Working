const mongoose = require('mongoose')

//Body validation
const isValidRequestBody = function(data) {
    return Object.keys(data).length > 0
};


//Name Validation
const isValidName = function(name) {
    const nameRegex = /^[a-zA-Z ]+$/
    return nameRegex.test(name)
}


//Email Validation 
const isValidEmail = function(email) {
    const emailRegex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
    return emailRegex.test(email.toLowerCase())
}


// const isValidtitle = (customertype) => {
//     return ["regular", "gold", "platinum"].indexOf(customertype) !== -1

// }
const isValidAddress = function(address) {
        if (typeof address === 'undefined' || address === null) return false
        if (Object.keys(address).length === 0) return false
        return true;
    }


//Value Validation
const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false
    if (typeof value === "string" && value.trim().length === 0) return false
    return true
}


//ObjectId validation
const isValidObjectId = function(ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
}

module.exports= { 
    isValidName, 
    isValidEmail, 
    // isValidtitle, 
    isValidObjectId, 
    isValidRequestBody, 
    isValid, 
    isValidAddress }