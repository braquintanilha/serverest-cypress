Cypress.Commands.add('getAllProducts', () => {
  cy.api({
    method: 'GET',
    url: 'produtos'
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('getProductById', id => {
  cy.api({
    method: 'GET',
    url: `produtos/${id}`
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('postProduct', (token, payload) => {
  cy.api({
    method: 'POST',
    url: 'produtos',
    headers: { Authorization: token },
    body: payload,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('deleteProduct', (token, id) => {
  cy.api({
    method: 'DELETE',
    url: `produtos/${id}`,
    headers: { Authorization: token },
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('putProduct', (token, id, payload) => {
  cy.api({
    method: 'PUT',
    url: `produtos/${id}`,
    body: payload,
    headers: { Authorization: token },
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})
