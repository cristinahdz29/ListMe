const renderUser = require("./users");

module.exports = (list, user) => {
  const output = {
    list_id: list.list_id,
    title: list.title,
    event: list.event,
    event_date: list.event_date,
    description: list.description,
  };

  if (user) {
    output.user = renderUser(user);
  }

  return output;
};
