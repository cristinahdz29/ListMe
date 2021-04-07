
// require delete service
const deleteItem = require('../../services/items/delete')

module.exports = async (req, res, next) => {
    try {
        await deleteItem(req.params)
        return res.sendStatus(204)
    } catch (e) {
        return res.status(500).json(e)
    }
}