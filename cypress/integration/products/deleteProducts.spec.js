describe('Products tests - DELETE method', () => {
  let tokenAdmin
  const faker = require('faker')
  const payload = {
    nome: faker.commerce.productName(),
    preco: faker.commerce.price(),
    descricao: faker.commerce.productDescription(),
    quantidade: faker.datatype.number()
  }

  beforeEach(() => {
    cy.getToken({ administrador: true }).then(token => {
      tokenAdmin = token
      cy.postProduct(tokenAdmin, payload).as('responseProduct')
    })
  })

  it('delete a product', () => {
    cy.get('@responseProduct').then(response => {
      cy.deleteProduct(tokenAdmin, response.body._id).should(response => {
        expect(response.status).to.be.equal(200)
        expect(response.body.message).to.be.equal('Registro excluído com sucesso')
      })
    })
  })

  it('error by product used in a cart ', () => {
    const cartPayload = require('../../fixtures/carts')

    cy.get('@responseProduct').then(response => {
      cartPayload.produtos[0].idProduto = response.body._id

      cy.postCart(tokenAdmin, cartPayload)
      cy.deleteProduct(tokenAdmin, response.body._id).should(response => {
        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('Não é permitido excluir produto que faz parte de carrinho')
      })
    })
  })

  it('error by invalid token', () => {
    cy.get('@responseProduct').then(response => {
      cy.deleteProduct(faker.datatype.uuid, response.body._id).should(response => {
        expect(response.status).to.be.equal(401)
        expect(response.body.message).to.be.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
      })
    })
  })

  it('error by null token', () => {
    cy.get('@responseProduct').then(response => {
      cy.deleteProduct('', response.body._id).should(response => {
        expect(response.status).to.be.equal(401)
        expect(response.body.message).to.be.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
      })
    })
  })

  it('error by unauthorized user', () => {
    cy.getToken({ administrador: false }).then(token => {
      cy.get('@responseProduct').then(response => {
        cy.deleteProduct(token, response.body._id).should(response => {
          expect(response.status).to.be.equal(403)
          expect(response.body.message).to.be.equal('Rota exclusiva para administradores')
        })
      })
    })
  })
})
