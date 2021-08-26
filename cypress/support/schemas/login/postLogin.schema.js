const Joi = require('joi')

const postLoginSchema = Joi.object({
  message: Joi.string(),
  authorization: Joi.string()
})

export default postLoginSchema
