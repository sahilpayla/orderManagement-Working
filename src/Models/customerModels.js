const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    
    fname: {
        type: String,
        require: true,
        trim: true
      },
      lname: {
        type: String,
        require: true,
        trim: true
      },
      email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
  
      },
      customerType: {
        type:String,
        default:"regular",
    },                         
      phone: {
        type: String,
        require: true,
        unique: true,
        trim: true
      },
                                           
      Address: {
        type:String,
        required:true,
      }
      
      },
    { timestamps: true });

    module.exports=mongoose.model('customer',customerSchema)