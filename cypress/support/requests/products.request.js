Cypress.Commands.add('getAllProducts', () => {
  cy.request({
    method: 'GET',
    url: 'produtos'
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('getProductById', id => {
  cy.request({
    method: 'GET',
    url: `produtos/${id}`
  }).then(response => {
    return response
  })
})

Cypress.Commands.add('postProduct', (token, payload) => {
  cy.request({
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
  cy.request({
    method: 'DELETE',
    url: `produtos/${id}`,
    headers: { Authorization: token },
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})
