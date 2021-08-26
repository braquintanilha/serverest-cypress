const Joi = require('joi')

const postProductsSchema = Joi.object({
  message: Joi.string(),
  _id: Joi.string()
})

export default postProductsSchema
