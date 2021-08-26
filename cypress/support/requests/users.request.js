Cypress.Commands.add('getAllUsers', () => {
  cy.request({
    method: 'GET',
    url: 'usuarios'
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('getUserById', id => {
  cy.request({
    method: 'GET',
    url: `usuarios/${id}`
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('postUser', payload => {
  cy.request({
    method: 'POST',
    url: 'usuarios',
    body: payload,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('deleteUser', id => {
  cy.request({
    method: 'DELETE',
    url: `usuarios/${id}`,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('putUser', (id, payload) => {
  cy.request({
    method: 'PUT',
    url: `usuarios/${id}`,
    body: payload,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})
