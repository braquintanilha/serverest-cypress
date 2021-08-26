const Joi = require('joi')

const putUsersSchema = Joi.object({
  message: Joi.string()
})

export default putUsersSchema
