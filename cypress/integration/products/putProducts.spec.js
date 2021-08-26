describe('Product tests - PUT method', () => {
  let tokenAdmin
  const faker = require('faker')
  const payload = {
    nome: faker.commerce.productName(),
    preco: faker.commerce.price(),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.datatype.number()
  }

  beforeEach(() => {
    payload.nome = faker.commerce.productName()

    cy.getToken({ administrador: true }).then(token => {
      tokenAdmin = token
      cy.postProduct(tokenAdmin, payload).as('responsePost')
    })
  })

  it('edit a product', () => {
    payload.nome = faker.commerce.productName()

    cy.get('@responsePost').then(response => {
      cy.putProduct(tokenAdmin, response.body._id, payload).should(response => {
        expect(response.status).to.be.equal(200)
        expect(response.body.message).to.be.equal('Registro alterado com sucesso')
      })
    })
  })

  it('create a product with put method', () => {
    payload.nome = faker.commerce.productName()

    cy.putProduct(tokenAdmin, faker.datatype.uuid, payload).should(response => {
      expect(response.status).to.be.equal(201)
      expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
    })
  })

  it('error by product with name already exists', () => {
    cy.get('@responsePost').then(async response => {
      cy.getProductById(response.body._id).then(response => {
        cy.putProduct(tokenAdmin, response.body.nome, payload).should(response => {
          expect(response.status).to.be.equal(400)
          expect(response.body.message).to.be.equal('Já existe produto com esse nome')
        })
      })
    })
  })

  it('error by invalid token', () => {
    const schema = require('../../support/schemas/products/putProducts.schema')

    cy.get('@responsePost').then(response => {
      cy.putProduct(faker.datatype.uuid, response.body._id, payload).should(response => {
        expect(response.status).to.be.equal(401)
        expect(response.body.message).to.be.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
        return schema.validateAsync(response.body)
      })
    })
  })

  it('error by null token', () => {
    cy.get('@responsePost').then(response => {
      cy.putProduct('', response.body._id, payload).should(response => {
        expect(response.status).to.be.equal(401)
        expect(response.body.message).to.be.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
      })
    })
  })

  it('error by unauthorized user', () => {
    cy.getToken({ administrador: false }).then(token => {
      cy.get('@responsePost').then(response => {
        cy.putProduct(token, response.body._id, payload).should(response => {
          expect(response.status).to.be.equal(403)
          expect(response.body.message).to.be.equal('Rota exclusiva para administradores')
        })
      })
    })
  })
})
