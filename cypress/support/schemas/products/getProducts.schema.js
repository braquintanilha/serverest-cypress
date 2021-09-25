const Joi = require('joi')

const getProductsSchema = Joi.object({
  quantidade: Joi.number(),
  produtos: Joi.array().items(
    Joi.object({
      nome: Joi.string(),
      preco: Joi.number(),
      descricao: Joi.string(),
      quantidade: Joi.number(),
      imagem: Joi.string(),
      _id: Joi.string()
    })
  )
})

export default getProductsSchema
