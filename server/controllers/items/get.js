// LOGIC TO GET ALL ITEMS FOR A SPECIFIC LIST

const getItems = require("../../services/items/get") // service

// view?
const renderItem = require("../../views/items")

module.exports = async (req, res, next) => {
    const items = await getItems(req.params)

    //const payload =  await renderItem(items)
    res.status(201).json(items);
}