const Joi = require('joi')

const postUsersSchema = Joi.object({
  nome: Joi.string(),
  email: Joi.string(),
  password: Joi.string(),
  administrador: Joi.string()
})

export default postUsersSchema
