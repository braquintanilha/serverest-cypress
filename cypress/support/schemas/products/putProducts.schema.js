const Joi = require('joi')

const putProductsSchema = Joi.object({
  message: Joi.string()
})

export default putProductsSchema
