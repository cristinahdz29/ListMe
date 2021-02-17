// LOGIC TO CREATE/ADD ITEM TO A LIST

const { Items } = require("../../models")

/**
 * Creates a list
 * @example <caption>Example usage of method1.</caption>
 * @param {Object} payload user values needed for list creation
 * @param {Object} user_id user id needed to validate user
 * @returns {Object} List object
 */

 // payload = req.body
 // params = req.params
 module.exports =  async (payload, params) => {

    const item = await Items.create({
        title: payload.title,
        description: payload.description,
        quantity: payload.quantity,
        price: payload.price,
        link: payload.link,
        list_id: params.list_id
    })

    return item.toJSON()
 }