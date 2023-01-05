const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const route=require('./routes/route')
const app=express()

app.use(bodyparser.json())


mongoose.set('strictQuery', true)
mongoose
.connect("mongodb+srv://Jagcho:71nEXJtXcYfVx8T6@cluster0.5bg4mzz.mongodb.net/anonymus_Collection")
.then(()=>console.log("mongoDB is connected"))
.catch((error)=>console.log(error))


app.use('/',route)

app.listen(4000,function(){
    console.log("express app is running on PORT " + (4000))
})