// require the delete list service
const deleteList = require('../../services/lists/delete')

module.exports = async (req, res, next) => {
    try {
        await deleteList(req.params)
        res.sendStatus(204)
    } catch (e) {
        return res.status(500).json(e)
    }
}