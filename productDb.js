require("dotenv").config()
const User = require('./Model/user-model')
const Connectdb = require('./Db/Conn')
const ProductJson = require('./product.json')
const Start=async()=>{
    try {
    await Connectdb(process.env.URL)        
    await User.create(ProductJson)
        console.log("data")
    } catch (error) {
        console.log(error)
    }
}
Start()