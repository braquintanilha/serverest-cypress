describe('User tests - GET method', () => {
  const user = require('../../fixtures/users')

  it('get all users', () => {
    cy.getAllUsers().should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.quantidade).to.be.greaterThan(0)
    })
  })

  it('get a user by id with data mass', () => {
    cy.getUserById(user.valid._id).should(response => {
      expect(response.status).to.be.equal(200)
      expect(response.body.nome).to.be.equal(user.valid.nome)
      expect(response.body.email).to.be.equal(user.valid.email)
      expect(response.body.password).to.be.equal(user.valid.password)
      expect(response.body.administrador).to.be.equal(user.valid.administrador)
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

  it('validate the get users response schema', () => {
    const usersSchema = require('../../support/contracts/users.contract')

    cy.getAllUsers().should(response => {
      return usersSchema.validateAsync(response.body)
    })
  })
})
