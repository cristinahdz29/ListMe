// LOGIC TO Create (add) item for a list


const createItem = require("../../services/items/create") // requiring service for creating an item
const renderItem = require("../../views/items") // requiring view for item

module.exports =  async (req, res, next) => {
    if (!req.user_id) {
      res.status(422).send({ error: "Missing Student Id" });
    } // error message sent back if no webtoken recieved

    const item = await createItem(req.body, req.params)
    const payload = await renderItem(item)
    res.status(201).json(payload)
}