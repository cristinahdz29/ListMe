// Using Celebrate to validate user inputs
const { Joi, Segments } = require("celebrate");

module.exports = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().max(255).required(),
    link: Joi.string().max(255),
    quantity: Joi.number().integer().required(),
    price: Joi.number().precision(2).required(), // only allows 2 decimal places
    description: Joi.string(),
  }),
  [Segments.PARAMS]: Joi.object().keys({
    list_id: Joi.number().integer().required(),
  }),
};
