const Joi = require('joi')

const deleteProductsSchema = Joi.object({
  message: Joi.string()
})

export default deleteProductsSchema
