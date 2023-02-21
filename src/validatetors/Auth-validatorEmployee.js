const employeeRegisterSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "any.required": "first name is required",
    "string.empty": "first name is required",
    "string.base": "first name must be a string"
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "lastName is required"
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "email is required"
  }),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    "string.empty": "password is required",
    "string.alphanum": "password must contain number or alphabet",
    "string.min": "password mush have at least 6 characters"
  }),

  telephoneNumber: Joi.string()
    .alphanum()
    .min(10)
    .required()
    .trim()
    .pattern(/^[0-9]{10}$/)
    .messages({
      "string.empty": "telephoneNumber is required",
      "string.alphanum": "telephoneNumber must contain number or alphabet",
      "string.min": "telephoneNumber mush have at least 10 characters"
    }),
  username: Joi.string().trim().required().messages({
    "any.required": "user name is required",
    "string.empty": "user name is required",
    "string.base": "user name must be a string"
  })
});
