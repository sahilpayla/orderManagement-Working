const productModels=require('../Models/productModels')
const mongoose=require('mongoose')
const {isValidRequestBody, isValid } = require("../validator/validator")


const createProduct=async function(req,res){
    try {
        let data=req.body
        const{productName,brand,price}=data

        if(!isValidRequestBody(data)){
            return res.status(400).send({status:false,msg:"Data is required."})
        }
        if(!isValid(productName)){
            return res.status(400).send({status:false,msg:"Product Name is required"})
        }
        if(!(/^[a-zA-Z ]+$/.test(productName))){
            return res.status(400).send({status:false,msg:"Product Name is not valid."})
        }
        const checkProduct=await productModels.findOne({productName:productName})
        if(checkProduct){
            return res.status(409).send({status:true,msg:"Product Name is already present."})
        }
        if(!isValid(brand)){
            return res.status(400).send({status:false,msg:"Brand is required"})
        }
        if(!(/^[a-zA-Z ]+$/.test(brand))){
            return res.status(400).send({status:false,msg:"Brand is not valid."})
        }
        if(!price)
            {return res.status(400).send({status:false,msg:"Price must be in number."})}
        
        
        const saveProduct=await productModels.create(data)
        res.status(201).send({status:true,msg:"successfully product created.",saveProduct})
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports={
    createProduct
}