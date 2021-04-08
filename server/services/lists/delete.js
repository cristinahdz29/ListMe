const { Lists } = require("../../models");

// to delete a list -- need list_id
// params = req.params (will send list_id in params)
// logic or function used to delete the list
module.exports = async (params) => {
  Lists.destroy({
    where: {
      list_id: params.listId,
    },
  });
};
