Cypress.Commands.add('postCart', (token, payload) => {
  cy.request({
    method: 'POST',
    url: 'carrinhos',
    headers: { Authorization: token },
    body: payload,
    failOnStatusCode: false
  }).then(response => {
    return response
  })
})
