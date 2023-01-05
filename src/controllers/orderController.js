const orderModel = require("../Models/orderModels")
const customerModel = require("../Models/customerModels")
const productModel = require("../Models/productModels")
const { isValidRequestBody, isValidObjectId } = require("../validator/validator")

const createOrder = async function (req, res) {
    try {
        let data = req.body
        let { customerId, productId,quantity,totalPrice,totalOrder,discount} = data

        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, message: "Data is required." })
        }
        if (!isValidObjectId(customerId)) {
            return res.status(400).send({ status: false, message: 'customerId is not  valid.' })
        }
        let checkCustomer = await customerModel.findById({ _id: customerId })
        if (!checkCustomer) {
            return res.status(400).send({ status: false, msg: "customerId not found." })
        }
        if (!isValidObjectId(productId)) {
            return res.status(400).send({ status: false, message: 'productId is not a valid.' })
        }
        let checkProduct = await productModel.findById({ _id: productId })
        if (!checkProduct) {
            return res.status(400).send({ status: false, msg: "productId not found." })
        }

    
        totalPrice = quantity * checkProduct.price
        
      

        let numberOfOrders = await orderModel.find({ customerId:customerId })
         totalOrder = numberOfOrders.length + 1

        data.totalOrder = totalOrder

        if (totalOrder == 10) {
            await customerModel.findOneAndUpdate({ _id:customerId }, {  customerType: "Gold" }, { new: true })
        }

        if (totalOrder > 10 && totalOrder < 20) {
            discount = totalPrice * 10 / 100
            totalPrice = totalPrice - discount

            data.discount = discount
        data.totalPrice = totalPrice
        }

        if (totalOrder == 20) {
            await customerModel.findOneAndUpdate({ _id:customerId }, { customerType: "platinum" }, { new: true })
        }
        if (totalOrder > 20) {
            discount = price * 20 / 100
            totalPrice = totalPrice - discount

            data.discount = discount
        data.totalPrice = totalPrice
        }
        // data.discount = discount
        // data.totalPrice = totalPrice

        let saveOrder = await orderModel.create(data)
        return res.status(201).send({status:true,msg:"order created.",saveOrder})
        

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = {
    createOrder
}