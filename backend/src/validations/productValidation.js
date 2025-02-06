const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  category: Joi.string().valid("Eletrônicos", "Roupas", "Calçados", "Alimentos").required(),
  price: Joi.number().positive().required(),
  image: Joi.string().uri().required(),
});

module.exports = { productSchema };
