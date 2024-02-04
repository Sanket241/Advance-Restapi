const mongoose = require('mongoose')

const Connectdb = async () => {
    try {
        await mongoose.connect(process.env.URL)
        console.log("Database is connect")
    } catch (error) {
        console.log(error)
    }
}
module.exports = Connectdb