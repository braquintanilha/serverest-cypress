Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'login',
    body: {
      email: email,
      password: password
    },
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('getToken', (admin) => {
  const faker = require('faker')
  const payload = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    administrador: `${admin.administrador}`
  }

  cy.postUser(payload)
  cy.login(payload.email, payload.password).then(response => {
    Cypress.env('token', response.body.authorization)
    return response.body.authorization
  })
})
