describe('User tests - PUT method', () => {
  const faker = require('faker')
  const payload = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: `${faker.datatype.boolean()}`
  }

  beforeEach(() => {
    cy.postUser(payload).as('responsePost')
  })

  it('edit a user', () => {
    payload.email = faker.internet.email()

    cy.get('@responsePost').then(response => {
      cy.putUser(response.body._id, payload).should(response => {
        expect(response.status).to.be.equal(200)
        expect(response.body.message).to.be.equal('Registro alterado com sucesso')
      })
    })
  })

  it('create a user with put method', () => {
    payload.email = faker.internet.email()

    cy.putUser(faker.datatype.uuid(), payload).should(response => {
      expect(response.status).to.be.equal(201)
      expect(response.body.message).to.be.equal('Cadastro realizado com sucesso')
    })
  })

  it('error by e-mail already existing', () => {
    cy.getAllUsers().then(response => {
      payload.email = response.body.usuarios[0].email

      cy.get('@responsePost').then(response => {
        cy.putUser(response.body._id, payload).should(response => {
          expect(response.status).to.be.equal(400)
          expect(response.body.message).to.be.equal('Este email já está sendo usado')
        })
      })
    })
  })
})
