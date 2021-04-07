// logic to delete an item

// require items table form database
const { Items } = require("../../models");

// need to delete an item ==> with item_id, list_id

// payload = req.body (item_id)
// params = req.params
module.exports = async (params) =>
  Items.destroy({
    where: {
      item_id: params.itemId,
      list_id: params.listId,
    },
  });
