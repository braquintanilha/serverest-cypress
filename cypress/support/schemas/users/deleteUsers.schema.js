const Joi = require('joi')

const deleteUsersSchema = Joi.object({
  message: Joi.string()
})

export default deleteUsersSchema
