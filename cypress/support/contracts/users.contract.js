const Joi = require('joi')

const usersSchema = Joi.object({
  quantidade: Joi.number(),
  usuarios: Joi.array().items(
    Joi.object({
      nome: Joi.string(),
      email: Joi.string(),
      password: Joi.string(),
      administrador: Joi.boolean(),
      _id: Joi.string()
    })
  )
})

export default usersSchema
