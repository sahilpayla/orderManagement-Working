const express = require('express')
const customerController = require("../controllers/customerController")
const productController=require('../controllers/productController')
const orderController = require("../controllers/orderController")
const router = express.Router()

router.post('/createCustomer',customerController.createCustomer)

router.post('/createProduct',productController.createProduct)

router.post('/createOrder',orderController.createOrder)




module.exports = router;