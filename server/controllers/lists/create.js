// Controller where I make a list
// need to provide title, event, description, user_id its tied to
// must be logged in to create a list so need to make sure they have a jsonwebtoken

const createList = require("../../services/lists/create")
const renderList = require("../../views/lists")

module.exports = async (req, res, next) => {
  if (!req.user_id) {
    res.status(422).send({ error: "Missing Student Id" });
  }

  const list = await createList(req.body, req.user_id)
  const payload = await renderList(list, list.User)
  res.status(201).json(payload)
  
};
