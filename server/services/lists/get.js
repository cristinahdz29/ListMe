
// Logic to get list details (name, event, eventDate, etc to display on ViewList Component)
const {Lists} = require('../../models') // requiring model

// params = req.params
module.exports = async (params) => {
    const list = await Lists.findOne({
        where: {
            list_id: params.listId
        }
    })

    if (!list) {
        return null
    }
    return list.toJSON()
}