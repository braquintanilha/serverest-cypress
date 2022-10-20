/// <reference types="cypress" />

describe('User tests - GET method', () => {

  it('get all users', () => {
    const schema = require('../../support/schemas/users/getUsers.schema')

    cy.getAllUsers().should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.quantidade).to.be.greaterThan(0)
      return schema.validateAsync(response.body)
    })
  })

  it('get a user by id', () => {
    cy.getAllUsers().then(responseAllUsers => {
      cy.getUserById(responseAllUsers.body.usuarios[0]._id).as('responseById')

      cy.get('@responseById').should(response => {
        expect(response.status).to.be.equal(200)
        expect(response.body.nome).to.be.equal(responseAllUsers.body.usuarios[0].nome)
        expect(response.body.email).to.be.equal(responseAllUsers.body.usuarios[0].email)
        expect(response.body.password).to.be.equal(responseAllUsers.body.usuarios[0].password)
        expect(response.body.administrador).to.be.equal(responseAllUsers.body.usuarios[0].administrador)
      })
    })
  })
})