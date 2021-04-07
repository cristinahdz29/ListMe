// need to provide list_id in the params
// must be logged in to get list details, make sure have the jsonwebtoken in in place

// require getList service
const getList = require('../../services/lists/get')
// require view for lists
const renderList = require('../../views/lists')

module.exports = async (req, res, next) => {
    const list = await getList(req.params)

    const payload = await renderList(list)
    res.status(201).json(payload)
}