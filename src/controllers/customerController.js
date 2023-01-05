const customerModel = require("../Models/customerModels");
const { isValid,isValidEmail, isValidRequestBody,isValidtitle  } = require("../validator/validator")




const createCustomer = async function (req, res) {
    try {
        let data = req.body
        const { fname, lname, email,customerType, phone, Address } = data

        if (!isValidRequestBody(data)){
            return res.status(400).send({ status: false, message: "Data is required." })
        }
        if (!isValid(fname)) {
            return res.status(400).send({ status: false, message: "fname is required." })
        }
        if (!/^[a-zA-Z ]+$/.test(fname))
            return res.status(400).send({ status: false, message: "Invalid fname." })

        if (!isValid(lname)) {
            return res.status(400).send({ status: false, message: "lname is required." })
        }
        if (!/^[a-zA-Z ]+$/.test(lname))
            return res.status(400).send({ status: false, message: "Invalid lname." })

        if (!isValid(email)) {
            return res.status(400).send({ status: false, message: "Email id is required" })
        }
        if (!isValidEmail(email))
            return res.status(400).send({ status: false, message: "Invalid Email id." })

        let emailAlredyPresent = await customerModel.findOne({ email: email })
        if (emailAlredyPresent) {
            return res.status(409).send({ status: false, message: 'Email Already Present'});
        }

        if (!isValid(phone)) {
            return res.status(400).send({ status: false, message: "Phone number is required" })
        }
       
        if (!/^[6-9]{1}[0-9]{9}$/.test(phone))
            return res.status(400).send({ status: false, message: "Invalid Phone number." })

        let phoneAlredyPresent = await customerModel.findOne({ phone: phone })
        if (phoneAlredyPresent) {
            return res.status(409).send({ status: false, message: 'Phone Number Already Present' });
        }

        // if (!isValid(customerType)) {
        //     return res.status(400).send({ status: false, message: "customerType must be present" })
        // }
        // if (!isValidtitle(customerType)) {
        //     return res.status(400).send({ status: false, message: 'customerType should be among "regular", "gold", "platinum"' })
        // }

        if (!isValid(Address)) {
            return res.status(400).send({ status: false, message: " Address must be present." })
        }

        let userData = await customerModel.create(req.body)

        return res.status(201).send({ status: true, message: "Success", data: userData });
    }
    catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createCustomer }