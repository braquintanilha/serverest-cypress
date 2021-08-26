const faker = require('faker')

describe('User tests - DELETE method', () => {
  beforeEach(() => {
    const payload = {
      nome: `${faker.name.findName()}`,
      email: `${faker.internet.email()}`,
      password: `${faker.internet.password()}`,
      administrador: `${faker.datatype.boolean()}`
    }

    cy.postUser(payload).as('responsePost')
    cy.login(payload.email, payload.password).as('responseLogin')
  })

  it('delete a user', () => {
    cy.get('@responsePost').then(response => {
      cy.deleteUser(response.body._id).as('responseDelete')

      cy.get('@responseDelete').should(response => {
        expect(response.status).to.be.equal(200)
        expect(response.body.message).to.be.equal('Registro excluído com sucesso')
      })
    })
  })

  it('error by cart created', () => {
    const cartPayload = require('../../fixtures/carts')

    cy.get('@responseLogin').then(response => {
      cy.postCart(response.body.authorization, cartPayload)
    })

    cy.get('@responsePost').then(response => {
      cy.deleteUser(response.body._id).should(response => {
        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('Não é permitido excluir usuário com carrinho cadastrado')
      })
    })
  })

  it('error by invalid id', () => {
    cy.deleteUser(faker.datatype.uuid()).should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.message).to.be.equal('Nenhum registro excluído')
    })
  })
})
