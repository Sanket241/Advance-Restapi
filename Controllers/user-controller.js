const User = require('../Model/user-model')
const getAlluser = async (req, resp) => {
    try {
        const { name, price, featured, rating, createdAt, company } = req.body
        const response = await User.find()
        // console.log(response)


        resp.status(200).json({ response })
    } catch (error) {
        console.log(error)
    }
}
const getAlluserTesting = async (req, resp) => {
    try {
        resp.status(200).json({ msg: "Hello from getAlluser Testing" })
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getAlluser, getAlluserTesting }