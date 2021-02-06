const { Joi, Segments } = require("celebrate");

module.exports = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().max(255).email().required(),
    first_name: Joi.string().max(255).required(),
    last_name: Joi.string().max(255).required(),
    password: Joi.string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .required(),
  }),
};
