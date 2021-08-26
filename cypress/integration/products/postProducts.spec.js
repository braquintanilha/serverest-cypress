describe('Product tests - POST method', () => {
  let tokenAdmin
  const faker = require('faker')
  const payload = {
    nome: faker.commerce.productName(),
    preco: faker.commerce.price(),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.datatype.number()
  }

  before(() => {
    cy.getToken({ administrador: true }).then(token => {
      tokenAdmin = token
    })
  })

  it('create a product', () => {
    const schema = require('../../support/schemas/products/postProducts.schema')

    cy.postProduct(tokenAdmin, payload).should(response => {
      expect(response.status).to.be.equal(201)
      expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
      return schema.validateAsync(response.body)
    })
  })

  it('error by product name already existing', () => {
    const product = require('../../fixtures/products')
    const payloadProduct = payload
    payload.nome = product.mouse.nome

    cy.postProduct(tokenAdmin, payloadProduct).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.message).to.be.equal('Já existe produto com esse nome')
    })
  })

  it('error by invalid token', () => {
    cy.postProduct(faker.datatype.uuid, payload).should(response => {
      expect(response.status).to.be.equal(401)
      expect(response.body.message).to.be.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
    })
  })

  it('error by null token', () => {
    cy.postProduct('', payload).should(response => {
      expect(response.status).to.be.equal(401)
      expect(response.body.message).to.be.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
    })
  })

  it('error by unauthorized user', () => {
    cy.getToken({ administrador: false }).then(token => {
      cy.postProduct(token, payload).should(response => {
        expect(response.status).to.be.equal(403)
        expect(response.body.message).to.be.equal('Rota exclusiva para administradores')
      })
    })
  })
})
