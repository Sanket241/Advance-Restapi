const User = require('../Model/user-model')
const getAlluser = async (req, resp) => {
    try {
        //this use for if you search wrong text then show rest data if result is not present in database
        const { company, name, featured, sort, select } = req.query
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
        let apiData = User.find(queryObject)
        if (sort) {
            let sortFix = sort.replace(",", " ");
            apiData = apiData.sort(sortFix)
        }
        if (select) {
            let selectFix = select.split(",").join(" ");
            apiData = apiData.select(selectFix)

        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 3;

        let skip = (page - 1) * limit;
        apiData = apiData.skip(skip).limit(limit);
        console.log(queryObject)

        const response = await apiData
        console.log(response)
        resp.status(200).json({ response, nbHits: response.length })
    } catch (error) {
        console.log(error)
    }


}
const getAlluserTesting = async (req, resp) => {
    try {
        const response = await User.find(req.query).select("price name")
        console.log(response)
        resp.status(200).json({ response })
        console.log(req.query)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getAlluser, getAlluserTesting }