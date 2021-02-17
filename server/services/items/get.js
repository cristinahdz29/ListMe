// Logic to get all items of a list
const { Items } = require("../../models")

// payload = req.body
 // params = req.params
module.exports = async (params) => {
    const items = await Items.findAll({
        where: {
            list_id: params.list_id
        }
    })
    //console.log(items)
    const formattedItems = items.map(item => {
        const data = item.toJSON()
        return data
    })
    //console.log(formattedItems)
    return formattedItems
}