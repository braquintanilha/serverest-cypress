Cypress.Commands.add('getAllUsers', () => {
  cy.api({
    method: 'GET',
    url: 'usuarios'
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('getUserById', id => {
  cy.api({
    method: 'GET',
    url: `usuarios/${id}`
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('postUser', payload => {
  cy.api({
    method: 'POST',
    url: 'usuarios',
    body: payload,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('deleteUser', id => {
  cy.api({
    method: 'DELETE',
    url: `usuarios/${id}`,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('putUser', (id, payload) => {
  cy.api({
    method: 'PUT',
    url: `usuarios/${id}`,
    body: payload,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})