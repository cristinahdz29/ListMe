// LOGIC TO CREATE A LIST

// require the List model
const { Lists, Users } = require("../../models");

/**
 * Creates a list
 * @example <caption>Example usage of method1.</caption>
 * @param {Object} payload user values needed for list creation
 * @param {Object} user_id user id needed to validate user
 * @returns {Object} List object
 */

module.exports = async (payload, user_id) => {
    
    const list = await Lists.create({
      title: payload.title,
      event: payload.event,
      event_date: payload.event_date,
      description: payload.description,
      user_id: user_id, // from jsonwebtoken
    });

    const fullList = await Lists.findOne({
        where: {
            list_id: list.list_id
        },
        include: { model: Users }
    })

    console.log(fullList)
    return fullList.toJSON();
}