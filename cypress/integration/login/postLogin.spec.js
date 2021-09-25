/// <reference types="cypress" />

describe('Login tests - POST method', () => {
  const user = require('../../fixtures/users')

  it('succesfully login', () => {
    const schema = require('../../support/schemas/login/postLogin.schema')
    cy.postUser(user.valid)

    cy.login(user.valid.email, user.valid.password).should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.message).to.be.equal('Login realizado com sucesso')
      return schema.validateAsync(response.body)
    })
  })

  it('error by incorret user/password', () => {
    cy.login(user.incorrect.email, user.incorrect.password).should(response => {
      expect(response.status).to.be.equal(401)
      expect(response.body.message).to.be.equal('Email e/ou senha inválidos')
    })
  })

  it('error by invalid e-mail', () => {
    cy.login(user.invalid.email, user.valid.password).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.email).to.be.equal('email deve ser um email válido')
    })
  })

  it('error by null e-mail', () => {
    cy.login(user.null.email, user.valid.password).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.email).to.be.equal('email não pode ficar em branco')
    })
  })

  it('error by null password', () => {
    cy.login(user.valid.email, user.null.password).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.password).to.be.equal('password não pode ficar em branco')
    })
  })
})
