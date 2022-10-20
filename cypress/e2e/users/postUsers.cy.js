/// <reference types="cypress" />

describe('User tests - POST method', () => {
  const faker = require('faker')
  const payload = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: `${faker.datatype.boolean()}`
  }

  it('create a user and validade the response schema', () => {
    const schema = require('../../support/schemas/users/postUsers.schema')

    cy.postUser(payload).should(response => {
      expect(response.status).to.be.equal(201)
      expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
      schema.validateAsync(response.body)
    })
  })

  it('error by e-mail already existing', () => {
    cy.getAllUsers().then(response => {
      const user = payload
      user.email = response.body.usuarios[0].email

      cy.postUser(user).should(response => {
        expect(response.status).to.be.equal(400)
        expect(response.body.message).to.be.equal('Este email já está sendo usado')
      })
    })
  })

  it('error by user without e-mail', () => {
    const user = payload
    delete user.email

    cy.postUser(user).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.email).to.be.equal('email é obrigatório')
    })
  })

  it('error by user without name', () => {
    const user = payload
    delete user.nome

    cy.postUser(user).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.nome).to.be.equal('nome é obrigatório')
    })
  })

  it('error by user without password', () => {
    const user = payload
    delete user.password

    cy.postUser(user).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.password).to.be.equal('password é obrigatório')
    })
  })

  it('error by user without administrator info', () => {
    const user = payload
    delete user.administrador

    cy.postUser(user).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.administrador).to.be.equal('administrador é obrigatório')
    })
  })

  it('error by user without any info', () => {
    const payload = {}

    cy.postUser(payload).should(response => {
      expect(response.status).to.be.equal(400)
      expect(response.body.email).to.be.equal('email é obrigatório')
      expect(response.body.nome).to.be.equal('nome é obrigatório')
      expect(response.body.password).to.be.equal('password é obrigatório')
      expect(response.body.administrador).to.be.equal('administrador é obrigatório')
    })
  })
})
