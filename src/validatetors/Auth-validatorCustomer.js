import * as Joi from "joi";

const customerRegisterSchema = Joi.object({
  username: Joi.string().trim().required().messages({
    "any.required": "user name is required",
    "string.empty": "user name is required",
    "string.base": "user name must be a string"
  }),

  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "email is required"
  }),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    "string.empty": "password is required",
    "string.alphanum": "password must contain number or alphabet",
    "string.min": "password mush have at least 6 characters"
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .trim()
    .messages({
      "any.only": "Password and Confirm password did not match",
      "string.empty": "Confirm password is required"
    }),

  companyName: Joi.string().trim().required().messages({
    "string.empty": "lastName is required"
  }),
  firstName: Joi.string().trim().required().messages({
    "any.required": "first name is required",
    "string.empty": "first name is required",
    "string.base": "first name must be a string"
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "lastName is required"
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
  address: Joi.string().trim().required().messages({
    "string.empty": "lastName is required"
  })
});

const validateRegister = (input) => {
  const { error } = customerRegisterSchema.validate(input, {
    abortEarly: false
  });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    return result;
  }
};

export default validateRegister;
