const User = require('../Model/user-model')
const getAlluser = async (req, resp) => {
    try {
        //this use for if you search wrong text then show rest data if result is not present in database
        const { company, name, featured } = req.query
        const queryObject = {};
        if (company) {
            queryObject.company = company;
        }
        if (name) {
            queryObject.name = { $regex: name, $options: "i" }; // i is present CASE INSESITIVE
            // regex se jab hum iphone search karenge to iphone hi ayega par regex use karke iphone or iphone10 ..... or bhhi related stuff ayega 
        }
        if (featured) {
            queryObject.featured = featured
        }
        console.log(queryObject)

        const response = await User.find(queryObject)
        console.log(response)
        resp.status(200).json({ response })
    } catch (error) {
        console.log(error)
    }


}
const getAlluserTesting = async (req, resp) => {
    try {
        const response = await User.find(req.query)
        console.log(response)
        resp.status(200).json({ response })
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getAlluser, getAlluserTesting }