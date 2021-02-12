// Using Celebrate to validate user inputs
const { Joi, Segments } = require("celebrate");

module.exports = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().max(255).required(),
    event: Joi.string().max(255).required(),
    event_date: Joi.number().integer().required(),
    description: Joi.string(),
  }),
};